import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from './reducers';
import history from '../history';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  createRootReducer(history),
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);

export default store;
