import { push } from 'connected-react-router';
import { db, FirebaseTimestamp } from '../../firebase';
import { fetchPostsAction } from './actions';

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

export const fetchPosts = (uid = '') => {
  return async (dispatch: any) => {
    let query = postsRef.orderBy('created_at', 'desc');
    query = uid !== '' ? query.where('uid', '==', uid) : query;
    query.get().then((snapshots) => {
      const postList: any[] = [];
      snapshots.forEach((snapshot) => {
        const post = snapshot.data();
        postList.push(post);
      });
      dispatch(fetchPostsAction(postList));
    });
  };
};
