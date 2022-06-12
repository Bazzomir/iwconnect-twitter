import React from 'react';
import {AiOutlineSetting} from 'react-icons/ai';
import styled from 'styled-components';
import {PageWrapperComponent} from '../../PageWrapper/PageWrapperComponent';
import {Styled as StyledHeader} from '../Messages/Messages';
import {All} from './All';
import {Mentions} from './Mentions';

export const Notifications = () => {
  var initialTab = 0;
  const [tabNumActivated, settabNumActivated] = React.useState(initialTab);

  return (
    <PageWrapperComponent>
      <div className="col-6">
        <StyledHeader.HeaderContainer>
          <StyledHeader.Header>Notifications</StyledHeader.Header>
          <StyledHeader.HeaderIcon>
            <AiOutlineSetting />
          </StyledHeader.HeaderIcon>
        </StyledHeader.HeaderContainer>
        <Styled.AllMentions>
          <li className="col-2" key={'all'}>
            <a
              onClick={() => {
                settabNumActivated(0);
              }}
              style={{
                textDecoration: 'none',
                color: '' + ((props: any) => props.theme.links.color),
                fontWeight: tabNumActivated == 0 ? 'bold' : 'normal',
              }}
            >
              All
            </a>
          </li>
          <li className="col-2" key={'mentions'}>
            <a
              onClick={() => {
                settabNumActivated(1);
              }}
              style={{
                textDecoration: 'none',
                color: '' + ((props: any) => props.theme.links.color),
                fontWeight: tabNumActivated == 1 ? 'bold' : 'normal',
              }}
            >
              Mentions
            </a>
          </li>
        </Styled.AllMentions>
        {tabNumActivated == 0 && <All />}
        {tabNumActivated == 1 && <Mentions />}
      </div>
    </PageWrapperComponent>
  );
};

export const Styled = {
  NotificationsContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: ${props => props.theme.RightSide.wrapperTwo.accountName.color};
  `,
  IconWrapper: styled.div`
    display: flex;
    align-items: column;
    justify-content: center;
    color: ${props => props.theme.Navbar.iconColor.color};
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
    color: ${props => props.theme.links.color};
    font-size: 20px;
    margin-bottom: -10px;
    list-style-type: none;
    justify-content: space-around;
    text-decoration: none;
  `,
};
