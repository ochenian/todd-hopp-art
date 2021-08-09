import styled from "styled-components";
import FacebookIcon from "../../assets/svg/icon-fb.svg";
import TwitterIcon from "../../assets/svg/icon-twitter.svg";
import InstagramIcon from "../../assets/svg/icon-instagram.svg";

export const FooterContainer = styled.footer`
  position: relative;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
}
`;

export const SocialIconsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 40%;
  margin: 0 auto 2em auto;
  max-width: 300px;
`;

export const StyledFacebookIcon = styled(FacebookIcon)`
  width: 50%;
  height: auto;

  cursor: pointer;

  &:hover path.fill {
    fill: #3b5998;
  }
`;

export const StyledInstagramIcon = styled(InstagramIcon)`
  width: 50%;
  height: auto;

  cursor: pointer;
`;

export const StyledTwitterIcon = styled(TwitterIcon)`
  width: 50%;
  height: auto;

  cursor: pointer;

  &:hover path.fill {
    fill: #38a1f3;
  }
`;

export const SocialMediaIconLink = styled.a`
  display: flex;
  justify-content: center;

  width: 100%;

  cursor: pointer;
`;

export const Byline = styled.div`
  text-align: center;
`;
