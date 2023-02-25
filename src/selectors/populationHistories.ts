import { AppState } from "../store/index";
import { createSelector } from "@reduxjs/toolkit";
import { Entities } from "../types/state/base";
import { PopulationHistoryEntity } from "@/types/state/populationHistories";

const selectPopulationHistoryEntities = (
  state: AppState
): Entities<PopulationHistoryEntity> => state.entities.populationHistories;

export const selectPopulationHistoryIds = createSelector(
  [selectPopulationHistoryEntities],
  (populationHistories) => populationHistories.allIds
);

const selectPopulationHistoryById = createSelector(
  [selectPopulationHistoryEntities],
  (populationHistories) => populationHistories.byId
);

export const selectPopulations = createSelector(
  [selectPopulationHistoryIds, selectPopulationHistoryById],
  (populationHistoryIds, populationHistories) =>
    populationHistoryIds.map((id) => populationHistories[id])
);
