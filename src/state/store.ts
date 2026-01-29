import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { tweetsReducer } from './tweets/tweets.reducer';

const rootReducer = combineReducers({
    tweets: tweetsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
