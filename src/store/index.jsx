import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import peopleSlice from "./slices/PeopleSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
    people: peopleSlice,
  },
});

export default store;
