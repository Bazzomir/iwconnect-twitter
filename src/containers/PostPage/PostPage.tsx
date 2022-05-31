import React, {useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {FetchPosts} from '../../hooks/useFetchPost';
import {PostType} from '../Home/components/Main/types';
import {Post, Styled} from '../Home/components/Main/components/Post/Post';
import {Action} from '../Home/components/Main/components/Post/components/Action';
import {FaRegComment, FaRetweet} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiShare} from 'react-icons/fi';
import {Styled as StyledHeader} from '../pages/Profile/Profile';
import {getRandomName} from '../Home/components/Main/components/Post/Post';
import {AddTweetPostPage} from '../Home/components/Main/components/AddTweet/AddTweetPostPage';
import {IoMdArrowBack} from 'react-icons/io';

export const PostPage = () => {
  const params = useParams();
  const location = useLocation();

  const {
    data: posts,
    FetchFromApi,
    addNewTweet,
  } = FetchPosts<PostType>(`posts/${params.id}`, {} as PostType[]);
  // console.log('post', data);

  useEffect(() => {
    if ((location.state as any).id) {
      FetchFromApi();
    }
    console.log('location.state', location.state);
  }, []);

  return (
    <div className="col-6 mt-2">
      <StyledHeader.HeaderContainer>
        <StyledHeader.FirstIcon>
          <IoMdArrowBack />
        </StyledHeader.FirstIcon>
        <StyledHeader.Header>Tweet</StyledHeader.Header>
      </StyledHeader.HeaderContainer>
      <Styled.Container>
        <Styled.AdditionalInfo>
          {(location.state as any)?.userId} {params.id} - {getRandomName()}
        </Styled.AdditionalInfo>
        <Styled.Wrapper>
          <Styled.Avatar src="https://i.pravatar.cc/100" />
          <Styled.MainContent>
            <Styled.Title>{(location.state as any)?.title}</Styled.Title>
            <Styled.Content>{(location.state as any)?.body}</Styled.Content>
          </Styled.MainContent>
        </Styled.Wrapper>
        <div
          className="col"
          style={{
            borderTop: '1px solid white',
            height: '100px',
            fontSize: '17px',
            padding: '10px',
          }}
        >
          <StyledHeader.FollowNumber>1</StyledHeader.FollowNumber>
          <StyledHeader.FollowText>Retweet</StyledHeader.FollowText>
          <StyledHeader.FollowNumber>10</StyledHeader.FollowNumber>
          <StyledHeader.FollowText>Likes</StyledHeader.FollowText>
        </div>
        <div
          style={{
            borderTop: '1px solid white',
            height: '50px',
            padding: '10px',
          }}
        >
          <Styled.Actions>
            <Action icon={<FaRegComment />} />
            <Action icon={<FaRetweet />} />
            <Action icon={<AiOutlineHeart />} />
            <Action icon={<FiShare />} />
          </Styled.Actions>
        </div>
        <div style={{borderTop: '1px solid lightgrey'}}>
          <AddTweetPostPage addNewTweet={addNewTweet} />
        </div>
      </Styled.Container>
      {posts &&
        posts.length > 0 &&
        posts.map(post => {
          return <Post key={post.id} />;
        })}
    </div>
  );
};
