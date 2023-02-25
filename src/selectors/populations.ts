import { AppState } from "../store/index";
import { createSelector } from "@reduxjs/toolkit";
import { Entities } from "../types/state/base";
import { PopulationEntity } from "@/types/state/populations";

const selectPopulationEntities = (
  state: AppState
): Entities<PopulationEntity> => state.entities.populations;

const selectPopulationIds = createSelector(
  [selectPopulationEntities],
  (populations) => populations.allIds
);

const selectPopulationById = createSelector(
  [selectPopulationEntities],
  (populations) => populations.byId
);

export const selectPopulations = createSelector(
  [selectPopulationIds, selectPopulationById],
  (populationsIds, populations) => populationsIds.map((id) => populations[id])
);
