import type { NextPage } from "next";
import { css } from "@emotion/react";
import { PrefSelectionFormContainer } from "@/components/homePage/PrefSelectionFormContainer";
import { PopulationViewContainer } from "@/components/homePage/PopulationViewContainer";

const Home: NextPage = () => {
  return (
    <div css={main}>
      <h1 css={title}>人口推移グラフ</h1>
      <PrefSelectionFormContainer />
      <PopulationViewContainer />
    </div>
  );
};

const main = css({
  maxWidth: "1000px",
  margin: "0 auto",
  height: "100%",
  border: "1px solid",
});

const title = css({
  padding: "10px 20px",
  background: "gray",
  textAlign: "center",
});

export default Home;
