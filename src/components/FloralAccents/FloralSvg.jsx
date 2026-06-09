// ─── Reusable micro flower components ─────────────────────────────

function PinkRose({ cx, cy, size = 1, opacity = 0.85 }) {
  const s = size;
  return (
    <g transform={`translate(${cx},${cy})`} opacity={opacity}>
      <ellipse rx={11*s} ry={9*s} fill="#F2B5C8" transform={`rotate(-25)`}/>
      <ellipse rx={9*s} ry={7*s} fill="#EDAABF" transform={`rotate(15)`}/>
      <ellipse rx={7*s} ry={5*s} fill="#E89DB5" transform={`rotate(-10)`}/>
      <ellipse rx={5*s} ry={4*s} fill="#E394AD" transform={`rotate(20)`}/>
      <ellipse rx={3*s} ry={2.5*s} fill="#DE8AA5" transform={`rotate(-5)`}/>
      <circle r={1.8*s} fill="#D97D9B"/>
    </g>
  );
}

function WhiteDaisy({ cx, cy, size = 1, opacity = 0.8 }) {
  const s = size;
  const petals = [0,30,60,90,120,150,180,210,240,270,300,330];
  return (
    <g transform={`translate(${cx},${cy})`} opacity={opacity}>
      {petals.map((angle, i) => (
        <ellipse key={i} rx={7*s} ry={3*s} fill="#FFFFFF"
          stroke="#F0E8E0" strokeWidth="0.4"
          transform={`rotate(${angle})`} opacity="0.9"/>
      ))}
      <circle r={5*s} fill="#F5D78E" opacity="0.9"/>
      <circle r={3*s} fill="#ECC55A" opacity="0.95"/>
      <circle r={1.5*s} fill="#E0B030" opacity="1"/>
    </g>
  );
}

function BlueForgetMeNot({ cx, cy, size = 1, opacity = 0.8 }) {
  const s = size;
  const petals = [0,72,144,216,288];
  return (
    <g transform={`translate(${cx},${cy})`} opacity={opacity}>
      {petals.map((angle, i) => (
        <ellipse key={i} rx={5*s} ry={3*s} fill="#AFC8E8"
          transform={`rotate(${angle})`} opacity="0.85"/>
      ))}
      <circle r={2.5*s} fill="#F5D78E" opacity="0.95"/>
      <circle r={1.2*s} fill="#FFFFFF" opacity="1"/>
    </g>
  );
}

function PinkCosmos({ cx, cy, size = 1, opacity = 0.85 }) {
  const s = size;
  const petals = [0,45,90,135,180,225,270,315];
  return (
    <g transform={`translate(${cx},${cy})`} opacity={opacity}>
      {petals.map((angle, i) => (
        <ellipse key={i} rx={10*s} ry={4*s} fill="#F4B8CC"
          stroke="#EFA8BE" strokeWidth="0.3"
          transform={`rotate(${angle})`} opacity="0.8"/>
      ))}
      <circle r={4*s} fill="#F5D78E" opacity="0.9"/>
      <circle r={2*s} fill="#ECC55A" opacity="1"/>
    </g>
  );
}

function Bluebell({ cx, cy, size = 1, opacity = 0.75 }) {
  const s = size;
  return (
    <g transform={`translate(${cx},${cy})`} opacity={opacity}>
      <path d={`M0,${-12*s} Q${6*s},0 0,${8*s} Q${-6*s},0 0,${-12*s}`} fill="#AFC8E8"/>
      <path d={`M0,${-10*s} Q${4*s},0 0,${6*s} Q${-4*s},0 0,${-10*s}`} fill="#C8DBF0" opacity="0.7"/>
      <ellipse cx={0} cy={8*s} rx={3*s} ry={2*s} fill="#F5D78E" opacity="0.9"/>
    </g>
  );
}

