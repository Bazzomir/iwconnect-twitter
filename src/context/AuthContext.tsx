import React, {useEffect, useReducer} from 'react';
import {LocalStorageConstants} from '../constants/constants';
import {CustomLoginError, loginApi, logoutApi, registerUserApi} from '../mockApi/login';
import {readFromStorage, removeFromStorage, writeInStorage} from '../utils/localStorage';

interface User {
  email: string;
  password: string;
}

interface ContextValues {
  login: ({email, password}: {email: string; password: string}) => void;
  logout: () => void;
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
  userIsLoggedIn: boolean;
  user?: User;
  error?: string;
  loading: boolean;
}

export const AuthContext = React.createContext<ContextValues>({
  login: () => {},
  logout: () => {},
  register: () => {},
  loading: false,
  userIsLoggedIn: false,
});

type ReducerState = {
  userIsLoggedIn: boolean;
  loading: boolean;
  error: string;
  user?: User;
};

const INITIAL_STATE = {
  userIsLoggedIn: false,
  loading: false,
  error: '',
};

enum ActionEnum {
  LOGIN_IN_PROGRESS = 'LOGIN_IN_PROGRESS',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILUER = 'LOGIN_FAILUER',
  RESET_STATE = 'RESET_STATE',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_FAILUER = 'LOGOUT_FAILUER',
  LOADING = 'LOADING',
}

type Action =
  | {
      type: ActionEnum.LOGIN_IN_PROGRESS;
    }
  | {
      type: ActionEnum.LOGIN_SUCCESS;
      payload: {
        user: User;
      };
    }
  | {
      type: ActionEnum.LOGIN_FAILUER;
      payload: {
        error: string;
      };
    }
  | {
      type: ActionEnum.RESET_STATE;
    }
  | {
      type: ActionEnum.LOGOUT_SUCCESS;
    }
  | {
      type: ActionEnum.LOGOUT_FAILUER;
      payload: {
        error: string;
      };
    }
  | {
      type: ActionEnum.LOADING;
      payload: boolean;
    };

const reducer = (state: ReducerState, action: Action): ReducerState => {
  if (action.type === ActionEnum.LOGIN_IN_PROGRESS) {
    return {
      loading: true,
      error: '',
      userIsLoggedIn: false,
    };
  }

  if (action.type === ActionEnum.LOGIN_SUCCESS) {
    return {
      loading: false,
      error: '',
      user: action.payload.user,
      userIsLoggedIn: true,
    };
  }

  if (action.type === ActionEnum.LOGIN_FAILUER) {
    return {
      loading: false,
      error: action.payload.error,
      user: undefined,
      userIsLoggedIn: false,
    };
  }

  if (action.type === ActionEnum.RESET_STATE || action.type === ActionEnum.LOGOUT_SUCCESS) {
    return {
      loading: false,
      error: '',
      userIsLoggedIn: false,
      user: undefined,
    };
  }

  if (action.type === ActionEnum.LOGOUT_FAILUER) {
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      userIsLoggedIn: true,
    };
  }

  if (action.type === ActionEnum.LOADING) {
    return {
      ...state,
      loading: action.payload,
    };
  }

  return state;
};

export const AuthContextConstructor = ({children}: {children: JSX.Element}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({
      type: ActionEnum.LOADING,
      payload: true,
    });
    const timeout = setTimeout(() => {
      if (readFromStorage(LocalStorageConstants.AccessToken)) {
        dispatch({
          type: ActionEnum.LOGIN_SUCCESS,
          payload: {
            user: {email: 'za domashno', password: 'isto za domashno'},
          },
        });
      } else {
        dispatch({
          type: ActionEnum.LOGIN_FAILUER,
          payload: {
            error: '',
          },
        });
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
      dispatch({type: ActionEnum.LOGIN_SUCCESS, payload: {user: {email, password}}});
    } catch (err: any) {
      dispatch({
        type: ActionEnum.LOGOUT_FAILUER,
        payload: err?.message,
      });
    }
  };

  const login = async ({email, password}: {email: string; password: string}) => {
    dispatch({
      type: ActionEnum.LOGIN_IN_PROGRESS,
    });
    try {
      const result = await loginApi({email, password});
      writeInStorage(LocalStorageConstants.AccessToken, result.accessToken);
      writeInStorage(LocalStorageConstants.RefreshToken, result.refreshToken);
      writeInStorage(LocalStorageConstants.Email, result.email);
      writeInStorage(LocalStorageConstants.Password, result.password);
      dispatch({type: ActionEnum.LOGIN_SUCCESS, payload: {user: {email, password}}});
    } catch (err: any) {
      dispatch({
        type: ActionEnum.LOGIN_FAILUER,
        payload: {error: (err as CustomLoginError)?.message},
      });
    }
  };

  const logout = async () => {
    dispatch({type: ActionEnum.LOADING, payload: true});
    try {
      const accessToken = readFromStorage(LocalStorageConstants.AccessToken);
      await logoutApi({accessToken});
      removeFromStorage(LocalStorageConstants.AccessToken);
      removeFromStorage(LocalStorageConstants.RefreshToken);
      removeFromStorage(LocalStorageConstants.Email);
      removeFromStorage(LocalStorageConstants.Password);
      dispatch({
        type: ActionEnum.LOGOUT_SUCCESS,
      });
    } catch (err: any) {
      dispatch({
        type: ActionEnum.LOGOUT_FAILUER,
        payload: err?.message,
      });
    } finally {
      dispatch({
        type: ActionEnum.LOADING,
        payload: false,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        login,
        logout,
        register,
        error: state.error,
        loading: state.loading,
        userIsLoggedIn: state.userIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
