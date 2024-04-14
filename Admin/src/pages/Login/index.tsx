import { useState } from 'react';
import './style.css';
import { login } from '../../apis/user.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/auth/AuthSlice.js';
import { ToastContainer, toast } from 'react-toastify';
export const Login = () => {
  const [email, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = { email: email, password: password };
    if (!email || !password) toast.error('Please input Email/Password!!');
    await login(data)
      .then((data) => dispatch(loginSuccess(data)))
      .then(() => navigate('/admin/users'))
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <ToastContainer />
      <form className="login__form" onSubmit={onSubmitHandler}>
        <h1>Login</h1>
        <p className="form__input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={(e) => setUserName(e.target.value)}
          />
        </p>
        <p className="form__input">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            placeholder="Password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
