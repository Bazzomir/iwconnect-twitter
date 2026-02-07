import { createSelector } from 'reselect';
import { RootState } from '../store';

// export const selectCommentsByPostId = (postId: number) => (state: RootState) => state.comments?.commentsByPostId?.[postId] ?? [];

export const makeSelectCommentsByPostId = (postId: number) =>
    createSelector(
        (state: RootState) => state.comments.commentsByPostId,
        (byPostId) => byPostId[postId] ?? []
    );

export const selectCommentsLoading = (state: RootState) => state.comments.loading;
export const selectCommentsError = (state: RootState) => state.comments.error;