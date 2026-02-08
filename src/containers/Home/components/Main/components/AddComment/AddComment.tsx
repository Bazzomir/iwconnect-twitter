import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { BsImage } from 'react-icons/bs';
import { BiPoll, BiSmile } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineFileGif, AiOutlineSchedule } from 'react-icons/ai';
import { PostButton } from '../../../../../../components/Button/Button';
import { addCommentSuccess } from '../../../../../../state/comments/comments.actions';

interface Props {
  postId: number;
}

export const AddComments = ({ postId }: Props) => {
  const dispatch = useDispatch();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = () => {
    if (!textareaRef.current?.value.trim()) return;

    dispatch(
      addCommentSuccess({
        postId,
        comment: {
          postId,
          id: Date.now(),
          name: 'User',
          email: 'user@twitter.com',
          body: textareaRef.current.value,
        },
      })
    );


    textareaRef.current.value = '';
  };

  return (
    <Styled.Container>
      <Styled.Avatar src="https://i.pravatar.cc/100" />
      <Styled.Form>
        <Styled.TextArea ref={textareaRef} maxLength={140} placeholder="Tweet your reply" />

        <Styled.ActionsWrapper>
          <Styled.IconsWrapper>
            <Styled.Icon><BsImage color="rgb(29,155,240)" /></Styled.Icon>
            <Styled.Icon><AiOutlineFileGif color="rgb(29,155,240)" /></Styled.Icon>
            <Styled.Icon><BiPoll color="rgb(29,155,240)" /></Styled.Icon>
            <Styled.Icon><BiSmile color="rgb(29,155,240)" /></Styled.Icon>
            <Styled.Icon><AiOutlineSchedule color="rgb(29,155,240)" /></Styled.Icon>
            <Styled.Icon><HiOutlineLocationMarker color="rgb(29,155,240)" /></Styled.Icon>
          </Styled.IconsWrapper>

          <PostButton type="button" nameButton="Tweet" onClick={submitHandler} />
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
    padding: 10px 0;
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
    width: 100%;
    margin-left: 10px;
  `,
  TextArea: styled.textarea`
    height: 100%;
    width: 100%;
    background: transparent;
    // color: ${props => props.theme.color};
    color: white;
    resize: none;
    border: none;
  `,
  ActionsWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  IconsWrapper: styled.div`
    display: flex;
  `,
  Icon: styled.div`
    margin-right: 10px;
  `,
};
