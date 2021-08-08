import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import MainTitle from "../components/MainTitle";

import "../styles/fontStyles.css";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <MainTitle />
  </Layout>
);

export default IndexPage;
