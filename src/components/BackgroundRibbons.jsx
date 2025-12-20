import React, { useId, useMemo } from 'react';

const BackgroundRibbons = ({ className = '', variant = 'default' }) => {
  const uid = useId();

  // Generate random values for each ribbon (seeded by uid for consistency per instance)
  const randomValues = useMemo(() => {
    const seed = uid.charCodeAt(0) + (uid.charCodeAt(1) || 0);
    const rand = (min, max) => min + ((seed * 9301 + 49297) % 233280) / 233280 * (max - min);
    return {
      a: {
        left: Math.floor(rand(-20, 10)),
        top: Math.floor(rand(20, 60)),
        width: Math.floor(rand(100, 140)),
        rotate: Math.floor(rand(-8, 8)),
        opacity: rand(0.2, 0.4),
      },
      b: {
        right: Math.floor(rand(-30, 0)),
        top: Math.floor(rand(10, 40)),
        width: Math.floor(rand(90, 130)),
        rotate: Math.floor(rand(-10, 10)),
        opacity: rand(0.15, 0.3),
      },
      c: {
        left: Math.floor(rand(20, 50)),
        bottom: Math.floor(rand(-20, 10)),
        width: Math.floor(rand(80, 120)),
        rotate: Math.floor(rand(-12, 12)),
        opacity: rand(0.1, 0.25),
      },
    };
  }, [uid]);

  const baseVariants = {
    default: { opacityMult: 0.7, blur: 0.5 },
    subtle: { opacityMult: 0.5, blur: 1 },
    hero: { opacityMult: 1, blur: 0.5 },
    section: { opacityMult: 0.6, blur: 1 },
  };

  const v = baseVariants[variant] ?? baseVariants.default;

  const gradientA = `${uid}-ryvieRibbonA`;
  const glowA = `${uid}-ryvieGlowA`;
  const gradientB = `${uid}-ryvieRibbonB`;
  const glowB = `${uid}-ryvieGlowB`;
  const gradientC = `${uid}-ryvieRibbonC`;
  const glowC = `${uid}-ryvieGlowC`;

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg 
        className="hero-ribbon absolute max-w-none"
        style={{
          left: `${randomValues.a.left}%`,
          top: `${randomValues.a.top}%`,
          width: `${randomValues.a.width}%`,
          transform: `rotate(${randomValues.a.rotate}deg)`,
          opacity: randomValues.a.opacity * v.opacityMult,
          filter: `blur(${v.blur}px)`,
        }}
        viewBox="0 0 1200 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientA} x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1B6CFF" stopOpacity="0" />
            <stop offset="0.22" stopColor="#1B6CFF" stopOpacity="0.75" />
            <stop offset="0.55" stopColor="#00D4FF" stopOpacity="0.7" />
            <stop offset="1" stopColor="#00D4FF" stopOpacity="0" />
          </linearGradient>
          <filter id={glowA} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M-50 380 C 120 270, 220 450, 420 360 C 620 270, 700 120, 900 170 C 1080 215, 1110 320, 1260 240"
          stroke={`url(#${gradientA})`}
          strokeWidth="90"
          strokeLinecap="round"
          filter={`url(#${glowA})`}
        />
        <path
          d="M-60 420 C 140 320, 260 520, 460 410 C 660 300, 760 160, 960 210 C 1120 250, 1160 350, 1280 270"
          stroke={`url(#${gradientA})`}
          strokeWidth="34"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>

      <svg 
        className="hero-ribbon-2 absolute max-w-none"
        style={{
          right: `${randomValues.b.right}%`,
          top: `${randomValues.b.top}%`,
          width: `${randomValues.b.width}%`,
          transform: `rotate(${randomValues.b.rotate}deg)`,
          opacity: randomValues.b.opacity * v.opacityMult,
          filter: `blur(${v.blur}px)`,
        }}
        viewBox="0 0 1200 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientB} x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00D4FF" stopOpacity="0" />
            <stop offset="0.25" stopColor="#00D4FF" stopOpacity="0.6" />
            <stop offset="0.6" stopColor="#1B6CFF" stopOpacity="0.55" />
            <stop offset="1" stopColor="#1B6CFF" stopOpacity="0" />
          </linearGradient>
          <filter id={glowB} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M-80 190 C 140 80, 260 280, 470 210 C 680 140, 760 20, 980 60 C 1110 86, 1180 160, 1320 120"
          stroke={`url(#${gradientB})`}
          strokeWidth="70"
          strokeLinecap="round"
          filter={`url(#${glowB})`}
        />
      </svg>

      <svg 
        className="hero-ribbon absolute max-w-none"
        style={{
          left: `${randomValues.c.left}%`,
          bottom: `${randomValues.c.bottom}%`,
          width: `${randomValues.c.width}%`,
          transform: `rotate(${randomValues.c.rotate}deg)`,
          opacity: randomValues.c.opacity * v.opacityMult,
          filter: `blur(${v.blur * 1.5}px)`,
        }}
        viewBox="0 0 1200 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientC} x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00D4FF" stopOpacity="0" />
            <stop offset="0.25" stopColor="#00D4FF" stopOpacity="0.55" />
            <stop offset="0.6" stopColor="#1B6CFF" stopOpacity="0.55" />
            <stop offset="1" stopColor="#1B6CFF" stopOpacity="0" />
          </linearGradient>
          <filter id={glowC} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M-60 470 C 180 350, 260 520, 520 440 C 740 370, 820 260, 1010 290 C 1160 315, 1200 380, 1320 340"
          stroke={`url(#${gradientC})`}
          strokeWidth="60"
          strokeLinecap="round"
          filter={`url(#${glowC})`}
          opacity="0.9"
        />
      </svg>
    </div>
  );
};

export default BackgroundRibbons;
