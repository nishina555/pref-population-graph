import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import requestReducer from "../reducers/requestsSlice";
import prefecturesReducer from "../reducers/prefecturesSlice";
import populationHistoriesReducer from "../reducers/populationHistoriesSlice";

const entitiesReducer = combineReducers({
  prefectures: prefecturesReducer,
  populationHistories: populationHistoriesReducer,
});

const rootReducer = combineReducers({
  entities: entitiesReducer,
  requests: requestReducer,
});

export const setupStore = (preloadedState?: PreloadedState<AppState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = setupStore();

export type AppState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export type AppStore = ReturnType<typeof setupStore>;
