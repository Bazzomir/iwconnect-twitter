import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const loginInProgress = actionCreator<{userIsLoggedIn: boolean}>('LOGIN_IN_PROGRESS');
