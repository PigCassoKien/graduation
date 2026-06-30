import { useRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type PointerEvent, type PropsWithChildren } from 'react'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface MagneticBaseProps extends PropsWithChildren {
  className?: string
  variant?: ButtonVariant
}

interface MagneticAnchorProps extends MagneticBaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

interface MagneticNativeButtonProps extends MagneticBaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined
}

type MagneticButtonProps = MagneticAnchorProps | MagneticNativeButtonProps

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-[linear-gradient(135deg,var(--primary),var(--secondary))] text-white shadow-[0_18px_45px_rgba(108,99,255,0.28)]',
  secondary: 'border border-white/12 bg-white/6 text-white backdrop-blur-xl hover:bg-white/10',
  ghost: 'border border-transparent bg-transparent text-white/82 hover:bg-white/6',
}

export function MagneticButton({ children, className, variant = 'primary', href, ...props }: MagneticButtonProps) {
  const anchorRef = useRef<HTMLAnchorElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const isAnchor = typeof href === 'string'

  const handleMove = (event: PointerEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const element = isAnchor ? anchorRef.current : buttonRef.current
    if (!element) return

    const rect = element.getBoundingClientRect()
    const offsetX = (event.clientX - rect.left - rect.width / 2) / 18
    const offsetY = (event.clientY - rect.top - rect.height / 2) / 18
    element.style.transform = `translate(${offsetX}px, ${offsetY}px)`
  }

  const resetMove = () => {
    const element = isAnchor ? anchorRef.current : buttonRef.current
    if (element) element.style.transform = 'translate(0px, 0px)'
  }

  const sharedProps = {
    onPointerMove: handleMove,
    onPointerLeave: resetMove,
    className: clsx('magnetic-button inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition will-change-transform', variantClasses[variant], className),
  }

  if (isAnchor) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a ref={anchorRef} {...sharedProps} href={href} {...anchorProps}>
        {children}
      </a>
    )
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button ref={buttonRef} {...sharedProps} type={buttonProps.type ?? 'button'} {...buttonProps}>
      {children}
    </button>
  )
}