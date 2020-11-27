import React from 'react';
import { getUserId, getUserName, getEmail } from '../reducks/users/selector';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../reducks/users/operations';

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const username = getUserName(selector);
  const email = getEmail(selector);

  return (
    <div>
      Home
      <p>uid: {uid}</p>
      <p>username: {username}</p>
      <p>email: {email}</p>
      <button onClick={() => dispatch(signOut())}>SIGN OUT</button>
    </div>
  );
};

export default Home;
