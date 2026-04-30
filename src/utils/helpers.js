/**
 * Formats a number as Indian currency string
 * @param {number} amount
 * @returns {string} e.g. "₹1,25,000"
 */
export function formatINR(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Truncates text to a max length with ellipsis
 */
export function truncate(text, max = 120) {
  if (!text || text.length <= max) return text;
  return text.slice(0, max).trim() + '…';
}

/**
 * Returns a CSS class string for star rating display
 */
export function starClass(rating, index) {
  return index < Math.floor(rating)
    ? 'text-yellow-400 fill-yellow-400'
    : index < rating
    ? 'text-yellow-300 fill-yellow-300'
    : 'text-gray-200 fill-gray-200';
}

/**
 * Debounce function for search inputs
 */
export function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Smooth scroll to element by ID
 */
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Maps category id to a display label
 */
export const categoryLabels = {
  'all': 'All',
  'beach': 'Beach & Islands',
  'hill-station': 'Hill Stations',
  'heritage': 'Heritage',
  'adventure': 'Adventure',
  'honeymoon': 'Honeymoon',
  'family': 'Family',
  'spiritual': 'Spiritual',
  'luxury': 'Luxury',
  'romantic': 'Romantic',
  'premium': 'Premium',
  'nature': 'Nature',
  'wellness': 'Wellness',
  'cultural': 'Cultural',
  'group': 'Group',
};
