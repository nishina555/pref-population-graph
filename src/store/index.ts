import { combineReducers, configureStore } from "@reduxjs/toolkit";
import prefecturesReducer from "../reducers/prefecturesSlice";

const store = configureStore({
  reducer: {
    entities: combineReducers({
      prefectures: prefecturesReducer,
    }),
  },
});

export default store;

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
