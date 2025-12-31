import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CustomThemeContextConstructor } from './context/CustomThemeContext';
import { TweetsContextConstructor } from './context/TweetsContext';
import { TweetsCommentsContextConstructor } from './context/TweetsCommentsContext';
import { AuthContextConstructor } from './context/AuthContext';
import { store } from './state/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextConstructor>
        <BrowserRouter>
          <CustomThemeContextConstructor>
            <TweetsContextConstructor>
              <TweetsCommentsContextConstructor>
                <App />
              </TweetsCommentsContextConstructor>
            </TweetsContextConstructor>
          </CustomThemeContextConstructor>
        </BrowserRouter>
      </AuthContextConstructor>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
