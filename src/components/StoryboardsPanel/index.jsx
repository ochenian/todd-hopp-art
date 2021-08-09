import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  Container,
  Column,
  StyledStoryboardsMarquee,
  StyledAnimationSubMarquee,
  StyledCommercialSubMarquee,
  SubMarqueeContainer,
} from "./Styles";

const StoryboardsPanel = () => {
  return (
    <Container>
      <StyledStoryboardsMarquee />
      <SubMarqueeContainer>
        <Column>
          <StyledAnimationSubMarquee />
          <StaticImage
            src="../../images/crustbuckler.png"
            style={{ width: "80%", maxWidth: "600px", minWidth: "200px" }}
          />
        </Column>
        <Column>
          <StyledCommercialSubMarquee />
          <StaticImage
            src="../../images/crustbuckler.png"
            style={{ width: "80%", maxWidth: "600px", minWidth: "200px" }}
          />
          <StaticImage
            src="../../images/crustbuckler.png"
            style={{ width: "80%", maxWidth: "600px", minWidth: "200px" }}
          />
          <StaticImage
            src="../../images/crustbuckler.png"
            style={{ width: "80%", maxWidth: "600px", minWidth: "200px" }}
          />
        </Column>
      </SubMarqueeContainer>
    </Container>
  );
};

export default StoryboardsPanel;
