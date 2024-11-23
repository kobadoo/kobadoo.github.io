import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reducer from './store/reducers/reducer';

const store = configureStore({ reducer: reducer })

const app = (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(app);