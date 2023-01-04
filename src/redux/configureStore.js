import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './dragon/dragon';
import missionsReducer from './missions/missionSlice';
import rocketReducer from './rocket/rocketSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    dragonReducer
    missionsReducer,
    rockets: rocketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
