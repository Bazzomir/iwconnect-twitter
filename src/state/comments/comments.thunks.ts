import { Dispatch } from 'redux';
import * as actions from './comments.actions';
import { PostComment } from '../../containers/Home/components/Main/types';
import { RootState } from '../store';

export const fetchComments = (postId: number) => async (dispatch: Dispatch, getState: () => RootState) => {
    dispatch(actions.fetchCommentsStart());
    const cached = getState().comments.commentsByPostId[postId];

    if (cached && cached.length > 0) {
        return;
    }

    dispatch(actions.fetchCommentsStart());

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const data: PostComment[] = await res.json();

        dispatch(actions.fetchCommentsSuccess({ postId, comments: data, }));
    } catch (err: any) {
        dispatch(actions.fetchCommentsError(err.message));
    }
};

export const postComment = (postId: number, body: string) => async (dispatch: Dispatch) => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            body: JSON.stringify({
                postId,
                body,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data: PostComment = await res.json();
        dispatch(actions.addComment({ postId, comment: data, }));

    } catch (err) {
        console.error('Post comment failed', err);
    }
};

export const deleteComment = (postId: number, commentId: number) => async (dispatch: Dispatch) => {
    dispatch(actions.deleteCommentStart());
    try {
        await fetch(
            `https://jsonplaceholder.typicode.com/comments/${commentId}`,
            {
                method: 'DELETE',
            }
        );

        dispatch(actions.deleteCommentSuccess({ postId, commentId }));
        
    } catch (err) {
        dispatch(actions.deleteCommentFailure({ error: 'Delete comment ailed' }));
    }
};

export const patchComment = (postId: number, commentId: number, body: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(
            actions.patchCommentInProgress({
                postId,
                commentId,
            })
        );

        const res = await fetch(
            `https://jsonplaceholder.typicode.com/comments/${commentId}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ body }),
            }
        );

        const data: PostComment = await res.json();
        dispatch(actions.patchCommentSuccess({ postId, comment: data, })

        );
    } catch (err) {
        dispatch(actions.patchCommentFailure({ error: 'Patch comment failed', }));
    }
};