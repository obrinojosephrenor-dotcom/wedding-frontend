import { useState } from "react";
import { motion } from "framer-motion";
import {
  WaxSeal,
  FloralCornerTL,
  FloralCornerTR,
  FloralCornerBL,
  FloralCornerBR,
} from "../FloralAccents/FloralSvg";
import { WEDDING } from "../../weddingConfig";

export default function Envelope({ onOpen }) {
  const [clicked, setClicked] = useState(false);
  const [flapOpen, setFlapOpen] = useState(false);

  function handleClick() {
    if (clicked) return;
    setClicked(true);

    // Step 1 — open the flap
    setTimeout(() => setFlapOpen(true), 100);

    // Step 2 — call onOpen after animation completes
    setTimeout(() => {
      if (onOpen) onOpen();
    }, 1200);
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cream px-4"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(200,169,110,0.07) 0%, transparent 70%), #F9F4EE",
      }}
    >
      {/* Top label */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mb-10"
      >
        <p className="font-sans text-champagne tracking-[0.45em] text-xs uppercase">
          A Special Invitation
        </p>
        <p className="font-sans text-espresso/35 text-xs tracking-widest italic mt-1">
          for you
        </p>
      </motion.div>

      {/* Envelope */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.92 }}
        animate={{
          opacity: flapOpen ? 0 : 1,
          y: flapOpen ? -60 : 0,
          scale: flapOpen ? 0.9 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onClick={handleClick}
        whileHover={!clicked ? { scale: 1.02, y: -4 } : {}}
        className="relative cursor-pointer select-none"
        style={{ zIndex: 10 }}
      >
        {/* Envelope body */}
        <div
          className="relative bg-parchment rounded-lg overflow-hidden"
          style={{
            width: "clamp(280px, 75vw, 420px)",
            height: "clamp(190px, 48vw, 265px)",
            boxShadow:
              "0 24px 64px rgba(60,42,30,0.15), 0 6px 20px rgba(200,169,110,0.13)",
            border: "1px solid rgba(200,169,110,0.28)",
          }}
        >
          {/* Corners */}
          <FloralCornerTL
            className="absolute top-0 left-0 pointer-events-none"
            size={75}
          />
          <FloralCornerTR
            className="absolute top-0 right-0 pointer-events-none"
            size={75}
          />
          <FloralCornerBL
            className="absolute bottom-0 left-0 pointer-events-none"
            size={75}
          />
          <FloralCornerBR
            className="absolute bottom-0 right-0 pointer-events-none"
            size={75}
          />

          {/* Fold lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 420 265"
            preserveAspectRatio="none"
          >
            <path
              d="M0,265 L210,148 L420,265Z"
              fill="rgba(200,169,110,0.055)"
              stroke="rgba(200,169,110,0.16)"
              strokeWidth="0.8"
            />
            <path
              d="M0,0 L210,148 L0,265Z"
              fill="rgba(200,169,110,0.035)"
              stroke="rgba(200,169,110,0.1)"
              strokeWidth="0.8"
            />
            <path
              d="M420,0 L210,148 L420,265Z"
              fill="rgba(200,169,110,0.035)"
              stroke="rgba(200,169,110,0.1)"
              strokeWidth="0.8"
            />
          </svg>

          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none">
            <p className="font-sans text-champagne tracking-[0.5em] text-xs uppercase">
              You're Invited
            </p>
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-champagne/30" />
              <span className="text-dusty">✦</span>
              <div className="h-px w-10 bg-champagne/30" />
            </div>
            <p
              className="font-script italic text-espresso/50 text-lg"
              style={{ fontWeight: 300 }}
            >
              {WEDDING.bride} & {WEDDING.groom}
            </p>
          </div>

          {/* Flap */}
          <motion.div
            className="absolute top-0 left-0 w-full pointer-events-none"
            style={{
              height: "133px",
              transformOrigin: "top center",
              zIndex: 20,
            }}
            animate={{ rotateX: flapOpen ? -175 : 0 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          >
            <svg
              viewBox="0 0 420 133"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 L420,0 L210,133Z"
                fill="#E8DCC8"
                stroke="rgba(200,169,110,0.22)"
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
              transform: "translate(-50%, -65%)",
              zIndex: 30,
            }}
          >
            <WaxSeal size={66} />
          </div>
        </div>

        {/* Tap to open */}
        <motion.div
          animate={{ opacity: clicked ? 0 : [0.45, 1, 0.45] }}
          transition={
            clicked
              ? { duration: 0.2 }
              : { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
          }
          className="text-center mt-6 pointer-events-none"
        >
          <p className="font-sans text-champagne/60 text-xs tracking-[0.45em] uppercase">
            Tap to Open
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}