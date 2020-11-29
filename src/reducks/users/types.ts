export type UsersInfo = {
  isSignedIn: boolean;
  role: string;
  uid: string;
  username: string;
  email?: string;
  confirmPassword?: string;
  image?: object;
};

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const UPDATE_IMAGE = 'UPDATE_IMAGE';

type SignInAction = {
  type: typeof SIGN_IN;
  payload: UsersInfo;
};

type SignOutAction = {
  type: typeof SIGN_OUT;
  payload: UsersInfo;
};

type UpdateImageAction = {
  type: typeof UPDATE_IMAGE;
  payload: UsersInfo;
};

export type UsersActionTypes = SignInAction | SignOutAction | UpdateImageAction;
