import type { NextPage } from "next";
import { css } from "@emotion/react";

const Home: NextPage = () => {
  return (
    <div>
      <h1 css={helloStyle}>Hello</h1>
    </div>
  );
};

const helloStyle = css({
  color: "red",
});

export default Home;
