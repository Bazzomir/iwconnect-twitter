import {useState} from 'react';
import {useParams} from 'react-router-dom';
import type {PostComment} from '../containers/Home/components/Main/types';

export const useFetchComment = <C>(
  url: string,
  initialState: PostComment[]
): {
  commentsData: PostComment[];
  fetchPostsComments: () => Promise<void>;
  addNewComment: (postComments: PostComment) => void;
} => {
  const [commentsData, setDataComments] = useState<PostComment[]>(initialState);

  const params = useParams();

  const fetchPostsComments = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${url}`);
    const commentsData = await response.json();
    setDataComments(commentsData);
  };

  const addNewComment = (postComments: PostComment) => {
    setDataComments(prevState => [postComments, ...prevState]);
  };

  return {commentsData, fetchPostsComments, addNewComment};
};
