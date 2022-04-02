import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {Action} from './components/Action';
import {FaRegComment, FaRetweet} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiShare} from 'react-icons/fi';
import {Modal} from '../../../../../../components/Modal/Modal';

interface Props {
  title?: string;
  body?: string;
  id?: number;
  userId?: number;
}
// onclick( { if(hasFocus) {
//   set State = true
//   <Modal />
// }})
// const showModal = () => {
//   <a href="/modal" style={{width: '20%'}} />;
// };

export const Post = ({title, body, id, userId}: Props) => {
  const navigate = useNavigate();
  const [showComments, setShowComments] = useState<boolean>(false);

  const toggleModal = () => setShowComments(!showComments);

  return (
    <Styled.Container>
      <Styled.AdditionalInfo>{id}</Styled.AdditionalInfo>
      <Styled.Wrapper>
        <Styled.Avatar src="https://i.pravatar.cc/100" />
        <Styled.MainContent>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Content>{body}</Styled.Content>
          <Styled.Actions>
            <Action
              icon={<FaRegComment />}
              actionNumber={444}
              onClick={() => {
                // toggleModal();
              }}
            />
            <Action icon={<FaRetweet />} actionNumber={151} />
            <Action icon={<AiOutlineHeart />} actionNumber={1941} />
            <Action icon={<FiShare />} actionNumber={0} />
          </Styled.Actions>
          {/* <Modal show={showComments} onClose={toggleModal} /> */}
          <div>
            <div
              className="modal fade"
              id="exampleModalLong"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="exampleModalLongTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                      Modal title
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">...</div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Styled.MainContent>
      </Styled.Wrapper>
      <button
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
        Navigate to somewhere
      </button>
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
