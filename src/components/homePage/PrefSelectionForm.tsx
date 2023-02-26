import { PrefectureEntity } from "@/types/state/prefectures";
import { ChangeEvent, FC } from "react";
import { Checkbox } from "../shared/Checkbox";
import { css } from "@emotion/react";

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
    <div css={form}>
      <div css={title}>都道府県</div>
      <div css={container}>
        {prefectures.map((prefecture: PrefectureEntity) => (
          <Checkbox
            key={prefecture.prefCode.toString()}
            code={prefecture.prefCode}
            label={prefecture.prefName}
            checked={checkedPrefCodes.includes(prefecture.prefCode)}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};

const form = css({
  // background: 'red',
  padding: "10px 10px",
});

const title = css({});

const container = css({
  display: "flex",
  flexWrap: "wrap",
});
