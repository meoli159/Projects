import { useState } from 'react';
import './style.css';
import { register } from '../../apis/user.js';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Input } from '../../components/Input/index.js';
export const Register = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState(0);
  const navigate = useNavigate();
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
    if (!email || !password) toast.error('Please input Email/Password!!');
    await register(data)
      .then(() => toast.success('Register account success'))
      .then(() => navigate('/auth/login'))
      .catch((err) => toast.error(err.response.data.message));
  };

  return (
    <div className="register">
      <ToastContainer />
      <form className="register__form" onSubmit={onSubmitHandler}>
        <h1>Register</h1>
        <div>
          <Input
            label="User Name"
            type="text"
            id="username"
            name="username"
            className="register__form--input"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            id="email"
            name="email"
            className="register__form--input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            id="password"
            name="password"
            className="register__form--input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Address"
            type="text"
            id="address"
            name="address"
            className="register__form--input"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            label="Phone"
            type="number"
            id="phone"
            name="phone"
            className="register__form--input"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(Number(e.target.value))}
            onKeyDown={handleKeyPress}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
