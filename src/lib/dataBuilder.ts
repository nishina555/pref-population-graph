import { PrefectureEntity } from "@/types/state/prefectures";
import { PopulationHistoryEntity } from "@/types/state/populationHistories";

export const buildPlotData = (
  populations: PopulationHistoryEntity[],
  prefectures: PrefectureEntity[]
) => {
  const plotData = populations.map((poplation) => {
    const prefecture = prefectures.filter(
      (prefecture) => prefecture.id === poplation.id
    );
    const data = poplation["records"].map((record) => [
      record["year"],
      record["value"],
    ]);
    return { name: prefecture[0]["prefName"], data };
  });
  return plotData;
};
