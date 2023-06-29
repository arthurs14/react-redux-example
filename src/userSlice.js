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
    deleteUser: (state, action) => {
      console.log('delete user id ::', action.payload);
      return [...state.filter((user) => user.id !== action.payload)];
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
