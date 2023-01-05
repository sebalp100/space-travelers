import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getItems } from '../../api/api';

const GET_ALL_DRAGONS = 'space-travelers/redux/gragons/GET_ALL_DRAGONS';

const initialState = {
  loading: false,
  dragons: [],
  error: '',
  refresh: false,
};

export const getAllDragons = createAsyncThunk(GET_ALL_DRAGONS, async () => {
  const dragons = await getItems('dragon');
  const formatedDragons = dragons.map((dragon) => ({
    id: dragon.id,
    name: dragon.name,
    type: dragon.type,
    flickr_images: dragon.flickr_images,
  }));
  return formatedDragons;
});
const manageDragonBooking = (state, action, booking) => {
  const newDragons = state.dragons.map((dragon) => {
    if (dragon.id !== action.payload) return dragon;
    return { ...dragon, reserved: booking };
  });
  return {
    ...state,
    dragons: newDragons,
  };
};
const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    joinDragon(state, action) {
      return manageDragonBooking(state, action, true);
    },
    cancelDragon(state, action) {
      return manageDragonBooking(state, action, false);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllDragons.fulfilled, (state, action) => ({
      ...state,
      dragons: action.payload,
      loading: false,
    }));
    builder.addCase(getAllDragons.rejected, (state) => ({
      ...state,
      loading: false,
    }));
    builder.addCase(getAllDragons.pending, (state) => ({
      ...state,
      loading: true,
    }));
  },
});
export const { joinDragon, cancelDragon } = dragonsSlice.actions;
export default dragonsSlice.reducer;
