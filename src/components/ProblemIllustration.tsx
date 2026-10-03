/** Custom scene: scattered tools & out-of-sync branches — not a stock illustration */
export function ProblemIllustration() {
  return (
    <svg
      viewBox="0 0 720 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto h-auto w-full max-w-3xl"
      aria-hidden
    >
      <defs>
        <linearGradient id="pi-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="55%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
        <linearGradient id="pi-soft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#EEF2F7" />
        </linearGradient>
        <filter id="pi-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0F1B33" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* faint grid */}
      <g stroke="#E2E8F0" strokeWidth="1" opacity="0.6">
        {[40, 80, 120, 160, 200, 240, 280].map((y) => (
          <line key={`h${y}`} x1="24" y1={y} x2="696" y2={y} />
        ))}
      </g>

      {/* tangled connector paths */}
      <path
        d="M120 90 C180 40, 260 200, 360 140 S520 60, 600 110"
        stroke="url(#pi-blue)"
        strokeWidth="1.5"
        strokeDasharray="5 6"
        opacity="0.35"
      />
      <path
        d="M140 200 C220 240, 300 80, 400 180 S560 250, 620 190"
        stroke="#94A3B8"
        strokeWidth="1.25"
        strokeDasharray="4 5"
        opacity="0.45"
      />

      {/* Spreadsheet tile */}
      <g filter="url(#pi-shadow)">
        <rect x="48" y="48" width="132" height="100" rx="14" fill="white" stroke="#E2E8F0" />
        <rect x="48" y="48" width="132" height="28" rx="14" fill="#F1F5F9" />
        <rect x="48" y="62" width="132" height="14" fill="#F1F5F9" />
        <text x="64" y="68" fill="#64748B" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600">
          Stock.xlsx
        </text>
        {[0, 1, 2].map((r) => (
          <g key={r}>
            <rect x="60" y={88 + r * 16} width="48" height="8" rx="2" fill="#E2E8F0" />
            <rect x="116" y={88 + r * 16} width="48" height="8" rx="2" fill={r === 1 ? "#FECACA" : "#E2E8F0"} />
          </g>
        ))}
      </g>

      {/* WhatsApp-style chat tile */}
      <g filter="url(#pi-shadow)">
        <rect x="200" y="36" width="128" height="112" rx="14" fill="white" stroke="#E2E8F0" />
        <circle cx="228" cy="62" r="12" fill="#DCFCE7" />
        <rect x="248" y="54" width="60" height="8" rx="2" fill="#E2E8F0" />
        <rect x="216" y="84" width="88" height="22" rx="10" fill="#F0FDF4" />
        <text x="226" y="99" fill="#166534" fontSize="9" fontFamily="system-ui,sans-serif">
          Branch B out of…
        </text>
        <rect x="228" y="114" width="72" height="18" rx="9" fill="#F1F5F9" />
      </g>

      {/* POS terminal */}
      <g filter="url(#pi-shadow)">
        <rect x="360" y="56" width="140" height="108" rx="14" fill="white" stroke="#E2E8F0" />
        <rect x="372" y="68" width="116" height="56" rx="8" fill="#0F1B33" />
        <rect x="384" y="80" width="40" height="6" rx="2" fill="#22D3EE" opacity="0.8" />
        <rect x="384" y="92" width="70" height="6" rx="2" fill="#334155" />
        <rect x="384" y="104" width="54" height="6" rx="2" fill="#334155" />
        <rect x="372" y="132" width="36" height="18" rx="4" fill="#2563EB" />
        <rect x="414" y="132" width="36" height="18" rx="4" fill="#E2E8F0" />
        <rect x="456" y="132" width="28" height="18" rx="4" fill="#E2E8F0" />
      </g>

      {/* Paper / fiscal pile */}
      <g filter="url(#pi-shadow)">
        <rect x="540" y="44" width="100" height="120" rx="10" fill="white" stroke="#E2E8F0" transform="rotate(6 590 104)" />
        <rect x="528" y="52" width="100" height="120" rx="10" fill="white" stroke="#E2E8F0" />
        <rect x="544" y="72" width="68" height="6" rx="2" fill="#E2E8F0" />
        <rect x="544" y="86" width="52" height="6" rx="2" fill="#E2E8F0" />
        <rect x="544" y="100" width="60" height="6" rx="2" fill="#FECACA" />
        <text x="544" y="128" fill="#94A3B8" fontSize="9" fontFamily="system-ui,sans-serif">
          Receipt #??
        </text>
      </g>

      {/* Branch status row */}
      <g>
        {[
          { x: 80, label: "Branch A", stock: "142", ok: true },
          { x: 280, label: "Branch B", stock: "0", ok: false },
          { x: 480, label: "Branch C", stock: "?", ok: false },
        ].map((b) => (
          <g key={b.label}>
            <rect
              x={b.x}
              y="220"
              width="150"
              height="64"
              rx="14"
              fill="white"
              stroke={b.ok ? "#BBF7D0" : "#FECACA"}
              filter="url(#pi-shadow)"
            />
            <text
              x={b.x + 16}
              y="244"
              fill="#64748B"
              fontSize="11"
              fontFamily="system-ui,sans-serif"
              fontWeight="600"
            >
              {b.label}
            </text>
            <text
              x={b.x + 16}
              y="266"
              fill={b.ok ? "#059669" : "#DC2626"}
              fontSize="16"
              fontFamily="system-ui,sans-serif"
              fontWeight="700"
            >
              {b.stock}
              <tspan fill="#94A3B8" fontSize="11" fontWeight="500">
                {" "}
                units
              </tspan>
            </text>
          </g>
        ))}
      </g>

      {/* warning node center */}
      <g>
        <circle cx="360" cy="175" r="18" fill="url(#pi-blue)" opacity="0.15" />
        <circle cx="360" cy="175" r="10" fill="url(#pi-blue)" />
        <text
          x="360"
          y="179"
          textAnchor="middle"
          fill="white"
          fontSize="12"
          fontFamily="system-ui,sans-serif"
          fontWeight="700"
        >
          !
        </text>
      </g>
    </svg>
  );
}
