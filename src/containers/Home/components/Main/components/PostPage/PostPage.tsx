import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../../../../../../state/comments/comments.thunks';
import { makeSelectCommentsByPostId } from '../../../../../../state/comments/comments.selector';
import { AddComments } from '../AddComment/AddComment';
import { PostComment } from '../../types';

export const PostPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  const selectComments = useMemo(
    () => makeSelectCommentsByPostId(postId),
    [postId]
  );

  const comments = useSelector(selectComments);

  useEffect(() => {
    if (id && comments.length === 0) {
      dispatch(fetchComments(postId) as any);
    }
  }, [id, comments.length, dispatch]);

  return (
    <div>
      <h3>Comments</h3>

      {comments.map((comment: PostComment) => (
        <div key={comment.id}>
          <b>{comment.name}</b>
          <p>{comment.body}</p>
        </div>
      ))}

      {id && <AddComments postId={Number(id)} />}
    </div>
  );
};
