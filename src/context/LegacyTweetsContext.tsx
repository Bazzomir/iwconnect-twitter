import React, {useEffect} from 'react';
import {PostTweet} from '../containers/Home/components/Main/types';
import {FetchPosts} from '../legacyHooks/useFetchPost';

interface ContextValues {
  tweets: PostTweet[];
  addNewTweet: (post: PostTweet) => void;
}

export const TweetsContext = React.createContext<ContextValues>({
  tweets: [],
  addNewTweet: () => {},
});

export const TweetsContextConstructor = ({children}: {children: JSX.Element}) => {
  const {data: tweets, FetchPostFromApi, addNewTweet} = FetchPosts<PostTweet[]>('posts', []);
  useEffect(() => {
    FetchPostFromApi();
  }, []);

  return <TweetsContext.Provider value={{tweets, addNewTweet}}>{children}</TweetsContext.Provider>;
};
