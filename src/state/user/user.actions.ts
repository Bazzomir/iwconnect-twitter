import actionCreatorFactory from 'typescript-fsa';
import {User} from './user.types';

const actionCreator = actionCreatorFactory('USER');

export const loginInProgress = actionCreator('LOGIN_IN_PROGRESS');

export const loginSuccess = actionCreator<{user?: User}>('LOGIN');

export const loginFailure = actionCreator<{error: string}>('LOGIN_FAILURE');

export const resetState = actionCreator('RESET_STATE');

export const loading = actionCreator<boolean>('LOADING');

export const logoutSucces = actionCreator('LOGOUT_SUCCESS');

export const logoutFailure = actionCreator<{error: string}>('LOGOUT_FAILUER');

export const registerInProgress = actionCreator('REGISTER_IN_PROGRESS');

export const registerSuccess = actionCreator<{user?: User}>('REGISTER_SUCCESS');

export const registerFailure = actionCreator<{error: string}>('REGISTER_FAILUER');

export const getUser = actionCreator<{user: User}>('GET_USER');

export const getUserUnsuccess = actionCreator<{error: string}>('GET_USER_UNSUCCESS');
