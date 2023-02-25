import { combineReducers, configureStore } from "@reduxjs/toolkit";
import prefecturesReducer from "../reducers/prefecturesSlice";
import populationHistoriesReducer from "../reducers/populationHistoriesSlice";

const store = configureStore({
  reducer: {
    entities: combineReducers({
      prefectures: prefecturesReducer,
      populationHistories: populationHistoriesReducer,
    }),
  },
});

export default store;

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
