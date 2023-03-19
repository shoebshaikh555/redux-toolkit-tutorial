import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  people: [],
  error: "",
};

export const fetchPeoples = createAsyncThunk("people/fetchPeoples", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);
});

const peopleSlice = createSlice({
  name: "people",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPeoples.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPeoples.fulfilled, (state, action) => {
      state.loading = false;
      state.people = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPeoples.rejected, (state, action) => {
      state.loading = false;
      state.people = [];
      state.error = action.error.message;
    });
  },
});

export default peopleSlice.reducer;
