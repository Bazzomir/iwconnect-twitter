import styled from 'styled-components';
import type {PostType} from '../../types';
import {PostButton} from '../../../../../../components/Button/Button';
import {usePostTweet} from '../../../../../../hooks/usePostTweet';

interface Props {
  addNewTweet: (post: PostType) => void;
}

export const AddTweetPostPage = ({addNewTweet}: Props) => {
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
          placeholder="Replay your tweet"
        ></Styled.TextArea>
      </Styled.Form>
      <PostButton nameButton="Tweet" onClick={postTweet} />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    border-bottom: 1px solid lightgrey;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 100%;
    padding-bottom: 10px;
  `,
  Avatar: styled.img`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: 15px 0 0 10px;
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
    height: 75px;
    width: 100%;
    background: transparent;
    color: white;
    resize: none;
    border: none;
    &::placeholder {
      color: grey;
      position: absolute;
      text-align: center;
      margin-top: 25px;
      font-size: 20px;
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
