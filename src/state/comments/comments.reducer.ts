import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import * as actions from './comments.actions';
import { CommentsState } from './comments.types';
import { deleteTweetSuccess } from '../tweets/tweets.actions';

const INITIAL_STATE: CommentsState = {
    commentsByPostId: {},
    loading: false,
    error: null,
};

export const commentsReducer = (state: CommentsState = INITIAL_STATE, action: Action): CommentsState => {

    if (isType(action, actions.fetchCommentsStart)) {
        return { ...state, loading: true, error: null };
    }

    if (isType(action, actions.fetchCommentsSuccess)) {
        const { postId, comments } = action.payload;

        return {
            ...state,
            loading: false,
            commentsByPostId: {
                ...state.commentsByPostId,
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
            commentsByPostId: {
                ...state.commentsByPostId,
                [postId]: [comment, ...(state.commentsByPostId[postId] || [])],
            },
        };
    }

    if (isType(action, actions.deleteCommentSuccess)) {
        const { postId, commentId } = action.payload;

        return {
            ...state,
            commentsByPostId: {
                ...state.commentsByPostId,
                [postId]: state.commentsByPostId[postId].filter(
                    comment => comment.id !== commentId
                ),
            },
        };
    }

    if (isType(action, deleteTweetSuccess)) {
        const postId = action.payload;

        const newByPostId = { ...state.commentsByPostId };
        delete newByPostId[postId];

        return {
            ...state,
            commentsByPostId: newByPostId,
        };
    }

    return state;
};
