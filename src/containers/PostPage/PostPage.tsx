import React, {useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {FetchPosts} from '../../hooks/useFetch';
import {PostType} from '../Home/components/Main/types';
import {Post, Styled} from '../Home/components/Main/components/Post/Post';
import {Action} from '../Home/components/Main/components/Post/components/Action';
import {FaRegComment, FaRetweet} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiShare} from 'react-icons/fi';

interface PostProps {
  title?: string;
  body?: string;
  id?: number;
  userId?: number;
}

export const PostPage = ({title, body, id, userId}: PostProps) => {
  const params = useParams();
  const location = useLocation();

  const {data: posts, FetchFromApi} = FetchPosts<PostType>(`posts/${params.id}`, {} as PostType[]);
  // console.log('post', data);

  useEffect(() => {
    // if ((location.state as any).id) {
    //   FetchFromApi();
    // }
    console.log('location.state', location.state);
  }, []);

  return (
    <div className="col-6">
      Post number {params.id}
      <Styled.Container>
        <Styled.AdditionalInfo>{(location.state as any)?.id}</Styled.AdditionalInfo>
        <Styled.Wrapper>
          <Styled.Title>{(location.state as any)?.userId}</Styled.Title>
          <Styled.Avatar src="https://i.pravatar.cc/100" />
          <Styled.MainContent>
            <Styled.Title>{(location.state as any)?.title}</Styled.Title>
            <Styled.Content>{(location.state as any)?.body}</Styled.Content>
            <Styled.Actions>
              <Action icon={<FaRegComment />} actionNumber={444} />
              <Action icon={<FaRetweet />} actionNumber={151} />
              <Action icon={<AiOutlineHeart />} actionNumber={1941} />
              <Action icon={<FiShare />} actionNumber={0} />
            </Styled.Actions>
          </Styled.MainContent>
        </Styled.Wrapper>
      </Styled.Container>
      {/* {posts?.map(post => {
        return <Post key={post.id} />;
      })} */}
      {posts &&
        posts.length > 0 &&
        posts.map(post => {
          return <Post key={post.id} />;
        })}
    </div>
  );
};
