import { PrefectureEntity } from "@/types/state/prefectures";
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
import { selectHasRequestDone } from "@/selectors/requests";

export const PrefSelectionFormContainer: FC = () => {
  const [checkedPrefCodes, setCheckedPrefCodes] = useState([] as number[]);
  const prefectures: PrefectureEntity[] = useSelector(selectPrefectures);
  const dispatch: AppDispatch = useDispatch();

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

  const hasRequestDone = useSelector(
    selectHasRequestDone(getPrefectures.typePrefix)
  );
  return (
    <PrefSelectionForm
      prefectures={prefectures}
      checkedPrefCodes={checkedPrefCodes}
      onChange={handleClick}
      hasRequestDone={hasRequestDone}
    />
  );
};
