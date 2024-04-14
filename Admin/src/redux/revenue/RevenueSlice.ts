import { createSlice } from '@reduxjs/toolkit';
// import { updateUserThunk } from './authThunk';
import { Revenue } from '../../types/revenue';

type RevenueState = {
  revenue: Revenue[];
};

const initialState: RevenueState = {
  revenue: [],
};

const revenueSlice = createSlice({
  name: 'revenue',
  initialState,
  reducers: {
    GetListSuccess: (state, action) => {
      state.revenue = action.payload.data;
    },
  },
});

export const { GetListSuccess } = revenueSlice.actions;

export default revenueSlice.reducer;
