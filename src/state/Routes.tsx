import React from 'react';
import {Route, Routes as RRDRoutes} from 'react-router-dom';
import {Main} from '../containers/Home/components/Main/Main';
import {Explore} from '../containers/pages/Explore/Explore';
import {Notifications} from '../containers/pages/Notifications/Notifications';
import {Messages} from '../containers/pages/Messages/Messages';
import {Bookmarks} from '../containers/pages/Bookmarks/Bookmarks';
import {Lists} from '../containers/pages/Lists/Lists';
import {Profile} from '../containers/pages/Profile/Profile';
import {More} from '../containers/Navbar/More';
import {PostPage} from '../containers/Home/components/Main/components/PostPage/PostPage';
import {ProtectedRoute} from './ProtectedRoute';
import {PageNotFound} from '../containers/pages/PageNotFound/PageNotFound';
import {Login} from '../containers/pages/authPage/Login/Login';
import {Register} from '../containers/pages/authPage/Register/Register';

export const Routes = () => {
  return (
    <RRDRoutes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        }
      />
      <Route path="posts" element={<div style={{color: 'white'}}></div>} />
      <Route path="post/:id" element={<PostPage />} />
      <Route path="explore" element={<Explore />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="messages" element={<Messages />} />
      <Route path="bookmarks" element={<Bookmarks />} />
      <Route path="lists" element={<Lists />} />
      <Route path="profile" element={<Profile />} />
      <Route path="more" element={<More />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<PageNotFound />} />
    </RRDRoutes>
  );
};
