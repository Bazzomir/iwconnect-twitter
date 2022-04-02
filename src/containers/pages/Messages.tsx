import React from 'react';
import styled from 'styled-components';
import {Button} from '../../components/Button/Button';
import {AiOutlineSetting} from 'react-icons/ai';
import {MdOutlineForwardToInbox} from 'react-icons/md';

export const Messages = () => {
  return (
    <div className="col-6">
      {/* <div className="col-3"> */}
      <Styled.HeaderContainer>
        <Styled.Header>Messages</Styled.Header>
        <Styled.HeaderIcon>
          <AiOutlineSetting />
          <MdOutlineForwardToInbox />
        </Styled.HeaderIcon>
      </Styled.HeaderContainer>
      <Styled.TextContainer>
        <Styled.TextWrapper>Send a message, get a message</Styled.TextWrapper>
        <Styled.TextParagraphWrapper>
          Direct Messages are private conversations between you and other people on Twitter. Share
          Tweets, media, and more!
        </Styled.TextParagraphWrapper>
        <div className="col-6">
          <Button nameButton="Start a conversation" />
        </div>
      </Styled.TextContainer>
      <Styled.TextContainer>
        {/* </div> */}
        {/* <div className="col-3"> */}
        <Styled.TextWrapper>You don’t have a message selected</Styled.TextWrapper>
        <Styled.TextParagraphWrapper>
          Choose one from your existing messages, or start a new one.
        </Styled.TextParagraphWrapper>
        <div className="col-4">
          <Button nameButton="New message" />
        </div>
      </Styled.TextContainer>
    </div>
  );
};

export const Styled = {
  HeaderContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    color: white;
    font-size: 20px;
    font-weight: bold;
  `,
  Header: styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
  `,
  HeaderIcon: styled.div`
    position: absolute;
    right: 10px;
    display: flex;
    align-items: center;
    padding-right: 15px;
    margin: auto;
  `,
  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
    color: white;
    margin: auto;
    border: 1px solid white;
    wight: 100%;
  `,
  TextParagraphWrapper: styled.p`
    align-items: center;
    color: grey;
    padding: 0 10px;
  `,
  TextWrapper: styled.div`
    align-items: center;
    padding-left: 10px;
    color: white;
    padding: 10px 0 10px 0;
    font-size: 37.5px;
    font-weight: bold;
  `,
};
