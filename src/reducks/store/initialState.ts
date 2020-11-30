const initialState = {
  users: {
    isSignedIn: false,
    role: '',
    uid: '',
    username: '',
    email: '',
    image: { id: '', path: '' },
    favoritePosts: [],
  },
  posts: {
    list: [],
    favoriteUsers: [],
  },
};

export default initialState;
