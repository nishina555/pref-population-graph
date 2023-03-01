import { RequestStatus } from "@/types/constants/requestStatusType";
import { RequestState } from "@/types/state/requests";
import {
  ActionReducerMapBuilder,
  AsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { getPrefectures } from "./prefecturesSlice";

const initialState = {};

const requestAsyncThunks = [getPrefectures];

const createRequestAsyncThunkReducer = (
  builder: ActionReducerMapBuilder<RequestState>,
  targetRequestThunk: AsyncThunk<any, any, any>
) => {
  builder.addMatcher(
    (action) => action.type.startsWith(`${targetRequestThunk.typePrefix}/`),
    (state, action) => {
      switch (action.meta.requestStatus) {
        case "pending": {
          state[targetRequestThunk.typePrefix] = {
            status: RequestStatus.Request,
          };
          break;
        }
        case "fulfilled": {
          state[targetRequestThunk.typePrefix] = {
            status: RequestStatus.Success,
          };
          break;
        }
        case "rejected": {
          state[targetRequestThunk.typePrefix] = {
            status: RequestStatus.Failure,
          };
          break;
        }
        default: {
          return;
        }
      }
    }
  );
};

export const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    requestAsyncThunks.forEach((thunk) => {
      createRequestAsyncThunkReducer(builder, thunk);
    });
  },
});

export default requestSlice.reducer;
