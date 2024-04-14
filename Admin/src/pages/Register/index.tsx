import { useState } from 'react';
import './style.css';
export const Register = () => {
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.table({ userName: userName, password: password });
  };

  return (
    <div className="register">
      <form className="login__form" onSubmit={onSubmitHandler}>
        <h1>Login</h1>
        <p className="form__input">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            placeholder="User Name"
            id="userName"
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
