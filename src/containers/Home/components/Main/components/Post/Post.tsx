import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Action } from './components/Action';
import { FaRegComment, FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import { Modal } from 'react-bootstrap';
import { AddComment } from '../AddComment/AddComment';
import { useFetchComment } from '../../../../../../hooks/useFetchComment';

interface Props {
  title?: string;
  body?: string;
  id?: number;
  userId?: number;
}

export const getRandomName = () => {
  const names = ['John', 'Sarah', 'Mike', 'Elisa', 'Anne', 'Gretchen', 'Harley', 'Daisy'];
  return names[Math.floor(Math.random() * names.length)];
};

export const Post = ({ title, body, id, userId }: Props) => {
  const navigate = useNavigate();
  const [showComments, setShowComments] = useState(false);

  const { comments, fetchComments, addNewComment } = useFetchComment(id ? `${id}/comments` : '');

  useEffect(() => { if (id) { fetchComments(); } }, [id]);

  return (
    <Styled.Container>
      <Styled.AdditionalInfo>
        {id} – {getRandomName()}
      </Styled.AdditionalInfo>

      <Styled.Wrapper>
        <Styled.Avatar src="https://i.pravatar.cc/100" />

        <Styled.MainContent>
          <a onClick={() => navigate(`/post/${id}`, { state: { title, body, id, userId }, })}>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Content>{body}</Styled.Content>
          </a>

          <Styled.Actions>
            <Action icon={<FaRegComment />} actionNumber={444} onClick={() => setShowComments(prev => !prev)} />
            <Action icon={<FaRetweet />} actionNumber={151} />
            <Action icon={<AiOutlineHeart />} actionNumber={1941} />
            <Action icon={<FiShare />} actionNumber={0} />
          </Styled.Actions>

          <Modal show={showComments} onHide={() => setShowComments(false)} size="lg">
            <Modal.Body style={{ backgroundColor: 'black', color: 'white' }}>
              {Array.isArray(comments) &&
                comments.map(comment => (
                  <div key={comment.id} style={{ borderBottom: '1px solid lightgrey' }}>
                    <b>
                      ({comment.id} – {getRandomName()}) {comment.name}
                    </b>
                    <p>{comment.body}</p>
                  </div>
                ))}

              <AddComment addNewComment={addNewComment} />
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
