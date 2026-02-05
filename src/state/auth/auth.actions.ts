import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('AUTH');

export const logoutAction = actionCreator('LOGOUT');
