import { PrefectureEntity } from "@/types/state/prefectures";
import axios from "axios";
import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import { Checkbox } from "../shared/Checkbox";
import { selectPrefectures } from "../../selectors/prefectures";
import { useDispatch, useSelector } from "react-redux";

export const PrefSelectionForm: FC<{}> = () => {
  const [checkedPrefCodes, setCheckedPrefCodes] = useState([] as number[]);

  const [prefectures, setPrefectures] = useState([] as PrefectureEntity[]);

  const mockPrefectures: PrefectureEntity[] = useSelector(selectPrefectures);

  // const prefectures: PrefectureEntity[] = [
  //   {
  //     prefCode: 1,
  //     prefName: "北海道",
  //   },
  //   {
  //     prefCode: 2,
  //     prefName: "青森",
  //   },
  // ];

  useEffect(() => {
    const fetchPrefectures = async () => {
      const response = await axios
        .get(`${process.env.NEXT_PUBLIC_HOST}/api/v1/prefectures`, {
          headers: { "X-API-KEY": `${process.env.NEXT_PUBLIC_API_KEY}` },
        })
        .catch((error) => {
          throw new Error(error.message);
        });
      const prefectures = response.data.result;
      return prefectures;
    };
    fetchPrefectures().then((prefectures) =>
      setPrefectures(prefectures as PrefectureEntity[])
    );
  }, []);

  // FIXME: useCallbackで囲むとstate更新がうまくいかない
  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    let code = Number(e.target.value);
    if (e.target.checked === true) {
      setCheckedPrefCodes([...checkedPrefCodes, code]);
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
