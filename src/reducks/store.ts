import { combineReducers } from 'redux';
import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { postSlice, initialState as postInitialState } from '../reducks/modules/Post';
import { counterSlice, initialState as counterInitialState } from '../reducks/counter/counterSlice';

const rootReducer = combineReducers({
  postState: postSlice.reducer,
  counterState: counterSlice.reducer,
});

const preloadedState = () => {
  return { postState: postInitialState, counterState: counterInitialState };
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
