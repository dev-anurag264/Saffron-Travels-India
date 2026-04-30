import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeader from "../common/SectionHeader";

const tripTypes = [
  {
    title: "Honeymoon",
    icon: "",
    description: "Romantic escapes crafted for Couples",
    image: "src/assets/locations/shimla.jpg",
    color: "from-rose-900/70",
    filter: "honeymoon",
  },
  {
    title: "Family",
    icon: "",
    description: "Memories your kids will never forget",
    image: "src/assets/locations/rj.jpg",
    color: "from-amber-900/70",
    filter: "family",
  },
  {
    title: "Adventure",
    icon: "",
    description: "For the thrill-seekers and explorers",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    color: "from-blue-900/70",
    filter: "adventure",
  },
  {
    title: "Heritage",
    icon: "",
    description: "Step into India's glorious past",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
    color: "from-purple-900/70",
    filter: "heritage",
  },
  {
    title: "Beach & Islands",
    icon: "",
    description: "Sun, sand, and crystal water",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
    color: "from-cyan-900/70",
    filter: "beach",
  },
  {
    title: "Luxury",
    icon: "",
    description: "Palaces, private villas & 5-star stays",
    image: "src/assets/locations/lux.jpg",
    color: "from-yellow-900/70",
    filter: "premium",
  },
];

export default function TripTypeGrid() {
  return (
    <section
      className="section-pad bg-white"
      aria-labelledby="trip-types-heading"
    >
      <div className="container-custom">
        <SectionHeader
          eyebrow="Travel Your Way"
          title={
            <>
              Find Your <em>Perfect Trip Style</em>
            </>
          }
          subtitle="Whether you seek adventure, romance, heritage, or pure relaxation. We have the perfect Itinerary for you."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {tripTypes.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <Link
                to={`/packages`}
                className="relative group block rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] shadow-card hover:shadow-card-hover transition-all duration-500"
              >
                {/* Background image */}
                <img
                  src={type.image}
                  alt={type.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${type.color} via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity`}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                  <span className="text-2xl md:text-3xl mb-1 md:mb-2 group-hover:scale-110 transition-transform inline-block">
                    {type.icon}
                  </span>
                  <h3 className="text-white font-display text-lg md:text-2xl font-medium leading-tight">
                    {type.title}
                  </h3>
                  <p className="text-white/70 font-body text-xs md:text-sm mt-0.5 md:mt-1 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {type.description}
                  </p>
                </div>

                {/* Top-right arrow on hover */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/0 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
