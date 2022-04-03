import { combineReducers } from 'redux';
import actionsReducer from './actions';

export default combineReducers({
  state: actionsReducer
});