function Leaf({ x1, y1, x2, y2, size = 1, opacity = 0.65, color = "#8BAE7E" }) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - 12 * size;
  return (
    <path
      d={`M${x1},${y1} Q${mx},${my} ${x2},${y2} Q${mx},${(y1+y2)/2+4*size} ${x1},${y1}`}
      fill={color} opacity={opacity}
    />
  );
}

function SmallBud({ cx, cy, size = 1, opacity = 0.7, color = "#F2B5C8" }) {
  return (
    <g transform={`translate(${cx},${cy})`} opacity={opacity}>
      <ellipse rx={4*size} ry={6*size} fill={color}/>
      <ellipse rx={2.5*size} ry={4*size} fill="white" opacity="0.3"/>
    </g>
  );
}

// ─── Corner arrangements ───────────────────────────────────────────

export function FloralCornerTL({ className = "", size = 160 }) {
  const scale = size / 160;
  return (
    <svg width={size} height={size} viewBox="0 0 160 160"
      className={className} aria-hidden="true" style={{ overflow: "visible" }}>
      <g transform={`scale(${scale})`}>

        {/* Main botanical stems */}
        <path d="M10,155 Q20,110 35,80 Q50,50 70,25 Q85,10 100,5"
          fill="none" stroke="#8BAE7E" strokeWidth="1.4" opacity="0.65"/>
        <path d="M10,155 Q25,120 40,100 Q50,85 60,70"
          fill="none" stroke="#8BAE7E" strokeWidth="1" opacity="0.5"/>
        <path d="M25,145 Q35,125 50,110"
          fill="none" stroke="#A8C09A" strokeWidth="0.8" opacity="0.45"/>
        {/* Tall wispy stem right */}
        <path d="M95,5 Q100,20 98,40 Q96,55 92,65"
          fill="none" stroke="#A8C09A" strokeWidth="0.7" opacity="0.5"/>
        {/* Horizontal extending stems */}
        <path d="M60,70 Q80,72 100,68 Q118,64 135,58"
          fill="none" stroke="#8BAE7E" strokeWidth="0.9" opacity="0.45"/>
        <path d="M50,110 Q70,108 90,104 Q108,100 125,92"
          fill="none" stroke="#A8C09A" strokeWidth="0.7" opacity="0.4"/>

        {/* Lily of the valley pearls on tall stem */}
        {[8,16,24,32,40].map((y, i) => (
          <circle key={i} cx={96 + (i%2)*3} cy={y} r="2.2" fill="white"
            stroke="#D4E8C4" strokeWidth="0.5" opacity="0.85"/>
        ))}

        {/* Large pink rose — main focal */}
        <PinkRose cx={38} cy={88} size={1.3} opacity={0.88}/>

        {/* Medium pink cosmos */}
        <PinkCosmos cx={65} cy={55} size={0.9} opacity={0.82}/>

        {/* White daisy large */}
        <WhiteDaisy cx={22} cy={118} size={1.1} opacity={0.85}/>

        {/* White daisy small */}
        <WhiteDaisy cx={75} cy={80} size={0.7} opacity={0.7}/>

        {/* Bluebell */}
        <Bluebell cx={85} cy={30} size={0.9} opacity={0.78}/>

        {/* Blue forget-me-nots cluster */}
        <BlueForgetMeNot cx={48} cy={72} size={0.8} opacity={0.75}/>
        <BlueForgetMeNot cx={56} cy={65} size={0.65} opacity={0.7}/>
        <BlueForgetMeNot cx={40} cy={65} size={0.7} opacity={0.72}/>
        <BlueForgetMeNot cx={105} cy={72} size={0.75} opacity={0.7}/>
        <BlueForgetMeNot cx={115} cy={65} size={0.65} opacity={0.65}/>
        <BlueForgetMeNot cx={120} cy={78} size={0.6} opacity={0.6}/>
        <BlueForgetMeNot cx={100} cy={108} size={0.7} opacity={0.65}/>
        <BlueForgetMeNot cx={112} cy={100} size={0.6} opacity={0.6}/>

        {/* Small pink buds */}
        <SmallBud cx={78} cy={18} size={0.8} color="#F2B5C8" opacity={0.75}/>
        <SmallBud cx={88} cy={50} size={0.65} color="#F4B8CC" opacity={0.7}/>
        <SmallBud cx={30} cy={108} size={0.7} color="#F2B5C8" opacity={0.72}/>
        <SmallBud cx={125} cy={85} size={0.6} color="#F4B8CC" opacity={0.65}/>
        <SmallBud cx={130} cy={55} size={0.55} color="#F2B5C8" opacity={0.6}/>

        {/* Leaves */}
        <Leaf x1={32} y1={95} x2={18} y2={108} size={0.9} opacity={0.6}/>
        <Leaf x1={42} y1={82} x2={28} y2={72} size={0.85} opacity={0.55}/>
        <Leaf x1={65} y1={50} x2={55} y2={38} size={0.8} opacity={0.55}/>
        <Leaf x1={85} y1={25} x2={75} y2={15} size={0.75} opacity={0.5}/>
        <Leaf x1={95} y1={68} x2={88} y2={58} size={0.7} opacity={0.5}/>
        <Leaf x1={108} y1={65} x2={118} y2={58} size={0.7} opacity={0.5} color="#A8C09A"/>
        <Leaf x1={100} y1={105} x2={112} y2={98} size={0.65} opacity={0.45} color="#A8C09A"/>

        {/* Scattered tiny dots */}
        {[[92,60],[98,45],[88,72],[72,38],[62,28],[118,92],[125,100],[132,78]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="1.5" fill="#D4A8B8" opacity="0.5"/>
        ))}
      </g>
    </svg>
  );
}

