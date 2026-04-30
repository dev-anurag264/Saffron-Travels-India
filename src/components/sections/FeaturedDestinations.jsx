import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import DestinationCard from "../common/DestinationCard";
import { destinations } from "../../data/destinations";

export default function FeaturedDestinations() {
  // Show only 5 featured destinations on homepage
  const featured = destinations.slice(0, 5);

  return (
    <section
      className="section-pad bg-cream bg-pattern"
      aria-labelledby="destinations-heading"
    >
      <div className="container-custom">
        <SectionHeader
          eyebrow="Where to explore"
          title={
            <>
              India's Most <em>Breathtaking</em> Destinations
            </>
          }
          subtitle="From snow-capped Himalayas to sun-kissed coastlines, every corner of India tells a different story."
        />

        {/* Destination Grid — asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* First card — large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:row-span-2 group relative bg-charcoal rounded-3xl overflow-hidden shadow-card cursor-pointer card-hover"
          >
            <img
              src={featured[0].image}
              alt={featured[0].name}
              className="w-full h-full min-h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />

            {/* Badge */}
            <div className="absolute top-5 left-5">
              <span className="bg-saffron-500 text-white text-xs font-body font-semibold px-3 py-1.5 rounded-full shadow-saffron">
                {featured[0].badge}
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-saffron-300 text-xs tracking-wider uppercase font-body mb-1">
                {featured[0].state}
              </p>
              <h3 className="text-white font-display text-3xl font-medium mb-1">
                {featured[0].name}
              </h3>
              <p className="text-white/60 font-body text-sm italic mb-3">
                {featured[0].tagline}
              </p>
              <p className="text-white/50 font-body text-sm leading-relaxed mb-4 line-clamp-2">
                {featured[0].description}
              </p>

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-white/40 text-xs font-body mb-0.5">
                    Starting from
                  </p>
                  <p className="text-saffron-300 font-display text-2xl">
                    {featured[0].priceFrom}
                  </p>
                </div>
                <Link
                  to="/packages"
                  className="flex items-center gap-1.5 text-saffron-300 hover:text-saffron-200 font-body font-medium text-sm group/link"
                >
                  Explore
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Remaining cards */}
          {featured.slice(1).map((dest, i) => (
            <DestinationCard key={dest.id} destination={dest} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/destinations" className="btn-secondary">
            View All Destinations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
