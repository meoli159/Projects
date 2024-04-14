import { useEffect, useState } from 'react';
import { Input } from '../../../components/Input';
import './style.css';
import { Button } from '../../../components/Button';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { createUser, updateUser } from '../../../apis/admin';
import { UpdatedListSuccess, UpdatedUserSuccess } from '../../../redux/user/UserSlice';
import { User } from '../../../types/user';
type TProps = {
  onClose: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  userData?: User;
  type: 'update' | 'create';
};
export function UserForm({ onClose, userData, type }: TProps) {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState(0);
  const dispatch = useDispatch();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === '-') {
      e.preventDefault();
    }
  };
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      username: username,
      address: address,
      phone: phone,
      email: email,
      password: password,
    };
    switch (type) {
      case 'update':
        {
          await updateUser(userData!._id, data)
            .then((result) => {
              dispatch(UpdatedUserSuccess(result));
              toast.success('Update user successful');
              onClose();
            })
            .catch(() => {
              toast.error('Update user fail');
            });
        }
        break;

      case 'create':
        {
          if (!email || !password) toast.error('Please input Email/Password!!');
          await createUser(data)
            .then((result) => {
              console.log(result);
              dispatch(UpdatedListSuccess(result));
              toast.success('Create user successful');
              onClose();
            })
            .catch(() => toast.error('Create user fail'));
        }
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    if (type === 'update' && userData?._id && userData) {
      setUserName(userData.username);
      setEmail(userData.email || '');
      setPassword(userData.password || '');
      setAddress(userData.address || '');
      setPhone(userData.phone || 0);
    }
  }, [type, userData]);
  return (
    <div className="user-form__page">
      {type === 'update' && userData?._id ? <h1>Update User</h1> : <h1>Create User</h1>}
      <hr />
      <form className="user-form__wrapper" onSubmit={onSubmitHandler}>
        <div>
          <Input
            label="User Name"
            type="text"
            id="username"
            name="username"
            // className=""
            placeholder="User Name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            id="email"
            name="email"
            // className=""
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            id="password"
            name="password"
            // className=""
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Address"
            type="text"
            id="address"
            name="address"
            // className=""
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            label="Phone"
            type="number"
            id="phone"
            name="phone"
            // className=""
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(Number(e.target.value))}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div className="user-form__btn-action">
          <Button className="btn-error" onClick={onClose}>
            Cancel
          </Button>
          {type === 'update' && userData?._id ? (
            <Button className="btn-success" type="submit">
              Update
            </Button>
          ) : (
            <Button className="btn-success" type="submit">
              Create
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
