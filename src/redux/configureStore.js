import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './dragon/dragon';
import missionsReducer from './missions/missionSlice';
import rocketReducer from './rocket/rocketSlice';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
    missions: missionsReducer,
    rockets: rocketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
