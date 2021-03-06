import { createSelector } from 'reselect';

const usersSelector = (state: any) => state.users;

export const getIsSignedIn = createSelector(
  [usersSelector],
  (state) => state.isSignedIn
);

export const getUserId = createSelector([usersSelector], (state) => state.uid);

export const getUserName = createSelector(
  [usersSelector],
  (state) => state.username
);

export const getEmail = createSelector([usersSelector], (state) => state.email);

export const getImage = createSelector([usersSelector], (state) => state.image);

export const getFavoritePosts = createSelector(
  [usersSelector],
  (state) => state.favoritePosts
);
