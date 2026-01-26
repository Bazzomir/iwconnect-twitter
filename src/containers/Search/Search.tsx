import { SearchBar } from '../../components/RightSide/SearchBar';
import { BsSearch } from 'react-icons/bs';
import { RiSettings2Line } from 'react-icons/ri';
import styled from 'styled-components';
import { WhoToFollow } from '../../components/RightSide/WhoToFollow';
import { TrendsForYous } from '../../components/RightSide/TrendsForYou';
import { Footer } from '../Footer/Footer';

interface SearchProps {
  className?: string;
}

export const Search = ({ className }: SearchProps) => {
  return (
    <Styled.Container className={`col-11 col-lg-3 ${className ? className : ''}`}>
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
    position: relative;

    @media (max-width: 992px) {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 260px;
      z-index: 1000;
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;

      &.open {
        transform: translateX(0);
      }
    }
  `,
};

