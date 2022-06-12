import React, {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

interface Props {
  //   children: JSX.Element | JSX.Element[];
  children: JSX.Element;
}

export const ProtectedRoute = ({children}: Props) => {
  const {user} = useContext(AuthContext);
  console.log('user', user);

  return user ? children : <Navigate to="/login" replace />;
};
