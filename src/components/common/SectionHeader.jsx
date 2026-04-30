import { motion } from 'framer-motion';

/**
 * Reusable section header with animated entrance
 * @param {string} eyebrow - Small label above title
 * @param {string} title - Main heading
 * @param {string} subtitle - Supporting text below title
 * @param {string} align - 'center' | 'left'
 * @param {boolean} light - Use light text (for dark backgrounds)
 */
export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', light = false }) {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : ''} mb-14`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-block text-sm font-body font-medium tracking-widest uppercase mb-4 ${
            light ? 'text-saffron-300' : 'text-saffron-500'
          }`}
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-5 ${
          light ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg font-body leading-relaxed ${
            light ? 'text-white/70' : 'text-earth-500'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
