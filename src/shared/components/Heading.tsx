import { ReactNode } from 'react'
import { clsx } from 'clsx'

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
}

export function Heading({ size = 'md', children, className }: HeadingProps) {
  return (
    <h2
      className={clsx(
        'text-gray-100 font-bold font-sans',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        },
        className,
      )}>
      {children}
    </h2>
  )
}
