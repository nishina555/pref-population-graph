import { PlotDatum } from "@/types/state/populationHistories";
import { FC } from "react";
import { PopulationGraph } from "./PopulationGraph";

type Props = {
  plotData: PlotDatum[];
};

export const PopulationView: FC<Props> = ({ plotData }) => {
  return <PopulationGraph plotData={plotData} />;
};
