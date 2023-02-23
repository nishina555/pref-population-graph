import { Prefecture } from "@/types/state/prefecture";
import axios from "axios";
import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import { Checkbox } from "../shared/Checkbox";

export const PrefSelectionForm: FC<{}> = () => {
  const [checkedPrefCodes, setCheckedPrefCodes] = useState([1]);

  const [prefectures, setPrefectures] = useState([] as Prefecture[]);
  // const prefectures: Prefecture[] = [
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
      setPrefectures(prefectures as Prefecture[])
    );
  }, []);

  const handleClick = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    let code = Number(e.target.value);
    if (e.target.checked === true) {
      setCheckedPrefCodes([...checkedPrefCodes, code]);
    } else {
      let newCheckedPrefCodes = checkedPrefCodes.filter((id) => id !== code);
      setCheckedPrefCodes(newCheckedPrefCodes);
    }
  }, []);

  return (
    <>
      <div>都道府県</div>
      {prefectures.map((prefecture: Prefecture) => (
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
