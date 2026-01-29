import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTweet } from './components/AddTweet/AddTweet';
import { Post } from './components/Post/Post';
import { PageWrapperComponent } from '../../../PageWrapper/PageWrapperComponent';
import { fetchTweets } from '../../../../state/tweets/tweets.thunks';
import { selectTweets, selectTweetsLoading } from '../../../../state/tweets/tweets.selectors';

export const Main = () => {
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweets);
  const loading = useSelector(selectTweetsLoading);

  useEffect(() => {
    dispatch(fetchTweets() as any);
  }, [dispatch]);

  return (
    <PageWrapperComponent>
      <main className="col-12 col-md-9 col-lg-6">
        <AddTweet />

        {loading && <p style={{ color: 'white', fontSize: '50px' }} className="bold text-center h-100 mx-auto my-auto">Loading tweets...</p>}

        {!loading &&
          tweets.slice(0, 10).map(post => (
            <Post key={post.id} {...post} />
          ))}
      </main>
    </PageWrapperComponent>
  );
};
