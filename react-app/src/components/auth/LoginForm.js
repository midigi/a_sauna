import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import './authStyling/form.css';

const LoginForm = () => {
  const [errors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  function onLogin(e) {
    e.preventDefault();
    return dispatch(login({ email, password }));
  }
  const demoLogin = async (e) => {
    e.preventDefault();
    return dispatch(login({ email: 'demo@asauna.com', password: 'password' }));
  };

  if (sessionUser) {
    return <Redirect to="/" />;
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="background">
      <div className="center_box">
        <form onSubmit={onLogin} className="form">
          <h1 className="form_title">Log In</h1>
          <hr className="break"></hr>
          <p className="form_text">
            Welcome back! Log in to make more lists! <br></br>
            First time?
            <a href="/sign-up" className="form_link">
              Make an account
            </a>
          </p>

          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div>
            <input
              className="form_input"
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <input
            className="form_input"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
          <Button
            className="submit_button"
            shape="round"
            htmlType="submit"
            size="large"
            type="primary"
          >
            Login
          </Button>
          <Button
            className="submit_button"
            onClick={demoLogin}
            shape="round"
            htmlType="submit"
            size="large"
            type="primary"
          >
            Demo User
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
