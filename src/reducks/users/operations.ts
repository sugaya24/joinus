import { signInAction } from './actions';
import { push } from 'connected-react-router';

export const signIn = () => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;

    if (!isSignedIn) {
      const url = 'https://api.github.com/users/sugaya24';

      const response = await fetch(url)
        .then((res) => res.json())
        .catch(() => null);

      const username = response.login;

      dispatch(
        signInAction({
          isSignedIn: true,
          uid: '0001',
          username: username,
          email: 'sugaya324@gmail.com',
        })
      );
      dispatch(push('/'));
    }
  };
};
