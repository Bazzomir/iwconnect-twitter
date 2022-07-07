import React from 'react';
import { PageWrapperComponent } from '../../PageWrapper/PageWrapperComponent';
import {Styled} from '../Messages/Messages';

export const Bookmarks = () => {
  return (
    <PageWrapperComponent>
      <div className="col-6">
        <Styled.HeaderContainer>
          <Styled.Header>Bookmarks</Styled.Header>
        </Styled.HeaderContainer>
        <Styled.TextContainer style={{alignItems: 'center'}}>
          <img
            src="https://www.pngarts.com/files/4/Birdcage-PNG-Background-Image.png"
            alt=""
            style={{height: '300px', width: '300px', textAlign: 'center'}}
          />
          <Styled.TextWrapper>Save Tweets for later</Styled.TextWrapper>
          <Styled.TextParagraphWrapper className="col-8">
            Don’t let the good ones fly away! Bookmark Tweets to easily find them again in the
            future.
          </Styled.TextParagraphWrapper>
        </Styled.TextContainer>
      </div>
    </PageWrapperComponent>
  );
};
