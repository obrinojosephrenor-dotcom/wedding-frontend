export function FloralCornerTL({ className = "", size = 140 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 140 140"
      className={className} aria-hidden="true">
      <g opacity="0.85">
        {/* Main stem */}
        <path d="M8,132 Q25,80 55,45 Q75,25 95,12"
          fill="none" stroke="#A8B89F" strokeWidth="1.2" opacity="0.6"/>
        {/* Secondary stem */}
        <path d="M8,132 Q30,90 45,65"
          fill="none" stroke="#A8B89F" strokeWidth="0.8" opacity="0.5"/>

        {/* Large blush rose top */}
        <ellipse cx="92" cy="14" rx="11" ry="9" fill="#F7D6E0" opacity="0.75" transform="rotate(-20,92,14)"/>
        <ellipse cx="92" cy="14" rx="8" ry="6" fill="#F4C6D4" opacity="0.6" transform="rotate(10,92,14)"/>
        <ellipse cx="92" cy="14" rx="5" ry="4" fill="#EEB5C8" opacity="0.7" transform="rotate(-5,92,14)"/>
        <circle cx="92" cy="14" r="2.5" fill="#E8A8BC" opacity="0.8"/>

        {/* Powder blue forget-me-not cluster */}
        <circle cx="60" cy="42" r="6" fill="#DDEAF7" opacity="0.7"/>
        <circle cx="54" cy="38" r="5" fill="#CCE0F5" opacity="0.65"/>
        <circle cx="67" cy="38" r="4.5" fill="#DDEAF7" opacity="0.6"/>
        <circle cx="60" cy="42" r="2" fill="#B8D4F0" opacity="0.8"/>
        <circle cx="54" cy="38" r="1.8" fill="#B8D4F0" opacity="0.75"/>
        <circle cx="67" cy="38" r="1.6" fill="#B8D4F0" opacity="0.7"/>

        {/* Small pink daisy */}
        <ellipse cx="38" cy="68" rx="7" ry="5" fill="#F7D6E0" opacity="0.65" transform="rotate(30,38,68)"/>
        <ellipse cx="38" cy="68" rx="7" ry="5" fill="#F7D6E0" opacity="0.6" transform="rotate(90,38,68)"/>
        <ellipse cx="38" cy="68" rx="7" ry="5" fill="#F7D6E0" opacity="0.55" transform="rotate(150,38,68)"/>
        <circle cx="38" cy="68" r="4" fill="#F4C6D4" opacity="0.8"/>
        <circle cx="38" cy="68" r="2" fill="#E8A8BC" opacity="0.9"/>

        {/* Leaves */}
        <path d="M45,58 Q35,45 42,35 Q52,48 45,58Z" fill="#A8B89F" opacity="0.5"/>
        <path d="M72,28 Q62,18 68,10 Q78,22 72,28Z" fill="#A8B89F" opacity="0.45"/>
        <path d="M28,90 Q18,78 24,68 Q34,80 28,90Z" fill="#A8B89F" opacity="0.4"/>
        <path d="M55,50 Q65,38 72,42 Q63,54 55,50Z" fill="#B8C9B0" opacity="0.4"/>

        {/* Tiny buds */}
        <circle cx="78" cy="32" r="4" fill="#F7D6E0" opacity="0.6"/>
        <circle cx="78" cy="32" r="2" fill="#EEB5C8" opacity="0.7"/>
        <circle cx="22" cy="105" r="3.5" fill="#DDEAF7" opacity="0.6"/>
        <circle cx="22" cy="105" r="1.8" fill="#B8D4F0" opacity="0.7"/>
        <circle cx="48" cy="80" r="3" fill="#F7D6E0" opacity="0.5"/>

        {/* Vine tendrils */}
        <path d="M35,75 Q28,70 32,63" fill="none" stroke="#A8B89F" strokeWidth="0.7" opacity="0.5"/>
        <path d="M65,48 Q72,42 68,35" fill="none" stroke="#A8B89F" strokeWidth="0.7" opacity="0.45"/>
        <path d="M15,118 Q10,110 16,103" fill="none" stroke="#A8B89F" strokeWidth="0.6" opacity="0.4"/>
      </g>
    </svg>
  );
}

