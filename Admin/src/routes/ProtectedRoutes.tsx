import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AuthState } from '../types/user';
type ProtectedRouteProps = {
  children: React.ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuth = useSelector((state: { auth: AuthState }) => state.auth.isAuth);

  return isAuth ? children : <Navigate to="/auth/login" />;
};
