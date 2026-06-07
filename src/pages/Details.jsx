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
        boxShadow: "0 8px 40px rgba(60,42,30,0.08)",
        border: "1px solid rgba(200,169,110,0.2)",
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
      style={{ borderColor: "rgba(200,169,110,0.15)" }}
      onClick={() => setOpen((p) => !p)}
    >
      <div className="flex items-center justify-between py-4 gap-4">
        <p className="font-serif text-espresso/80 text-sm">{question}</p>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-champagne text-sm flex-shrink-0"
        >
          down
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

function TimelineItem({ time, title, description, last = false }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #C8A96E, #D4B87A)" }}
        />
        {!last && (
          <div
            className="w-px flex-1 mt-1"
            style={{
              background: "rgba(200,169,110,0.25)",
              minHeight: "40px",
            }}
          />
        )}
      </div>
      <div className="pb-6">
        <p className="font-sans text-champagne text-xs tracking-widest mb-1">
          {time}
        </p>
        <p className="font-serif text-espresso/85 text-sm mb-1">{title}</p>
        {description && (
          <p className="font-sans text-espresso/45 text-xs leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

function ColorSwatch({ name, hex }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-12 h-12 rounded-full shadow-sm"
        style={{ background: hex, border: "1px solid rgba(60,42,30,0.08)" }}
      />
      <p className="font-sans text-espresso/60 text-xs text-center leading-tight">
        {name}
      </p>
    </div>
  );
}

export default function Details() {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "Is there parking available at the venue?",
      answer:
        "Yes, complimentary parking is available at both the ceremony and reception venues. Valet service will also be provided at the reception.",
    },
    {
      question: "Are children welcome at the wedding?",
      answer:
        "We love your little ones! Children are welcome at both the ceremony and reception. A kids corner with activities will be set up at the reception.",
    },
    {
      question: "What is the dress code?",
      answer:
        "Garden Formal. Think elegant florals, soft earth tones, sage greens, dusty roses, and champagne golds. Please avoid white and black out of respect for the couple.",
    },
    {
      question: "Will there be transportation between venues?",
      answer:
        "A complimentary shuttle will run between the ceremony and reception venues. The schedule will be shared closer to the date.",
    },
    {
      question: "Can I take photos during the ceremony?",
      answer:
        "We are having an unplugged ceremony. Please keep phones and cameras away during the ceremony so everyone can be fully present. Our photographer will capture every moment!",
    },
    {
      question: "What time should I arrive?",
      answer:
        "We recommend arriving at least 20 to 30 minutes before the ceremony start time to get seated comfortably. The doors will open 45 minutes prior.",
    },
    {
      question: "Is there a gift registry?",
      answer:
        "Your presence is our greatest gift! However if you wish to give, a cash gift or contribution to our honeymoon fund would be deeply appreciated.",
    },
    {
      question: "Who do I contact for questions?",
      answer:
        "Please reach out to us at " +
        WEDDING.contact.email +
        " or call " +
        WEDDING.contact.phone +
        ". We are happy to help with anything!",
    },
  ];

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

  return (
    <div className="min-h-screen bg-cream">

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => navigate("/")}
        className="fixed top-5 left-5 z-50 flex items-center gap-2 font-sans text-xs text-champagne/70 tracking-widest hover:text-champagne transition-colors bg-ivory/80 backdrop-blur-sm px-4 py-2 rounded-full"
        style={{ border: "1px solid rgba(200,169,110,0.3)" }}
      >
        Back
      </motion.button>

      {/* HERO */}
      <div
        className="relative text-center py-20 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #F0E8DC 0%, #F9F4EE 100%)",
          borderBottom: "1px solid rgba(200,169,110,0.15)",
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
        style={{ borderBottom: "1px solid rgba(200,169,110,0.12)" }}
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
                { label: "Venue", value: WEDDING.ceremony.venue },
                { label: "Address", value: WEDDING.ceremony.address },
                { label: "Time", value: WEDDING.ceremony.time },
                { label: "Attire", value: WEDDING.dresscode },
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
          <SectionHeading
            eyebrow="Where We Celebrate"
            title="The Reception"
          />
          <DetailCard style={{ background: "#FAF0E8" }}>
            <FloralCornerTR className="absolute top-0 right-0" size={60} />
            <FloralCornerBL className="absolute bottom-0 left-0" size={60} />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Venue", value: WEDDING.reception.venue },
                { label: "Address", value: WEDDING.reception.address },
                { label: "Time", value: WEDDING.reception.time },
                { label: "Note", value: "Dinner, dancing and celebration!" },
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

        {/* TIMELINE */}
        <Section delay={0.1}>
          <SectionHeading eyebrow="The Day" title="Timeline of Events" />
          <DetailCard>
            <TimelineItem
              time="3:00 PM"
              title="Doors Open"
              description="Guests arrive and are seated. Light string music plays."
            />
            <TimelineItem
              time="3:30 PM"
              title="Guest Seating"
              description="Ushers guide guests to their seats. Welcome drinks are served."
            />
            <TimelineItem
              time={WEDDING.ceremony.time}
              title="Ceremony Begins"
              description="The processional begins. Please be fully seated by this time."
            />
            <TimelineItem
              time="5:00 PM"
              title="Cocktail Hour"
              description="Mingle and enjoy canapes while the couple takes photos."
            />
            <TimelineItem
              time={WEDDING.reception.time}
              title="Reception Doors Open"
              description="Guests proceed to the reception venue for dinner."
            />
            <TimelineItem
              time="6:30 PM"
              title="Grand Entrance and Dinner"
              description="The newlyweds make their entrance followed by a seated dinner."
            />
            <TimelineItem
              time="8:00 PM"
              title="Speeches and Toasts"
              description="Heartfelt words from family and the wedding party."
            />
            <TimelineItem
              time="8:45 PM"
              title="First Dance and Dancing"
              description="The couple shares their first dance followed by open dancing."
            />
            <TimelineItem
              time="11:00 PM"
              title="Send Off"
              description="Guests line up for the sparkler send-off as the night concludes."
              last
            />
          </DetailCard>
        </Section>

        {/* DRESS CODE */}
        <Section delay={0.1}>
          <SectionHeading eyebrow="What to Wear" title="Dress Code" />
          <DetailCard style={{ background: "#F4F7F0" }}>
            <div className="text-center mb-6">
              <p
                className="font-script italic text-espresso/70 text-xl mb-2"
                style={{ fontWeight: 300 }}
              >
                Garden Formal
              </p>
              <p className="font-sans text-espresso/50 text-xs leading-relaxed max-w-sm mx-auto">
                Elegant garden attire in soft florals and earth tones. Ladies:
                floral dresses, chic jumpsuits, elegant midi dresses.
                Gentlemen: suits or slacks with a dress shirt.
              </p>
            </div>
            <div className="mt-6">
              <p className="font-sans text-champagne text-xs tracking-widest uppercase text-center mb-5">
                Suggested Color Palette
              </p>
              <div className="flex justify-center gap-5 flex-wrap">
                <ColorSwatch name="Ivory" hex="#FAF6F0" />
                <ColorSwatch name="Champagne" hex="#C8A96E" />
                <ColorSwatch name="Dusty Rose" hex="#C9A9A6" />
                <ColorSwatch name="Sage" hex="#9CAF88" />
                <ColorSwatch name="Parchment" hex="#E8DCC8" />
                <ColorSwatch name="Espresso" hex="#3C2A1E" />
              </div>
            </div>
            <div
              className="mt-6 p-4 rounded text-center"
              style={{
                background: "rgba(201,169,110,0.08)",
                border: "1px solid rgba(200,169,110,0.2)",
              }}
            >
              <p className="font-sans text-espresso/50 text-xs">
                Please avoid wearing white, ivory, or black out of respect for
                the couple
              </p>
            </div>
          </DetailCard>
        </Section>

        {/* PARKING */}
        <Section delay={0.1}>
          <SectionHeading
            eyebrow="Getting Here"
            title="Parking and Transport"
          />
          <DetailCard>
            <div className="space-y-5">
              {[
                {
                  title: "Ceremony Parking",
                  description:
                    "Free on-site parking is available at the ceremony venue. Enter via the main gate on Bloom Street. Overflow parking on the adjacent lot.",
                  icon: "P",
                },
                {
                  title: "Reception Parking",
                  description:
                    "Complimentary valet parking is provided at the reception venue. Self-parking also available in the building basement.",
                  icon: "C",
                },
                {
                  title: "Shuttle Service",
                  description:
                    "A complimentary shuttle runs between the ceremony and reception every 20 minutes from 4:30 PM to 7:00 PM.",
                  icon: "S",
                },
                {
                  title: "Ride Share",
                  description:
                    "Grab and Angkas drop-off points are marked at the main entrance of both venues.",
                  icon: "R",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 pb-5 last:pb-0 border-b last:border-b-0"
                  style={{ borderColor: "rgba(200,169,110,0.12)" }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-sans text-xs font-bold"
                    style={{
                      background: "rgba(200,169,110,0.15)",
                      color: "#C8A96E",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-serif text-espresso/85 text-sm mb-1">
                      {item.title}
                    </p>
                    <p className="font-sans text-espresso/50 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </DetailCard>
        </Section>

        {/* ACCOMMODATION */}
        <Section delay={0.1}>
          <SectionHeading eyebrow="Staying Over" title="Accommodation" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "The Garden Suites",
                distance: "5 min walk from venue",
                note: "Use code WEDDING2025 for 15% off",
                stars: "5 stars",
              },
              {
                name: "Bloom Boutique Hotel",
                distance: "10 min drive",
                note: "Complimentary breakfast included",
                stars: "4 stars",
              },
              {
                name: "Casa Rosario",
                distance: "8 min walk",
                note: "Charming heritage property",
                stars: "4 stars",
              },
              {
                name: "The Grand Residences",
                distance: "2 min walk from reception",
                note: "Special rate for wedding guests",
                stars: "5 stars",
              },
            ].map((hotel, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <DetailCard
                  className="h-full"
                  style={{
                    background: i % 2 === 0 ? "#FAF6F0" : "#FAF0E8",
                  }}
                >
                  <p className="font-sans text-champagne/70 text-xs mb-1">
                    {hotel.stars}
                  </p>
                  <p className="font-serif text-espresso/85 text-sm mb-1">
                    {hotel.name}
                  </p>
                  <p className="font-sans text-espresso/45 text-xs mb-2">
                    {hotel.distance}
                  </p>
                  <p
                    className="font-sans text-xs px-3 py-1.5 rounded inline-block"
                    style={{
                      background: "rgba(200,169,110,0.1)",
                      color: "#C8A96E",
                      border: "1px solid rgba(200,169,110,0.2)",
                    }}
                  >
                    {hotel.note}
                  </p>
                </DetailCard>
              </motion.div>
            ))}
          </div>
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
      background: "linear-gradient(135deg, #C8A96E, #D4B87A)",
      color: "#FAF6F0",
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
      border: "1px solid rgba(200,169,110,0.4)",
      color: "#C8A96E",
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
      background: "linear-gradient(135deg, #C8A96E, #D4B87A)",
      color: "#FAF6F0",
      boxShadow: "0 4px 16px rgba(200,169,110,0.25)",
      textDecoration: "none",
    }}
  >
    Email Us
  </a>

  <a
    href={"tel:" + WEDDING.contact.phone}
    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-sans text-xs tracking-[0.3em] uppercase transition-all"
    style={{
      border: "1px solid rgba(200,169,110,0.4)",
      color: "#C8A96E",
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