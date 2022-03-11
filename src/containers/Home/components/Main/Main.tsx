import React, {useEffect, useState} from 'react';
import {Post} from './components/Post/Post';
import type {Post as PostType} from './types';

export const Main = () => {
  const [data, setData] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchFromApi = async () => {
      const response = await fetch('http://jsonplaceholder.typicode.com/posts');
      const data: PostType[] = await response.json();
      setData(data);
    };
    fetchFromApi();
  }, []);

  // console.log('data', data);

  return (
    <main className="col-6">
      {data?.map(post => {
        return <Post key={post.id} {...post} />;
      })}
    </main>
  );
};
