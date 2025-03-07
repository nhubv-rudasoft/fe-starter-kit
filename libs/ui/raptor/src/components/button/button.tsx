import React from 'react';
import { RpSpinner } from '../spinner';
import { ButtonProps } from './button.type';
import { BTN_CLASSES } from './button.style';

const RpButton: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  onClick,
  variant = 'default',
  disabled = false,
  className,
  size = 'md',
  loading,
  key,
  icon,
  onSubmit,
  onReset,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      onReset={onReset}
      disabled={disabled || loading}
      className={`${BTN_CLASSES.base} ${BTN_CLASSES.variant[variant]} ${disabled || loading ? BTN_CLASSES.disabled : ''} ${className} ${BTN_CLASSES.size[size]} ${
        icon?.position === 'left' ? BTN_CLASSES.icon.left : BTN_CLASSES.icon.right
      }`}
      key={key}
    >
      <div className='relative flex items-center justify-center gap-2'>
        {icon && icon.position === 'left' && (
          <>
            {loading && <RpSpinner size={size} />}
            {!loading && icon.element}
          </>
        )}
        {children}
        {icon && icon.position === 'right' && (
          <>
            {loading && <RpSpinner size={size} />}
            {!loading && icon.element}
          </>
        )}
      </div>
    </button>
  );
};

RpButton.displayName = 'RpButton';
export default RpButton;
