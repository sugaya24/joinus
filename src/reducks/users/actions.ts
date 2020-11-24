import { UsersInfo } from './types';

export const SIGN_IN = 'SIGN_IN';
export const signInAction = (userState: UsersInfo) => {
  return {
    type: 'SIGN_IN',
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username,
      email: userState.email,
    },
  };
};
