const NAV_LINKS = ['Projects', 'Blog', 'About', 'Resume']

// Text wordmarks styled to evoke each brand — swap for SVG logos if you have licensed assets.
const BRANDS = [
  { name: 'GUCCI', className: 'font-serif tracking-[0.35em] text-xl md:text-2xl' },
  { name: 'ZARA', className: 'font-serif tracking-[0.2em] text-2xl md:text-3xl' },
  { name: 'VOGUE', className: 'font-serif italic tracking-[0.15em] text-2xl md:text-3xl' },
  { name: 'SONY', className: 'font-inter font-bold tracking-[0.25em] text-xl md:text-2xl' },
  { name: 'ZALORA', className: 'font-inter font-semibold tracking-[0.3em] text-lg md:text-xl' },
]

const PORTRAIT =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80'

function ArrowIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Navbar() {
  return (
    <nav className="absolute inset-x-0 top-0 z-40 flex items-center justify-between bg-transparent px-5 py-6 md:px-12">
      <a href="#" className="font-inter text-sm font-semibold uppercase tracking-[0.25em] md:text-base">
        ✱ Viktoroddy
      </a>

      <ul className="hidden items-center gap-10 md:flex">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="font-inter text-xs font-medium uppercase tracking-[0.25em] transition-opacity hover:opacity-80"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="group flex items-center gap-3">
        <span className="hidden font-inter text-xs font-medium uppercase tracking-[0.25em] sm:inline">// Hire me</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white transition-colors duration-300 group-hover:bg-white md:h-12 md:w-12">
          <ArrowIcon className="h-4 w-4 text-white transition-colors duration-300 group-hover:text-[#fd2601] md:h-5 md:w-5" />
        </span>
      </a>
    </nav>
  )
}

function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Giant faint name */}
      <svg
        className="absolute left-1/2 top-1/2 w-[140%] -translate-x-1/2 -translate-y-1/2 md:w-full"
        viewBox="0 0 1000 260"
        style={{ opacity: 0.08, filter: 'blur(4px)' }}
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#fff"
          fontFamily="Anton, Impact, sans-serif"
          fontSize="250"
          letterSpacing="20"
        >
          OLIVIA
        </text>
      </svg>

      {/* Glow blobs */}
      <div className="absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full bg-[#F4791B] opacity-60 mix-blend-screen blur-[80px]" />
      <div className="absolute -bottom-24 -left-24 h-[300px] w-[600px] max-w-[120vw] rounded-full bg-[#F4791B] opacity-60 mix-blend-screen blur-[80px]" />
    </div>
  )
}

function IntroText({ className = '' }) {
  return (
    <div className={`max-w-xs font-inter uppercase ${className}`}>
      <p className="mb-3 text-xs font-semibold tracking-[0.25em]">// I'm Olivia —</p>
      <p className="pl-6 text-xs leading-relaxed tracking-[0.15em] opacity-90">
        a freelance UI/UX designer crafting bold, human-centred digital experiences for brands that want to be
        remembered.
      </p>
    </div>
  )
}

function Tagline({ className = '' }) {
  return (
    <p className={`font-inter text-sm font-semibold uppercase leading-relaxed tracking-[0.25em] md:text-base ${className}`}>
      // Design that
      <br />
      speaks your brand
    </p>
  )
}

function BrandStrip() {
  return (
    <div className="relative z-30 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 px-5 pb-10 opacity-90 md:justify-between md:px-12">
      {BRANDS.map((b) => (
        <span key={b.name} className={`select-none text-white ${b.className}`}>
          {b.name}
        </span>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gradient-to-b from-[#fd2601] to-[#f37e1c] text-white">
      <AmbientBackground />
      <Navbar />

      {/* Main stage */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-5 pt-28 md:px-12 md:pt-24">
        <div className="relative flex w-full items-center justify-center">
          {/* Headline */}
          <h1 className="relative z-10 text-center font-anton uppercase leading-[0.9] tracking-wide">
            <span className="flex flex-col text-[24vw] md:hidden">
              <span>New</span>
              <span>Design</span>
              <span>Era</span>
            </span>
            <span className="hidden whitespace-nowrap md:block md:text-[min(12vw,180px)]">New Design Era</span>
          </h1>

          {/* Portrait with brush-stroke mask */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-[62vw] max-w-[380px] -translate-x-1/2 -translate-y-1/2 select-none md:w-[28vw]">
            <img
              src={PORTRAIT}
              alt="Portrait of Olivia"
              className="brush-mask aspect-[4/5] w-full object-cover drop-shadow-2xl"
              draggable="false"
            />
          </div>
        </div>

        {/* Floating elements — absolute on desktop, stacked on mobile */}
        <IntroText className="mt-12 md:absolute md:bottom-10 md:left-12 md:mt-0" />
        <Tagline className="mt-8 self-end text-right md:absolute md:right-12 md:top-[26%] md:mt-0" />
      </div>

      <div className="relative z-30 mt-12 md:mt-6">
        <BrandStrip />
      </div>
    </section>
  )
}
