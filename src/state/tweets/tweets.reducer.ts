import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import { TweetsState } from './tweets.types';
import * as actions from './tweets.actions';

const INITIAL_STATE: TweetsState = {
    items: [],
    loading: false,
    error: null,
};

export const tweetsReducer = (state: TweetsState = INITIAL_STATE, action: Action): TweetsState => {
    if (isType(action, actions.fetchTweetsStart)) {
        return { ...state, loading: true, error: null };
    }

    if (isType(action, actions.fetchTweetsSuccess)) {
        return { ...state, loading: false, items: action.payload };
    }

    if (isType(action, actions.fetchTweetsError)) {
        return { ...state, loading: false, error: action.payload };
    }

    if (isType(action, actions.addTweet)) {
        return { ...state, items: [action.payload, ...state.items] };
    }

    if (isType(action, actions.deleteTweetSuccess)) {
        return { ...state, items: state.items.filter(tweet => tweet.id !== action.payload) };
    }

    if (isType(action, actions.patchTweetSuccess)) {
        const updatedTweet = action.payload;

        return {
            ...state, items: state.items.map(tweet => tweet.id === updatedTweet.id ? { ...tweet, body: updatedTweet.body } : tweet)
        };
    }

    return state;
};