export function FloralCornerTR({ className = "", size = 140 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 140 140"
      className={className} style={{ transform: "scaleX(-1)" }} aria-hidden="true">
      <g opacity="0.85">
        <path d="M8,132 Q25,80 55,45 Q75,25 95,12"
          fill="none" stroke="#A8B89F" strokeWidth="1.2" opacity="0.6"/>
        <path d="M8,132 Q30,90 45,65"
          fill="none" stroke="#A8B89F" strokeWidth="0.8" opacity="0.5"/>
        <ellipse cx="92" cy="14" rx="11" ry="9" fill="#DDEAF7" opacity="0.75" transform="rotate(-20,92,14)"/>
        <ellipse cx="92" cy="14" rx="8" ry="6" fill="#CCE0F5" opacity="0.6" transform="rotate(10,92,14)"/>
        <ellipse cx="92" cy="14" rx="5" ry="4" fill="#B8D4F0" opacity="0.7" transform="rotate(-5,92,14)"/>
        <circle cx="92" cy="14" r="2.5" fill="#9EC8EC" opacity="0.8"/>
        <circle cx="60" cy="42" r="6" fill="#F7D6E0" opacity="0.7"/>
        <circle cx="54" cy="38" r="5" fill="#F4C6D4" opacity="0.65"/>
        <circle cx="67" cy="38" r="4.5" fill="#F7D6E0" opacity="0.6"/>
        <circle cx="60" cy="42" r="2" fill="#EEB5C8" opacity="0.8"/>
        <circle cx="54" cy="38" r="1.8" fill="#EEB5C8" opacity="0.75"/>
        <ellipse cx="38" cy="68" rx="7" ry="5" fill="#DDEAF7" opacity="0.65" transform="rotate(30,38,68)"/>
        <ellipse cx="38" cy="68" rx="7" ry="5" fill="#DDEAF7" opacity="0.6" transform="rotate(90,38,68)"/>
        <ellipse cx="38" cy="68" rx="7" ry="5" fill="#DDEAF7" opacity="0.55" transform="rotate(150,38,68)"/>
        <circle cx="38" cy="68" r="4" fill="#CCE0F5" opacity="0.8"/>
        <circle cx="38" cy="68" r="2" fill="#B8D4F0" opacity="0.9"/>
        <path d="M45,58 Q35,45 42,35 Q52,48 45,58Z" fill="#A8B89F" opacity="0.5"/>
        <path d="M72,28 Q62,18 68,10 Q78,22 72,28Z" fill="#A8B89F" opacity="0.45"/>
        <path d="M28,90 Q18,78 24,68 Q34,80 28,90Z" fill="#A8B89F" opacity="0.4"/>
        <circle cx="78" cy="32" r="4" fill="#F7D6E0" opacity="0.6"/>
        <circle cx="22" cy="105" r="3.5" fill="#DDEAF7" opacity="0.6"/>
      </g>
    </svg>
  );
}

export function FloralCornerBL({ className = "", size = 140 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 140 140"
      className={className} style={{ transform: "scaleY(-1)" }} aria-hidden="true">
      <g opacity="0.85">
        <path d="M8,132 Q25,80 55,45 Q75,25 95,12"
          fill="none" stroke="#A8B89F" strokeWidth="1.2" opacity="0.6"/>
        <ellipse cx="92" cy="14" rx="11" ry="9" fill="#F7D6E0" opacity="0.7" transform="rotate(-20,92,14)"/>
        <ellipse cx="92" cy="14" rx="8" ry="6" fill="#F4C6D4" opacity="0.6" transform="rotate(10,92,14)"/>
        <circle cx="92" cy="14" r="2.5" fill="#E8A8BC" opacity="0.8"/>
        <circle cx="60" cy="42" r="6" fill="#DDEAF7" opacity="0.65"/>
        <circle cx="54" cy="38" r="5" fill="#DDEAF7" opacity="0.6"/>
        <circle cx="60" cy="42" r="2" fill="#B8D4F0" opacity="0.8"/>
        <ellipse cx="38" cy="68" rx="7" ry="5" fill="#F7D6E0" opacity="0.6" transform="rotate(60,38,68)"/>
        <ellipse cx="38" cy="68" rx="7" ry="5" fill="#F7D6E0" opacity="0.55" transform="rotate(120,38,68)"/>
        <circle cx="38" cy="68" r="4" fill="#F4C6D4" opacity="0.75"/>
        <circle cx="38" cy="68" r="2" fill="#EEB5C8" opacity="0.9"/>
        <path d="M45,58 Q35,45 42,35 Q52,48 45,58Z" fill="#A8B89F" opacity="0.45"/>
        <path d="M72,28 Q62,18 68,10 Q78,22 72,28Z" fill="#A8B89F" opacity="0.4"/>
      </g>
    </svg>
  );
}

