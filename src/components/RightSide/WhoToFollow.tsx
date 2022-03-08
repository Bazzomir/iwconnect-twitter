import React from 'react';
import { Styled, WhoToFollowItems, } from './RightSideItems/RightSideItems';
import {Props} from '../NavLink/NavLink';

export const WhoToFollow = ({text}: Props) => {
  return (
    <Styled.Container className="row">
      <Styled.TitleP>{text}</Styled.TitleP>
      <div className="col-12">
        <WhoToFollowItems textGrey="@clonebase" textWhite="Clonebase" />
        <WhoToFollowItems textGrey="@clonebase" textWhite="Clonebase" />
      </div>
    </Styled.Container>
  );
};
