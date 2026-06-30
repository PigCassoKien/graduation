import type { CSSProperties } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'

export function CursorGlow() {
  const point = useMousePosition()

  return (
    <div
      className="spotlight"
      style={{
        '--mouse-x': `${point.x}px`,
        '--mouse-y': `${point.y}px`,
      } as CSSProperties}
    />
  )
}