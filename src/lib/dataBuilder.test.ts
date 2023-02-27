import { buildPlotData } from "./dataBuilder";
import { PrefectureEntity } from "@/types/state/prefectures";
import { PopulationHistoryEntity } from "@/types/state/populationHistories";

describe("buildPlotData", () => {
  it("正常系", () => {
    const populations: PopulationHistoryEntity[] = [
      {
        id: 1,
        records: [
          {
            year: 1960,
            value: 1602200,
          },
          {
            year: 1965,
            value: 1602207,
          },
        ],
      },
    ];
    const prefectures: PrefectureEntity[] = [
      {
        id: 1,
        prefName: "北海道",
        prefCode: 1,
      },
      {
        id: 2,
        prefName: "青森",
        prefCode: 2,
      },
    ];
    expect(buildPlotData(populations, prefectures)).toEqual([
      {
        name: "北海道",
        data: [
          [1960, 1602200],
          [1965, 1602207],
        ],
      },
    ]);
  });
});
