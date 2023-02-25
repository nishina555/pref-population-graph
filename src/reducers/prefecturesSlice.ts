import {
  buildEntities,
  convertResponseToEntities,
} from "@/lib/entitiesBuilder";
import { Entities } from "@/types/state/base";
import { Prefecture, PrefectureEntity } from "@/types/state/prefectures";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPrefectures = createAsyncThunk<PrefectureEntity[]>(
  "getPrefectures",
  async () => {
    const response = await axios
      .get(`${process.env.NEXT_PUBLIC_HOST}/api/v1/prefectures`, {
        headers: { "X-API-KEY": `${process.env.NEXT_PUBLIC_API_KEY}` },
      })
      .catch((error) => {
        throw new Error(error.message);
      });
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
      const prefectureEntities = convertResponseToEntities(
        action.payload as Prefecture[]
      );
      const { allIds, byId } =
        buildEntities<PrefectureEntity>(prefectureEntities);
      state.allIds = allIds;
      state.byId = byId;
    });
  },
});

export default prefecturesSlice.reducer;
