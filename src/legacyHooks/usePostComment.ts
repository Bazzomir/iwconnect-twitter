import { useRef, useState } from 'react';
import { PostComment } from '../containers/Home/components/Main/types';

export const usePostComment = (onSuccess: (c: PostComment) => void) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const postComment = async () => {
    const text = ref.current?.value;
    if (!text) return;

    try {
      setLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify({
          body: text,
          postId: 1,
          email: 'user@twitter.com',
          name: 'Twitter User',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      const data: PostComment = await res.json();
      onSuccess(data);
      ref.current!.value = '';
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { postComment, loading, error, ref };
};
