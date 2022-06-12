import React, {useContext} from 'react';
import {AddTweet} from './components/AddTweet/AddTweet';
import {Post} from './components/Post/Post';
import {TweetsContext} from '../../../../context/TweetsContext';

export const Main = () => {
  const {tweets} = useContext(TweetsContext);

  return (
    <main className="col-6">
      <AddTweet />
      {tweets?.slice(0, 10)?.map((post) => {
        return <Post key={post.id}  {...post} />;
      })}
    </main>
  );
};
