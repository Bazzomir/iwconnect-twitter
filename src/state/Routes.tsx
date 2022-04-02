import React from 'react';
import {Route, Routes as RRDRoutes} from 'react-router-dom';
import {Main} from '../containers/Home/components/Main/Main';
import {PostPage} from '../containers/PostPage/PostPage';
import {Explore} from '../containers/pages/Explore';
import {Notifications} from '../containers/pages/Notifications';
import {Messages} from '../containers/pages/Messages';
import {Bookmarks} from '../containers/pages/Bookmarks';
import {Lists} from '../containers/pages/Lists';
import {Profile} from '../containers/pages/Profile';
import {Mentions} from '../containers/pages/Mentions';

export const Routes = () => {
  return (
    <RRDRoutes>
      <Route path="/" element={<Main />} />
      <Route path="posts" element={<div style={{color: 'white'}}></div>} />
      <Route path="posts/:id" element={<PostPage />} />
      <Route path="explore" element={<Explore />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="messages" element={<Messages />} />
      <Route path="bookmarks" element={<Bookmarks />} />
      <Route path="lists" element={<Lists />} />
      <Route path="profile" element={<Profile />} />
      <Route path="more" element={<div style={{color: 'white'}}>More</div>} />
      <Route path="mentions" element={<Mentions />} />
      <Route path="*" element={<div style={{color: 'white'}}>This page doesn't exist!</div>} />
    </RRDRoutes>
  );
};
