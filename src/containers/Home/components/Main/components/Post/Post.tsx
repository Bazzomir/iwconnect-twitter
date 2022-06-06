import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {Action} from './components/Action';
import {FaRegComment, FaRetweet} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiShare} from 'react-icons/fi';
import {Modal} from 'react-bootstrap';
import {AddComments} from '../AddComments/AddComments';
import {useFetchComment} from '../../../../../../hooks/useFetchComment';
import {PostComment} from '../../types';

interface Props {
  title?: string;
  body?: string;
  id?: number;
  userId?: number;
}

export const getRandomName = () => {
  const names = ['John', 'Sarah', 'Mike', 'Elisa', 'Anne', 'Gretchen', 'Harley', 'Daisy'];
  const min = 0;
  const max = names.length;
  const rand = min + Math.random() * (max - min);
  return names[Math.floor(rand)];
};

export const Post = ({title, body, id, userId}: Props) => {
  const navigate = useNavigate();
  const [showComments, setShowComments] = useState<boolean>(false);
  const {
    commentsData: comments,
    fetchPostsComments,
    addNewComment,
  } = useFetchComment<PostComment[]>(`${id}/comments`, []);

  useEffect(() => {
    fetchPostsComments();
  }, []);

  return (
    <Styled.Container style={{padding: '3%'}}>
      <Styled.AdditionalInfo>
        {id} - {getRandomName()}
      </Styled.AdditionalInfo>
      <Styled.Wrapper>
        <Styled.Avatar src="https://i.pravatar.cc/100" />
        <Styled.MainContent>
          <a
            onClick={() => {
              navigate(`/post/${id}`, {
                state: {
                  title,
                  body,
                  id,
                  userId,
                },
              });
            }}
          >
            <Styled.Title>{title}</Styled.Title>
            <Styled.Content>{body}</Styled.Content>
          </a>
          <Styled.Actions>
            <Action
              icon={<FaRegComment />}
              actionNumber={444}
              onClick={() => {
                setShowComments(prevState => !prevState);
              }}
            />
            <Action icon={<FaRetweet />} actionNumber={151} />
            <Action icon={<AiOutlineHeart />} actionNumber={1941} />
            <Action icon={<FiShare />} actionNumber={0} />
          </Styled.Actions>
          <Modal
            id="commentsDialog"
            show={showComments}
            onHide={() => {
              setShowComments(false);
            }}
            size="lg"
          >
            <Modal.Body
              style={{
                backgroundColor: 'black',
                color: 'white',
                wordWrap: 'break-word',
              }}
            >
              <div className="row">
                <div className="col-12">
                  {comments?.map(comment => {
                    return (
                      <div className="row mt-2" style={{borderBottom: '3px solid white'}}>
                        <div className="col-12 font-weight-bold">
                          <img
                            src="https://i.pravatar.cc/100"
                            style={{
                              width: '50px',
                              height: '50px',
                              borderRadius: '100%',
                              marginRight: '10px',
                              marginTop: '5px',
                            }}
                            alt=" "
                          />
                          Title: ({comment?.id} - {getRandomName()}) - {comment?.name}
                        </div>
                        <div className="col-11 offset-md-1 offset-sm-1 offset-lg-1 mb-3">
                          <span className="font-weight-bold">Body:</span> {comment?.body}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <AddComments addNewComment={addNewComment} />
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
