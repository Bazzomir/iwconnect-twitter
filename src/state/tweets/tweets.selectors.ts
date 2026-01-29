import { RootState } from '../store';

export const selectTweets = (state: RootState) => state.tweets.items;
export const selectTweetsLoading = (state: RootState) => state.tweets.loading;
