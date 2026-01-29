import { Dispatch } from 'redux';
import * as actions from './tweets.actions';
import { PostType } from '../../containers/Home/components/Main/types';

export const fetchTweets = () => async (dispatch: Dispatch) => {
  dispatch(actions.fetchTweetsStart());

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
      throw new Error('Failed to fetch tweets');
    }

    const data: PostType[] = await res.json();
    dispatch(actions.fetchTweetsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchTweetsError('Something went wrong'));
  }
};
