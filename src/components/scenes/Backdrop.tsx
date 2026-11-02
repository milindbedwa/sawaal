import type { StreetScene } from "@/content/types";

/**
 * Minimal editorial backdrops for street scenes.
 * Drawn in a 240 × 140 viewBox; figures stand on the ground line at y = 120.
 */
export function Backdrop({ setting }: { setting: StreetScene["setting"] }) {
  const ink = "#17191C";
  const line = "#D9D5CC";
  const paper2 = "#EBE8E0";
  return (
    <g>
      {/* ground */}
      <line x1="0" y1="120.5" x2="240" y2="120.5" stroke={ink} strokeWidth="1" />
      {setting === "teastall" && (
        <g>
          <rect x="130" y="70" width="104" height="50" fill={paper2} />
          <rect x="130" y="62" width="104" height="10" fill={ink} />
          <path d="M124 62h116l-8-18H132Z" fill="#F2A33A" />
          <rect x="140" y="52" width="12" height="10" rx="2" fill={ink} opacity=".15" />
          {/* kettle */}
          <path d="M160 60c0-6 4-10 10-10s10 4 10 10v8h-20Z" fill={ink} />
          <path d="M180 60h6l3 6h-9" fill="none" stroke={ink} strokeWidth="2" />
          {/* glasses: ordinary and 'the other' */}
          <rect x="196" y="56" width="6" height="12" rx="1.5" fill="none" stroke={ink} strokeWidth="1.6" />
          <rect x="204" y="56" width="6" height="12" rx="1.5" fill="none" stroke={ink} strokeWidth="1.6" />
          <rect x="212" y="56" width="6" height="12" rx="1.5" fill="none" stroke={ink} strokeWidth="1.6" />
          <rect x="224" y="56" width="6" height="12" rx="1.5" fill="#8B8F96" />
        </g>
      )}
      {setting === "office" && (
        <g>
          <rect x="120" y="20" width="120" height="100" fill={paper2} />
          <rect x="140" y="40" width="44" height="30" fill="#fff" stroke={ink} strokeWidth="1.5" />
          <line x1="140" y1="55" x2="184" y2="55" stroke={line} />
          <rect x="196" y="36" width="34" height="18" rx="2" fill="#fff" stroke={ink} strokeWidth="1.5" />
          <line x1="200" y1="42" x2="226" y2="42" stroke={ink} strokeWidth="1.2" />
          <line x1="200" y1="47" x2="220" y2="47" stroke={ink} strokeWidth="1.2" />
          <rect x="130" y="84" width="110" height="36" fill="#fff" stroke={ink} strokeWidth="1.5" />
          {/* steps */}
          <path d="M60 120v-8h20v-8h20v-8h20v24Z" fill="#fff" stroke={ink} strokeWidth="1.5" />
        </g>
      )}
      {setting === "busstop" && (
        <g>
          <rect x="40" y="60" width="150" height="4" fill={ink} />
          <rect x="44" y="64" width="4" height="56" fill={ink} />
          <rect x="182" y="64" width="4" height="56" fill={ink} />
          <rect x="60" y="92" width="110" height="5" rx="2" fill={ink} />
          {/* lamp post, unlit */}
          <rect x="214" y="30" width="3" height="90" fill={ink} />
          <path d="M215 30h-12v6h12" fill="none" stroke={ink} strokeWidth="3" />
          <circle cx="203" cy="39" r="4.5" fill={paper2} stroke={ink} strokeWidth="1.5" strokeDasharray="2 2" />
          <circle cx="40" cy="22" r="7" fill="none" stroke={ink} strokeWidth="1.5" />
        </g>
      )}
      {setting === "home" && (
        <g>
          <rect x="120" y="16" width="120" height="104" fill={paper2} />
          <rect x="150" y="44" width="48" height="76" rx="2" fill="#fff" stroke={ink} strokeWidth="1.5" />
          <circle cx="190" cy="84" r="2" fill={ink} />
          <rect x="140" y="20" width="22" height="18" fill="#fff" stroke={ink} strokeWidth="1.5" />
          <path d="M140 29h22M151 20v18" stroke={ink} strokeWidth="1.2" />
          <path d="M20 120v-14l8-8 8 8v14" fill="none" stroke={ink} strokeWidth="1.5" />
        </g>
      )}
      {setting === "school" && (
        <g>
          <rect x="118" y="28" width="116" height="60" rx="3" fill={ink} />
          <path d="M132 46h40M132 56h60M132 66h30" stroke="#F5F3EE" strokeWidth="2" strokeLinecap="round" opacity=".9" />
          <path d="M184 44l10 10m0-10-10 10" stroke="#F2A33A" strokeWidth="2.4" strokeLinecap="round" />
          <rect x="20" y="96" width="70" height="4" fill={ink} />
          <rect x="24" y="100" width="4" height="20" fill={ink} />
          <rect x="82" y="100" width="4" height="20" fill={ink} />
        </g>
      )}
      {setting === "well" && (
        <g>
          <rect x="150" y="80" width="70" height="40" rx="4" fill={paper2} stroke={ink} strokeWidth="1.5" />
          <path d="M150 80l35-28 35 28" fill="none" stroke={ink} strokeWidth="2" />
          <rect x="183" y="52" width="4" height="30" fill={ink} />
          <circle cx="185" cy="66" r="4" fill="none" stroke={ink} strokeWidth="1.5" />
        </g>
      )}
      {setting === "market" && (
        <g>
          <path d="M120 60h110l-8-18H128Z" fill="#E4536A" />
          <path d="M120 60h110l-8 10H128Z" fill="#B52E45" opacity=".6" />
          <rect x="128" y="86" width="96" height="34" fill={paper2} stroke={ink} strokeWidth="1.5" />
          <circle cx="150" cy="80" r="6" fill="#F2A33A" />
          <circle cx="165" cy="80" r="6" fill="#F2A33A" />
          <circle cx="180" cy="80" r="6" fill="#1FA97A" />
          <circle cx="195" cy="80" r="6" fill="#1FA97A" />
        </g>
      )}
      {setting === "clinic" && (
        <g>
          <rect x="130" y="26" width="104" height="94" fill="#fff" stroke={ink} strokeWidth="1.5" />
          <rect x="172" y="36" width="20" height="20" fill="#E4536A" />
          <path d="M182 40v12M176 46h12" stroke="#fff" strokeWidth="3" />
          <rect x="146" y="72" width="30" height="48" fill={paper2} stroke={ink} strokeWidth="1.2" />
        </g>
      )}
      {setting === "street" && (
        <g>
          <rect x="0" y="108" width="240" height="12" fill={paper2} />
          <path d="M20 114h30M70 114h30M120 114h30M170 114h30" stroke="#fff" strokeWidth="2" strokeDasharray="10 8" />
          <ellipse cx="150" cy="116" rx="18" ry="4" fill={ink} />
          <ellipse cx="60" cy="116" rx="10" ry="3" fill={ink} />
          <rect x="200" y="40" width="3" height="80" fill={ink} />
          <rect x="190" y="34" width="24" height="12" rx="2" fill="#F2A33A" />
        </g>
      )}
    </g>
  );
}
