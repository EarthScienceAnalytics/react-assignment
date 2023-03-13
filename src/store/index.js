// global state management code goes here
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import testReducer from './testSlice';

const rootReducer = combineReducers({ test: testReducer });

const store = configureStore({ reducer: rootReducer });

export default store;
