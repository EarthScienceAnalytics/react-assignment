import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import actionsReducer from './actions';

export default history =>
  combineReducers({
    router: connectRouter(history),
    state: actionsReducer
  });