export function FloralCornerTR({ className = "", size = 160 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160"
      className={className} style={{ transform: "scaleX(-1)" }} aria-hidden="true">
      <FloralCornerTL size={size} />
    </svg>
  );
}

// Actually render the full SVG mirrored properly
export function FloralCornerTRReal({ className = "", size = 160 }) {
  const scale = size / 160;
  return (
    <svg width={size} height={size} viewBox="0 0 160 160"
      className={className} aria-hidden="true" style={{ overflow: "visible" }}>
      <g transform={`scale(${scale}) scale(-1,1) translate(-160,0)`}>
        <path d="M10,155 Q20,110 35,80 Q50,50 70,25 Q85,10 100,5"
          fill="none" stroke="#8BAE7E" strokeWidth="1.4" opacity="0.65"/>
        <path d="M10,155 Q25,120 40,100 Q50,85 60,70"
          fill="none" stroke="#8BAE7E" strokeWidth="1" opacity="0.5"/>
        <path d="M95,5 Q100,20 98,40 Q96,55 92,65"
          fill="none" stroke="#A8C09A" strokeWidth="0.7" opacity="0.5"/>
        <path d="M60,70 Q80,72 100,68 Q118,64 135,58"
          fill="none" stroke="#8BAE7E" strokeWidth="0.9" opacity="0.45"/>
        {[8,16,24,32,40].map((y, i) => (
          <circle key={i} cx={96 + (i%2)*3} cy={y} r="2.2" fill="white"
            stroke="#D4E8C4" strokeWidth="0.5" opacity="0.85"/>
        ))}
        <PinkRose cx={38} cy={88} size={1.3} opacity={0.88}/>
        <PinkCosmos cx={65} cy={55} size={0.9} opacity={0.82}/>
        <WhiteDaisy cx={22} cy={118} size={1.1} opacity={0.85}/>
        <Bluebell cx={85} cy={30} size={0.9} opacity={0.78}/>
        <BlueForgetMeNot cx={48} cy={72} size={0.8} opacity={0.75}/>
        <BlueForgetMeNot cx={56} cy={65} size={0.65} opacity={0.7}/>
        <BlueForgetMeNot cx={105} cy={72} size={0.75} opacity={0.7}/>
        <BlueForgetMeNot cx={115} cy={65} size={0.65} opacity={0.65}/>
        <SmallBud cx={78} cy={18} size={0.8} color="#F2B5C8" opacity={0.75}/>
        <SmallBud cx={30} cy={108} size={0.7} color="#F2B5C8" opacity={0.72}/>
        <Leaf x1={32} y1={95} x2={18} y2={108} size={0.9} opacity={0.6}/>
        <Leaf x1={65} y1={50} x2={55} y2={38} size={0.8} opacity={0.55}/>
      </g>
    </svg>
  );
}

