import React from 'react';
import {SearchBar} from '../../components/RightSide/SearchBar';
import {BsSearch} from 'react-icons/bs';
import {RiSettings2Line} from 'react-icons/ri';
import styled from 'styled-components';
import {WhoToFollow} from '../../components/RightSide/WhoToFollow';
import {TrendsForYous} from '../../components/RightSide/TrendsForYou';
import {Footer} from '../Footer/Footer';

export const Search = () => {
  return (
    <Styled.Container className="col-3">
      <SearchBar icon={<BsSearch />} />
      <TrendsForYous text="Trends for you" icon={<RiSettings2Line />} />
      <WhoToFollow text="Who to follow" />
      <Footer />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    background: ${props => props.theme.Navbar.nav.background};
    color: whitesmoke;
    border-left: 1px solid lightgrey;
  `,
};
