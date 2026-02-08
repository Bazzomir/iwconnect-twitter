import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectCommentsByPostId = (postId: number) => createSelector( (state: RootState) => state.comments.commentsByPostId, (byPostId) => byPostId[postId] ?? [] );
export const selectCommentsLoading = (state: RootState) => state.comments.loading;
export const selectCommentsError = (state: RootState) => state.comments.error;