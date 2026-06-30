export function AuroraBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(108,99,255,0.28),transparent_70%)] blur-3xl" />
      <div className="absolute right-[-4rem] top-28 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(157,123,255,0.22),transparent_68%)] blur-3xl" />
      <div className="absolute bottom-[-5rem] left-1/4 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,213,79,0.12),transparent_65%)] blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.04)_50%,transparent_80%)] opacity-20" />
    </div>
  )
}