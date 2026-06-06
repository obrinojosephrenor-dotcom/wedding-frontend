import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FloralCornerTL, FloralCornerTR,
  FloralCornerBL, FloralCornerBR,
  FloralDivider, WaxSeal,
} from "../components/FloralAccents/FloralSvg";
import FloralAccents from "../components/FloralAccents/FloralAccents";
import { WEDDING }   from "../weddingConfig";

const API = import.meta.env.VITE_API_BASE_URL;

// ─── Upload states ─────────────────────────────────────────────────
const STATE = {
  IDLE:       "idle",
  PREVIEWING: "previewing",
  UPLOADING:  "uploading",
  SUCCESS:    "success",
  ERROR:      "error",
};

export default function GuestUpload() {
  const tableNumber  = new URLSearchParams(window.location.search).get("table") || "?";
  const fileInputRef = useRef(null);

  const [state,     setState]     = useState(STATE.IDLE);
  const [file,      setFile]      = useState(null);
  const [preview,   setPreview]   = useState(null);
  const [guestName, setGuestName] = useState("");
  const [progress,  setProgress]  = useState(0);
  const [errorMsg,  setErrorMsg]  = useState("");

  // ─── File select ─────────────────────────────────────────────
  function handleFileChange(e) {
    const selected = e.target.files[0];
    if (!selected) return;

    // Validate type
    if (!selected.type.startsWith("image/")) {
      setErrorMsg("Please select an image file.");
      setState(STATE.ERROR);
      return;
    }

    // Validate size — max 10MB
    if (selected.size > 10 * 1024 * 1024) {
      setErrorMsg("Photo must be under 10MB.");
      setState(STATE.ERROR);
      return;
    }

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setState(STATE.PREVIEWING);
    setErrorMsg("");
  }

  // ─── Upload ───────────────────────────────────────────────────
  async function handleUpload() {
    if (!file) return;

    setState(STATE.UPLOADING);
    setProgress(0);

    // Fake progress while uploading
    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 85) { clearInterval(progressInterval); return 85; }
        return p + Math.random() * 12;
      });
    }, 300);

    try {
      const formData = new FormData();
      formData.append("photo",       file);
      formData.append("tableNumber", tableNumber);
      formData.append("guestName",   guestName.trim() || "Anonymous");

      const res = await fetch(`${API}/api/photos/upload`, {
        method: "POST",
        body:   formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");

      clearInterval(progressInterval);
      setProgress(100);
      setTimeout(() => setState(STATE.SUCCESS), 500);

    } catch (err) {
      clearInterval(progressInterval);
      setErrorMsg(err.message || "Something went wrong. Please try again.");
      setState(STATE.ERROR);
    }
  }

  // ─── Reset ────────────────────────────────────────────────────
  function handleReset() {
    setFile(null);
    setPreview(null);
    setGuestName("");
    setProgress(0);
    setErrorMsg("");
    setState(STATE.IDLE);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  // ─── Drag and drop ────────────────────────────────────────────
  function handleDrop(e) {
    e.preventDefault();
    const dropped = e.dataTransfer.files[0];
    if (dropped) {
      const fakeEvent = { target: { files: [dropped] } };
      handleFileChange(fakeEvent);
    }
  }

  // ──────────────────────────────────────────────────────────────
  // SUCCESS screen
  if (state === STATE.SUCCESS) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-4">
        <FloralAccents active count={12} />
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1,    y: 0  }}
          transition={{ duration: 0.7 }}
          className="relative text-center max-w-sm w-full bg-ivory rounded-lg px-8 py-12"
          style={{
            boxShadow: "0 24px 64px rgba(60,42,30,0.12)",
            border:    "1px solid rgba(200,169,110,0.25)",
          }}
        >
          <FloralCornerTL className="absolute top-0 left-0"     size={70} />
          <FloralCornerTR className="absolute top-0 right-0"    size={70} />
          <FloralCornerBL className="absolute bottom-0 left-0"  size={70} />
          <FloralCornerBR className="absolute bottom-0 right-0" size={70} />

          <div className="relative z-10">
            {/* Animated checkmark */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0   }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="flex justify-center mb-5"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                style={{
                  background: "linear-gradient(135deg, #C8A96E, #D4B87A)",
                  boxShadow:  "0 8px 24px rgba(200,169,110,0.35)",
                }}
              >
                ✦
              </div>
            </motion.div>

            <h2
              className="font-script italic text-champagne mb-3"
              style={{ fontSize: "clamp(1.8rem, 6vw, 2.4rem)", fontWeight: 300 }}
            >
              Thank You!
            </h2>

            <div className="flex justify-center mb-4">
              <FloralDivider />
            </div>

            <p className="font-sans text-espresso/60 text-sm leading-relaxed mb-1">
              Your photo has been shared with
            </p>
            <p className="font-script italic text-espresso/80 text-xl mb-4"
              style={{ fontWeight: 300 }}>
              {WEDDING.bride} & {WEDDING.groom}
            </p>
            <p className="font-sans text-espresso/40 text-xs leading-relaxed mb-6">
              It will appear in the wedding gallery shortly. ✦
            </p>

            {/* Preview thumbnail */}
            {preview && (
              <div
                className="mx-auto mb-6 bg-white p-2 pb-7 shadow-md"
                style={{ maxWidth: "140px" }}
              >
                <img
                  src={preview}
                  alt="Your upload"
                  className="w-full object-cover"
                  style={{ aspectRatio: "1/1" }}
                />
                <p
                  className="absolute bottom-1 left-0 right-0 text-center font-script italic text-espresso/50"
                  style={{ fontSize: "0.65rem" }}
                >
                  {guestName || "Anonymous"}
                </p>
              </div>
            )}

            <div className="flex flex-col gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleReset}
                className="w-full py-3 rounded font-sans text-xs tracking-[0.35em] uppercase"
                style={{
                  background: "linear-gradient(135deg, #C8A96E, #D4B87A)",
                  color:      "#FAF6F0",
                  boxShadow:  "0 4px 16px rgba(200,169,110,0.3)",
                }}
              >
                Share Another Photo
              </motion.button>
            </div>

            <p className="font-sans text-espresso/25 text-xs mt-5">
              {WEDDING.hashtag}
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  // ──────────────────────────────────────────────────────────────
  // MAIN upload screen
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4 py-10">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y:  0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-sm bg-ivory rounded-lg px-7 py-9"
        style={{
          boxShadow: "0 20px 60px rgba(60,42,30,0.1)",
          border:    "1px solid rgba(200,169,110,0.2)",
        }}
      >
        <FloralCornerTL className="absolute top-0 left-0"     size={75} />
        <FloralCornerTR className="absolute top-0 right-0"    size={75} />
        <FloralCornerBL className="absolute bottom-0 left-0"  size={75} />
        <FloralCornerBR className="absolute bottom-0 right-0" size={75} />

        <div className="relative z-10">

          {/* Header */}
          <div className="text-center mb-7">
            <div className="flex justify-center mb-4">
              <WaxSeal size={48} />
            </div>
            <p className="font-sans text-champagne tracking-[0.5em] text-xs uppercase mb-2">
              Share a Memory
            </p>
            <h1
              className="font-script italic text-espresso mb-2"
              style={{ fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 300 }}
            >
              {WEDDING.bride} & {WEDDING.groom}
            </h1>
            <div className="flex justify-center mb-3">
              <FloralDivider />
            </div>
            <div
              className="inline-block px-3 py-1 rounded-full font-sans text-xs"
              style={{
                background: "rgba(200,169,110,0.1)",
                color:      "#C8A96E",
                border:     "1px solid rgba(200,169,110,0.25)",
              }}
            >
              📍 Table {tableNumber}
            </div>
          </div>

          {/* Guest name */}
          <div className="mb-5">
            <label className="font-sans text-espresso/45 text-xs tracking-widest uppercase block mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              placeholder="How should we credit your photo?"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              maxLength={50}
              className="w-full bg-transparent border-b border-champagne/35 font-sans text-espresso text-sm py-2 focus:outline-none focus:border-champagne placeholder:text-espresso/25 transition-colors"
            />
          </div>

          {/* Drop zone / Preview */}
          <AnimatePresence mode="wait">
            {state === STATE.IDLE || state === STATE.ERROR ? (
              <motion.div
                key="dropzone"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{    opacity: 0 }}
                className="relative mb-5"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div
                  className="flex flex-col items-center justify-center gap-3 py-10 rounded-lg transition-all"
                  style={{
                    border:     "2px dashed rgba(200,169,110,0.35)",
                    background: "rgba(200,169,110,0.03)",
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="text-4xl"
                  >
                    📷
                  </motion.div>
                  <p className="font-script italic text-espresso/50 text-lg"
                    style={{ fontWeight: 300 }}>
                    Tap to add a photo
                  </p>
                  <p className="font-sans text-espresso/30 text-xs text-center leading-relaxed px-4">
                    Take a new photo or choose from your gallery
                    <br />Max 10MB · JPG, PNG, HEIC
                  </p>
                </div>

                {/* Error */}
                {state === STATE.ERROR && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-sans text-red-400 text-xs text-center mt-3"
                  >
                    {errorMsg}
                  </motion.p>
                )}
              </motion.div>
            ) : state === STATE.PREVIEWING ? (
              <motion.div
                key="preview"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1   }}
                exit={{    opacity: 0, scale: 0.95 }}
                className="mb-5"
              >
                {/* Polaroid preview */}
                <div className="relative mx-auto bg-white p-3 pb-10 shadow-lg mb-3"
                  style={{ maxWidth: "220px" }}>
                  <div style={{ aspectRatio: "1/1", overflow: "hidden" }}>
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p
                    className="absolute bottom-1 left-0 right-0 text-center font-script italic text-espresso/55"
                    style={{ fontSize: "0.8rem", fontWeight: 300 }}
                  >
                    {guestName || "Anonymous"}
                  </p>
                </div>

                {/* Change photo */}
                <div className="text-center">
                  <button
                    onClick={handleReset}
                    className="font-sans text-xs text-champagne/60 hover:text-champagne underline tracking-wider transition-colors"
                  >
                    Choose a different photo
                  </button>
                </div>
              </motion.div>
            ) : state === STATE.UPLOADING ? (
              <motion.div
                key="uploading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{    opacity: 0 }}
                className="mb-5 text-center py-4"
              >
                {/* Preview thumbnail */}
                {preview && (
                  <div className="mx-auto bg-white p-2 pb-7 shadow-md mb-4"
                    style={{ maxWidth: "120px" }}>
                    <img src={preview} alt="Uploading" className="w-full object-cover"
                      style={{ aspectRatio: "1/1" }} />
                  </div>
                )}

                {/* Progress bar */}
                <div
                  className="w-full h-1.5 rounded-full mb-3 overflow-hidden"
                  style={{ background: "rgba(200,169,110,0.15)" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(135deg, #C8A96E, #D4B87A)",
                      width:      `${progress}%`,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="font-sans text-espresso/45 text-xs tracking-widest"
                >
                  Sharing your memory...
                </motion.p>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* Upload button */}
          <AnimatePresence>
            {state === STATE.PREVIEWING && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y:  0 }}
                exit={{    opacity: 0, y: 10 }}
                whileHover={{ scale: 1.02, boxShadow: "0 8px 28px rgba(200,169,110,0.35)" }}
                whileTap={{ scale: 0.97 }}
                onClick={handleUpload}
                className="w-full py-4 rounded font-sans text-xs tracking-[0.4em] uppercase"
                style={{
                  background: "linear-gradient(135deg, #C8A96E, #D4B87A)",
                  color:      "#FAF6F0",
                  boxShadow:  "0 4px 20px rgba(200,169,110,0.25)",
                }}
              >
                Share This Photo ✦
              </motion.button>
            )}
          </AnimatePresence>

          {/* Footer */}
          <p className="text-center font-sans text-espresso/25 text-xs mt-6">
            {WEDDING.bride} & {WEDDING.groom} · {WEDDING.hashtag}
          </p>

        </div>
      </motion.div>
    </div>
  );
}