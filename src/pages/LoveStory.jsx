import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FloralCornerTL, FloralCornerTR,
  FloralCornerBL, FloralCornerBR,
  FloralDivider, WaxSeal,
} from "../components/FloralAccents/FloralSvg";
import { WEDDING } from "../weddingConfig";

// ─── Replace these URLs with your real Cloudinary prenuptial photos ─
const PHOTOS = [
  "https://res.cloudinary.com/drhkmwcsg/image/upload/v1780828555/YET08069_vvhfdn.jpg",
  "https://res.cloudinary.com/drhkmwcsg/image/upload/v1780828552/YET07603_lwndoa.jpg",
  "https://res.cloudinary.com/drhkmwcsg/image/upload/v1780828554/YET08044_v0yymi.jpg",
  "https://res.cloudinary.com/drhkmwcsg/image/upload/v1780828552/YET07985_qtcpav.jpg",
  "https://res.cloudinary.com/drhkmwcsg/image/upload/v1780828555/YET07880_rrj2ni.jpg",
  "https://res.cloudinary.com/drhkmwcsg/image/upload/v1780828554/YET07777_hl85tb.jpg",
  "https://res.cloudinary.com/drhkmwcsg/image/upload/v1780828550/YET07810_nso38o.jpg",
  "https://res.cloudinary.com/drhkmwcsg/image/upload/v1780828551/YET07597_beqaho.jpg"
];

// ─── Lightbox ──────────────────────────────────────────────────────
function Lightbox({ photo, onClose, onPrev, onNext, hasPrev, hasNext }) {
  if (!photo) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(20,35,18,0.95)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.88, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.88, y: 20 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative max-w-3xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 font-sans text-xs tracking-widest uppercase z-10"
          style={{ color: "rgba(236,238,227,0.6)" }}
        >
          Close
        </button>

        {/* Image */}
        <img
          src={photo}
          alt="Prenuptial photo"
          className="w-full object-cover rounded-lg"
          style={{ maxHeight: "80vh", objectFit: "contain" }}
        />

        {/* Prev */}
        {hasPrev && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-full flex items-center justify-center font-sans"
            style={{
              background: "rgba(68,92,63,0.4)",
              color: "#eceee3",
              border: "1px solid rgba(68,92,63,0.5)",
            }}
          >
            ←
          </button>
        )}

        {/* Next */}
        {hasNext && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-full flex items-center justify-center font-sans"
            style={{
              background: "rgba(68,92,63,0.4)",
              color: "#eceee3",
              border: "1px solid rgba(68,92,63,0.5)",
            }}
          >
            →
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}

// ─── Single photo tile ─────────────────────────────────────────────
function PhotoTile({ url, index, onClick }) {
  const rotations = [-1.5, 1, -0.8, 1.8, -1.2, 0.6, -1.8, 1.4, -0.5, 1.6, -1.1, 0.9, -1.6, 1.2, -0.7];
  const rotate = rotations[index % rotations.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotate * 1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.55, delay: (index % 6) * 0.07 }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
      onClick={() => onClick(index)}
      className="cursor-pointer break-inside-avoid mb-4"
      style={{ transformOrigin: "center" }}
    >
      <div
        className="bg-white p-2 shadow-md overflow-hidden"
        style={{
          boxShadow: "0 6px 24px rgba(44,59,40,0.14), 0 2px 6px rgba(44,59,40,0.08)",
        }}
      >
        <img
          src={url}
          alt="Our prenuptial photo"
          className="w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
          style={{ display: "block" }}
        />
      </div>
    </motion.div>
  );
}

