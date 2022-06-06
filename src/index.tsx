import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {CustomThemeContextConstructor} from './context/CustomThemeContext';
import {TweetsContextConstructor} from './context/TweetsContext';
import {TweetsCommentsContextConstructor} from './context/TweetsCommentsContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomThemeContextConstructor>
        <TweetsContextConstructor>
          <TweetsCommentsContextConstructor>
            <App />
          </TweetsCommentsContextConstructor>
        </TweetsContextConstructor>
      </CustomThemeContextConstructor>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
