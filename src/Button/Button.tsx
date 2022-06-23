import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
} from '../types'

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'color'
> &
  IComponentBaseProps & {
    href?: string
    size?: 'lg' | 'sm'
    variant?: 'primary' | 'secondary' | 'nav' | 'warning'
    fullWidth?: boolean
    animation?: boolean
    loading?: boolean
    disabled?: boolean
    startIcon?: ReactNode
    endIcon?: ReactNode
    onlyIcon?: ReactNode
    target?: '_blank' | '_self'
  }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      href,
      size,
      startIcon,
      endIcon,
      onlyIcon,
      fullWidth,
      animation = true,
      loading,
      variant,
      disabled,
      dataTheme,
      className,
      target,
      style,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'btn base1 px-6 transition transform ease-in-out duration-250 delay-150 hover:scale-105 hover:shadow-elevation-high hover:bg-neutral hover:text-neutral-content hover:border-none',
      className,
      clsx(((startIcon && !loading) || endIcon) && 'gap-2', {
        [`btn-${size}`]: size === 'lg',
        [`btn-${size} px-4 base2`]: size === 'sm',
        'btn btn-circle': onlyIcon,
        'btn-block': fullWidth,
        'no-animation': !animation,
        'btn-disabled bg-base-200': disabled,
        'btn-primary hover:btn-default': variant === 'primary',
        'btn-outline border-2 border-base-300 hover:btn-outline': variant === 'secondary',
        'btn border-none bg-red-200 text-red-600 hover:text-white hover:border-2 hover:red-600 hover:bg-red-600 hover:text-white': variant === 'warning',
        'btn-ghost hover:text-primary hover:bg-base-200': variant === 'nav',
        loading: loading,
      })
    )

    if (href) {
      return (
        <a className={classes} style={style} href={href}>
          {startIcon && startIcon}
          {children}
          {onlyIcon && onlyIcon}
          {endIcon && endIcon }
        </a>
      )
    } else {
      return (
        <button
          {...props}
          ref={ref}
          data-theme={dataTheme}
          className={classes}
          style={style}
          disabled={disabled}
        >
          {startIcon && !loading && startIcon}
          {children}
          {onlyIcon && onlyIcon}
          {endIcon && endIcon}
        </button>
      )
    }
  }
)

Button.displayName = 'Button'

export default Button
