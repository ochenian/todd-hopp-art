import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import StoryboardsPanel from "../components/StoryboardsPanel";

const Storyboards = () => (
  <Layout>
    <Seo title="Storyboards" />
    <StoryboardsPanel />
  </Layout>
);

export default Storyboards;
