import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section
      className="relative overflow-hidden py-24"
      aria-label="Call to action"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="src/assets/locations/readyto.png"
          alt="India travel background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-saffron-700/80" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-saffron-300 font-body text-sm tracking-widest uppercase mb-4"
          >
            Ready to Explore?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl text-white font-light leading-tight mb-6"
          >
            Book Your Dream Journey
            <br />
            <em className="text-saffron-300">with Saffron Travels</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 font-body text-lg leading-relaxed mb-10"
          >
            Talk to our travel experts for a free consultation. We'll craft a
            personalised itinerary that fits your budget, timeline, and travel
            dreams, no obligation!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <Link to="/contact" className="btn-primary">
              Plan My Trip Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 text-white hover:text-saffron-300 transition-colors group"
            >
              <div className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-saffron-500/20 group-hover:border-saffron-400/50 transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-white/50 font-body">
                  Call us anytime
                </p>
                <p className="font-body font-medium">+91 98765 43210</p>
              </div>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-6 items-center"
          >
            {[
              "✅ Free Customization",
              "✅ Zero Booking Fees",
              "✅ Best Price Guarantee",
              "✅ 24/7 Trip Support",
            ].map((badge) => (
              <span key={badge} className="text-white/60 font-body text-sm">
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
