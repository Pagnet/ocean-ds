import React from 'react';
import classNames from 'classnames';

import { MergeElementProps } from '../_util/type';

export type IconButtonProps<P extends React.ElementType = 'button'> = {
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   * @default 'button'
   */
  component?: P;
} & MergeElementProps<
  P,
  {
    /**
     * The size of the button.
     * @default 'md'
     */
    size?: 'sm' | 'md';
    /**
     * Spans the full width of the Button parent.
     * @default false
     */
    disabled?: boolean;
  }
>;

function IconButtonBase<T extends React.ElementType = 'button'>(
  {
    children,
    className,
    size = 'md',
    disabled = false,
    component,
    ...rest
  }: IconButtonProps<T>,
  ref: React.Ref<HTMLButtonElement>
) {
  return React.createElement(
    component || 'button',
    {
      ref,
      className: classNames(
        'ods-icon-btn',
        `ods-icon-btn--${size}`,
        disabled && 'ods-icon-btn--disabled',
        className
      ),
      ...rest,
    },
    children
  );
}

const IconButton = (React.forwardRef(
  IconButtonBase
) as unknown) as typeof IconButtonBase;

export default IconButton;
