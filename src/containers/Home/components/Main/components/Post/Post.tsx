import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { FaRegComment, FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import { Action } from './components/Action';
import { AddComments } from '../AddComment/AddComment';
import { fetchComments } from '../../../../../../state/comments/comments.thunks';
import { selectCommentsByPostId } from '../../../../../../state/comments/comments.selector';
import { PostComment } from '../../types';
import { useAuth } from '../../../../../../context/AuthContext';
import { EditDeleteBtn } from '../../../../../../components/Button/Button';
import { deleteTweet, patchTweet } from '../../../../../../state/tweets/tweets.thunks';
import { deleteComment, patchComment } from '../../../../../../state/comments/comments.thunks';

interface Props {
  title?: string;
  body?: string;
  id?: number;
  userId?: number;
  isLocal?: boolean;
}

export const getRandomName = () => {
  const names = ['John', 'Sarah', 'Mike', 'Elisa', 'Anne', 'Harley'];
  return names[Math.floor(Math.random() * names.length)];
};

export const Post = ({ title, body, id, isLocal }: Props) => {
  const postId = Number(id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedBody, setEditedBody] = useState(body || '');
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editedCommentBody, setEditedCommentBody] = useState('');
  const selectComments = useMemo(() => selectCommentsByPostId(postId), [postId]);
  const comments = useSelector(selectComments);
  const { user } = useAuth();
  const isMine = Boolean(user) && isLocal === true;

  useEffect(() => {
    if (showComments && id && comments.length === 0) {
      dispatch(fetchComments(id) as any);
    }
  }, [showComments, id, comments.length, dispatch]);

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Avatar src="https://i.pravatar.cc/100" />

        <Styled.MainContent>
          <h3>{getRandomName()}</h3>
          <Styled.Title>{title}</Styled.Title>
          {isEditing ? (
            <textarea
              value={editedBody}
              onChange={e => setEditedBody(e.target.value)}
              style={{ width: '100%' }}
            />
          ) : (
            <a onClick={() => navigate(`/post/${id}`)}>
              <Styled.Content>{body}</Styled.Content>
            </a>
          )}
          {isMine && (
            <EditDeleteBtn
              onEdit={() => setIsEditing(true)}
              onDelete={() => dispatch(deleteTweet(postId) as any)}
            />
          )}
          {isEditing && (
            <button
              onClick={() => {
                dispatch(patchTweet(id!, editedBody) as any);
                setIsEditing(false);
              }}
            >
              Save
            </button>
          )}

          <Styled.Actions>
            <Action icon={<FaRegComment />} actionNumber={comments.length} onClick={() => setShowComments(true)} />
            <Action icon={<FaRetweet />} actionNumber={22} />
            <Action icon={<AiOutlineHeart />} actionNumber={88} />
            <Action icon={<FiShare />} actionNumber={15} />
          </Styled.Actions>

          <Modal show={showComments} onHide={() => setShowComments(false)} size="lg">
            <Modal.Body style={{ background: 'black', color: 'white' }}>
              {comments.map((comment: PostComment) => {
                const isMine = comment.isLocal;
                const isEditing = editingCommentId === comment.id;

                return (
                  <div key={comment.id} style={{ borderBottom: '1px solid gray', padding: '10px 0' }}>
                    <b>
                      ({comment.id}) {comment.name}
                    </b>
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
                );
              })}

              {id && <AddComments postId={id} />}
            </Modal.Body>
          </Modal>

        </Styled.MainContent>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    alig-items: center;
    justify-content: centar;
    border-bottom: 1px solid lightgrey;
    width: 100%;
    margin-bottom: 20px;
    backgroud: ${props => props.theme.RightSide.wrapperOne.background};
    overflow: hidden;
    word-wrap: break-word;
  `,
  AdditionalInfo: styled.span`
    width: 100%;
    color: ${props => props.theme.RightSide.wrapperTwo.accountName.color};
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
  `,
  Avatar: styled.img`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: 10px;
  `,
  MainContent: styled.div`
    display: flex;
    flex: 10;
    flex-direction: column;
  `,
  Title: styled.div`
    margin: 0;
    padding: 0;
    color: ${props => props.theme.RightSide.wrapperTwo.accountName.color};
    text-align: left;
  `,
  Content: styled.p`
    color: ${props => props.theme.RightSide.wrapperTwo.accountName.color};
  `,
  Actions: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: centar;
    background: transparent;
  `,
};
