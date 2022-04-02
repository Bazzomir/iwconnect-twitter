import React from 'react';
import {AiOutlineSetting} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import styled from 'styled-components';
import {Styled as StyledHeader} from './Messages';

export const Notifications = () => {
  return (
    <div className="col-6">
      <StyledHeader.HeaderContainer>
        <StyledHeader.Header>Notifications</StyledHeader.Header>
        <StyledHeader.HeaderIcon>
          <AiOutlineSetting />
        </StyledHeader.HeaderIcon>
      </StyledHeader.HeaderContainer>
      <Styled.AllMentions>
        <li className="col-2">
          <a href="/notifications">All</a>
        </li>
        <li className="col-2">
          <a href="mentions">Mentions</a>
        </li>
      </Styled.AllMentions>
      <Styled.NotificationsContainer>
        <div className="row" style={{border: '1px solid white'}}>
          <div className="col-2">
            <Styled.IconWrapper>
              <BsTwitter />
            </Styled.IconWrapper>
          </div>
          <div className="col-10">
            <Styled.TextWrapper>
              There was a login to your account @BazzomirJ from a new device on Apr 02, 2022. Review
              it now.
            </Styled.TextWrapper>
          </div>
        </div>
        <div className="row" style={{border: '1px solid white'}}>
          <div className="col-2">
            <Styled.IconWrapper>
              <BsTwitter />
            </Styled.IconWrapper>
          </div>
          <div className="col-10">
            <Styled.TextWrapper>
              There was a login to your account @BazzomirJ from a new device on Apr 01, 2022. Review
              it now.
            </Styled.TextWrapper>
          </div>
        </div>
        <div className="row" style={{border: '1px solid white'}}>
          <div className="col-2">
            <Styled.IconWrapper>
              <BsTwitter />
            </Styled.IconWrapper>
          </div>
          <div className="col-10">
            <Styled.TextWrapper>
              There was a login to your account @BazzomirJ from a new device on Mar 31, 2022. Review
              it now.
            </Styled.TextWrapper>
          </div>
        </div>
        <div className="row" style={{border: '1px solid white'}}>
          <div className="col-2">
            <Styled.IconWrapper>
              <BsTwitter />
            </Styled.IconWrapper>
          </div>
          <div className="col-10">
            <Styled.TextWrapper>
              There was a login to your account @BazzomirJ from a new device on Mar 30, 2022. Review
              it now.
            </Styled.TextWrapper>
          </div>
        </div>
        <div className="row" style={{border: '1px solid white'}}>
          <div className="col-2">
            <Styled.IconWrapper>
              <BsTwitter />
            </Styled.IconWrapper>
          </div>
          <div className="col-10">
            <Styled.TextWrapper>
              There was a login to your account @BazzomirJ from a new device on Mar 28, 2022. Review
              it now.
            </Styled.TextWrapper>
          </div>
        </div>
        <div className="row" style={{border: '1px solid white'}}>
          <div className="col-2">
            <Styled.IconWrapper>
              <BsTwitter />
            </Styled.IconWrapper>
          </div>
          <div className="col-10">
            <Styled.TextWrapper>
              There was a login to your account @BazzomirJ from a new device on Mar 26, 2022. Review
              it now.
            </Styled.TextWrapper>
          </div>
        </div>
        <div className="row" style={{border: '1px solid white'}}>
          <div className="col-2">
            <Styled.IconWrapper>
              <BsTwitter />
            </Styled.IconWrapper>
          </div>
          <div className="col-10">
            <Styled.TextWrapper>
              There was a login to your account @BazzomirJ from a new device on Mar 14, 2022. Review
              it now.
            </Styled.TextWrapper>
          </div>
        </div>
      </Styled.NotificationsContainer>
    </div>
  );
};

export const Styled = {
  NotificationsContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: white;
  `,
  IconWrapper: styled.div`
    display: flex;
    align-items: column;
    justify-content: center;
    color: white;
    flex: 1;
    padding: 20px;
    font-size: 25px;
  `,
  TextWrapper: styled.p`
    display: flex;
    align-items: column;
    justify-content: center;
    padding: 5px 0 0 10px;
    flex: 4;
    margin: 0;
  `,
  AllMentions: styled.ul`
    display: flex;
    align-items: column;
    justify-content: center;
    height: 50px;
    color: white;
    font-size: 20px;
    font-wight: bold;
  `,
};
