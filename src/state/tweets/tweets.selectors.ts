import { RootState } from '../store';

export const selectTweets = (state: RootState) => state.tweets.tweets;
export const selectTweetsLoading = (state: RootState) => state.tweets.loading;
