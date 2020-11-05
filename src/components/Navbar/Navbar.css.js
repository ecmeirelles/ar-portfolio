import styled, {css} from 'styled-components';
import {media} from "../../shared/variables";

export const MenuBarSt = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
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
  font-size: 32px;
  font-weight: bold;
  
  ${media.md(css`
    width: 50%;
  `)}
`;

export const MenuItemsSt = styled.div`
  display: flex;
  width: 70%;
  justify-content: flex-end;
  
  ${media.md(css`
    width: 50%;
  `)}
  
  a:first-of-type {
    margin-right: 40px;
  }
`;
