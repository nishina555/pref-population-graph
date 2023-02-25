import { Entities } from "@/types/state/base";
import { PopulationEntity } from "@/types/state/populations";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Entities<PopulationEntity> = {
  allIds: [],
  byId: {},
};

const prefecturesSlice = createSlice({
  name: "populations",
  initialState,
  reducers: {},
});

export default prefecturesSlice.reducer;
