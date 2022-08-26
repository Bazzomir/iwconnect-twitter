import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('THEME');

export const toggleTheme = actionCreator('TOGGLE_THEME');

