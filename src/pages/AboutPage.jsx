import { motion } from 'framer-motion';
import { Linkedin, Star, Users, Map, Award } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import CTABanner from '../components/sections/CTABanner';
import { teamMembers, stats } from '../data/testimonials';

const milestones = [
  { year: '2008', event: 'Founded in Mumbai with a team of 3 passionate travelers' },
  { year: '2012', event: 'Crossed 1,000 satisfied travelers. Expanded to South India & Northeast' },
  { year: '2015', event: 'Launched premium luxury travel vertical. IATA membership achieved' },
  { year: '2018', event: 'Reached 5,000+ travelers. Won "Best Emerging Travel Agency" award' },
  { year: '2021', event: 'Pivoted to curated small-group journeys post-pandemic. Digital-first rebrand' },
  { year: '2024', event: '12,000+ happy travelers. 280+ destinations. 16 years of crafting memories' },
];

const values = [
  {
    title: 'Authenticity First',
    desc: 'We believe travel should reveal the true soul of a place — not just the tourist-facing version. Every itinerary goes beyond the guidebook.',
    icon: '🌿',
  },
  {
    title: 'Responsible Travel',
    desc: 'We work with local guides, family-run hotels, and community businesses to ensure tourism benefits the people and places we visit.',
    icon: '🤝',
  },
  {
    title: 'Zero Compromise Quality',
    desc: 'From budget to luxury, we vet every hotel, every transport partner, every activity. Our standards don\'t flex — ever.',
    icon: '⭐',
  },
  {
    title: 'Relationships Over Transactions',
    desc: 'More than 60% of our bookings come from repeat travelers or their referrals. That\'s the metric we care about most.',
    icon: '💛',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-36 pb-24 bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1920&q=80"
            alt="Saffron Trails India team"
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
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl text-white font-light leading-tight mb-6"
          >
            We Are <em className="text-saffron-300">Saffron Trails</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 font-body text-lg leading-relaxed"
          >
            Born from a deep love for India and a belief that travel, when done right, transforms lives. Since 2008, we've been the trusted guide for over 12,000 travelers.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-card-hover aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Saffron Trails team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-saffron-500 rounded-2xl p-6 shadow-saffron text-white max-w-40">
                <p className="font-display text-4xl font-semibold">16</p>
                <p className="font-body text-sm text-white/80">Years crafting<br />dream journeys</p>
              </div>
            </motion.div>

            <div>
              <SectionHeader
                eyebrow="How We Started"
                title={<>A Journey That Started <em>With a Dream</em></>}
                align="left"
              />
              <div className="space-y-4 text-earth-600 font-body leading-relaxed">
                <p>
                  Saffron Trails India was founded in 2008 by Rohan Kapoor — a passionate traveler who had spent years exploring India's hidden corners and realized that most tour companies were showing people only the surface.
                </p>
                <p>
                  The name &quot;Saffron Trails&quot; was chosen deliberately: saffron — India's most precious spice — represents luxury, rarity, and authenticity. That's exactly what we promise every traveler who books with us.
                </p>
                <p>
                  Starting from a small office in Bandra with 3 people and a phone, we've grown into a team of 40+ travel specialists handling everything from intimate honeymoon escapes to large corporate MICE events — all across India.
                </p>
                <p>
                  What hasn't changed in 16 years: our obsession with getting every detail right, and our genuine belief that travel is one of life's greatest gifts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-cream border-y border-earth-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '12,000+', label: 'Happy Travelers', color: 'text-saffron-500' },
              { icon: Map, value: '280+', label: 'Destinations', color: 'text-jade-500' },
              { icon: Star, value: '98%', label: 'Satisfaction Rate', color: 'text-yellow-500' },
              { icon: Award, value: '16 Yrs', label: 'Of Excellence', color: 'text-blue-500' },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white mb-4 shadow-sm ${s.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className={`font-display text-4xl font-semibold mb-1 ${s.color}`}>{s.value}</p>
                  <p className="font-body text-sm text-earth-500">{s.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="What We Stand For"
            title={<>Our Mission, Vision & <em>Values</em></>}
            subtitle="The principles that have guided every decision we've made over 16 years."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-saffron-50 rounded-3xl p-8 border border-saffron-100"
            >
              <div className="w-12 h-12 bg-saffron-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-5">🎯</div>
              <h3 className="font-display text-2xl text-charcoal font-medium mb-3">Our Mission</h3>
              <p className="font-body text-earth-600 leading-relaxed">
                To make premium, curated travel accessible to every Indian family — ensuring that the experience of exploring our magnificent country is as extraordinary as the country itself. We bridge the gap between aspiration and experience.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-charcoal rounded-3xl p-8"
            >
              <div className="w-12 h-12 bg-saffron-500/20 rounded-2xl flex items-center justify-center text-2xl mb-5">🔭</div>
              <h3 className="font-display text-2xl text-white font-medium mb-3">Our Vision</h3>
              <p className="font-body text-white/60 leading-relaxed">
                To become India's most trusted travel partner — not the biggest, but the best. A company where every traveler feels like a guest being welcomed by a friend who knows exactly where to take them for the most unforgettable experience.
              </p>
            </motion.div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-cream rounded-2xl p-6 border border-earth-100 hover:border-saffron-200 hover:shadow-card transition-all duration-300"
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-body font-semibold text-charcoal mb-2">{v.title}</h3>
                <p className="font-body text-sm text-earth-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-cream">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Our Journey"
            title={<>16 Years, One <em>Passion</em></>}
            subtitle="From a small office in Mumbai to over 12,000 happy travelers — our story."
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-16 top-0 bottom-0 w-px bg-earth-200" />

              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-8 items-start"
                  >
                    <div className="w-20 flex-shrink-0 text-right">
                      <span className="font-display text-saffron-600 font-semibold text-lg">{m.year}</span>
                    </div>
                    <div className="relative flex-1 pb-2">
                      <div className="absolute -left-[2.3rem] top-1 w-4 h-4 rounded-full bg-saffron-500 border-4 border-cream shadow-saffron" />
                      <p className="font-body text-earth-600 leading-relaxed">{m.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="The People Behind Your Trips"
            title={<>Meet Our <em>Expert Team</em></>}
            subtitle="Passionate travelers turned professional planners — every team member has personally experienced the destinations they sell."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="relative mb-5 mx-auto w-fit">
                  <div className="w-36 h-36 mx-auto rounded-3xl overflow-hidden shadow-card group-hover:shadow-card-hover transition-all duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <a
                    href={member.linkedin}
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="font-body font-semibold text-charcoal mb-0.5">{member.name}</h3>
                <p className="text-saffron-600 font-body text-sm mb-3">{member.role}</p>
                <p className="text-earth-500 font-body text-xs leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
