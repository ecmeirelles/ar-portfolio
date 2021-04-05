import { css } from "styled-components";

export const colors = {
  white: '#FFFFFF',
  pearl: '#FAFAFA',
  gray: '#5A5A5A',
  lightGray: '#F3F3F3',
  black: '#101010',
  charcoal: '#303030',
  strawberry: '#f05454',
  lapizBlue: '#30455e',
};

export const breakpoints = {
  xs: 320, // default
  sm: 375,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (cls, isIE = false) =>
    css`
      ${isIE
      ? css`
            @media all and (min-width: ${breakpoints[
        label
        ]}px) and (-ms-high-contrast: none) {
              ${cls};
            }
          `
      : css`
            @media (min-width: ${breakpoints[label]}px) {
              ${cls};
            }
          `};
    `;

  return accumulator;
}, {});
