import { createSlice } from '@reduxjs/toolkit';
import { userList } from './data';

export const userSlice = createSlice({
  name: 'users',
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      return [...state, action.payload];
    },
    updateUser: (state, action) => {
      return [
        ...state.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      ];
    },
  },
});

export const { addUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
