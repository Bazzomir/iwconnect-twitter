import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, fetchComments, patchComment } from '../../../../../../state/comments/comments.thunks';
import { selectCommentsByPostId } from '../../../../../../state/comments/comments.selector';
import { AddComments } from '../AddComment/AddComment';
import { PostComment } from '../../types';

export const PostPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  const selectComments = useMemo(() => selectCommentsByPostId(postId), [postId]);
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editedCommentBody, setEditedCommentBody] = useState('');

  const comments = useSelector(selectComments);

  useEffect(() => {
    if (id && comments.length === 0) {
      dispatch(fetchComments(postId) as any);
    }
  }, [id, comments.length, dispatch]);

  console.log("POST ID:", postId);
  console.log("COMMENTS:", comments);


  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment: PostComment) => {
        const isMine = comment.isLocal;
        const isEditing = editingCommentId === comment.id;
        <div key={comment.id}>
          <b>{comment.name}</b>
          {isEditing ? (
            <>
              <textarea value={editedCommentBody} onChange={(e) => setEditedCommentBody(e.target.value)} style={{ width: '100%', marginTop: '5px' }} />
              <div style={{ marginTop: '5px' }}>
                <button onClick={() => { dispatch(patchComment(postId, comment.id, editedCommentBody) as any); setEditingCommentId(null) }}>Save</button>
                <button onClick={() => setEditingCommentId(null)} style={{ marginLeft: '10px' }}>Cancel</button>
              </div>
            </>
          ) : (
            <p>{comment.body}</p>
          )}
          {isMine && !isEditing && (
            <div>
              <button onClick={() => { setEditingCommentId(comment.id); setEditedCommentBody(comment.body); }}>Edit</button>
              <button onClick={() => dispatch(deleteComment(postId, comment.id) as any)} style={{ marginLeft: '10px' }}>Delete</button>
            </div>
          )}
        </div>
      })}

      {id && <AddComments postId={Number(id)} />}
    </div>
  );
};