export function FloralCornerBL({ className = "", size = 160 }) {
  const scale = size / 160;
  return (
    <svg width={size} height={size} viewBox="0 0 160 160"
      className={className} aria-hidden="true" style={{ overflow: "visible" }}>
      <g transform={`scale(${scale}) scale(1,-1) translate(0,-160)`}>
        <path d="M10,155 Q20,110 35,80 Q50,50 70,25 Q85,10 100,5"
          fill="none" stroke="#8BAE7E" strokeWidth="1.4" opacity="0.65"/>
        <path d="M10,155 Q25,120 40,100 Q50,85 60,70"
          fill="none" stroke="#8BAE7E" strokeWidth="1" opacity="0.5"/>
        <path d="M60,70 Q80,72 100,68 Q118,64 135,58"
          fill="none" stroke="#8BAE7E" strokeWidth="0.9" opacity="0.45"/>
        <PinkRose cx={38} cy={88} size={1.2} opacity={0.85}/>
        <WhiteDaisy cx={22} cy={118} size={1.0} opacity={0.82}/>
        <BlueForgetMeNot cx={48} cy={72} size={0.8} opacity={0.72}/>
        <BlueForgetMeNot cx={105} cy={72} size={0.75} opacity={0.68}/>
        <BlueForgetMeNot cx={115} cy={65} size={0.65} opacity={0.62}/>
        <SmallBud cx={78} cy={18} size={0.8} color="#F2B5C8" opacity={0.7}/>
        <Leaf x1={32} y1={95} x2={18} y2={108} size={0.9} opacity={0.55}/>
        <Leaf x1={65} y1={50} x2={55} y2={38} size={0.8} opacity={0.5}/>
      </g>
    </svg>
  );
}

export function FloralCornerBR({ className = "", size = 160 }) {
  const scale = size / 160;
  return (
    <svg width={size} height={size} viewBox="0 0 160 160"
      className={className} aria-hidden="true" style={{ overflow: "visible" }}>
      <g transform={`scale(${scale}) scale(-1,-1) translate(-160,-160)`}>
        <path d="M10,155 Q20,110 35,80 Q50,50 70,25 Q85,10 100,5"
          fill="none" stroke="#8BAE7E" strokeWidth="1.4" opacity="0.65"/>
        <path d="M10,155 Q25,120 40,100 Q50,85 60,70"
          fill="none" stroke="#8BAE7E" strokeWidth="1" opacity="0.5"/>
        <path d="M60,70 Q80,72 100,68 Q118,64 135,58"
          fill="none" stroke="#8BAE7E" strokeWidth="0.9" opacity="0.45"/>
        <PinkRose cx={38} cy={88} size={1.2} opacity={0.85}/>
        <WhiteDaisy cx={22} cy={118} size={1.0} opacity={0.82}/>
        <BlueForgetMeNot cx={48} cy={72} size={0.8} opacity={0.72}/>
        <BlueForgetMeNot cx={105} cy={72} size={0.75} opacity={0.68}/>
        <SmallBud cx={78} cy={18} size={0.8} color="#F4B8CC" opacity={0.7}/>
        <Leaf x1={32} y1={95} x2={18} y2={108} size={0.9} opacity={0.55}/>
        <Leaf x1={65} y1={50} x2={55} y2={38} size={0.8} opacity={0.5}/>
      </g>
    </svg>
  );
}

