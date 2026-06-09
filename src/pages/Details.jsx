import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FloralCornerTL, FloralCornerTR,
  FloralCornerBL, FloralCornerBR,
  FloralDivider, WaxSeal,
} from "../components/FloralAccents/FloralSvg";
import CountdownTimer from "../components/CountdownTimer/CountdownTimer";
import { WEDDING } from "../weddingConfig";

function Section({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

function DetailCard({ children, className = "", style = {} }) {
  return (
    <div
      className={`relative bg-ivory rounded-lg px-7 py-7 ${className}`}
      style={{
        boxShadow: "0 8px 40px rgba(74,74,74,0.08)",
        border: "1px solid rgba(201,169,110,0.2)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="text-center mb-8">
      <p className="font-sans text-champagne tracking-[0.45em] text-xs uppercase mb-2">
        {eyebrow}
      </p>
      <h2
        className="font-script italic text-espresso"
        style={{ fontSize: "clamp(1.8rem, 5vw, 2.4rem)", fontWeight: 300 }}
      >
        {title}
      </h2>
      <div className="flex justify-center mt-4">
        <FloralDivider />
      </div>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b last:border-b-0 cursor-pointer"
      style={{ borderColor: "rgba(201,169,110,0.15)" }}
      onClick={() => setOpen((p) => !p)}
    >
      <div className="flex items-center justify-between py-4 gap-4">
        <p className="font-serif text-espresso/80 text-sm">{question}</p>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-champagne text-sm flex-shrink-0"
        >
          ↓
        </motion.span>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-sans text-espresso/55 text-sm leading-relaxed pb-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ColorSwatch({ name, hex }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-16 h-16 rounded-full border border-white/60 shadow-sm"
        style={{
          backgroundColor: hex,
        }}
      />
      <span className="font-sans text-[10px] uppercase tracking-wider text-espresso/60">
        {name}
      </span>
    </div>
  );
}

const dressCodePairs = [
  {
    color: "Dusty Blue",
    male: "https://res.cloudinary.com/drhkmwcsg/image/upload/v1781008667/ChatGPT_Image_Jun_9_2026_07_32_00_PM_kgbirl.png",
    female: "https://res.cloudinary.com/drhkmwcsg/image/upload/v1781008667/ChatGPT_Image_Jun_9_2026_07_41_56_PM_fzqzli.png",
  },
  {
    color: "Sage Green",
    male: "https://res.cloudinary.com/drhkmwcsg/image/upload/v1781008667/ChatGPT_Image_Jun_9_2026_07_48_12_PM_cqcykd.png",
    female: "https://res.cloudinary.com/drhkmwcsg/image/upload/v1781008673/ChatGPT_Image_Jun_9_2026_07_33_54_PM_mv20ec.pngL",
  },
  {
    color: "Champagne Beige",
    male: "https://res.cloudinary.com/drhkmwcsg/image/upload/v1781008672/ChatGPT_Image_Jun_9_2026_07_35_43_PM_jmdy2b.png",
    female: "https://res.cloudinary.com/drhkmwcsg/image/upload/v1781008668/ChatGPT_Image_Jun_9_2026_07_41_08_PM_j2soqy.png",
  },
];

export default function Details() {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "Is there parking available at the venue?",
      answer: "Yes, complimentary parking is available at both the ceremony and reception venues. Valet service will also be provided at the reception.",
    },
    {
      question: "Are children welcome at the wedding?",
      answer: "We love your little ones! Children are welcome at both the ceremony and reception. A kids corner with activities will be set up at the reception.",
    },
    {
      question: "What is the dress code?",
      answer: "Garden Formal. Think elegant florals, soft earth tones, sage greens, dusty roses, and champagne golds. Please avoid white and black out of respect for the couple.",
    },
    {
      question: "Will there be transportation between venues?",
      answer: "A complimentary shuttle will run between the ceremony and reception venues. The schedule will be shared closer to the date.",
    },
    {
      question: "Can I take photos during the ceremony?",
      answer: "We are having an unplugged ceremony. Please keep phones and cameras away during the ceremony so everyone can be fully present. Our photographer will capture every moment!",
    },
    {
      question: "What time should I arrive?",
      answer: "We recommend arriving at least 20 to 30 minutes before the ceremony start time to get seated comfortably. The doors will open 45 minutes prior.",
    },
    {
      question: "Is there a gift registry?",
      answer: "Your presence is our greatest gift! However if you wish to give, a cash gift or contribution to our honeymoon fund would be deeply appreciated.",
    },
    {
      question: "Who do I contact for questions?",
      answer: "Please reach out to us at " + WEDDING.contact.email + " or call " + WEDDING.contact.phone + ". We are happy to help with anything!",
    },
  ];

  const ceremonyMapUrl =
    "https://maps.google.com/?q=" + encodeURIComponent(WEDDING.ceremony.address);

  const receptionMapUrl =
    "https://maps.google.com/?q=" + encodeURIComponent(WEDDING.reception.address);

  const embedUrl =
    "https://maps.google.com/maps?q=" +
    encodeURIComponent(WEDDING.ceremony.address) +
    "&output=embed";

  return (
    <div className="min-h-screen bg-cream">

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => navigate("/")}
        className="fixed top-5 left-5 z-50 flex items-center gap-2 font-sans text-xs text-champagne/70 tracking-widest hover:text-champagne transition-colors bg-ivory/80 backdrop-blur-sm px-4 py-2 rounded-full"
        style={{ border: "1px solid rgba(201,169,110,0.3)" }}
      >
        Back
      </motion.button>

      {/* HERO */}
      <div
        className="relative text-center py-20 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #FDF0F5 0%, #FFFFFF 100%)",
          borderBottom: "1px solid rgba(201,169,110,0.15)",
        }}
      >
        <FloralCornerTL className="absolute top-0 left-0" size={110} />
        <FloralCornerTR className="absolute top-0 right-0" size={110} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="font-sans text-champagne tracking-[0.5em] text-xs uppercase mb-4">
            Wedding Details
          </p>
          <h1
            className="font-script italic text-espresso mb-3"
            style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)", fontWeight: 300 }}
          >
            {WEDDING.bride} and {WEDDING.groom}
          </h1>
          <div className="flex justify-center mb-4">
            <FloralDivider />
          </div>
          <p className="font-serif text-espresso/60 text-sm tracking-wide">
            {new Date(WEDDING.date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </motion.div>
      </div>

      {/* COUNTDOWN */}
      <div
        className="py-4 px-6"
        style={{ borderBottom: "1px solid rgba(201,169,110,0.12)" }}
      >
        <CountdownTimer variant="full" />
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12 space-y-14">

        {/* CEREMONY */}
        <Section>
          <SectionHeading eyebrow="Where We Begin" title="The Ceremony" />
          <DetailCard>
            <FloralCornerTL className="absolute top-0 left-0" size={60} />
            <FloralCornerBR className="absolute bottom-0 right-0" size={60} />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Venue",   value: WEDDING.ceremony.venue },
                { label: "Address", value: WEDDING.ceremony.address },
                { label: "Time",    value: WEDDING.ceremony.time },
                { label: "Attire",  value: WEDDING.dresscode },
              ].map((item, i) => (
                <div key={i}>
                  <p className="font-sans text-champagne text-xs tracking-widest uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="font-serif text-espresso/80 text-sm">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </DetailCard>
        </Section>

        {/* RECEPTION */}
        <Section delay={0.1}>
          <SectionHeading eyebrow="Where We Celebrate" title="The Reception" />
          <DetailCard style={{ background: "#FFFFFF" }}>
            <FloralCornerTR className="absolute top-0 right-0" size={60} />
            <FloralCornerBL className="absolute bottom-0 left-0" size={60} />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Venue",   value: WEDDING.reception.venue },
                { label: "Address", value: WEDDING.reception.address },
              ].map((item, i) => (
                <div key={i}>
                  <p className="font-sans text-champagne text-xs tracking-widest uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="font-serif text-espresso/80 text-sm">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </DetailCard>
        </Section>

        {/* DRESS CODE */}
<Section delay={0.1}>
  <SectionHeading eyebrow="What to Wear" title="Dress Code" />

  <DetailCard style={{ background: "#FFFFFF" }}>
    <div className="text-center mb-6">
      <p
        className="font-script italic text-espresso/70 text-xl mb-2"
        style={{ fontWeight: 300 }}
      >
        Garden Formal
      </p>

      <p className="font-sans text-espresso/50 text-xs leading-relaxed max-w-sm mx-auto mb-3">
        We look forward to celebrating in quiet style. To complement the
        natural beauty of our outdoor venue, we kindly request Garden Formal
        attire.
      </p>

      <p className="font-sans text-espresso/50 text-xs leading-relaxed max-w-sm mx-auto">
        As this is a formal garden occasion, we kindly request that guests opt
        for polished attire, avoiding jeans, t-shirts, or athletic footwear.
      </p>
    </div>

    {/* COLOR PALETTE */}
    <div className="mt-6">
      <p className="font-sans text-champagne text-xs tracking-widest uppercase text-center mb-5">
        Suggested Color Palette
      </p>

      <div
        className="flex justify-center gap-8 flex-wrap py-4"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.5), rgba(250,249,246,0.9))",
          borderRadius: "24px",
        }}
      >
        <ColorSwatch name="Dusty Blue" hex="#AFC7DD" />
        <ColorSwatch name="Sage Green" hex="#A8B59C" />
        <ColorSwatch name="Champagne" hex="#DCC9A3" />
      </div>
    </div>

    {/* ATTIRE INSPIRATION */}
    <div className="mt-10">
      <p className="font-sans text-champagne text-xs tracking-widest uppercase text-center mb-6">
        Attire Inspiration
      </p>

      <div className="space-y-8">
        {dressCodePairs.map((pair, index) => (
          <div
            key={index}
            className="rounded-3xl p-5"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.8), rgba(250,249,246,0.9))",
              border: "1px solid rgba(201,169,110,0.15)",
            }}
          >
            <h4
              className="font-script italic text-center text-xl text-espresso/70 mb-5"
              style={{ fontWeight: 300 }}
            >
              {pair.color}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="text-center">
                <img
                  src={pair.male}
                  alt={`${pair.color} Gentlemen`}
                  className="w-full max-w-[220px] mx-auto object-contain"
                />

                <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.25em] text-espresso/50">
                  Gentlemen
                </p>
              </div>

              <div className="text-center">
                <img
                  src={pair.female}
                  alt={`${pair.color} Ladies`}
                  className="w-full max-w-[220px] mx-auto object-contain"
                />

                <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.25em] text-espresso/50">
                  Ladies
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* NOTICE */}
    <div
      className="mt-8 p-4 rounded text-center"
      style={{
        background: "rgba(201,169,110,0.06)",
        border: "1px solid rgba(201,169,110,0.2)",
      }}
    >
      <p className="font-sans text-espresso/50 text-xs">
        Please strictly avoid wearing black or white.
      </p>
    </div>
  </DetailCard>
