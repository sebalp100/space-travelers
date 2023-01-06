import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchRocket from './API';

const initialState = { loading: false, rocketData: [], error: '' };

export const getRocket = createAsyncThunk('rockets/fetchRockets', async () => {
  const rocketData = await fetchRocket().then((data) => data);
  const rockets = [];
  rocketData.forEach((element) => {
    rockets.push({
      rocket_id: element.id,
      rocket_name: element.rocket_name,
      description: element.description,
      images: element.flickr_images,
    });
  });
  return rockets;
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    updateRocket: (state, action) => {
      state.rocketData.map((rocket) => {
        const updatedRocket = rocket;
        if (updatedRocket.rocket_id === action.payload.id) {
          if (action.payload.newState === 'link') {
            updatedRocket.reserved = true;
          } else {
            updatedRocket.reserved = false;
          }
        }
        return updatedRocket;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRocket.pending, (state) => {
      const newState = { ...state, loading: true };
      return newState;
    });
    builder.addCase(getRocket.fulfilled, (state, action) => {
      const newState = { ...state, rocketData: action.payload, loading: false };
      return newState;
    });
    builder.addCase(getRocket.rejected, (state, action) => {
      const newState = { ...state, rocketData: [], error: action.error.message };
      return newState;
    });
  },
});

export default rocketSlice.reducer;
export const { updateRocket } = rocketSlice.actions;
