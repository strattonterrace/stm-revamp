import React from 'react';
import {
  ButtonColorVariant,
  ButtonsProps,
  sizeFeatureSelector,
} from '../button.types';

const ButtonContained = ({
  size = 'base',
  children,
  classes,
  fullWidth = false,
  withArrow = false,
  withShadow = false,
  colorVariant = ButtonColorVariant.PRIMARY,
  ...rest
}: ButtonsProps) => {
  const buttonSize = sizeFeatureSelector[size];
  const color =
    colorVariant === ButtonColorVariant.PRIMARY
      ? 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500 text-gray-900'
      : 'bg-gray-900 hover:bg-gray-900 focus:ring-gray-600 text-white';
  return (
    <button
      type="button"
      {...rest}
      className={`${buttonSize} ${fullWidth ? 'w-full' : ''} ${classes} ${
        withShadow ? '' : ''
      } ${color} flex items-center justify-center rounded-lg focus:ring-2 
    focus:outline-none disabled:bg-none disabled:text-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed tracking-normal`}
    >
      {children}
      {withArrow && <span>&nbsp;{'->'}</span>}
    </button>
  );
};

export default ButtonContained;
