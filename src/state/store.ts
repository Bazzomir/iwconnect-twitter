import {createStore, combineReducers} from 'redux';
import {themeReducer} from './theme/theme.reducer';
import {userReducer} from './user/user.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
});

const store = createStore(
  //@ts-ignore
  rootReducer,
  undefined,
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export {store};
