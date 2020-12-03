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
    usersPosts: [],
    favoriteUsers: [],
  },
};

export default initialState;
