import { PrefectureEntity } from "@/types/state/prefectures";
import { ChangeEvent, FC } from "react";
import { Checkbox } from "../shared/Checkbox";
// import { css } from "@emotion/react";

type Props = {
  prefectures: PrefectureEntity[];
  checkedPrefCodes: number[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const PrefSelectionForm: FC<Props> = ({
  prefectures,
  checkedPrefCodes,
  onChange,
}) => {
  return (
    <>
      <div>都道府県</div>
      {prefectures.map((prefecture: PrefectureEntity) => (
        <Checkbox
          key={prefecture.prefCode.toString()}
          code={prefecture.prefCode}
          label={prefecture.prefName}
          checked={checkedPrefCodes.includes(prefecture.prefCode)}
          onChange={onChange}
        />
      ))}
      {/* <h1 css={helloStyle}>Hello</h1> */}
    </>
  );
};

// const helloStyle = css({
//   color: "red",
// });
