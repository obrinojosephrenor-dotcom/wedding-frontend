import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Envelope from "../components/Envelope/Envelope";
import InvitationCards from "../components/InvitationCards/InvitationCards";
import CountdownTimer from "../components/CountdownTimer/CountdownTimer";
import Footer from "../components/Footer/Footer";
import {
  FloralCornerTL,
  FloralCornerTR,
  FloralCornerBL,
  FloralCornerBR,
  FloralDivider,
} from "../components/FloralAccents/FloralSvg";
import { WEDDING } from "../weddingConfig";

// ─── Love Story Preview ────────────────────────────────────────────
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
        background: "linear-gradient(180deg, #f4f6ee 0%, #eceee3 100%)",
        borderTop: "1px solid rgba(68,92,63,0.1)",
        borderBottom: "1px solid rgba(68,92,63,0.1)",
      }}
    >
      <FloralCornerTL className="absolute top-0 left-0" size={90} />
      <FloralCornerTR className="absolute top-0 right-0" size={90} />

      <div className="text-center mb-10">
        <p
          className="font-sans tracking-[0.5em] text-xs uppercase mb-3"
          style={{ color: "#445c3f" }}
        >
          Our Journey
        </p>
        <h2
          className="font-script italic mb-3"
          style={{
            fontSize: "clamp(2rem, 6vw, 3rem)",
            fontWeight: 300,
            color: "#2c3b28",
          }}
        >
          A Love Story
        </h2>
        <div className="flex justify-center mb-3">
          <FloralDivider />
        </div>
        <p
          className="font-sans text-xs max-w-xs mx-auto leading-relaxed"
          style={{ color: "rgba(44,59,40,0.5)" }}
        >
          Five chapters of a love that grew into forever
        </p>
      </div>

      <div
        className="flex gap-5 overflow-x-auto pb-4 px-2 max-w-4xl mx-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {previews.map((ch, i) => (
          <div
            key={i}
            onClick={() => navigate("/love-story")}
            className="cursor-pointer flex-shrink-0"
            style={{ width: "170px" }}
          >
            <div
              className="bg-white p-2.5 pb-10 relative"
              style={{
                transform: "rotate(" + [-1.5, 1, -0.8, 1.8, -1.2][i] + "deg)",
                boxShadow: "0 6px 20px rgba(44,59,40,0.12)",
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
                <p
                  className="font-sans"
                  style={{ fontSize: "9px", color: "rgba(44,59,40,0.4)" }}
                >
                  {ch.label}
                </p>
                <p
                  className="font-script italic"
                  style={{ fontSize: "0.8rem", fontWeight: 300, color: "rgba(44,59,40,0.65)" }}
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
            background: "linear-gradient(135deg, #445c3f, #7d936c)",
            color: "#eceee3",
            boxShadow: "0 4px 20px rgba(68,92,63,0.3)",
          }}
        >
          Read Our Story
        </button>
      </div>
    </section>
  );
}

// ─── Entourage Preview ─────────────────────────────────────────────
function EntouragePreview() {
  const navigate = useNavigate();

  const roles = [
    { role: "Groomsman",      name: "Michael Noel D. Obrino" },
    { role: "Bridesmaid", name: "Nikki Jean D. Singzon" },
    { role: "Best man",     name: "Claude P. Kirke" },
    { role: "Maid of Honor",    name: "Mary Nessa Red Lee" },
    { role: "Ring Bearer",   name: "Avery Allison S. Obrino" },
    { role: "Flower Girl",   name: "Alessia Vrielle O. Jabonite" },
  ];

  return (
    <section
      className="py-16 px-4 relative overflow-hidden"
      style={{ background: "#f4f6ee" }}
    >
      <FloralCornerBL className="absolute bottom-0 left-0" size={90} />
      <FloralCornerBR className="absolute bottom-0 right-0" size={90} />

      <div className="text-center mb-10">
        <p
          className="font-sans tracking-[0.5em] text-xs uppercase mb-3"
          style={{ color: "#445c3f" }}
        >
          The Wedding Party
        </p>
        <h2
          className="font-script italic mb-3"
          style={{
            fontSize: "clamp(2rem, 6vw, 3rem)",
            fontWeight: 300,
            color: "#2c3b28",
          }}
        >
          Our Entourage
        </h2>
        <div className="flex justify-center mb-3">
          <FloralDivider />
        </div>
        <p
          className="font-sans text-xs max-w-xs mx-auto leading-relaxed"
          style={{ color: "rgba(44,59,40,0.5)" }}
        >
          The people who walk beside us on our most beautiful day
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto mb-10">
        {roles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="text-center py-4 px-2 rounded-lg"
            style={{
              background: "rgba(68,92,63,0.05)",
              border: "1px solid rgba(68,92,63,0.1)",
            }}
          >
            <p
              className="font-sans tracking-wider uppercase mb-1"
              style={{ color: "#7d936c", fontSize: "9px" }}
            >
              {p.role}
            </p>
            <p
              className="font-script italic"
              style={{ fontSize: "0.9rem", fontWeight: 300, color: "#2c3b28" }}
            >
              {p.name}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => navigate("/entourage")}
          className="px-8 py-3.5 rounded font-sans text-xs tracking-[0.35em] uppercase"
          style={{
            border: "1px solid rgba(68,92,63,0.4)",
            color: "#445c3f",
          }}
        >
          View Full Entourage
        </button>
      </div>
    </section>
  );
}

