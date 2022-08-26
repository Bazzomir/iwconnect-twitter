import {Action} from 'redux';
import {isType} from 'typescript-fsa';
import {toggleTheme} from './theme.actions';
import {ThemeState} from './theme.types';

const INITIAL_STATE: ThemeState = {
  theme: 'dark',
};

export const themeReducer = (state: ThemeState = INITIAL_STATE, action: Action): ThemeState => {
  if (isType(action, toggleTheme)) {
    return {
      theme: state.theme === 'dark' ? 'light' : 'dark',
    };
  }

  return state;
};
