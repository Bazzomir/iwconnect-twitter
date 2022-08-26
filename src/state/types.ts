import {ThemeState} from './theme/theme.types';
import {UserState} from './user/user.types';

export type GlobalState = {
  user: UserState;
  theme: ThemeState;
};
