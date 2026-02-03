import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import * as actions from './comments.actions';
import { CommentsState } from './comments.types';

const INITIAL_STATE: CommentsState = {
    itemsByPostId: {},
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
        const { postId, comments } = action.payload;

        return {
            ...state,
            loading: false,
            itemsByPostId: {
                ...state.itemsByPostId,
                [postId]: comments,
            },
        };
    }

    if (isType(action, actions.fetchCommentsError)) {
        return { ...state, loading: false, error: action.payload };
    }

    if (isType(action, actions.addComment)) {
        const { postId, comment } = action.payload;

        return {
            ...state,
            itemsByPostId: {
                ...state.itemsByPostId,
                [postId]: [comment, ...(state.itemsByPostId[postId] || [])],
            },
        };
    }

    return state;
};
