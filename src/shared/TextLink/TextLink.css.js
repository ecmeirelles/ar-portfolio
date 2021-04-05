import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { colors, media } from "../variables";

export const ContainerSt = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ArrowRightSt = styled.div`
  font-size: 24px;
  
  ${media.md(css`
    font-size: 32px;
  `)}
  
  &:before {
    content: '->';
  }
`;

export const TextLinkSt = styled(Link)`
  display: flex;
  margin-left: 16px;
  font-size: 24px;
  color: ${({ isInline }) => isInline ? colors.strawberry : colors.charcoal};
  
  ${media.md(css`
    font-size: 32px;
  `)}
  
  &:hover {
    text-decoration: underline;
  }
`;

export const ExternalTextLinkSt = styled.a`
  font-weight: 600;
  color: ${({ isInline }) => isInline ? colors.strawberry : colors.charcoal};
  
  &:hover {
    text-decoration: underline;
  }
`;
