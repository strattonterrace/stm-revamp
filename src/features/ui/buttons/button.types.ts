export enum ButtonColorVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TEXT = 'text',
  LINK = 'link',
  DANGER = 'danger',
  WARNING = 'warning',
}

export type Size = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

export interface ButtonsProps {
  size?: Size;
  children: React.ReactNode;
  classes?: string;
  withArrow?: boolean;
  colorVariant?: ButtonColorVariant;
  [x: string]: unknown;
}

export const sizeFeatureSelector: Record<Size, string> = {
  xs: 'px-3 py-2 font-medium text-center text-xs',
  sm: 'px-3 py-2 font-medium text-center text-sm',
  base: 'px-5 py-2.5 text-center font-semibold text-base',
  lg: 'px-6 py-3 text-base text-center font-semibold text-lg',
  xl: 'px-6 py-3.5 text-center font-semibold text-xl',
};
