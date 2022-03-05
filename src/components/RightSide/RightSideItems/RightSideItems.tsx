import React from 'react';
import {Styled} from '../WhoToFollow';
import {LightButton} from '../../Button/Button';

export const WhoToFollowItems = () => {
  return (
    <div className="row">
      <Styled.ImgWrapper className="col-3">
        <img src="" alt=" " />
      </Styled.ImgWrapper>
      <Styled.MailWrapper className="col-5">
        <Styled.TextP>offtrail @offtrail</Styled.TextP>
      </Styled.MailWrapper>
      <div>
        <LightButton nameButton="Follow" />
      </div>
    </div>
  );
};

export const TrendsForYouItems = () => {
  return (
    <>
      <Styled.MailWrapper>
        <Styled.TextP>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </Styled.TextP>
      </Styled.MailWrapper>
    </>
  );
};
