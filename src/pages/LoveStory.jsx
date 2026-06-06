import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FloralCornerTL, FloralCornerTR,
  FloralCornerBL, FloralCornerBR,
  FloralDivider, WaxSeal,
} from "../components/FloralAccents/FloralSvg";
import FloralAccents from "../components/FloralAccents/FloralAccents";
import { WEDDING } from "../weddingConfig";

// ─── Chapter data ──────────────────────────────────────────────────
// Replace photo URLs with your real Cloudinary URLs
const CHAPTERS = [
  {
    id:       1,
    number:   "I",
    eyebrow:  "Chapter One",
    title:    "First Meeting",
    subtitle: "Where it all began",
    color:    "#FAF0E8",
    accent:   "#C9A9A6",
    narrative: `Every love story has a beginning — a single moment where two worlds
      collide and nothing is ever quite the same again. For ${WEDDING.bride}
      and ${WEDDING.groom}, that moment arrived quietly, unexpectedly, and
      perfectly. They met on an ordinary day that turned out to be
      the most extraordinary day of their lives.`,
    photos: [
      {
        id:       "c1p1",
        url:      "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=600",
        caption:  "The beginning of everything",
        location: "Cebu City",
        story:    "This was taken on the day they first met. Neither knew then what it would become.",
      },
      {
        id:       "c1p2",
        url:      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600",
        caption:  "Getting to know each other",
        location: "Ayala Center Cebu",
        story:    "Their first proper conversation lasted four hours. They forgot to eat.",
      },
      {
        id:       "c1p3",
        url:      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600",
        caption:  "Something special was forming",
        location: "Cebu City",
        story:    "By the end of that week, they both knew this was different.",
      },
    ],
  },
  {
    id:       2,
    number:   "II",
    eyebrow:  "Chapter Two",
    title:    "Falling in Love",
    subtitle: "When friendship became forever",
    color:    "#F4F7F0",
    accent:   "#9CAF88",
    narrative: `What began as friendship slowly, beautifully transformed into
      something deeper. Late night conversations turned into shared dreams.
      Laughter turned into comfort. And somewhere between all the small
      moments, they fell — completely, irrevocably — in love.`,
    photos: [
      {
        id:       "c2p1",
        url:      "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=600",
        caption:  "Our first sunrise together",
        location: "Tops Lookout, Cebu",
        story:    "They stayed up all night talking and watched the sunrise together for the first time.",
      },
      {
        id:       "c2p2",
        url:      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600",
        caption:  "A quiet afternoon",
        location: "Botanical Garden",
        story:    "She read while he sketched. They did not need to say anything.",
      },
      {
        id:       "c2p3",
        url:      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600",
        caption:  "The moment we knew",
        location: "Somewhere beautiful",
        story:    "There was a specific Tuesday when they both realized this was love.",
      },
    ],
  },
  {
    id:       3,
    number:   "III",
    eyebrow:  "Chapter Three",
    title:    "Adventures Together",
    subtitle: "Every road led back to each other",
    color:    "#FAF6F0",
    accent:   "#C8A96E",
    narrative: `They built a life made of moments — sunrise hikes, lazy Sundays,
      road trips with no destination, and every ordinary Tuesday in between.
      They discovered that adventure is not a place you go but a person
      you go with. And with each other, every day felt like one.`,
    photos: [
      {
        id:       "c3p1",
        url:      "https://images.unsplash.com/photo-1527515637462-cff94edd08fe?w=600",
        caption:  "Our first road trip",
        location: "Oslob, Cebu",
        story:    "They got lost twice and it became their favourite memory.",
      },
      {
        id:       "c3p2",
        url:      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600",
        caption:  "Island hopping",
        location: "Camotes Island",
        story:    "She was afraid of the water. He held her hand. She jumped.",
      },
      {
        id:       "c3p3",
        url:      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600",
        caption:  "Dancing in the rain",
        location: "Somewhere on the road",
        story:    "It rained on their picnic. They danced instead.",
      },
    ],
  },
  {
    id:       4,
    number:   "IV",
    eyebrow:  "Chapter Four",
    title:    "The Proposal",
    subtitle: "Will you?",
    color:    "#FDF0F5",
    accent:   "#C9A9A6",
    narrative: `He had been planning it for months. She had no idea.
      On a quiet evening surrounded by everything she loved —
      candles, flowers, and their favourite song playing softly
      in the background — he got down on one knee and asked
      the only question that has ever truly mattered.
      Through tears and laughter, she said yes.`,
    photos: [
      {
        id:       "c4p1",
        url:      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600",
        caption:  "The moment before",
        location: "The Garden Chapel",
        story:    "He was so nervous he forgot the speech he had rehearsed for weeks.",
      },
      {
        id:       "c4p2",
        url:      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600",
        caption:  "She said yes",
        location: "The Garden Chapel",
        story:    "She cried before he even finished the question.",
      },
      {
        id:       "c4p3",
        url:      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600",
        caption:  "The ring",
        location: "The Garden Chapel",
        story:    "He chose the ring six months before he proposed. He was certain from the start.",
      },
    ],
  },
  {
    id:       5,
    number:   "V",
    eyebrow:  "Chapter Five",
    title:    "Forever Begins",
    subtitle: "And so the greatest adventure starts",
    color:    "#F0EDF8",
    accent:   "#9CAF88",
    narrative: `Now they stand at the edge of forever, hand in hand,
      hearts full of gratitude for every moment that brought them here.
      The story that began with a single meeting is becoming
      something eternal. And on ${new Date(WEDDING.date).toLocaleDateString("en-US", {
        month: "long", day: "numeric", year: "numeric",
      })}, surrounded by everyone they love, their greatest
      chapter begins.`,
    photos: [
      {
        id:       "c5p1",
        url:      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600",
        caption:  "Our prenuptial session",
        location: "Secret Garden, Cebu",
        story:    "Golden hour, flowers everywhere, and the two of them — completely at home.",
      },
      {
        id:       "c5p2",
        url:      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600",
        caption:  "Ready for forever",
        location: "Secret Garden, Cebu",
        story:    "These photos are just a preview. The best moments are yet to come.",
      },
      {
        id:       "c5p3",
        url:      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600",
        caption:  "See you at the altar",
        location: "The Garden Chapel",
        story:    "Everything has been leading to this. We cannot wait.",
      },
    ],
  },
];

