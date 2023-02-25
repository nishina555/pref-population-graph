import type { NextPage } from "next";
// import { css } from "@emotion/react";
import { PrefSelectionFormContainer } from "@/components/homePage/PrefSelectionFormContainer";
import { PopulationViewContainer } from "@/components/homePage/PopulationViewContainer";

const Home: NextPage = () => {
  return (
    <div>
      <div>Title</div>
      <PrefSelectionFormContainer />
      <PopulationViewContainer />
      {/* <h1 css={helloStyle}>Hello</h1> */}
    </div>
  );
};

// const helloStyle = css({
//   color: "red",
// });

export default Home;
