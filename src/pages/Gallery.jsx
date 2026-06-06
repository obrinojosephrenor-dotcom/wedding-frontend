import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import {
  FloralCornerTL, FloralCornerTR,
  FloralCornerBL, FloralCornerBR,
  FloralDivider, WaxSeal,
} from "../components/FloralAccents/FloralSvg";
import FloralAccents from "../components/FloralAccents/FloralAccents";
import { WEDDING } from "../weddingConfig";

// ─── Photo lightbox ────────────────────────────────────────────────
function Lightbox({ photo, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  hasPrev && onPrev();
      if (e.key === "ArrowRight") hasNext && onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [hasPrev, hasNext]);

  if (!photo) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{    opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background:     "rgba(20,12,6,0.94)",
        backdropFilter: "blur(12px)",
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.88, y: 24 }}
        animate={{ scale: 1,    y: 0  }}
        exit={{    scale: 0.88, y: 24 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Polaroid frame */}
        <div
          className="bg-white p-3 pb-16"
          style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.6)" }}
        >
          {/* Image */}
          <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
            <img
              src={photo.url}
              alt={photo.guest_name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Polaroid text */}
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-center">
            <p
              className="font-script italic text-espresso/70 mb-0.5"
              style={{ fontSize: "1rem", fontWeight: 300 }}
            >
              {photo.guest_name || "Anonymous"}
            </p>
            <p className="font-sans text-espresso/40 text-xs">
              📍 Table {photo.table_number} ·{" "}
              {photo.uploaded_at
                ? new Date(photo.uploaded_at).toLocaleDateString("en-US", {
                    month: "short", day: "numeric",
                  })
                : ""}
            </p>
          </div>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-9 h-9 rounded-full flex items-center justify-center font-sans text-ivory/80 hover:text-ivory transition-colors"
          style={{ background: "rgba(200,169,110,0.3)", border: "1px solid rgba(200,169,110,0.4)" }}
        >
          ✕
        </button>

        {/* Prev */}
        {hasPrev && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-full flex items-center justify-center font-sans text-ivory/60 hover:text-ivory transition-colors"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            ←
          </button>
        )}

        {/* Next */}
        {hasNext && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-full flex items-center justify-center font-sans text-ivory/60 hover:text-ivory transition-colors"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            →
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}

// ─── Single photo tile ─────────────────────────────────────────────
function PhotoTile({ photo, index, onClick, isNew }) {
  const rotations = [-1.5, 1, -0.8, 1.8, -1.2, 0.6, -1.8, 1.4];
  const rotate    = rotations[index % rotations.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: rotate * 2 }}
      animate={{ opacity: 1, scale: 1,    rotate }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.4) }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
      onClick={() => onClick(index)}
      className="cursor-pointer relative break-inside-avoid"
      style={{ transformOrigin: "center" }}
    >
      {/* New badge */}
      <AnimatePresence>
        {isNew && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{    scale: 0, opacity: 0 }}
            className="absolute -top-2 -left-2 z-10 px-2 py-0.5 rounded-full font-sans text-white"
            style={{
              background:    "linear-gradient(135deg, #C8A96E, #D4B87A)",
              fontSize:      "9px",
              letterSpacing: "0.05em",
            }}
          >
            NEW ✦
          </motion.div>
        )}
      </AnimatePresence>

      {/* Polaroid */}
      <div
        className="bg-white p-2.5 pb-9"
        style={{
          boxShadow: "0 6px 24px rgba(60,42,30,0.14), 0 2px 6px rgba(60,42,30,0.08)",
        }}
      >
        <div style={{ aspectRatio: "1/1", overflow: "hidden" }}>
          <img
            src={photo.url}
            alt={photo.guest_name || "Guest photo"}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Polaroid caption */}
        <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5 text-center">
          <p
            className="font-script italic text-espresso/60 truncate"
            style={{ fontSize: "0.75rem", fontWeight: 300 }}
          >
            {photo.guest_name || "A wedding guest"}
          </p>
          <p className="font-sans text-espresso/35 truncate" style={{ fontSize: "9px" }}>
            Table {photo.table_number}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Empty state ───────────────────────────────────────────────────
