import {useRef, useState} from 'react';
import type {PostType} from '../containers/Home/components/Main/types';

export const usePostTweet = (fn: (post: PostType) => void) => {
  const [tweet, setTweet] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const someRef = useRef<HTMLTextAreaElement>(null);
  //   const [postedTweet, setPostedTweet] = useState<PostType>({} as PostType);

  const postTweet = async () => {
    setLoading(true);
    // @ts-ignore
    console.log('ref value', someRef, someRef.current.value);
    const text = someRef?.current?.value;
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
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
      setTweet('');
    }
  };

  return {
    postTweet,
    loading,
    error,
    tweet,
    setTweet,
    // postedTweet,
    someRef,
  };
};
