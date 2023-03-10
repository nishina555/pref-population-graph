import { buildPlotData } from "@/lib/dataBuilder";
import { selectPopulations } from "@/selectors/populationHistories";
import { selectPrefectures } from "@/selectors/prefectures";
import {
  PlotDatum,
  PopulationHistoryEntity,
} from "@/types/state/populationHistories";
import { PrefectureEntity } from "@/types/state/prefectures";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { FC } from "react";
import { useSelector } from "react-redux";

export const PopulationViewContainer: FC = () => {
  const populations: PopulationHistoryEntity[] = useSelector(selectPopulations);
  const prefectures: PrefectureEntity[] = useSelector(selectPrefectures);
  const plotData: PlotDatum[] = buildPlotData(populations, prefectures);
  const options: Highcharts.Options = {
    title: {
      text: "",
    },
    yAxis: {
      title: {
        text: "人口数",
      },
    },
    xAxis: {
      min: 1960,
      max: 2045,
      tickInterval: 5,
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 1960,
      },
    },
    accessibility: {
      enabled: false,
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{ ...options, series: plotData }}
    />
  );
};
