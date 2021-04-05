import styled, { css } from "styled-components";
import { colors, media } from "../variables";

export const MenuBarSt = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 88px;
  background-color: ${({ bgColor }) => bgColor ? bgColor : colors.white};
  z-index: 999;
`;

export const ContentSt = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 24px;
  
  ${media.md(css`
    margin: 0 56px;
  `)}
`;

export const LogoSt = styled.div`
  display: flex;
  width: 30%;
  font-size: 40px;
  font-weight: bold;
  
  ${media.md(css`
    width: 50%;
    font-size: 40px;
  `)}
  
  a {
    color: ${({ isInverted }) => isInverted ? colors.white : colors.charcoal};
  }
`;

export const MenuItemsSt = styled.div`
  display: flex;
  width: 70%;
  justify-content: flex-end;
  font-size: 16px;
  
  ${media.md(css`
    width: 50%;
    font-size: 24px;
  `)}
  
  a {
    color: ${({ isInverted }) => isInverted ? colors.white : colors.charcoal};
  }
  
  a:first-of-type {
    margin-right: 40px;
  }
`;
