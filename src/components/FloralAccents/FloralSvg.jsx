export function FloralCornerTL({ className = "", size = 120 }) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
    >
      <g opacity="0.55" fill="none" stroke="#7d936c" strokeWidth="1">
        {/* Stem */}
        <path d="M10,110 Q30,60 70,20" strokeWidth="1.5"/>
        {/* Leaves */}
        <path d="M30,80 Q10,60 25,45 Q45,65 30,80Z" fill="#7d936c" opacity="0.4"/>
        <path d="M50,55 Q35,35 50,22 Q65,40 50,55Z" fill="#7d936c" opacity="0.35"/>
        {/* Small flowers */}
        <circle cx="70" cy="20" r="5" fill="#aab992" opacity="0.7"/>
        <circle cx="70" cy="20" r="2" fill="#445c3f" opacity="0.9"/>
        <circle cx="55" cy="35" r="4" fill="#aab992" opacity="0.6"/>
        <circle cx="55" cy="35" r="1.5" fill="#445c3f" opacity="0.9"/>
        {/* Tiny buds */}
        <circle cx="40" cy="15" r="3" fill="#aab992" opacity="0.5"/>
        <circle cx="80" cy="35" r="2.5" fill="#7d936c" opacity="0.5"/>
        {/* Berries */}
        <circle cx="85" cy="15" r="3" fill="#aab992" opacity="0.6"/>
        <circle cx="92" cy="22" r="2" fill="#aab992" opacity="0.5"/>
        <circle cx="78" cy="10" r="2" fill="#aab992" opacity="0.5"/>
      </g>
    </svg>
  );
}

export function FloralCornerBR({ className = "", size = 120 }) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 120 120"
      className={className}
      style={{ transform: "rotate(180deg)" }}
      aria-hidden="true"
    >
      <g opacity="0.55" fill="none" stroke="#7d936c" strokeWidth="1">
        <path d="M10,110 Q30,60 70,20" strokeWidth="1.5"/>
        <path d="M30,80 Q10,60 25,45 Q45,65 30,80Z" fill="#7d936c" opacity="0.4"/>
        <path d="M50,55 Q35,35 50,22 Q65,40 50,55Z" fill="#7d936c" opacity="0.35"/>
        <circle cx="70" cy="20" r="5" fill="#aab992" opacity="0.7"/>
        <circle cx="70" cy="20" r="2" fill="#445c3f" opacity="0.9"/>
        <circle cx="55" cy="35" r="4" fill="#aab992" opacity="0.6"/>
        <circle cx="55" cy="35" r="1.5" fill="#445c3f" opacity="0.9"/>
        <circle cx="40" cy="15" r="3" fill="#aab992" opacity="0.5"/>
        <circle cx="80" cy="35" r="2.5" fill="#7d936c" opacity="0.5"/>
        <circle cx="85" cy="15" r="3" fill="#aab992" opacity="0.6"/>
        <circle cx="92" cy="22" r="2" fill="#aab992" opacity="0.5"/>
        <circle cx="78" cy="10" r="2" fill="#aab992" opacity="0.5"/>
      </g>
    </svg>
  );
}

export function FloralCornerTR({ className = "", size = 120 }) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 120 120"
      className={className}
      style={{ transform: "scaleX(-1)" }}
      aria-hidden="true"
    >
      <g opacity="0.55" fill="none" stroke="#7d936c" strokeWidth="1">
        <path d="M10,110 Q30,60 70,20" strokeWidth="1.5"/>
        <path d="M30,80 Q10,60 25,45 Q45,65 30,80Z" fill="#7d936c" opacity="0.4"/>
        <path d="M50,55 Q35,35 50,22 Q65,40 50,55Z" fill="#7d936c" opacity="0.35"/>
        <circle cx="70" cy="20" r="5" fill="#aab992" opacity="0.7"/>
        <circle cx="70" cy="20" r="2" fill="#445c3f" opacity="0.9"/>
        <circle cx="55" cy="35" r="4" fill="#aab992" opacity="0.6"/>
        <circle cx="55" cy="35" r="1.5" fill="#445c3f" opacity="0.9"/>
        <circle cx="40" cy="15" r="3" fill="#aab992" opacity="0.5"/>
        <circle cx="85" cy="15" r="3" fill="#aab992" opacity="0.6"/>
        <circle cx="92" cy="22" r="2" fill="#aab992" opacity="0.5"/>
      </g>
    </svg>
  );
}

