import {useReducer, useRef, useState} from 'react';
import {PostComment} from '../containers/Home/components/Main/types';

type Action =
  | {
      type: 'POST_COMMENT_SUCCESS';
      payload: {
        comment: string;
        loading: boolean;
        error: boolean;
      };
    }
  | {
      type: 'POST_COMMENT_ERROR';
      payload: {
        comment: string;
        loading: boolean;
        error: true;
      };
    }
  | {
      type: 'POST_COMMENT_LOADING';
      payload: {
        comment: string;
        loading: true;
        error: boolean;
      };
    }
  | {
      type: 'UPDATE_COMMENT';
      payload: {
        comment: string;
        loading: boolean;
        error: boolean;
      };
    };

interface State {
  comment: string;
  loading: boolean;
  error: boolean;
}

const INITIAL_STATE: State = {
  comment: '',
  loading: false,
  error: false,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'POST_COMMENT_SUCCESS':
      console.log('action.payload', action.payload);
      return {
        comment: action.payload.comment,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case 'POST_COMMENT_ERROR':
      return {
        comment: action.payload.comment,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case 'POST_COMMENT_LOADING':
      return {
        comment: action.payload.comment,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case 'UPDATE_COMMENT':
      return {
        comment: action.payload.comment,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export const usePostComment = (fn: (post: PostComment) => void) => {
  // const [tweetComment, setTweetComment] = useState<string>('');
  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string>('');
  const someRef = useRef<HTMLTextAreaElement>(null);

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  console.log('state', state);

  const postComment = async () => {
    // setLoading(true);
    // @ts-ignore
    // console.log('ref value', someRef, someRef.current.value);
    const text = someRef?.current?.value;
    try {
      dispatch({
        type: 'POST_COMMENT_LOADING',
        payload: {
          comment: '',
          loading: true,
          error: false,
        },
      });
      const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify({
          body: text,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const commentsData = await response.json();
      // console.log('response', commentsData);
      fn(commentsData);
      dispatch({
        type: 'POST_COMMENT_SUCCESS',
        payload: {
          comment: commentsData,
          loading: false,
          error: false,
        },
      });
    } catch (error: any) {
      // setError(error.message);
      dispatch({
        type: 'POST_COMMENT_ERROR',
        payload: {
          comment: '',
          loading: false,
          error: true,
        },
      });
    } finally {
      // setLoading(false);
      // setTweetComment('');
    }
  };

  return {
    postComment,
    error: state.error,
    loading: state.loading,
    comment: state.comment,
    setTweetComment: (comment: string) =>
      dispatch({type: 'UPDATE_COMMENT', payload: {comment: comment, loading: false, error: false}}),
    someRef,
  };
};
