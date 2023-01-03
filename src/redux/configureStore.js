import logger from 'redux-logger';
import missionsReducer from './missions/missionSlice';
const { configureStore } = require('@reduxjs/toolkit');
import rocketReducer from './rocket/rocketSlice';

const store = configureStore({
  reducer: {
    missionsReducer,
    rockets: rocketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
