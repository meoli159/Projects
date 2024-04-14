import { useEffect, useState } from 'react';

import { deleteUser, getUsers } from '../../../apis/admin';
import { User } from '../../../types/user';
import { Button } from '../../../components/Button';
import './style.css';
import { toast, ToastContainer } from 'react-toastify';
import { Modal } from '../../../components/Modal';
import { UserForm } from '../UserForm';
import { Paging } from '../../../components/Paging';
import { useDispatch, useSelector } from 'react-redux';
import { DeletedListSuccess, GetListSuccess } from '../../../redux/user/UserSlice';
type userState = {
  user: User[];
  totalPages: number;
};
export function UserList() {
  const users = useSelector((state: { user: userState }) => state.user?.user);
  const totalPage = useSelector((state: { user: userState }) => state.user.totalPages);
  const [currentPage, setCurrentPage] = useState(1);
  // const [totalPage, setTotalPage] = useState(1);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string>('');
  const [type, setType] = useState<'update' | 'create'>('create');
  const dispatch = useDispatch();

  const DeleteOnClick = async (id: string, email?: string) => {
    await deleteUser(id)
      .then((data) => {
        window.confirm('Are you sure you want to delete user: ' + email),
          dispatch(DeletedListSuccess(data));
      })
      .catch(() => toast.error(`Delete ${email} failed`));
  };
  const UpdateOnClick = (id: string) => {
    setModalIsVisible(true);
    setSelectedUserId(id);
    setType('update');
  };
  const CreateOnClick = () => {
    setModalIsVisible(true);
    setType('create');
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    getUsers(currentPage).then((res) => {
      // setTotalPage(res.totalPage);
      dispatch(GetListSuccess(res));
    });
  }, [currentPage, dispatch]);

  return (
    <div className="users-page">
      {modalIsVisible && (
        <Modal onClose={() => setModalIsVisible(false)}>
          <UserForm
            onClose={() => setModalIsVisible(false)}
            userData={users.find((user) => user._id === selectedUserId)}
            type={type}
          />
        </Modal>
      )}
      <h1>User List</h1>
      <Button className="create-btn btn-success" type="button" onClick={() => CreateOnClick()}>
        Create User
      </Button>
      <table id="users">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users
            ? users.map((user) => (
                <tr key={user._id}>
                  <td> {user.username}</td>
                  <td> {user.email}</td>
                  <td> {user.address}</td>
                  <td>{user.phone}</td>
                  <td>{user.roles}</td>
                  <td className="users-page__action-btn">
                    <Button
                      className="btn-error"
                      type="button"
                      onClick={() => DeleteOnClick(user._id, user.email)}>
                      Delete
                    </Button>
                    <Button
                      className="btn-info"
                      type="button"
                      onClick={() => UpdateOnClick(user._id)}>
                      Update
                    </Button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      <Paging totalPages={totalPage} currentPage={currentPage} onPageChange={handlePageChange} />
      <ToastContainer />
    </div>
  );
}
