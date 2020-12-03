import { push } from 'connected-react-router';
import { db, FirebaseTimestamp } from '../../firebase';
import {
  addPostAction,
  fetchFavoriteUsersAction,
  fetchAllPostsAction,
  fetchUsersPostsAction,
} from './actions';

const postsRef = db.collection('posts');

export const sendPost = (
  title: string,
  date: string,
  location: string,
  description: string,
  author: string,
  uid: string
) => {
  return async (dispatch: any) => {
    const timestamp = FirebaseTimestamp.now();

    const data = {
      id: '',
      title: title,
      date: date,
      location: location,
      description: description,
      created_at: timestamp,
      author: author,
      uid: uid,
    };

    const ref = postsRef.doc();
    const id = ref.id;
    data.id = id;

    return postsRef
      .doc(id)
      .set(data, { merge: true })
      .then(() => {
        dispatch(push('/discover'));
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
};

export const fetchAllPosts = (uid: string) => {
  return async (dispatch: any) => {
    const postList: any[] = [];
    dispatch(fetchAllPostsAction([]));
    postsRef
      .orderBy('created_at', 'desc')
      .get()
      .then((snapshots) => {
        snapshots.forEach((snapshot) => {
          const post = snapshot.data();
          hasFavoriteByUser(post.id, uid).then((hasFavorite) => {
            postList.push({ ...post, hasFavorite });
            dispatch(addPostAction({ ...post, hasFavorite }));
          });
        });
      });
  };
};

export const fetchUsersPosts = (uid: string) => {
  return async (dispatch: any) => {
    const postList: any[] = [];
    postsRef
      .orderBy('created_at', 'desc')
      .where('uid', '==', uid)
      .get()
      .then((snapshots) => {
        snapshots.forEach((snapshot) => {
          const post = snapshot.data();
          postList.push(post);
        });
        dispatch(fetchUsersPostsAction(postList));
      });
  };
};

export const hasFavoriteByUser = (postId: string, uid: string) => {
  // TODO: need to get one data?
  return postsRef
    .doc(postId)
    .collection('favoriteUsers')
    .where('uid', '==', uid)
    .get()
    .then((post: any) => {
      return !!post.size;
    });
};

export const fetchFavoriteUsers = (postId: any) => {
  return async (dispatch: any) => {
    postsRef
      .doc(postId)
      .collection('favoriteUsers')
      .get()
      .then((snapshots) => {
        const favoriteUsersList: any[] = [];
        snapshots.forEach((snapshot) => {
          const uid = snapshot.data().uid;
          const userRef = db.collection('users').doc(uid);
          userRef.get().then((snapshot) => {
            const user = snapshot.data();
            favoriteUsersList.push(user);
            dispatch(fetchFavoriteUsersAction(favoriteUsersList));
          });
        });
      });
  };
};

export const addFavoritePost = (postId: any) => {
  return async (dispatch: any, getState: any) => {
    const uid = getState().users.uid;
    const userRef = db.collection('users').doc(uid);
    const postRef = db.collection('posts').doc(postId);
    const timestamp = FirebaseTimestamp.now();

    const batch = db.batch();

    batch.set(userRef.collection('favoritePosts').doc(postId), {
      id: postId,
      postRef: postRef,
      created_at: timestamp,
    });
    batch.set(postRef.collection('favoriteUsers').doc(uid), {
      uid: uid,
      created_at: timestamp,
    });

    await batch.commit();
  };
};
