import styled from "styled-components";
import StoryboardsMarquee from "../../assets/svg/header-storyboards.svg";
import AnimationSubMarquee from "../../assets/svg/header-animation.svg";
import CommercialSubMarquee from "../../assets/svg/header-commercial.svg";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SubMarqueeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledStoryboardsMarquee = styled(StoryboardsMarquee)`
  width: 25%;
  height: 100%;
  margin-bottom: 3em;
`;

export const StyledAnimationSubMarquee = styled(AnimationSubMarquee)`
  width: 25%;
  margin: 0 auto 3em auto;
`;

export const StyledCommercialSubMarquee = styled(CommercialSubMarquee)`
  width: 25%;
  margin: 0 auto 3em auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
