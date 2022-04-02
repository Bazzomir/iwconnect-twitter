import styled from 'styled-components';
import {BsImage} from 'react-icons/bs';
import {AiOutlineFileGif, AiOutlineSchedule} from 'react-icons/ai';
import {BiPoll, BiSmile} from 'react-icons/bi';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {BsStars} from 'react-icons/bs';
import type {PostType} from '../../types';
import {PostButton} from '../../../../../../components/Button/Button';
import {usePostTweet} from '../../../../../../hooks/usePostTweet';

interface Props {
  addNewTweet: (post: PostType) => void;
}

export const AddTweet = ({addNewTweet}: Props) => {
  const {error, loading, postTweet, someRef} = usePostTweet(addNewTweet);
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
          maxLength={140}
          ref={someRef}
          placeholder="Whats's happening?"
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
          <PostButton nameButton="Tweet" onClick={postTweet} />
        </Styled.ActionsWrapper>
      </Styled.Form>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    border: 1px solid white;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 50px;
    height: 150px;
  `,
  Avatar: styled.img`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: 10px 0 0 10px;
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
    color: white;
    resize: none;
    &::placeholder {
      color: white;
    }
  `,
  ActionsWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `,
  IconsWrapper: styled.div`
    display: flex;
    flex-direction: row;
  `,
  Icon: styled.div`
    margin-right: 10px;
  `,
};
