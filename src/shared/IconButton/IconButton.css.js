import styled, { css } from "styled-components";

import { colors, media } from "../variables";

export const IconButtonSt = styled.a`
  width: 56px;
  height: 56px;
  margin: 16px 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.charcoal};
  background-color: ${colors.pearl};
  border-radius: 50%;
  opacity: 0.48;
  
  ${media.md(css`
    width: 72px;
    height: 72px;
    margin-right: 16px;
    margin-left: 16px;
  `)}
  
  ${media.lg(css`
    margin-right: 20px;
    margin-left: 20px;
  `)}
  
  &:hover {
    color: ${colors.white};
    background-color: ${colors.lapizBlue};
    opacity: 1;
  }
`;
