export type SelectedPrefecture = Prefecture & {
  selected: boolean;
};

export type PrefectureEntity = Prefecture & {
  id: number;
};

export type Prefecture = {
  prefCode: number;
  prefName: string;
};
