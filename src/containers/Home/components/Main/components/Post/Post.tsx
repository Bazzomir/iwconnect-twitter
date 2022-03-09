import React from 'react';
import styled from 'styled-components';
import {Action} from './components/Action';

interface Props {
  title: string;
  content: string;
}

export const Post = ({title, content}: Props) => {
  return (
    <Styled.Container>
      <Styled.AdditionalInfo>Bitcoin cryptocurrency - See more</Styled.AdditionalInfo>
      <Styled.Wrapper>
        <Styled.IconWrapper>
          <Styled.Icon></Styled.Icon>
        </Styled.IconWrapper>
        <Styled.MainContent>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Content>{content}</Styled.Content>
          <Styled.Actions>
            <Action actionNumber={444} />
            <Action actionNumber={151} />
            <Action actionNumber={1941} />
            <Action actionNumber={0} />
          </Styled.Actions>
        </Styled.MainContent>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

const Styled = {
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
    border: 1px solid red;
    color: white;
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
  `,
  IconWrapper: styled.div`
    display: flex;
    flex: 1;
  `,
  Icon: styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background: red;
  `,
  MainContent: styled.div`
    display: flex;
    flex: 10;
    flex-direction: column;
    border: 1px solid yellow;
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
  `,
};
