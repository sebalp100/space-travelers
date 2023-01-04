import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './dragon/dragon';

const store = configureStore({
  reducer: {
    dragonReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
