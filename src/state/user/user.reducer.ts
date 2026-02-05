import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import { UserState } from './user.types';
import * as actions from './user.actions';

const INITIAL_STATE: UserState = {
  userIsLoggedIn: false,
  userIsRegistred: false,
  loading: false,
  error: '',
};

export const userReducer = (state: UserState = INITIAL_STATE, action: Action): UserState => {
  if (isType(action, actions.loginInProgress)) {
    console.log(action);
    return {
      loading: true,
      error: '',
      userIsLoggedIn: false,
      userIsRegistred: true,
    };
  }

  if (isType(action, actions.loginSuccess)) {
    return {
      loading: false,
      error: '',
      user: action.payload.user,
      userIsLoggedIn: true,
      userIsRegistred: true,
    };
  }

  if (isType(action, actions.loginFailure)) {
    return {
      loading: false,
      error: action.payload.error,
      user: undefined,
      userIsLoggedIn: false,
      userIsRegistred: false,
    };
  }

  if (isType(action, actions.logoutSuccess) || isType(action, actions.resetState)) {
    return INITIAL_STATE;
  }

  if (isType(action, actions.logoutFailure)) {
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      userIsLoggedIn: true,
    };
  }

  if (isType(action, actions.loading)) {
    return {
      ...state,
      loading: action.payload,
    };
  }

  if (isType(action, actions.registerSuccess)) {
    return {
      loading: false,
      error: '',
      user: action.payload.user,
      userIsRegistred: true,
      userIsLoggedIn: false,
    };
  }

  if (isType(action, actions.registerFailure)) {
    return {
      loading: false,
      error: action.payload.error,
      user: undefined,
      userIsRegistred: false,
      userIsLoggedIn: false,
    };
  }

  if (isType(action, actions.registerInProgress)) {
    return {
      loading: true,
      error: '',
      userIsRegistred: false,
      userIsLoggedIn: false,
    };
  }

  return state;
};
