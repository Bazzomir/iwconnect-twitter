import actionCreatorFactory from 'typescript-fsa';
import { PostComment } from '../../containers/Home/components/Main/types';

const actionCreator = actionCreatorFactory('COMMENTS');

export const fetchCommentsStart = actionCreator('FETCH_COMMENTS_START');
export const fetchCommentsSuccess = actionCreator<{ postId: number; comments: PostComment[]; }>('FETCH_COMMENTS_SUCCESS');
export const fetchCommentsError = actionCreator<{ error: string }>('FETCH_COMMENTS_ERROR');

export const addCommentStart = actionCreator<{ postId: number; comment: PostComment; }>('ADD_COMMENT_START')
export const addCommentSuccess = actionCreator<{ postId: number; comment: PostComment; }>('ADD_COMMENT_SUCCESS');
export const addCommentError = actionCreator<{ error: string }>('ADD_COMMENT_ERROR');

export const deleteCommentStart = actionCreator<void>('DELETE_START');
export const deleteCommentSuccess = actionCreator<{ postId: number; commentId: number; }>('DELETE_SUCCESS');
export const deleteCommentError = actionCreator<{ error: string }>('DELETE_ERROR');

export const patchCommentStart = actionCreator<{ postId: number; commentId: number; }>('PATCH_START');
export const patchCommentSuccess = actionCreator<{ postId: number; comment: PostComment; }>('PATCH_SUCCESS');
export const patchCommentError = actionCreator<{ error: string }>('PATCH_ERROR');