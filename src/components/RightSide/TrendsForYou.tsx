import React from 'react';
import {TrendsForYouItems} from './RightSideItems/RightSideItems';
import styled from 'styled-components';
// import {Styled as StyledNavLink, Props} from '../NavLink/NavLink';

export interface Props {
  text: string;
  icon?: JSX.Element;
}

export const TrendsForYous = ({icon, text}: Props) => {
  return (
    <Styled.Container className="row">
      <Styled.TextWrapper>{text}</Styled.TextWrapper>
      <Styled.IconWrapper>{icon}</Styled.IconWrapper>
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

export const Styled = {
  Container: styled.div`
    flex-direction: row;
    background: #bfbfbf;
    border-radius: 15px;
    color: whitesmoke;
    display: flex;
    margin: 0px;
    margin-top: 15px;
  `,
  IconWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-strat;
    padding-left: 10px;
    flex: 1;
    color: white;
  `,
  TextWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-strat;
    padding-left: 10px;
    height: 50px;
    flex: 4;
    font-weight: bold;
  `,
};
