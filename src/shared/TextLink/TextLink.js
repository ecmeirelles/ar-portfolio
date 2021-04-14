import React from 'react';
import { string, bool } from 'prop-types';
import { colors } from "../variables";
import {
  ArrowRightSt,
  ContainerSt,
  ExternalTextLinkSt,
  TextLinkSt
} from "./TextLink.css";

export const TextLink = ({ to, label, target, isExternal, isInline, color }) => {
  const textColor = isInline ? colors.strawberry : color;
  if (isExternal) {
    return (
      <ExternalTextLinkSt
        href={to}
        target={target}
        rel="noreferrer"
        color={textColor}
      >
        {label}
      </ExternalTextLinkSt>
    )
  }

  return (
    <ContainerSt>
      <ArrowRightSt color={color} />
        <TextLinkSt to={to} target={target} color={textColor}>
          {label}
        </TextLinkSt>
    </ContainerSt>
  );
};

TextLink.propTypes = {
  to: string.isRequired,
  label: string.isRequired,
  target: string,
  isExternal: bool,
  isInline: bool,
  color: string,
};

TextLink.defaultProps = {
  target: undefined,
  isExternal: false,
  isInline: false,
  color: colors.charcoal,
};
