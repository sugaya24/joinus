import { createSelector } from 'reselect';

const postsSelector = (state: any) => state.posts;

export const getPosts = createSelector([postsSelector], (state) => state.list);

export const getFavoriteUsers = createSelector(
  [postsSelector],
  (state) => state.favoriteUsers
);
