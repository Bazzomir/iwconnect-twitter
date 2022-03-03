import React from 'react';
import {GoHome} from 'react-icons/go';
import {RiHashtag} from 'react-icons/ri';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {FaRegEnvelope} from 'react-icons/fa';
import {BsBookmark} from 'react-icons/bs';
import {BsFileText} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {CgMoreO} from 'react-icons/cg';
import styled from 'styled-components';
import {Button} from '../../../components/Button/Button';
import {NavLink} from '../../../components/NavLink/NavLink';

export const Navbar = () => {
  return (
    <Styled.Container className="col-3">
      <NavLink text="Home" icon={<GoHome />} />
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

// const Container = styled.nav`
//   background: cyan;
//   height: 100vh;
// `;

const Styled = {
  Container: styled.nav`
    background: black;
    height: 100vh;
    color: whitesmoke;
  `,
};
