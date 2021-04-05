import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";
import { colors, media } from "../../shared/variables";

export const WrapperSt = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TextWrapperSt = styled.div`
  width: calc(100% - 48px);
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 1;
  padding: 24px;
  text-align: center;
  transition: .5s ease;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  
  ${media.xl(css`
    opacity: 0;
  `)}
`;

export const ImageWrapperSt = styled(Link)`
  width: 100%;
  height: 100%;
  position: relative;
  display: inline-block;
  margin: 2px 0;
  vertical-align: top;
  background-size: cover;
  background-position: 50% 50%;
  
  img {
    width: 100%;
    height: 100%;
    opacity: 0.5;
    zoom: 1;
    filter: alpha(opacity=0);
    transition: .5s ease;
    backface-visibility: hidden;
  }
  
  ${media.xl(css`
    img {
      opacity: 1;
    }
    
    &:hover {
      img {
        opacity: 0.5;
      }
      ${TextWrapperSt} {
        opacity: 1;
      }
    }
  `)}
`;

export const ProjectTitleSt = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.white};
  text-shadow: 1px 1px 2px ${colors.black};
  
  ${media.md(css`
    font-size: 40px;
  `)}
`;

export const ProjectSubtitleSt = styled.div`
  margin-top: 8px;
  font-size: 16px;
  color: ${colors.white};
  text-shadow: 1px 1px 2px ${colors.black};
  
  ${media.lg(css`
    margin-top: 16px;
    font-size: 24px;
  `)}
`;
