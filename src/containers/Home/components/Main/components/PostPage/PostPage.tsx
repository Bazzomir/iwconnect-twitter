import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Post, Styled } from '../Post/Post';
import { Action } from '../Post/components/Action';
import { FaRegComment, FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import { IoMdArrowBack } from 'react-icons/io';
import { Modal } from 'react-bootstrap';
import { useFetchComment } from '../../../../../../hooks/useFetchComment';
import { AddComment } from '../AddComment/AddComment';
import { getRandomName } from '../Post/Post';
import { PageWrapperComponent } from '../../../../../PageWrapper/PageWrapperComponent';

export const PostPage = () => {
  const params = useParams();
  const location = useLocation();
  const [showComments, setShowComments] = React.useState(false);

  const { comments, fetchComments, addNewComment, } = useFetchComment(params.id!);

  useEffect(() => {
    fetchComments();
  }, [params.id]);

  return (
    <PageWrapperComponent>
      <div className="col-6 mt-2">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IoMdArrowBack />
          <h4 style={{ marginLeft: 10 }}>Tweet</h4>
        </div>

        <Styled.Container>
          <Styled.AdditionalInfo>
            {(location.state as any)?.userId} {params.id} – {getRandomName()}
          </Styled.AdditionalInfo>

          <Styled.Wrapper>
            <Styled.Avatar src="https://i.pravatar.cc/100" />
            <Styled.MainContent>
              <Styled.Title>{(location.state as any)?.title}</Styled.Title>
              <Styled.Content>{(location.state as any)?.body}</Styled.Content>
            </Styled.MainContent>
          </Styled.Wrapper>

          <Styled.Actions>
            <Action
              icon={<FaRegComment />}
              onClick={() => setShowComments(prev => !prev)}
            />
            <Action icon={<FaRetweet />} />
            <Action icon={<AiOutlineHeart />} />
            <Action icon={<FiShare />} />
          </Styled.Actions>

          <Modal show={showComments} onHide={() => setShowComments(false)} size="lg">
            <Modal.Body style={{ background: 'black', color: 'white' }}>
              {comments.map(comment => (
                <div key={comment.id} style={{ borderBottom: '1px solid gray' }}>
                  <strong>
                    {comment.id} – {getRandomName()}
                  </strong>
                  <p>{comment.body}</p>
                </div>
              ))}

              <AddComment addNewComment={addNewComment} />
            </Modal.Body>
          </Modal>
        </Styled.Container>
      </div>
    </PageWrapperComponent>
  );
};
