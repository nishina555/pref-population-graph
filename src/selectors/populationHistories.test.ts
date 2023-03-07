import { AppState } from "@/store";
import { PopulationHistoryEntity } from "@/types/state/populationHistories";
import { selectPopulations } from "./populationHistories";
import { rootStateMock } from "@/tests/rootStateMock";

describe("selectPopulations", () => {
  it("PopulationHistoryEntity[]が取得できること", () => {
    const rootState: AppState = {
      ...rootStateMock,
      entities: {
        ...rootStateMock.entities,
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
    };
    const expectedPopulationHistoryEntities: PopulationHistoryEntity[] = [
      {
        id: 1,
        records: [
          {
            year: 1900,
            value: 1000,
          },
        ],
      },
    ];
    const populations = selectPopulations(rootState);
    expect(populations).toEqual(expectedPopulationHistoryEntities);
  });
});
