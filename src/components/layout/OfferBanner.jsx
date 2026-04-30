import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function OfferBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-saffron-600 via-saffron-500 to-amber-500 overflow-hidden"
        >
          <div className="container-custom py-2.5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <Tag className="w-4 h-4 text-white flex-shrink-0" />
              <p className="text-white font-body text-sm truncate">
                <span className="font-semibold"> Monsoon Special:</span> Up to
                30% off on Sikkim & Darjeeling packages. Offer ends June 30.
              </p>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <Link
                to="/packages"
                className="hidden sm:flex items-center gap-1.5 text-white/90 hover:text-white font-body text-sm font-medium transition-colors"
              >
                Grab the Deal
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => setVisible(false)}
                aria-label="Close banner"
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
