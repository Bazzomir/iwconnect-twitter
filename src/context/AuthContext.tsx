import React, {useEffect, useState} from 'react';
import {LocalStorageConstants} from '../constants/constants';
import {CustomLoginError, loginApi, logoutApi} from '../mockApi/login';
import {readFromStorage, removeFromStorage, writeInStorage} from '../utils/localStorage';

interface User {
  username: string;
  password: string;
}

interface ContextValues {
  login: ({username, password}: {username: string; password: string}) => void;
  logout: () => void;
  userIsLoggedIn: boolean;
  user?: User;
  error?: string;
  loading: boolean;
}

export const AuthContext = React.createContext<ContextValues>({
  login: () => {},
  logout: () => {},
  loading: false,
  userIsLoggedIn: false,
});

export const AuthContextConstructor = ({children}: {children: JSX.Element}) => {
  const [user, setUser] = useState<User>();
  const [userIsLoggedIn, setUserIsLoggedIn] = useState<boolean>(() => {
    if (readFromStorage(LocalStorageConstants.AccessToken)) {
      return true;
    }
    return false;
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      if (readFromStorage(LocalStorageConstants.AccessToken)) {
        setUserIsLoggedIn(true);
        setLoading(false);
      } else {
        setLoading(false);
        setUserIsLoggedIn(false);
      }
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const login = async ({username, password}: {username: string; password: string}) => {
    try {
      const result = await loginApi({username, password});
      writeInStorage(LocalStorageConstants.AccessToken, result.accessToken);
      writeInStorage(LocalStorageConstants.RefreshToken, result.refreshToken);
      setUser({username, password});
      setUserIsLoggedIn(true);
    } catch (err: any) {
      setUserIsLoggedIn(false);
      setError((err as CustomLoginError)?.message);
    }
  };

  const logout = async () => {
    try {
      const accessToken = readFromStorage(LocalStorageConstants.AccessToken);
      await logoutApi({accessToken});
      removeFromStorage(LocalStorageConstants.AccessToken);
      removeFromStorage(LocalStorageConstants.RefreshToken);
      setUser(undefined);
      setError('');
      setUserIsLoggedIn(false);
    } catch (err: any) {
      setError(err?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{user, login, logout, error, loading, userIsLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};
