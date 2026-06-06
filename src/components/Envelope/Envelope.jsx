import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WaxSeal, FloralCornerTL, FloralCornerTR, FloralCornerBL, FloralCornerBR } from "../FloralAccents/FloralSvg";
import { WEDDING } from "../../weddingConfig";

export default function Envelope({ onOpen }) {
  const [stage, setStage]       = useState("idle");    // idle → lifting → open → done
  const [particles, setParticles] = useState([]);
  const [musicMuted, setMusicMuted] = useState(true);

  // Generate floral particles on open
  useEffect(() => {
    if (stage === "open") {
      const newParticles = Array.from({ length: 24 }, (_, i) => ({
        id: i,
        x:  Math.random() * 400 - 200,
        y:  Math.random() * -300 - 50,
        r:  Math.random() * 360,
        s:  Math.random() * 0.6 + 0.4,
        emoji: ["🌸","✿","❀","🌿","✾"][Math.floor(Math.random() * 5)],
      }));
      setParticles(newParticles);

      // After particles settle, trigger done
      setTimeout(() => {
        setStage("done");
        setTimeout(() => onOpen && onOpen(), 600);
      }, 1400);
    }
  }, [stage]);

  const handleClick = () => {
    if (stage !== "idle") return;
    setStage("lifting");
    setTimeout(() => setStage("open"), 900);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cream overflow-hidden">

      {/* Background soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,169,110,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Music toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => setMusicMuted(!musicMuted)}
        className="absolute top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-champagne/40 bg-ivory/80 backdrop-blur-sm text-champagne font-sans text-xs tracking-widest hover:bg-parchment transition-all"
      >
        {musicMuted ? "♪ Music Off" : "♪ Music On"}
      </motion.button>

      {/* Intro text above envelope */}
      <AnimatePresence>
        {stage === "idle" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-[15%] text-center"
          >
            <p
              className="text-champagne text-sm tracking-[0.4em] uppercase font-sans mb-2"
              style={{ letterSpacing: "0.35em" }}
            >
              A Special Invitation
            </p>
            <p
              className="text-espresso/40 text-xs tracking-widest font-sans"
            >
              for you
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floral particles burst */}
      <AnimatePresence>
        {stage === "open" && particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
            animate={{ opacity: 0, x: p.x, y: p.y, scale: p.s, rotate: p.r }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute pointer-events-none text-2xl"
            style={{ zIndex: 60 }}
          >
            {p.emoji}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* ── THE ENVELOPE ── */}
      <AnimatePresence>
        {stage !== "done" && (
          <motion.div
            key="envelope-wrapper"
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            animate={{
              opacity: stage === "open" ? 0 : 1,
              y:       stage === "open" ? -60 : 0,
              scale:   stage === "open" ? 0.85 : 1,
            }}
            exit={{ opacity: 0, y: -80, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onClick={handleClick}
            className="relative cursor-pointer select-none"
            style={{ zIndex: 40 }}
            whileHover={stage === "idle" ? { scale: 1.02, y: -4 } : {}}
          >
            {/* Envelope body */}
            <div
              className="relative w-[340px] md:w-[420px] bg-parchment rounded-lg overflow-visible"
              style={{
                height: "260px",
                boxShadow: "0 30px 80px rgba(60,42,30,0.18), 0 8px 24px rgba(200,169,110,0.15)",
                border: "1px solid rgba(200,169,110,0.35)",
              }}
            >
              {/* Paper texture lines */}
              {[40, 80, 120, 160, 200].map((y) => (
                <div
                  key={y}
                  className="absolute w-full pointer-events-none"
                  style={{
                    top: y,
                    height: "1px",
                    background: "rgba(200,169,110,0.06)",
                  }}
                />
              ))}

              {/* Botanical corners */}
              <FloralCornerTL className="absolute top-0 left-0"    size={90} />
              <FloralCornerTR className="absolute top-0 right-0"   size={90} />
              <FloralCornerBL className="absolute bottom-0 left-0" size={90} />
              <FloralCornerBR className="absolute bottom-0 right-0" size={90} />

              {/* Envelope flap lines (V shape) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 420 260"
                preserveAspectRatio="none"
              >
                {/* Bottom triangle fold */}
                <path
                  d="M0,260 L210,140 L420,260Z"
                  fill="rgba(200,169,110,0.07)"
                  stroke="rgba(200,169,110,0.2)"
                  strokeWidth="0.8"
                />
                {/* Left fold */}
                <path
                  d="M0,0 L210,140 L0,260Z"
                  fill="rgba(200,169,110,0.05)"
                  stroke="rgba(200,169,110,0.15)"
                  strokeWidth="0.8"
                />
                {/* Right fold */}
                <path
                  d="M420,0 L210,140 L420,260Z"
                  fill="rgba(200,169,110,0.05)"
                  stroke="rgba(200,169,110,0.15)"
                  strokeWidth="0.8"
                />
              </svg>

              {/* Main content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
                <p
                  className="text-champagne tracking-[0.5em] text-sm uppercase font-sans"
                >
                  You're Invited
                </p>

                <div className="flex items-center gap-3">
                  <div className="h-px w-12 bg-champagne/40" />
                  <span className="text-dusty text-lg">✦</span>
                  <div className="h-px w-12 bg-champagne/40" />
                </div>

                <p
                  className="font-script italic text-espresso/60 text-lg"
                  style={{ fontWeight: 300 }}
                >
                  {WEDDING.bride} & {WEDDING.groom}
                </p>
              </div>

              {/* Envelope flap (animated lid) */}
              <motion.div
                className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none"
                style={{
                  height: "130px",
                  transformOrigin: "top center",
                  zIndex: 20,
                }}
                animate={{
                  rotateX: stage === "lifting" ? -160 : 0,
                  opacity: stage === "lifting" ? 0 : 1,
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <svg
                  viewBox="0 0 420 130"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,0 L420,0 L210,130Z"
                    fill="#E8DCC8"
                    stroke="rgba(200,169,110,0.3)"
                    strokeWidth="0.8"
                  />
                  {/* Flap texture */}
                  <path
                    d="M60,0 L210,110 L360,0"
                    fill="none"
                    stroke="rgba(200,169,110,0.12)"
                    strokeWidth="0.8"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Wax seal — sits on the flap crease */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: "calc(50% - 44px)", zIndex: 30 }}
              animate={{
                scale:   stage === "lifting" ? 1.15 : 1,
                opacity: stage === "lifting" ? 0 : 1,
                y:       stage === "lifting" ? -20 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <WaxSeal size={72} />
            </motion.div>

            {/* Tap prompt below envelope */}
            <motion.div
              className="absolute -bottom-14 left-1/2 -translate-x-1/2 text-center whitespace-nowrap"
              animate={{ opacity: stage === "idle" ? [0.5, 1, 0.5] : 0 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-champagne/70 text-xs tracking-[0.4em] uppercase font-sans">
                Tap to Open
              </p>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading hint while transitioning */}
      <AnimatePresence>
        {stage === "lifting" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-[15%] text-champagne/50 text-xs tracking-widest font-sans"
          >
            Opening your invitation...
          </motion.p>
        )}
      </AnimatePresence>

    </div>
  );
}