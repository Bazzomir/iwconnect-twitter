import {createSelector} from 'reselect';
import {GlobalState} from '../types';

const themeState = (state: GlobalState) => state.theme;

export const themeSelector = createSelector(themeState, themeState => themeState.theme);
