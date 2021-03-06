import {useState} from 'react';
import type {PostType} from '../containers/Home/components/Main/types';

type ReturnData<T> = {
  data: PostType[];
  FetchPostFromApi: () => Promise<void>;
  addNewTweet: (post: PostType) => void;
};

export const FetchPosts = <T>(url: string, initialState: PostType[]): ReturnData<T> => {
  const [data, setData] = useState<PostType[]>(initialState);

  const FetchPostFromApi = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${url}`);
    const data = await response.json();
    setData(data);
  };

  const addNewTweet = (post: PostType) => {
    setData(prevState => [post, ...prevState]);
  };

  return {data, FetchPostFromApi, addNewTweet};
};
