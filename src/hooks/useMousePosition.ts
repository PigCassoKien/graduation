import { useEffect, useState } from 'react'

export interface MousePoint {
  x: number
  y: number
}

export function useMousePosition() {
  const [point, setPoint] = useState<MousePoint>({ x: 50, y: 50 })

  useEffect(() => {
    const handleMove = (event: PointerEvent) => setPoint({ x: event.clientX, y: event.clientY })
    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  return point
}