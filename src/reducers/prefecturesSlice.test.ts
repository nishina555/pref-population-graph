// import { AppState } from "@/store";
import { Entities } from "@/types/state/base";
import { PrefectureEntity } from "@/types/state/prefectures";
import reducer, { getPrefectures } from "./prefecturesSlice";

describe("getPrefectures", () => {
  it("pending", () => {
    const initialState: Entities<PrefectureEntity> = {
      allIds: [],
      byId: {},
    };
    const action = {
      type: getPrefectures.pending.type,
    };
    const state = reducer(undefined, action);
    expect(state).toEqual(initialState);
  });
  it("fullfiled", () => {
    const prevState: Entities<PrefectureEntity> = {
      allIds: [],
      byId: {},
    };
    const action = {
      type: getPrefectures.fulfilled.type,
      payload: [
        {
          prefCode: 1,
          prefName: "北海道",
        },
      ],
    };
    const expectedState = {
      allIds: [1],
      byId: {
        1: {
          id: 1,
          prefCode: 1,
          prefName: "北海道",
        },
      },
    };
    const state = reducer(prevState, action);
    expect(state).toEqual(expectedState);
  });
});
