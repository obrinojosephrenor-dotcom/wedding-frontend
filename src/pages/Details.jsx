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
        border: "1px solid rgba(247,214,224,0.4)",
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
      style={{ borderColor: "rgba(247,214,224,0.4)" }}
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
        className="w-14 h-14 rounded-full border shadow-sm"
        style={{
          backgroundColor: hex,
          borderColor: "rgba(247,214,224,0.5)",
        }}
      />
      <span className="font-sans text-xs tracking-wider text-espresso/55 text-center leading-tight">
        {name}
      </span>
    </div>
  );
}

const dressCodePairs = [
  {
    color: "Dusty Blue",
    male:   "https://res.cloudinary.com/drhkmwcsg/image/upload/w_720,h_1280,c_fill,q_auto,f_auto/v1781009884/4_playih.png",
    female: "https://res.cloudinary.com/drhkmwcsg/image/upload/w_720,h_1280,c_fill,q_auto,f_auto/v1781009883/ChatGPT_Image_Jun_9_2026_07_41_56_PM_laqkdh.png",
  },
  {
    color: "Sage Green",
    male:   "https://res.cloudinary.com/drhkmwcsg/image/upload/w_720,h_1280,c_fill,q_auto,f_auto/v1781009886/3_vodfxo.png",
    female: "https://res.cloudinary.com/drhkmwcsg/image/upload/w_720,h_1280,c_fill,q_auto,f_auto/v1781009883/ChatGPT_Image_Jun_9_2026_07_48_12_PM_lrsb8q.png",
  },
  {
    color: "Champagne Beige",
    male:   "https://res.cloudinary.com/drhkmwcsg/image/upload/w_720,h_1280,c_fill,q_auto,f_auto/v1781009884/2_z4luws.png",
    female: "https://res.cloudinary.com/drhkmwcsg/image/upload/w_720,h_1280,c_fill,q_auto,f_auto/v1781009885/1_vausaa.png",
  },
];

