import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Panel from "../Panel";
import {
  Container,
  Column,
  StyledStoryboardsMarquee,
  StyledAnimationSubMarquee,
  StyledCommercialSubMarquee,
  SubMarqueeContainer,
} from "./Styles";
import { getImage } from "gatsby-plugin-image";

const StoryboardsPanel = () => {
  const {
    crustbucklerThumb,
    junkyardThumb,
    crustbucklerImages,
    junkyardImages,
  } = useStaticQuery(graphql`
    query {
      crustbucklerThumb: file(
        relativePath: { eq: "storyboards/thumbnails/crustbuckler_framed.png" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      crustbucklerImages: allFile(
        filter: {
          relativeDirectory: { eq: "storyboards/galleries/crustbuckler" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
      junkyardThumb: file(
        relativePath: { eq: "storyboards/thumbnails/junkyard_framed.png" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      junkyardImages: allFile(
        filter: { relativeDirectory: { eq: "storyboards/galleries/junkyard" } }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  `);

  const junkyardGallery = junkyardImages.edges.map(({ node }) =>
    getImage(node)
  );
  const crustbucklerGallery = crustbucklerImages.edges.map(node =>
    getImage(node)
  );

  return (
    <Container>
      <StyledStoryboardsMarquee />
      <SubMarqueeContainer>
        <Column>
          <StyledAnimationSubMarquee />
          <Panel
            imageData={getImage(crustbucklerThumb)}
            label="Crustbuckler"
            altText="Cartoon pirate ship named Crustbuckler"
            gallery={crustbucklerGallery}
          />
        </Column>
        <Column>
          <StyledCommercialSubMarquee />
          <Panel
            imageData={getImage(junkyardThumb)}
            label="Junkyard"
            altText="Cartoon drawing of three boys yelling"
            gallery={junkyardGallery}
          />
        </Column>
      </SubMarqueeContainer>
    </Container>
  );
};

export default StoryboardsPanel;
