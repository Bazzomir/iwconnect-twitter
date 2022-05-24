import React from 'react';
import {RiHome7Line, RiHashtag} from 'react-icons/ri';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {FaRegEnvelope} from 'react-icons/fa';
import {BsBookmark, BsFileText, BsTwitter} from 'react-icons/bs';
import {CgProfile, CgMoreO} from 'react-icons/cg';
import styled from 'styled-components';
import {Button} from '../../components/Button/Button';
import {NavLink} from '../../components/NavLink/NavLink';
import {ProfileNavBar} from './ProfileNavBar';

export const Navbar = () => {
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
      <ProfileNavBar />
    </Styled.Container>
  );
};

export const Styled = {
  Container: styled.nav`
    background: black;
    color: whitesmoke;
    border-right: 1px solid white;
  `,
};
