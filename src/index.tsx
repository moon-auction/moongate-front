import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import {CookiesProvider} from 'react-cookie';

import App from './App';
import Home from './pages/Home';
import Shortcut from './pages/Shortcut'
import Auction from './pages/Auction';
import Recruit from './pages/Recruit';
import Board from './pages/Board';
import Login from './pages/Login';
import Register from './pages/Register';
import FindIdPw from './pages/FindIdPw';
import MyPage from './pages/MyPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'shortcut',
        element: <Shortcut />,
      },
      {
        path: 'auction',
        element: <Auction />,
      },
      {
        path: 'recruit',
        element: <Recruit />,
      },
      {
        path: 'board',
        element: <Board />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'findidpw',
        element: <FindIdPw />,
      },
      {
        path: 'mypage',
        element: <MyPage />,
      },
    ],
  },
]);

const store = createStore(rootReducer);

root.render(
    <Provider store={store}>
      <CookiesProvider>
        <RouterProvider router={router} />
      </CookiesProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
