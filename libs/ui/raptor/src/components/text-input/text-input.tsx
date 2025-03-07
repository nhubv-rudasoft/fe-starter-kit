import React, { useMemo } from 'react';
import classNames from 'classnames';
import { TextInputProps } from './text-input.type';
import { TEXT_INPUT_CLASSES } from './text-input.style';

// Memoized Input component
const MemoizedInput = React.memo(
  ({
    rpType = 'text',
    rpVariant = 'default',
    rpSize = 'md',
    rpIcon,
    className,
    ...rest
  }: Omit<TextInputProps, 'rpLabel'> & { className?: string }) => {
    return <input type={rpType} className={className} {...rest} />;
  }
);

MemoizedInput.displayName = 'MemoizedInput';

// Memoized Label component
const MemoizedLabel = React.memo(
  ({ label, htmlFor }: { label: NonNullable<TextInputProps['rpLabel']>; htmlFor?: string }) => {
    const labelClasses = classNames(TEXT_INPUT_CLASSES.label.base, label.className);

    return (
      <label htmlFor={htmlFor} className={labelClasses}>
        {label.text}
        {label.required && <span className={TEXT_INPUT_CLASSES.label.required}>*</span>}
      </label>
    );
  }
);

MemoizedLabel.displayName = 'MemoizedLabel';

// Main component
const RaptorTextInput = React.memo((props: TextInputProps) => {
  const {
    rpLabel,
    rpType = 'text',
    rpVariant = 'default',
    rpSize = 'md',
    rpIcon,
    rpWrapperClassName,
    className,
    id,
    name,
    ...rest
  } = props;

  const elementId = id || name;

  // Memoize the input classes
  const inputClasses = useMemo(
    () =>
      classNames(
        TEXT_INPUT_CLASSES.base,
        TEXT_INPUT_CLASSES.size[rpSize],
        TEXT_INPUT_CLASSES.variant[rpVariant],
        rpIcon && TEXT_INPUT_CLASSES.icon.left,
        className
      ),
    [rpSize, rpVariant, rpIcon, className]
  );

  // If no label, just render the input
  if (!rpLabel) {
    return (
      <MemoizedInput
        rpType={rpType}
        rpVariant={rpVariant}
        rpSize={rpSize}
        rpIcon={rpIcon}
        className={inputClasses}
        id={id}
        name={name}
        {...rest}
      />
    );
  }

  // With label, render both in appropriate layout
  const position = rpLabel.position || 'top';
  const flexDirection = position === 'top' ? 'flex-col' : 'flex-row';
  const containerClass = classNames(`flex ${flexDirection} gap-2`, rpWrapperClassName);

  return (
    <div key={elementId} className={containerClass}>
      <MemoizedLabel label={rpLabel} htmlFor={elementId} />
      <MemoizedInput
        rpType={rpType}
        rpVariant={rpVariant}
        rpSize={rpSize}
        rpIcon={rpIcon}
        className={inputClasses}
        id={id}
        name={name}
        {...rest}
      />
    </div>
  );
});

RaptorTextInput.displayName = 'RaptorTextInput';
export default RaptorTextInput;
