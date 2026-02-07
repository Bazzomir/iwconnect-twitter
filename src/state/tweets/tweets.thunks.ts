import { Dispatch } from 'redux';
import * as actions from './tweets.actions';
import { PostType } from '../../containers/Home/components/Main/types';
import { RootState } from '../store';

export const fetchTweets = () => async (dispatch: Dispatch, getState: () => RootState) => {

  const cachedTweets = getState().tweets.items;

  if (cachedTweets && cachedTweets.length > 0) {
    return;
  }

  dispatch(actions.fetchTweetsStart());

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    dispatch(actions.fetchTweetsSuccess(data));
  } catch (err: any) {
    dispatch(actions.fetchTweetsError(err.message));
  }
};

export const postTweet = (text: string) => async (dispatch: Dispatch) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        body: text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data: PostType = await res.json();

    dispatch(actions.addTweet(data));
  } catch (err) {
    console.error('Post tweet failed', err);
  }
};

export const deleteTweet = (tweetId: number) => async (dispatch: Dispatch) => {
  await fetch(
    `https://jsonplaceholder.typicode.com/posts/${tweetId}`,
    { method: 'DELETE' }
  );

  dispatch(actions.deleteTweetSuccess(tweetId));
};

export const patchTweet = (tweetId: number, body: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(actions.patchTweetInProgress(tweetId));

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

    const data: PostType = await res.json();
    dispatch(actions.patchTweetSuccess(data));

  } catch (err) {
    dispatch(actions.patchTweetFailure({ error: 'Patch tweet failed', })
    );
  }
};