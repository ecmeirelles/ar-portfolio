import styled from "styled-components";

export const WrapperSt = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor && bgColor};
`;

export const ContentSt = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${({ isTransparent }) => isTransparent ? 0 : 80}px;
`;
