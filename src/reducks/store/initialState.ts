const initialState = {
  users: {
    isSignedIn: false,
    role: '',
    uid: '',
    username: '',
    email: '',
    image: { id: '', path: '' },
  },
  posts: {
    list: [],
  },
};

export default initialState;
