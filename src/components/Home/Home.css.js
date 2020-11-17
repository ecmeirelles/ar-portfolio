import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { media } from "../../shared/variables";

export const ContentSt = styled.div`
  width: 100%;
  margin: 24px;
  
  ${media.sm(css`
    margin: auto 24px;
  `)}
  
  ${media.md(css`
    width: 75%;
    margin: auto;
  `)}
  
  ${media.xl(css`
    width: 48%;
  `)}
`;

export const GreetingSt = styled.h3`
  margin-top: 32px;
  font-size: 24px;
  font-weight: normal;
  
  ${media.sm(css`
    margin-top: 0;
  `)}
  
  ${media.md(css`
    font-size: 32px;
  `)}
`;

export const TitleSt = styled.h1`
  margin-top: 2px;
  font-size: 40px;
  font-weight: 600;
  
  ${media.md(css`
    margin-top: 16px;
    font-size: 56px;
  `)}
`;

export const LinkButtonSt = styled(Link)`
  display: flex;
  max-width: 190px;
  height: 32px;
  margin-top: 24px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  background-color: rgba(125, 125, 125, 0.6);
  border-radius: 24px;
  
  ${media.md(css`
    max-width: 267px;
    margin-top: 48px;
  `)}
`;
