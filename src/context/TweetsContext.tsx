import React, {useEffect} from 'react';
import {PostType} from '../containers/Home/components/Main/types';
import {FetchPosts} from '../hooks/useFetchPost';

interface ContextValues {
  tweets: PostType[];
  addNewTweet: (post: PostType) => void;
}

export const TweetsContext = React.createContext<ContextValues>({
  tweets: [],
  addNewTweet: () => {},
});

export const TweetsContextConstructor = ({children}: {children: JSX.Element}) => {
  const {data: tweets, FetchPostFromApi, addNewTweet} = FetchPosts<PostType[]>('posts', []);
  useEffect(() => {
    FetchPostFromApi();
  }, []);

  return <TweetsContext.Provider value={{tweets, addNewTweet}}>{children}</TweetsContext.Provider>;
};