export default function Details() {
  const navigate = useNavigate();

  // Build map URLs safely from address strings
  const ceremonyMapUrl =
    "https://maps.google.com/?q=" +
    encodeURIComponent(WEDDING.ceremony.address);

  const receptionMapUrl =
    "https://maps.google.com/?q=" +
    encodeURIComponent(WEDDING.reception.address);

  const embedUrl =
    "https://maps.google.com/maps?q=" +
    encodeURIComponent(WEDDING.ceremony.address) +
    "&output=embed";

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
      answer: "Garden Formal. Think elegant florals, soft earth tones, sage greens, dusty blues, and champagne beige. Please avoid white and black out of respect for the couple.",
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
      answer: "Your presence is our greatest gift! However if you wish to give, a monetary gift would be warmly appreciated to help build our future.",
    },
    {
      question: "Who do I contact for questions?",
      answer: "Please reach out to us at " + WEDDING.contact.email + " or call " + WEDDING.contact.phone + ". We are happy to help with anything!",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#FFFFFF" }}>

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => navigate("/")}
        className="fixed top-5 left-5 z-50 flex items-center gap-2 font-sans text-xs tracking-widest hover:opacity-80 transition-opacity px-4 py-2 rounded-full"
        style={{
          color: "#C9A96E",
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(247,214,224,0.5)",
          backdropFilter: "blur(8px)",
        }}
      >
        Back
      </motion.button>

      {/* HERO */}
      <div
        className="relative text-center py-20 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #FFF0F5 0%, #FFFFFF 100%)",
          borderBottom: "1px solid rgba(247,214,224,0.3)",
        }}
      >
        <FloralCornerTL className="absolute top-0 left-0" size={130} />
        <FloralCornerTR className="absolute top-0 right-0" size={130} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p
            className="font-sans tracking-[0.5em] text-xs uppercase mb-4"
            style={{ color: "#C9A96E" }}
          >
            Wedding Details
          </p>
          <h1
            className="font-script italic mb-3"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 4rem)",
              fontWeight: 300,
              color: "#4A4A4A",
            }}
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
        style={{ borderBottom: "1px solid rgba(247,214,224,0.25)" }}
      >
        <CountdownTimer variant="full" />
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12 space-y-14">

        {/* CEREMONY */}
        <Section>
          <SectionHeading eyebrow="Where We Begin" title="The Ceremony" />
          <DetailCard>
            <FloralCornerTL className="absolute top-0 left-0" size={70} />
            <FloralCornerBR className="absolute bottom-0 right-0" size={70} />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Venue",   value: WEDDING.ceremony.venue },
                { label: "Address", value: WEDDING.ceremony.address },
                { label: "Time",    value: WEDDING.ceremony.time },
                { label: "Attire",  value: WEDDING.dresscode },
              ].map((item, i) => (
                <div key={i}>
                  <p
                    className="font-sans text-xs tracking-widest uppercase mb-1"
                    style={{ color: "#C9A96E" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="font-serif text-sm"
                    style={{ color: "rgba(74,74,74,0.8)" }}
                  >
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
          <DetailCard>
            <FloralCornerTR className="absolute top-0 right-0" size={70} />
            <FloralCornerBL className="absolute bottom-0 left-0" size={70} />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Venue",   value: WEDDING.reception.venue },
                { label: "Address", value: WEDDING.reception.address },
                { label: "Time",    value: WEDDING.reception.time },
                { label: "Note",    value: "Dinner, dancing and celebration!" },
              ].map((item, i) => (
                <div key={i}>
                  <p
                    className="font-sans text-xs tracking-widest uppercase mb-1"
                    style={{ color: "#C9A96E" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="font-serif text-sm"
                    style={{ color: "rgba(74,74,74,0.8)" }}
                  >
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
          <DetailCard>
            <div className="text-center mb-6">
              <p
                className="font-script italic text-xl mb-3"
                style={{ fontWeight: 300, color: "rgba(74,74,74,0.7)" }}
              >
                Garden Formal
              </p>
              <p
                className="font-sans text-xs leading-relaxed max-w-sm mx-auto mb-3"
                style={{ color: "rgba(74,74,74,0.55)" }}
              >
                We look forward to celebrating in quiet style. To complement
                the natural beauty of our outdoor venue, we kindly request
                Garden Formal attire.
              </p>
              <p
                className="font-sans text-xs leading-relaxed max-w-sm mx-auto"
                style={{ color: "rgba(74,74,74,0.55)" }}
              >
                As this is a formal garden occasion, we kindly request that
                guests opt for polished attire, avoiding jeans, t-shirts, or
                athletic footwear.
              </p>
            </div>

            {/* Color palette */}
            <div className="mt-6">
              <p
                className="font-sans text-xs tracking-widest uppercase text-center mb-5"
                style={{ color: "#C9A96E" }}
              >
                Suggested Color Palette
              </p>
              <div className="flex justify-center gap-5 flex-wrap py-4 rounded-3xl"
                style={{ background: "rgba(247,214,224,0.06)" }}>
                <ColorSwatch name="Blush Pink"     hex="#f2d9d9" />
                <ColorSwatch name="Sage Green"     hex="#d0e6cc" />
                <ColorSwatch name="Butter Yellow"  hex="#f8e1a1" />
                <ColorSwatch name="Taupe"          hex="#a89a84" />
                <ColorSwatch name="Dusty Blue"     hex="#74b0e3" />
                <ColorSwatch name="Silver"         hex="#cbd2cf" />
              </div>
            </div>

            {/* Attire inspiration */}
            <div className="mt-10">
              <p
                className="font-sans text-xs tracking-widest uppercase text-center mb-6"
                style={{ color: "#C9A96E" }}
              >
                Attire Inspiration
              </p>
              <div className="space-y-8">
                {dressCodePairs.map((pair, index) => (
                  <div
                    key={index}
                    className="rounded-3xl p-5"
                    style={{
                      background: "linear-gradient(180deg, #FFFFFF, #FAF9F6)",
                      border: "1px solid rgba(247,214,224,0.35)",
                    }}
                  >
                    <h4
                      className="font-script italic text-center text-xl mb-5"
                      style={{ fontWeight: 300, color: "rgba(74,74,74,0.7)" }}
                    >
                      {pair.color}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                      <div className="text-center">
                        <img
                          src={pair.male}
                          alt={pair.color + " Gentlemen"}
                          className="w-full max-w-[220px] mx-auto object-contain"
                        />
                        <p
                          className="mt-3 font-sans uppercase tracking-widest"
                          style={{ fontSize: "10px", color: "rgba(74,74,74,0.5)" }}
                        >
                          Gentlemen
                        </p>
                      </div>
                      <div className="text-center">
                        <img
                          src={pair.female}
                          alt={pair.color + " Ladies"}
                          className="w-full max-w-[220px] mx-auto object-contain"
                        />
                        <p
                          className="mt-3 font-sans uppercase tracking-widest"
                          style={{ fontSize: "10px", color: "rgba(74,74,74,0.5)" }}
                        >
                          Ladies
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notice */}
            <div
              className="mt-8 p-4 rounded-xl text-center"
              style={{
                background: "rgba(247,214,224,0.12)",
                border: "1px solid rgba(247,214,224,0.4)",
              }}
            >
              <p
                className="font-sans text-sm"
                style={{ fontWeight: 600, color: "rgba(74,74,74,0.7)", letterSpacing: "0.02em" }}
              >
                Please strictly avoid wearing black or white.
              </p>
            </div>
          </DetailCard>
        </Section>

        {/* GIFTS */}
        <Section delay={0.1}>
          <SectionHeading eyebrow="With Love" title="Gifts" />
          <DetailCard>
            <FloralCornerTL className="absolute top-0 left-0" size={70} />
            <FloralCornerBR className="absolute bottom-0 right-0" size={70} />
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-4">
                <WaxSeal size={52} />
              </div>
              <p
                className="font-script italic text-xl mb-4"
                style={{ fontWeight: 300, color: "rgba(74,74,74,0.7)" }}
              >
                Your Presence Is Our Present
              </p>
              <p
                className="font-sans text-sm leading-relaxed max-w-md mx-auto mb-4"
                style={{ color: "rgba(74,74,74,0.55)" }}
              >
                The biggest gift to us is your support and presence at our wedding.
              </p>
              <p
                className="font-sans text-sm leading-relaxed max-w-md mx-auto"
                style={{ color: "rgba(74,74,74,0.55)" }}
              >
                However, should you honor and bless us with gifts, a monetary
                gift would be warmly appreciated to help build our future.
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
                  background: "linear-gradient(135deg, #F4B8CC, #DDEAF7)",
                  color: "#4A4A4A",
                  textDecoration: "none",
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
                  border: "1px solid rgba(247,214,224,0.6)",
                  color: "#C9A96E",
                  textDecoration: "none",
                }}
              >
                Reception Directions
              </a>
            </div>
          </DetailCard>
        </Section>

        {/* FAQ */}
        <Section delay={0.1}>
          <SectionHeading eyebrow="Questions" title="Frequently Asked" />
          <DetailCard>
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </DetailCard>
        </Section>

        {/* CONTACT */}
        <Section delay={0.1}>
          <SectionHeading eyebrow="Need Help?" title="Contact Us" />
          <DetailCard className="text-center">
            <FloralCornerTL className="absolute top-0 left-0" size={70} />
            <FloralCornerBR className="absolute bottom-0 right-0" size={70} />
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <WaxSeal size={48} />
              </div>
              <p
                className="font-script italic text-lg mb-5"
                style={{ fontWeight: 300, color: "rgba(74,74,74,0.6)" }}
              >
                We are happy to help with anything
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={"mailto:" + WEDDING.contact.email}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-sans text-xs tracking-[0.3em] uppercase transition-all"
                  style={{
                    background: "linear-gradient(135deg, #F4B8CC, #DDEAF7)",
                    color: "#4A4A4A",
                    textDecoration: "none",
                  }}
                >
                  Email Us
                </a>
                
                <a
                  href={"tel:" + WEDDING.contact.phone}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-sans text-xs tracking-[0.3em] uppercase transition-all"
                  style={{
                    border: "1px solid rgba(247,214,224,0.6)",
                    color: "#C9A96E",
                    textDecoration: "none",
                  }}
                >
                  Call Us
                </a>
              </div>
              <p
                className="font-sans text-xs mt-4"
                style={{ color: "rgba(74,74,74,0.35)" }}
              >
                {WEDDING.contact.email} · {WEDDING.contact.phone}
              </p>
            </div>
          </DetailCard>
        </Section>

      </div>

      {/* Bottom floral */}
      <div className="relative h-28 overflow-hidden">
        <FloralCornerBL className="absolute bottom-0 left-0" size={120} />
        <FloralCornerBR className="absolute bottom-0 right-0" size={120} />
      </div>

    </div>
  );
}