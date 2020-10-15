import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import actionType from '../../context/actionType';
import { useStateValue } from '../../context/StateProvider';
import { auth } from '../../firebase';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, dispatch] = useStateValue();
  const history = useHistory();

  const handleUserExists = (auth) => {
    dispatch({ type: actionType.SET_USER, user: auth.user });
    auth?.user && history.push('/');
  }

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(handleUserExists)
      .catch((error) => alert(error.message));
    setEmail('');
    setPassword('');
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(handleUserExists)
      .catch((error) => alert(error.message));
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form className="login__form" onSubmit={signIn}>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__signInButton" type="submit">
            Sign In
          </button>
        </form>
        <p>
          By signin-in you agree to Amazon's Clone Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
