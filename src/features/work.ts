import { createSlice } from "@reduxjs/toolkit";

const initialState = { workList: [] };

export const work = createSlice({
  name: "work",
  initialState,
  reducers: {},
});

export default work.reducer;
