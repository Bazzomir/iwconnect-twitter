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
    background: #bfbfbf;
    color: whitesmoke;
    border-radius: 50px;
    position: relative;
    display: row;
  `,
  SearchBoxStyle: styled.input`
    position: relative;
    background: #bfbfbf;
    display: flex;
    align-items: center;
    justify-content: flex-strat;
    padding-left: 15px;
    height: 40px;
    flex: 4;
    border-radius: 50px;
    border: none;
  `,
  SearchIcon: styled.div`
    display: flex;
    align-items: center;
    padding-right: 5px;
    padding-left: 17px;
    color: white;
  `,
};
