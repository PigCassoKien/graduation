export function FloatingOrbs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <span className="floating-orb left-[10%] top-[16%] h-20 w-20 bg-[radial-gradient(circle,rgba(255,255,255,0.42),rgba(108,99,255,0.34))]" />
      <span className="floating-orb floating-orb--slow right-[14%] top-[36%] h-24 w-24 bg-[radial-gradient(circle,rgba(255,213,79,0.36),rgba(157,123,255,0.22))]" />
      <span className="floating-orb floating-orb--reverse left-[26%] bottom-[18%] h-16 w-16 bg-[radial-gradient(circle,rgba(157,123,255,0.42),rgba(108,99,255,0.2))]" />
    </div>
  )
}