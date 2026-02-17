'use client';

import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-primary to-primary-light text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-gradient-to-r from-secondary to-secondary-light text-white shadow-lg shadow-secondary/25 hover:shadow-secondary/40 hover:-translate-y-0.5 active:translate-y-0',
  outline:
    'border-2 border-primary/30 text-primary-light hover:bg-primary/10 hover:border-primary/50 dark:border-primary-light/30 dark:text-primary-light',
  ghost:
    'text-foreground hover:bg-primary/5 hover:text-primary-light',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
};

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className = '', ...rest } = props;

  const baseStyles =
    'inline-flex items-center justify-center font-bold transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none';

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ('href' in rest && rest.href) {
    const { href, ...linkProps } = rest;
    return (
      <Link href={href} className={classes} {...(linkProps as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>)}>
        {linkProps.children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button className={classes} {...buttonProps} />;
}
