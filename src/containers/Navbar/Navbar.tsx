import { useContext } from 'react';
import { RiHome7Line, RiHashtag } from 'react-icons/ri';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FaRegEnvelope } from 'react-icons/fa';
import { BsBookmark, BsFileText, BsTwitter } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import styled from 'styled-components';
import { AuthButton, Button } from '../../components/Button/Button';
import { NavLink } from '../../components/NavLink/NavLink';
import { ProfileNavBar } from './ProfileNavBar';
import { CustomThemeContext } from '../../context/CustomThemeContext';
import { AuthContext } from '../../context/AuthContext';

interface NavbarProps {
  className?: string;
  onLinkClick?: () => void;
}

export const Navbar = ({ className, onLinkClick }: NavbarProps) => {
  const { toggleTheme } = useContext(CustomThemeContext);
  const { logout } = useContext(AuthContext);

  return (
    <Styled.Container className={`col-11 col-lg-3 ${className ? className : ''}`}>
      <NavLink to="/" icon={<BsTwitter />} />
      <NavLink to="/" text="Home" icon={<RiHome7Line />} />
      <NavLink to="/explore" text="Explore" icon={<RiHashtag />} />
      <NavLink to="/notifications" text="Notifications" icon={<IoIosNotificationsOutline />} />
      <NavLink to="/messages" text="Messages" icon={<FaRegEnvelope />} />
      <NavLink to="/bookmarks" text="Bookmarks" icon={<BsBookmark />} />
      <NavLink to="/lists" text="Lists" icon={<BsFileText />} />
      <NavLink to="/profile" text="Profile" icon={<CgProfile />} />
      <Button nameButton="Tweet" />
      <label className="switch mt-3">
        <input type="checkbox" onClick={toggleTheme} />
        <span className="slider round"></span>
      </label>
      <AuthButton type="submit" nameButton="Logout" onClick={logout} />
      <ProfileNavBar />
    </Styled.Container>
  );
};

export const Styled = {
  Container: styled.nav`
    background: ${props => props.theme.Navbar.nav.background};
    color: white;
    border-right: 1px solid lightgrey;
    position: relative;

    @media (max-width: 992px) {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 260px;
      z-index: 1000;
      transform: translateX(-100%);
      transition: transform 0.3s ease-in-out;

      &.open {
        transform: translateX(0);
      }
    }
  `,
};
