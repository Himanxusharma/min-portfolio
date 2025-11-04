export default function MobileBackdrop() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Mobile layer */}
      <div className="absolute inset-0 md:hidden">
        <div className="absolute -top-32 -left-40 w-[75vw] h-[75vw] rounded-full bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.45),_rgba(139,92,246,0))] blur-3xl mobile-glow" />
        <div className="absolute bottom-[-25vw] -right-40 w-[85vw] h-[85vw] rounded-full bg-[radial-gradient(circle_at_center,_rgba(244,114,182,0.4),_rgba(244,114,182,0))] blur-3xl mobile-glow-delay" />
        <div className="absolute inset-x-[-20%] top-1/3 h-32 bg-[linear-gradient(120deg,_rgba(253,230,138,0.45)_0%,_rgba(252,211,77,0.25)_45%,_rgba(96,165,250,0.15)_80%,_rgba(59,130,246,0)_100%)] opacity-90 mobile-sweep" />
        <div className="absolute left-1/2 top-[68%] w-40 h-40 -translate-x-1/2 rounded-full border border-white/10 bg-white/5 dark:bg-white/5 dark:border-white/5 mobile-pulse backdrop-blur-md shadow-[0_0_60px_rgba(255,255,255,0.12)]" />
      </div>

      {/* Desktop / Tablet layer */}
      <div className="hidden md:block absolute inset-0">
        <div className="absolute -top-48 -left-40 w-[38vw] h-[38vw] rounded-full bg-[radial-gradient(circle_at_center,_rgba(129,140,248,0.35),_rgba(129,140,248,0))] blur-[120px] ambient-desktop-glow" />
        <div className="absolute top-1/3 right-[-12vw] w-[45vw] h-[45vw] rounded-full bg-[radial-gradient(circle_at_center,_rgba(244,114,182,0.28),_rgba(244,114,182,0))] blur-[140px] ambient-desktop-glow-delay" />
        <div className="absolute inset-x-[-10%] bottom-[22%] h-48 bg-[linear-gradient(110deg,_rgba(253,230,138,0.25)_0%,_rgba(250,204,21,0.2)_35%,_rgba(125,211,252,0.18)_70%,_rgba(59,130,246,0)_100%)] mix-blend-screen ambient-desktop-sweep" />
        <div className="absolute left-[55%] top-[18%] w-60 h-60 rounded-full border border-white/20 bg-white/[0.04] dark:bg-white/[0.04] dark:border-white/10 ambient-desktop-halo backdrop-blur-md" />
      </div>

      {/* Wave layers */}
      <div className="ambient-wave-container ambient-wave-top">
        <svg
          className="ambient-wave"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path d="M0,64L60,80C120,96,240,128,360,160C480,192,600,224,720,197.3C840,171,960,85,1080,74.7C1200,64,1320,128,1380,160L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
        </svg>
        <svg
          className="ambient-wave ambient-wave-delay"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path d="M0,128L80,144C160,160,320,192,480,208C640,224,800,224,960,197.3C1120,171,1280,117,1360,90.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
        </svg>
      </div>

      <div className="ambient-wave-container ambient-wave-bottom">
        <svg
          className="ambient-wave"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path d="M0,160L60,160C120,160,240,160,360,149.3C480,139,600,117,720,112C840,107,960,117,1080,106.7C1200,96,1320,64,1380,48L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
        <svg
          className="ambient-wave ambient-wave-delay"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path d="M0,192L80,208C160,224,320,256,480,240C640,224,800,160,960,133.3C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
        </svg>
      </div>
    </div>
  )
}

