import styled, { css } from "styled-components";
import { media } from "../variables";

export const Heading1St = styled.h1`
  font-size: 32px;
  font-weight: 500;
  color: ${props => props.color};
  
  ${media.lg(css`
    font-size: 48px;
  `)}
  
  ${media.xl(css`
    font-size: 56px;
  `)}
`;

export const Heading2St = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${props => props.color};
  
  ${media.lg(css`
    font-size: 32px;
  `)}
  
  ${media.xl(css`
    font-size: 40px;
  `)}
`;
