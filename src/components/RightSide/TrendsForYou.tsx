import React from 'react';
import {Styled, TrendsForYouItems} from './RightSideItems/RightSideItems';
import {Styled as StyledNavLink, Props} from '../NavLink/NavLink';

export const TrendsForYous = ({icon, text}: Props) => {
  return (
    <Styled.Container className="row">
      <StyledNavLink.TextWrapper>{text}</StyledNavLink.TextWrapper>
      <StyledNavLink.IconWrapper>{icon}</StyledNavLink.IconWrapper>
      <TrendsForYouItems
        textGrey="Digital assets & cryptodocumentary • Trending"
        textBold={'#Bitcoin 💰'}
        textNum="358K Tweets"
      />
      <TrendsForYouItems
        textGrey="Digital assets & cryptodocumentary • Trending"
        textBold={'#Bitcoin 💰'}
        textNum="358K Tweets"
      />
    </Styled.Container>
  );
};
