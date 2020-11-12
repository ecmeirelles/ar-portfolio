import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";

import { media } from "../../shared/variables";

export const ContentSt = styled.div`
  width: 100%;
  margin: 24px;
  
  ${media.md(css`
    width: 75%;
    margin: auto;
  `)}
  
  ${media.xl(css`
    width: 65%;
  `)}
`;

export const GreetingSt = styled.h3`
  margin-top: 24px;
  font-size: 24px;
  font-weight: normal;
  
  ${media.md(css`
    margin-top: 0;
    font-size: 40px;
  `)}
`;

export const TitleSt = styled.h1`
  margin-top: 8px;
  font-size: 40px;
  font-weight: bold;
  
  ${media.md(css`
    margin-top: 24px;
    font-size: 72px;
  `)}
`;

export const LinkButtonSt = styled(Link)`
  display: block;
  max-width: 190px;
  margin-top: 32px;
  padding: 16px;
  font-size: 20px;
  text-align: center;
  background-color: #A9A9A9;
  border: solid 1px #A9A9A9;
  border-radius: 32px;
  
  ${media.md(css`
    max-width: 300px;
    margin-top: 48px;
    font-size: 24px;
  `)}
`;
