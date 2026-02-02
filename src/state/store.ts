import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { tweetsReducer } from './tweets/tweets.reducer';
import { commentsReducer } from './comments/comments.reducer';

const rootReducer = combineReducers({
    tweets: tweetsReducer,
    comments: commentsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
