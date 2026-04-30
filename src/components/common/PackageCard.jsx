import { motion } from 'framer-motion';
import { Star, Clock, Users, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Reusable tour package card
 */
export default function PackageCard({ pkg, index = 0, detailed = false }) {
  const {
    name, destination, duration, price, originalPrice, image,
    rating, reviews, groupSize, highlights, inclusions, badge, isFeatured
  } = pkg;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-card card-hover"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-card-gradient" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {badge && (
            <span className="bg-saffron-500 text-white text-xs font-body font-semibold px-3 py-1.5 rounded-full shadow-saffron">
              {badge}
            </span>
          )}
          {isFeatured && (
            <span className="glass text-white text-xs font-body px-3 py-1.5 rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center gap-1 glass px-2.5 py-1.5 rounded-full">
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          <span className="text-white text-xs font-medium">{rating}</span>
          <span className="text-white/60 text-xs">({reviews})</span>
        </div>

        {/* Package name over image */}
        <div className="absolute bottom-4 left-4">
          <p className="text-saffron-300 text-xs tracking-wider uppercase font-body mb-1">{destination}</p>
          <h3 className="text-white font-display text-xl font-medium">{name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta info */}
        <div className="flex items-center gap-4 mb-4 text-earth-500 text-sm font-body">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-saffron-400" />
            {duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-saffron-400" />
            {groupSize}
          </span>
        </div>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-5">
          {highlights.slice(0, detailed ? 4 : 3).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm font-body text-earth-600">
              <Check className="w-3.5 h-3.5 text-saffron-500 mt-0.5 flex-shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Inclusions chips */}
        {detailed && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {inclusions.slice(0, 4).map((inc, i) => (
              <span key={i} className="text-xs bg-jade-500/10 text-jade-600 px-2.5 py-1 rounded-full font-body">
                ✓ {inc}
              </span>
            ))}
          </div>
        )}

        {/* Price & CTA */}
        <div className="flex items-end justify-between pt-4 border-t border-earth-100">
          <div>
            {originalPrice && (
              <p className="text-earth-400 text-xs line-through font-body mb-0.5">{originalPrice} / person</p>
            )}
            <p className="text-saffron-600 font-display text-2xl font-semibold">{price}</p>
            <p className="text-earth-400 text-xs font-body">per person</p>
          </div>
          <Link
            to="/contact"
            className="btn-primary text-sm py-2.5 px-5"
          >
            Book Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
