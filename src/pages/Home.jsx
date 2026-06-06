import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Envelope        from "../components/Envelope/Envelope";
import InvitationCards from "../components/InvitationCards/InvitationCards";
import CountdownTimer  from "../components/CountdownTimer/CountdownTimer";
import FloralAccents   from "../components/FloralAccents/FloralAccents";
import Footer          from "../components/Footer/Footer";
import {
  FloralCornerTL, FloralCornerTR,
  FloralCornerBL, FloralCornerBR,
  FloralDivider,  WaxSeal,
} from "../components/FloralAccents/FloralSvg";
import { WEDDING } from "../weddingConfig";

// ─── Love story preview strip ──────────────────────────────────────
function LoveStoryPreview() {
  const navigate = useNavigate();

  const previews = [
    {
      label: "Chapter I",
      title: "First Meeting",
      url:   "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=400",
      color: "#FAF0E8",
    },
    {
      label: "Chapter II",
      title: "Falling in Love",
      url:   "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=400",
      color: "#F4F7F0",
    },
    {
      label: "Chapter III",
      title: "Adventures",
      url:   "https://images.unsplash.com/photo-1527515637462-cff94edd08fe?w=400",
      color: "#FAF6F0",
    },
    {
      label: "Chapter IV",
      title: "The Proposal",
      url:   "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400",
      color: "#FDF0F5",
    },
    {
      label: "Chapter V",
      title: "Forever",
      url:   "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400",
      color: "#F0EDF8",
    },
  ];

  return (
    <section
      className="py-16 px-4 relative overflow-hidden"
      style={{
        background:   "linear-gradient(180deg, #F9F4EE 0%, #F0E8DC 100%)",
        borderTop:    "1px solid rgba(200,169,110,0.12)",
        borderBottom: "1px solid rgba(200,169,110,0.12)",
      }}
    >
      <FloralCornerTL className="absolute top-0 left-0"   size={90} />
      <FloralCornerTR className="absolute top-0 right-0"  size={90} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <p className="font-sans text-champagne tracking-[0.5em] text-xs uppercase mb-3">
          Our Journey
        </p>
        <h2
          className="font-script italic text-espresso mb-3"
          style={{ fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 300 }}
        >
          A Love Story
        </h2>
        <div className="flex justify-center mb-3">
          <FloralDivider />
        </div>
        <p className="font-sans text-espresso/45 text-xs max-w-xs mx-auto leading-relaxed">
          Five chapters of a love that grew into forever
        </p>
      </motion.div>

      {/* Chapter cards strip */}
      <div className="flex gap-4 overflow-x-auto pb-4 px-2 max-w-4xl mx-auto snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}>
        {previews.map((ch, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            onClick={() => navigate("/love-story")}
            className="cursor-pointer flex-shrink-0 snap-start"
            style={{ width: "180px" }}
          >
            {/* Polaroid */}
            <div
              className="bg-white p-2.5 pb-10 shadow-md relative"
              style={{
                transform: `rotate(${[-1.5, 1, -0.8, 1.8, -1.2][i]}deg)`,
                boxShadow: "0 6px 20px rgba(60,42,30,0.12)",
              }}
            >
              <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                <img
                  src={ch.url}
                  alt={ch.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
                <p className="font-sans text-espresso/40 text-xs"
                  style={{ fontSize: "9px", letterSpacing: "0.1em" }}>
                  {ch.label}
                </p>
                <p className="font-script italic text-espresso/65"
                  style={{ fontSize: "0.8rem", fontWeight: 300 }}>
                  {ch.title}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/love-story")}
          className="px-8 py-3.5 rounded font-sans text-xs tracking-[0.35em] uppercase"
          style={{
            background: "linear-gradient(135deg, #C8A96E, #D4B87A)",
            color:      "#FAF6F0",
            boxShadow:  "0 4px 20px rgba(200,169,110,0.3)",
          }}
        >
          Read Our Story ✦
        </motion.button>
      </div>
    </section>
  );
}

// ─── Gallery preview strip ─────────────────────────────────────────
function GalleryPreview() {
  const navigate = useNavigate();

  // Placeholder tiles before real photos load
  const placeholders = Array.from({ length: 6 }, (_, i) => ({
    id:    i,
    color: ["#FAF0E8","#F4F7F0","#FAF6F0","#FDF0F5","#F0EDF8","#F0E8DC"][i],
  }));

  return (
    <section
      className="py-16 px-4 relative overflow-hidden"
      style={{ background: "#F9F4EE" }}
    >
      <FloralCornerBL className="absolute bottom-0 left-0"  size={90} />
      <FloralCornerBR className="absolute bottom-0 right-0" size={90} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <p className="font-sans text-champagne tracking-[0.5em] text-xs uppercase mb-3">
          Wedding Day
        </p>
        <h2
          className="font-script italic text-espresso mb-3"
          style={{ fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 300 }}
        >
          Guest Gallery
        </h2>
        <div className="flex justify-center mb-3">
          <FloralDivider />
        </div>
        <p className="font-sans text-espresso/45 text-xs max-w-xs mx-auto leading-relaxed">
          Scan the QR code at your table to share your memories with us
        </p>
      </motion.div>

      {/* Placeholder mosaic */}
      <div className="columns-3 gap-3 max-w-md mx-auto mb-10">
        {placeholders.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="break-inside-avoid mb-3"
          >
            <div
              className="bg-white p-1.5 shadow-sm"
              style={{
                transform: `rotate(${[-1, 1.5, -0.8, 1.2, -1.5, 0.7][i]}deg)`,
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  aspectRatio: i % 3 === 1 ? "3/4" : "1/1",
                  background: p.color,
                }}
              >
                <span className="text-2xl opacity-30">📷</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/gallery")}
          className="px-8 py-3.5 rounded font-sans text-xs tracking-[0.35em] uppercase"
          style={{
            border: "1px solid rgba(200,169,110,0.4)",
            color:  "#C8A96E",
          }}
        >
          View Gallery ✦
        </motion.button>
      </div>
    </section>
  );
}

// ─── Countdown section ─────────────────────────────────────────────
function CountdownSection() {
  return (
    <section
      className="relative py-12 px-4 overflow-hidden"
      style={{
        background:   "linear-gradient(180deg, #F0E8DC 0%, #F9F4EE 100%)",
        borderTop:    "1px solid rgba(200,169,110,0.12)",
        borderBottom: "1px solid rgba(200,169,110,0.12)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CountdownTimer variant="full" />
      </motion.div>
    </section>
  );
}

// ─── Quick links strip ─────────────────────────────────────────────
function QuickLinks() {
  const navigate = useNavigate();

  const links = [
    {
      icon:  "✉",
      label: "RSVP",
      sub:   "Confirm your attendance",
      path:  "/rsvp",
      bg:    "linear-gradient(135deg, #C8A96E, #D4B87A)",
      color: "#FAF6F0",
    },
    {
      icon:  "📋",
      label: "Details",
      sub:   "Venue, timeline & more",
      path:  "/details",
      bg:    "rgba(200,169,110,0.08)",
      color: "#3C2A1E",
      border: "1px solid rgba(200,169,110,0.25)",
    },
    {
      icon:  "📖",
      label: "Our Story",
      sub:   "Five chapters of love",
      path:  "/love-story",
      bg:    "rgba(156,175,136,0.12)",
      color: "#3C2A1E",
      border: "1px solid rgba(156,175,136,0.3)",
    },
    {
      icon:  "📷",
      label: "Gallery",
      sub:   "Share your memories",
      path:  "/gallery",
      bg:    "rgba(201,169,166,0.12)",
      color: "#3C2A1E",
      border: "1px solid rgba(201,169,166,0.3)",
    },
  ];

  return (
    <section className="py-12 px-4" style={{ background: "#FAF6F0" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-8"
      >
        <p className="font-sans text-champagne tracking-[0.5em] text-xs uppercase">
          Everything You Need
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
        {links.map((link, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate(link.path)}
            className="flex flex-col items-center gap-2 py-5 px-3 rounded-lg transition-all duration-200"
            style={{
              background: link.bg,
              border:     link.border || "none",
              color:      link.color,
              boxShadow:  "0 4px 16px rgba(60,42,30,0.06)",
            }}
          >
            <span className="text-2xl">{link.icon}</span>
            <p className="font-serif text-sm font-normal">{link.label}</p>
            <p className="font-sans text-xs opacity-60 text-center leading-tight">
              {link.sub}
            </p>
          </motion.button>
        ))}
      </div>
    </section>
  );
}

// ─── Main export ───────────────────────────────────────────────────
export default function Home() {
  const [opened, setOpened] = useState(false);

  // Persist open state so refreshing doesn't reset to envelope
  useEffect(() => {
    const wasOpened = sessionStorage.getItem("envelope-opened");
    if (wasOpened) setOpened(true);
  }, []);

  function handleOpen() {
    sessionStorage.setItem("envelope-opened", "true");
    setOpened(true);
  }

  return (
    <div className="relative bg-cream min-h-screen">

      {/* Falling petals — only after envelope opens */}
      <FloralAccents active={opened} count={12} />

      <AnimatePresence mode="wait">
        {!opened ? (

          /* ── Envelope experience ─────────────────────────── */
          <motion.div
            key="envelope"
            exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.5 } }}
          >
            <Envelope onOpen={handleOpen} />
          </motion.div>

        ) : (

          /* ── Full invitation experience ──────────────────── */
          <motion.div
            key="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >

            {/* Cards section */}
            <section id="invitation">
              <InvitationCards />
            </section>

            {/* Countdown */}
            <CountdownSection />

            {/* Quick links */}
            <QuickLinks />

            {/* Love story preview */}
            <LoveStoryPreview />

            {/* Gallery preview */}
            <GalleryPreview />

            {/* Footer */}
            <Footer />

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}