import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FloralCornerTL, FloralCornerTR,
  FloralCornerBL, FloralCornerBR,
  FloralDivider, WaxSeal,
} from "../components/FloralAccents/FloralSvg";
import { WEDDING } from "../weddingConfig";

// ─── Update all names here ─────────────────────────────────────────
const BRIDE_PARENTS = [
  { role: "Father of the Bride", name: "Mr. Jeanelito D. Singzon" },
  { role: "Mother of the Bride", name: "Mrs. Dolores D. Singzon" },
];

const GROOM_PARENTS = [
  { role: "Father of the Groom", name: "Mr. Noel F. Jackson" },
  { role: "Mother of the Groom", name: "Ms. Rowena D. Obrino" },
];

const PRINCIPAL_SPONSORS = [
  { role: "Principal Sponsor", name: "Dr. Gil Leovigildo A. Ancheta, CPA" },
  { role: "Principal Sponsor", name: "Mrs. Thelma N. Mawo" },
  { role: "Principal Sponsor", name: "Atty. Joseph G. Dinoy" },
  { role: "Principal Sponsor", name: "Mrs. Adela L. Conejos" },
  { role: "Principal Sponsor", name: "Mr. Renato A. Loberiano" },
  { role: "Principal Sponsor", name: "Mrs. Ma. Merlie J. Loberiano" },
  { role: "Principal Sponsor", name: "Atty. Calick D. Arrieta"},
  { role: "Principal Sponsor", name: "Mrs. Ellen C. Obrino"},
  { role: "Principal Sponsor", name: "Mr. Ruel F. Jackson"},
  { role: "Principal Sponsor", name: "Mrs. Lohea E. Jackson"},
  { role: "Principal Sponsor", name: "Mr. Edgardo J. Mascarinas"},
  { role: "Principal Sponsor", name: "Mrs. Rosita I. Mascarinas"},
];

const HONOR_PARTY = [
  { role: "Best Man",      name: "Claude P. Kirke" },
  { role: "Maid of Honor", name: "Mary Nessa Red Lee" },
];

const BEARS = [
  {
    role: "Candle",
    names: ["Kenneth L. Bote", "Jeanelou S. Agura"],
  },
  {
    role: "Cord",
    names: ["Joemar Gabriel A. Rallestan", "Cianne B. Allequir"],
  },
  {
    role: "Veil",
    names: ["Jherome Rosales", "April O. Allequir"],
  },
];

const LITTLE_ONES = [
  { role: "Coin Bearer", name: "Franco Emannuel Toquero" },
  { role: "Ring Bearer", name: "Avery Allison S. Obrino" },
  { role: "Bible Bearer", name: "Sam Thomas Aliman" },
  { role: "Flower Girl", name: "Alessia Vrielle O. Jabonite" },
];

// ─── Reusable components ───────────────────────────────────────────
function PersonCard({ role, name, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center px-3 py-4 rounded-lg"
      style={{
        background: "rgba(201,169,110,0.05)",
        border: "1px solid rgba(201,169,110,0.12)",
      }}
    >
      <p
        className="font-sans tracking-widest uppercase mb-1"
        style={{ color: "#E8B4C8", fontSize: "9px" }}
      >
        {role}
      </p>
      <p
        className="font-script italic"
        style={{ fontSize: "1.05rem", fontWeight: 300, color: "#4A4A4A" }}
      >
        {name}
      </p>
    </motion.div>
  );
}

