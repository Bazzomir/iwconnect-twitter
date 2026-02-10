import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import { TweetsState } from './tweets.types';
import * as actions from './tweets.actions';

const INITIAL_STATE: TweetsState = {
    tweets: [],
    loading: false,
    error: null,
};

export const tweetsReducer = (state: TweetsState = INITIAL_STATE, action: Action): TweetsState => {
    // Fetch Data 
    if (isType(action, actions.fetchTweetsStart)) {
        return { ...state, loading: true, error: null };
    }
    if (isType(action, actions.fetchTweetsSuccess)) {
        return { ...state, loading: false, tweets: action.payload };
    }
    if (isType(action, actions.fetchTweetsError)) {
        return { ...state, loading: false, error: "Failed to Fetch" };
    }

    // Post Data
    if (isType(action, actions.postTweetStart)) {
        return { ...state, loading: true, error: null };
    }
    if (isType(action, actions.postTweetSuccess)) {
        return { ...state, loading: false, tweets: [action.payload, ...state.tweets] };
    }
    if (isType(action, actions.postTweetError)) {
        return { ...state, loading: false, error: "Failed to Post" };
    }

    // Delete Data
    if (isType(action, actions.deleteTweetStart)) {
        return { ...state, loading: true, error: null };
    }
    if (isType(action, actions.deleteTweetSuccess)) {
        return { ...state, loading: false, tweets: state.tweets.filter(tweet => tweet.id !== action.payload) };
    }
    if (isType(action, actions.deleteTweetError)) {
        return { ...state, loading: false, error: "Failed to Delete" };
    }
    
    // Patch Data
    if (isType(action, actions.patchTweetStart)) {
        return { ...state, loading: true, error: null };
    }
    if (isType(action, actions.patchTweetSuccess)) {
        return {
            ...state, loading: false,
            tweets: state.tweets.map(tweet => tweet.id === action.payload.id ? { ...tweet, body: action.payload.body } : tweet)
        };
    }
    if (isType(action, actions.patchTweetError)) {
        return { ...state, loading: false, error: "Failed to Patch" };
    }

    return state;
};
