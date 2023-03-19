import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    //Reducers or Reducer functions.
    addUser(state, action) {
      //Action Type will be user/addUser.
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    // deleteUsers(state, action) {
    //   // return (state = []);
    //   //Instead of assigning the value to the state, return the initial state.
    //   return [];
    // },
  },
  extraReducers(builder) {
    // builder.addCase(userSlice.actions.deleteUsers, () => {
    builder.addCase(clearAllUsers, () => {
      return [];
    });
  },
});

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions; // Action Creator that will return that Action Type.
