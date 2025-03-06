import React from 'react';
import { SPINNER_CLASSES } from './spinner.style';
import { SpinnerProps } from './spinner.type';

const RpSpinner: React.FC<SpinnerProps> = ({ size = 'md', color = 'white', className }) => {
  return (
    <span
      className={`${SPINNER_CLASSES.size[size]} ${SPINNER_CLASSES.color[color]} border-t-transparent rounded-full animate-spin ${className}`}
    ></span>
  );
};

RpSpinner.displayName = 'RpSpinner';
export default RpSpinner;
