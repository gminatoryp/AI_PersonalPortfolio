'use client'

import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Work', href: '#work' },
  { label: 'Resume', href: '#resume' },
]

const Divider = () => <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" aria-hidden="true" />

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const active = 'Home'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const pill = 'rounded-full px-3 py-1.5 text-xs transition-colors sm:px-4 sm:py-2 sm:text-sm'

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center pt-4 md:pt-6">
      <nav
        className={`inline-flex items-center rounded-full border border-white/10 bg-surface px-2 py-2 backdrop-blur-md transition-shadow ${
          scrolled ? 'shadow-md shadow-black/10' : ''
        }`}
      >
        <a
          href="#"
          aria-label="Home"
          className="group mr-1 block h-9 w-9 shrink-0 rounded-full p-[2px] [background:var(--accent-gradient)] hover:[background:var(--accent-gradient-rev)]"
        >
          <span className="flex h-full w-full items-center justify-center rounded-full bg-bg">
            <span className="font-display text-[13px] italic tracking-tighter transition-transform duration-300 group-hover:scale-110">
              JA
            </span>
          </span>
        </a>

        <Divider />

        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className={`${pill} ${l.label === active ? 'bg-stroke/50 text-text' : 'text-muted hover:bg-stroke/50 hover:text-text'}`}
          >
            {l.label}
          </a>
        ))}

        <Divider />

        <a href="mailto:hello@example.com" className={`${pill} gradient-ring text-muted hover:bg-stroke/50 hover:text-text`}>
          Say hi ↗
        </a>

        <Divider />
      </nav>
    </header>
  )
}
