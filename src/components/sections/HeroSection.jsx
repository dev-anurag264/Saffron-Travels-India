import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  MapPin,
  Calendar,
  Wallet,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import bpark from "../../assets/locations/bpark.jpg";
import Goa from "../../assets/locations/ga01.jpg";
import kashmir from "../../assets/locations/jk01.jpg";

const FEATURED_TAGS = [
  "Sikkim",
  "Darjeeling",
  "Kashmir",
  "Goa",
  "Manali",
  "Andaman",
];

const HERO_SLIDES = [
  {
    image: bpark,
    location: "Buddha Park, Sikkim",
  },
  {
    image: Goa,
    location: "Cabo De Rama, Goa",
  },
  {
    image: kashmir,
    location: "Srinagar, Kashmir",
  },
];

export default function HeroSection() {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) =>
        prev === HERO_SLIDES.length - 1 ? 0 : prev + 1,
      );
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to packages page with filters
    window.location.href = "/packages";
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeSlide}
            src={HERO_SLIDES[activeSlide].image}
            alt={HERO_SLIDES[activeSlide].location}
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            fetchpriority="high"
            initial={{
              opacity: 0,
              scale: 1.15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.05,
            }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-transparent" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-saffron-400/40 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-28 pb-16">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-12 bg-saffron-400" />
            <span className="text-saffron-300 font-body text-sm tracking-widest uppercase">
              Curated Journeys Across India
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-none text-shadow mb-6"
          >
            Explore India
            <br />
            <span className="italic text-saffron-300">Like Never Before</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 font-body text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            From Himalayan peaks to Goan Beaches. Crafting Journeys Beyond
            Destinations.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link to="/packages" className="btn-primary">
              View All Packages
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/destinations" className="btn-ghost">
              Explore Destinations
            </Link>
          </motion.div>

          {/* Quick destination tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            <span className="text-white/50 font-body text-sm mr-2">
              Trending:
            </span>
            {FEATURED_TAGS.map((tag, i) => (
              <motion.button
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                onClick={() => setDestination(tag)}
                className="glass px-3 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-saffron-500/30 transition-all duration-200 text-sm font-body"
              >
                {tag}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Search Widget */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 max-w-4xl"
        >
          <div className="glass-light rounded-2xl p-2 shadow-glass">
            <form
              onSubmit={handleSearch}
              className="flex flex-col md:flex-row gap-2"
            >
              {/* Destination */}
              <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 cursor-text">
                <MapPin className="w-4 h-4 text-saffron-500 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <label className="text-xs text-earth-400 font-body block leading-none mb-1">
                    Destination
                  </label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Where to in India?"
                    className="w-full text-sm font-body text-charcoal placeholder:text-earth-300 focus:outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Budget */}
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 md:w-44">
                <Wallet className="w-4 h-4 text-saffron-500 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <label className="text-xs text-earth-400 font-body block leading-none mb-1">
                    Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full text-sm font-body text-charcoal focus:outline-none bg-transparent cursor-pointer appearance-none"
                  >
                    <option value="">Any budget</option>
                    <option value="budget">Under ₹20,000</option>
                    <option value="mid">₹20,000 – ₹50,000</option>
                    <option value="premium">₹50,000 – ₹1L</option>
                    <option value="luxury">₹1L+</option>
                  </select>
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 md:w-40">
                <Calendar className="w-4 h-4 text-saffron-500 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <label className="text-xs text-earth-400 font-body block leading-none mb-1">
                    Duration
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full text-sm font-body text-charcoal focus:outline-none bg-transparent cursor-pointer appearance-none"
                  >
                    <option value="">Any days</option>
                    <option value="3-5">3–5 nights</option>
                    <option value="5-7">5–7 nights</option>
                    <option value="7-10">7–10 nights</option>
                    <option value="10+">10+ nights</option>
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-saffron-500 hover:bg-saffron-600 text-white font-body font-medium rounded-xl px-7 py-3.5 transition-all duration-300 shadow-saffron hover:shadow-lg"
              >
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Slide indicator / location label */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container-custom flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-2 glass px-4 py-2 rounded-full"
          >
            <MapPin className="w-3.5 h-3.5 text-saffron-400" />
            <span className="text-white/70 text-xs font-body">
              {HERO_SLIDES[activeSlide].location}
            </span>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="glass px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer"
            onClick={() =>
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <span className="text-white/50 text-xs font-body">Scroll</span>
            <ChevronDown className="w-3.5 h-3.5 text-white/50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
