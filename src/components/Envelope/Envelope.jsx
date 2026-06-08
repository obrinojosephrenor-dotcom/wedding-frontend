import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  WaxSeal, FloralCornerTL, FloralCornerTR,
  FloralCornerBL, FloralCornerBR,
} from "../FloralAccents/FloralSvg";
import { WEDDING } from "../../weddingConfig";

function Petal({ x, y, rotate, emoji, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 0, rotate: 0, scale: 1 }}
      animate={{ opacity: [0, 0.8, 0], x, y, rotate, scale: 0.6 }}
      transition={{ duration: 1.8, delay, ease: "easeOut" }}
      className="absolute pointer-events-none text-lg"
      style={{ zIndex: 100, left: "50%", top: "50%" }}
    >
      {emoji}
    </motion.div>
  );
}

export default function Envelope({ onOpen }) {
  const [stage, setStage] = useState("idle");
  const [showPetals, setShowPetals] = useState(false);

  const petals = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 380,
    y: -(Math.random() * 300 + 60),
    rotate: Math.random() * 720 - 360,
    delay: Math.random() * 0.5,
    emoji: ["🌸", "🌺", "🌼", "🌷", "✿", "❀"][i % 6],
  }));

  function handleClick() {
    if (stage !== "idle") return;
    setStage("flap");
    setTimeout(() => setShowPetals(true), 500);
    setTimeout(() => setStage("card"), 900);
    setTimeout(() => {
      setStage("done");
      window.dispatchEvent(new Event("envelope-opened"));
      if (typeof onOpen === "function") onOpen();
    }, 1700);
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 100% 80% at 30% 20%, rgba(247,214,224,0.25) 0%, transparent 55%), radial-gradient(ellipse 80% 60% at 70% 80%, rgba(221,234,247,0.2) 0%, transparent 55%), #FAF9F6",
      }}
    >
      {/* Floating corner florals */}
      <div className="absolute top-0 left-0 pointer-events-none" style={{ zIndex: 1 }}>
        <FloralCornerTL size={160} />
      </div>
      <div className="absolute top-0 right-0 pointer-events-none" style={{ zIndex: 1 }}>
        <FloralCornerTR size={160} />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none" style={{ zIndex: 1 }}>
        <FloralCornerBL size={130} />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none" style={{ zIndex: 1 }}>
        <FloralCornerBR size={130} />
      </div>

      {/* Petals */}
      <AnimatePresence>
        {showPetals && petals.map((p) => (
          <Petal key={p.id} x={p.x} y={p.y} rotate={p.rotate} emoji={p.emoji} delay={p.delay} />
        ))}
      </AnimatePresence>

      {/* Top label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: stage === "idle" ? 1 : 0, y: stage === "idle" ? 0 : -30 }}
        transition={{ duration: 0.8, delay: stage === "idle" ? 0.5 : 0 }}
        className="text-center mb-10 absolute"
        style={{ top: "12%", zIndex: 5 }}
      >
        <p style={{
          fontFamily: "'Bodoni Moda', 'Cormorant Garamond', serif",
          fontSize: "clamp(1rem, 3vw, 1.35rem)",
          fontStyle: "italic",
          fontWeight: 400,
          color: "#C9A96E",
          letterSpacing: "0.3em",
          marginBottom: "6px",
        }}>
          A Special Invitation
        </p>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
          fontStyle: "italic",
          color: "rgba(74,74,74,0.45)",
          letterSpacing: "0.3em",
        }}>
          for you
        </p>
      </motion.div>

      {/* Envelope */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.92 }}
        animate={{
          opacity: stage === "card" || stage === "done" ? 0 : 1,
          y: stage === "card" || stage === "done" ? -100 : 0,
          scale: stage === "card" || stage === "done" ? 0.88 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onClick={handleClick}
        whileHover={stage === "idle" ? { scale: 1.02, y: -5 } : {}}
        className="relative select-none"
        style={{ cursor: stage === "idle" ? "pointer" : "default", zIndex: 10 }}
      >
        <div
          className="relative rounded-xl"
          style={{
            width: "clamp(300px, 78vw, 440px)",
            height: "clamp(200px, 50vw, 275px)",
            background: "linear-gradient(145deg, #FFFFFF 0%, #FAF9F6 50%, #FDF8F5 100%)",
            boxShadow: "0 20px 60px rgba(247,214,224,0.4), 0 8px 24px rgba(221,234,247,0.3), 0 2px 8px rgba(0,0,0,0.04)",
            border: "1px solid rgba(247,214,224,0.5)",
          }}
        >
          {/* Corner florals on envelope */}
          <FloralCornerTL className="absolute top-0 left-0 pointer-events-none" size={85} />
          <FloralCornerTR className="absolute top-0 right-0 pointer-events-none" size={85} />
          <FloralCornerBL className="absolute bottom-0 left-0 pointer-events-none" size={75} />
          <FloralCornerBR className="absolute bottom-0 right-0 pointer-events-none" size={75} />

          {/* Fold lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 440 275" preserveAspectRatio="none">
            <path d="M0,275 L220,155 L440,275Z" fill="rgba(247,214,224,0.08)" stroke="rgba(247,214,224,0.3)" strokeWidth="0.8"/>
            <path d="M0,0 L220,155 L0,275Z"    fill="rgba(221,234,247,0.05)" stroke="rgba(221,234,247,0.2)" strokeWidth="0.8"/>
            <path d="M440,0 L220,155 L440,275Z" fill="rgba(221,234,247,0.05)" stroke="rgba(221,234,247,0.2)" strokeWidth="0.8"/>
          </svg>

          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none" style={{ zIndex: 5 }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)", letterSpacing: "0.55em", color: "#C9A96E", textTransform: "uppercase" }}>
              You're Invited
            </p>
            <div className="flex items-center gap-3 my-1">
              <div className="h-px w-10" style={{ background: "rgba(247,214,224,0.6)" }}/>
              <span style={{ color: "#F4C6D4", fontSize: "1rem" }}>✦</span>
              <div className="h-px w-10" style={{ background: "rgba(247,214,224,0.6)" }}/>
            </div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1rem, 2.5vw, 1.3rem)", fontStyle: "italic", fontWeight: 300, color: "rgba(74,74,74,0.65)" }}>
              {WEDDING.bride} & {WEDDING.groom}
            </p>
          </div>

          {/* Animated flap */}
          <motion.div
            className="absolute top-0 left-0 w-full pointer-events-none overflow-hidden"
            style={{ height: "138px", transformOrigin: "top center", zIndex: 20 }}
            animate={{ rotateX: stage !== "idle" ? -178 : 0 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 440 138" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,0 L440,0 L220,138Z"
                fill="url(#flapGrad)"
                stroke="rgba(247,214,224,0.4)" strokeWidth="0.8"/>
              <defs>
                <linearGradient id="flapGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF"/>
                  <stop offset="100%" stopColor="#FFF0F4"/>
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Wax seal */}
          <div className="absolute pointer-events-none"
            style={{ left: "50%", top: "50%", transform: "translate(-50%, -68%)", zIndex: 30 }}>
            <motion.div
              animate={{
                scale: stage === "flap" ? 1.15 : 1,
                opacity: stage !== "idle" ? 0 : 1,
                y: stage === "flap" ? -12 : 0,
              }}
              transition={{ duration: 0.35 }}
            >
              <WaxSeal size={66} />
            </motion.div>
          </div>
        </div>

        {/* Tap to open */}
        <motion.p
          animate={{ opacity: stage === "idle" ? [0.4, 1, 0.4] : 0 }}
          transition={stage === "idle"
            ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.2 }}
          className="text-center mt-5 font-sans text-xs tracking-[0.45em] uppercase pointer-events-none"
          style={{ color: "rgba(201,169,110,0.7)" }}
        >
          Tap to Open
        </motion.p>
      </motion.div>

      {/* Opening hint */}
      <AnimatePresence>
        {stage === "flap" && (
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute bottom-16 font-sans text-xs tracking-widest"
            style={{ color: "rgba(74,74,74,0.4)", zIndex: 5 }}
          >
            Opening your invitation...
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}