import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function PhotoPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <p className="font-script italic text-champagne text-3xl mb-4"
          style={{ fontWeight: 300 }}>
          Photo not found
        </p>
        <button
          onClick={() => navigate("/gallery")}
          className="font-sans text-xs text-champagne/60 underline tracking-widest"
        >
          Back to Gallery
        </button>
      </motion.div>
    </div>
  );
}
