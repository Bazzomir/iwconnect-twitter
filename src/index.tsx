import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CustomThemeContextConstructor } from './context/CustomThemeContext';
import { TweetsContextConstructor } from './context/TweetsContext';
import { AuthProvider } from './context/AuthContext';
import { store } from './state/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter basename="/iwconnect-twitter">
          <CustomThemeContextConstructor>
            <TweetsContextConstructor>
              <App />
            </TweetsContextConstructor>
          </CustomThemeContextConstructor>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
