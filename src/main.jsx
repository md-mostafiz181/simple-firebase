import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Header from './components/Header/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Header></Header>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
