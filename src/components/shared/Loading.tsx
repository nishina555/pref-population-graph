import { FC } from "react";
import { css } from "@emotion/react";

export const Loading: FC = () => {
  return (
    <div css={container}>
      <img css={icon} src="images/loading.svg" />
    </div>
  );
};

const container = css({
  paddingTop: "1rem",
  textAlign: "center",
});

const icon = css({
  width: "40px",
  height: "40px",
});
