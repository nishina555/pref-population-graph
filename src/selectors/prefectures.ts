import { AppState } from "../store/index";
import { PrefectureEntity } from "../types/state/prefectures";
import { createSelector } from "@reduxjs/toolkit";
import { Entities } from "../types/state/base";

const selectPrefectureEntities = (
  state: AppState
): Entities<PrefectureEntity> => state.entities.prefectures;

const selectPrefectureIds = createSelector(
  [selectPrefectureEntities],
  (prefectures) => prefectures.allIds
);

const selectPrefectureById = createSelector(
  [selectPrefectureEntities],
  (prefectures) => prefectures.byId
);

export const selectPrefectures = createSelector(
  [selectPrefectureIds, selectPrefectureById],
  (prefectureIds, prefectures) => prefectureIds.map((id) => prefectures[id])
);
