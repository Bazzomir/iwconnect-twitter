import { useState } from 'react';
import { PostComment } from '../containers/Home/components/Main/types';

export const useFetchComment = (url: string) => {
  const [comments, setComments] = useState<PostComment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchComments = async () => {
    if (!url) return;

    try {
      setLoading(true);
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${url}`);
      const data = await res.json();

      setComments(Array.isArray(data) ? data : []);
    } catch {
      setError(true);
      setComments([]);
    } finally {
      setLoading(false);
    }
  };

  const addNewComment = (comment: PostComment) => {
    setComments(prev => Array.isArray(prev) ? [comment, ...prev] : [comment]);
  };

  return {
    comments,
    loading,
    error,
    fetchComments,
    addNewComment,
  };
};
