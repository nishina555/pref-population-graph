import {
  PrefectureEntity,
  SelectedPrefecture,
} from "@/types/state/prefectures";
import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import { selectPrefectures } from "../../selectors/prefectures";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { getPrefectures } from "@/reducers/prefecturesSlice";
import {
  getPopulationHistory,
  removePolulationHistory,
} from "@/reducers/populationHistoriesSlice";
import { PrefSelectionForm } from "./PrefSelectionForm";
// import { selectPopulationHistoryIds } from "@/selectors/populationHistories";

export const PrefSelectionFormContainer: FC = () => {
  // ToDo:
  // チェックボックスの有無を判定するためのlocal stateを定義しているが、
  // 取得した人口情報一覧からでもチェックボックスの有無を判定できる。ただし、データ取得の時間だけ遅延が発生する。
  // チェックボックスの有無はlocal stateで別で管理するか、selectorを利用するか要検討。
  // const checkedPrefCodes = useSelector(selectPopulationHistoryIds)

  const [checkedPrefCodes, setCheckedPrefCodes] = useState([] as number[]);

  const prefectures: PrefectureEntity[] = useSelector(selectPrefectures);
  const dispatch: AppDispatch = useDispatch();

  // memo: PrefectureとSelectの状態をまとめて1つのStateで管理する場合
  // const [selectedPrefectures, setSelectedPrefecture] = useState([] as SelectedPrefecture[]);
  // useEffect(()=> {
  //   if (prefectures.length !== 0) {
  //     const initSrectedPrefectures = prefectures.map((prefecture) => ({ ...prefecture, selected: false}))
  //     setSelectedPrefecture(initSrectedPrefectures)
  //   } else {
  //     setSelectedPrefecture([])
  //   }
  // },[prefectures])

  useEffect(() => {
    dispatch(getPrefectures());
  }, [dispatch]);

  const handleClick = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      let code = Number(e.target.value);
      if (e.target.checked === true) {
        setCheckedPrefCodes([...checkedPrefCodes, code]);
        dispatch(getPopulationHistory(code));
      } else {
        setCheckedPrefCodes(checkedPrefCodes.filter((id) => id !== code));
        dispatch(removePolulationHistory(code));
      }
    },
    [checkedPrefCodes]
  );

  return (
    <PrefSelectionForm
      prefectures={prefectures}
      checkedPrefCodes={checkedPrefCodes}
      onChange={handleClick}
    />
  );
};
