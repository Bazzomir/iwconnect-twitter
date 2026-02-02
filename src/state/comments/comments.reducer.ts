import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import { CommentsState } from './comments.types';
import * as actions from './comments.actions';

const INITIAL_STATE: CommentsState = {
    items: [],
    loading: false,
    error: null,
};

export const commentsReducer = (
    state: CommentsState = INITIAL_STATE,
    action: Action
): CommentsState => {
    if (isType(action, actions.fetchCommentsStart)) {
        return { ...state, loading: true, error: null };
    }

    if (isType(action, actions.fetchCommentsSuccess)) {
        return { ...state, loading: false, items: action.payload };
    }

    if (isType(action, actions.fetchCommentsError)) {
        return { ...state, loading: false, error: action.payload };
    }

    if (isType(action, actions.addComment)) {
        return { ...state, items: [action.payload, ...state.items] };
    }

    return state;
};
