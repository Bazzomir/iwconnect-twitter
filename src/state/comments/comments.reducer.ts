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
            ...state, loading: false,
            commentsByPostId: {
                ...state.commentsByPostId,
                [postId]: comments,
            },
        };
    }

    if (isType(action, actions.fetchCommentsFailure)) {
        return { ...state, loading: false, error: action.payload };
    }

    if (isType(action, actions.addCommentSuccess)) {
        const { postId, comment } = action.payload;

        const prevComments = state.commentsByPostId[postId] ?? [];

        return {
            ...state, loading: false,
            commentsByPostId: { ...state.commentsByPostId, [postId]: [...prevComments, comment] }
        };
    }

    if (isType(action, actions.deleteCommentSuccess)) {
        const { postId, commentId } = action.payload;

        return {
            ...state, loading: false, commentsByPostId: {
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
            ...state, loading: false,
            commentsByPostId: newByPostId,
        };
    }

    if (isType(action, actions.patchCommentSuccess)) {
        const { postId, comment } = action.payload;
        const comments = state.commentsByPostId[postId] || [];

        return {
            ...state, loading: false,
            commentsByPostId: {
                ...state.commentsByPostId,
                [postId]: comments.map(c =>
                    c.id === comment.id ? { ...c, body: comment.body } : c
                ),
            },
        };
    }

    return state;
};
