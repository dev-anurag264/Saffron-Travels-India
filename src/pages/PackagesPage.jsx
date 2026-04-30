import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Star, Clock, Users, Check, X, ChevronDown, ChevronUp, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTABanner from '../components/sections/CTABanner';
import { packages, packageCategories } from '../data/packages';

function PackageCard({ pkg, index, onSelect }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden group cursor-pointer" onClick={() => onSelect(pkg)}>
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-card-gradient" />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {pkg.badge && (
            <span className="bg-saffron-500 text-white text-xs font-body font-semibold px-3 py-1.5 rounded-full shadow-saffron">
              {pkg.badge}
            </span>
          )}
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-1 glass px-2.5 py-1.5 rounded-full">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <span className="text-white text-xs">{pkg.rating}</span>
          <span className="text-white/50 text-xs">({pkg.reviews})</span>
        </div>
        <div className="absolute bottom-4 left-4">
          <p className="text-saffron-300 text-xs tracking-wider uppercase font-body mb-0.5">{pkg.destination}</p>
          <h3 className="text-white font-display text-xl font-medium">{pkg.name}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-5 text-earth-500 text-sm font-body mb-4">
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-saffron-400" />{pkg.duration}</span>
          <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-saffron-400" />{pkg.groupSize}</span>
        </div>

        {/* Highlights — collapsible */}
        <ul className="space-y-1.5 mb-4">
          {pkg.highlights.slice(0, expanded ? pkg.highlights.length : 3).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm font-body text-earth-600">
              <Check className="w-3.5 h-3.5 text-saffron-500 mt-0.5 flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {pkg.highlights.length > 3 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-saffron-600 font-body text-sm mb-4 hover:text-saffron-700 transition-colors"
          >
            {expanded ? (
              <><ChevronUp className="w-3.5 h-3.5" /> Show less</>
            ) : (
              <><ChevronDown className="w-3.5 h-3.5" /> +{pkg.highlights.length - 3} more highlights</>
            )}
          </button>
        )}

        {/* Inclusions */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {pkg.inclusions.slice(0, 4).map((inc, i) => (
            <span key={i} className="text-xs bg-jade-500/10 text-jade-600 px-2.5 py-1 rounded-full font-body">
              ✓ {inc}
            </span>
          ))}
          {pkg.inclusions.length > 4 && (
            <span className="text-xs bg-earth-50 text-earth-400 px-2.5 py-1 rounded-full font-body">
              +{pkg.inclusions.length - 4} more
            </span>
          )}
        </div>

        {/* Price & CTA */}
        <div className="flex items-end justify-between pt-4 border-t border-earth-100 mt-auto">
          <div>
            {pkg.originalPrice && (
              <p className="text-earth-400 text-xs line-through font-body">{pkg.originalPrice} / person</p>
            )}
            <p className="text-saffron-600 font-display text-2xl font-semibold">{pkg.price}</p>
            <p className="text-earth-400 text-xs font-body">per person</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onSelect(pkg)}
              className="btn-secondary text-sm py-2.5 px-4"
            >
              Details
            </button>
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-4">
              Book
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PackageModal({ pkg, onClose }) {
  if (!pkg) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-charcoal/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 280, damping: 25 }}
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-card-hover"
      >
        {/* Hero image */}
        <div className="relative h-60 flex-shrink-0">
          <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover rounded-t-3xl" />
          <div className="absolute inset-0 bg-card-gradient rounded-t-3xl" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          {pkg.badge && (
            <div className="absolute top-4 left-4">
              <span className="bg-saffron-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                {pkg.badge}
              </span>
            </div>
          )}
          <div className="absolute bottom-4 left-5">
            <p className="text-saffron-300 text-xs uppercase tracking-wider font-body mb-0.5">{pkg.destination}</p>
            <h2 className="text-white font-display text-2xl font-medium">{pkg.name}</h2>
          </div>
        </div>

        <div className="p-6 md:p-8">
          {/* Price strip */}
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-earth-100">
            <div>
              {pkg.originalPrice && (
                <p className="text-earth-400 text-xs line-through mb-0.5">{pkg.originalPrice} / person</p>
              )}
              <p className="text-saffron-600 font-display text-3xl font-semibold">{pkg.price}</p>
              <p className="text-earth-400 text-xs font-body">per person (taxes included)</p>
            </div>
            <div className="text-right space-y-1">
              <div className="flex items-center justify-end gap-1.5 text-earth-600 text-sm font-body">
                <Clock className="w-4 h-4 text-saffron-400" /> {pkg.duration}
              </div>
              <div className="flex items-center justify-end gap-1.5 text-earth-600 text-sm font-body">
                <Users className="w-4 h-4 text-saffron-400" /> {pkg.groupSize}
              </div>
              <div className="flex items-center justify-end gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(pkg.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-earth-200'}`} />
                ))}
                <span className="text-earth-400 text-xs ml-1">({pkg.reviews} reviews)</span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <h3 className="font-body font-semibold text-charcoal mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-saffron-500 rounded-full inline-block" />
              Package Highlights
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {pkg.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm font-body text-earth-600">
                  <Check className="w-4 h-4 text-saffron-500 mt-0.5 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Itinerary if available */}
          {pkg.itinerary && (
            <div className="mb-6">
              <h3 className="font-body font-semibold text-charcoal mb-3 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-saffron-500 rounded-full inline-block" />
                Day-by-Day Itinerary
              </h3>
              <div className="space-y-3">
                {pkg.itinerary.map(day => (
                  <div key={day.day} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-saffron-50 border-2 border-saffron-200 flex items-center justify-center flex-shrink-0 text-saffron-600 font-body text-xs font-bold">
                      D{day.day}
                    </div>
                    <div className="flex-1 pb-3 border-b border-earth-50">
                      <p className="font-body font-medium text-charcoal text-sm">{day.title}</p>
                      <p className="font-body text-xs text-earth-500 mt-0.5">{day.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            <div>
              <h3 className="font-body font-semibold text-charcoal mb-3 text-sm">✅ What's Included</h3>
              <ul className="space-y-1.5">
                {pkg.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-body text-earth-600">
                    <div className="w-4 h-4 rounded-full bg-jade-500/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-jade-600" />
                    </div>
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-body font-semibold text-charcoal mb-3 text-sm">❌ Not Included</h3>
              <ul className="space-y-1.5">
                {pkg.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-body text-earth-400">
                    <div className="w-4 h-4 rounded-full bg-earth-100 flex items-center justify-center flex-shrink-0">
                      <X className="w-2.5 h-2.5 text-earth-400" />
                    </div>
                    {exc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn-primary flex-1 justify-center py-4">
              Book This Package
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+919876543210" className="btn-secondary flex-1 justify-center py-4">
              <Phone className="w-4 h-4" />
              Call to Enquire
            </a>
          </div>

          <p className="text-center text-earth-400 font-body text-xs mt-4">
            💰 Best price guaranteed • 🔄 Free cancellation within 48 hrs • 🛡 Fully insured
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PackagesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPkg, setSelectedPkg] = useState(null);

  const filtered = useMemo(() =>
    activeFilter === 'all' ? packages : packages.filter(p => p.category.includes(activeFilter)),
    [activeFilter]
  );

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-36 pb-24 bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Tour packages India"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 to-charcoal" />
        </div>
        <div className="relative z-10 container-custom text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block text-saffron-400 font-body text-sm tracking-widest uppercase mb-4"
          >
            Curated Escapes
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white font-light leading-tight mb-5"
          >
            Tour <em className="text-saffron-300">Packages</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 font-body text-lg max-w-2xl mx-auto mb-8"
          >
            {packages.length} handcrafted packages with premium stays, guided tours, and zero hidden costs. Click any card to see the full itinerary.
          </motion.p>

          {/* Highlight pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {['✅ Free Customisation', '🏆 Best Price Guarantee', '📞 24/7 Support', '🛡 Fully Insured'].map(t => (
              <span key={t} className="glass text-white/80 text-sm font-body px-4 py-2 rounded-full">
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-pad bg-cream">
        <div className="container-custom">

          {/* Filter row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-8">
            <span className="flex items-center gap-1.5 text-earth-500 font-body text-sm mr-1">
              <Filter className="w-3.5 h-3.5" /> Package type:
            </span>
            {packageCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full font-body text-sm transition-all duration-200 ${
                  activeFilter === cat.id
                    ? 'bg-saffron-500 text-white shadow-saffron'
                    : 'bg-white text-earth-600 border border-earth-200 hover:border-saffron-300 hover:text-saffron-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <p className="text-earth-400 font-body text-sm mb-7">
            Showing <strong className="text-charcoal">{filtered.length}</strong> packages
          </p>

          {/* Packages grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              {filtered.map((pkg, i) => (
                <PackageCard key={pkg.id} pkg={pkg} index={i} onSelect={setSelectedPkg} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Why book with us strip */}
      <section className="py-14 bg-saffron-500">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { icon: '🏷', title: 'Best Price', sub: 'Guaranteed lowest rates' },
              { icon: '📋', title: 'Free Itinerary', sub: 'Custom plan in 24 hrs' },
              { icon: '🔄', title: 'Easy Changes', sub: 'Flexible modifications' },
              { icon: '🌟', title: '98% Happy', sub: '12,000+ satisfied guests' },
            ].map(item => (
              <div key={item.title}>
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-body font-semibold text-white mb-0.5">{item.title}</p>
                <p className="font-body text-white/70 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package detail modal */}
      <AnimatePresence>
        {selectedPkg && (
          <PackageModal pkg={selectedPkg} onClose={() => setSelectedPkg(null)} />
        )}
      </AnimatePresence>

      <CTABanner />
    </>
  );
}
