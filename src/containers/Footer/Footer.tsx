import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <Styled.Container>
      <div className="row">
        <div className="col-4">
          <a href="https://twitter.com/en/tos" style={{color: 'grey'}}>
            Terms of Service
          </a>
        </div>
        <div className="col-4">
          <a href="https://twitter.com/en/privacy" style={{color: 'grey'}}>
            Privacy Policy
          </a>
        </div>
        <div className="col-4">
          <a
            href="https://help.twitter.com/en/rules-and-policies/twitter-cookies"
            style={{color: 'grey'}}
          >
            Cookie Policy
          </a>
        </div>
        <div className="col-4">
          <a href="https://help.twitter.com/en/resources/accessibility" style={{color: 'grey'}}>
            Accessibillity
          </a>
        </div>
        <div className="col-4">
          <a
            href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo"
            style={{color: 'grey'}}
          >
            Ads info
          </a>
        </div>
        <div className="col-4">
          <p>More ...</p>
        </div>
        <div className="col">
          <p>Twitter, © Blagoj Jovanovski 2022</p>
        </div>
      </div>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    justify-content: flex-end;
    flex-direction: row-reverse;
    color: grey;
    word-spacing: 0px;
    font-size: 8.5px;
    margin-top: 15px;
    padding: 5px;
  `,
};
