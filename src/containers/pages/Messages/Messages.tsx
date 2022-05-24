import React from 'react';
import styled from 'styled-components';
import {Button} from '../../../components/Button/Button';
import {AiOutlineSetting} from 'react-icons/ai';
import {MdOutlineForwardToInbox} from 'react-icons/md';

export const Messages = () => {
  return (
    <div className="col-9">
      <div className="row">
        <div className="col-5">
          <Styled.HeaderContainer>
            <Styled.Header>Messages</Styled.Header>
            <Styled.HeaderIcon>
              <AiOutlineSetting />
              <MdOutlineForwardToInbox />
            </Styled.HeaderIcon>
          </Styled.HeaderContainer>
          <Styled.TextContainer className="mt-5">
            <Styled.TextWrapper>Welcome to your inbox!</Styled.TextWrapper>
            <Styled.TextParagraphWrapper>
              Drop a line, share Tweets and more with private conversations between you and others
              on Twitter.
            </Styled.TextParagraphWrapper>
            <div className="col">
              <Button nameButton="Start a conversation" />
            </div>
          </Styled.TextContainer>
        </div>
        <div className="col-7" style={{marginTop: '250px', padding: '90px'}}>
          <Styled.TextContainer>
            <Styled.TextWrapper>Select a message</Styled.TextWrapper>
            <Styled.TextParagraphWrapper>
              Choose from your existing conversations, start a new one, or just keep swimming.
            </Styled.TextParagraphWrapper>
            <div className="col-6">
              <Button nameButton="New message" />
            </div>
          </Styled.TextContainer>
        </div>
      </div>
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
