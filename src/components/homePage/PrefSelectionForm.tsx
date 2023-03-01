import { PrefectureEntity } from "@/types/state/prefectures";
import { ChangeEvent, FC } from "react";
import { Checkbox } from "../shared/Checkbox";
import { css } from "@emotion/react";
import { Loading } from "../shared/Loading";

type Props = {
  prefectures: PrefectureEntity[];
  checkedPrefCodes: number[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  hasRequestDone: boolean;
};

export const PrefSelectionForm: FC<Props> = ({
  prefectures,
  checkedPrefCodes,
  onChange,
  hasRequestDone,
}) => {
  if (!hasRequestDone) return <Loading />;
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
  padding: "10px 10px",
});

const title = css({});

const container = css({
  display: "flex",
  flexWrap: "wrap",
});