export function FloralCornerBL({ className = "", size = 120 }) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 120 120"
      className={className}
      style={{ transform: "scaleX(-1) rotate(180deg)" }}
      aria-hidden="true"
    >
      <g opacity="0.55" fill="none" stroke="#7d936c" strokeWidth="1">
        <path d="M10,110 Q30,60 70,20" strokeWidth="1.5"/>
        <path d="M30,80 Q10,60 25,45 Q45,65 30,80Z" fill="#7d936c" opacity="0.4"/>
        <path d="M50,55 Q35,35 50,22 Q65,40 50,55Z" fill="#7d936c" opacity="0.35"/>
        <circle cx="70" cy="20" r="5" fill="#aab992" opacity="0.7"/>
        <circle cx="70" cy="20" r="2" fill="#445c3f" opacity="0.9"/>
        <circle cx="55" cy="35" r="4" fill="#aab992" opacity="0.6"/>
        <circle cx="55" cy="35" r="1.5" fill="#445c3f" opacity="0.9"/>
        <circle cx="40" cy="15" r="3" fill="#aab992" opacity="0.5"/>
        <circle cx="85" cy="15" r="3" fill="#aab992" opacity="0.6"/>
      </g>
    </svg>
  );
}

export function WaxSeal({ size = 80, className = "" }) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 80 80"
      className={className}
      aria-hidden="true"
    >
      {/* Outer seal ring */}
      <circle cx="40" cy="40" r="36" fill="#aab992" opacity="0.9"/>
      <circle cx="40" cy="40" r="32" fill="#445c3f" opacity="0.95"/>
      <circle cx="40" cy="40" r="28" fill="none" stroke="#f4f6ee" strokeWidth="1" opacity="0.6"/>
      {/* Floral emblem center */}
      <circle cx="40" cy="40" r="8"  fill="#f4f6ee" opacity="0.5"/>
      {/* Petals */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x   = 40 + 14 * Math.cos(rad);
        const y   = 40 + 14 * Math.sin(rad);
        return (
          <ellipse
            key={i}
            cx={x} cy={y}
            rx="5" ry="3"
            fill="#f4f6ee"
            opacity="0.55"
            transform={`rotate(${angle}, ${x}, ${y})`}
          />
        );
      })}
      {/* Center dot */}
      <circle cx="40" cy="40" r="3" fill="#f4f6ee" opacity="0.8"/>
      {/* Outer decorative dots */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x   = 40 + 30 * Math.cos(rad);
        const y   = 40 + 30 * Math.sin(rad);
        return <circle key={i} cx={x} cy={y} r="1.5" fill="#f4f6ee" opacity="0.5"/>;
      })}
    </svg>
  );
}

export function FloralDivider({ className = "" }) {
  return (
    <svg
      width="320" height="32"
      viewBox="0 0 320 32"
      className={className}
      aria-hidden="true"
    >
      <line x1="0"   y1="16" x2="120" y2="16" stroke="#445c3f" strokeWidth="0.8" opacity="0.6"/>
      <line x1="200" y1="16" x2="320" y2="16" stroke="#445c3f" strokeWidth="0.8" opacity="0.6"/>
      {/* Center motif */}
      <circle cx="160" cy="16" r="4"  fill="#445c3f" opacity="0.7"/>
      <circle cx="145" cy="16" r="2.5" fill="#aab992" opacity="0.6"/>
      <circle cx="175" cy="16" r="2.5" fill="#aab992" opacity="0.6"/>
      <circle cx="133" cy="16" r="1.5" fill="#7d936c" opacity="0.5"/>
      <circle cx="187" cy="16" r="1.5" fill="#7d936c" opacity="0.5"/>
      {/* Leaves */}
      <path d="M148,10 Q155,16 148,22 Q141,16 148,10Z" fill="#7d936c" opacity="0.45"/>
      <path d="M172,10 Q179,16 172,22 Q165,16 172,10Z" fill="#7d936c" opacity="0.45"/>
    </svg>
  );
}
