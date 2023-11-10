import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './pages/Root';
import Votes from './pages/Votes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: '/votes',
    element: <Votes />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
  