import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {Action} from './components/Action';
import {FaRegComment, FaRetweet} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiShare} from 'react-icons/fi';
import {Modal} from 'react-bootstrap';
import {usePostComment} from '../../../../../../hooks/usePostComment';
import {PostComment} from '../../types';
import {AddTweet} from '../AddTweet/AddTweet';
import type {PostType} from '../../types';
import {FetchPosts} from '../../../../../../hooks/useFetch';

interface Props {
  title?: string;
  body?: string;
  id?: number;
  userId?: number;
}

export const Post = ({title, body, id, userId}: Props) => {
  const navigate = useNavigate();

  const [showComments, setShowComments] = useState<boolean>(false);
  const toggleModal = () => setShowComments(!showComments);

  const {data: posts, FetchFromApi, addNewTweet} = FetchPosts<PostType[]>('posts', []);
  const {commentsData: comments, fetchPostsComments} = usePostComment<PostComment[]>(id, []);

  useEffect(() => {
    fetchPostsComments();
    FetchFromApi();
  }, []);

  console.log('commentsData', comments);

  return (
    <Styled.Container>
      <Styled.AdditionalInfo>{id}</Styled.AdditionalInfo>
      <Styled.Wrapper>
        <Styled.Avatar src="https://i.pravatar.cc/100" />
        <Styled.MainContent>
          <a
            onClick={() => {
              navigate(`/posts/${id}`, {
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
                toggleModal();
              }}
            />
            <Action icon={<FaRetweet />} actionNumber={151} />
            <Action icon={<AiOutlineHeart />} actionNumber={1941} />
            <Action icon={<FiShare />} actionNumber={0} />
          </Styled.Actions>
          <Modal
            show={showComments}
            onHide={() => {
              setShowComments(false);
            }}
          >
            <Modal.Dialog>
              <Modal.Header style={{backgroundColor: 'black', color: 'white'}}>
                Comments for post - {title}
              </Modal.Header>
              <Modal.Body style={{backgroundColor: 'black', color: 'white'}}>
                {comments?.map(comment => {
                  return (
                    <div className="row" style={{borderBottom: '5px solid green'}}>
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
                        Title: ({comment?.id}) - {comment?.name}
                      </div>
                      <div className="col-12 mb-3">
                        <span className="font-weight-bold">Body:</span> {comment?.body}
                      </div>
                    </div>
                  );
                })}
                <AddTweet addNewTweet={addNewTweet} />
              </Modal.Body>
            </Modal.Dialog>
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
    border: 1px solid white;
    width: 100%;
    margin-bottom: 20px;
  `,
  AdditionalInfo: styled.span`
    width: 100%;
    color: white;
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
    color: white;
    text-align: left;
  `,
  Content: styled.p`
    color: white;
  `,
  Actions: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: centar;
    background: transparent;
  `,
};
