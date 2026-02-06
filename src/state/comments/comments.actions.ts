import actionCreatorFactory from 'typescript-fsa';
import { PostComment } from '../../containers/Home/components/Main/types';

const actionCreator = actionCreatorFactory('COMMENTS');

export const fetchCommentsStart = actionCreator('FETCH_START');
export const fetchCommentsSuccess = actionCreator<{ postId: number; comments: PostComment[]; }>('FETCH_SUCCESS');
export const fetchCommentsError = actionCreator<string>('FETCH_ERROR');
export const addComment = actionCreator<{ postId: number; comment: PostComment; }>('ADD_COMMENT');

export const deleteCommentStart = actionCreator<void>('DELETE_START');
export const deleteCommentSuccess = actionCreator<{ postId: number; commentId: number; }>('DELETE_SUCCESS');
export const deleteCommentFailure = actionCreator<{ error: string }>('DELETE_FAILURE');