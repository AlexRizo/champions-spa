import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Router from './router/AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ createBrowserRouter(Router) } />
  </React.StrictMode>,
);