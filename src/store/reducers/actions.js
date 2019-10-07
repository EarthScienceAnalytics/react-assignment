import * as types from '../types';

const INITIAL_STATE = {};

const setAction = (state, {payload}) => ({
  ...state,
  payload
});

const actionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ACTIONS:
      return setAction(state, action);
    default:
      return state;
  }
};

export default actionsReducer;
