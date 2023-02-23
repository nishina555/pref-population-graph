import { FC } from "react";
import { PopulationGraph } from "./PopulationGraph";

export const PopulationView: FC<{}> = () => {
  return (
    <>
      <div>結果</div>
      <PopulationGraph />
    </>
  );
};
