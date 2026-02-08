import {useState} from 'react';
import type {PostTweet} from '../containers/Home/components/Main/types';

type ReturnData<T> = {
  data: PostTweet[];
  FetchPostFromApi: () => Promise<void>;
  addNewTweet: (post: PostTweet) => void;
};

export const FetchPosts = <T>(url: string, initialState: PostTweet[]): ReturnData<T> => {
  const [data, setData] = useState<PostTweet[]>(initialState);

  const FetchPostFromApi = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${url}`);
    const data = await response.json();
    setData(data);
  };

  const addNewTweet = (post: PostTweet) => {
    setData(prevState => [post, ...prevState]);
  };

  return {data, FetchPostFromApi, addNewTweet};
};
