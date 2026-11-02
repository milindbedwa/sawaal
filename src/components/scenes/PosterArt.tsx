import type { PosterScene } from "@/content/types";

/** Simple product illustrations for adverts. */
export function PosterArt({ art, color }: { art: PosterScene["art"]; color: string }) {
  const ink = "#17191C";
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
      {art === "bracelet" && (
        <>
          <circle cx="50" cy="50" r="30" fill="none" stroke={color} strokeWidth="10" />
          <circle cx="50" cy="20" r="6" fill={ink} />
          <path d="M44 20h12M50 14v12" stroke="#fff" strokeWidth="1.5" />
          <circle cx="78" cy="60" r="4" fill={ink} />
          <circle cx="24" cy="66" r="4" fill={ink} />
        </>
      )}
      {(art === "bottle" || art === "tonic") && (
        <>
          <rect x="42" y="8" width="16" height="12" rx="2" fill={ink} />
          <path d="M36 22h28v10l6 10v44a6 6 0 0 1-6 6H36a6 6 0 0 1-6-6V42l6-10Z" fill={color} />
          <rect x="34" y="50" width="32" height="24" rx="2" fill="#fff" />
          <path d="M38 58h24M38 64h18" stroke={ink} strokeWidth="2" />
        </>
      )}
      {art === "ring" && (
        <>
          <circle cx="50" cy="60" r="22" fill="none" stroke={color} strokeWidth="8" />
          <path d="M50 14l12 14-12 14-12-14Z" fill={ink} />
        </>
      )}
      {art === "pendant" && (
        <>
          <path d="M20 10c10 30 20 40 30 50 10-10 20-20 30-50" fill="none" stroke={ink} strokeWidth="3" />
          <circle cx="50" cy="70" r="14" fill={color} />
          <circle cx="50" cy="70" r="5" fill="#fff" />
        </>
      )}
      {art === "pills" && (
        <>
          <rect x="18" y="40" width="64" height="24" rx="12" fill={color} transform="rotate(-30 50 52)" />
          <path d="M50 35v34" stroke="#fff" strokeWidth="3" transform="rotate(-30 50 52)" />
          <circle cx="76" cy="76" r="10" fill={ink} />
        </>
      )}
      {art === "phone" && (
        <>
          <rect x="30" y="8" width="40" height="84" rx="8" fill={ink} />
          <rect x="34" y="16" width="32" height="64" rx="3" fill={color} />
        </>
      )}
      {art === "coin" && (
        <>
          <circle cx="50" cy="50" r="34" fill={color} />
          <circle cx="50" cy="50" r="26" fill="none" stroke="#fff" strokeWidth="3" />
          <text x="50" y="62" fontSize="34" textAnchor="middle" fontWeight="900" fill={ink}>
            ₹
          </text>
        </>
      )}
    </svg>
  );
}
