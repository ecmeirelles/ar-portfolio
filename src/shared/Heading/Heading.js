import React from 'react';
import { string, oneOf } from 'prop-types';
import { colors } from "../variables";
import { Heading1St, Heading2St } from "./Heading.css";

export const Heading = ({ children, type, className, color }) => {
  const HeadingWrapper = type === 1 ? Heading1St : Heading2St;
  return (
    <HeadingWrapper className={className} color={color}>
      {children}
    </HeadingWrapper>
  );
};

Heading.propTypes = {
  children: string.isRequired,
  className: string,
  color: string,
  type: oneOf([1, 2]),
};

Heading.defaultProps = {
  type: 1,
  className: '',
  color: colors.charcoal,
};
