import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

import { AdminLayout } from '../layouts/Admin';
import { NotFound } from '../pages/NotFound';
import { UserList } from '../pages/Admin/UserList';
// import { UpdateUser } from '../pages/Admin/UpdateUser';
// import { CreateUser } from '../pages/Admin/CreateUser';
import { ProtectedRoute } from './ProtectedRoutes';
import { Dashboard } from '../pages/Admin/DashBoard';

export const router = createBrowserRouter([
  { path: '/auth/login', element: <Login /> },
  { path: '/auth/register', element: <Register /> },
  { path: '/admin', element: <Navigate to="/admin/dashboard" /> },
  {
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: '/admin/dashboard', element: <Dashboard /> },
      { path: '/admin/users', element: <UserList /> }, //get list of user
      // { path: '/admin/users/:id', element: <UpdateUser /> },
      // { path: '/admin/user', element: <CreateUser /> },
    ],
  },
  { path: '*', element: <NotFound /> },
]);
