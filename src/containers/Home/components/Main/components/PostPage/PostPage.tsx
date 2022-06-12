import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {FetchPosts} from '../../../../../../hooks/useFetchPost';
import {PostType, PostComment} from '../../types';
import {Post, Styled} from '../Post/Post';
import {Action} from '../Post/components/Action';
import {FaRegComment, FaRetweet} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiShare} from 'react-icons/fi';
import {Styled as StyledHeader} from '../../../../../pages/Profile/Profile';
import {getRandomName} from '../Post/Post';
import {IoMdArrowBack} from 'react-icons/io';
import {useFetchComment} from '../../../../../../hooks/useFetchComment';
import {AddCommentsPostPage} from '../AddComments/AddCommentsPostPage';
import {Modal} from 'react-bootstrap';
import {AddComments} from '../AddComments/AddComments';

export const PostPage = () => {
  const params = useParams();
  const location = useLocation();
  const [showComments, setShowComments] = useState<boolean>(false);
  const {FetchPostFromApi} = FetchPosts<PostType>(`posts/${params.id}`, {} as PostType[]);
  const {
    commentsData: comments,
    fetchPostsComments,
    addNewComment,
  } = useFetchComment<PostComment[]>(`${params.id}/comments`, []);

  useEffect(() => {
    if ((location.state as any).id) {
      FetchPostFromApi();
    }
    // console.log('location.state', location.state);
  }, []);

  useEffect(() => {
    fetchPostsComments();
  }, [params.id]);

  return (
    <div className="col-6 mt-2">
      <StyledHeader.HeaderContainer>
        <StyledHeader.FirstIcon>
          <IoMdArrowBack />
        </StyledHeader.FirstIcon>
        <StyledHeader.Header>Tweet</StyledHeader.Header>
      </StyledHeader.HeaderContainer>
      <Styled.Container>
        <Styled.AdditionalInfo>
          {(location.state as any)?.userId} {params.id} - {getRandomName()}
        </Styled.AdditionalInfo>
        <Styled.Wrapper>
          <Styled.Avatar src="https://i.pravatar.cc/100" />
          <Styled.MainContent>
            <Styled.Title>{(location.state as any)?.title}</Styled.Title>
            <Styled.Content>{(location.state as any)?.body}</Styled.Content>
          </Styled.MainContent>
        </Styled.Wrapper>
        <div
          className="col"
          style={{
            borderTop: '1px solid white',
            height: '100px',
            fontSize: '17px',
            padding: '10px',
          }}
        >
          <StyledHeader.FollowNumber>1</StyledHeader.FollowNumber>
          <StyledHeader.FollowText>Retweet</StyledHeader.FollowText>
          <StyledHeader.FollowNumber>10</StyledHeader.FollowNumber>
          <StyledHeader.FollowText>Likes</StyledHeader.FollowText>
        </div>
        <div
          style={{
            borderTop: '1px solid white',
            height: '50px',
            padding: '10px',
          }}
        >
          <Styled.Actions>
            <Action
              icon={<FaRegComment />}
              onClick={() => {
                setShowComments(prevState => !prevState);
              }}
            />
            <Action icon={<FaRetweet />} />
            <Action icon={<AiOutlineHeart />} />
            <Action icon={<FiShare />} />
          </Styled.Actions>
        </div>
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
                    <div
                      className="row mt-2"
                      key={comment.id}
                      style={{borderBottom: '3px solid lightgrey'}}
                    >
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
        <AddCommentsPostPage addNewComment={addNewComment} />
        {comments?.map(post => {
          return <Post key={post.id} {...post} />;
        })}
      </Styled.Container>
    </div>
  );
};
