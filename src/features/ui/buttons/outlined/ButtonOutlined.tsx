import React from 'react';
import {
  ButtonColorVariant,
  ButtonsProps,
  sizeFeatureSelector,
} from '../button.types';

const ButtonOutlined = ({
  size = 'base',
  children,
  classes,
  fullWidth = false,
  withArrow = false,
  withShadow = false,
  colorVariant = ButtonColorVariant.PRIMARY,
  ghost = false,
  ...rest
}: ButtonsProps) => {
  const buttonSize = sizeFeatureSelector[size];
  const color =
    colorVariant === ButtonColorVariant.PRIMARY
      ? `${
          !ghost ? 'border-[1px] border-yellow-600' : ''
        } hover:bg-yellow-50 focus:ring-yellow-500 text-yellow-600`
      : `${
          !ghost ? 'border-[1px] border-gray-900' : ''
        } hover:bg-gray-100 focus:ring-gray-600 text-gray-900`;
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
      {withArrow && <p>arrow</p>}
    </button>
  );
};

export default ButtonOutlined;
