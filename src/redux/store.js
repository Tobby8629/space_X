import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './Mission/missionSlice';
import RocketSlice from './Rockets/RocketSlice';

const store = configureStore({
  reducer: {
    Mission: missionSlice,
    Rocket: RocketSlice,
  },
});

export default store;
