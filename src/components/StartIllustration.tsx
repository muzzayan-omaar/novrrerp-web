/** Workspace / getting-started scene for /start */
export function StartIllustration() {
  return (
    <svg
      viewBox="0 0 480 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto h-auto w-full max-w-md"
      aria-hidden
    >
      <defs>
        <linearGradient id="si-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="55%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
        <filter id="si-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#0F1B33" floodOpacity="0.08" />
        </filter>
      </defs>

      <ellipse cx="240" cy="248" rx="160" ry="12" fill="#E2E8F0" opacity="0.5" />

      <g filter="url(#si-shadow)">
        <rect x="200" y="36" width="200" height="150" rx="14" fill="white" stroke="#E2E8F0" />
        <rect x="200" y="36" width="200" height="28" rx="14" fill="#F1F5F9" />
        <rect x="200" y="50" width="200" height="14" fill="#F1F5F9" />
        <circle cx="216" cy="50" r="4" fill="#CBD5E1" />
        <circle cx="230" cy="50" r="4" fill="#CBD5E1" />
        <circle cx="244" cy="50" r="4" fill="#CBD5E1" />
        <rect x="224" y="120" width="18" height="44" rx="3" fill="#E2E8F0" />
        <rect x="250" y="100" width="18" height="64" rx="3" fill="url(#si-g)" opacity="0.7" />
        <rect x="276" y="110" width="18" height="54" rx="3" fill="#BFDBFE" />
        <rect x="302" y="90" width="18" height="74" rx="3" fill="url(#si-g)" />
        <rect x="328" y="130" width="18" height="34" rx="3" fill="#E2E8F0" />
        <path
          d="M224 88 C240 80, 256 96, 272 78 S304 70, 340 82"
          stroke="url(#si-g)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      <g filter="url(#si-shadow)">
        <rect x="72" y="72" width="168" height="130" rx="14" fill="white" stroke="#E2E8F0" />
        <rect x="84" y="86" width="144" height="72" rx="8" fill="#0F1B33" />
        <rect x="96" y="100" width="48" height="6" rx="2" fill="#22D3EE" opacity="0.85" />
        <rect x="96" y="114" width="90" height="5" rx="2" fill="#334155" />
        <rect x="96" y="126" width="70" height="5" rx="2" fill="#334155" />
        <rect x="96" y="138" width="56" height="5" rx="2" fill="#475569" />
        <rect x="84" y="168" width="40" height="20" rx="5" fill="url(#si-g)" />
        <rect x="130" y="168" width="40" height="20" rx="5" fill="#E2E8F0" />
        <rect x="176" y="168" width="40" height="20" rx="5" fill="#E2E8F0" />
      </g>

      <g>
        <circle cx="380" cy="200" r="28" fill="url(#si-g)" opacity="0.15" />
        <circle cx="380" cy="200" r="18" fill="url(#si-g)" />
        <path
          d="M372 200 l5 5 11 -12"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      <g filter="url(#si-shadow)">
        <rect x="56" y="48" width="88" height="32" rx="10" fill="white" stroke="#E2E8F0" />
        <circle cx="74" cy="64" r="6" fill="url(#si-g)" opacity="0.25" />
        <circle cx="74" cy="64" r="3" fill="url(#si-g)" />
        <text
          x="88"
          y="68"
          fill="#64748B"
          fontSize="10"
          fontFamily="system-ui,sans-serif"
          fontWeight="600"
        >
          Store live
        </text>
      </g>
    </svg>
  );
}