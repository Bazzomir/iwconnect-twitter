import { Dispatch } from 'redux';
import * as actions from './tweets.actions';
import { PostType } from '../../containers/Home/components/Main/types';

export const fetchTweets = () => async (dispatch: Dispatch) => {
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
        // title: '',
        // userId: 1,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });

    const data: PostType = await res.json();

    dispatch(actions.addTweet(data));
  } catch (err) {
    console.error('Post tweet failed', err);
  }
};
