import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { WEDDING } from "../../weddingConfig";
import { FloralDivider } from "../FloralAccents/FloralSvg";

function TimeBlock({ value, label }) {
    const display = String(value).padStart(2, "0");

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Number box */}
      <div
        className="relative flex items-center justify-center rounded-lg mb-2"
        style={{
          width:      "72px",
          height:     "80px",
          background: "rgba(68,92,63,0.08)",
          border:     "1px solid rgba(68,92,63,0.25)",
          boxShadow:  "0 4px 20px rgba(68,92,63,0.1), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        {/* Flip line */}
        <div
          className="absolute w-full pointer-events-none"
          style={{
            top:        "50%",
            height:     "1px",
            background: "rgba(68,92,63,0.2)",
          }}
        />

        <AnimatedNumber value={display} />
      </div>

      {/* Label */}
      <p
        className="font-sans text-espresso/50 tracking-[0.3em] uppercase"
        style={{ fontSize: "10px" }}
      >
        {label}
      </p>
    </motion.div>
  );
}

function AnimatedNumber({ value }) {
  const [displayed, setDisplayed]   = useState(value);

useEffect(() => {
  if (value !== displayed) {
    setTimeout(() => {
      setDisplayed(value);
    }, 300);
  }
}, [value, displayed]);

  return (
    <motion.span
      key={displayed}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{    opacity: 0, y:  8 }}
      transition={{ duration: 0.3 }}
      className="font-script text-champagne"
      style={{ fontSize: "2.2rem", fontWeight: 400, lineHeight: 1 }}
    >
      {displayed}
    </motion.span>
  );
}

function Separator() {
  return (
    <motion.span
      animate={{ opacity: [1, 0.2, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className="font-script text-champagne/50 text-3xl self-start mt-3"
    >
      :
    </motion.span>
  );
}

function getTimeLeft(targetDate) {
  const now        = new Date().getTime();
  const target     = new Date(targetDate).getTime();
  const difference = target - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  return {
    days:    Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
    expired: false,
  };
}

export default function CountdownTimer({ variant = "full" }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(WEDDING.date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(WEDDING.date));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Compact variant — used in footer
  if (variant === "compact") {
    return (
      <div className="flex items-center gap-3 justify-center flex-wrap">
        {[
          { value: timeLeft.days,    label: "Days"    },
          { value: timeLeft.hours,   label: "Hours"   },
          { value: timeLeft.minutes, label: "Min"     },
          { value: timeLeft.seconds, label: "Sec"     },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="text-center">
              <p
                className="font-script text-champagne"
                style={{ fontSize: "1.8rem", lineHeight: 1 }}
              >
                {String(item.value).padStart(2, "0")}
              </p>
              <p
                className="font-sans text-ivory/50 tracking-widest uppercase"
                style={{ fontSize: "9px" }}
              >
                {item.label}
              </p>
            </div>
            {i < 3 && (
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="font-script text-champagne/40 text-xl self-start mt-1"
              >
                :
              </motion.span>
            )}
          </div>
        ))}
      </div>
    );
  }

  // Wedding day message
  if (timeLeft.expired) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <p
          className="font-script italic text-champagne"
          style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 300 }}
        >
          Today is the Day ✦
        </p>
        <p className="font-sans text-espresso/50 tracking-widest text-sm mt-3">
          {WEDDING.bride} & {WEDDING.groom}
        </p>
      </motion.div>
    );
  }

  // Full variant — used on Home / Details pages
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center py-10 px-6"
    >
      {/* Title */}
      <p
        className="font-sans text-espresso/40 tracking-[0.4em] uppercase text-xs mb-2"
      >
        Counting Down To
      </p>
      <p
        className="font-script italic text-espresso/70 mb-6"
        style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)", fontWeight: 300 }}
      >
        {WEDDING.bride} & {WEDDING.groom}
      </p>

      <div className="flex justify-center mb-5">
        <FloralDivider />
      </div>

      {/* Timer blocks */}
      <div className="flex items-start justify-center gap-2 mb-6">
        <TimeBlock value={timeLeft.days}    label="Days"    />
        <Separator />
        <TimeBlock value={timeLeft.hours}   label="Hours"   />
        <Separator />
        <TimeBlock value={timeLeft.minutes} label="Minutes" />
        <Separator />
        <TimeBlock value={timeLeft.seconds} label="Seconds" />
      </div>

      <div className="flex justify-center mb-5">
        <FloralDivider />
      </div>

      {/* Wedding date */}
      <p className="font-serif text-espresso/60 text-sm tracking-wide">
        {new Date(WEDDING.date).toLocaleDateString("en-US", {
          weekday: "long",
          year:    "numeric",
          month:   "long",
          day:     "numeric",
        })}
      </p>
      <p className="font-sans text-champagne/60 text-xs tracking-widest mt-1">
        {WEDDING.time} · {WEDDING.ceremony.venue}
      </p>
    </motion.div>
  );
}
