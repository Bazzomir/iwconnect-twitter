import React from 'react';
import {AiOutlineSetting} from 'react-icons/ai';
import {Styled, Styled as StyledMessages} from './Messages';
import {Styled as StyledAllMentions} from './Notifications';

export const Mentions = () => {
  return (
    <div className="col-6">
      <StyledMessages.HeaderContainer>
        <StyledMessages.Header>Notifications</StyledMessages.Header>
        <StyledMessages.HeaderIcon>
          <AiOutlineSetting />
        </StyledMessages.HeaderIcon>
      </StyledMessages.HeaderContainer>
      <StyledAllMentions.AllMentions>
        <li className="col-2">
          <a href="/notifications">All</a>
        </li>
        <li className="col-2">
          <a href="mentions">Mentions</a>
        </li>
      </StyledAllMentions.AllMentions>
      <div className="col-9 mx-auto">
        <StyledMessages.TextContainer>
          <Styled.TextWrapper>Nothing to see here — yet</Styled.TextWrapper>
          <Styled.TextParagraphWrapper>
            When someone mentions you, you’ll find it here.
          </Styled.TextParagraphWrapper>
        </StyledMessages.TextContainer>
      </div>
    </div>
  );
};
