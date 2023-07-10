import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import articleReducer from './reducers/articleReducer';

const store = createStore(
  articleReducer,
  compose(applyMiddleware(thunk))
);

export default store;