import {useState} from 'react';
import type {Post as PostType} from '../containers/Home/components/Main/types';

type ReturnData<T> = {
  data: PostType[];
  fetchFromApi: () => Promise<void>;
  addNewTweet: (post: PostType) => void;
};

export const useFetch = <T>(url: string, initialState: PostType[]): ReturnData<T> => {
  const [data, setData] = useState<PostType[]>(initialState);

  const fetchFromApi = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${url}`);
    const data = await response.json();
    setData(data);
  };

  const addNewTweet = (post: PostType) => {
    setData(prevState => [post, ...prevState]);
  };

  return {data, fetchFromApi, addNewTweet};
};

export const customFetch = () => {};
