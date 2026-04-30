import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import OfferBanner from "./components/layout/OfferBanner";
import PageTransition from "./components/common/PageTransition";
import ScrollToTop from "./components/common/ScrollToTop";
import {
  WhatsAppButton,
  BackToTopButton,
} from "./components/common/FloatingButtons";

import HomePage from "./pages/HomePage";
import DestinationsPage from "./pages/DestinationsPage";
import PackagesPage from "./pages/PackagesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/destinations"
          element={
            <PageTransition>
              <DestinationsPage />
            </PageTransition>
          }
        />
        <Route
          path="/packages"
          element={
            <PageTransition>
              <PackagesPage />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFoundPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <OfferBanner />
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
    </Router>
  );
}

export default App;
