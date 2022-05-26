import React from 'react';
import {Styled} from '../Messages/Messages';

export const Links = () => {
  return (
    <>
      <Styled.TextContainer className="col-8 mt-4">
        <Styled.TextWrapper className="d-flex justify-content-md-center">
          You don’t have any likes yet
        </Styled.TextWrapper>
        <Styled.TextParagraphWrapper className="d-flex justify-content-md-center">
          Tap the heart on any Tweet to show it some love. When you do, it’ll show up here.
        </Styled.TextParagraphWrapper>
      </Styled.TextContainer>
    </>
  );
};
