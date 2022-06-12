import React from 'react';
import {IoMdArrowBack} from 'react-icons/io';
import {GoCalendar} from 'react-icons/go';
import styled from 'styled-components';
import {EditButton} from '../../../components/Button/Button';
import {Tweets} from './Tweets';
import {TweetsAndReplies} from './Tweets&Replies';
import {Media} from './Media';
import {Links} from './Links';
import {PageWrapperComponent} from '../../PageWrapper/PageWrapperComponent';

export const Profile = () => {
  var initialTab = 0;

  const [tabNumActivated, settabNumActivated] = React.useState(initialTab);

  return (
    <PageWrapperComponent>
      <div className="col-6">
        <Styled.HeaderContainer>
          <Styled.FirstIcon>
            <IoMdArrowBack />
          </Styled.FirstIcon>
          <Styled.Header>
            John Doe
            <Styled.TextGrey>0 Tweets</Styled.TextGrey>
          </Styled.Header>
        </Styled.HeaderContainer>
        <Styled.Container>
          <Styled.CoverImage />
          <Styled.ProfileInfo>
            <Styled.AvatarImage
              className="col-4 rounded-circle w-25"
              src="https://i.pravatar.cc/100"
            />
            <EditButton nameButton="Edit Profile" />
            <Styled.TextP>
              <Styled.TextWhite>John Doe</Styled.TextWhite>
              <Styled.GreyText>@johndoe</Styled.GreyText>
              <Styled.JoinedDiv>
                <Styled.TextWrapper>
                  <Styled.IconWrapper>
                    <GoCalendar />
                  </Styled.IconWrapper>
                  Joined March 2022
                </Styled.TextWrapper>
              </Styled.JoinedDiv>
              <Styled.FollowNumber>1</Styled.FollowNumber>
              <Styled.FollowText>Following</Styled.FollowText>
              <Styled.FollowNumber>0</Styled.FollowNumber>
              <Styled.FollowText>Followers</Styled.FollowText>
            </Styled.TextP>
            <Styled.LinksProfile id="links">
              <li className="col-2" key={''}>
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
                  Tweets
                </a>
              </li>
              <li className="col-5" key={'tweets&replies'}>
                <a
                  onClick={() => {
                    settabNumActivated(1);
                  }}
                  style={{
                    textDecoration: 'none',
                    color: '' + ((props: any) => props.theme.links.color),
                    marginLeft: '35px',
                    fontWeight: tabNumActivated == 1 ? 'bold' : 'normal',
                  }}
                >
                  Tweets & replies
                </a>
              </li>
              <li className="col-3" key={'media'}>
                <a
                  onClick={() => {
                    settabNumActivated(2);
                  }}
                  style={{
                    textDecoration: 'none',
                    color: '' + ((props: any) => props.theme.links.color),
                    fontWeight: tabNumActivated == 2 ? 'bold' : 'normal',
                  }}
                >
                  Media
                </a>
              </li>
              <li className="col-2" key={'links'}>
                <a
                  onClick={() => {
                    settabNumActivated(3);
                  }}
                  style={{
                    textDecoration: 'none',
                    color: '' + ((props: any) => props.theme.links.color),
                    fontWeight: tabNumActivated == 3 ? 'bold' : 'normal',
                  }}
                >
                  Links
                </a>
              </li>
            </Styled.LinksProfile>
          </Styled.ProfileInfo>
        </Styled.Container>
        {tabNumActivated == 0 && <Tweets />}
        {tabNumActivated == 1 && <TweetsAndReplies />}
        {tabNumActivated == 2 && <Media />}
        {tabNumActivated == 3 && <Links />}
      </div>
    </PageWrapperComponent>
  );
};

export const Styled = {
  HeaderContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    color: ${props => props.theme.RightSide.wrapperTwo.accountName.color};
    font-size: 20px;
    font-weight: bold;
  `,
  Header: styled.div`
    display: column;
    align-items: center;
    padding-left: 10px;
    margin: 0;
  `,
  HeaderIcon: styled.div`
    position: absolute;
    right: 10px;
    display: flex;
    align-items: center;
    padding-right: 15px;
    margin: auto;
  `,
  FirstIcon: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-strat;
    padding-right: 10px;
    color: ${props => props.theme.RightSide.wrapperTwo.accountName.color};
  `,
  TextGrey: styled.p`
    display: column;
    color: grey;
    font-size: 11px;
    margin: 0;
  `,
  Container: styled.div`
    display: block;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: ${props => props.theme.RightSide.wrapperTwo.accountName.color};
    border: 1px solid lightgrey;
  `,
  CoverImage: styled.div`
    flex-direction: row;
    align-items: center;
    background: grey;
    height: 200px;
    widht: 100%;
  `,
  AvatarImage: styled.img`
    margin: -8% 0% 0% 0%;
    max-height: 100px;
    position: relative;
  `,
  ProfileInfo: styled.div`
    display: block;
    flex-direction: column;
    align-items: center;
    justifly-content: flex-start;
    height: 250px;
    position: relative;
  `,
  TextP: styled.div`
    align-items: center;
    justify-content: flex-strat;
    color: ${props => props.theme.RightSide.wrapperTwo.accountName.color};
    margin: 15px 0 0 20px;
  `,
  GreyText: styled.p`
    color: grey;
    font-size: 13px;
    margin: 0;
  `,
  TextWhite: styled.p`
    color: ${props => props.theme.RightSide.wrapperTwo.accountName.color};
    font-size: 22px;
    height: 20px;
    margin-bottom: 6px;
  `,
  JoinedDiv: styled.div`
    display: row;
    align-items: center;
    justify-content: flex-strat;
    color: grey;
    font-size: 15px;
    margin-top: 10px;
  `,
  IconWrapper: styled.div`
    display: inline-block;
    align-items: center;
    justify-content: flex-strat;
    flex: 1;
    color: ${props => props.theme.RightSide.wrapperTwo.accountName.color};
    padding-right: 10px;
  `,
  TextWrapper: styled.p`
    flex: 4;
  `,
  FollowText: styled.div`
    display: inline-block;
    align-items: center;
    justify-content: flex-strat;
    flex: 1;
    color: grey;
    padding-right: 10px;
  `,
  FollowNumber: styled.div`
    display: inline-block;
    align-items: center;
    justify-content: flex-strat;
    flex: 1;
    color: ${props => props.theme.RightSide.wrapperTwo.accountName.color};
    padding-right: 2px;
  `,
  LinksProfile: styled.div`
    display: flex;
    align-items: column;
    justify-content: center;
    color: ${props => props.theme.RightSide.wrapperTwo.accountName.color};
    font-size: 15px;
    font-wight: bold;
    list-style-type: none;
    margin: 25px 0 -15px 15px;
  `,
};
