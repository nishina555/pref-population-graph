import { Entities } from "@/types/state/base";
import { PrefectureEntity } from "@/types/state/prefectures";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Entities<PrefectureEntity> = {
  allIds: [1, 2],
  byId: {
    1: {
      prefCode: 1,
      prefName: "北海道",
    },
    2: {
      prefCode: 2,
      prefName: "青森",
    },
  },
};

const prefecturesSlice = createSlice({
  name: "prefectures",
  initialState,
  reducers: {},
});

export default prefecturesSlice.reducer;
