import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInAction } from './reducks/users/actions';

const App = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: any) => state);

  return (
    <div>
      <h1>JOINUS</h1>
      <button
        onClick={() =>
          dispatch(
            signInAction({
              uid: '0001',
              username: 'yuki',
              isSignedIn: true,
              email: 'sugaya324@gmail.com',
            })
          )
        }
      >
        Sign In
      </button>
    </div>
  );
};

export default App;
