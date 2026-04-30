import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    sub: 'Mon – Sat, 9 AM – 8 PM',
    href: 'tel:+919876543210',
    color: 'bg-saffron-100 text-saffron-600',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@saffrontrails.in',
    sub: 'We reply within 2 hours',
    href: 'mailto:hello@saffrontrails.in',
    color: 'bg-jade-500/10 text-jade-600',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: '302, Horizon Tower, Linking Rd',
    sub: 'Bandra West, Mumbai — 400050',
    href: 'https://maps.google.com',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon–Sat: 9 AM – 8 PM',
    sub: 'Sunday: 10 AM – 5 PM',
    href: null,
    color: 'bg-purple-50 text-purple-600',
  },
];

const tripTypes = [
  'Honeymoon / Romantic',
  'Family Vacation',
  'Adventure Trip',
  'Heritage & Culture',
  'Beach Holiday',
  'Corporate / MICE',
  'Solo Travel',
  'Other',
];

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required';
  if (!form.email.trim()) errors.email = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = 'Invalid email address';
  if (!form.phone.trim()) errors.phone = 'Phone number is required';
  else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) errors.phone = 'Enter valid 10-digit Indian mobile number';
  if (!form.message.trim()) errors.message = 'Please tell us about your trip';
  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    tripType: '',
    destination: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    // Clear error on change
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Simulate API call
    setStatus('success');
    setForm({ name: '', email: '', phone: '', tripType: '', destination: '', budget: '', message: '' });
    setErrors({});
  };

  const inputClass = (field) =>
    `w-full bg-earth-50 border rounded-xl px-4 py-3.5 font-body text-sm text-charcoal placeholder:text-earth-300 focus:outline-none focus:ring-2 transition-all ${
      errors[field]
        ? 'border-red-300 focus:ring-red-200'
        : 'border-earth-200 focus:border-saffron-400 focus:ring-saffron-100'
    }`;

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-36 pb-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=80"
            alt="Contact Saffron Trails"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 to-charcoal" />
        </div>
        <div className="relative z-10 container-custom text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block text-saffron-400 font-body text-sm tracking-widest uppercase mb-4"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl text-white font-light leading-tight mb-4"
          >
            Let's Plan Your <em className="text-saffron-300">Dream Trip</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 font-body text-lg max-w-xl mx-auto"
          >
            Fill in your details and our travel expert will craft a personalised itinerary within 24 hours — completely free.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-pad bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left: Info cards */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="font-display text-3xl text-charcoal font-light mb-6">
                Find Us, Call Us, <br /><em>Or Just Drop Us a Note</em>
              </h2>

              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                const content = (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-sm border border-earth-100 hover:border-saffron-200 hover:shadow-card transition-all duration-300"
                  >
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 ${info.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-earth-400 mb-0.5">{info.label}</p>
                      <p className="font-body font-medium text-charcoal text-sm">{info.value}</p>
                      <p className="font-body text-xs text-earth-400 mt-0.5">{info.sub}</p>
                    </div>
                  </motion.div>
                );

                return info.href ? (
                  <a key={info.label} href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}

              {/* Map Embed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-card h-52 mt-6"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2088398994753!2d72.82895!3d19.05455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9023e06e5ed%3A0x70e18e14eade7cd7!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Saffron Trails Office Location"
                />
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-white rounded-3xl shadow-card p-8 md:p-10"
            >
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-jade-500 mb-4" />
                  <h3 className="font-display text-3xl text-charcoal mb-3">Enquiry Sent!</h3>
                  <p className="font-body text-earth-500 text-lg mb-6">
                    Thank you! Our travel expert will reach out within 24 hours with a personalised itinerary.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-primary"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl text-charcoal font-medium mb-1">Trip Enquiry Form</h2>
                  <p className="text-earth-500 font-body text-sm mb-8">Free consultation • No obligation • 24-hour response</p>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-xs font-medium text-charcoal mb-1.5">
                          Full Name <span className="text-saffron-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="e.g. Priya Sharma"
                          className={inputClass('name')}
                        />
                        {errors.name && (
                          <p className="flex items-center gap-1 text-red-500 text-xs mt-1">
                            <AlertCircle className="w-3 h-3" />{errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block font-body text-xs font-medium text-charcoal mb-1.5">
                          Mobile Number <span className="text-saffron-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="10-digit mobile number"
                          maxLength={10}
                          className={inputClass('phone')}
                        />
                        {errors.phone && (
                          <p className="flex items-center gap-1 text-red-500 text-xs mt-1">
                            <AlertCircle className="w-3 h-3" />{errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block font-body text-xs font-medium text-charcoal mb-1.5">
                        Email Address <span className="text-saffron-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputClass('email')}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 text-red-500 text-xs mt-1">
                          <AlertCircle className="w-3 h-3" />{errors.email}
                        </p>
                      )}
                    </div>

                    {/* Trip type & Destination */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-xs font-medium text-charcoal mb-1.5">Trip Type</label>
                        <select
                          name="tripType"
                          value={form.tripType}
                          onChange={handleChange}
                          className={`${inputClass('tripType')} cursor-pointer`}
                        >
                          <option value="">Select trip type</option>
                          {tripTypes.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>

                      <div>
                        <label className="block font-body text-xs font-medium text-charcoal mb-1.5">Destination Interest</label>
                        <input
                          type="text"
                          name="destination"
                          value={form.destination}
                          onChange={handleChange}
                          placeholder="e.g. Kashmir, Kerala..."
                          className={inputClass('destination')}
                        />
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block font-body text-xs font-medium text-charcoal mb-1.5">Approximate Budget (per person)</label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className={`${inputClass('budget')} cursor-pointer`}
                      >
                        <option value="">Select budget range</option>
                        <option value="under-20k">Under ₹20,000</option>
                        <option value="20-40k">₹20,000 – ₹40,000</option>
                        <option value="40-75k">₹40,000 – ₹75,000</option>
                        <option value="75k-1l">₹75,000 – ₹1,00,000</option>
                        <option value="1l+">Above ₹1,00,000</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block font-body text-xs font-medium text-charcoal mb-1.5">
                        Tell Us About Your Trip <span className="text-saffron-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="E.g. We are a couple of 2 planning our honeymoon in October, looking for 7 nights, interested in Kashmir. Budget around ₹60,000 per person..."
                        rows={4}
                        className={`${inputClass('message')} resize-none`}
                      />
                      {errors.message && (
                        <p className="flex items-center gap-1 text-red-500 text-xs mt-1">
                          <AlertCircle className="w-3 h-3" />{errors.message}
                        </p>
                      )}
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                      <Send className="w-4 h-4" />
                      Send My Enquiry — It's Free!
                    </button>

                    <p className="text-center text-earth-400 font-body text-xs">
                      🔒 Your information is secure. We never share it with third parties.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
