import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {ReplyButton} from '../../../../../../components/Button/Button';
import {useFetchComment} from '../../../../../../hooks/useFetchComment';
import {usePostComment} from '../../../../../../hooks/usePostComment';
import {PostComment} from '../../types';

interface Props {
  addNewComment: (post: PostComment) => void;
}

export const AddCommentsPostPage = ({addNewComment}: Props) => {
  const params = useParams();
  const {postComment, loading, error, someRef} = usePostComment(addNewComment);
  const {fetchPostsComments} = useFetchComment<PostComment[]>(`${params.id}/comments`, []);

  useEffect(() => {
    fetchPostsComments();
  }, []);

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
        <ReplyButton type="submit" nameButton="Tweet" onClick={postComment} />
      </Styled.Form>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    border-bottom: 1px solid lightgrey;
    display: flex;
    flex-direction: row;
    align-items: center;
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
    display: inline-block;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    margin-left: 10px;
  `,
  TextArea: styled.textarea`
    height: 75px;
    width: 75%;
    background: transparent;
    color: white;
    resize: none;
    border: none;
    &::placeholder {
      color: grey;
      position: absolute;
      text-align: center;
      margin-top: 30px;
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
