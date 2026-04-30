import { motion } from "framer-motion";
import { Users, Map, Star, Award } from "lucide-react";
import AnimatedCounter from "../common/AnimatedCounter";

const stats = [
  {
    value: "4,000+",
    label: "Happy Travelers",
    icon: Users,
    color: "text-saffron-500",
    bg: "bg-saffron-50",
  },
  {
    value: "20+",
    label: "Destinations",
    icon: Map,
    color: "text-jade-500",
    bg: "bg-jade-500/10",
  },
  {
    value: "98%",
    label: "Satisfaction Rate",
    icon: Star,
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    value: "3",
    label: "Years of Excellence",
    icon: Award,
    color: "text-blue-500",
    bg: "bg-blue-50",
    suffix: " Yrs",
  },
];

export default function StatsSection() {
  return (
    <section
      className="bg-white py-16 border-y border-earth-100"
      aria-label="Company statistics"
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group relative"
              >
                {/* Divider on desktop */}
                {i !== 0 && (
                  <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-earth-100" />
                )}

                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-800 ${stat.bg} ${stat.color}`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <p
                  className={`font-display text-4xl md:text-5xl font-semibold mb-1.5 ${stat.color}`}
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-body text-sm text-earth-500">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
