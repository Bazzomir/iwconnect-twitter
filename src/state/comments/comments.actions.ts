import actionCreatorFactory from 'typescript-fsa';
import { PostComment } from '../../containers/Home/components/Main/types';

const actionCreator = actionCreatorFactory('COMMENTS');

export const fetchCommentsStart = actionCreator('FETCH_START');
export const fetchCommentsSuccess = actionCreator<{ postId: number; comments: PostComment[]; }>('FETCH_SUCCESS');
export const fetchCommentsError = actionCreator<string>('FETCH_ERROR');
export const addComment = actionCreator<{ postId: number; comment: PostComment; }>('ADD_COMMENT');
