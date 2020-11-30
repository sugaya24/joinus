import { Post } from './types';

export const SEND_POST = 'SEND_POST';
export const sendPostAction = (post: Post) => {
  return {
    type: 'SEND_POST',
    payload: post,
  };
};

export const FETCH_POSTS = 'FETCH_POSTS';
export const fetchPostsAction = (posts: any) => {
  return {
    type: 'FETCH_POSTS',
    payload: posts,
  };
};

export const FETCH_FAVORITE_USERS = 'FETCH_FAVORITE_USERS';
export const fetchFavoriteUsersAction = (favoriteUsersList: any) => {
  return {
    type: 'FETCH_FAVORITE_USERS',
    payload: favoriteUsersList,
  };
};
