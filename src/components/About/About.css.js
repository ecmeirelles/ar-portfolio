import styled, { css } from "styled-components";
import { colors, media } from "../../shared/variables";
import { Heading } from "../../shared/Heading/Heading";
import { Text } from "../../shared/Text/Text";

export const WrapperSt = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DescriptionSt = styled(Text).attrs(() => ({
  color: colors.snow,
}))``;

export const HeaderSt = styled.div`
  position: relative;
  padding: 24px;
  
  ${media.md(css`
    position: absolute;
    top: 128px;
    left: 90px;
    max-width: 460px;
    padding: 0;
    
    ${DescriptionSt} {
      max-width: 460px;
    }
  `)}
  
  ${media.lg(css`
    top: 85px;
    left: 118px;
    max-width: 600px;
  `)}
  
  ${media.xl(css`
    left: 156px;
    max-width: 768px;
    
    ${DescriptionSt} {
      max-width: 568px;
    }
  `)}
`;

export const TitleSt = styled(Heading).attrs(() => ({
  type: 1,
  color: colors.snow,
}))`
  margin-bottom: 24px;
`;

export const ContentSt = styled.div`
  position: relative;
  padding: 24px;

  ${media.md(css`
    position: absolute;
    top: 128px;
    z-index: 99;
    padding: 0;
    
    ${({ comesFromRight }) => comesFromRight ? css`
      right: 90px;
    ` : css`
      left: 90px;
    `};
    ${DescriptionSt} {
      max-width: 500px;
    }
  `)}
  ${media.lg(css`
    ${({ comesFromRight }) => comesFromRight ? css`
      right: 118px;
    ` : css`
      left: 118px;
    `};
    ${DescriptionSt} {
      max-width: 568px;
    }
  `)}
  ${media.xl(css`
    top: 204px;
    
    ${({ comesFromRight }) => comesFromRight ? css`
      right: 156px;
    ` : css`
      left: 156px;
    `};
    ${DescriptionSt} {
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
    height: 420px;
    width: ${({ comesFromRight }) => comesFromRight ? 75 : 25}%;
  `)}
  
  ${media.xl(css`
    height: 568px;
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

export const SubTitleSt = styled(Heading).attrs(() => ({
  type: 2,
  color: colors.snow,
}))`
  margin-bottom: 16px;
  
  ${media.xl(css`
    margin-bottom: 24px;
  `)}
`;

export const LetsTalkSt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 0px;
    background-color: ${colors.charcoal};
    
    p {
      margin-top: 0;
      margin-bottom: 8px;
      color: ${colors.snow};
    }
    
    > p a {
      margin-left: 4px;
    }
`;

export const SocialMediaContainerSt = styled.div`
  display: flex;
  flex-direction: row;
`;
