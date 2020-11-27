import { push } from 'connected-react-router';
import { db, FirebaseTimestamp } from '../../firebase';

const postsRef = db.collection('posts');

export const sendPost = (
  title: string,
  date: string,
  location: string,
  description: string
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
    };

    const ref = postsRef.doc();
    const id = ref.id;
    data.id = id;

    return postsRef
      .doc(id)
      .set(data, { merge: true })
      .then(() => {
        dispatch(push('/'));
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
};
