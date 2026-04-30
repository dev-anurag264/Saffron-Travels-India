import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, MapPin } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Destinations", path: "/destinations" },
  { label: "Packages", path: "/packages" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navBg = scrolled
    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-earth-100"
    : isHome
      ? "bg-transparent"
      : "bg-white/95 backdrop-blur-md border-b border-earth-100";

  const textColor = scrolled || !isHome ? "text-charcoal" : "text-white";
  const logoColor = scrolled || !isHome ? "text-saffron-600" : "text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  scrolled || !isHome
                    ? "bg-saffron-500"
                    : "bg-white/20 border border-white/40"
                }`}
              >
                <MapPin
                  className={`w-5 h-5 ${scrolled || !isHome ? "text-white" : "text-saffron-300"}`}
                />
              </div>
              <div>
                <p
                  className={`font-display text-xl font-semibold leading-none transition-colors ${logoColor}`}
                >
                  Saffron Travels
                </p>
                <p
                  className={`text-xs font-body tracking-widest uppercase transition-colors ${
                    scrolled || !isHome ? "text-saffron-500" : "text-white/60"
                  }`}
                >
                  India
                </p>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-body text-sm font-medium transition-colors duration-200 relative group ${
                      isActive
                        ? "text-saffron-500"
                        : `${textColor} hover:text-saffron-400`
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-px bg-saffron-500 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+919876543210"
                className={`flex items-center gap-2 text-sm font-body font-medium transition-colors ${
                  scrolled || !isHome
                    ? "text-earth-600 hover:text-saffron-600"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
                Get Your Package
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled || !isHome
                  ? "text-charcoal hover:bg-earth-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-50 lg:hidden shadow-2xl flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-earth-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-saffron-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-display text-lg font-semibold text-charcoal">
                    Saffron Trails
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-earth-500 hover:text-charcoal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 px-6 py-6 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block py-3.5 font-body text-base font-medium border-b border-earth-100 transition-colors ${
                          isActive
                            ? "text-saffron-600"
                            : "text-charcoal hover:text-saffron-500"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="px-6 py-6 border-t border-earth-100 space-y-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-earth-600 font-body text-sm"
                >
                  <Phone className="w-4 h-4 text-saffron-500" />
                  +91 98765 43210
                </a>
                <Link
                  to="/contact"
                  className="btn-primary w-full justify-center text-sm"
                >
                  Plan Your Trip
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
