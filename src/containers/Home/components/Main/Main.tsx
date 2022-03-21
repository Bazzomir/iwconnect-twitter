import React, {useEffect} from 'react';
import {useFetch} from '../../../../hooks/useFetch';
import {AddTweet} from './components/AddTweet/AddTweet';
import {Post} from './components/Post/Post';
import type {Post as PostType} from './types';

export const Main = () => {
  const {data: posts, fetchFromApi, addNewTweet} = useFetch<PostType[]>('posts', []);

  useEffect(() => {
    fetchFromApi();
  }, []);

  console.log('data', posts);

  return (
    <main className="col-6">
      <AddTweet addNewTweet={addNewTweet} />
      {posts?.map(post => {
        return <Post key={post.id} {...post} />;
      })}
    </main>
  );
};
