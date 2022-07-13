import {createStore} from 'redux';
import {userReducer} from './user/user.reducer';

// const composeEnhancers =
//   (typeof window !== 'undefined' &&
//     //@ts-ignore
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

const store = createStore(
  //@ts-ignore
  userReducer,
  undefined,
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export {store};
