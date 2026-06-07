import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FloralCornerTL, FloralCornerTR,
  FloralCornerBL, FloralCornerBR,
  FloralDivider, WaxSeal,
} from "../components/FloralAccents/FloralSvg";
import { WEDDING } from "../weddingConfig";

// ─── Update these with your real entourage names ───────────────────
const ENTOURAGE = {
  parents: {
    bride: [
      { role: "Father of the Bride", name: "Juan dela Cruz" },
      { role: "Mother of the Bride", name: "Maria dela Cruz" },
    ],
    groom: [
      { role: "Father of the Groom", name: "Pedro Santos" },
      { role: "Mother of the Groom", name: "Rosa Santos" },
    ],
  },
  principal: {
    sponsors: [
      { role: "Principal Sponsor", name: "Mr. & Mrs. Alfonso Reyes" },
      { role: "Principal Sponsor", name: "Mr. & Mrs. Benjamin Cruz" },
      { role: "Principal Sponsor", name: "Mr. & Mrs. Carlos Lim" },
      { role: "Principal Sponsor", name: "Mr. & Mrs. David Tan" },
    ],
  },
  secondary: {
    bearers: [
      { role: "Best Man",        name: "Miguel Santos" },
      { role: "Maid of Honor",   name: "Sofia Reyes" },
    ],
    groomsmen: [
      { role: "Groomsman", name: "Andrei Villanueva" },
      { role: "Groomsman", name: "Rafael Gomez" },
      { role: "Groomsman", name: "Marco Dela Torre" },
    ],
    bridesmaids: [
      { role: "Bridesmaid", name: "Isabella Cruz" },
      { role: "Bridesmaid", name: "Camille Reyes" },
      { role: "Bridesmaid", name: "Angela Santos" },
    ],
    bearers2: [
      { role: "Ring Bearer",    name: "Liam Santos" },
      { role: "Coin Bearer",    name: "Noah Reyes" },
      { role: "Bible Bearer",   name: "Ethan Cruz" },
      { role: "Flower Girl",    name: "Mia Villanueva" },
      { role: "Flower Girl",    name: "Ella Gomez" },
    ],
  },
};

// ─── Single person card ────────────────────────────────────────────
function PersonCard({ role, name, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center px-3 py-4 rounded-lg"
      style={{
        background: "rgba(68,92,63,0.05)",
        border: "1px solid rgba(68,92,63,0.12)",
      }}
    >
      <p
        className="font-sans text-xs tracking-widest uppercase mb-1"
        style={{ color: "#7d936c" }}
      >
        {role}
      </p>
      <p
        className="font-script italic"
        style={{
          fontSize: "1.05rem",
          fontWeight: 300,
          color: "#2c3b28",
        }}
      >
        {name}
      </p>
    </motion.div>
  );
}

