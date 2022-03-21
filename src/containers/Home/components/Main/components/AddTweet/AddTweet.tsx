import styled from 'styled-components';
import {FaFileImage} from 'react-icons/fa';
import type {Post as PostType} from '../../types';
import {PostButton} from '../../../../../../components/Button/Button';
import {usePostTweet} from '../../../../../../hooks/usePostTweet';

interface Props {
  addNewTweet: (post: PostType) => void;
}

export const AddTweet = ({addNewTweet}: Props) => {
  const {tweet, error, loading, postTweet, setTweet, someRef} = usePostTweet(addNewTweet);

  //   useEffect(() => {
  //     addNewTweet(postedTweet);
  //   }, [postedTweet]);

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
          //   value={tweet}
          ref={someRef}
          //   onChange={e => setTweet(e.target.value)}
          placeholder="Whats's happening?"
        ></Styled.TextArea>
        <Styled.ActionsWrapper>
          <Styled.IconsWrapper>
            <Styled.Icon>
              <FaFileImage color="rgb(29,155,240)" />
            </Styled.Icon>
            <Styled.Icon>
              <FaFileImage color="rgb(29,155,240)" />
            </Styled.Icon>
            <Styled.Icon>
              <FaFileImage color="rgb(29,155,240)" />
            </Styled.Icon>
            <Styled.Icon>
              <FaFileImage color="rgb(29,155,240)" />
            </Styled.Icon>
            <Styled.Icon>
              <FaFileImage color="rgb(29,155,240)" />
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
