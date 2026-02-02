import actionCreatorFactory from 'typescript-fsa';
import { PostComment } from '../../containers/Home/components/Main/types';

const actionCreator = actionCreatorFactory('comments');

export const fetchCommentsStart = actionCreator<void>('FETCH_COMMENTS_START');
export const fetchCommentsSuccess = actionCreator<PostComment[]>('FETCH_COMMENTS_SUCCESS');
export const fetchCommentsError = actionCreator<string>('FETCH_COMMENTS_ERROR');

export const addComment = actionCreator<PostComment>('ADD_COMMENT');
