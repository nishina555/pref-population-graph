import type { NextPage } from "next";
import { css } from "@emotion/react";
import { PrefSelectionFormContainer } from "@/components/homePage/PrefSelectionFormContainer";
import { PopulationViewContainer } from "@/components/homePage/PopulationViewContainer";

const Home: NextPage = () => {
  return (
    <div css={main}>
      <h1 css={title}>Title</h1>
      <div>{process.env.NEXT_PUBLIC_HOSTNAME}</div>
      <PrefSelectionFormContainer />
      <PopulationViewContainer />
    </div>
  );
};

const main = css({
  maxWidth: "1000px",
  margin: "0 auto",
});

const title = css({
  padding: "10px 20px",
  background: "gray",
  textAlign: "center",
});

export default Home;
