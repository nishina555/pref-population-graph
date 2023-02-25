import {
  buildEntities,
  convertResponseToEntities,
} from "@/lib/entitiesBuilder";
import { Entities } from "@/types/state/base";
import { Prefecture, PrefectureEntity } from "@/types/state/prefectures";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Entities<PrefectureEntity> = {
  allIds: [],
  byId: {},
};

const prefecturesSlice = createSlice({
  name: "prefectures",
  initialState,
  reducers: {
    setInitPrefectures(state, action) {
      const prefectureEntities = convertResponseToEntities(
        action.payload as Prefecture[]
      );
      const { allIds, byId } =
        buildEntities<PrefectureEntity>(prefectureEntities);
      state.allIds = allIds;
      state.byId = byId;
    },
  },
});

export const { setInitPrefectures } = prefecturesSlice.actions;
export default prefecturesSlice.reducer;
