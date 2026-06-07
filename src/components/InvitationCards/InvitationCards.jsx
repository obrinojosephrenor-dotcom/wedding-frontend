import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FloralCornerTL, FloralCornerTR,
  FloralCornerBL, FloralCornerBR,
  FloralDivider, WaxSeal
} from "../FloralAccents/FloralSvg";
import { WEDDING } from "../../weddingConfig";

// ─── Shared card wrapper ───────────────────────────────────────────
function CardShell({ children, className = "", style = {}, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`relative bg-ivory rounded-lg overflow-hidden select-none ${className}`}
      style={{
        boxShadow: "0 8px 40px rgba(44,59,40,0.13), 0 2px 8px rgba(68,92,63,0.1)",
        border: "1px solid rgba(68,92,63,0.25)",
        ...style,
      }}
    >
      {/* Paper grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// ─── Card 1 — Main Invitation ──────────────────────────────────────
function MainCard() {
  const [day, month, year] = new Date(WEDDING.date)
    .toDateString().split(" ").slice(0, 4);

  const formattedDate = new Date(WEDDING.date).toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  return (
    <CardShell className="w-full max-w-sm mx-auto px-8 py-10">
      {/* Corners */}
      <FloralCornerTL className="absolute top-0 left-0"     size={80} />
      <FloralCornerTR className="absolute top-0 right-0"    size={80} />
      <FloralCornerBL className="absolute bottom-0 left-0"  size={80} />
      <FloralCornerBR className="absolute bottom-0 right-0" size={80} />
        
      {/* Bride & Groom names */}
      <div className="text-center mb-2">
        <h1
          className="font-script italic text-espresso leading-tight"
          style={{ fontSize: "clamp(2rem, 6vw, 2.8rem)", fontWeight: 300 }}
        >
          {WEDDING.bride}
        </h1>
        <p className="text-champagne font-sans text-sm tracking-widest my-2">&</p>
        <h1
          className="font-script italic text-espresso leading-tight"
          style={{ fontSize: "clamp(2rem, 6vw, 2.8rem)", fontWeight: 300 }}
        >
          {WEDDING.groom}
        </h1>
      </div>

      <div className="flex justify-center my-4">
        <FloralDivider />
      </div>

      {/* Request line */}
      <p
        className="text-center text-espresso/60 font-sans text-xs tracking-widest mb-6"
        style={{ fontStyle: "italic" }}
      >
        request the honour of your presence
      </p>

      {/* Date block */}
      <div
        className="mx-auto text-center px-6 py-4 mb-4 rounded"
        style={{ background: "rgba(68,92,63,0.07)", border: "1px solid rgba(68,92,63,0.2)" }}
      >
        <p className="font-script italic text-champagne text-lg mb-1">{formattedDate}</p>
        <p className="font-sans text-xs text-espresso/50 tracking-widest">
          {WEDDING.time}
        </p>
      </div>

      {/* Venue */}
      <div className="text-center mt-3">
        <p className="font-serif text-espresso/80 text-sm tracking-wide">
          {WEDDING.ceremony.venue}
        </p>
        <p className="font-sans text-espresso/45 text-xs mt-1 tracking-wide">
          {WEDDING.ceremony.address}
        </p>
      </div>

      {/* Bottom seal */}
      <div className="flex justify-center mt-6">
        <WaxSeal size={44} />
      </div>
    </CardShell>
  );
}

