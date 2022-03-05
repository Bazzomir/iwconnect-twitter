import React from 'react';
import styled from 'styled-components';
import {WhoToFollowItems} from './RightSideItems/RightSideItems';
import {Props} from '../NavLink/NavLink';

export const WhoToFollow = ({text}: Props) => {
  return (
    <Styled.Container className="row">
      <Styled.TitleP>{text}</Styled.TitleP>
      <div className="col-12">
        <WhoToFollowItems />
        <WhoToFollowItems />
      </div>
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
  ImgWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-strat;
    margin: 0 0 5px 5px;
  `,
  MailWrapper: styled.div`
    display: grid;
    align-items: center;
    justify-content: flex-strat;
    padding: 0 5px 0 5px;
  `,
  TextP: styled.p`
    align-items: center;
    justify-content: flex-strat;
    color: white;
  `,
  TitleP: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-strat;
    padding-left: 10px;
    height: 50px;
    font-weight: bold;
  `,
};
