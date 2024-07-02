import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css';
import AppRouter from './Router/Router';
import { Provider } from 'react-redux';
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
);