export function FloralCornerBR({ className = "", size = 140 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 140 140"
      className={className} style={{ transform: "scale(-1,-1)" }} aria-hidden="true">
      <g opacity="0.85">
        <path d="M8,132 Q25,80 55,45 Q75,25 95,12"
          fill="none" stroke="#A8B89F" strokeWidth="1.2" opacity="0.6"/>
        <ellipse cx="92" cy="14" rx="11" ry="9" fill="#DDEAF7" opacity="0.75" transform="rotate(-20,92,14)"/>
        <ellipse cx="92" cy="14" rx="8" ry="6" fill="#CCE0F5" opacity="0.6" transform="rotate(10,92,14)"/>
        <circle cx="92" cy="14" r="2.5" fill="#9EC8EC" opacity="0.8"/>
        <circle cx="60" cy="42" r="6" fill="#F7D6E0" opacity="0.7"/>
        <circle cx="54" cy="38" r="5" fill="#F4C6D4" opacity="0.65"/>
        <circle cx="60" cy="42" r="2" fill="#EEB5C8" opacity="0.8"/>
        <ellipse cx="38" cy="68" rx="7" ry="5" fill="#DDEAF7" opacity="0.6" transform="rotate(45,38,68)"/>
        <ellipse cx="38" cy="68" rx="7" ry="5" fill="#DDEAF7" opacity="0.55" transform="rotate(135,38,68)"/>
        <circle cx="38" cy="68" r="4" fill="#CCE0F5" opacity="0.75"/>
        <circle cx="38" cy="68" r="2" fill="#B8D4F0" opacity="0.9"/>
        <path d="M45,58 Q35,45 42,35 Q52,48 45,58Z" fill="#A8B89F" opacity="0.45"/>
        <path d="M28,90 Q18,78 24,68 Q34,80 28,90Z" fill="#A8B89F" opacity="0.4"/>
      </g>
    </svg>
  );
}

export function WaxSeal({ size = 80, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80"
      className={className} aria-hidden="true">
      <circle cx="40" cy="40" r="36" fill="#F7D6E0" opacity="0.6"/>
      <circle cx="40" cy="40" r="32" fill="#F4C6D4" opacity="0.7"/>
      <circle cx="40" cy="40" r="28" fill="none" stroke="#EEB5C8" strokeWidth="1" opacity="0.6"/>
      <circle cx="40" cy="40" r="8" fill="white" opacity="0.5"/>
      {[0,45,90,135,180,225,270,315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 40 + 14 * Math.cos(rad);
        const y = 40 + 14 * Math.sin(rad);
        return (
          <ellipse key={i} cx={x} cy={y} rx="5" ry="3"
            fill="white" opacity="0.55"
            transform={`rotate(${angle}, ${x}, ${y})`}
          />
        );
      })}
      <circle cx="40" cy="40" r="3" fill="white" opacity="0.9"/>
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 40 + 30 * Math.cos(rad);
        const y = 40 + 30 * Math.sin(rad);
        return <circle key={i} cx={x} cy={y} r="1.5" fill="#EEB5C8" opacity="0.5"/>;
      })}
    </svg>
  );
}

export function FloralDivider({ className = "" }) {
  return (
    <svg width="340" height="40" viewBox="0 0 340 40"
      className={className} aria-hidden="true">
      {/* Lines */}
      <line x1="0" y1="20" x2="120" y2="20" stroke="#F7D6E0" strokeWidth="0.8" opacity="0.7"/>
      <line x1="220" y1="20" x2="340" y2="20" stroke="#F7D6E0" strokeWidth="0.8" opacity="0.7"/>

      {/* Center rose */}
      <circle cx="170" cy="20" r="7" fill="#F7D6E0" opacity="0.8"/>
      <circle cx="170" cy="20" r="5" fill="#F4C6D4" opacity="0.75"/>
      <circle cx="170" cy="20" r="3" fill="#EEB5C8" opacity="0.9"/>
      <circle cx="170" cy="20" r="1.5" fill="#E8A8BC" opacity="1"/>

      {/* Side flowers */}
      <circle cx="148" cy="20" r="5" fill="#DDEAF7" opacity="0.75"/>
      <circle cx="148" cy="20" r="2.5" fill="#B8D4F0" opacity="0.85"/>
      <circle cx="192" cy="20" r="5" fill="#DDEAF7" opacity="0.75"/>
      <circle cx="192" cy="20" r="2.5" fill="#B8D4F0" opacity="0.85"/>

      {/* Small accent dots */}
      <circle cx="133" cy="20" r="2.5" fill="#F7D6E0" opacity="0.6"/>
      <circle cx="207" cy="20" r="2.5" fill="#F7D6E0" opacity="0.6"/>
      <circle cx="122" cy="20" r="1.5" fill="#A8B89F" opacity="0.5"/>
      <circle cx="218" cy="20" r="1.5" fill="#A8B89F" opacity="0.5"/>

      {/* Tiny leaves */}
      <path d="M158,14 Q163,20 158,26 Q153,20 158,14Z" fill="#A8B89F" opacity="0.5"/>
      <path d="M182,14 Q187,20 182,26 Q177,20 182,14Z" fill="#A8B89F" opacity="0.5"/>
    </svg>
  );
}

export function FloralBorder({ className = "", width = 400, height = 8 }) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}
      className={className} aria-hidden="true">
      {Array.from({ length: Math.floor(width / 20) }, (_, i) => (
        <circle key={i} cx={i * 20 + 10} cy={height / 2}
          r={i % 3 === 0 ? 2.5 : 1.5}
          fill={i % 3 === 0 ? "#F7D6E0" : i % 3 === 1 ? "#DDEAF7" : "#A8B89F"}
          opacity="0.6"
        />
      ))}
    </svg>
  );
}