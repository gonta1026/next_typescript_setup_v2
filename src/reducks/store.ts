import { combineReducers } from 'redux';
import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { postSlice, initialState as postInitialState } from '../reducks/modules/Post';

const rootReducer = combineReducers({
  postState: postSlice.reducer,
});

const preloadedState = () => {
  return { postState: postInitialState };
};

// NOTE ログを本番環境には出ないようにする。
const middlewareList = [...getDefaultMiddleware()];
if (process.env.NODE_ENV === 'development') {
  middlewareList.push(logger);
}

const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV === 'development',
    preloadedState: preloadedState(),
  });
};

export default store;
