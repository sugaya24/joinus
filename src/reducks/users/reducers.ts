import * as Actions from './actions';
import initialState from '../store/initialState';
import { UsersActionTypes } from './types';

export const UsersReducer = (
  state = initialState.users,
  action: UsersActionTypes
) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.SIGN_OUT:
      return {
        ...action.payload,
      };
    case Actions.UPDATE_IMAGE:
      return {
        ...state,
        image: { ...action.payload },
      };
    case Actions.FETCH_FAVORITE_POSTS:
      return {
        ...state,
        favoritePosts: action.payload,
      };
    default:
      return state;
  }
};
