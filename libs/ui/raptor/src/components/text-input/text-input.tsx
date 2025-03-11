import * as React from 'react';
import { cn } from '@libs/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The variant of the input
   * @default "outline"
   */
  variant?: 'outline' | 'filled' | 'ghost' | 'underline';

  /**
   * The size of the input
   * @default "md"
   */
  inputSize?: 'sm' | 'md' | 'lg';

  /**
   * Icon to display on the left side of the input
   */
  leftIcon?: React.ReactNode;

  /**
   * Icon to display on the right side of the input
   */
  rightIcon?: React.ReactNode;

  /**
   * Error message to display below the input
   */
  error?: string;

  /**
   * Helper text to display below the input
   */
  helperText?: string;

  /**
   * Whether the input is in an error state
   */
  isError?: boolean;

  /**
   * Whether the input is in a success state
   */
  isSuccess?: boolean;

  /**
   * The container className
   */
  containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      variant = 'outline',
      inputSize = 'md',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      error,
      helperText,
      isError,
      isSuccess,
      containerClassName,
      ...props
    },
    ref
  ) => {
    // Determine the base styles based on variant
    const variantStyles = {
      outline: 'border border-input bg-background',
      filled: 'border border-transparent bg-muted/50',
      ghost: 'border border-transparent bg-transparent',
      underline: 'border-0 border-b border-input bg-transparent rounded-none px-0',
    };

    // Determine the size styles
    const sizeStyles = {
      sm: 'h-8 text-xs px-2 py-1',
      md: 'h-10 text-base px-3 py-2 md:text-sm',
      lg: 'h-11 text-lg px-4 py-3',
    };

    // Determine the state styles
    const stateStyles = isError
      ? 'border-red-500 focus-visible:ring-red-500 text-red-500 placeholder:text-red-400'
      : isSuccess
        ? 'border-green-500 focus-visible:ring-green-500'
        : '';

    return (
      <div className={cn('flex flex-col space-y-1 w-full', containerClassName)}>
        <div className='relative flex items-center w-full'>
          {LeftIcon && (
            <div className='absolute left-3 flex items-center pointer-events-none'>{LeftIcon}</div>
          )}

          <input
            type={type}
            className={cn(
              'flex w-full rounded-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
              variantStyles[variant],
              sizeStyles[inputSize],
              stateStyles,
              LeftIcon && 'pl-9',
              RightIcon && 'pr-9',
              className
            )}
            ref={ref}
            {...props}
          />

          {RightIcon && (
            <div className='absolute right-3 flex items-center pointer-events-none'>
              {RightIcon}
            </div>
          )}
        </div>

        {(error || helperText) && (
          <p className={cn('text-xs', error || isError ? 'text-red-500' : 'text-muted-foreground')}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