</Section>

        {/* GIFTS */}
<Section delay={0.1}>
  <SectionHeading eyebrow="With Love" title="Gifts" />

  <DetailCard style={{ background: "#FFFFFF" }}>
    <FloralCornerTL className="absolute top-0 left-0" size={60} />
    <FloralCornerBR className="absolute bottom-0 right-0" size={60} />

    <div className="relative z-10 text-center">
      <div className="flex justify-center mb-4">
        <WaxSeal size={48} />
      </div>

      <p
        className="font-script italic text-espresso/70 text-xl mb-4"
        style={{ fontWeight: 300 }}
      >
        Your Presence Is Our Present
      </p>

      <p className="font-sans text-espresso/55 text-sm leading-relaxed max-w-md mx-auto mb-4">
        The biggest gift to us is your support and presence at our wedding
      </p>

      <p className="font-sans text-espresso/55 text-sm leading-relaxed max-w-md mx-auto">
        However, should you honor and bless us with gifts, a monatary gift would be warmly 
        appreciated to help build our future.
      </p>

    </div>
  </DetailCard>
</Section>

        {/* MAP */}
        <Section delay={0.1}>
          <SectionHeading eyebrow="Find Us" title="Location Map" />
          <DetailCard className="overflow-hidden p-0">
            <iframe
              title="Wedding Venue Map"
              src={embedUrl}
              width="100%"
              height="320"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="px-6 py-4 flex flex-col sm:flex-row gap-3">
              <a
                href={ceremonyMapUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-2.5 rounded font-sans text-xs tracking-[0.3em] uppercase transition-all"
                style={{
                border: "1px solid rgba(201,169,110,0.35)",
                color: "#C9A96E",
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(8px)",
              }}
              >
                Ceremony Directions
              </a>
              <a
                href={receptionMapUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-2.5 rounded font-sans text-xs tracking-[0.3em] uppercase transition-all"
                style={{
                  border: "1px solid rgba(201,169,110,0.4)",
                  color: "#C9A96E",
                  textDecoration: "none",
                }}
              >
                Reception Directions
              </a>
            </div>
          </DetailCard>
        </Section> 

        {/* CONTACT */}
        <Section delay={0.1}>
          <SectionHeading eyebrow="Need Help?" title="Contact Us" />
          <DetailCard className="text-center">
            <FloralCornerTL className="absolute top-0 left-0" size={60} />
            <FloralCornerBR className="absolute bottom-0 right-0" size={60} />
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <WaxSeal size={48} />
              </div>
              <p
                className="font-script italic text-espresso/60 text-lg mb-5"
                style={{ fontWeight: 300 }}
              >
                We are happy to help with anything
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={"mailto:" + WEDDING.contact.email}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-sans text-xs tracking-[0.3em] uppercase transition-all"
                  style={{
                border: "1px solid rgba(201,169,110,0.35)",
                color: "#C9A96E",
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(8px)",
              }}
                >
                  Email Us
                </a>
                
                <a
                  href={"tel:" + WEDDING.contact.phone}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-sans text-xs tracking-[0.3em] uppercase transition-all"
                  style={{
                    border: "1px solid rgba(201,169,110,0.4)",
                    color: "#C9A96E",
                    textDecoration: "none",
                  }}
                >
                  Call Us
                </a>
              </div>
              <p className="font-sans text-espresso/35 text-xs mt-4">
                {WEDDING.contact.email} · {WEDDING.contact.phone}
              </p>
            </div>
          </DetailCard>
        </Section>

      </div>

      {/* Bottom floral */}
      <div className="relative h-24 overflow-hidden">
        <FloralCornerBL className="absolute bottom-0 left-0" size={100} />
        <FloralCornerBR className="absolute bottom-0 right-0" size={100} />
      </div>

    </div>
  );
}

