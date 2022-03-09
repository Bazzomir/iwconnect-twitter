import React from 'react';
import {RiHome7Line, RiHashtag} from 'react-icons/ri';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {FaRegEnvelope} from 'react-icons/fa';
import {BsBookmark, BsFileText, BsTwitter} from 'react-icons/bs';
import {CgProfile, CgMoreO} from 'react-icons/cg';
import styled from 'styled-components';
import {Button} from '../../components/Button/Button';
import {NavLink} from '../../components/NavLink/NavLink';

export const Navbar = () => {
  return (
    <Styled.Container className="col-3">
      <NavLink icon={<BsTwitter />} />
      <NavLink text="Home" icon={<RiHome7Line />} />
      <NavLink text="Explore" icon={<RiHashtag />} />
      <NavLink text="Notifications" icon={<IoIosNotificationsOutline />} />
      <NavLink text="Messages" icon={<FaRegEnvelope />} />
      <NavLink text="Bookmarks" icon={<BsBookmark />} />
      <NavLink text="List" icon={<BsFileText />} />
      <NavLink text="Profile" icon={<CgProfile />} />
      <NavLink text="More" icon={<CgMoreO />} />
      <Button nameButton="Tweet" />
    </Styled.Container>
  );
};

export const Styled = {
  Container: styled.nav`
    background: black;
    height: 100vh;
    color: whitesmoke;
    border-right: 1px solid white;
  `,
};
