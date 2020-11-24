import { createSelector } from 'reselect';

const usersSelector = (state: any) => state.users;

export const getUserId = createSelector([usersSelector], (state) => state.uid);

export const getUserName = createSelector(
  [usersSelector],
  (state) => state.username
);

export const getEmail = createSelector([usersSelector], (state) => state.email);
