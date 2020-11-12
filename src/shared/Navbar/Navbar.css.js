import styled, { css } from 'styled-components';
import { media } from "../variables";

export const MenuBarSt = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #DCDCDC;
`;

export const ContentSt = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 32px;
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
  
  a:first-of-type {
    margin-right: 40px;
  }
`;