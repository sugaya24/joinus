import { Post } from './types';

export const SEND_POST = 'SEND_POST';
export const sendPostAction = (post: Post) => {
  return {
    type: 'SEND_POST',
    payload: post,
  };
};

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const fetchAllPostsAction = (posts: any) => {
  return {
    type: 'FETCH_ALL_POSTS',
    payload: posts,
  };
};

export const FETCH_USERS_POSTS = 'FETCH_USERS_POSTS';
export const fetchUsersPostsAction = (posts: any) => {
  return {
    type: 'FETCH_USERS_POSTS',
    payload: posts,
  };
};

export const ADD_POST = 'ADD_POST';
export const addPostAction = (post: any) => {
  return {
    type: 'ADD_POST',
    payload: post,
  };
};

export const FETCH_FAVORITE_USERS = 'FETCH_FAVORITE_USERS';
export const fetchFavoriteUsersAction = (favoriteUsersList: any) => {
  return {
    type: 'FETCH_FAVORITE_USERS',
    payload: favoriteUsersList,
  };
};
