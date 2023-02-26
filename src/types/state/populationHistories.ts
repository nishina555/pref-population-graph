export type PopulationHistoryEntity = {
  id: number;
  records: PopulationHistory;
};

export type PopulationHistory = Population[];

export type Population = {
  year: number;
  value: number;
};

export type PlotDatum = {
  name: string;
  data: number[][];
};
