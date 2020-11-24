import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { signInAction } from '../reducks/users/actions';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Login</h2>
      <button
        onClick={() => {
          dispatch(
            signInAction({
              isSignedIn: true,
              uid: '0001',
              username: 'yuki',
              email: 'sugaya324@gmail.com',
            })
          );
          dispatch(push('/'));
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
