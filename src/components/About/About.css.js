import styled, { css } from "styled-components";
import { colors, media } from "../../shared/variables";

export const WrapperSt = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderSt = styled.div`
  margin: 24px 24px 20px;
  
  ${media.md(css`
    max-width: 460px;
    margin-left: 90px;
    padding: 8px 0 32px;
    
    h3 {
      max-width: 460px;
    }
  `)}
  
  ${media.lg(css`
    max-width: 600px;
    margin-left: 118px;
    padding: 80px 0 84px;
  `)}
  
  ${media.xl(css`
    max-width: 768px;
    margin-left: 156px;
    padding: 132px 0;
    
    h3 {
      max-width: 568px;
    }
  `)}
`;

export const TitleSt = styled.h1`
  margin-bottom: 24px;
  font-size: 32px;
  font-weight: 600;
  
  ${media.md(css`
    font-size: 48px;
  `)}
  
  ${media.xl(css`
    font-size: 56px;
  `)}
`;

export const ContentSt = styled.div`
  ${media.md(css`
    h3 {
      max-width: 500px;
    }
  `)}
  ${media.lg(css`
    h3 {
      max-width: 568px;
    }
  `)}
`;

export const ContainerSt = styled.div`
  display: flex;
  margin: 20px 0;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  
  ${media.md(css`
    padding: 86px 0;
    
    &:nth-child(even) {
      background: linear-gradient(90deg, ${colors.gray} 75%, ${colors.white} 25%);
      
      ${ContentSt} {
        margin-left: calc(100px + 10%);
      }
    }
    
    &:nth-child(odd) {
      background: linear-gradient(90deg, ${colors.white} 25%, ${colors.gray} 75%);
      
      ${ContentSt} {
        padding-left: 90px;
      }
    }
  `)}
  
  ${media.lg(css`
    padding: 156px 0;
  
    &:nth-child(even) {
      ${ContentSt} {
        margin-left: calc(150px + 15%);
      }
    }
    
    &:nth-child(odd) {
      ${ContentSt} {
        padding-left: 118px;
      }
    }
  `)}
  
  ${media.xl(css`
    padding: 204px 0;
  
    &:nth-child(even) {
      ${ContentSt} {
        margin-left: calc(300px + 30%);
      }
    }
    
    &:nth-child(odd) {
      ${ContentSt} {
        padding-left: 156px;
      }
    }
  `)}
`;

export const SubTitleSt = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 600;
  
  ${media.md(css`
    font-size: 32px;
  `)}
  
  ${media.xl(css`
    margin-bottom: 24px;
    font-size: 40px;
  `)}
`;

export const DescriptionSt = styled.h3`
  font-size: 16px;
  font-weight: normal;
`;

export const LetsTalkrSt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 0px;
    
    > p a {
      font-weight: 600;
      text-decoration: underline;
    }
`;

export const SocialMediaContainerSt = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SocialMediaIconSt = styled.a`
  width: 56px;
  height: 56px;
  margin: 16px 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.lightGray};
  border-radius: 50%;
  
  ${media.md(css`
    width: 72px;
    height: 72px;
    margin-right: 16px;
    margin-left: 16px;
  `)}
  
  ${media.lg(css`
    margin-right: 20px;
    margin-left: 20px;
  `)}
`;
