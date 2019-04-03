import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme'
import api from './api'

import './index.css';

import App from './components/App';

import * as serviceWorker from './serviceWorker';

// TODO Clean up window binding... just here for testing
window.lyzeApi = api

ReactDOM.render(
  <Provider store={configureStore()}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


