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
    // Fetch Data
    if (isType(action, actions.fetchCommentsStart)) {
        return { ...state, loading: true, error: null };
    }
    if (isType(action, actions.fetchCommentsSuccess)) {
        const { postId, comments } = action.payload;
        return { ...state, loading: false, commentsByPostId: { ...state.commentsByPostId, [postId]: comments } };
    }
    if (isType(action, actions.fetchCommentsError)) {
        return { ...state, loading: false, error: "Failed to Fetch" };
    }

    // Post Data
    if (isType(action, actions.addCommentStart)) {
        return { ...state, loading: true, error: null };
    }
    if (isType(action, actions.addCommentSuccess)) {
        const { postId, comment } = action.payload;
        const prevComments = state.commentsByPostId[postId] ?? [];
        return {
            ...state, loading: false, commentsByPostId: { ...state.commentsByPostId, [postId]: [...prevComments, comment] }
        };
    }
    if (isType(action, actions.addCommentError)) {
        return { ...state, loading: false, error: "Failed to Post" };
    }

    // Delete Data
    if (isType(action, actions.deleteCommentStart)) {
        return { ...state, loading: true, error: null };
    }
    if (isType(action, actions.deleteCommentSuccess)) {
        const { postId, commentId } = action.payload;
        return {
            ...state, loading: false, commentsByPostId: {
                ...state.commentsByPostId, [postId]: state.commentsByPostId[postId].filter(comment => comment.id !== commentId)
            }
        };
    }
    if (isType(action, deleteTweetSuccess)) {
        const newByPostId = { ...state.commentsByPostId };
        delete newByPostId[action.payload];
        return { ...state, loading: false, commentsByPostId: newByPostId };
    }
    if (isType(action, actions.deleteCommentError)) {
        return { ...state, loading: false, error: "Failed to Delete" };
    }

    // Patch Data
    if (isType(action, actions.patchCommentStart)) {
        return { ...state, loading: true, error: null };
    }
    if (isType(action, actions.patchCommentSuccess)) {
        const { postId, comment } = action.payload;
        const comments = state.commentsByPostId[postId] || [];
        return {
            ...state, loading: false, commentsByPostId: {
                ...state.commentsByPostId, [postId]: comments.map(c => c.id === comment.id ? { ...c, body: comment.body } : c)
            }
        };
    }
    if (isType(action, actions.patchCommentError)) {
        return { ...state, loading: false, error: "Failed to Patch" };
    }

    return state;
};
