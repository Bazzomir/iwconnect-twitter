import React from 'react';
import {BsTwitter} from 'react-icons/bs';
import {Styled} from './Notifications';

export const All = () => {
  return (
    <>
      <Styled.NotificationsContainer>
        <div className="row" style={{border: '1px solid lightgrey'}}>
          <div className="col-2">
            <Styled.IconWrapper>
              <BsTwitter />
            </Styled.IconWrapper>
          </div>
          <div className="col-10">
            <Styled.TextWrapper>
              There was a login to your account @JohnDoe from a new device on Apr 02, 2022. Review
              it now.
            </Styled.TextWrapper>
          </div>
        </div>
        <div className="row" style={{border: '1px solid lightgrey'}}>
          <div className="col-2">
            <Styled.IconWrapper>
              <BsTwitter />
            </Styled.IconWrapper>
          </div>
          <div className="col-10">
            <Styled.TextWrapper>
              There was a login to your account @JohnDoe from a new device on Apr 01, 2022. Review
              it now.
            </Styled.TextWrapper>
          </div>
        </div>
        <div className="row" style={{border: '1px solid lightgrey'}}>
          <div className="col-2">
            <Styled.IconWrapper>
              <BsTwitter />
            </Styled.IconWrapper>
          </div>
          <div className="col-10">
            <Styled.TextWrapper>
              There was a login to your account @JohnDoe from a new device on Mar 31, 2022. Review
              it now.
            </Styled.TextWrapper>
          </div>
        </div>
        <div className="row" style={{border: '1px solid lightgrey'}}>
          <div className="col-2">
            <Styled.IconWrapper>
              <BsTwitter />
            </Styled.IconWrapper>
          </div>
          <div className="col-10">
            <Styled.TextWrapper>
              There was a login to your account @JohnDoe from a new device on Mar 30, 2022. Review
              it now.
            </Styled.TextWrapper>
          </div>
        </div>
        <div className="row" style={{border: '1px solid lightgrey'}}>
          <div className="col-2">
            <Styled.IconWrapper>
              <BsTwitter />
            </Styled.IconWrapper>
          </div>
          <div className="col-10">
            <Styled.TextWrapper>
              There was a login to your account @JohnDoe from a new device on Mar 28, 2022. Review
              it now.
            </Styled.TextWrapper>
          </div>
        </div>
        <div className="row" style={{border: '1px solid lightgrey'}}>
          <div className="col-2">
            <Styled.IconWrapper>
              <BsTwitter />
            </Styled.IconWrapper>
          </div>
          <div className="col-10">
            <Styled.TextWrapper>
              There was a login to your account @JohnDoe from a new device on Mar 26, 2022. Review
              it now.
            </Styled.TextWrapper>
          </div>
        </div>
        <div className="row" style={{border: '1px solid lightgrey'}}>
          <div className="col-2">
            <Styled.IconWrapper>
              <BsTwitter />
            </Styled.IconWrapper>
          </div>
          <div className="col-10">
            <Styled.TextWrapper>
              There was a login to your account @JohnDoe from a new device on Mar 14, 2022. Review
              it now.
            </Styled.TextWrapper>
          </div>
        </div>
      </Styled.NotificationsContainer>
    </>
  );
};
