import {useState} from 'react';
import {useParams} from 'react-router-dom';
import {PostComment} from '../containers/Home/components/Main/types';

type ReturnComment<C> = {
  commentsData: PostComment[];
  fetchPostsComments: () => Promise<void>;
  addNewComment: (post: PostComment) => void;
};

export const useFetchComment = <C>(
  id: number | undefined,
  initialState: PostComment[]
): ReturnComment<C> => {
  const [commentsData, setDataComments] = useState<PostComment[]>(initialState);

  const params = useParams();

  const fetchPostsComments = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const commentsData = await response.json();
    setDataComments(commentsData);
  };

  const addNewComment = (post: PostComment) => {
    setDataComments(prevState => [post, ...prevState]);
  };

  return {commentsData, fetchPostsComments, addNewComment};
};
