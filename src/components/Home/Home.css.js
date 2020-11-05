import styled, {css} from 'styled-components';

import { media } from "../../shared/variables";

export const ContentSt = styled.div`
  width: 100%;
  margin: 24px;
  
  ${media.md(css`
    width: 55%;
    margin: auto;
  `)}
`;

export const GreetingSt = styled.h3`
  margin-top: 0;
  font-size: 32px;
  font-weight: normal;
`;

export const TitleSt = styled.h1`
  font-size: 56px;
  font-weight: bold;
`;
