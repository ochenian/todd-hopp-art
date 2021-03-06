import styled from "styled-components";
import { color } from "../../shared/utils/styles";

export const BurgerBox = styled.span`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
`;

export const BurgerInner = styled.span`
  display: block;
  top: 4px;
  margin-top: -2;

  &,
  &::before,
  &::after {
    width: 40px;
    height: 4px;
    background-color: #000;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  &:hover,
  &:hover::before,
  &:hover::after {
    background-color: ${color.pink};
  }

  &::before,
  &::after {
    content: "";
    display: block;
  }

  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &::before {
    top: 10px;
    transition: opacity 0.125s 0.275s ease;
  }

  &::after {
    top: 20px;
    bottom: -10px;
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`;

export const BurgerContainer = styled.button`
  display: inline-block;
  cursor: pointer;

  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;

  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  padding: 0;
  overflow: visible;
  z-index: 20;

  &.is-active {
    ${BurgerInner} {
      transform: translate3d(0, 10px, 0) rotate(135deg);
      transition-delay: 0.075s;

      &::before {
        transition-delay: 0s;
        opacity: 0;
      }

      &::after {
        transform: translate3d(0, -20px, 0) rotate(-270deg);
        transition-delay: 0.075s;
      }

      &,
      &::before,
      &::after {
        background-color: #fff;
        text-shadow: 0 0 4px ${color.black};
      }

      &:hover,
      &:hover::before,
      &:hover::after {
        background-color: ${color.pink};
      }
    }
  }
`;
