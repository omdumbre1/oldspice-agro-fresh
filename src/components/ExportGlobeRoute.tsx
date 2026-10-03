'use client';

import { motion } from 'framer-motion';

export default function ExportGlobeRoute() {
  return (
    <div className="relative w-full max-w-lg aspect-square mx-auto flex items-center justify-center">
      {/* Outer ambient glow circles */}
      <div className="absolute w-[90%] h-[90%] rounded-full border border-brand-green/20 bg-gradient-to-tr from-brand-forest/10 via-brand-green/5 to-transparent pointer-events-none" />
      <div className="absolute w-[70%] h-[70%] rounded-full border border-dashed border-brand-green/30 animate-[spin_80s_linear_infinite]" />

      <svg
        viewBox="0 0 500 500"
        className="w-full h-full relative z-10 drop-shadow-[0_10px_25px_rgba(30,205,86,0.15)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1ecd56" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.9" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Subtle grid lines for nautical/export map feel */}
        <circle cx="250" cy="250" r="160" stroke="#1ecd56" strokeOpacity="0.15" strokeWidth="1" />
        <circle cx="250" cy="250" r="110" stroke="#1ecd56" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="90" y1="250" x2="410" y2="250" stroke="#1ecd56" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="250" y1="90" x2="250" y2="410" stroke="#1ecd56" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 4" />

        {/* Origin: Otur / Maharashtra, India (coordinates ~ (300, 270)) */}
        <g id="origin-marker">
          <circle cx="300" cy="270" r="12" fill="#1ecd56" fillOpacity="0.2" className="animate-ping origin-center" />
          <circle cx="300" cy="270" r="6" fill="#1ecd56" filter="url(#glow)" />
          <circle cx="300" cy="270" r="2.5" fill="#ffffff" />
          
          <rect x="250" y="286" width="100" height="22" rx="4" fill="#0f381e" fillOpacity="0.9" stroke="#1ecd56" strokeWidth="1" />
          <text x="300" y="301" fill="#ffffff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
            📍 Maharashtra (Otur)
          </text>
        </g>

        {/* Destination 1: Dubai, UAE (Coordinates ~ (200, 240)) */}
        <motion.path
          d="M300 270 Q 250 220 200 240"
          stroke="url(#routeGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
        />
        <g id="dest-dubai">
          <circle cx="200" cy="240" r="4.5" fill="#f59e0b" filter="url(#glow)" />
          <rect x="150" y="210" width="76" height="20" rx="4" fill="#ffffff" stroke="#f59e0b" strokeWidth="1" />
          <text x="188" y="224" fill="#0f381e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
            🇦🇪 Dubai (4d)
          </text>
        </g>

        {/* Destination 2: Rotterdam / Europe (Coordinates ~ (140, 150)) */}
        <motion.path
          d="M300 270 Q 210 160 140 150"
          stroke="url(#routeGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 1, ease: "easeInOut", delay: 0.4 }}
        />
        <g id="dest-rotterdam">
          <circle cx="140" cy="150" r="4.5" fill="#f59e0b" filter="url(#glow)" />
          <rect x="85" y="120" width="94" height="20" rx="4" fill="#ffffff" stroke="#f59e0b" strokeWidth="1" />
          <text x="132" y="134" fill="#0f381e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
            🇳🇱 Rotterdam (18d)
          </text>
        </g>

        {/* Destination 3: London, UK (Coordinates ~ (120, 190)) */}
        <motion.path
          d="M300 270 Q 190 200 120 190"
          stroke="url(#routeGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 1, ease: "easeInOut", delay: 0.8 }}
        />
        <g id="dest-london">
          <circle cx="120" cy="190" r="4.5" fill="#f59e0b" filter="url(#glow)" />
          <rect x="70" y="160" width="85" height="20" rx="4" fill="#ffffff" stroke="#f59e0b" strokeWidth="1" />
          <text x="112" y="174" fill="#0f381e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
            🇬🇧 London (20d)
          </text>
        </g>

        {/* Destination 4: Singapore (Coordinates ~ (400, 310)) */}
        <motion.path
          d="M300 270 Q 360 270 400 310"
          stroke="url(#routeGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1, ease: "easeInOut", delay: 1.2 }}
        />
        <g id="dest-singapore">
          <circle cx="400" cy="310" r="4.5" fill="#f59e0b" filter="url(#glow)" />
          <rect x="360" y="325" width="85" height="20" rx="4" fill="#ffffff" stroke="#f59e0b" strokeWidth="1" />
          <text x="402" y="339" fill="#0f381e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
            🇸🇬 Singapore (7d)
          </text>
        </g>
      </svg>
    </div>
  );
}
