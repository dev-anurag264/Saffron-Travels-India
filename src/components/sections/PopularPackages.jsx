import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import PackageCard from '../common/PackageCard';
import { packages } from '../../data/packages';

export default function PopularPackages() {
  const featured = packages.filter(p => p.isFeatured).slice(0, 3);

  return (
    <section className="section-pad bg-cream" aria-labelledby="packages-heading">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Handpicked For You"
          title={<>Our Most Popular <em>Packages</em></>}
          subtitle="Carefully designed tour packages with everything you need — hotels, transport, experiences, and expert guidance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
          {featured.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/packages" className="btn-secondary">
            Browse All Packages
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
