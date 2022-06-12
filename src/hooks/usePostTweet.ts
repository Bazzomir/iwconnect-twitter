import {useContext, useReducer, useRef, useState} from 'react';
import {TweetsContext} from '../context/TweetsContext';

type Action =
  | {
      type: 'POST_TWEET_SUCCESS';
      payload: {
        tweet: string;
        loading: boolean;
        error: boolean;
      };
    }
  | {
      type: 'POST_TWEET_ERROR';
      payload: {
        tweet: string;
        loading: boolean;
        error: true;
      };
    }
  | {
      type: 'POST_TWEET_LOADING';
      payload: {
        tweet: string;
        loading: true;
        error: boolean;
      };
    }
  | {
      type: 'UPDATE_TWEET';
      payload: {
        tweet: string;
        loading: boolean;
        error: boolean;
      };
    };

interface State {
  tweet: string;
  loading: boolean;
  error: boolean;
}

const INITIAL_STATE: State = {
  tweet: '',
  loading: false,
  error: false,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'POST_TWEET_SUCCESS':
      return {
        tweet: action.payload.tweet,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case 'POST_TWEET_ERROR':
      return {
        tweet: action.payload.tweet,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case 'POST_TWEET_LOADING':
      return {
        tweet: action.payload.tweet,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case 'UPDATE_TWEET':
      return {
        tweet: action.payload.tweet,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

//   if (action.type === 'POST_TWEET_SUCCESS') {
//     console.log('action.payload', action.payload);
//     return {
//       tweet: action.payload.tweet,
//       loading: action.payload.loading,
//       error: action.payload.error,
//     };
//     // return action.payload;
//   }
//   if (action.type === 'POST_TWEET_ERROR') {
//     return {
//       tweet: action.payload.tweet,
//       loading: action.payload.loading,
//       error: action.payload.error,
//     };
//   }
//   if (action.type === 'POST_TWEET_LOADING') {
//     return {
//       tweet: action.payload.tweet,
//       loading: action.payload.loading,
//       error: action.payload.error,
//     };
//   }
//   return state;
// };

export const usePostTweet = () => {
  const {addNewTweet} = useContext(TweetsContext);
  // const [tweet, setTweet] = useState<string>('');
  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string>('');
  const someRef = useRef<HTMLTextAreaElement>(null);

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  // console.log('state', state);

  const postTweet = async () => {
    // setLoading(true);
    const text = someRef?.current?.value;
    try {
      dispatch({
        type: 'POST_TWEET_LOADING',
        payload: {
          tweet: '',
          loading: true,
          error: false,
        },
      });
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          // body: state.tweet,
          body: text,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      addNewTweet(data);
      dispatch({
        type: 'POST_TWEET_SUCCESS',
        payload: {
          tweet: data,
          loading: false,
          error: false,
        },
      });
    } catch (error: any) {
      // setError(error.message);
      dispatch({
        type: 'POST_TWEET_ERROR',
        payload: {
          tweet: '',
          loading: false,
          error: true,
        },
      });
    } finally {
      // setLoading(false);
      // setTweet('');
    }
  };

  return {
    postTweet,
    loading: state.loading,
    error: state.error,
    tweet: state.tweet,
    setTweet: (tweet: string) =>
      dispatch({type: 'UPDATE_TWEET', payload: {tweet: tweet, loading: false, error: false}}),
    someRef,
  };
};
