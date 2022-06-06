import {useContext, useRef, useState} from 'react';
import {TweetsContext} from '../context/TweetsContext';

export const usePostTweet = () => {
  const {addNewTweet} = useContext(TweetsContext);
  const [tweet, setTweet] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const someRef = useRef<HTMLTextAreaElement>(null);

  const postTweet = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          body: tweet,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      addNewTweet(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
      setTweet('');
    }
  };

  return {
    postTweet,
    error,
    loading,
    tweet,
    setTweet,
    someRef,
  };
};
