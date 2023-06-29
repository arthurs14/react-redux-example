import { createSlice } from '@reduxjs/toolkit';
import { userList } from './data';

export const userSlice = createSlice({
  name: 'users',
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      console.log('action :::', action);
      console.log('state :::', state);
      return [...state, action.payload];
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
