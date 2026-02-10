import actionCreatorFactory from 'typescript-fsa';
import { PostTweet } from '../../containers/Home/components/Main/types';

const actionCreator = actionCreatorFactory('TWEETS');

export const fetchTweetsStart = actionCreator('FETCH_TWEET_START');
export const fetchTweetsSuccess = actionCreator<PostTweet[]>('FETCH_TWEET_SUCCESS');
export const fetchTweetsError = actionCreator<{ error: string }>('FETCH_TWEET_ERROR');

export const postTweetStart = actionCreator('POST_TWEET_START');
export const postTweetSuccess = actionCreator<PostTweet>('ADD_TWEET');
export const postTweetError = actionCreator<{ error: string }>('POST_TWEET_ERROR');

export const deleteTweetStart = actionCreator<number>('DELETE_TWEET_START');
export const deleteTweetSuccess = actionCreator<number>('DELETE_SUCCESS');
export const deleteTweetError = actionCreator<{ error: string }>('DELETE_TWEET_ERROR');

export const patchTweetStart = actionCreator<number>('PATCH_TWEET_START');
export const patchTweetSuccess = actionCreator<{id:number; body:string}>('PATCH_TWEET_SUCCESS');
export const patchTweetError = actionCreator<{ error: string }>('PATCH_TWEET_ERROR');