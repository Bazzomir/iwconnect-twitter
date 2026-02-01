import React from 'react';
import styled from 'styled-components';
import { BsImage } from 'react-icons/bs';
import { AiOutlineFileGif, AiOutlineSchedule } from 'react-icons/ai';
import { BiPoll, BiSmile } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { PostButton } from '../../../../../../components/Button/Button';
import { usePostComment } from '../../../../../../hooks/usePostComment';
import { PostComment } from '../../types';

interface Props {
    addNewComment: (comment: PostComment) => void;
}

export const AddComment = ({ addNewComment }: Props) => {
    const { postComment, loading, error, ref } = usePostComment(addNewComment);

    return (
        <Styled.Container>
            <Styled.Avatar src="https://i.pravatar.cc/100" />
            <Styled.Form onSubmit={e => { e.preventDefault(); postComment(); }}            >
                <Styled.TextArea ref={ref} maxLength={140} placeholder="Tweet your reply" />

                <Styled.ActionsWrapper>
                    <Styled.IconsWrapper>
                        <Styled.Icon><BsImage color="rgb(29,155,240)" /></Styled.Icon>
                        <Styled.Icon><AiOutlineFileGif color="rgb(29,155,240)" /></Styled.Icon>
                        <Styled.Icon><BiPoll color="rgb(29,155,240)" /></Styled.Icon>
                        <Styled.Icon><BiSmile color="rgb(29,155,240)" /></Styled.Icon>
                        <Styled.Icon><AiOutlineSchedule color="rgb(29,155,240)" /></Styled.Icon>
                        <Styled.Icon><HiOutlineLocationMarker color="rgb(29,155,240)" /></Styled.Icon>
                    </Styled.IconsWrapper>

                    <PostButton type="submit" nameButton="Tweet" disabled={loading} />
                </Styled.ActionsWrapper>

                {error && <p style={{ color: 'red' }}>Error posting comment</p>}
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
    color: ${props => props.theme.color};
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
