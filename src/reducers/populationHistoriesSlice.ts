import { buildEntities } from "@/lib/entitiesBuilder";
import { Entities } from "@/types/state/base";
import {
  PopulationHistory,
  PopulationHistoryEntity,
} from "@/types/state/populationHistories";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import populationApiService from "../../api/populations";

type populationResultData = {
  label: string;
  data: PopulationHistory;
};

export const getPopulationHistory = createAsyncThunk<PopulationHistory, number>(
  "getPopulationHistory",
  async (prefCode) => {
    const response = await populationApiService.getOne(prefCode);
    const populationHistory = response.data.result["data"].filter(
      (obj: populationResultData) => obj["label"] === "総人口"
    )[0]["data"];
    return populationHistory;
  }
);

const initialState: Entities<PopulationHistoryEntity> = {
  allIds: [],
  byId: {},
};

const prefecturesSlice = createSlice({
  name: "populations",
  initialState,
  reducers: {
    removePolulationHistory(state, action) {
      const prefCode = action.payload;
      const newById = Object.assign({}, state.byId);
      delete newById[prefCode];
      return {
        byId: newById,
        allIds: state.allIds.filter((id) => id !== prefCode),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPopulationHistory.fulfilled, (state, action) => {
      const populationHistory = action.payload;
      const prefCode = action.meta.arg;
      const populationHistoryEntity = {
        records: populationHistory,
        id: prefCode,
      };
      const { byId, allIds } = buildEntities<PopulationHistoryEntity>([
        populationHistoryEntity,
      ]);
      return {
        byId: { ...state.byId, ...byId },
        allIds: state.allIds.concat(allIds),
      };
    });
  },
});

export const { removePolulationHistory } = prefecturesSlice.actions;
export default prefecturesSlice.reducer;
