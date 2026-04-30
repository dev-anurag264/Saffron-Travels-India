import { motion } from "framer-motion";

const marqueeItems = [
  "Kashmir",
  "Kerala",
  "Rajasthan",
  "Goa",
  "Manali",
  "Andaman",
  "Varanasi",
  "Coorg",
  "North Sikkim",
  "Gangtok",
  "Darjeeling",
  "Zuluk",
  "Munnar",
  "Aritar",
  "Yumthang Valley",
];

export default function DestinationMarquee() {
  return (
    <div
      className="bg-saffron-500 py-3.5 overflow-hidden relative"
      aria-hidden="true"
    >
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-8 whitespace-nowrap px-4 flex-shrink-0"
          >
            <span className="text-white font-body text-sm font-medium">
              {item}
            </span>

            <span className="text-white/30 text-xs">-</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
