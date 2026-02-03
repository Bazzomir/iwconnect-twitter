import { Dispatch } from 'redux';
import * as actions from './comments.actions';
import { PostComment } from '../../containers/Home/components/Main/types';

export const fetchComments = (postId: number) => async (dispatch: Dispatch) => {
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
                'Content-Type': 'application/json; charset=UTF-8',
            },
        });

        const data: PostComment = await res.json();
        dispatch(actions.addComment({ postId, comment: data, }));

    } catch (err) {
        console.error('Post comment failed', err);
    }
};