export function WaxSeal({ size = 80, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80"
      className={className} aria-hidden="true">
      <circle cx="40" cy="40" r="36" fill="#F7D6E0" opacity="0.5"/>
      <circle cx="40" cy="40" r="32" fill="#F4C6D4" opacity="0.65"/>
      <circle cx="40" cy="40" r="29" fill="none" stroke="#EEB5C8" strokeWidth="0.8" opacity="0.55"/>
      <circle cx="40" cy="40" r="9" fill="white" opacity="0.5"/>
      {[0,45,90,135,180,225,270,315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 40 + 15 * Math.cos(rad);
        const y = 40 + 15 * Math.sin(rad);
        return (
          <ellipse key={i} cx={x} cy={y} rx="5.5" ry="3"
            fill="white" opacity="0.6"
            transform={`rotate(${angle}, ${x}, ${y})`}
          />
        );
      })}
      <circle cx="40" cy="40" r="3.5" fill="white" opacity="0.9"/>
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 40 + 30 * Math.cos(rad);
        const y = 40 + 30 * Math.sin(rad);
        return <circle key={i} cx={x} cy={y} r="1.8" fill="#EEB5C8" opacity="0.5"/>;
      })}
    </svg>
  );
}

export function FloralDivider({ className = "" }) {
  return (
    <svg width="360" height="44" viewBox="0 0 360 44"
      className={className} aria-hidden="true">
      <line x1="0" y1="22" x2="130" y2="22" stroke="#F7D6E0" strokeWidth="0.7" opacity="0.65"/>
      <line x1="230" y1="22" x2="360" y2="22" stroke="#F7D6E0" strokeWidth="0.7" opacity="0.65"/>

      {/* Center cosmos */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <ellipse key={i} cx={180 + 10*Math.cos(rad)} cy={22 + 10*Math.sin(rad)}
            rx="5" ry="2.5" fill="#F4B8CC" opacity="0.75"
            transform={`rotate(${angle},${180 + 10*Math.cos(rad)},${22 + 10*Math.sin(rad)})`}
          />
        );
      })}
      <circle cx="180" cy="22" r="3.5" fill="#F5D78E" opacity="0.9"/>
      <circle cx="180" cy="22" r="1.8" fill="#ECC55A" opacity="1"/>

      {/* Side forget-me-nots */}
      {[0,72,144,216,288].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return <ellipse key={i} cx={154 + 5*Math.cos(rad)} cy={22 + 5*Math.sin(rad)} rx="4" ry="2.2" fill="#AFC8E8" opacity="0.7" transform={`rotate(${angle},${154+5*Math.cos(rad)},${22+5*Math.sin(rad)})`}/>;
      })}
      <circle cx="154" cy="22" r="2" fill="#F5D78E" opacity="0.9"/>
      {[0,72,144,216,288].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return <ellipse key={i} cx={206 + 5*Math.cos(rad)} cy={22 + 5*Math.sin(rad)} rx="4" ry="2.2" fill="#AFC8E8" opacity="0.7" transform={`rotate(${angle},${206+5*Math.cos(rad)},${22+5*Math.sin(rad)})`}/>;
      })}
      <circle cx="206" cy="22" r="2" fill="#F5D78E" opacity="0.9"/>

      {/* Tiny dots */}
      <circle cx="140" cy="22" r="2" fill="#F2B5C8" opacity="0.6"/>
      <circle cx="220" cy="22" r="2" fill="#F2B5C8" opacity="0.6"/>
      <circle cx="128" cy="22" r="1.4" fill="#A8B89F" opacity="0.5"/>
      <circle cx="232" cy="22" r="1.4" fill="#A8B89F" opacity="0.5"/>

      {/* Leaves */}
      <path d="M165,16 Q170,22 165,28 Q160,22 165,16Z" fill="#8BAE7E" opacity="0.5"/>
      <path d="M195,16 Q200,22 195,28 Q190,22 195,16Z" fill="#8BAE7E" opacity="0.5"/>
    </svg>
  );
}

