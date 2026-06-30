import type { PropsWithChildren } from 'react'
import { AuroraBackground } from '@/animations/AuroraBackground'
import { CursorGlow } from '@/animations/CursorGlow'
import { FloatingOrbs } from '@/animations/FloatingOrbs'
import { TechBackground } from '@/animations/TechBackground'
import { CodeTicker } from '@/animations/CodeTicker'

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05080b] text-[#d9f7ef]">
      <AuroraBackground />
      <TechBackground />
      <CodeTicker />
      <FloatingOrbs />
      <CursorGlow />
      <main className="relative z-10">{children}</main>
    </div>
  )
}