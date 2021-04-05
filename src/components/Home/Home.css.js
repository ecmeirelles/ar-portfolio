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
    max-width: 768px;
    margin-left: 118px;
  `)}
  
  ${media.xl(css`
    margin-left: 156px;
  `)}
`;

export const GreetingSt = styled.h3`
  font-size: 24px;
  font-weight: normal;
  
  ${media.md(css`
    font-size: 32px;
  `)}
`;

export const TitleSt = styled.h1`
  margin-top: 2px;
  margin-bottom: 16px;
  font-size: 32px;
  font-weight: 600;
  
  ${media.md(css`
    margin-top: 16px;
    margin-bottom: 40px;
    font-size: 56px;
  `)}
`;
