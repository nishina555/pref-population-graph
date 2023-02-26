import { ChangeEvent, FC } from "react";
import { css } from "@emotion/react";

type Props = {
  code: number;
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox: FC<Props> = ({ code, label, checked, onChange }) => {
  return (
    <div css={box}>
      <input
        type="checkbox"
        value={code}
        name={label}
        checked={checked}
        onChange={(e) => onChange(e)}
      />
      <label css={box__label}>{label}</label>
    </div>
  );
};

const box = css({
  // background: 'red',
  padding: "5px 5px",
});

const box__label = css({
  marginLeft: "3px",
});
