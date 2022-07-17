import {useSelector} from 'react-redux';
import {UserState} from './user.types';

export const useAuthState = (): UserState => {
  const user = useSelector((state: UserState) => {
    return state.user;
  });
  const error = useSelector((state: UserState) => {
    return state.error;
  });
  const loading = useSelector((state: UserState) => {
    return state.loading;
  });
  const userIsLoggedIn = useSelector((state: UserState) => {
    return state.userIsLoggedIn;
  });
  const userIsRegistred = useSelector((state: UserState) => {
    return state.userIsRegistred;
  });

  return {
    user,
    error,
    loading,
    userIsLoggedIn,
    userIsRegistred,
  };
};
