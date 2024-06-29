import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Users} from './components/Users/Users';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import { Layout } from './components/layout/Layout';
import { ROUTES } from './constans/routes';
import { UserPage } from './Pages/UserPage/UserPage';

const router = createBrowserRouter([
 
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: ROUTES.HOME,
        element: <Users/>,
      },
      {
        path: ROUTES.DASHBOARD,
        element: <Dashboard/>
      },
      {
        path: ROUTES.USERPAGE,
        element: <UserPage/>
      },
    ]
  }
  
]);

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router}/>
      </React.StrictMode>

  );
};

export default App;