function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="col-span-full text-center py-24 px-4"
    >
      <div className="flex justify-center mb-6">
        <WaxSeal size={64} />
      </div>
      <p
        className="font-script italic text-espresso/50 mb-3"
        style={{ fontSize: "1.6rem", fontWeight: 300 }}
      >
        No photos yet
      </p>
      <p className="font-sans text-espresso/35 text-sm tracking-wide max-w-xs mx-auto">
        Guest photos will appear here once they scan the QR codes at their tables ✦
      </p>
    </motion.div>
  );
}

// ─── Filter bar ────────────────────────────────────────────────────
function FilterBar({ tables, activeTable, onTableChange, totalCount }) {
  return (
    <div className="flex items-center gap-2 flex-wrap justify-center py-5 px-4">
      <button
        onClick={() => onTableChange("all")}
        className="px-4 py-1.5 rounded-full font-sans text-xs tracking-widest transition-all"
        style={{
          background: activeTable === "all"
            ? "linear-gradient(135deg, #C8A96E, #D4B87A)"
            : "rgba(200,169,110,0.08)",
          color:  activeTable === "all" ? "#FAF6F0" : "#C8A96E",
          border: `1px solid rgba(200,169,110,${activeTable === "all" ? 0 : 0.3})`,
        }}
      >
        All ({totalCount})
      </button>
      {tables.map((t) => (
        <button
          key={t.number}
          onClick={() => onTableChange(t.number)}
          className="px-4 py-1.5 rounded-full font-sans text-xs tracking-widest transition-all"
          style={{
            background: activeTable === t.number
              ? "linear-gradient(135deg, #C8A96E, #D4B87A)"
              : "rgba(200,169,110,0.08)",
            color:  activeTable === t.number ? "#FAF6F0" : "#C8A96E",
            border: `1px solid rgba(200,169,110,${activeTable === t.number ? 0 : 0.3})`,
          }}
        >
          Table {t.number} ({t.count})
        </button>
      ))}
    </div>
  );
}

