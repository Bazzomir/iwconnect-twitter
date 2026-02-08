import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import { commentsReducer } from './comments/comments.reducer';
import { tweetsReducer } from './tweets/tweets.reducer';
import { isType } from 'typescript-fsa';
import * as userActions from './user/user.actions';

const appReducer = combineReducers({
    tweets: tweetsReducer,
    comments: commentsReducer,
});

export type RootState = ReturnType<typeof appReducer>;

const PERSIST_KEY = 'redux_state';

const loadState = (): Partial<RootState> | undefined => {
    try {
        const serializedState = sessionStorage.getItem(PERSIST_KEY);
        if (!serializedState) return undefined;
        return JSON.parse(serializedState);
    } catch {
        return undefined;
    }
};

const saveState = (state: RootState) => {
    try {
        const stateToPersist = {
            tweets: state.tweets,
            comments: state.comments,
        };
        sessionStorage.setItem(PERSIST_KEY, JSON.stringify(stateToPersist));
    } catch { }
};

const rootReducer = (state: RootState | undefined, action: any) => {
    if (isType(action, userActions.logoutSuccess)) {
        sessionStorage.clear();
        return appReducer(undefined, action);
    }

    return appReducer(state, action);
};

const preloadedState = loadState();

export const store = createStore(
    rootReducer,
    preloadedState,
    // applyMiddleware(thunk)
    composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
    saveState(store.getState());
});
