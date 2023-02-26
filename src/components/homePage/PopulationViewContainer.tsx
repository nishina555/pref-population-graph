import { selectPopulations } from "@/selectors/populationHistories";
import { selectPrefectures } from "@/selectors/prefectures";
import {
  PlotDatum,
  PopulationHistoryEntity,
} from "@/types/state/populationHistories";
import { PrefectureEntity } from "@/types/state/prefectures";
import { FC } from "react";
import { useSelector } from "react-redux";
import { PopulationView } from "./PopulationView";

export const PopulationViewContainer: FC = () => {
  const populations: PopulationHistoryEntity[] = useSelector(selectPopulations);
  const prefectures: PrefectureEntity[] = useSelector(selectPrefectures);

  const plotData: PlotDatum[] = populations.map((poplation) => {
    const prefecture = prefectures.filter(
      (prefecture) => prefecture.id === poplation.id
    );
    const data = poplation["records"].map((record) => [
      record["year"],
      record["value"],
    ]);
    return { name: prefecture[0]["prefName"], data };
  });

  return <PopulationView plotData={plotData} />;
};
