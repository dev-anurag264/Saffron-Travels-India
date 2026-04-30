import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-5">
      <div className="text-center max-w-lg">
        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="relative mb-8 mx-auto w-64 h-64"
        >
          {/* Background circle */}
          <div className="absolute inset-0 bg-saffron-50 rounded-full" />
          {/* 404 text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-8xl font-light text-saffron-200">404</span>
          </div>
          {/* Compass emoji */}
          <div className="absolute -top-4 -right-4 text-5xl animate-float">🧭</div>
          <div className="absolute -bottom-2 -left-2 text-4xl animate-float" style={{ animationDelay: '1s' }}>🗺️</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="font-display text-4xl text-charcoal font-light mb-3">
            Lost in the <em className="text-saffron-500">Wilderness?</em>
          </h1>
          <p className="font-body text-earth-500 text-lg mb-8">
            Even the best explorers take a wrong turn sometimes. The page you're looking for doesn't exist — but India's most breathtaking adventures do.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="btn-primary">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
