import { AppState } from "@/store";
import { PrefectureEntity } from "@/types/state/prefectures";
import { selectPrefecture, selectPrefectures } from "../prefectures";
// import { rootStateMock } from "src/__tests__/rootStateMock"
// import { rootStateMock } from "@/__tests__/rootStateMock"

describe("selectPrefecture", () => {
  it("PrefectureEntityが取得できること", () => {
    const rootState: AppState = {
      entities: {
        prefectures: {
          allIds: [1],
          byId: {
            1: {
              id: 1,
              prefCode: 1,
              prefName: "北海道",
            },
          },
        },
        populationHistories: {
          allIds: [1],
          byId: {
            1: {
              id: 1,
              records: [
                {
                  year: 1900,
                  value: 1000,
                },
              ],
            },
          },
        },
      },
      requests: {},
    };
    const expectedPrefectureEntity: PrefectureEntity = {
      id: 1,
      prefCode: 1,
      prefName: "北海道",
    };
    const prefecture = selectPrefecture(rootState, 1);
    expect(prefecture).toEqual(expectedPrefectureEntity);
  });
});

describe("selectPrefectures", () => {
  it("PrefectureEntity[]が取得できること", () => {
    const rootState: AppState = {
      entities: {
        prefectures: {
          allIds: [1],
          byId: {
            1: {
              id: 1,
              prefCode: 1,
              prefName: "北海道",
            },
          },
        },
        populationHistories: {
          allIds: [1],
          byId: {
            1: {
              id: 1,
              records: [
                {
                  year: 1900,
                  value: 1000,
                },
              ],
            },
          },
        },
      },
      requests: {},
    };
    const expectedPrefectureEntities: PrefectureEntity[] = [
      {
        id: 1,
        prefCode: 1,
        prefName: "北海道",
      },
    ];
    const prefectures = selectPrefectures(rootState);
    expect(prefectures).toEqual(expectedPrefectureEntities);
  });
});
