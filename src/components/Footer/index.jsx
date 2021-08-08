import React from "react";
import {
  FooterContainer,
  SocialIconsContainer,
  SocialMediaIconLink,
  StyledFacebookIcon,
  StyledInstagramIcon,
  StyledTwitterIcon,
  Byline,
} from "./Styles";

const Footer = () => (
  <FooterContainer>
    <SocialIconsContainer>
      <SocialMediaIconLink href="https://www.facebook.com/todd.hoppmeyer">
        <StyledFacebookIcon />
      </SocialMediaIconLink>

      <SocialMediaIconLink href="https://www.instagram.com/treztronic">
        <StyledInstagramIcon />
      </SocialMediaIconLink>

      <SocialMediaIconLink href="https://twitter.com/treztronic">
        <StyledTwitterIcon />
      </SocialMediaIconLink>
    </SocialIconsContainer>
    <Byline>
      ©{new Date().getFullYear()}, Built by Brandon Kent with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Byline>
  </FooterContainer>
);

export default Footer;
