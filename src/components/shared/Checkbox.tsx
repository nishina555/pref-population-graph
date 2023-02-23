import { ChangeEvent, FC } from "react";

type Props = {
  code: number;
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox: FC<Props> = ({ code, label, checked, onChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        value={code}
        name={label}
        checked={checked}
        onChange={(e) => onChange(e)}
      />
      <label>{label}</label>
    </div>
  );
};
