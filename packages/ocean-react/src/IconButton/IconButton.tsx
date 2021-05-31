import React from 'react';
import classNames from 'classnames';

import { MergeElementProps } from '../_util/type';

export type ButtonProps<P extends React.ElementType = 'button'> = {
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
  }: ButtonProps<T>,
  ref: React.Ref<HTMLButtonElement>
) {
  return React.createElement(
    component || 'button',
    {
      ref,
      className: classNames(
        'ods-iconbtn',
        `ods-iconbtn--${size}`,
        disabled && 'ods-iconbtn--disabled',
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