// ─── Photo card ────────────────────────────────────────────────────
function PhotoCard({ photo, index, onPhotoClick, accent }) {
  const rotations = [-2, 1.5, -1, 2.5, -1.5, 1];
  const rotate    = rotations[index % rotations.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: rotate * 0.5 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 10 }}
      onClick={() => onPhotoClick(photo)}
      className="cursor-pointer relative"
      style={{ transformOrigin: "center center" }}
    >
      {/* Polaroid frame */}
      <div
        className="bg-white p-3 pb-10 shadow-lg"
        style={{
          boxShadow: "0 8px 32px rgba(60,42,30,0.15), 0 2px 8px rgba(60,42,30,0.08)",
        }}
      >
        {/* Photo */}
        <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
          <img
            src={photo.url}
            alt={photo.caption}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Polaroid caption */}
        <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
          <p
            className="font-script italic text-espresso/60"
            style={{ fontSize: "0.85rem", fontWeight: 300 }}
          >
            {photo.caption}
          </p>
        </div>
      </div>

      {/* Location pin */}
      <div
        className="absolute -top-2 -right-2 px-2 py-1 rounded-full font-sans text-white"
        style={{
          background: accent,
          fontSize:   "9px",
          letterSpacing: "0.05em",
        }}
      >
        📍 {photo.location}
      </div>
    </motion.div>
  );
}

