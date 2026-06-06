import { useEffect, useRef } from "react";

const PETALS = [
  // Rose petals
  { emoji: "🌸", size: 14 },
  { emoji: "🌺", size: 12 },
  { emoji: "✿",  size: 16 },
  { emoji: "❀",  size: 14 },
  { emoji: "✾",  size: 12 },
];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function createPetal(container) {
  const petal = document.createElement("div");
  const p     = PETALS[Math.floor(Math.random() * PETALS.length)];

  const startX   = randomBetween(0, 100);
  const duration = randomBetween(8, 16);
  const delay    = randomBetween(0, 10);
  const size     = randomBetween(p.size - 4, p.size + 4);
  const drift    = randomBetween(-120, 120);
  const rotate   = randomBetween(0, 360);

  petal.innerHTML = p.emoji;
  petal.style.cssText = `
    position: fixed;
    left: ${startX}vw;
    top: -40px;
    font-size: ${size}px;
    opacity: 0;
    pointer-events: none;
    z-index: 0;
    animation: petalDrop ${duration}s ${delay}s ease-in forwards;
    --drift: ${drift}px;
    --rotate: ${rotate}deg;
  `;

  container.appendChild(petal);

  // Remove after animation ends
  setTimeout(() => {
    petal.remove();
  }, (duration + delay) * 1000);
}

export default function FloralAccents({ count = 18, active = true }) {
  const containerRef = useRef(null);
  const intervalRef  = useRef(null);

  useEffect(() => {
    if (!active) return;

    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes petalDrop {
        0%   { transform: translateY(0) translateX(0) rotate(0deg);     opacity: 0; }
        10%  { opacity: 0.7; }
        90%  { opacity: 0.4; }
        100% { transform: translateY(105vh) translateX(var(--drift)) rotate(var(--rotate)); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    const container = containerRef.current;

    // Initial burst
    for (let i = 0; i < count; i++) {
      setTimeout(() => createPetal(container), i * 300);
    }

    // Keep spawning
    intervalRef.current = setInterval(() => {
      createPetal(container);
    }, 1200);

    return () => {
      clearInterval(intervalRef.current);
      style.remove();
    };
  }, [active, count]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}