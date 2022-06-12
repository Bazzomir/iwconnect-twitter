import React, {useState, useCallback} from 'react';

interface User {
  username: string;
  password: string;
}

interface ContextValues {
  user?: User;
}

export const AuthContext = React.createContext<ContextValues>({
  user: undefined,
});

export const AuthContextConstructor = ({children}: {children: JSX.Element}) => {
  const [user, setUser] = useState<User>({
    username: 'nekoj',
    password: '12345',
  });

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};
