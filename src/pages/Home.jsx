import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Envelope from "../components/Envelope/Envelope";
import InvitationCards from "../components/InvitationCards/InvitationCards";
import CountdownTimer from "../components/CountdownTimer/CountdownTimer";
import FloralAccents from "../components/FloralAccents/FloralAccents";
import Footer from "../components/Footer/Footer";
import {
  FloralCornerTL,
  FloralCornerTR,
  FloralCornerBL,
  FloralCornerBR,
  FloralDivider,
  WaxSeal,
} from "../components/FloralAccents/FloralSvg";
import { WEDDING } from "../weddingConfig";

function LoveStoryPreview() {
  const navigate = useNavigate();
  const previews = [
    { label: "Chapter I",   title: "First Meeting",  url: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=400" },
    { label: "Chapter II",  title: "Falling in Love", url: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=400" },
    { label: "Chapter III", title: "Adventures",      url: "https://images.unsplash.com/photo-1527515637462-cff94edd08fe?w=400" },
    { label: "Chapter IV",  title: "The Proposal",    url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400" },
    { label: "Chapter V",   title: "Forever",         url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400" },
  ];

  return (
    <section
      className="py-16 px-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F9F4EE 0%, #F0E8DC 100%)",
        borderTop: "1px solid rgba(200,169,110,0.12)",
        borderBottom: "1px solid rgba(200,169,110,0.12)",
      }}
    >
      <FloralCornerTL className="absolute top-0 left-0" size={90} />
      <FloralCornerTR className="absolute top-0 right-0" size={90} />

      <div className="text-center mb-10">
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
      </div>

      <div
        className="flex gap-4 overflow-x-auto pb-4 px-2 max-w-4xl mx-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {previews.map((ch, i) => (
          <div
            key={i}
            onClick={() => navigate("/love-story")}
            className="cursor-pointer flex-shrink-0"
            style={{ width: "180px" }}
          >
            <div
              className="bg-white p-2.5 pb-10 shadow-md relative"
              style={{
                transform: "rotate(" + [-1.5, 1, -0.8, 1.8, -1.2][i] + "deg)",
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
                <p className="font-sans text-espresso/40" style={{ fontSize: "9px" }}>
                  {ch.label}
                </p>
                <p
                  className="font-script italic text-espresso/65"
                  style={{ fontSize: "0.8rem", fontWeight: 300 }}
                >
                  {ch.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/love-story")}
          className="px-8 py-3.5 rounded font-sans text-xs tracking-[0.35em] uppercase"
          style={{
            background: "linear-gradient(135deg, #C8A96E, #D4B87A)",
            color: "#FAF6F0",
            boxShadow: "0 4px 20px rgba(200,169,110,0.3)",
          }}
        >
          Read Our Story
        </button>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const navigate = useNavigate();
  const placeholders = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    color: ["#FAF0E8","#F4F7F0","#FAF6F0","#FDF0F5","#F0EDF8","#F0E8DC"][i],
  }));

  return (
    <section className="py-16 px-4 relative overflow-hidden" style={{ background: "#F9F4EE" }}>
      <FloralCornerBL className="absolute bottom-0 left-0" size={90} />
      <FloralCornerBR className="absolute bottom-0 right-0" size={90} />

      <div className="text-center mb-10">
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
          Scan the QR code at your table to share your memories
        </p>
      </div>

      <div className="columns-3 gap-3 max-w-md mx-auto mb-10">
        {placeholders.map((p, i) => (
          <div key={i} className="break-inside-avoid mb-3">
            <div
              className="bg-white p-1.5 shadow-sm"
              style={{ transform: "rotate(" + [-1, 1.5, -0.8, 1.2, -1.5, 0.7][i] + "deg)" }}
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
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => navigate("/gallery")}
          className="px-8 py-3.5 rounded font-sans text-xs tracking-[0.35em] uppercase"
          style={{ border: "1px solid rgba(200,169,110,0.4)", color: "#C8A96E" }}
        >
          View Gallery
        </button>
      </div>
    </section>
  );
}

function QuickLinks() {
  const navigate = useNavigate();
  const links = [
    {label: "RSVP",      sub: "Confirm attendance",    path: "/rsvp",        bg: "linear-gradient(135deg, #C8A96E, #D4B87A)", color: "#FAF6F0" },
    {label: "Details",   sub: "Venue and timeline",    path: "/details",     bg: "rgba(200,169,110,0.08)", color: "#3C2A1E", border: "1px solid rgba(200,169,110,0.25)" },
    {label: "Our Story", sub: "Five chapters of love", path: "/love-story",  bg: "rgba(156,175,136,0.12)", color: "#3C2A1E", border: "1px solid rgba(156,175,136,0.3)" },
    {label: "Gallery",   sub: "Share your memories",   path: "/gallery",     bg: "rgba(201,169,166,0.12)", color: "#3C2A1E", border: "1px solid rgba(201,169,166,0.3)" },
  ];

  return (
    <section className="py-12 px-4" style={{ background: "#FAF6F0" }}>
      <p className="font-sans text-champagne tracking-[0.5em] text-xs uppercase text-center mb-8">
        Everything You Need
      </p>
      <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
        {links.map((link, i) => (
          <button
            key={i}
            onClick={() => navigate(link.path)}
            className="flex flex-col items-center gap-2 py-5 px-3 rounded-lg transition-all duration-200 hover:opacity-90"
            style={{
              background: link.bg,
              border: link.border || "none",
              color: link.color,
              boxShadow: "0 4px 16px rgba(60,42,30,0.06)",
            }}
          >
            <span className="text-2xl">{link.icon}</span>
            <p className="font-serif text-sm">{link.label}</p>
            <p className="font-sans text-xs opacity-60 text-center leading-tight">{link.sub}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const wasOpened = sessionStorage.getItem("env-open");
    if (wasOpened === "yes") setOpened(true);
  }, []);

  function handleOpen() {
    sessionStorage.setItem("env-open", "yes");
    setOpened(true);
  }

  if (!opened) {
    return <Envelope onOpen={handleOpen} />;
  }

  return (
    <div className="bg-cream min-h-screen">
      <FloralAccents active count={12} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <InvitationCards />

        <section
          className="py-12 px-4"
          style={{
            background: "linear-gradient(180deg, #F0E8DC 0%, #F9F4EE 100%)",
            borderTop: "1px solid rgba(200,169,110,0.12)",
            borderBottom: "1px solid rgba(200,169,110,0.12)",
          }}
        >
          <CountdownTimer variant="full" />
        </section>

        <QuickLinks />
        <LoveStoryPreview />
        <GalleryPreview />
        <Footer />
      </motion.div>
    </div>
  );
}