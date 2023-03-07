import { AppState } from "@/store";
import { PrefectureEntity } from "@/types/state/prefectures";
import { selectPrefecture, selectPrefectures } from "./prefectures";
import { rootStateMock } from "@/tests/rootStateMock";

describe("selectPrefecture", () => {
  it("PrefectureEntityが取得できること", () => {
    const rootState: AppState = {
      ...rootStateMock,
      entities: {
        ...rootStateMock.entities,
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
      },
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
      ...rootStateMock,
      entities: {
        ...rootStateMock.entities,
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
      },
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
