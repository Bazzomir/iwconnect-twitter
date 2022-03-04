import React from 'react';
import {SearchBar} from '../../../components/RightSide/SearchBar';
import {BsSearch} from 'react-icons/bs';
import {Styled} from './Navbar';
import {WhoToFollow} from '../../../components/RightSide/WhoToFollow';
import {TrendsForYous} from '../../../components/RightSide/TrendsForYou';

export const Search = () => {
  return (
    <Styled.Container className="col-3">
      <SearchBar icon={<BsSearch />} />
      <TrendsForYous />
      <WhoToFollow />
    </Styled.Container>
  );
};
