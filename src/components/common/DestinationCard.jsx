import { motion } from 'framer-motion';
import { Star, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Reusable destination card with hover effects
 */
export default function DestinationCard({ destination, index = 0 }) {
  const { name, tagline, state, image, description, priceFrom, priceTo, duration, rating, reviews, highlights, badge } = destination;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-card card-hover cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={`${name} travel destination`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-card-gradient" />

        {/* Badge */}
        {badge && (
          <div className="absolute top-4 left-4">
            <span className="glass text-white text-xs font-body font-medium px-3 py-1.5 rounded-full">
              {badge}
            </span>
          </div>
        )}

        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center gap-1 glass px-2.5 py-1.5 rounded-full">
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          <span className="text-white text-xs font-medium">{rating}</span>
        </div>

        {/* Bottom info over image */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-saffron-300 text-xs font-body tracking-wider uppercase mb-1">{state}</p>
          <h3 className="text-white font-display text-2xl font-medium leading-tight">{name}</h3>
          <p className="text-white/70 text-sm font-body italic">{tagline}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-earth-500 font-body text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {highlights.slice(0, 3).map((h, i) => (
            <span
              key={i}
              className="text-xs bg-saffron-50 text-saffron-700 px-2.5 py-1 rounded-full font-body"
            >
              {h}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-end justify-between pt-4 border-t border-earth-100">
          <div>
            <p className="text-xs text-earth-400 font-body mb-0.5">Starting from</p>
            <p className="text-saffron-600 font-display text-2xl font-semibold">{priceFrom}</p>
            <div className="flex items-center gap-1 mt-1">
              <Clock className="w-3.5 h-3.5 text-earth-400" />
              <span className="text-earth-400 text-xs font-body">{duration}</span>
            </div>
          </div>
          <Link
            to="/packages"
            className="flex items-center gap-1.5 text-saffron-600 hover:text-saffron-700 font-body font-medium text-sm group/link transition-colors"
          >
            Explore
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
