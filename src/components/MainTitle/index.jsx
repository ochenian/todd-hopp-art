import React from "react";
import { Link } from "gatsby";
import {
  LogoLinksContainer,
  StyledLogo,
  LinksContainer,
  StyledStoryboardLink,
  StyledContactLink,
} from "./Styles";

const MainTitle = () => (
  <LogoLinksContainer>
    <StyledLogo />
    <LinksContainer>
      <Link to="/storyboards/">
        <StyledStoryboardLink />
      </Link>
      <Link to="/contact/">
        <StyledContactLink />
      </Link>
    </LinksContainer>
  </LogoLinksContainer>
);

export default MainTitle;
