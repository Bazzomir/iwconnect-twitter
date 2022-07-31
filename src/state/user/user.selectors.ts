import {useSelector} from 'react-redux';
import {createSelector} from 'reselect';
import {UserState} from './user.types';

// export const useAuthState = (): UserState => {
//   const user = useSelector((state: UserState) => {
//     return state.user;
//   });
//   const error = useSelector((state: UserState) => {
//     return state.error;
//   });
//   const loading = useSelector((state: UserState) => {
//     return state.loading;
//   });
//   const userIsLoggedIn = useSelector((state: UserState) => {
//     return state.userIsLoggedIn;
//   });
//   const userIsRegistred = useSelector((state: UserState) => {
//     return state.userIsRegistred;
//   });

//   return {
//     user,
//     error,
//     loading,
//     userIsLoggedIn,
//     userIsRegistred,
//   };
// };

const userState = (state: UserState) => {
  return state;
};

export const userSelector = createSelector(userState, state => state.user);

export const emailSelector = createSelector(userSelector, user => user?.email);
export const emailCapitalizedSelector = createSelector(emailSelector, email =>
  email?.toUpperCase()
);

export const errorSelector = createSelector(userState, state => state.error);
export const loadingSelector = createSelector(userState, state => state.loading);
export const userIsLoggedInSelector = createSelector(userState, state => state.userIsLoggedIn);
export const userIsRegistredSelector = createSelector(userState, state => state.userIsRegistred);
