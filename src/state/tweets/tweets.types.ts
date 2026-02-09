import { PostTweet } from '../../containers/Home/components/Main/types';

export interface TweetsState {
  tweets: PostTweet[];
  loading: boolean;
  error: string | null;
}
