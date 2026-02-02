import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../../../../../../state/comments/comments.thunks';
import { selectComments } from '../../../../../../state/comments/comments.selector';
import { AddComments } from '../AddComment/AddComment';
import { PostComment } from '../../types';

export const PostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);

  useEffect(() => {
    if (id) {
      dispatch(fetchComments(Number(id)) as any);
    }
  }, [id, dispatch]);

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
