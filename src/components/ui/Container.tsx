import type { PropsWithChildren } from 'react'
import clsx from 'clsx'

interface ContainerProps extends PropsWithChildren {
  className?: string
  narrow?: boolean
}

export function Container({ children, className, narrow = false }: ContainerProps) {
  return <div className={clsx('mx-auto w-full px-4 sm:px-6 lg:px-8', narrow ? 'max-w-5xl' : 'max-w-7xl', className)}>{children}</div>
}