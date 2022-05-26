import React from 'react';
import styled from 'styled-components';
import {LightButton} from '../../Button/Button';

interface Props {
  textGrey?: string;
  textBold?: string;
  textNum?: string;
  textWhite?: string;
}

export const WhoToFollowItems = ({textGrey, textWhite}: Props) => {
  return (
    <div className="row">
      <div className="col-3">
        <img
          src="https://i.pravatar.cc/100"
          style={{width: '50px', height: '50px', borderRadius: '100%'}}
          alt=" "
        />
      </div>
      <div className="col-4" style={{marginRight: '15px'}}>
        <Styled.TextP style={{textAlign: 'center', alignItems: 'center'}}>
          <Styled.TextWhite>{textWhite}</Styled.TextWhite>
          <Styled.TextGrey>{textGrey}</Styled.TextGrey>
        </Styled.TextP>
      </div>
      <div className="col-3">
        <LightButton nameButton="Follow" />
      </div>
    </div>
  );
};

export const TrendsForYouItems = ({textGrey, textBold, textNum}: Props) => {
  return (
    <>
      <Styled.MailWrapper className="col-12">
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
    background: rgba(22, 24, 28, 255);
    border-radius: 15px;
    color: whitesmoke;
    margin: 0px;
    margin-top: 15px;
  `,
  ImgWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15px;
    weight: 15px;
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
  TextP: styled.div`
    align-items: center;
    justify-content: flex-strat;
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
  `,
  TextGrey: styled.p`
    color: grey;
    font-size: 11px;
    margin: 0;
  `,
  TextWhite: styled.p`
    color: white;
    font-size: 20px;
    height: 20px;
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
