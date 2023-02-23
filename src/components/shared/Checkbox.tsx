import { FC } from "react";

export const Checkbox: FC<{}> = () => {
  return (
    <div>
      <input type="checkbox" id="scales" name="scales" checked />
      <label>Scales</label>
    </div>
  );
};
