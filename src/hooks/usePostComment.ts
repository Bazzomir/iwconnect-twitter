import {useRef, useState} from 'react';
import type {PostComment} from '../containers/Home/components/Main/types';

export const usePostComment = (fn: (post: PostComment) => void) => {
  const [tweetComment, setTweetComment] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const someRef = useRef<HTMLTextAreaElement>(null);
  //   const [postedTweet, setPostedTweet] = useState<PostType>({} as PostType);

  const postComment = async () => {
    setLoading(true);
    // @ts-ignore
    console.log('ref value', someRef, someRef.current.value);
    const text = someRef?.current?.value;
    try {
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
      const data = await response.json();
      console.log('response', data);
      //   setPostedTweet(data);
      fn(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
      setTweetComment('');
    }
  };

  return {
    postComment,
    loading,
    error,
    tweetComment,
    setTweetComment,
    // postedTweet,
    someRef,
  };
};
