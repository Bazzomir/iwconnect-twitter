import React from 'react';
import styled from 'styled-components';
import {BsImage} from 'react-icons/bs';
import {AiOutlineFileGif, AiOutlineSchedule} from 'react-icons/ai';
import {BiPoll, BiSmile} from 'react-icons/bi';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {PostButton} from '../../../../../../components/Button/Button';
import {usePostComment} from '../../../../../../hooks/usePostComment';
import {PostComment} from '../../types';

interface Props {
  addNewComment: (post: PostComment) => void;
}

export const AddComments = ({addNewComment}: Props) => {
  const {postComment, loading, error, someRef} = usePostComment(addNewComment);

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <p style={{color: 'white'}}>Loading...</p>
      </div>
    );
  }

  return (
    <Styled.Container>
      <Styled.Avatar src="https://i.pravatar.cc/100" />
      <Styled.Form>
        <Styled.TextArea
          ref={someRef}
          maxLength={140}
          placeholder="Tweet your reply"
        ></Styled.TextArea>
        <Styled.ActionsWrapper>
          <Styled.IconsWrapper>
            <Styled.Icon>
              <BsImage color="rgb(29,155,240)" />
            </Styled.Icon>
            <Styled.Icon>
              <AiOutlineFileGif color="rgb(29,155,240)" />
            </Styled.Icon>
            <Styled.Icon>
              <BiPoll color="rgb(29,155,240)" />
            </Styled.Icon>
            <Styled.Icon>
              <BiSmile color="rgb(29,155,240)" />
            </Styled.Icon>
            <Styled.Icon>
              <AiOutlineSchedule color="rgb(29,155,240)" />
            </Styled.Icon>
            <Styled.Icon>
              <HiOutlineLocationMarker color="rgb(29,155,240)" />
            </Styled.Icon>
          </Styled.IconsWrapper>
          <PostButton type="submit" nameButton="Tweet" onClick={postComment} />
        </Styled.ActionsWrapper>
      </Styled.Form>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 150px;
    padding: 10px 0 10px 0;
    overflow: hidden;
  `,
  Avatar: styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-top: 10px;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    margin-left: 10px;
  `,
  TextArea: styled.textarea`
    height: 100%;
    width: 100%;
    background: transparent;
    color: ${props => props.theme.color};
    resize: none;
    border: none;
    align-items: center;
    &::placeholder {
      color: grey;
      position: absolute;
      text-align: center;
      margin-top: 20px;
      font-size: 20px;
    }
  `,
  ActionsWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    overflow: hidden;
  `,
  IconsWrapper: styled.div`
    display: flex;
    flex-direction: row;
  `,
  Icon: styled.div`
    margin-right: 10px;
  `,
};
