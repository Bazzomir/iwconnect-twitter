import React from 'react';
import { Styled } from '../Messages/Messages';

export const Media = () => {
  return (
    <>
      <Styled.TextContainer>
        <div className="d-flex justify-content-md-center mt-5 mb-3">
          <img
            src="https://as2.ftcdn.net/jpg/08/84/07/31/1000_F_884073136_Nnt3rN419udYOiOlwg6kIRhVJ8I1v1uY.webp"
            alt=""
            style={{ height: '200px', width: '250px', textAlign: 'center' }}
          />
        </div>
        <Styled.TextWrapper className="d-flex justify-content-md-center">
          Lights, camera … attachments!
        </Styled.TextWrapper>
        <Styled.TextParagraphWrapper className="d-flex justify-content-md-center">
          When you send Tweets with photos or videos in them, it will show up here.
        </Styled.TextParagraphWrapper>
      </Styled.TextContainer>
    </>
  );
};