// ─── Main export ───────────────────────────────────────────────────
export default function Gallery() {
  const navigate = useNavigate();

  const [photos,       setPhotos]       = useState([]);
  const [loading,      setLoading]      = useState(true);
  const [error,        setError]        = useState("");
  const [lightboxIdx,  setLightboxIdx]  = useState(null);
  const [activeTable,  setActiveTable]  = useState("all");
  const [newPhotoIds,  setNewPhotoIds]  = useState(new Set());
  const [liveCount,    setLiveCount]    = useState(0);

  // ─── Initial fetch ───────────────────────────────────────────
  useEffect(() => {
    async function fetchPhotos() {
      try {
        const { data, error } = await supabase
          .from("photos")
          .select("*")
          .order("uploaded_at", { ascending: false });
        if (error) throw error;
        setPhotos(data || []);
        setLiveCount(data?.length || 0);
      } catch (err) {
        setError("Could not load photos. Please refresh.");
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, []);

  // ─── Real-time subscription ──────────────────────────────────
  useEffect(() => {
    const channel = supabase
      .channel("gallery-realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "photos" },
        (payload) => {
          const newPhoto = payload.new;
          setPhotos((prev) => [newPhoto, ...prev]);
          setLiveCount((c) => c + 1);

          // Mark as new for 8 seconds
          setNewPhotoIds((prev) => new Set([...prev, newPhoto.id]));
          setTimeout(() => {
            setNewPhotoIds((prev) => {
              const next = new Set(prev);
              next.delete(newPhoto.id);
              return next;
            });
          }, 8000);
        }
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  // ─── Filtered photos ─────────────────────────────────────────
  const filtered = activeTable === "all"
    ? photos
    : photos.filter((p) => p.table_number === activeTable);

  // ─── Table summary ───────────────────────────────────────────
  const tables = Object.entries(
    photos.reduce((acc, p) => {
      const t = p.table_number || "unknown";
      acc[t]  = (acc[t] || 0) + 1;
      return acc;
    }, {})
  )
    .map(([number, count]) => ({ number, count }))
    .sort((a, b) => Number(a.number) - Number(b.number));

  // ─── Lightbox helpers ────────────────────────────────────────
  const openLightbox  = (idx) => setLightboxIdx(idx);
  const closeLightbox = ()    => setLightboxIdx(null);
  const prevPhoto     = ()    => setLightboxIdx((i) => Math.max(0, i - 1));
  const nextPhoto     = ()    => setLightboxIdx((i) => Math.min(filtered.length - 1, i + 1));

  return (
    <div className="min-h-screen bg-cream">
      <FloralAccents active={photos.length > 0} count={6} />

      {/* Back */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => navigate("/")}
        className="fixed top-5 left-5 z-50 flex items-center gap-2 font-sans text-xs text-champagne/70 tracking-widest hover:text-champagne transition-colors bg-ivory/80 backdrop-blur-sm px-4 py-2 rounded-full"
        style={{ border: "1px solid rgba(200,169,110,0.3)" }}
      >
        ← Back
      </motion.button>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div
        className="relative text-center py-16 px-6 overflow-hidden"
        style={{
          background:   "linear-gradient(180deg, #F0E8DC 0%, #F9F4EE 100%)",
          borderBottom: "1px solid rgba(200,169,110,0.15)",
        }}
      >
        <FloralCornerTL className="absolute top-0 left-0"  size={100} />
        <FloralCornerTR className="absolute top-0 right-0" size={100} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y:  0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-champagne tracking-[0.5em] text-xs uppercase mb-3">
            Wedding Day Memories
          </p>
          <h1
            className="font-script italic text-espresso mb-3"
            style={{ fontSize: "clamp(2.2rem, 7vw, 3.5rem)", fontWeight: 300 }}
          >
            Our Guest Gallery
          </h1>
          <div className="flex justify-center mb-4">
            <FloralDivider />
          </div>
          <p className="font-sans text-espresso/45 text-xs tracking-wide max-w-sm mx-auto">
            Scan the QR code at your table to add your photos to our
            shared wedding gallery ✦
          </p>
        </motion.div>

        {/* Live counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-3 mt-6 px-6 py-3 rounded-full"
          style={{
            background: "rgba(200,169,110,0.08)",
            border:     "1px solid rgba(200,169,110,0.25)",
          }}
        >
          {/* Live dot */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full"
            style={{ background: "#9CAF88" }}
          />
          <p className="font-sans text-champagne text-xs tracking-widest">
            <span className="font-script text-lg" style={{ fontWeight: 400 }}>
              {liveCount}
            </span>{" "}
            {liveCount === 1 ? "memory" : "memories"} shared
          </p>
        </motion.div>
      </div>

      {/* ── FILTER BAR ───────────────────────────────────────── */}
      {tables.length > 0 && (
        <div style={{ borderBottom: "1px solid rgba(200,169,110,0.1)" }}>
          <FilterBar
            tables={tables}
            activeTable={activeTable}
            onTableChange={setActiveTable}
            totalCount={photos.length}
          />
        </div>
      )}

      {/* ── GALLERY GRID ─────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="text-3xl"
            >
              ✿
            </motion.div>
            <p className="font-sans text-espresso/40 text-xs tracking-widest">
              Loading memories...
            </p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="text-center py-16">
            <p className="font-sans text-red-400 text-sm">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 font-sans text-xs text-champagne underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* Grid */}
        {!loading && !error && (
          <>
            {filtered.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-5">
                {filtered.map((photo, i) => (
                  <div key={photo.id} className="mb-5">
                    <PhotoTile
                      photo={photo}
                      index={i}
                      onClick={openLightbox}
                      isNew={newPhotoIds.has(photo.id)}
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
      {!loading && photos.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center pb-16 px-4"
        >
          <div className="flex justify-center mb-5">
            <FloralDivider />
          </div>
          <p className="font-sans text-espresso/35 text-xs tracking-widest mb-4">
            Want to add your own photos?
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/upload")}
            className="px-8 py-3 rounded font-sans text-xs tracking-[0.35em] uppercase"
            style={{
              background: "linear-gradient(135deg, #C8A96E, #D4B87A)",
              color:      "#FAF6F0",
              boxShadow:  "0 4px 16px rgba(200,169,110,0.25)",
            }}
          >
            Upload a Photo ✦
          </motion.button>
        </motion.div>
      )}

      {/* Bottom florals */}
      <div className="relative h-20 overflow-hidden">
        <FloralCornerBL className="absolute bottom-0 left-0"  size={90} />
        <FloralCornerBR className="absolute bottom-0 right-0" size={90} />
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && filtered[lightboxIdx] && (
          <Lightbox
            photo={filtered[lightboxIdx]}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
            hasPrev={lightboxIdx > 0}
            hasNext={lightboxIdx < filtered.length - 1}
          />
        )}
      </AnimatePresence>
    </div>
  );
}