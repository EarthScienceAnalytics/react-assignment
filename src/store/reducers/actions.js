import * as types from '../types';

const initialState = {};

const setAction = (state, { payload }) => ({
  ...state,
  payload
});

const actionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ACTIONS:
      return setAction(state, action);
    default:
      return state;
  }
};

export default actionsReducer;
