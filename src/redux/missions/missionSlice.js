/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  loading: false,
  missions: [],
  error: '',
  refresh: false,
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const newMissions = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
      return {
        ...state, missions: newMissions,
      };
    },
  },
  extraReducers: {
    [fetchMissions.pending]: (state) => {
      state.loading = true;
    },
    [fetchMissions.fulfilled]: (state, action) => {
      state.missions = action.payload;
      state.loading = false;
    },
    [fetchMissions.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
