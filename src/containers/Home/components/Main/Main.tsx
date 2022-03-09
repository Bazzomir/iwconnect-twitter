import React, {useEffect, useState} from 'react';
import {Post} from './components/Post/Post';
import type {Post as PostType} from './types';

export const Main = () => {
  const [data, setData] = useState<PostType[]>([]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        return response.json();
      })
      .then((data: PostType[]) => setData(data));
  }, []);

  console.log('data', data);

  return (
    <main className="col-6">
      {data?.map(post => {
        return <Post key={post.id} title={post.title} content={post.body} />;
      })}
    </main>
  );
};
