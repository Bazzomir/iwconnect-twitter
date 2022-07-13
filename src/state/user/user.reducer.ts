import {isType} from 'typescript-fsa';
import {UserState} from './user.types';
import {loginInProgress} from './user.actions';

export const userReducer = (state: UserState, action: any): UserState => {
  if (isType(action, loginInProgress)) {
    console.log(action);
    return {
      userIsLoggedIn: action.payload.userIsLoggedIn,
      userIsRegistred: true,
      loading: true,
      error: '',
    };
  }
  return state;
};