// ─── Main export ───────────────────────────────────────────────────
export default function LoveStory() {
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  function openPhoto(index) {
    setLightboxIndex(index);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function prevPhoto() {
    setLightboxIndex((i) => Math.max(0, i - 1));
  }

  function nextPhoto() {
    setLightboxIndex((i) => Math.min(PHOTOS.length - 1, i + 1));
  }

  return (
    <div className="min-h-screen" style={{ background: "#eceee3" }}>

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => navigate("/")}
        className="fixed top-5 left-5 z-50 font-sans text-xs tracking-widest px-4 py-2 rounded-full transition-opacity hover:opacity-80"
        style={{
          color: "#445c3f",
          background: "rgba(244,246,238,0.85)",
          border: "1px solid rgba(68,92,63,0.25)",
          backdropFilter: "blur(8px)",
        }}
      >
        Back
      </motion.button>

      {/* HERO */}
      <div
        className="relative text-center py-20 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #d6dfc6 0%, #eceee3 100%)",
          borderBottom: "1px solid rgba(68,92,63,0.12)",
        }}
      >
        <FloralCornerTL className="absolute top-0 left-0" size={120} />
        <FloralCornerTR className="absolute top-0 right-0" size={120} />
        <FloralCornerBL className="absolute bottom-0 left-0" size={80} />
        <FloralCornerBR className="absolute bottom-0 right-0" size={80} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <p
            className="font-sans tracking-[0.6em] text-xs uppercase mb-5"
            style={{ color: "#445c3f" }}
          >
            Prenuptial Photos
          </p>
          <h1
            className="font-script italic mb-2"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "#2c3b28",
            }}
          >
            {WEDDING.bride}
          </h1>
          <p
            className="font-sans text-lg mb-2 tracking-widest"
            style={{ color: "#445c3f" }}
          >
            &
          </p>
          <h1
            className="font-script italic mb-8"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "#2c3b28",
            }}
          >
            {WEDDING.groom}
          </h1>
          <div className="flex justify-center mb-6">
            <FloralDivider />
          </div>
          <div className="flex justify-center">
            <WaxSeal size={48} />
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="font-sans text-xs tracking-[0.4em] uppercase text-center"
        >
          <p
            className="font-sans text-xs tracking-[0.4em] uppercase"
            style={{ color: "rgba(68,92,63,0.4)" }}
          >
            scroll to view
          </p>
        </motion.div>
      </div>

      {/* Photo masonry grid */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="columns-2 sm:columns-3 md:columns-4 gap-4">
          {PHOTOS.map((url, i) => (
            <PhotoTile
              key={i}
              url={url}
              index={i}
              onClick={openPhoto}
            />
          ))}
        </div>
      </div>

      {/* Bottom closing */}
      <div
        className="relative text-center py-14 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #eceee3 0%, #d6dfc6 100%)",
          borderTop: "1px solid rgba(68,92,63,0.1)",
        }}
      >
        <FloralCornerBL className="absolute bottom-0 left-0" size={100} />
        <FloralCornerBR className="absolute bottom-0 right-0" size={100} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="flex justify-center mb-5">
            <WaxSeal size={48} />
          </div>
          <p
            className="font-script italic mb-4"
            style={{
              fontSize: "clamp(1.4rem, 4vw, 2rem)",
              fontWeight: 300,
              color: "#445c3f",
            }}
          >
            See You on Our Special Day
          </p>
          <div className="flex justify-center mb-6">
            <FloralDivider />
          </div>
          <div className="flex justify-center gap-3 flex-wrap">
            <button
              onClick={() => navigate("/rsvp")}
              className="px-7 py-3 rounded font-sans text-xs tracking-[0.35em] uppercase"
              style={{
                background: "linear-gradient(135deg, #445c3f, #7d936c)",
                color: "#eceee3",
                boxShadow: "0 4px 16px rgba(68,92,63,0.3)",
              }}
            >
              RSVP Now
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-7 py-3 rounded font-sans text-xs tracking-[0.35em] uppercase"
              style={{
                border: "1px solid rgba(68,92,63,0.35)",
                color: "#445c3f",
              }}
            >
              Back to Invitation
            </button>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photo={PHOTOS[lightboxIndex]}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
            hasPrev={lightboxIndex > 0}
            hasNext={lightboxIndex < PHOTOS.length - 1}
          />
        )}
      </AnimatePresence>

    </div>
  );
}