// ─── Quick Links ───────────────────────────────────────────────────
function QuickLinks() {
  const navigate = useNavigate();

  const links = [
    {
      icon:  "✉",
      label: "RSVP",
      sub:   "Confirm attendance",
      path:  "/rsvp",
      bg:    "linear-gradient(135deg, #445c3f, #7d936c)",
      color: "#eceee3",
    },
    {
      icon:  "📋",
      label: "Details",
      sub:   "Venue and timeline",
      path:  "/details",
      bg:    "rgba(68,92,63,0.08)",
      color: "#2c3b28",
      border: "1px solid rgba(68,92,63,0.25)",
    },
    {
      icon:  "📖",
      label: "Our Story",
      sub:   "Five chapters of love",
      path:  "/love-story",
      bg:    "rgba(125,147,108,0.12)",
      color: "#2c3b28",
      border: "1px solid rgba(125,147,108,0.3)",
    },
    {
      icon:  "💐",
      label: "Entourage",
      sub:   "Meet the wedding party",
      path:  "/entourage",
      bg:    "rgba(170,185,146,0.15)",
      color: "#2c3b28",
      border: "1px solid rgba(170,185,146,0.35)",
    },
  ];
}

// ─── Full invitation content after envelope opens ──────────────────
function InvitationHome() {
  return (
    <div className="min-h-screen" style={{ background: "#eceee3" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Invitation cards stack */}
        <InvitationCards />

        {/* Countdown */}
        <section
          className="py-12 px-4"
          style={{
            background: "linear-gradient(180deg, #d6dfc6 0%, #eceee3 100%)",
            borderTop:    "1px solid rgba(68,92,63,0.1)",
            borderBottom: "1px solid rgba(68,92,63,0.1)",
          }}
        >
          <CountdownTimer variant="full" />
        </section>

        {/* Quick nav links */}
        <QuickLinks />

        {/* Love story preview */}
        <LoveStoryPreview />

        {/* Entourage preview */}
        <EntouragePreview />

        {/* Footer */}
        <Footer />
      </motion.div>
    </div>
  );
}

// ─── Main export ───────────────────────────────────────────────────
export default function Home() {
  const [opened, setOpened] = useState(false);

  // Restore open state on page refresh
  useEffect(() => {
    try {
      if (sessionStorage.getItem("env-open") === "yes") {
        setOpened(true);
      }
    } catch (e) {}
  }, []);

  // Listen for global envelope event
  useEffect(() => {
    function handleEnvelopeOpen() {
      try {
        sessionStorage.setItem("env-open", "yes");
      } catch (e) {}
      setOpened(true);
    }
    window.addEventListener("envelope-opened", handleEnvelopeOpen);
    return () =>
      window.removeEventListener("envelope-opened", handleEnvelopeOpen);
  }, []);

  // Show envelope if not opened yet
  if (!opened) {
    return (
      <Envelope
        onOpen={() => {
          try {
            sessionStorage.setItem("env-open", "yes");
          } catch (e) {}
          setOpened(true);
        }}
      />
    );
  }

  return <InvitationHome />;
}