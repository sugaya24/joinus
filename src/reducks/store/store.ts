import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { UsersReducer } from '../users/reducers';
import thunk from 'redux-thunk';
import { PostsReducer } from '../posts/reducers';

export default function createStore(history: any) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
      posts: PostsReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
}
