import React from 'react';
import { NavLink as RRDNavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Styled as TrendsStyled } from '../RightSide/TrendsForYou';

export interface Props {
  text?: string;
  to: string;
  icon?: JSX.Element;
}

export const NavLink = ({ icon, to, text }: Props) => {
  return (
    <Styled.Container to={to}>
      <Styled.IconWrapper>{icon}</Styled.IconWrapper>
      <Styled.TextWrapper>{text}</Styled.TextWrapper>
    </Styled.Container>
  );
};

export const Styled = {
  Container: styled(RRDNavLink)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    margin-bottom: 10px;
    color: white;
    font-size: 23px;
    padding: 30px 0 30px 0;
    background: ${(props) => props.theme.Navbar.RRDNavLink.background};
    overflow: hidden;
  `,
  IconWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
    flex: 1;
    color: ${(props) => props.theme.Navbar.iconColor.color};
  `,
  TextWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
    height: 50px;
    flex: 4;
    color: ${(props) => props.theme.Navbar.textColor.color};
  `,
};