function EntourageSection({ eyebrow, title, bg, children }) {
  return (
    <section
      className="py-12 px-4"
      style={{
        background: bg || "#FFFFFF",
        borderBottom: "1px solid rgba(201,169,110,0.08)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <p
            className="font-sans tracking-[0.45em] text-xs uppercase mb-2"
            style={{ color: "#C9A96E" }}
          >
            {eyebrow}
          </p>
          <h2
            className="font-script italic"
            style={{
              fontSize: "clamp(1.6rem, 5vw, 2.2rem)",
              fontWeight: 300,
              color: "#4A4A4A",
            }}
          >
            {title}
          </h2>
          <div className="flex justify-center mt-4">
            <FloralDivider />
          </div>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

// ─── Main export ───────────────────────────────────────────────────
export default function Entourage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ background: "#FAF9F6" }}>

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => navigate("/")}
        className="fixed top-5 left-5 z-50 font-sans text-xs tracking-widest px-4 py-2 rounded-full transition-opacity hover:opacity-80"
        style={{
          color: "#C9A96E",
          background: "rgba(244,246,238,0.85)",
          border: "1px solid rgba(201,169,110,0.25)",
          backdropFilter: "blur(8px)",
        }}
      >
        Back
      </motion.button>

      {/* HERO */}
      <div
        className="relative text-center py-20 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #FDF0F5 0%, #FAF9F6 100%)",
          borderBottom: "1px solid rgba(201,169,110,0.12)",
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
            style={{ color: "#C9A96E" }}
          >
            Wedding Entourage
          </p>
          <h1
            className="font-script italic mb-3"
            style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)", fontWeight: 300, color: "#4A4A4A" }}
          >
            {WEDDING.bride} & {WEDDING.groom}
          </h1>
          <div className="flex justify-center mb-4">
            <FloralDivider />
          </div>
          <p
            className="font-serif text-sm tracking-wide"
            style={{ color: "rgba(74,74,74,0.6)" }}
          >
            {new Date(WEDDING.date).toLocaleDateString("en-US", {
              weekday: "long", year: "numeric",
              month: "long", day: "numeric",
            })}
          </p>
        </motion.div>
      </div>

      {/* PARENTS */}
      <EntourageSection
        eyebrow="The Families"
        title="Parents of the Couple"
        bg="#FFFFFF"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p
              className="font-sans text-xs tracking-[0.4em] uppercase text-center mb-4"
              style={{ color: "#E8B4C8" }}
            >
              Bride's Parents
            </p>
            <div className="space-y-3">
              {BRIDE_PARENTS.map((p, i) => (
                <PersonCard key={i} role={p.role} name={p.name} delay={i * 0.1} />
              ))}
            </div>
          </div>
          <div>
            <p
              className="font-sans text-xs tracking-[0.4em] uppercase text-center mb-4"
              style={{ color: "#E8B4C8" }}
            >
              Groom's Parents
            </p>
            <div className="space-y-3">
              {GROOM_PARENTS.map((p, i) => (
                <PersonCard key={i} role={p.role} name={p.name} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </EntourageSection>

      {/* PRINCIPAL SPONSORS */}
      <EntourageSection
        eyebrow="Principal Sponsors"
        title="Our Ninongs & Ninangs"
        bg="#FAF9F6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PRINCIPAL_SPONSORS.map((p, i) => (
            <PersonCard key={i} role={p.role} name={p.name} delay={i * 0.08} />
          ))}
        </div>
      </EntourageSection>

      {/* BEST MAN & MAID OF HONOR */}
      <EntourageSection
        eyebrow="The Honor Party"
        title="Best Man & Maid of Honor"
        bg="#FFFFFF"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
          {HONOR_PARTY.map((p, i) => (
            <PersonCard key={i} role={p.role} name={p.name} delay={i * 0.1} />
          ))}
        </div>
      </EntourageSection>

                {/* CANDLE, CORD & VEIL */}
          <EntourageSection
            eyebrow="Secondary Sponsors"
            title="Candle, Cord & Veil"
            bg="#FAF9F6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {BEARS.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center px-3 py-4 rounded-lg"
                  style={{
                    background: "rgba(201,169,110,0.05)",
                    border: "1px solid rgba(201,169,110,0.12)",
                  }}
                >
                  <p
                    className="font-sans tracking-widest uppercase mb-2"
                    style={{ color: "#E8B4C8", fontSize: "9px" }}
                  >
                    {p.role}
                  </p>

                  {p.names.map((name, idx) => (
                    <p
                      key={idx}
                      className="font-script italic"
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 300,
                        color: "#4A4A4A",
                      }}
                    >
                      {name}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>
          </EntourageSection>

        {/* THE LITTLE ONES */}
        <EntourageSection
          eyebrow="The Little Ones"
          title="Bearers & Flower Girl"
          bg="#FFFFFF"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {LITTLE_ONES.map((p, i) => (
              <PersonCard
                key={i}
                role={p.role}
                name={p.name}
                delay={i * 0.08}
              />
            ))}
          </div>
        </EntourageSection>

      {/* CLOSING */}
      <div
        className="relative text-center py-14 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #FAF9F6 0%, #FDF0F5 100%)",
          borderTop: "1px solid rgba(201,169,110,0.1)",
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
            style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)", fontWeight: 300, color: "#C9A96E" }}
          >
            With Love & Gratitude
          </p>
          <div className="flex justify-center mb-4">
            <FloralDivider />
          </div>
          <p
            className="font-sans text-xs leading-relaxed max-w-sm mx-auto mb-8"
            style={{ color: "rgba(74,74,74,0.5)" }}
          >
            We are forever grateful to each and every one of you for being
            part of our most special day ✦
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <button
              onClick={() => navigate("/rsvp")}
              className="px-7 py-3 rounded font-sans text-xs tracking-[0.35em] uppercase"
              style={{
                background: "linear-gradient(135deg, #C9A96E, #E8B4C8)",
                color: "#FAF9F6",
                boxShadow: "0 4px 16px rgba(201,169,110,0.3)",
              }}
            >
              RSVP Now
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-7 py-3 rounded font-sans text-xs tracking-[0.35em] uppercase"
              style={{
                border: "1px solid rgba(201,169,110,0.35)",
                color: "#C9A96E",
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
