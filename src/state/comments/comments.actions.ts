import actionCreatorFactory from 'typescript-fsa';
import { PostComment } from '../../containers/Home/components/Main/types';

const actionCreator = actionCreatorFactory('COMMENTS');

export const fetchCommentsStart = actionCreator('FETCH_START');
export const fetchCommentsSuccess = actionCreator<{ postId: number; comments: PostComment[]; }>('FETCH_SUCCESS');
export const fetchCommentsFailure = actionCreator<string>('FETCH_ERROR');

export const addCommentSuccess = actionCreator<{ postId: number; comment: PostComment; }>('ADD_COMMENT_SUCCESS');

export const deleteCommentStart = actionCreator<void>('DELETE_START');
export const deleteCommentSuccess = actionCreator<{ postId: number; commentId: number; }>('DELETE_SUCCESS');
export const deleteCommentFailure = actionCreator<{ error: string }>('DELETE_FAILURE');

export const patchCommentStart = actionCreator<{ postId: number; commentId: number; }>('PATCH_START');
export const patchCommentSuccess = actionCreator<{ postId: number; comment: PostComment; }>('PATCH_SUCCESS');
export const patchCommentFailure = actionCreator<{ error: string }>('PATCH_FAILURE');