import React from 'react';
import { string } from 'prop-types';
import { colors } from "../variables";
import { TextSt } from "./Text.css";

export const Text = ({ children, className, color }) => {
  return (
    <TextSt className={className} color={color}>
      {children}
    </TextSt>
  );
};

Text.propTypes = {
  children: string.isRequired,
  className: string,
  color: string,
};

Text.defaultProps = {
  className: '',
  color: colors.charcoal,
};
