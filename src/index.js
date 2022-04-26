import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from './app/store'
import { Provider } from 'react-redux'

import './index.css';

import HomeScreen from './screens/HomeScreen';
import ErrorScreen from './screens/ErrorScreen';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="*" element={<ErrorScreen />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);