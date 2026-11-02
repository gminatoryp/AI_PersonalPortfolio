'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Hls from 'hls.js'
import Navbar from './Navbar'

const VIDEO_SRC = 'https://stream.mux.com/Gs3wZfrtz6ZfqZqQ02c02Z7lugV00FGZvRpcqFTel66r3g.m3u8'
const POSTER = 'https://image.mux.com/Gs3wZfrtz6ZfqZqQ02c02Z7lugV00FGZvRpcqFTel66r3g/thumbnail.avif'
const ROLES = ['Creative', 'Fullstack', 'Founder', 'Scholar']

const btn =
  'gradient-ring inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm transition-transform duration-300 hover:scale-105'

function BackgroundVideo() {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    // Safari plays HLS natively; other browsers need hls.js.
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = VIDEO_SRC
      return
    }
    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(VIDEO_SRC)
      hls.attachMedia(video)
      return () => hls.destroy()
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        ref={ref}
        autoPlay
        muted
        loop
        playsInline
        poster={POSTER}
        className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />
    </div>
  )
}

export default function Hero() {
  const root = useRef<HTMLElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo('.name-reveal', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2 }, 0.1)
      tl.fromTo(
        '.blur-in',
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1 },
        0.3,
      )
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      <Navbar />
      <BackgroundVideo />

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="blur-in mb-8 text-xs uppercase tracking-[0.3em] text-muted opacity-0">Collection &apos;26</p>

        <h1 className="name-reveal mb-6 font-display text-6xl italic leading-[0.9] tracking-tight text-text opacity-0 md:text-8xl lg:text-9xl">
          Michael Smith
        </h1>

        <p className="blur-in mb-10 text-lg text-muted opacity-0 md:text-xl lg:text-2xl">
          A{' '}
          <span key={ROLES[roleIndex]} className="inline-block animate-fade-in font-display italic text-text">
            {ROLES[roleIndex]}
          </span>{' '}
          lives in Chicago.
        </p>

        <p className="blur-in mb-12 max-w-md text-sm leading-relaxed text-muted opacity-0 md:text-base">
          Designing seamless digital interactions by focusing on the unique nuances which bring systems to life.
        </p>

        <div className="blur-in flex flex-wrap items-center justify-center gap-4 opacity-0">
          <a href="#work" className={`${btn} bg-text text-bg`}>
            See Works
          </a>
          <a href="mailto:hello@example.com" className={`${btn} border-2 border-stroke bg-bg text-text`}>
            Reach out...
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">Scroll</span>
        <span className="relative h-10 w-px bg-stroke">
          <span className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 animate-scroll-dot rounded-full bg-text" />
        </span>
      </div>
    </section>
  )
}
