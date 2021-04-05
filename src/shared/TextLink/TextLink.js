import React from 'react';

import {
  ArrowRightSt,
  ContainerSt,
  ExternalTextLinkSt,
  TextLinkSt
} from "./TextLink.css";

export const TextLink = ({ to, label, target, isExternal, isInline }) => {
  if (isExternal) {
    return (
      <ExternalTextLinkSt
        href={to}
        target={target}
        rel="noreferrer"
        isInline={isInline}
      >
        {label}
      </ExternalTextLinkSt>
    )
  }

  return (
    <ContainerSt>
      <ArrowRightSt />
        <TextLinkSt to={to} target={target} isInline={isInline}>
          {label}
        </TextLinkSt>
    </ContainerSt>
  );
};
