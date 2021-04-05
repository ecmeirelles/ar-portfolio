import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconButtonSt } from "./IconButton.css";

export const IconButton = ({ to, target, iconName }) => {
  return (
    <IconButtonSt href={to} target={target} rel="noreferrer">
      <FontAwesomeIcon icon={iconName} size="2x" />
    </IconButtonSt>
  );
};