export function WildflowerStem({ className = "", height = 300, side = "left" }) {
  const flip = side === "right" ? "scale(-1,1) translate(-60,0)" : "";
  return (
    <svg width="60" height={height} viewBox={`0 0 60 ${height}`}
      className={className} aria-hidden="true">
      <g transform={flip}>
        {/* Main stem */}
        <path d={`M30,${height} Q28,${height*0.7} 25,${height*0.5} Q22,${height*0.3} 28,${height*0.1}`}
          fill="none" stroke="#8BAE7E" strokeWidth="1.2" opacity="0.6"/>
        {/* Branch stems */}
        <path d={`M27,${height*0.8} Q15,${height*0.75} 8,${height*0.7}`}
          fill="none" stroke="#A8C09A" strokeWidth="0.8" opacity="0.5"/>
        <path d={`M26,${height*0.6} Q38,${height*0.55} 45,${height*0.5}`}
          fill="none" stroke="#A8C09A" strokeWidth="0.7" opacity="0.45"/>
        <path d={`M25,${height*0.4} Q14,${height*0.35} 8,${height*0.3}`}
          fill="none" stroke="#A8C09A" strokeWidth="0.7" opacity="0.45"/>
        <path d={`M26,${height*0.2} Q38,${height*0.15} 44,${height*0.12}`}
          fill="none" stroke="#A8C09A" strokeWidth="0.6" opacity="0.4"/>

        {/* Flowers at branch ends */}
        <PinkCosmos cx={8} cy={height*0.7} size={0.7} opacity={0.78}/>
        <BlueForgetMeNot cx={45} cy={height*0.5} size={0.65} opacity={0.72}/>
        <WhiteDaisy cx={8} cy={height*0.3} size={0.65} opacity={0.75}/>
        <BlueForgetMeNot cx={44} cy={height*0.12} size={0.6} opacity={0.68}/>
        <SmallBud cx={28} cy={height*0.08} size={0.7} color="#F2B5C8" opacity={0.72}/>

        {/* Leaves along stem */}
        <path d={`M27,${height*0.75} Q18,${height*0.72} 20,${height*0.65} Q28,${height*0.68} 27,${height*0.75}Z`}
          fill="#8BAE7E" opacity="0.55"/>
        <path d={`M26,${height*0.55} Q35,${height*0.52} 34,${height*0.45} Q26,${height*0.48} 26,${height*0.55}Z`}
          fill="#A8C09A" opacity="0.5"/>
        <path d={`M25,${height*0.35} Q16,${height*0.32} 18,${height*0.25} Q26,${height*0.28} 25,${height*0.35}Z`}
          fill="#8BAE7E" opacity="0.5"/>
      </g>
    </svg>
  );
}

export function FloralBorder({ className = "", width = 400 }) {
  const flowers = [];
  for (let i = 0; i < Math.floor(width / 28); i++) {
    const x = i * 28 + 14;
    const type = i % 4;
    flowers.push({ x, type });
  }
  return (
    <svg width={width} height="12" viewBox={`0 0 ${width} 12`}
      className={className} aria-hidden="true">
      {flowers.map((f, i) => {
        if (f.type === 0) return <circle key={i} cx={f.x} cy="6" r="3" fill="#F4B8CC" opacity="0.65"/>;
        if (f.type === 1) return <circle key={i} cx={f.x} cy="6" r="2.5" fill="#AFC8E8" opacity="0.6"/>;
        if (f.type === 2) return <circle key={i} cx={f.x} cy="6" r="2" fill="#8BAE7E" opacity="0.55"/>;
        return <circle key={i} cx={f.x} cy="6" r="1.5" fill="#F5D78E" opacity="0.6"/>;
      })}
    </svg>
  );
}