// ─── Section block ─────────────────────────────────────────────────
function EntourageSection({ title, eyebrow, children, bg = "#f4f6ee" }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-12 px-4"
      style={{
        background: bg,
        borderBottom: "1px solid rgba(68,92,63,0.08)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <p
            className="font-sans tracking-[0.45em] text-xs uppercase mb-2"
            style={{ color: "#445c3f" }}
          >
            {eyebrow}
          </p>
          <h2
            className="font-script italic"
            style={{
              fontSize: "clamp(1.6rem, 5vw, 2.2rem)",
              fontWeight: 300,
              color: "#2c3b28",
            }}
          >
            {title}
          </h2>
          <div className="flex justify-center mt-4">
            <FloralDivider />
          </div>
        </div>
        {children}
      </div>
    </motion.section>
  );
}

// ─── Main export ───────────────────────────────────────────────────
export default function Entourage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ background: "#eceee3" }}>

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => navigate("/")}
        className="fixed top-5 left-5 z-50 flex items-center gap-2 font-sans text-xs tracking-widest hover:opacity-80 transition-opacity px-4 py-2 rounded-full"
        style={{
          color: "#445c3f",
          background: "rgba(244,246,238,0.85)",
          border: "1px solid rgba(68,92,63,0.25)",
          backdropFilter: "blur(8px)",
        }}
      >
        Back
      </motion.button>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div
        className="relative text-center py-20 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #d6dfc6 0%, #eceee3 100%)",
          borderBottom: "1px solid rgba(68,92,63,0.12)",
        }}
      >
        <FloralCornerTL className="absolute top-0 left-0" size={110} />
        <FloralCornerTR className="absolute top-0 right-0" size={110} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p
            className="font-sans tracking-[0.5em] text-xs uppercase mb-4"
            style={{ color: "#445c3f" }}
          >
            Wedding Entourage
          </p>
          <h1
            className="font-script italic mb-3"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 4rem)",
              fontWeight: 300,
              color: "#2c3b28",
            }}
          >
            {WEDDING.bride} & {WEDDING.groom}
          </h1>
          <div className="flex justify-center mb-4">
            <FloralDivider />
          </div>
          <p
            className="font-serif text-sm tracking-wide"
            style={{ color: "rgba(44,59,40,0.6)" }}
          >
            {new Date(WEDDING.date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </motion.div>
      </div>

      {/* ── PARENTS ──────────────────────────────────────────── */}
      <EntourageSection
        eyebrow="The Families"
        title="Parents of the Couple"
        bg="#f4f6ee"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bride's parents */}
          <div>
            <p
              className="font-sans text-xs tracking-[0.4em] uppercase text-center mb-4"
              style={{ color: "#7d936c" }}
            >
              Bride's Parents
            </p>
            <div className="space-y-3">
              {ENTOURAGE.parents.bride.map((p, i) => (
                <PersonCard key={i} role={p.role} name={p.name} delay={i * 0.1} />
              ))}
            </div>
          </div>
          {/* Groom's parents */}
          <div>
            <p
              className="font-sans text-xs tracking-[0.4em] uppercase text-center mb-4"
              style={{ color: "#7d936c" }}
            >
              Groom's Parents
            </p>
            <div className="space-y-3">
              {ENTOURAGE.parents.groom.map((p, i) => (
                <PersonCard key={i} role={p.role} name={p.name} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </EntourageSection>

      {/* ── PRINCIPAL SPONSORS ───────────────────────────────── */}
      <EntourageSection
        eyebrow="Principal Sponsors"
        title="Our Ninongs & Ninangs"
        bg="#eceee3"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ENTOURAGE.principal.sponsors.map((p, i) => (
            <PersonCard key={i} role={p.role} name={p.name} delay={i * 0.08} />
          ))}
        </div>
      </EntourageSection>

      {/* ── BEST MAN & MAID OF HONOR ─────────────────────────── */}
      <EntourageSection
        eyebrow="The Honor Party"
        title="Best Man & Maid of Honor"
        bg="#f4f6ee"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
          {ENTOURAGE.secondary.bearers.map((p, i) => (
            <PersonCard key={i} role={p.role} name={p.name} delay={i * 0.1} />
          ))}
        </div>
      </EntourageSection>

      {/* ── GROOMSMEN & BRIDESMAIDS ───────────────────────────── */}
      <EntourageSection
        eyebrow="The Wedding Party"
        title="Groomsmen & Bridesmaids"
        bg="#eceee3"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Groomsmen */}
          <div>
            <p
              className="font-sans text-xs tracking-[0.4em] uppercase text-center mb-4"
              style={{ color: "#7d936c" }}
            >
              Groomsmen
            </p>
            <div className="space-y-3">
              {ENTOURAGE.secondary.groomsmen.map((p, i) => (
                <PersonCard key={i} role={p.role} name={p.name} delay={i * 0.08} />
              ))}
            </div>
          </div>
          {/* Bridesmaids */}
          <div>
            <p
              className="font-sans text-xs tracking-[0.4em] uppercase text-center mb-4"
              style={{ color: "#7d936c" }}
            >
              Bridesmaids
            </p>
            <div className="space-y-3">
              {ENTOURAGE.secondary.bridesmaids.map((p, i) => (
                <PersonCard key={i} role={p.role} name={p.name} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </div>
      </EntourageSection>

      {/* ── BEARERS & FLOWER GIRLS ───────────────────────────── */}
      <EntourageSection
        eyebrow="The Little Ones"
        title="Bearers & Flower Girls"
        bg="#f4f6ee"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {ENTOURAGE.secondary.bearers2.map((p, i) => (
            <PersonCard key={i} role={p.role} name={p.name} delay={i * 0.08} />
          ))}
        </div>
      </EntourageSection>

      {/* ── CLOSING ──────────────────────────────────────────── */}
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
            <WaxSeal size={52} />
          </div>
          <p
            className="font-script italic mb-3"
            style={{
              fontSize: "clamp(1.4rem, 4vw, 2rem)",
              fontWeight: 300,
              color: "#445c3f",
            }}
          >
            With Love & Gratitude
          </p>
          <div className="flex justify-center mb-4">
            <FloralDivider />
          </div>
          <p
            className="font-sans text-xs leading-relaxed max-w-sm mx-auto"
            style={{ color: "rgba(44,59,40,0.5)" }}
          >
            We are forever grateful to each and every one of you for being
            part of our most special day ✦
          </p>
          <div className="flex justify-center gap-3 mt-6 flex-wrap">
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

    </div>
  );
}