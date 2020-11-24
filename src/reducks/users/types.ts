export type UsersInfo = {
  isSignedIn: boolean;
  uid: string;
  username: string;
  email: string;
};

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

type SignInAction = {
  type: typeof SIGN_IN;
  payload: UsersInfo;
};

type SignOutAction = {
  type: typeof SIGN_OUT;
  payload: UsersInfo;
};

export type UsersActionTypes = SignInAction | SignOutAction;
