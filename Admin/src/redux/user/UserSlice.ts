import { createSlice } from '@reduxjs/toolkit';
// import { updateUserThunk } from './authThunk';
import { User } from '../../types/user';

type UserState = {
  user: User[];
  currentPage: number;
  totalPages: number;
};

const initialState: UserState = {
  user: [],
  currentPage: 1,
  totalPages: 1,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    GetListSuccess: (state, action) => {
      state.user = action.payload.data;
      state.currentPage = action.payload.page;
      state.totalPages = action.payload.totalPage;
    },
    UpdatedListSuccess: (state, action) => {
      state.user = [...state.user, action.payload.data];
      state.currentPage = action.payload.page;
      state.totalPages = action.payload.totalPage;
    },
    DeletedListSuccess: (state, action) => {
      state.user = state.user.filter((user) => user._id !== action.payload.data._id);
    },
    UpdatedUserSuccess: (state, action) => {
      const currentUser = state.user.find((u) => u._id === action.payload.data._id);
      const updateUser = action.payload.data;
      const index = state.user.findIndex((u) => u._id === updateUser._id);
      if (currentUser) {
        state.user[index] = updateUser;
      }
    },
  },
});

export const { GetListSuccess, UpdatedListSuccess, DeletedListSuccess, UpdatedUserSuccess } =
  userSlice.actions;

export default userSlice.reducer;
