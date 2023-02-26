import { selectPopulations } from "@/selectors/populationHistories";
import { PopulationHistoryEntity } from "@/types/state/populationHistories";
import { FC } from "react";
import { useSelector } from "react-redux";
import { PopulationView } from "./PopulationView";

export const PopulationViewContainer: FC = () => {
  // ToDo
  // Selectorによるデータ取得など
  const populations: PopulationHistoryEntity[] = useSelector(selectPopulations);

  return <PopulationView />;
};
