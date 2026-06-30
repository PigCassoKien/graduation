import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiLock } from 'react-icons/fi'
import { FaGraduationCap, FaClock, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { Container } from '@/components/ui/Container'
import { profile } from '@/data/profile'
// using images from project-root /image folder as requested
const uetImg = '/image/logo UET.webp'
const fetImg = '/image/logo FET.png'


const countdownTarget = new Date('2026-07-05T08:00:00+07:00')

const formatCountdown = (remainingMs: number) => {
  const totalSeconds = Math.max(0, Math.floor(remainingMs / 1000))
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return [
    { label: 'DAYS', value: String(days).padStart(2, '0') },
    { label: 'HRS', value: String(hours).padStart(2, '0') },
    { label: 'MINS', value: String(minutes).padStart(2, '0') },
    { label: 'SECS', value: String(seconds).padStart(2, '0') },
  ]
}

export function InvitationPage() {
  const [countdown, setCountdown] = useState(() => formatCountdown(countdownTarget.getTime() - Date.now()))

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(formatCountdown(countdownTarget.getTime() - Date.now()))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[100svh] overflow-hidden px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,145,255,0.16),transparent_42%),linear-gradient(180deg,rgba(3,10,24,0.08),transparent_24%,rgba(2,6,16,0.56))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(0,145,255,0.08),transparent_35%,rgba(88,186,255,0.06)_65%,transparent)] opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(0,145,255,0.22),transparent_0_16%),radial-gradient(circle_at_80%_75%,rgba(0,200,255,0.12),transparent_0_18%)]" />

      <Container className="relative flex min-h-[calc(100svh-1.5rem)] max-w-[1680px] flex-col justify-between py-2 md:py-4">
        <div className="border-b border-[#4fb0ff]/40 pb-3 text-xs uppercase tracking-[0.22em] text-[#82caff] drop-shadow-[0_0_12px_rgba(79,176,255,0.45)] sm:text-sm">
          <div className="flex items-center gap-3">
            <FiLock className="text-base sm:text-lg" />
            <span className="font-semibold break-all">DIGITAL_INVITE // {profile.invitationCode}</span>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center py-6 sm:py-10 md:py-16">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="w-full max-w-5xl">
            <div className="rounded-3xl border border-[#4fb0ff]/12 bg-[linear-gradient(180deg,rgba(6,12,24,0.92),rgba(3,8,18,0.86))] p-4 shadow-[0_12px_60px_rgba(12,20,36,0.6)] sm:p-6 md:p-12">
              <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-start">
                  <img src={uetImg} alt="UET" className="h-9 w-auto rounded-md object-contain sm:h-10 md:h-12" />
                  <img src={fetImg} alt="FET" className="h-8 w-auto rounded-md object-contain opacity-90 sm:h-9 md:h-10" />
                </div>
                <div className="min-w-0 flex-1 text-center md:text-left">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9fd6ff] sm:text-sm">GRADUATION CEREMONY</p>
                  <h2 className="mt-1 text-xl font-semibold text-[#dff6ff] sm:text-2xl md:text-3xl">{profile.eventTitle}</h2>
                  <p className="mt-1 text-sm text-[#bcdff5]">{`${profile.degreeTitle} • Khóa ${profile.academicYear}`}</p>
                </div>
                <div className="flex justify-center text-2xl text-[#9fd6ff] md:justify-end"><FaGraduationCap /></div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#06304a] to-[#08243a] text-2xl text-[#7ecfff] sm:h-16 sm:w-16"><FaGraduationCap /></div>
                    <div className="min-w-0">
                      <div className="text-lg font-semibold text-[#e9fbff] sm:text-xl">{profile.studentName}</div>
                      <div className="text-sm text-[#bcdff5]">{profile.schoolName}</div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#4fb0ff]/12 bg-[#041125]/60 p-4 sm:p-6">
                    <p className="text-[0.82rem] font-medium text-[#cfeeff]">Thông tin</p>
                    <ul className="mt-3 space-y-2 text-sm text-[#d9eefc]">
                      <li className="flex items-start gap-2"><FaGraduationCap className="mt-0.5 shrink-0 text-[#7ecfff]" /><span className="min-w-0 break-words"><span className="font-medium text-[#e6fbff]">Ngành:</span> {profile.majorName}</span></li>
                      <li className="flex items-start gap-2"><FaMapMarkerAlt className="mt-0.5 shrink-0 text-[#7ecfff]" /><span className="min-w-0 break-words"><span className="font-medium text-[#e6fbff]">Lớp:</span> {profile.className}</span></li>
                      <li className="flex items-start gap-2"><FaPhone className="mt-0.5 shrink-0 text-[#7ecfff]" /><span className="min-w-0 break-words"><span className="font-medium text-[#e6fbff]">Liên hệ:</span> {profile.contactPhone}</span></li>
                    </ul>
                  </div>

                  <div className="flex">
                    <a
                      href={profile.eventMapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-xl border border-[#4fb0ff]/20 bg-[#072033] px-5 py-3 text-sm font-semibold text-[#9fd6ff] transition hover:bg-[#0a3152] sm:w-auto"
                    >
                      Mở chỉ đường
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="rounded-xl border border-[#4fb0ff]/12 bg-[#031324]/70 p-4 sm:p-6">
                    <p className="text-sm font-medium text-[#9fcdfb]">Thời gian</p>
                    <div className="mt-3">
                      <div className="schedule-row">
                        <div className="schedule-icon"><FaClock /></div>
                        <div className="min-w-0">
                          <div className="schedule-sub">DATE (NGÀY)</div>
                          <div className="schedule-meta break-words">{profile.eventDate} • {profile.eventTime}</div>
                        </div>
                      </div>
                      <div className="schedule-row">
                        <div className="schedule-icon"><FaMapMarkerAlt /></div>
                        <div className="min-w-0">
                          <div className="schedule-sub">LOCATION (ĐỊA ĐIỂM)</div>
                          <div className="schedule-meta break-words">{profile.eventVenue}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="countdown-panel">
                    <div className="countdown-title">T-MINUS EVENT EXECUTION</div>
                    <div className="countdown-grid">
                      {countdown.map((item) => (
                        <div key={item.label} className="countdown-cell">
                          <div className="countdown-value">{item.value}</div>
                          <div className="countdown-label">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm text-[#bcdff5] break-words">{profile.eventNote}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="h-2 rounded-full bg-[#4fb0ff]/22 shadow-[0_0_18px_rgba(79,176,255,0.2)]" />
      </Container>
    </section>
  )
}