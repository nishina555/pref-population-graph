import { PrefectureEntity } from "@/types/state/prefectures";
import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import { Checkbox } from "../shared/Checkbox";
import { selectPrefectures } from "../../selectors/prefectures";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { getPrefectures } from "@/reducers/prefecturesSlice";
import {
  getPopulationHistory,
  removePolulationHistory,
} from "@/reducers/populationHistoriesSlice";
// import { selectPopulationHistoryIds } from "@/selectors/populationHistories";

export const PrefSelectionForm: FC<{}> = () => {
  // ToDo:
  // チェックボックスの有無を判定するためのlocal stateを定義しているが、
  // 取得した人口情報一覧からでもチェックボックスの有無を判定できる。ただし、データ取得の時間だけ遅延が発生する。
  // チェックボックスの有無はlocal stateで別で管理するか、selectorを利用するか要検討。
  // const checkedPrefCodes = useSelector(selectPopulationHistoryIds)
  const [checkedPrefCodes, setCheckedPrefCodes] = useState([] as number[]);

  const prefectures: PrefectureEntity[] = useSelector(selectPrefectures);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrefectures());
  }, [dispatch]);

  // FIXME: useCallbackで囲むとstate更新がうまくいかない
  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    let code = Number(e.target.value);
    if (e.target.checked === true) {
      setCheckedPrefCodes([...checkedPrefCodes, code]);
      dispatch(getPopulationHistory(code));
    } else {
      setCheckedPrefCodes(checkedPrefCodes.filter((id) => id !== code));
      dispatch(removePolulationHistory(code));
    }
  };

  return (
    <>
      <div>都道府県</div>
      <div>{checkedPrefCodes}</div>
      {prefectures.map((prefecture: PrefectureEntity) => (
        <Checkbox
          key={prefecture.prefCode.toString()}
          code={prefecture.prefCode}
          label={prefecture.prefName}
          checked={checkedPrefCodes.includes(prefecture.prefCode)}
          onChange={handleClick}
        />
      ))}
    </>
  );
};
