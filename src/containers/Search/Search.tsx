import React from 'react';
import {SearchBar} from '../../components/RightSide/SearchBar';
import {BsSearch} from 'react-icons/bs';
import {RiSettings2Line} from 'react-icons/ri';
import styled from 'styled-components';
import {WhoToFollow} from '../../components/RightSide/WhoToFollow';
import {TrendsForYous} from '../../components/RightSide/TrendsForYou';
import {RightBottomText} from '../../components/RightSide/RightSideItems/RightSideItems';

export const Search = () => {
  return (
    <Styled.Container className="col-3">
      <SearchBar icon={<BsSearch />} />
      <TrendsForYous text="Trends for you" icon={<RiSettings2Line />} />
      <WhoToFollow text="Who to follow" />
      <RightBottomText />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    background: black;
    color: whitesmoke;
    border-left: 1px solid white;
  `,
};
