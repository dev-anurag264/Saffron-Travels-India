import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search, Star, Clock, MapPin, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTABanner from '../components/sections/CTABanner';
import { destinations, destinationCategories } from '../data/destinations';

export default function DestinationsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = useMemo(() => {
    let list = activeFilter === 'all'
      ? destinations
      : destinations.filter(d => d.category.includes(activeFilter));
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(d =>
        d.name.toLowerCase().includes(q) ||
        d.state.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeFilter, searchQuery]);

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80"
            alt="India destinations"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal" />
        </div>

        {/* Floating destination badges */}
        {['Kashmir ❄️', 'Kerala 🌴', 'Rajasthan 🏜', 'Goa 🌊', 'Andaman 🐠'].map((name, i) => (
          <motion.div
            key={name}
            className="absolute glass px-3 py-1.5 rounded-full text-white/70 text-xs font-body hidden md:block"
            style={{
              top: `${20 + i * 12}%`,
              right: `${8 + (i % 2) * 10}%`,
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
          >
            {name}
          </motion.div>
        ))}

        <div className="relative z-10 container-custom text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-saffron-400 font-body text-sm tracking-widest uppercase mb-4"
          >
            Discover India
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white font-light leading-tight mb-5"
          >
            All <em className="text-saffron-300">Destinations</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 font-body text-lg max-w-xl mx-auto mb-8"
          >
            {destinations.length} handpicked destinations across India — from snow-capped Himalayan peaks to sun-drenched tropical coastlines.
          </motion.p>

          {/* Search bar in hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-md mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-earth-400" />
            <input
              type="text"
              placeholder="Search destinations, states…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-white rounded-full pl-11 pr-10 py-3.5 font-body text-sm text-charcoal placeholder:text-earth-300 focus:outline-none focus:ring-2 focus:ring-saffron-300 shadow-glass"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-earth-400 hover:text-charcoal"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section-pad bg-cream">
        <div className="container-custom">

          {/* Category filter pills */}
          <div className="flex flex-wrap items-center gap-2.5 mb-8">
            <span className="flex items-center gap-1.5 text-earth-500 font-body text-sm mr-1">
              <Filter className="w-3.5 h-3.5" />
              Filter:
            </span>
            {destinationCategories.map(cat => (
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
            {(activeFilter !== 'all' || searchQuery) && (
              <button
                onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
                className="flex items-center gap-1 text-earth-400 hover:text-saffron-600 font-body text-sm transition-colors ml-2"
              >
                <X className="w-3.5 h-3.5" /> Clear filters
              </button>
            )}
          </div>

          {/* Results count */}
          <p className="text-earth-400 font-body text-sm mb-7">
            Showing <strong className="text-charcoal">{filtered.length}</strong> of {destinations.length} destinations
            {searchQuery && <span> matching &quot;<strong className="text-saffron-600">{searchQuery}</strong>&quot;</span>}
          </p>

          {/* Grid */}
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={activeFilter + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filtered.map((dest, i) => (
                  <motion.div
                    key={dest.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group bg-white rounded-3xl overflow-hidden shadow-card hover:-translate-y-2 hover:shadow-card-hover transition-all duration-500 cursor-pointer"
                    onMouseEnter={() => setHoveredId(dest.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-card-gradient" />
                      {dest.badge && (
                        <div className="absolute top-3 left-3">
                          <span className="glass text-white text-xs font-body font-medium px-3 py-1.5 rounded-full">
                            {dest.badge}
                          </span>
                        </div>
                      )}
                      <div className="absolute top-3 right-3 flex items-center gap-1 glass px-2.5 py-1.5 rounded-full">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-white text-xs font-medium">{dest.rating}</span>
                        <span className="text-white/50 text-xs">({dest.reviews})</span>
                      </div>
                      <div className="absolute bottom-3 left-4">
                        <p className="text-saffron-300 text-xs font-body tracking-wider uppercase mb-0.5">{dest.state}</p>
                        <h3 className="text-white font-display text-xl font-medium">{dest.name}</h3>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5">
                      <p className="text-earth-500 font-body text-sm leading-relaxed line-clamp-2 mb-3">{dest.description}</p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {dest.highlights.slice(0, 3).map((h, idx) => (
                          <span key={idx} className="text-xs bg-saffron-50 text-saffron-700 px-2.5 py-1 rounded-full font-body">
                            {h}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-end justify-between pt-3 border-t border-earth-100">
                        <div>
                          <p className="text-xs text-earth-400 font-body mb-0.5">Starting from</p>
                          <p className="text-saffron-600 font-display text-xl font-semibold">{dest.priceFrom}</p>
                          <div className="flex items-center gap-1 mt-0.5">
                            <Clock className="w-3 h-3 text-earth-400" />
                            <span className="text-earth-400 text-xs font-body">{dest.duration}</span>
                          </div>
                        </div>
                        <Link
                          to="/packages"
                          className="flex items-center gap-1.5 text-saffron-600 hover:text-saffron-700 font-body font-medium text-sm group/link"
                        >
                          Explore
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24"
              >
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="font-display text-2xl text-charcoal mb-2">No destinations found</h3>
                <p className="font-body text-earth-400 mb-6">Try adjusting your search or filter.</p>
                <button
                  onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
                  className="btn-primary"
                >
                  Show All Destinations
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Best time to visit quick guide */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block text-saffron-500 font-body text-sm tracking-widest uppercase mb-3">
              Plan Smarter
            </span>
            <h2 className="font-display text-4xl text-charcoal font-light">
              Best Time to <em>Visit India</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { season: 'Winter', months: 'Oct – Feb', icon: '🌨', moods: ['Rajasthan', 'Kerala', 'Goa', 'Varanasi'], color: 'bg-blue-50 border-blue-200' },
              { season: 'Spring', months: 'Mar – Apr', icon: '🌸', moods: ['Himachal', 'Kashmir Valley', 'Northeast'], color: 'bg-rose-50 border-rose-200' },
              { season: 'Summer', months: 'Apr – Jun', icon: '☀️', moods: ['Manali', 'Kashmir', 'Leh-Ladakh'], color: 'bg-yellow-50 border-yellow-200' },
              { season: 'Monsoon', months: 'Jul – Sep', icon: '🌧', moods: ['Kerala', 'Coorg', 'Goa (offbeat)', 'Valley of Flowers'], color: 'bg-emerald-50 border-emerald-200' },
            ].map((s, i) => (
              <motion.div
                key={s.season}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border p-5 ${s.color}`}
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-body font-semibold text-charcoal mb-0.5">{s.season}</h3>
                <p className="text-saffron-600 font-body text-sm font-medium mb-3">{s.months}</p>
                <ul className="space-y-1">
                  {s.moods.map(m => (
                    <li key={m} className="text-earth-600 font-body text-xs flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-saffron-400 flex-shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
