import { Entities } from "@/types/state/base";
import { PopulationHistoryEntity } from "@/types/state/populationHistories";
import reducer, { getPopulationHistory } from "./populationHistoriesSlice";

describe("getPopulationHistory", () => {
  it("pending", () => {
    const initialState: Entities<PopulationHistoryEntity> = {
      allIds: [],
      byId: {},
    };
    const action = {
      type: getPopulationHistory.pending.type,
    };
    const state = reducer(undefined, action);
    expect(state).toEqual(initialState);
  });
  it("fullfiled", () => {
    const prevState: Entities<PopulationHistoryEntity> = {
      allIds: [],
      byId: {},
    };
    const action = {
      type: getPopulationHistory.fulfilled.type,
      payload: [
        {
          year: 1950,
          value: 10000,
        },
      ],
      meta: {
        arg: 1,
      },
    };
    const expectedState = {
      allIds: [1],
      byId: {
        1: {
          id: 1,
          records: [
            {
              year: 1950,
              value: 10000,
            },
          ],
        },
      },
    };
    const state = reducer(prevState, action);
    expect(state).toEqual(expectedState);
  });
});

describe("removePolulationHistory", () => {
  it("payloadで指定したindexのアイテムが削除されること", () => {
    const prevState: Entities<PopulationHistoryEntity> = {
      allIds: [1, 2],
      byId: {
        1: {
          id: 1,
          records: [
            {
              year: 1950,
              value: 10000,
            },
          ],
        },
        2: {
          id: 2,
          records: [
            {
              year: 1950,
              value: 5000,
            },
          ],
        },
      },
    };
    const action = {
      type: "populations/removePolulationHistory",
      payload: 2,
    };
    const expectedState = {
      allIds: [1],
      byId: {
        1: {
          id: 1,
          records: [
            {
              year: 1950,
              value: 10000,
            },
          ],
        },
      },
    };
    const state = reducer(prevState, action);
    expect(state).toEqual(expectedState);
  });
});
