import React from 'react';
// import {Styled} from '../WhoToFollow';
import styled from 'styled-components';
import {LightButton} from '../../Button/Button';

export const WhoToFollowItems = ({textGrey, textWhite}: Props) => {
  return (
    <div className="row">
      <Styled.ImgWrapper className="col-3">
        <img
          src="https://i.pinimg.com/736x/78/b1/36/78b136e52a183d104aef5f1c6509e4c5.jpg"
          style={{width: '50px', height: '50px', borderRadius:'100%'}}
          alt=" "
        />
      </Styled.ImgWrapper>
      <Styled.MailWrapper className="col-5">
        <Styled.TextP>
          <Styled.TextWhite>{textWhite}</Styled.TextWhite>
          <Styled.TextGrey>{textGrey}</Styled.TextGrey>
        </Styled.TextP>
      </Styled.MailWrapper>
      <div>
        <LightButton nameButton="Follow" />
      </div>
    </div>
  );
};

interface Props {
  textGrey?: string;
  textBold?: string;
  textNum?: string;
  textWhite?: string;
}

export const TrendsForYouItems = ({textGrey, textBold, textNum}: Props) => {
  return (
    <>
      <Styled.MailWrapper>
        <Styled.TextP>
          <Styled.TextGrey>{textGrey}</Styled.TextGrey>
          <Styled.TextBold>{textBold}</Styled.TextBold>
          <Styled.TextGrey>{textNum}</Styled.TextGrey>
        </Styled.TextP>
      </Styled.MailWrapper>
    </>
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
    justify-content: center;
    height: 20px;
    weight: 20px;
    margin-top: 10px;
  `,
  MailWrapper: styled.div`
    display: grid;
    align-items: center;
    justify-content: flex-strat;
    padding: 0 5px 0 5px;
  `,
  TitleP: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-strat;
    padding-left: 10px;
    height: 50px;
    font-weight: bold;
  `,
  TextP: styled.p`
    align-items: center;
    justify-content: flex-strat;
    color: white;
  `,
  TextGrey: styled.p`
    color: grey;
    font-size: 11px;
    height: 10px;
    margin-top: 0;
    margin-bottom: 6px;
  `,
  TextWhite: styled.p`
    color: white;
    font-size: 20px;
    height: 20px;
    margin-top: 0;
    margin-bottom: 6px;
  `,
  TextBold: styled.p`
    font-weight: bold;
    font-size: 17px;
    color: white;
    margin-top: 0;
    margin-bottom: 0;
  `,
};