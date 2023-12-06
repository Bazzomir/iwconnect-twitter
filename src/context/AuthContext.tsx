import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {LocalStorageConstants} from '../constants/constants';
import {getUserApi, loginApi, logoutApi, registerUserApi} from '../mockApi/login';
import * as actions from '../state/user/user.actions';
import {getUser, getUserUnsuccess} from '../state/user/user.actions';
import * as selectors from '../state/user/user.selectors';
import {User} from '../state/user/user.types';
import {readFromStorage, removeFromStorage, writeInStorage} from '../utils/localStorage';

interface ContextValues {
  login: ({email, password}: {email: string; password: string}) => void;
  logout: () => void;
  loading: boolean;
  userIsRegistred: boolean;
  userIsLoggedIn: boolean;
  user?: User;
  error?: string;
  register: ({
    firstname,
    lastname,
    email,
    password,
    repeatPassword,
    birthday,
  }: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    repeatPassword: string;
    birthday: string;
  }) => void;
}

export const AuthContext = React.createContext<ContextValues>({
  login: () => {},
  logout: () => {},
  register: () => {},
  loading: false,
  userIsLoggedIn: false,
  userIsRegistred: false,
});

export const AuthContextConstructor = ({children}: {children: JSX.Element}) => {
  const dispatchRedux = useDispatch();
  const user = useSelector(selectors.userSelector);
  const error = useSelector(selectors.errorSelector);
  const loading = useSelector(selectors.loadingSelector);
  const userIsLoggedIn = useSelector(selectors.userIsLoggedInSelector);
  const userIsRegistred = useSelector(selectors.userIsRegistredSelector);
  const capitalizedEmail = useSelector(selectors.emailCapitalizedSelector);

  useEffect(() => {
    dispatchRedux(actions.loading(true));
    const timeout = setTimeout(async () => {
      try {
        const accessToken = readFromStorage(LocalStorageConstants.AccessToken);
        const user = await getUserApi({accessToken});
        const {email, password} = user;
        dispatchRedux(getUser({user: {email, password}}));
        dispatchRedux(actions.loading(false));
      } catch (error: any) {
        dispatchRedux(getUserUnsuccess({error: error?.message}));
      }
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const register = async ({
    firstname,
    lastname,
    email,
    password,
    repeatPassword,
    birthday,
  }: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    repeatPassword: string;
    birthday: string;
  }) => {
    try {
      
      dispatchRedux(actions.registerInProgress());
      const result = await registerUserApi({
        firstname,
        lastname,
        email,
        password,
        repeatPassword,
        birthday,
      });
      writeInStorage(LocalStorageConstants.AccessToken, result.accessToken);
      writeInStorage(LocalStorageConstants.RefreshToken, result.refreshToken);
      writeInStorage(LocalStorageConstants.Email, result.user.email);
      writeInStorage(LocalStorageConstants.Password, result.user.password);
      writeInStorage(LocalStorageConstants.Password, result.user.password);
    } catch (err: any) {
      dispatchRedux(
        actions.registerFailure({error: err?.message || 'ups... Something went worng :('})
      );
    } finally {
      dispatchRedux(
        actions.registerSuccess({
          user: {firstname, lastname, email, password, repeatPassword, birthday},
        })
      );
    }
  };

  const login = async ({email, password}: {email: string; password: string}) => {
    dispatchRedux(actions.loginInProgress());
    try {
      const result = await loginApi({email, password});
      writeInStorage(LocalStorageConstants.AccessToken, result.accessToken);
      writeInStorage(LocalStorageConstants.RefreshToken, result.refreshToken);
      writeInStorage(LocalStorageConstants.Email, result.email);
      writeInStorage(LocalStorageConstants.Password, result.password);
      dispatchRedux(actions.loginSuccess({user: {email, password}}));
    } catch (err: any) {
      dispatchRedux(actions.loginFailure({error: err?.message || 'Check your email and password'}));
    }
  };

  const logout = async () => {
    dispatchRedux(actions.loading(true));
    try {
      const accessToken = readFromStorage(LocalStorageConstants.AccessToken);
      await logoutApi({accessToken});
      removeFromStorage(LocalStorageConstants.AccessToken);
      removeFromStorage(LocalStorageConstants.RefreshToken);
      removeFromStorage(LocalStorageConstants.Email);
      removeFromStorage(LocalStorageConstants.Password);
      dispatchRedux(actions.logoutSucces());
    } catch (err: any) {
      dispatchRedux(
        actions.logoutFailure({error: err?.message || 'ups... Something went worng :('})
      );
    } finally {
      dispatchRedux(actions.loading(false));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        error,
        loading,
        userIsLoggedIn,
        userIsRegistred,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
