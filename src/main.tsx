import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './pages/Root';
import Votes from './pages/Votes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: '/votes/:amount',
    element: <Votes />
  },
  {
    path: 'login',
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
  