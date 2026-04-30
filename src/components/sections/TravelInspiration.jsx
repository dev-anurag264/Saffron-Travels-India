import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const photos = [
  {
    src: "src/assets/locations/dal.jpg",
    caption: "Dal Lake sunrise, Kashmir",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
    caption: "Goa beach vibes",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    caption: "Manali snow peaks",
    span: "",
  },
  {
    src: "src/assets/locations/sk02.jpg",
    caption: "Buddhist monastery, Sikkim",
    span: "col-span-2",
  },
  {
    src: "src/assets/locations/varanasi.jpg",
    caption: "Varanasi ghats",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=600&q=80",
    caption: "Coorg misty mornings",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
    caption: "Andaman turquoise waters",
    span: "",
  },
];

export default function TravelInspiration() {
  return (
    <section
      className="section-pad bg-white"
      aria-label="Travel inspiration gallery"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="inline-block text-saffron-500 font-body text-sm tracking-widest uppercase mb-3">
              Visual Stories
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal font-light leading-tight">
              India Through <em>Our Lens</em>
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-earth-500 hover:text-saffron-600 font-body text-sm transition-colors group"
          >
            <Instagram className="w-5 h-5 group-hover:text-saffron-500 transition-colors" />
            @saffrontrailsindia
          </a>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[560px] md:h-[680px]">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-400" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-body text-xs md:text-sm text-shadow-sm">
                  📍 {photo.caption}
                </p>
              </div>
              {/* Instagram icon on hover */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-7 h-7 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Instagram className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex"
          >
            <Instagram className="w-4 h-4" />
            Follow Our Journey on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
