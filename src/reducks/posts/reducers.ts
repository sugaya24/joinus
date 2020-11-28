import * as Actions from './actions';
import initialState from '../store/initialState';

export const PostsReducer = (state = initialState.posts, action: any) => {
  switch (action.type) {
    case Actions.SEND_POST:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.FETCH_POSTS:
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;
  }
};
