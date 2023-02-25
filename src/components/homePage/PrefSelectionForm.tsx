import { PrefectureEntity } from "@/types/state/prefectures";
import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import { Checkbox } from "../shared/Checkbox";
import { selectPrefectures } from "../../selectors/prefectures";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { getPrefectures } from "@/reducers/prefecturesSlice";
import { getPopulationHistory } from "@/reducers/populationHistoriesSlice";

export const PrefSelectionForm: FC<{}> = () => {
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
