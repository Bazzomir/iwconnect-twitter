import React from 'react';
import {TrendsForYouItems} from './RightSideItems/RightSideItems';
import {Styled} from './WhoToFollow';
import {Styled as StyledNavLink, Props} from '../NavLink/NavLink';

export const TrendsForYous = ({icon, text}: Props) => {
  return (
    <Styled.Container className="row">
      <StyledNavLink.TextWrapper>{text}</StyledNavLink.TextWrapper>
      <StyledNavLink.IconWrapper>{icon}</StyledNavLink.IconWrapper>
      <TrendsForYouItems />
    </Styled.Container>
  );
};
