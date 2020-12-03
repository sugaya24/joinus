import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
  compose,
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
    compose(
      applyMiddleware(routerMiddleware(history), thunk),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
