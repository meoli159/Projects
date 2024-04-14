import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { logout } from '../../apis/user';
import { useDispatch } from 'react-redux';
import { logOutSuccess } from '../../redux/auth/AuthSlice';
import './style.css';

export const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const LogOutHandler = async () => {
    try {
      await logout();
      dispatch(logOutSuccess());
      navigate('/auth/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <Link
          to="/admin/dashboard"
          className={location.pathname === '/admin/dashboard' ? 'active' : ''}>
          Dashboard
        </Link>
        <Link to="/admin/users" className={location.pathname === '/admin/users' ? 'active' : ''}>
          User List
        </Link>
      </div>
      <Button className="logout-btn btn-error" type="button" onClick={LogOutHandler}>
        Logout
      </Button>
    </div>
  );
};
