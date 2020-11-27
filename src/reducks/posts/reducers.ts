import * as Actions from './actions';
import initialState from '../store/initialState';

export const PostsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Actions.SEND_POST:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
