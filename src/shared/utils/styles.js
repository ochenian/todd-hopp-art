import { css } from "styled-components";
import Color from "color";

export const color = {
  white: "#fff",
  black: "#000",
  blue: "rgba(0,144,255,1)",
  pink: "#ff0095",
  yellow: "#fec521",
};

export const zIndexValues = {
  burger: 20,
  navLeft: 10,
};

export const font = {
  regular: 'font-family: "mrhand"; font-weight: normal;',
  bold: 'font-family: "mrhand"; font-weight: bold;',
  size: size => `font-size: ${size}px;`,
};

export const mixin = {
  darken: (colorValue, amount) => Color(colorValue).darken(amount).string(),
  lighten: (colorValue, amount) => Color(colorValue).lighten(amount).string(),
  rgba: (colorValue, opacity) => Color(colorValue).alpha(opacity).string(),
  boxShadowMedium: css`
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  `,
  truncateText: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  clickable: css`
    cursor: pointer;
    user-select: none;
  `,
  hardwareAccelerate: css`
    transform: translateZ(0);
  `,
};
