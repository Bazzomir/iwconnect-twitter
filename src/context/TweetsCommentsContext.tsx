import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import type {PostComment} from '../containers/Home/components/Main/types';
import {useFetchComment} from '../hooks/useFetchComment';

interface ContextValues {
  tweetsComments: PostComment[];
  addNewComment: (postComments: PostComment) => void;
  id?: number;
}

export const TweetsCommentsContext = React.createContext<ContextValues>({
  tweetsComments: [],
  addNewComment: () => {},
});

export const TweetsCommentsContextConstructor = ({children}: {children: JSX.Element}) => {
  const params = useParams();
  const {
    commentsData: tweetsComments,
    fetchPostsComments,
    addNewComment,
  } = useFetchComment<PostComment[]>(`${params.id}/comments`, []);

  useEffect(() => {
    fetchPostsComments();
  }, [params.id]);

  return (
    <TweetsCommentsContext.Provider value={{tweetsComments, addNewComment}}>
      {children}
    </TweetsCommentsContext.Provider>
  );
};
