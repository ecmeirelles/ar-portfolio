import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";
import { colors, media } from "../../shared/variables";
import { Text } from "../../shared/Text/Text";

export const WrapperSt = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const HoverShapeSt = styled.div`
  opacity: 1;
  position: absolute;
  height: 65%;
  width: 80%;
  left: 0;
  bottom: 0;
  z-index: 99;
  background-color: ${colors.charcoal};
  transition: opacity .5s ease-in-out;
  
  ${media.xl(css`
    opacity: 0;
  `)}
`;

export const TextWrapperSt = styled.div`
  width: calc(100% - 48px);
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 1;
  padding: 24px;
  text-align: center;
  transition: opacity .5s ease-in-out;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index: 999;
  
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
  }
  
  ${media.lg(css`
    height: 100vh;
  `)}
  
  ${media.xl(css`
    img {
      opacity: 1;
    }
    
    &:hover {
      ${HoverShapeSt} {
        opacity: 1;
      }
      ${TextWrapperSt} {
        opacity: 1;
      }
    }
  `)}
`;

export const ProjectSubtitleSt = styled(Text).attrs(() => ({
  color: colors.snow,
}))`
  margin-top: 8px;
  
  ${media.lg(css`
    margin-top: 16px;
  `)}
`;

export const LaptopMouseContainerSt = styled.div`
  display: none;
  position: absolute;
  left: 50%;
  bottom: 48px;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  
  ${media.lg(css`
    display: flex;
  `)}
  
  ${media.xl(css`
    bottom: 56px;
  `)}
`;
