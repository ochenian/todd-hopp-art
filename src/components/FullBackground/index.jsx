import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { StyledFullScreenWrapper } from "./Styles";

const FullBackground = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "site_bg.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
              transformOptions: { fit: CONTAIN }
            )
          }
        }
      }
    `
  );
  const image = getImage(placeholderImage);

  const bgImage = convertToBgImage(image);

  return (
    <StyledFullScreenWrapper>
      <BackgroundImage
        Tag="section"
        title="Fullscreen Background"
        id="fullscreenbg"
        role="img"
        aria-label="Fullscreen Background"
        {...bgImage}
        preserveStackingContext
      >
        <GatsbyImage
          image={image}
          alt={"background image"}
          style={{ height: "100vh" }}
        />
      </BackgroundImage>
    </StyledFullScreenWrapper>
  );
};

export default FullBackground;
