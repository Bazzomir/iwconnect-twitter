import React from 'react';
import {Route, Routes as RRDRoutes} from 'react-router-dom';
import {Main} from '../containers/Home/components/Main/Main';
import {PostPage} from '../containers/PostPage/PostPage';

export const Routes = () => {
  return (
    <RRDRoutes>
      <Route path="/*" element={<Main />} />
      <Route path="posts" element={<div style={{color: 'white'}}></div>} />
      <Route path="posts/:id" element={<PostPage />} />
      <Route path="expolore" element={<div style={{color: 'white'}}>Explore</div>} />
      <Route path="notifications" element={<div style={{color: 'white'}}>Notification</div>} />
      <Route path="messages" element={<div style={{color: 'white'}}>Messages</div>} />
      <Route path="bookmarks" element={<div style={{color: 'white'}}>Bookmarks</div>} />
      <Route path="lists" element={<div style={{color: 'white'}}>Lists</div>} />
      <Route path="profile" element={<div style={{color: 'white'}}>Profile</div>} />
      <Route path="more" element={<div style={{color: 'white'}}>More</div>} />
      <Route path="*" element={<div style={{color: 'white'}}>This page doesn't exist!</div>} />
    </RRDRoutes>
  );
};
