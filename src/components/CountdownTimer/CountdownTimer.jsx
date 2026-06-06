import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FloralCornerTL, FloralCornerTR,
  FloralCornerBL, FloralCornerBR,
  FloralDivider, WaxSeal,
} from "../components/FloralAccents/FloralSvg";
import FloralAccents from "../components/FloralAccents/FloralAccents";
import { WEDDING }   from "../weddingConfig";

const API = import.meta.env.VITE_API_BASE_URL;

// ─── Reusable field wrapper ────────────────────────────────────────
function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-sans text-espresso/50 text-xs tracking-widest uppercase">
        {label}
      </label>
      {children}
      {error && (
        <p className="font-sans text-red-400 text-xs mt-0.5">{error}</p>
      )}
    </div>
  );
}

// ─── Shared input style ───────────────────────────────────────────
const inputClass = `
  w-full bg-transparent border-b border-champagne/40
  font-sans text-espresso text-sm py-2 px-0
  focus:outline-none focus:border-champagne
  placeholder:text-espresso/25
  transition-colors duration-200
`.trim();

const selectClass = `
  w-full bg-ivory border border-champagne/30 rounded
  font-sans text-espresso text-sm py-2 px-3
  focus:outline-none focus:border-champagne
  transition-colors duration-200
`.trim();

