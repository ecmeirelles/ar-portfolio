import styled, { css } from "styled-components";

import { media } from "../../shared/variables";

export const ContentSt = styled.div`
  width: 100%;
  margin: auto 24px;
  
  ${media.md(css`
    max-width: 580px;
    margin-left: 90px;
  `)}
  
  ${media.lg(css`
    max-width: 650px;
    margin-left: 118px;
  `)}
  
  ${media.xl(css`
    margin-left: 156px;
    max-width: 768px;
  `)}
`;

export const GreetingSt = styled.h3`
  font-size: 24px;
  font-weight: 300;
  
  ${media.md(css`
    font-size: 32px;
  `)}
`;

export const TitleSt = styled.h1`
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 32px;
  font-weight: 500;
  
  ${media.md(css`
    margin-top: 24px;
    margin-bottom: 48px;
    font-size: 48px;
  `)}
  
  ${media.lg(css`
    margin-bottom: 40px;
  `)}
  
  ${media.xl(css`
    margin-top: 16px;
    font-size: 56px;
  `)}
`;
