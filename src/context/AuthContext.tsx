import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, } from 'firebase/auth';
import { auth } from '../firebase';
import * as actions from '../state/user/user.actions';
import * as selectors from '../state/user/user.selectors';
import { User as TypeOfUser } from '../state/user/user.types';

interface ContextValues {
  login: (params: { email: string; password: string }) => void;
  logout: () => void;
  register: (params: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    repeatPassword: string;
    birthday: string;
  }) => void;
  loading: boolean;
  userIsLoggedIn: boolean;
  userIsRegistred: boolean;
  user?: TypeOfUser;
  error?: string;
}

export const AuthContext = React.createContext<ContextValues>({
  login: () => { },
  logout: () => { },
  register: () => { },
  loading: false,
  userIsLoggedIn: false,
  userIsRegistred: false,
});

export const AuthContextConstructor = ({ children }: { children: JSX.Element }) => {
  const dispatchRedux = useDispatch();

  const user = useSelector(selectors.userSelector);
  const error = useSelector(selectors.errorSelector);
  const loading = useSelector(selectors.loadingSelector);
  const userIsLoggedIn = useSelector(selectors.userIsLoggedInSelector);
  const userIsRegistred = useSelector(selectors.userIsRegistredSelector);

  useEffect(() => {
    dispatchRedux(actions.loading(true));

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser?.email) {
        dispatchRedux(
          actions.loginSuccess({
            user: {
              email: firebaseUser.email,
            },
          })
        );
      } else {
        dispatchRedux(actions.logoutSucces());
      }

      dispatchRedux(actions.loading(false));
    });

    return () => unsubscribe();
  }, [dispatchRedux]);

  const login = async ({ email, password }: { email: string; password: string }) => {
    dispatchRedux(actions.loginInProgress());

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      dispatchRedux(
        actions.loginSuccess({
          user: {
            email: userCredential.user.email!,
          },
        })
      );
    } catch (err: any) {
      dispatchRedux(
        actions.loginFailure({
          error: err.message || 'Invalid email or password',
        })
      );
    }
  };

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
    if (password !== repeatPassword) {
      dispatchRedux(
        actions.registerFailure({
          error: "Password and Repeat Password don't match",
        })
      );
      return;
    }

    dispatchRedux(actions.registerInProgress());

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      dispatchRedux(
        actions.registerSuccess({
          user: {
            firstname,
            lastname,
            email: userCredential.user.email!,
            birthday,
          },
        })
      );
    } catch (err: any) {
      dispatchRedux(
        actions.registerFailure({
          error: err.message || 'Failed to register',
        })
      );
    }
  };

  const logout = async () => {
    dispatchRedux(actions.loading(true));

    try {
      await signOut(auth);
      dispatchRedux(actions.logoutSucces());
    } catch (err: any) {
      dispatchRedux(
        actions.logoutFailure({
          error: err.message || 'Logout failed',
        })
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
