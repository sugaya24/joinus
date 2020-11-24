import * as Actions from './actions';
import initialState from '../store/initialState';
console.log(initialState);

export const UsersReducer = (
  state = initialState.users,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
