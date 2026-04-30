import { motion } from "framer-motion";
import {
  Shield,
  Star,
  HeartHandshake,
  Clock,
  MapPin,
  Headphones,
} from "lucide-react";
import SectionHeader from "../common/SectionHeader";

const features = [
  {
    icon: Shield,
    title: "Fully Insured Travel",
    description:
      "Every trip is backed by comprehensive travel insurance for complete peace of mind for you and your family.",
    color: "bg-jade-500/10 text-jade-600",
  },
  {
    icon: Star,
    title: "Special Expertise",
    description:
      "Hand-picked hotels, activities, and tours that we've personally picked for quality and authenticity.",
    color: "bg-saffron-100 text-saffron-600",
  },
  {
    icon: HeartHandshake,
    title: "Personalised Itineraries",
    description:
      "No half hearted tours. Every trip is tailored to your interests, pace, and travel style.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Clock,
    title: "3 Years of Excellence",
    description:
      "Over 4,000 happy travelers and a 95% satisfaction rate built over 3 years of crafting dream journeys.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: MapPin,
    title: "20+ Destinations",
    description:
      "From iconic landmarks to hidden gems, we make your experience unforgettable.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Headphones,
    title: "24/7 On-Trip Support",
    description:
      "Our dedicated team is reachable around the clock while you travel, because peace of mind shouldn't be left behind. ",
    color: "bg-amber-50 text-amber-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="section-pad bg-white relative overflow-hidden"
      aria-labelledby="why-heading"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-radial from-saffron-50 to-transparent opacity-60 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover aspect-[4/5]">
              <img
                src="src/assets/locations/group.jpg"
                alt="Saffron Trails travel experience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>

            {/* Floating stats card */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-card p-5 max-w-48"
            >
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="font-display text-2xl text-charcoal font-semibold">
                4,000+
              </p>
              <p className="font-body text-sm text-earth-500">
                Memories created
              </p>
            </motion.div> */}

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-4 -left-4 bg-saffron-500 rounded-2xl  p-4 text-white"
            >
              <p className="font-display text-3xl font-semibold leading-none">
                3
              </p>
              <p className="font-body text-xs mt-1 text-white/80">
                Years of
                <br />
                Excellence
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <SectionHeader
              eyebrow="Why Saffron Travels"
              title={
                <>
                  Why Choose <em>Us</em>
                </>
              }
              subtitle="We don't just plan trips, we craft experiences that become stories you tell for a lifetime."
              align="left"
            />

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex gap-4 group"
                  >
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${feature.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-charcoal text-sm mb-1">
                        {feature.title}
                      </h3>
                      <p className="font-body text-xs text-earth-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
