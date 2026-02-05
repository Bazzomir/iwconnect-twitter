import { createSelector } from 'reselect';
import { GlobalState } from '../types';

const userState = (state: GlobalState) => {
  return state.user;
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
