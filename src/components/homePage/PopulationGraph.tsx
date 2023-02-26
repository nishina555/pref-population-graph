import { FC } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { PlotDatum } from "@/types/state/populationHistories";

type Props = {
  plotData: PlotDatum[];
};

export const PopulationGraph: FC<Props> = ({ plotData }) => {
  const options = {
    title: {
      text: "",
    },
    series: plotData,
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
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
