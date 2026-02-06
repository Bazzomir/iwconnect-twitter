import actionCreatorFactory from 'typescript-fsa';
import { PostType } from '../../containers/Home/components/Main/types';

const actionCreator = actionCreatorFactory('TWEETS');

export const fetchTweetsStart = actionCreator('FETCH_START');
export const fetchTweetsSuccess = actionCreator<PostType[]>('FETCH_SUCCESS');
export const fetchTweetsError = actionCreator<string>('FETCH_ERROR');

export const addTweet = actionCreator<PostType>('ADD_TWEET');

export const deleteTweetSuccess = actionCreator<number>('DELETE_SUCCESS');