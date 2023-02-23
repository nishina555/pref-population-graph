import { Prefecture } from "@/types/state/prefecture";
import { FC } from "react";
import { Checkbox } from "../shared/Checkbox";

export const PrefSelectionForm: FC<{}> = () => {
  const pref: Prefecture = {
    prefCode: 1,
    prefName: "北海道",
  };
  return (
    <>
      <div>都道府県</div>
      <Checkbox />
    </>
  );
};
