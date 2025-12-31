import React, { useContext } from 'react';
import { RiHome7Line, RiHashtag } from 'react-icons/ri';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FaRegEnvelope } from 'react-icons/fa';
import { BsBookmark, BsFileText, BsTwitter } from 'react-icons/bs';
import { CgProfile, CgMoreO } from 'react-icons/cg';
import styled from 'styled-components';
import { AuthButton, Button } from '../../components/Button/Button';
import { NavLink } from '../../components/NavLink/NavLink';
import { ProfileNavBar } from './ProfileNavBar';
import { CustomThemeContext } from '../../context/CustomThemeContext';
import { AuthContext } from '../../context/AuthContext';
import { useDispatch } from 'react-redux';

export const Navbar = () => {
  const { toggleTheme } = useContext(CustomThemeContext);
  const { logout } = useContext(AuthContext);
  const dispatch = useDispatch();

  return (
    <Styled.Container className="col-3">
      <NavLink to="/" icon={<BsTwitter />} />
      <NavLink to="/" text="Home" icon={<RiHome7Line />} />
      <NavLink to="/explore" text="Explore" icon={<RiHashtag />} />
      <NavLink to="/notifications" text="Notifications" icon={<IoIosNotificationsOutline />} />
      <NavLink to="/messages" text="Messages" icon={<FaRegEnvelope />} />
      <NavLink to="/bookmarks" text="Bookmarks" icon={<BsBookmark />} />
      <NavLink to="/lists" text="Lists" icon={<BsFileText />} />
      <NavLink to="/profile" text="Profile" icon={<CgProfile />} />
      <NavLink to="/more" text="More" icon={<CgMoreO />} />
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
  `,
};
