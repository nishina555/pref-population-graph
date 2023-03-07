import { AppState } from "@/store";

export const rootStateMock: AppState = {
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
