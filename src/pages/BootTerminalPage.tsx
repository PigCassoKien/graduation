import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

const terminalLog = [
  { type: 'info', text: 'Launching Spring Boot application...' },
  { type: 'command', text: './mvnw spring-boot:run' },
  { type: 'output', text: '[INFO] Scanning for projects...' },
  { type: 'output', text: '[INFO] ------------------------------------------------------------------------' },
  { type: 'output', text: '[INFO] BUILD FAILURE' },
  { type: 'output', text: '[ERROR] Failed to execute goal org.springframework.boot:spring-boot-maven-plugin:3.2.0:run (default-cli):' },
  { type: 'error', text: 'java.lang.IllegalStateException: Failed to bind properties under "server.port"' },
  { type: 'error', text: 'Reason: Port must be a number between 1024 and 65535' },
  { type: 'prompt', text: 'RUN MODE [dev/prod]:' },
  { type: 'command', text: './mvnw clean package' },
  { type: 'command', text: 'java -jar target/grad-invite-0.1.0.jar --spring.profiles.active=prod' },
  { type: 'success', text: 'Application started successfully on port 8080' },
  { type: 'hint', text: 'Press ENTER to continue to the invitation page...' },
]

interface BootTerminalPageProps {
  onComplete: () => void
}

export function BootTerminalPage({ onComplete }: BootTerminalPageProps) {
  const [visibleLines, setVisibleLines] = useState(0)
  const [readyToContinue, setReadyToContinue] = useState(false)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisibleLines((current) => Math.min(current + 1, terminalLog.length))
    }, 200)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    if (visibleLines === terminalLog.length) {
      setReadyToContinue(true)
    }
  }, [visibleLines])

  useEffect(() => {
    if (!readyToContinue) return

    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        onComplete()
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [readyToContinue, onComplete])

  const visibleLog = useMemo(() => terminalLog.slice(0, visibleLines), [visibleLines])

  return (
    <section className="boot-terminal relative min-h-[100svh] overflow-hidden px-4 py-6 md:px-6 md:py-8">
      <Container className="relative flex min-h-[calc(100svh-2rem)] items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full max-w-6xl"
        >
          <div className="boot-terminal__window">
            <div className="boot-terminal__header">
              <div className="boot-terminal__controls">
                <span className="boot-terminal__dot boot-terminal__dot--red" />
                <span className="boot-terminal__dot boot-terminal__dot--yellow" />
                <span className="boot-terminal__dot boot-terminal__dot--green" />
              </div>
              <div className="boot-terminal__title">Spring Boot Terminal — grad.dmkien</div>
            </div>

            <div className="boot-terminal__screen">
              <div className="boot-terminal__meta">Project: dmkien-graduate-invite • Java 21 • Spring Boot 3.2</div>
              <div className="boot-terminal__divider" />

              <div className="boot-terminal__content">
                {visibleLog.map((line, index) => (
                  <p
                    key={`${line.type}-${index}`}
                    className={`boot-terminal__line boot-terminal__line--${line.type}`}
                  >
                    {line.type === 'command' ? '❯ ' : ''}
                    {line.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
