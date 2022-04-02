import React, {useEffect} from 'react';
import {FetchPosts} from '../../../../hooks/useFetch';
import {AddTweet} from './components/AddTweet/AddTweet';
import {Post} from './components/Post/Post';
import type {PostType} from './types';

export const Main = () => {
  const {data: posts, FetchFromApi, addNewTweet} = FetchPosts<PostType[]>('posts', []);

  useEffect(() => {
    FetchFromApi();
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
