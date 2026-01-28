import {createStore, combineReducers} from 'redux';
import {userReducer} from './legacyUser/user.reducer';

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(
  //@ts-ignore
  rootReducer,
  undefined,
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export {store};
