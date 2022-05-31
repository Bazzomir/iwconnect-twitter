import React from 'react';
import styled from 'styled-components';

interface Props {
  icon: JSX.Element;
}

export const SearchBar = ({icon}: Props) => {
  return (
    <Styled.Container className="row">
      <Styled.SearchIcon className="col-2">{icon}</Styled.SearchIcon>
      <Styled.SearchBoxStyle className="col-10" placeholder="Search Twitter" />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    margin: 0px;
    margin-top: 10px;
    background: ${props => props.theme.RightSide.wrapperOne.background};
    color: whitesmoke;
    border-radius: 50px;
    position: relative;
  `,
  SearchBoxStyle: styled.input`
    position: relative;
    background: ${props => props.theme.RightSide.wrapperOne.background};
    display: flex;
    align-items: center;
    justify-content: flex-strat;
    height: 40px;
    flex: 4;
    border-radius: 50px;
    border: none;
    &::placeholder {
      color: #4d4d4d;
    }
  `,
  SearchIcon: styled.div`
    display: flex;
    align-items: center;
    padding-right: 5px;
    padding-left: 17px;
    color: ${props => props.theme.RightSide.wrapperOne.title.color};
  `,
};
