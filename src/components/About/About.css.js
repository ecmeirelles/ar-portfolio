import styled, { css } from "styled-components";
import { colors, media } from "../../shared/variables";

export const WrapperSt = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderSt = styled.div`
  margin: 24px 24px 20px;
  
  h3 {
    color: ${colors.white};
    line-height: 24px;
  }
  
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
  color: ${colors.white};
  
  ${media.md(css`
    font-size: 48px;
  `)}
  
  ${media.xl(css`
    font-size: 56px;
  `)}
`;

export const ContentSt = styled.div`
  position: relative;
  padding: 24px;
  
  h3 {
    color: ${colors.white};
    line-height: 24px;
  }
  ${media.md(css`
    position: absolute;
    top: 204px;
    z-index: 99;
    padding: 0;
    
    ${({ comesFromRight }) => comesFromRight ? css`
      right: 90px;
    ` : css`
      left: 90px;
    `};
    h3 {
      max-width: 500px;
    }
  `)}
  ${media.lg(css`
    ${({ comesFromRight }) => comesFromRight ? css`
      right: 118px;
    ` : css`
      left: 118px;
    `};
    h3 {
      max-width: 568px;
    }
  `)}
  ${media.xl(css`
    ${({ comesFromRight }) => comesFromRight ? css`
      right: 156px;
    ` : css`
      left: 156px;
    `};
    h3 {
      max-width: 568px;
    }
  `)}
`;

export const BoxSt = styled.div`
  width: ${({ comesFromRight }) => comesFromRight ? 'calc(100% - 24px)' : '24px'};
  background-color: ${({ comesFromRight }) => comesFromRight ? colors.gray : colors.charcoal};
  
  ${({ comesFromRight }) => comesFromRight ? css`
    height: 186px;
  ` : css`
    display: none;
  `}
  
  ${media.md(css`
    display: flex;
    height: 568px;
    width: ${({ comesFromRight }) => comesFromRight ? 75 : 25}%;
  `)}
  
  ${media.xl(css`
    width: ${({ comesFromRight }) => comesFromRight ? 80 : 20}%;
  `)}
`;

export const ContainerSt = styled.div`
  display: flex;
  margin: 8px 0;
  position: relative;
  flex-direction: column;
  justify-content: center;
  
  ${media.md(css`
    margin: 20px 0;
    flex-direction: row;
  `)}
`;

export const SubTitleSt = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 600;
  color: ${colors.white};
  
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

export const LetsTalkSt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 44px 0px 64px;
    background-color: ${colors.charcoal};
    
    p {
      color: ${colors.white};
    }
    
    > p a {
      margin-left: 4px;
    }
`;

export const SocialMediaContainerSt = styled.div`
  display: flex;
  flex-direction: row;
`;
