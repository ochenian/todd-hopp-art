import styled from "styled-components";
import { color } from "../../shared/utils/styles";
import Logo from "../../assets/svg/logo.svg";
import ContactLink from "../../assets/svg/link-contact.svg";
import StoryboardsLink from "../../assets/svg/link-storyboards.svg";

export const LogoLinksContainer = styled.div`
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  left: 42%;
  margin-top: -22%;
`;

// export const StyledSiteNavBtn = styled(SiteNavButton)`
//   display: block;

//   margin: 1em;
//   width: 5%;
//   min-width: 30px;
//   max-width: 60px;
//   height: auto;
// `;

export const StyledLogo = styled(Logo)`
  width: 90%;
  max-width: 740px;
  height: auto;
`;

export const StyledStoryboardLink = styled(StoryboardsLink)`
  width: 50%;
  height: auto;

  &:hover path.text-color {
    fill: ${color.pink};
  }
`;

export const StyledContactLink = styled(ContactLink)`
  width: 30%;
  height: auto;

  margin: 12px 0 0 20%;

  &:hover path.text-color {
    fill: ${color.lightBlue};
  }
`;
