import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  const active = testimonials[activeIndex];

  return (
    <section
      className="section-pad bg-charcoal relative overflow-hidden"
      aria-label="Customer testimonials"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-saffron-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-saffron-800/10 rounded-full blur-3xl pointer-events-none" />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #f07d00 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 container-custom">
        <SectionHeader
          eyebrow="Real Experiences from Real Travelers"
          title={
            <>
              What Our Guests <em>Say</em>
            </>
          }
          subtitle="Thousands of families, couples, and adventurers have trusted us with their most precious moments."
          light
        />

        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-dark rounded-3xl p-8 md:p-12 mb-8 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-8 text-saffron-500/20">
                <Quote className="w-20 h-20" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < active.rating ? "text-yellow-400 fill-yellow-400" : "text-white/20"}`}
                  />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="font-body text-lg md:text-xl text-white/85 leading-relaxed mb-8 relative z-10">
                &ldquo;{active.review}&rdquo;
              </blockquote>

              {/* Reviewer info */}
              <div className="flex items-center gap-4">
                <img
                  src={active.avatar}
                  alt={active.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-saffron-400/30"
                />
                <div>
                  <p className="font-body font-semibold text-white">
                    {active.name}
                  </p>
                  <p className="font-body text-sm text-white/50">
                    {active.location}
                  </p>
                  <p className="font-body text-xs text-saffron-400 mt-0.5">
                    {active.trip} • {active.date}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === activeIndex
                      ? "w-8 h-2.5 bg-saffron-500"
                      : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full bg-saffron-500 hover:bg-saffron-600 flex items-center justify-center text-white transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Thumbnail previews */}
          {/* <div className="mt-8 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActiveIndex(i)}
                className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-saffron-500/20 border border-saffron-500/40"
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-left">
                  <p
                    className={`text-xs font-body font-medium ${i === activeIndex ? "text-saffron-300" : "text-white/60"}`}
                  >
                    {t.name.split(" ")[0]}
                  </p>
                  <p className="text-white/30 text-xs font-body">
                    {t.location}
                  </p>
                </div>
              </button>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
