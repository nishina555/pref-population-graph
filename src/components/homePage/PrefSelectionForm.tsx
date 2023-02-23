import { Prefecture } from "@/types/state/prefecture";
import { ChangeEvent, FC, useCallback, useState } from "react";
import { Checkbox } from "../shared/Checkbox";

export const PrefSelectionForm: FC<{}> = () => {
  const [checkedPrefCodes, setCheckedPrefCodes] = useState([1]);

  const prefectures: Prefecture[] = [
    {
      prefCode: 1,
      prefName: "北海道",
    },
    {
      prefCode: 2,
      prefName: "青森",
    },
  ];

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
