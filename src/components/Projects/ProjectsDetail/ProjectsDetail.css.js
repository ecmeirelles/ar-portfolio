import styled, { css } from "styled-components";
import { media } from "../../../shared/variables";

export const WrapperSt = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const ImageWrapperSt = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: inline-block;
  vertical-align: top;
  background-size: cover;
  background-position: 50% 50%;
  
  img {
    width: 100%;
    height: 100%;
    
    ${media.lg(css`
      height: 100vh;
    `)}
  }
`;

export const DescriptionContainerSt = styled.div`
  padding: 40px 24px;
  
  ${media.md(css`
    padding: 64px 90px;
  `)}
  
  ${media.lg(css`
    padding-right: 200px;
    padding-left: 200px;
  `)}
  
  ${media.xl(css`
    padding-right: 256px;
    padding-left: 256px;
  `)}
`;

export const DescriptionTitleSt = styled.h1`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: normal;
`;

export const DescriptionSt = styled.div`
  font-size: 16px;
  
  img {
    width: 100%;
    height: auto;
  }
`;

export const NextProjectContainerSt = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 150px;
  max-height: 150px;
  background-image: url('${props => props.nextProjectImg}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  justify-content: center;
  padding-left: 24px;
  
  h2 {
    margin-bottom: 16px;
  }
  
  ${media.md(css`
    min-height: 200px;
    max-height: 200px;
    padding-left: 120px;
  `)}
  
  ${media.xl(css`
    min-height: 300px;
    max-height: 300px;
    padding-left: 250px;
  `)}
`;
