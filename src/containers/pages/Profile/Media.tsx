import React from 'react';
import {Styled} from '../Messages/Messages';

export const Media = () => {
  return (
    <>
      <Styled.TextContainer>
        <div className="d-flex justify-content-md-center mt-5 mb-3">
          <img
            src="https://www.jing.fm/clipimg/full/66-661231_drawn-camera-file-camera-vector-png-transparent.png"
            alt=""
            style={{height: '200px', width: '250px', textAlign: 'center'}}
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
