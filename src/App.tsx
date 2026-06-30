import { useState } from 'react'
import { MainLayout } from '@/layouts/MainLayout'
import { InvitationPage } from '@/pages/InvitationPage'
import { BootTerminalPage } from '@/pages/BootTerminalPage'
import { useLenis } from '@/hooks/useLenis'
import { useSeo } from '@/hooks/useSeo'
import { profile } from '@/data/profile'

function App() {
  const [showBootPage, setShowBootPage] = useState(true)

  useLenis()
  useSeo(profile.seo)

  return (
    <MainLayout>
      {showBootPage ? (
        <BootTerminalPage onComplete={() => setShowBootPage(false)} />
      ) : (
        <InvitationPage />
      )}
    </MainLayout>
  )
}

export default App
