import React from 'react';
import {Styled} from './WhoToFollow';

export const TrendsForYous = () => {
  return (
    <Styled.Container className="row">
      <div className="col-12">
        <h5>Trends for you</h5>
      </div>
      <Styled.MailWrapper>
        <Styled.TextP>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </Styled.TextP>
      </Styled.MailWrapper>
    </Styled.Container>
  );
};
