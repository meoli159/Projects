import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/Footer';

import './style.css';
import { SideBar } from '../../components/SideBar';
export function AdminLayout() {
  return (
    <div className="admin-layout">
      <div className="admin-layout__sidebar ">
        <SideBar />
      </div>
      <div className="admin-layout__outlet">
        <Outlet />
      </div>
      <div className="admin-layout__footer">
        <Footer />
      </div>
    </div>
  );
}
