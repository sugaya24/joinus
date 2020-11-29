import { UsersInfo } from './types';

export const SIGN_IN = 'SIGN_IN';
export const signInAction = (userState: UsersInfo) => {
  return {
    type: 'SIGN_IN',
    payload: {
      isSignedIn: true,
      role: userState.role,
      uid: userState.uid,
      username: userState.username,
      email: userState.email,
      image: userState.image,
    },
  };
};

export const SIGN_OUT = 'SIGN_OUT';
export const signOutAction = () => {
  return {
    type: 'SIGN_OUT',
    payload: {
      isSignedIn: false,
      role: '',
      uid: '',
      username: '',
    },
  };
};

export const UPDATE_IMAGE = 'UPDATE_IMAGE';
export const updateImageAction = (image: any) => {
  return {
    type: 'UPDATE_IMAGE',
    payload: image,
  };
};
