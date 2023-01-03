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

export default missionsSlice.reducer;
