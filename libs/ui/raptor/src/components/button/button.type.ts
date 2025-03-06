import React, { ButtonHTMLAttributes } from 'react';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonVariant = 'default' | 'primary' | 'secondary' | 'danger' | 'warning';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
type ButtonIcon = {
  element: React.ReactNode;
  position?: 'left' | 'right';
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type: ButtonType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ButtonIcon;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  key?: string;
  onClick?: () => void;
  onSubmit?: () => void;
  onReset?: () => void;
}
