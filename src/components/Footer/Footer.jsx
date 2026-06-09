import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import { FaInstagram, FaFacebookF,} from "react-icons/fa6";
import {
  FloralCornerTL, FloralCornerTR,
  FloralDivider, WaxSeal,
} from "../FloralAccents/FloralSvg";
import { WEDDING } from "../../weddingConfig";

// ─── Social link button ────────────────────────────────────────────
function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2"
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </a>
  );
}

// ─── Footer nav link ───────────────────────────────────────────────
function FooterLink({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="font-sans text-ivory/40 text-xs tracking-widest uppercase hover:text-champagne transition-colors duration-200"
    >
      {label}
    </button>
  );
}

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #3A3A3A 0%, #2A2A2A 100%)",
        borderTop:  "1px solid rgba(201,169,110,0.15)",
      }}
    >
      {/* Floral corners */}
      <FloralCornerTL
        className="absolute top-0 left-0 opacity-20"
        size={120}
      />
      <FloralCornerTR
        className="absolute top-0 right-0 opacity-20"
        size={120}
      />

      {/* Top divider line */}
      <div
        className="w-full h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(201,169,110,0.4), transparent)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 pt-14 pb-10">

        {/* ── Wax seal + names ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-5">
            <WaxSeal size={56} />
          </div>

          <h2
            className="font-script italic mb-1"
            style={{
              fontSize:  "clamp(1.6rem, 5vw, 2.4rem)",
              fontWeight: 300,
              background: "linear-gradient(135deg, #C9A96E, #A8B89F, #C9A96E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {WEDDING.bride} & {WEDDING.groom}
          </h2>

          <p
            className="font-sans text-ivory/35 text-xs tracking-[0.4em] uppercase mt-2"
          >
            {new Date(WEDDING.date).toLocaleDateString("en-US", {
              month: "long",
              day:   "numeric",
              year:  "numeric",
            })}
          </p>
        </motion.div>

        {/* ── Divider ───────────────────────────────────────── */}
        <div className="flex justify-center mb-8">
          <FloralDivider />
        </div>

        {/* ── Thank you message ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-center mb-8 px-4"
        >
          <p
            className="font-script italic text-ivory/50 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.15rem)", fontWeight: 300 }}
          >
            "Thank you for being part of our story. Your presence on
            our wedding day is the greatest gift we could ever ask for."
          </p>
          <p className="font-sans text-champagne/50 text-xs tracking-widest mt-3">
            — {WEDDING.bride} & {WEDDING.groom}
          </p>
        </motion.div>

        {/* ── Divider ───────────────────────────────────────── */}
        <div className="flex justify-center mb-8">
          <FloralDivider />
        </div>

        {/* ── Nav links ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8"
        >
          <FooterLink label="RSVP"        onClick={() => navigate("/rsvp")}        />
          <FooterLink label="Details"     onClick={() => navigate("/details")}     />
          <FooterLink label="Love Story"  onClick={() => navigate("/love-story")}  />
        </motion.div>

        {/* ── Contact ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mb-8"
        >
          <p className="font-sans text-ivory/25 text-xs tracking-widest uppercase mb-3">
            Get in Touch
          </p>
<div className="flex justify-center gap-4 flex-wrap">

  <a
    href={`mailto:${WEDDING.contact.email}`}
    className="font-sans text-ivory/40 text-xs hover:text-champagne transition-colors tracking-wide"
  >
    ✉ {WEDDING.contact.email}
  </a>

  <span className="text-ivory/20 text-xs">·</span>

  <a
    href={`tel:${WEDDING.contact.phone}`}
    className="font-sans text-ivory/40 text-xs hover:text-champagne transition-colors tracking-wide"
  >
    ☎ {WEDDING.contact.phone}
  </a>

</div>
        </motion.div>

        {/* ── Social links ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex justify-center gap-3 mb-10"
        >
          <SocialLink
            href="https://instagram.com/macchiattoesss"
            label="Instagram"
            
          />
          <SocialLink
            href="https://www.facebook.com/renor.obrino"
            label="Facebook"
            
          />
        </motion.div>

        {/* ── Bottom divider ────────────────────────────────── */}
        <div
          className="w-full h-px mb-6"
          style={{
            background: "linear-gradient(to right, transparent, rgba(201,169,110,0.2), transparent)",
          }}
        />

        {/* ── Copyright ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center"
        >
          <p className="font-sans text-ivory/20 text-xs tracking-widest">
            © {new Date().getFullYear()} {WEDDING.bride} & {WEDDING.groom} ·
            All Rights Reserved
          </p>
          <p className="font-sans text-ivory/12 text-xs tracking-wider mt-1"
            style={{ color: "rgba(255,255,255,0.1)" }}>
            Made with ✦ for our special day
          </p>
        </motion.div>

      </div>

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(201,169,110,0.06) 0%, transparent 70%)",
        }}
      />
    </footer>
  );
}