export default function RSVP() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    guestName:  "",
    email:      "",
    mobile:     "",
    attending:  "yes",
    guestCount: 1,
    dietary:    "",
    message:    "",
  });

  const [errors,    setErrors]    = useState({});
  const [loading,   setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError,  setApiError]  = useState("");

  const set = (key) => (e) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  // ─── Validation ──────────────────────────────────────────────
  function validate() {
    const e = {};
    if (!form.guestName.trim())
      e.guestName = "Please enter your name";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email";
    if (form.mobile && !/^[0-9+\s\-()]{7,15}$/.test(form.mobile))
      e.mobile = "Please enter a valid mobile number";
    if (form.guestCount < 1 || form.guestCount > 10)
      e.guestCount = "Between 1 and 10 guests";
    return e;
  }

  // ─── Submit ───────────────────────────────────────────────────
  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    setApiError("");

    try {
      const res = await fetch(`${API}/api/rsvp`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setSubmitted(true);
    } catch (err) {
      setApiError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // ─── Thank You screen ─────────────────────────────────────────
  if (submitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-4">
        <FloralAccents active count={10} />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1,   y: 0  }}
          transition={{ duration: 0.8 }}
          className="relative text-center max-w-sm mx-auto px-8 py-12 bg-ivory rounded-lg"
          style={{
            boxShadow: "0 20px 60px rgba(60,42,30,0.12)",
            border:    "1px solid rgba(200,169,110,0.25)",
          }}
        >
          <FloralCornerTL className="absolute top-0 left-0"     size={70} />
          <FloralCornerTR className="absolute top-0 right-0"    size={70} />
          <FloralCornerBL className="absolute bottom-0 left-0"  size={70} />
          <FloralCornerBR className="absolute bottom-0 right-0" size={70} />

          <div className="flex justify-center mb-5">
            <WaxSeal size={56} />
          </div>

          <p
            className="font-script italic text-champagne mb-3"
            style={{ fontSize: "clamp(1.8rem, 5vw, 2.4rem)", fontWeight: 300 }}
          >
            With Gratitude
          </p>

          <div className="flex justify-center mb-4">
            <FloralDivider />
          </div>

          <p className="font-sans text-espresso/60 text-sm leading-relaxed mb-2">
            Thank you, <span className="font-serif text-champagne">{form.guestName}</span>!
          </p>
          <p className="font-sans text-espresso/45 text-xs leading-relaxed mb-6">
            {form.attending === "yes"
              ? "We are so excited to celebrate with you. See you on our special day! ✦"
              : "We will miss you dearly. Thank you for letting us know. ✦"}
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/")}
            className="font-sans text-xs tracking-[0.3em] uppercase px-7 py-3 rounded transition-all"
            style={{
              background: "linear-gradient(135deg, #C8A96E, #D4B87A)",
              color:      "#FAF6F0",
              boxShadow:  "0 4px 16px rgba(200,169,110,0.3)",
            }}
          >
            Back to Invitation
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // ─── RSVP Form ────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-cream py-14 px-4">

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => navigate("/")}
        className="fixed top-5 left-5 z-50 flex items-center gap-2 font-sans text-xs text-champagne/70 tracking-widest hover:text-champagne transition-colors"
      >
        ← Back
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y:  0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-md mx-auto bg-ivory rounded-lg px-8 py-10"
        style={{
          boxShadow: "0 20px 60px rgba(60,42,30,0.1)",
          border:    "1px solid rgba(200,169,110,0.2)",
        }}
      >
        {/* Corners */}
        <FloralCornerTL className="absolute top-0 left-0"     size={80} />
        <FloralCornerTR className="absolute top-0 right-0"    size={80} />
        <FloralCornerBL className="absolute bottom-0 left-0"  size={80} />
        <FloralCornerBR className="absolute bottom-0 right-0" size={80} />

        {/* Header */}
        <div className="text-center mb-8 relative z-10">
          <p className="font-sans text-champagne tracking-[0.5em] text-xs uppercase mb-3">
            R · S · V · P
          </p>
          <h1
            className="font-script italic text-espresso"
            style={{ fontSize: "clamp(2rem, 6vw, 2.8rem)", fontWeight: 300 }}
          >
            Join Our Celebration
          </h1>
          <div className="flex justify-center mt-4">
            <FloralDivider />
          </div>
          <p className="font-sans text-espresso/40 text-xs mt-3 tracking-wider">
            {WEDDING.bride} & {WEDDING.groom} · {new Date(WEDDING.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

          {/* Guest Name */}
          <Field label="Full Name *" error={errors.guestName}>
            <input
              type="text"
              placeholder="Your full name"
              value={form.guestName}
              onChange={set("guestName")}
              className={inputClass}
            />
          </Field>

          {/* Email */}
          <Field label="Email Address" error={errors.email}>
            <input
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={set("email")}
              className={inputClass}
            />
          </Field>

          {/* Mobile */}
          <Field label="Mobile Number" error={errors.mobile}>
            <input
              type="tel"
              placeholder="+63 912 345 6789"
              value={form.mobile}
              onChange={set("mobile")}
              className={inputClass}
            />
          </Field>

          {/* Attendance */}
          <Field label="Will You Attend? *" error={errors.attending}>
            <div className="flex gap-4 mt-1">
              {[
                { value: "yes", label: "Joyfully Accepts ✦" },
                { value: "no",  label: "Regretfully Declines" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, attending: opt.value }))}
                  className="flex-1 py-2.5 rounded font-sans text-xs tracking-wide transition-all duration-200"
                  style={{
                    border:     `1px solid ${form.attending === opt.value ? "#C8A96E" : "rgba(200,169,110,0.25)"}`,
                    background: form.attending === opt.value
                      ? "linear-gradient(135deg, #C8A96E, #D4B87A)"
                      : "transparent",
                    color: form.attending === opt.value ? "#FAF6F0" : "#3C2A1E99",
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </Field>

          {/* Guest count — only if attending */}
          <AnimatePresence>
            {form.attending === "yes" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{    opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Field label="Number of Guests" error={errors.guestCount}>
                  <div className="flex items-center gap-4 mt-1">
                    <button
                      type="button"
                      onClick={() => setForm((p) => ({ ...p, guestCount: Math.max(1, p.guestCount - 1) }))}
                      className="w-8 h-8 rounded-full flex items-center justify-center font-sans text-champagne transition-all"
                      style={{ border: "1px solid rgba(200,169,110,0.4)" }}
                    >
                      −
                    </button>
                    <span className="font-script text-champagne text-2xl w-8 text-center">
                      {form.guestCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setForm((p) => ({ ...p, guestCount: Math.min(10, p.guestCount + 1) }))}
                      className="w-8 h-8 rounded-full flex items-center justify-center font-sans text-champagne transition-all"
                      style={{ border: "1px solid rgba(200,169,110,0.4)" }}
                    >
                      +
                    </button>
                    <span className="font-sans text-espresso/35 text-xs">
                      {form.guestCount === 1 ? "guest" : "guests"} attending
                    </span>
                  </div>
                </Field>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dietary */}
          <Field label="Dietary Restrictions" error={errors.dietary}>
            <select
              value={form.dietary}
              onChange={set("dietary")}
              className={selectClass}
            >
              <option value="">No restrictions</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="gluten-free">Gluten Free</option>
              <option value="halal">Halal</option>
              <option value="kosher">Kosher</option>
              <option value="nut-allergy">Nut Allergy</option>
              <option value="other">Other (mention in message)</option>
            </select>
          </Field>

          {/* Message */}
          <Field label="Personal Message" error={errors.message}>
            <textarea
              placeholder="Leave the couple a heartfelt message..."
              value={form.message}
              onChange={set("message")}
              rows={4}
              className={`${inputClass} resize-none border-b-0 border rounded p-3`}
              style={{ border: "1px solid rgba(200,169,110,0.3)" }}
            />
          </Field>

          {/* API error */}
          {apiError && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-sans text-red-400 text-xs text-center bg-red-50 py-2 px-4 rounded"
            >
              {apiError}
            </motion.p>
          )}

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(200,169,110,0.35)" }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded font-sans text-xs tracking-[0.4em] uppercase transition-all"
            style={{
              background: loading
                ? "rgba(200,169,110,0.4)"
                : "linear-gradient(135deg, #C8A96E, #D4B87A)",
              color:     "#FAF6F0",
              boxShadow: "0 4px 20px rgba(200,169,110,0.25)",
            }}
          >
            {loading ? "Sending..." : "Send My RSVP ✦"}
          </motion.button>

          <p className="text-center font-sans text-espresso/30 text-xs">
            {WEDDING.bride} & {WEDDING.groom} · {WEDDING.date}
          </p>
        </form>
      </motion.div>
    </div>
  );
}