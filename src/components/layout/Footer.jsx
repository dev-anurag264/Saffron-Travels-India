import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Destinations", path: "/destinations" },
  { label: "Tour Packages", path: "/packages" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

const destinationLinks = [
  "Sikkim",
  "Kashmir",
  "Kerala",
  "Darjeeling",
  "Goa",
  "Manali",
  "Andaman",
  "Varanasi",
  "Coorg/Ooty",
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/80 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-saffron-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-saffron-800/10 rounded-full blur-3xl pointer-events-none" />

      {/* Newsletter CTA Banner */}
      <div className="border-b border-white/10">
        <div className="container-custom py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-white font-light mb-1">
                Get exclusive travel deals
              </h3>
              <p className="text-white/50 font-body text-sm">
                Subscribe for curated itineraries, seasonal offers, and insider
                tips.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-72 bg-white/10 border border-white/20 text-white placeholder:text-white/40 font-body text-sm px-4 py-3 rounded-full focus:outline-none focus:border-saffron-400 transition-colors"
              />
              <button className="btn-primary text-sm py-3 px-6 whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-saffron-500 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-display text-xl text-white font-semibold leading-none">
                  Saffron Travels
                </p>
                <p className="text-xs text-saffron-400 tracking-widest uppercase">
                  India
                </p>
              </div>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-6">
              Crafting extraordinary journeys across India since 2023. Premium,
              personalised, and passion-driven travel experiences.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-saffron-500 hover:border-saffron-500 hover:text-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-white font-medium mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-white/50 hover:text-saffron-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-saffron-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h4 className="font-display text-lg text-white font-medium mb-5">
              Top Destinations
            </h4>
            <ul className="space-y-3">
              {destinationLinks.map((dest) => (
                <li key={dest}>
                  <Link
                    to="/destinations"
                    className="font-body text-sm text-white/50 hover:text-saffron-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-saffron-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {dest}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-white font-medium mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-saffron-400 mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-white/50 leading-relaxed">
                  302, Radison Towers, SF Road,
                  <br />
                  Siliguri, West Bengal - 734001
                </p>
              </li>
              <li>
                <a
                  href="tel:+917004421172"
                  className="flex items-center gap-3 font-body text-sm text-white/50 hover:text-saffron-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                  +91 70044 21172
                </a>
              </li>
              <li>
                <a
                  href="mailto:enquiry@saffrontravels.in"
                  className="flex items-center gap-3 font-body text-sm text-white/50 hover:text-saffron-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                  enquiry@saffrontravels.in
                </a>
              </li>
            </ul>

            {/* Certifications */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/30 text-xs font-body mb-2">
                Certified & Trusted By
              </p>
              <div className="flex flex-wrap gap-2">
                {["MoT Registered", "IATA Member", "TAAI Certified"].map(
                  (cert) => (
                    <span
                      key={cert}
                      className="text-xs bg-white/10 text-white/50 px-2.5 py-1 rounded-full font-body"
                    >
                      {cert}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs font-body">
            © {currentYear} Saffron Travels India. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-body">
            Made with ❤️ in India. Crafted by {"Anurag Prasad"}
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use", "Cancellation Policy"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/30 hover:text-saffron-400 text-xs font-body transition-colors"
                >
                  {link}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
