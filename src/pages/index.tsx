import type { NextPage } from "next";
import { css } from "@emotion/react";

const Home: NextPage = () => {
  return <h1 css={helloStyle}>Hello</h1>;
};

const helloStyle = css({
  color: "red",
});

export default Home;
