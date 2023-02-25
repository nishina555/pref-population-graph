import { combineReducers, configureStore } from "@reduxjs/toolkit";
import prefecturesReducer from "../reducers/prefecturesSlice";
import populationsReducer from "../reducers/populationsSlice";

const store = configureStore({
  reducer: {
    entities: combineReducers({
      prefectures: prefecturesReducer,
      populations: populationsReducer,
    }),
  },
});

export default store;

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
