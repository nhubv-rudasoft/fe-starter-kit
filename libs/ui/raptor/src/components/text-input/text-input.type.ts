import React from 'react';

type TextInputType = 'text' | 'password' | 'email' | 'tel' | 'url';
type TextInputSize = 'sm' | 'md' | 'lg' | 'xl';
type TextInputVariant = 'default' | 'primary' | 'secondary' | 'danger' | 'warning';
type TextInputIcon = {
  element: React.ReactNode;
  position?: 'left' | 'right';
};
type TextInputLabel = {
  text: string;
  position: 'top' | 'left';
  required?: boolean;
  className?: string;
};

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rpWrapperClassName?: string;
  rpSize?: TextInputSize;
  rpLabel?: TextInputLabel;
  rpType?: TextInputType;
  rpVariant?: TextInputVariant;
  rpIcon?: TextInputIcon;
}
