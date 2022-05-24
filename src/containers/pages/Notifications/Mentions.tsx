import React from 'react';
import {Styled, Styled as StyledMessages} from '../Messages/Messages';

export const Mentions = () => {
  return (
    <>
      <div className="col-9 mx-auto">
        <StyledMessages.TextContainer>
          <Styled.TextWrapper>Nothing to see here — yet</Styled.TextWrapper>
          <Styled.TextParagraphWrapper>
            When someone mentions you, you’ll find it here.
          </Styled.TextParagraphWrapper>
        </StyledMessages.TextContainer>
      </div>
    </>
  );
};
