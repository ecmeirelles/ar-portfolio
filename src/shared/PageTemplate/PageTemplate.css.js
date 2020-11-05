import styled, {css} from 'styled-components';
import {media} from "../variables";

export const WrapperSt = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background-color: #CCC;
  
  ${media.sm(css`
    width: 100%;
    height: 100%;
  `)}
`;

export const ContentSt = styled.div`
  display: flex;
  width: 100%;
  margin-top: 64px;
`;
