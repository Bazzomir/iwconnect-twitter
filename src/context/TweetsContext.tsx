import React, {useEffect, useState} from 'react';
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

  // const [tweets, setTweets] = useState<PostType[]>();

  //   useEffect(() => {}, []);

  //   const addNewTweet = () => {};

  //   const checkIfExistingAndReturn = (id: number) => {
  //     if (tweets.some(tweet => tweet.id === id)) {
  //       return tweets.find(tweet => tweet.id === id);
  //     } else {
  //       // fetch the post with this id
  //     }
  //   };

  return <TweetsContext.Provider value={{tweets, addNewTweet}}>{children}</TweetsContext.Provider>;
};