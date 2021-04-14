import styled, { css } from "styled-components";
import { media } from "../variables";

export const TextSt = styled.p`
  margin: 0 0;
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  color: ${props => props.color};
  
  ${media.lg(css`
    font-size: 16px;
  `)}
`;
