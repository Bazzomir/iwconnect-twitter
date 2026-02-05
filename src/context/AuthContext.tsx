import React, { createContext, useContext, useEffect, useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, User, } from 'firebase/auth';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../state/auth/auth.actions';

interface RegisterParams {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  repeatPassword: string;
  birthday: string;
}

interface AuthContextValues {
  user: User | null;
  loading: boolean;
  login: (params: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  register: (params: RegisterParams) => Promise<void>;
}

const AuthContext = createContext<AuthContextValues>({
  user: null,
  loading: true,
  login: async () => { },
  logout: async () => { },
  register: async () => { },
});

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);


  const login = async ({ email, password }: { email: string; password: string }) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const register = async ({
    email,
    password,
    repeatPassword,
  }: RegisterParams) => {
    if (password !== repeatPassword) {
      throw new Error("Password and Repeat Password don't match");
    }

    await createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
    dispatch(logoutAction());
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
