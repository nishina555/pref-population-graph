import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allIds: [],
  byId: {},
};

const prefecturesSlice = createSlice({
  name: "prefectures",
  initialState,
  reducers: {},
});

export default prefecturesSlice.reducer;
