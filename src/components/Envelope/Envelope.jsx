import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  WaxSeal,
  FloralCornerTL,
  FloralCornerTR,
  FloralCornerBL,
  FloralCornerBR,
} from "../FloralAccents/FloralSvg";
import { WEDDING } from "../../weddingConfig";

// Petal particle
function Petal({ x, y, rotate, emoji, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 0, rotate: 0, scale: 1 }}
      animate={{ opacity: [0, 1, 0], x, y, rotate, scale: 0.5 }}
      transition={{ duration: 1.4, delay, ease: "easeOut" }}
      className="absolute pointer-events-none text-xl"
      style={{ zIndex: 100, left: "50%", top: "50%" }}
    >
      {emoji}
    </motion.div>
  );
}

export default function Envelope({ onOpen }) {
  // stages: idle → flap → card → done
  const [stage, setStage] = useState("idle");
  const [showPetals, setShowPetals] = useState(false);

  const petals = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 360,
    y: -(Math.random() * 280 + 60),
    rotate: Math.random() * 720 - 360,
    delay: Math.random() * 0.4,
    emoji: ["🌸", "✿", "❀", "🌿", "✾", "🌺"][i % 6],
  }));

  function handleClick() {
    if (stage !== "idle") return;

    // Step 1 — open the flap
    setStage("flap");

    // Step 2 — show petals
    setTimeout(() => setShowPetals(true), 500);

    // Step 3 — slide envelope away
    setTimeout(() => setStage("card"), 900);

    // Step 4 — tell Home we are done
    setTimeout(() => {
      setStage("done");
      onOpen && onOpen();
    }, 1600);
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(200,169,110,0.07) 0%, transparent 70%), #F9F4EE",
      }}
    >

      {/* Petals burst */}
      <AnimatePresence>
        {showPetals &&
          petals.map((p) => (
            <Petal
              key={p.id}
              x={p.x}
              y={p.y}
              rotate={p.rotate}
              emoji={p.emoji}
              delay={p.delay}
            />
          ))}
      </AnimatePresence>

      {/* Top label — Bodoni font */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: stage === "idle" ? 1 : 0,
          y: stage === "idle" ? 0 : -30,
        }}
        transition={{ duration: 0.6, delay: stage === "idle" ? 0.5 : 0 }}
        className="text-center mb-10 absolute"
        style={{ top: "12%" }}
      >
        <p
          style={{
            fontFamily: "'Bodoni Moda', 'Didot', 'Bodoni MT', 'Playfair Display', serif",
            fontSize: "clamp(1rem, 3vw, 1.3rem)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#C8A96E",
            letterSpacing: "0.25em",
            marginBottom: "6px",
          }}
        >
          A Special Invitation
        </p>
        <p
          style={{
            fontFamily: "'Bodoni Moda', 'Didot', 'Bodoni MT', 'Playfair Display', serif",
            fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
            fontStyle: "italic",
            fontWeight: 300,
            color: "rgba(60,42,30,0.4)",
            letterSpacing: "0.3em",
          }}
        >
          for you
        </p>
      </motion.div>

      {/* Envelope */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.92 }}
        animate={{
          opacity: stage === "card" || stage === "done" ? 0 : 1,
          y: stage === "card" || stage === "done" ? -100 : 0,
          scale: stage === "card" || stage === "done" ? 0.85 : 1,
        }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
        onClick={handleClick}
        whileHover={stage === "idle" ? { scale: 1.022, y: -5 } : {}}
        className="relative select-none"
        style={{
          cursor: stage === "idle" ? "pointer" : "default",
          zIndex: 10,
        }}
      >
        {/* Card body */}
        <div
          className="relative bg-parchment rounded-lg"
          style={{
            width: "clamp(280px, 76vw, 420px)",
            height: "clamp(185px, 47vw, 262px)",
            boxShadow:
              "0 28px 70px rgba(60,42,30,0.15), 0 6px 20px rgba(200,169,110,0.13)",
            border: "1px solid rgba(200,169,110,0.28)",
          }}
        >
          {/* Floral corners */}
          <FloralCornerTL className="absolute top-0 left-0 pointer-events-none" size={72} />
          <FloralCornerTR className="absolute top-0 right-0 pointer-events-none" size={72} />
          <FloralCornerBL className="absolute bottom-0 left-0 pointer-events-none" size={72} />
          <FloralCornerBR className="absolute bottom-0 right-0 pointer-events-none" size={72} />

          {/* Fold lines SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 420 262"
            preserveAspectRatio="none"
          >
            <path d="M0,262 L210,146 L420,262Z" fill="rgba(200,169,110,0.05)" stroke="rgba(200,169,110,0.15)" strokeWidth="0.8" />
            <path d="M0,0 L210,146 L0,262Z"     fill="rgba(200,169,110,0.03)" stroke="rgba(200,169,110,0.09)" strokeWidth="0.8" />
            <path d="M420,0 L210,146 L420,262Z" fill="rgba(200,169,110,0.03)" stroke="rgba(200,169,110,0.09)" strokeWidth="0.8" />
          </svg>

          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none" style={{ zIndex: 5 }}>
            <p className="font-sans text-champagne tracking-[0.5em] text-xs uppercase">
              You're Invited
            </p>
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-champagne/30" />
              <span className="text-dusty text-sm">✦</span>
              <div className="h-px w-10 bg-champagne/30" />
            </div>
            <p
              className="font-script italic text-espresso/50 text-base"
              style={{ fontWeight: 300 }}
            >
              {WEDDING.bride} & {WEDDING.groom}
            </p>
          </div>

          {/* Animated flap */}
          <motion.div
            className="absolute top-0 left-0 w-full pointer-events-none overflow-hidden"
            style={{ height: "131px", transformOrigin: "top center", zIndex: 20 }}
            animate={{ rotateX: stage !== "idle" ? -178 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 420 131" className="w-full h-full" preserveAspectRatio="none">
              <path
                d="M0,0 L420,0 L210,131Z"
                fill="#E2D4BC"
                stroke="rgba(200,169,110,0.2)"
                strokeWidth="0.8"
              />
            </svg>
          </motion.div>

          {/* Wax seal */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -68%)",
              zIndex: 30,
            }}
          >
            <motion.div
              animate={{
                scale: stage === "flap" ? 1.15 : 1,
                opacity: stage !== "idle" ? 0 : 1,
                y: stage === "flap" ? -12 : 0,
              }}
              transition={{ duration: 0.35 }}
            >
              <WaxSeal size={64} />
            </motion.div>
          </div>
        </div>

        {/* Tap to open */}
        <motion.p
          animate={{
            opacity: stage === "idle" ? [0.4, 1, 0.4] : 0,
          }}
          transition={
            stage === "idle"
              ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.2 }
          }
          className="text-center mt-5 font-sans text-champagne/60 text-xs tracking-[0.45em] uppercase pointer-events-none"
        >
          Tap to Open
        </motion.p>
      </motion.div>

      {/* Opening text */}
      <AnimatePresence>
        {stage === "flap" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-16 font-sans text-champagne/40 text-xs tracking-widest"
          >
            Opening your invitation...
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}