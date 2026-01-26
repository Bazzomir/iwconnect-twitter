import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiX } from 'react-icons/fi';
import styled from 'styled-components';

export const TweetsAndReplies = () => {
  return (
    <Styled.Container>
      <div className="mt-4">
        <Styled.TextWhite>Topics to follow - Tweets and Replies</Styled.TextWhite>
        <Styled.TextGrey>
          Tweets about the Topics you follow show up in your Home timeline
        </Styled.TextGrey>
        <div className="row">
          <Styled.BalloonToFollow className="col-4">
            <Styled.BallonText>Football</Styled.BallonText>
            <Styled.BallonIcon style={{ color: 'blue' }}>
              <AiOutlinePlus />
            </Styled.BallonIcon>
            <Styled.BallonIcon>
              | <FiX />
            </Styled.BallonIcon>
          </Styled.BalloonToFollow>
          <Styled.BalloonToFollow className="col-4">
            <Styled.BallonText>Music</Styled.BallonText>
            <Styled.BallonIcon style={{ color: 'blue' }}>
              <AiOutlinePlus />
            </Styled.BallonIcon>
            <Styled.BallonIcon>
              | <FiX />
            </Styled.BallonIcon>
          </Styled.BalloonToFollow>
          <Styled.BalloonToFollow className="col-4">
            <Styled.BallonText>Crypto</Styled.BallonText>
            <Styled.BallonIcon style={{ color: 'blue' }}>
              <AiOutlinePlus />
            </Styled.BallonIcon>
            <Styled.BallonIcon>
              | <FiX />
            </Styled.BallonIcon>
          </Styled.BalloonToFollow>
          <Styled.BalloonToFollow className="col-4">
            <Styled.BallonText>Cats</Styled.BallonText>
            <Styled.BallonIcon style={{ color: 'blue' }}>
              <AiOutlinePlus />
            </Styled.BallonIcon>
            <Styled.BallonIcon>
              | <FiX />
            </Styled.BallonIcon>
          </Styled.BalloonToFollow>
          <Styled.BalloonToFollow className="col-4">
            <Styled.BallonText>Dog</Styled.BallonText>
            <Styled.BallonIcon style={{ color: 'blue' }}>
              <AiOutlinePlus />
            </Styled.BallonIcon>
            <Styled.BallonIcon>
              | <FiX />
            </Styled.BallonIcon>
          </Styled.BalloonToFollow>
          <Styled.BalloonToFollow className="col-4">
            <Styled.BallonText>GYM</Styled.BallonText>
            <Styled.BallonIcon style={{ color: 'blue' }}>
              <AiOutlinePlus />
            </Styled.BallonIcon>
            <Styled.BallonIcon>
              | <FiX />
            </Styled.BallonIcon>
          </Styled.BalloonToFollow>
          <Styled.BalloonToFollow className="col-4">
            <Styled.BallonText>Mars</Styled.BallonText>
            <Styled.BallonIcon style={{ color: 'blue' }}>
              <AiOutlinePlus />
            </Styled.BallonIcon>
            <Styled.BallonIcon>
              | <FiX />
            </Styled.BallonIcon>
          </Styled.BalloonToFollow>
          <Styled.BalloonToFollow className="col-4">
            <Styled.BallonText>React</Styled.BallonText>
            <Styled.BallonIcon style={{ color: 'blue' }}>
              <AiOutlinePlus />
            </Styled.BallonIcon>
            <Styled.BallonIcon>
              | <FiX />
            </Styled.BallonIcon>
          </Styled.BalloonToFollow>
          <Styled.BalloonToFollow className="col-4">
            <Styled.BallonText>JavaScript</Styled.BallonText>
            <Styled.BallonIcon style={{ color: 'blue' }}>
              <AiOutlinePlus />
            </Styled.BallonIcon>
            <Styled.BallonIcon>
              | <FiX />
            </Styled.BallonIcon>
          </Styled.BalloonToFollow>
        </div>
      </div>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 10px;
    margin: 10px;
  `,
  TextGrey: styled.p`
    display: column;
    color: grey;
    font-size: 11px;
    margin: 0;
    margin-top: 10px;
  `,
  TextWhite: styled.p`
    color: white;
    font-size: 22px;
    height: 20px;
    margin-bottom: 6px;
    font-weight: bold;
    align-items: center;
  `,
  BalloonToFollow: styled.div`
    display: flex;
    flex-direction: row;
    max-height: 30px;
    max-width: 155px;
    border: 1px solid lightgrey;
    border-radius: 15px;
    margin: 10px;
    text-align: center;
  `,
  BallonText: styled.p`
    display: column;
    color: White;
    font-size: 15px;
    font-weight: bold;
    flex: 3;
    margin-top: 3px;
  `,
  BallonIcon: styled.div`
    display: row;
    align-items: center;
    justify-content: flex-strat;
    flex: 2;
    color: white;
  `,
};
