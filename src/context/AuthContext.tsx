import React, {useEffect, useState} from 'react';
import {CustomLoginError, loginApi} from '../mockApi/login';
import {readFromStorage, writeInStorage} from '../utils/localStorage';

interface User {
  username: string;
  password: string;
}

interface ContextValues {
  login: ({username, password}: {username: string; password: string}) => void;
  userIsLoggedIn: boolean;
  user?: User;
  error?: string;
  loading: boolean;
}

export const AuthContext = React.createContext<ContextValues>({
  login: () => {},
  loading: false,
  userIsLoggedIn: false,
});

export const AuthContextConstructor = ({children}: {children: JSX.Element}) => {
  const [user, setUser] = useState<User>();
  const [userIsLoggedIn, setUserIsLoggedIn] = useState<boolean>(() => {
    if (readFromStorage('accessToken')) {
      return true;
    }
    return false;
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      if (readFromStorage('accessToken')) {
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
      writeInStorage('accessToken', result.accessToken);
      writeInStorage('refreshToken', result.refreshToken);
      setUser({username, password});
    } catch (err: any) {
      setError((err as CustomLoginError)?.message);
    }
  };

  return (
    <AuthContext.Provider value={{user, login, error, loading, userIsLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};
