import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import FullBackground from "../FullBackground";
import Header from "../Header";
import Footer from "../Footer";
import { Container, Main } from "./Styles";
import BaseStyles from "../../styles/BaseStyles";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <BaseStyles />
      <FullBackground />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
