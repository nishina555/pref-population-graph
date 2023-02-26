import {
  buildEntities,
  convertResponseToEntities,
} from "@/lib/entitiesBuilder";
import { Entities } from "@/types/state/base";
import { Prefecture, PrefectureEntity } from "@/types/state/prefectures";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import prefectureApiService from "../../api/prefectures";

export const getPrefectures = createAsyncThunk<Prefecture[]>(
  "getPrefectures",
  async () => {
    const response = await prefectureApiService.getAll();
    const prefectures = response.data.result;
    return prefectures;
  }
);

const initialState: Entities<PrefectureEntity> = {
  allIds: [],
  byId: {},
};

const prefecturesSlice = createSlice({
  name: "prefectures",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPrefectures.fulfilled, (state, action) => {
      const prefectureEntities = convertResponseToEntities(action.payload);
      const { allIds, byId } =
        buildEntities<PrefectureEntity>(prefectureEntities);
      state.allIds = allIds;
      state.byId = byId;
    });
  },
});

export default prefecturesSlice.reducer;