// ─── Photo lightbox ────────────────────────────────────────────────
function PhotoLightbox({ photo, onClose, onPrev, onNext, hasPrev, hasNext }) {
  if (!photo) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{    opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(30,20,12,0.92)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, y: 30 }}
        animate={{ scale: 1,    y: 0  }}
        exit={{    scale: 0.85, y: 30 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative max-w-2xl w-full bg-white"
        style={{
          padding:   "16px 16px 48px",
          boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full font-sans text-espresso/60 hover:text-espresso transition-colors"
          style={{ background: "rgba(249,244,238,0.9)" }}
        >
          ✕
        </button>

        {/* Image */}
        <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
          <img
            src={photo.url}
            alt={photo.caption}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Caption strip */}
        <div className="absolute bottom-0 left-0 right-0 text-center pb-3 pt-2">
          <p
            className="font-script italic text-espresso/70"
            style={{ fontSize: "1rem", fontWeight: 300 }}
          >
            {photo.caption}
          </p>
          <p className="font-sans text-espresso/40 text-xs mt-0.5">
            📍 {photo.location}
          </p>
        </div>

        {/* Story */}
        {photo.story && (
          <div
            className="absolute -bottom-14 left-0 right-0 text-center"
            style={{ pointerEvents: "none" }}
          >
            <p className="font-sans text-ivory/60 text-xs leading-relaxed px-4">
              {photo.story}
            </p>
          </div>
        )}

        {/* Prev / Next */}
        {hasPrev && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 flex items-center justify-center rounded-full font-sans text-ivory/70 hover:text-ivory transition-colors"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            ←
          </button>
        )}
        {hasNext && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 flex items-center justify-center rounded-full font-sans text-ivory/70 hover:text-ivory transition-colors"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            →
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}

// ─── Chapter section ───────────────────────────────────────────────
function ChapterSection({ chapter, isLast }) {
  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const allPhotos = chapter.photos;

  function openPhoto(photo) {
    const idx = allPhotos.findIndex((p) => p.id === photo.id);
    setLightboxIndex(idx);
    setLightboxPhoto(photo);
  }

  function goPrev() {
    const newIdx = lightboxIndex - 1;
    setLightboxIndex(newIdx);
    setLightboxPhoto(allPhotos[newIdx]);
  }

  function goNext() {
    const newIdx = lightboxIndex + 1;
    setLightboxIndex(newIdx);
    setLightboxPhoto(allPhotos[newIdx]);
  }

  return (
    <>
      <section
        className="relative py-16 px-4"
        style={{ background: chapter.color }}
      >
        {/* Chapter number watermark */}
        <div
          className="absolute top-8 right-6 font-script italic select-none pointer-events-none"
          style={{
            fontSize:  "8rem",
            color:     chapter.accent,
            opacity:   0.07,
            lineHeight: 1,
          }}
        >
          {chapter.number}
        </div>

        <div className="max-w-3xl mx-auto">

          {/* Chapter heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <p
              className="font-sans tracking-[0.5em] text-xs uppercase mb-2"
              style={{ color: chapter.accent }}
            >
              {chapter.eyebrow}
            </p>
            <h2
              className="font-script italic text-espresso mb-2"
              style={{ fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 300 }}
            >
              {chapter.title}
            </h2>
            <p
              className="font-sans text-espresso/45 text-xs tracking-widest italic mb-4"
            >
              {chapter.subtitle}
            </p>
            <div className="flex justify-center">
              <FloralDivider />
            </div>
          </motion.div>

          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-xl mx-auto text-center mb-12"
          >
            <p
              className="font-script italic text-espresso/65 leading-relaxed"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", fontWeight: 300 }}
            >
              {chapter.narrative}
            </p>
          </motion.div>

          {/* Photo grid — scrapbook layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-2">
            {chapter.photos.map((photo, i) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                index={i}
                onPhotoClick={openPhoto}
                accent={chapter.accent}
              />
            ))}
          </div>

        </div>

        {/* Connector to next chapter */}
        {!isLast && (
          <div className="flex flex-col items-center mt-14 gap-2">
            <FloralDivider />
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-sans text-xs tracking-widest uppercase"
              style={{ color: chapter.accent, opacity: 0.6 }}
            >
              continue the story ↓
            </motion.div>
          </div>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxPhoto && (
          <PhotoLightbox
            photo={lightboxPhoto}
            onClose={() => setLightboxPhoto(null)}
            onPrev={goPrev}
            onNext={goNext}
            hasPrev={lightboxIndex > 0}
            hasNext={lightboxIndex < allPhotos.length - 1}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Chapter nav pill ──────────────────────────────────────────────
function ChapterNav({ chapters, activeChapter, onChapterClick }) {
  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full"
      style={{
        background:   "rgba(249,244,238,0.92)",
        backdropFilter: "blur(12px)",
        boxShadow:    "0 8px 32px rgba(60,42,30,0.15)",
        border:       "1px solid rgba(200,169,110,0.3)",
      }}
    >
      {chapters.map((ch) => (
        <button
          key={ch.id}
          onClick={() => onChapterClick(ch.id)}
          title={ch.title}
          className="flex items-center justify-center transition-all duration-300 font-script italic"
          style={{
            width:      activeChapter === ch.id ? "36px" : "28px",
            height:     activeChapter === ch.id ? "36px" : "28px",
            borderRadius: "50%",
            background: activeChapter === ch.id
              ? "linear-gradient(135deg, #C8A96E, #D4B87A)"
              : "transparent",
            color:      activeChapter === ch.id ? "#FAF6F0" : "#C8A96E",
            fontSize:   activeChapter === ch.id ? "0.85rem" : "0.75rem",
            border:     activeChapter === ch.id
              ? "none"
              : "1px solid rgba(200,169,110,0.3)",
          }}
        >
          {ch.number}
        </button>
      ))}
    </div>
  );
}

// ─── Main export ───────────────────────────────────────────────────
export default function LoveStory() {
  const navigate          = useNavigate();
  const [activeChapter, setActiveChapter] = useState(1);
  const chapterRefs       = useRef({});

  function scrollToChapter(id) {
    setActiveChapter(id);
    chapterRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-cream">
      <FloralAccents active count={8} />

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

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div
        className="relative min-h-[55vh] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #F0E4D4 0%, #F9F4EE 100%)",
          borderBottom: "1px solid rgba(200,169,110,0.15)",
        }}
      >
        <FloralCornerTL className="absolute top-0 left-0"   size={120} />
        <FloralCornerTR className="absolute top-0 right-0"  size={120} />
        <FloralCornerBL className="absolute bottom-0 left-0"  size={80} />
        <FloralCornerBR className="absolute bottom-0 right-0" size={80} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <p className="font-sans text-champagne tracking-[0.6em] text-xs uppercase mb-5">
            A Love Story in Five Chapters
          </p>

          <h1
            className="font-script italic text-espresso mb-3"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", fontWeight: 300, lineHeight: 1.1 }}
          >
            {WEDDING.bride}
          </h1>
          <p className="font-sans text-champagne text-lg mb-3 tracking-widest">&</p>
          <h1
            className="font-script italic text-espresso mb-6"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", fontWeight: 300, lineHeight: 1.1 }}
          >
            {WEDDING.groom}
          </h1>

          <div className="flex justify-center mb-6">
            <FloralDivider />
          </div>

          <p
            className="font-script italic text-espresso/50 max-w-md mx-auto leading-relaxed"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", fontWeight: 300 }}
          >
            "The best love is the kind that awakens the soul and makes us
            reach for more — that plants a fire in our hearts and brings
            peace to our minds."
          </p>

          <div className="flex justify-center mt-6">
            <WaxSeal size={52} />
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <p className="font-sans text-champagne/40 text-xs tracking-[0.4em] uppercase">
            begin reading ↓
          </p>
        </motion.div>
      </div>

      {/* ── CHAPTER INDEX ─────────────────────────────────────── */}
      <div
        className="py-10 px-4 text-center"
        style={{ borderBottom: "1px solid rgba(200,169,110,0.12)" }}
      >
        <p className="font-sans text-champagne tracking-[0.4em] text-xs uppercase mb-6">
          Chapters
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {CHAPTERS.map((ch) => (
            <motion.button
              key={ch.id}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollToChapter(ch.id)}
              className="px-5 py-2.5 rounded font-sans text-xs tracking-widest transition-all"
              style={{
                background: activeChapter === ch.id
                  ? "linear-gradient(135deg, #C8A96E, #D4B87A)"
                  : "transparent",
                color:  activeChapter === ch.id ? "#FAF6F0" : "#C8A96E",
                border: `1px solid rgba(200,169,110,${activeChapter === ch.id ? 0 : 0.35})`,
              }}
            >
              {ch.eyebrow}
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── CHAPTERS ──────────────────────────────────────────── */}
      {CHAPTERS.map((chapter, i) => (
        <div
          key={chapter.id}
          ref={(el) => (chapterRefs.current[chapter.id] = el)}
        >
          <ChapterSection
            chapter={chapter}
            isLast={i === CHAPTERS.length - 1}
          />
        </div>
      ))}

      {/* ── CLOSING ───────────────────────────────────────────── */}
      <section
        className="relative py-20 px-6 text-center overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #F9F4EE 0%, #F0E4D4 100%)",
          borderTop:  "1px solid rgba(200,169,110,0.15)",
        }}
      >
        <FloralCornerBL className="absolute bottom-0 left-0"  size={110} />
        <FloralCornerBR className="absolute bottom-0 right-0" size={110} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-lg mx-auto"
        >
          <div className="flex justify-center mb-6">
            <WaxSeal size={60} />
          </div>

          <p className="font-sans text-champagne tracking-[0.5em] text-xs uppercase mb-4">
            The Next Chapter
          </p>

          <h2
            className="font-script italic text-espresso mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300 }}
          >
            Forever Starts Here
          </h2>

          <div className="flex justify-center mb-6">
            <FloralDivider />
          </div>

          <p
            className="font-script italic text-espresso/55 leading-relaxed mb-8"
            style={{ fontSize: "1.05rem", fontWeight: 300 }}
          >
            And so the story continues — not in pages but in years,
            not in chapters but in a lifetime. We cannot wait to write
            the rest with you by our side.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/rsvp")}
              className="px-8 py-3.5 rounded font-sans text-xs tracking-[0.35em] uppercase"
              style={{
                background: "linear-gradient(135deg, #C8A96E, #D4B87A)",
                color:      "#FAF6F0",
                boxShadow:  "0 4px 20px rgba(200,169,110,0.3)",
              }}
            >
              RSVP Now ✦
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/details")}
              className="px-8 py-3.5 rounded font-sans text-xs tracking-[0.35em] uppercase"
              style={{
                border: "1px solid rgba(200,169,110,0.4)",
                color:  "#C8A96E",
              }}
            >
              View Details
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Floating chapter nav */}
      <ChapterNav
        chapters={CHAPTERS}
        activeChapter={activeChapter}
        onChapterClick={scrollToChapter}
      />

      {/* Bottom padding for nav */}
      <div className="h-20" />
    </div>
  );
}