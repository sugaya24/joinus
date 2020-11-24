import React from 'react';
import { getUserId, getUserName, getEmail } from '../reducks/users/selector';
import { useSelector } from 'react-redux';

const Home = () => {
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const username = getUserName(selector);
  const email = getEmail(selector);

  return (
    <div>
      Home
      <p>{uid}</p>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  );
};

export default Home;
