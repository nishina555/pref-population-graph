import type { NextPage } from "next";
import { css } from "@emotion/react";
import { PrefSelectionForm } from "@/components/homePage/PrefSelectionForm";
import { PopulationView } from "@/components/homePage/PopulationView";

const Home: NextPage = () => {
  return (
    <div>
      <div>Title</div>
      <PrefSelectionForm />
      <PopulationView />
      <h1 css={helloStyle}>Hello</h1>
    </div>
  );
};

const helloStyle = css({
  color: "red",
});

export default Home;
