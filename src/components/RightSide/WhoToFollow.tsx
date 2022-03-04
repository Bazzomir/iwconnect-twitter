import React from 'react';
import styled from 'styled-components';
import {LightButton} from '../Button/Button';

export const WhoToFollow = () => {
  return (
    <Styled.Container className="row">
      <div className="col-12">
        <h5>Who to follow</h5>
      </div>
      <Styled.ImgWrapper className="col-2">
        <img src="" alt=" " />
      </Styled.ImgWrapper>
      <Styled.MailWrapper className="col-5">
        <Styled.TextP>offtrail @offtrail</Styled.TextP>
      </Styled.MailWrapper>
      <div>
        <LightButton nameButton="Follow" />
      </div>
      <Styled.ImgWrapper className="col-2">
        <img src="" alt=" " />
      </Styled.ImgWrapper>
      <Styled.MailWrapper className="col-5">
        <Styled.TextP>Clonebase @clonebase</Styled.TextP>
      </Styled.MailWrapper>
      <div>
        <LightButton nameButton="Follow" />
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
    padding-left: 10px;
  `,
  MailWrapper: styled.div`
    display: grid;
    align-items: center;
    justify-content: flex-strat;
    padding-left: 10px;
  `,
  TextP: styled.p`
    align-items: center;
    justify-content: flex-strat;
    color: white;
  `,
};
