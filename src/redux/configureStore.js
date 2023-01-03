import logger from 'redux-logger';
import missionsReducer from './missions/missionSlice';
import rocketReducer from './rocket/rocketSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    missionsReducer,
    rockets: rocketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
