import * as Actions from './actions';
import initialState from '../store/initialState';

export const PostsReducer = (state = initialState.posts, action: any) => {
  switch (action.type) {
    case Actions.SEND_POST:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.FETCH_ALL_POSTS:
      return {
        ...state,
        list: [...action.payload],
      };
    case Actions.FETCH_USERS_POSTS:
      return {
        ...state,
        list: [...action.payload],
      };
    case Actions.FETCH_FAVORITE_USERS:
      return {
        ...state,
        favoriteUsers: [...action.payload],
      };
    case Actions.ADD_POST:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
};
