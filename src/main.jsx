import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { AuthProvider } from './auth';
import Router from './router/AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={ createBrowserRouter(Router) } />
    </AuthProvider>
  // </React.StrictMode>,
);