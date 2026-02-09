import { Dispatch } from 'redux';
import * as actions from './tweets.actions';
import { PostTweet } from '../../containers/Home/components/Main/types';
import { RootState } from '../store';

export const fetchTweets = () => async (dispatch: Dispatch, getState: () => RootState) => {

  const cachedTweets = getState().tweets.tweets;

  if (cachedTweets && cachedTweets.length > 0) {
    return;
  }

  try {
    dispatch(actions.fetchTweetsStart());
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    dispatch(actions.fetchTweetsSuccess(data));
  } catch (err: any) {
    dispatch(actions.fetchTweetsError(err.message));
  }
};

export const postTweet = (text: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(actions.postTweetStart());
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        body: text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data: PostTweet = {
      userId: 1,
      id: Date.now(),
      title: '',
      body: text,
    };

    dispatch(actions.postTweetSuccess(data));
  } catch (err: any) {
    dispatch(actions.postTweetError(err.message));
  }
};

export const deleteTweet = (tweetId: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(actions.deleteTweetStart());
    await fetch(
      `https://jsonplaceholder.typicode.com/posts/${tweetId}`,
      { method: 'DELETE' }
    );
    dispatch(actions.deleteTweetSuccess(tweetId));
  } catch (err: any) {
    dispatch(actions.deleteTweetError(err.message));
  }

};

export const patchTweet = (tweetId: number, body: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(actions.patchTweetStart(tweetId));
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${tweetId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body }),
      }
    );

    const data: PostTweet = await res.json();
    dispatch(actions.patchTweetSuccess(data));

  } catch (err: any) {
    dispatch(actions.patchTweetError(err.message));
  }
};