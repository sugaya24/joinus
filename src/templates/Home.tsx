import React from 'react';
import { useDispatch } from 'react-redux';
import { PrimaryButton } from '../components/UIkit';
import { push } from 'connected-react-router';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>JOINUS</h2>
      <div>
        <PrimaryButton
          label={'SIGN IN'}
          onClick={() => dispatch(push('/signin'))}
        />
        <PrimaryButton
          label={'SIGN UP'}
          onClick={() => dispatch(push('/signup'))}
        />
      </div>
    </div>
  );
};

export default Home;