// ─── Card 2 — RSVP ────────────────────────────────────────────────
function RSVPCard({ onClick }) {
  return (
    <CardShell
      onClick={onClick}
      className="w-full max-w-sm mx-auto px-8 py-8 cursor-pointer group"
      style={{ background: "#eceee3" }}
    >
      <FloralCornerTL className="absolute top-0 left-0"  size={60} />
      <FloralCornerBR className="absolute bottom-0 right-0" size={60} />

      <div className="text-center">
        {/* Label */}
        <p className="text-champagne tracking-[0.5em] text-xs uppercase font-sans mb-4">
          R·S·V·P
        </p>

        <div className="flex justify-center mb-4">
          <FloralDivider />
        </div>

        <p
          className="font-script italic text-espresso/70 text-xl mb-3"
          style={{ fontWeight: 300 }}
        >
          Kindly reply by
        </p>

        <p className="font-serif text-champagne text-base tracking-wide mb-5">
          {new Date(new Date(WEDDING.date).getTime() - 14 * 24 * 60 * 60 * 1000)
            .toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <p className="font-sans text-espresso/45 text-xs tracking-widest mb-6">
          We joyfully await your response
        </p>

        {/* CTA */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-8 py-3 rounded font-sans text-xs tracking-[0.3em] uppercase"
          style={{
            background: "linear-gradient(135deg, #445c3f, #7d936c)",
            color: "#f4f6ee",
            boxShadow: "0 4px 16px rgba(68,92,63,0.3)",
          }}
        >
          Tap to RSVP
        </motion.div>

        <p className="font-sans text-espresso/30 text-xs mt-4 tracking-wider">
          ✦ tap anywhere on this card ✦
        </p>
      </div>
    </CardShell>
  );
}

// ─── Card 3 — Details ─────────────────────────────────────────────
function DetailsCard({ onClick }) {
  return (
    <CardShell
      onClick={onClick}
      className="w-full max-w-sm mx-auto px-8 py-8 cursor-pointer group"
      style={{ background: "#eceee3" }}
    >
      <FloralCornerTR className="absolute top-0 right-0" size={60} />
      <FloralCornerBL className="absolute bottom-0 left-0" size={60} />

      <div className="text-center">
        <p className="text-sage tracking-[0.45em] text-xs uppercase font-sans mb-4">
          Wedding Details
        </p>

        <div className="flex justify-center mb-5">
          <FloralDivider />
        </div>

        {/* Info rows */}
        {[
          { label: "Ceremony",  value: WEDDING.ceremony.venue,   sub: WEDDING.ceremony.time },
          { label: "Reception", value: WEDDING.reception.venue,  sub: WEDDING.reception.time },
          { label: "Dress Code", value: "Garden Formal",         sub: "Soft florals & earth tones" },
        ].map((item, i) => (
          <div key={i} className="mb-4 last:mb-0">
            <p className="font-sans text-espresso/40 text-xs tracking-widest uppercase mb-1">
              {item.label}
            </p>
            <p className="font-serif text-espresso/80 text-sm">{item.value}</p>
            <p className="font-sans text-espresso/40 text-xs mt-0.5">{item.sub}</p>
            {i < 2 && <div className="h-px bg-champagne/15 mt-3" />}
          </div>
        ))}

        <div className="flex justify-center mt-5 mb-4">
          <FloralDivider />
        </div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-8 py-3 rounded font-sans text-xs tracking-[0.3em] uppercase"
          style={{
            background: "linear-gradient(135deg, #7d936c, #aab992)",
            color: "#f4f6ee",
            boxShadow: "0 4px 16px rgba(125,147,108,0.3)",
          }}
        >
          Tap for All Details
        </motion.div>
      </div>
    </CardShell>
  );
}

// ─── Main export ──────────────────────────────────────────────────
export default function InvitationCards() {
  const navigate    = useNavigate();
  const [activeCard, setActiveCard] = useState(0);
  const cards = ["invitation", "rsvp", "details"];

  return (
    <div className="min-h-screen bg-cream py-12 px-4">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <p className="font-sans text-champagne tracking-[0.5em] text-xs uppercase mb-2">
          Your Invitation Suite
        </p>
        <p className="font-script italic text-espresso/40 text-sm" style={{ fontWeight: 300 }}>
          swipe or tap the dots to browse
        </p>
      </motion.div>

      {/* Card switcher */}
      <div className="relative max-w-sm mx-auto">

        {/* Stack shadow cards behind */}
        {cards.map((_, i) => {
          if (i === activeCard) return null;
          const offset = i - activeCard;
          return (
            <div
              key={i}
              className="absolute inset-0 bg-parchment rounded-lg"
              style={{
                transform: `translateY(${offset * 6}px) scale(${1 - Math.abs(offset) * 0.03})`,
                zIndex: cards.length - Math.abs(offset),
                opacity: 1 - Math.abs(offset) * 0.3,
                border: "1px solid rgba(68,92,63,0.2)",
              }}
            />
          );
        })}

        {/* Active card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{    opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            style={{ position: "relative", zIndex: 20 }}
          >
            {activeCard === 0 && <MainCard />}
            {activeCard === 1 && (
              <RSVPCard onClick={() => navigate("/rsvp")} />
            )}
            {activeCard === 2 && (
              <DetailsCard onClick={() => navigate("/details")} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot navigation */}
      <div className="flex justify-center gap-3 mt-8">
        {cards.map((label, i) => (
          <button
            key={i}
            onClick={() => setActiveCard(i)}
            aria-label={`View ${label} card`}
            className="transition-all duration-300"
          >
            <div
              className="rounded-full transition-all duration-300"
              style={{
                width:      i === activeCard ? "28px" : "8px",
                height:     "8px",
                background: i === activeCard
                  ? "linear-gradient(135deg, #445c3f, #7d936c)"
                  : "rgba(68,92,63,0.3)",
              }}
            />
          </button>
        ))}
      </div>

      {/* Card labels */}
      <div className="flex justify-center mt-3">
        <p className="font-sans text-espresso/35 text-xs tracking-widest uppercase">
          {["Invitation", "R·S·V·P", "Details"][activeCard]}
        </p>
      </div>

      {/* Navigation arrows */}
      <div className="flex justify-center gap-6 mt-5">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setActiveCard((p) => Math.max(0, p - 1))}
          disabled={activeCard === 0}
          className="w-10 h-10 rounded-full flex items-center justify-center font-sans text-champagne transition-all"
          style={{
            border: "1px solid rgba(68,92,63,0.35)",
            background: "rgba(68,92,63,0.06)",
            opacity: activeCard === 0 ? 0.3 : 1,
          }}
        >
          ←
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setActiveCard((p) => Math.min(cards.length - 1, p + 1))}
          disabled={activeCard === cards.length - 1}
          className="w-10 h-10 rounded-full flex items-center justify-center font-sans text-champagne transition-all"
          style={{
            border: "1px solid rgba(68,92,63,0.35)",
            background: "rgba(68,92,63,0.06)",
            opacity: activeCard === cards.length - 1 ? 0.3 : 1,
          }}
        >
          →
        </motion.button>
      </div>

      {/* Scroll hint to love story */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-center mt-14"
      >
        <p className="font-sans text-espresso/30 text-xs tracking-widest uppercase mb-2">
          scroll to explore our story
        </p>
        <motion.p
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="text-champagne/50 text-lg"
        >
          ↓
        </motion.p>
      </motion.div>

    </div>
  );
}
