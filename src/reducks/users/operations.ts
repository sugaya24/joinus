import { signInAction, signOutAction } from './actions';
import { push } from 'connected-react-router';
import { auth, db, FirebaseTimestamp } from '../../firebase/index';
import { UsersInfo } from './types';

export const listenAuthState = () => {
  return async (dispatch: any) => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;

        db.collection('users')
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();

            dispatch(
              signInAction({
                isSignedIn: true,
                role: data?.role,
                uid: uid,
                username: data?.username,
              })
            );
            dispatch(push('/'));
          });
      } else {
        dispatch(push('/signin'));
      }
    });
  };
};

export const resetPassword = (email: string) => {
  return async (dispatch: any) => {
    if (email === '') {
      alert('You need to fill required form.');
      return false;
    }
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        alert('Email to reset your Password has sent.');
        dispatch(push('/signin'));
      })
      .catch(() => {
        alert('Failed to reset your Password. Please try again later.');
      });
  };
};

export const signIn = (email: string, password: string) => {
  return async (dispatch: any) => {
    if (email === '' || password === '') {
      alert('You need to fill required form.');
      return false;
    }

    auth.signInWithEmailAndPassword(email, password).then((result) => {
      const user = result.user;

      if (user) {
        const uid = user.uid;

        db.collection('users')
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(
              signInAction({
                isSignedIn: true,
                role: data?.role,
                uid: uid,
                username: data?.username,
              })
            );
            dispatch(push('/'));
          });
      }
    });
  };
};

export const signUp = (
  username: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  return async (dispatch: any) => {
    // Validation
    if (
      username === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      alert('You need to fill required form.');
      return false;
    }

    if (password !== confirmPassword) {
      alert('Password and confirmPassword is not same.');
      return false;
    }

    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;

        if (user) {
          const uid = user.uid;
          const timestamp = FirebaseTimestamp.now();
          console.log('timestamp', timestamp);

          const userInitialData = {
            created_at: timestamp,
            email: email,
            uid: uid,
            updated_at: timestamp,
            username: username,
          };

          db.collection('users')
            .doc(uid)
            .set(userInitialData)
            .then(() => {
              dispatch(push('/'));
            });
        }
      });
  };
};

export const signOut = () => {
  return async (dispatch: any) => {
    auth.signOut().then(() => {
      dispatch(signOutAction());
      dispatch(push('/signin'));
    });
  };
};
