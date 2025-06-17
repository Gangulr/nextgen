'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Show success animation
      document.getElementById('success-message')?.classList.remove('hidden');
      setTimeout(() => {
        document.getElementById('success-message')?.classList.add('hidden');
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gradient-to-br from-deep-space to-cosmic-purple min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Message */}
        <motion.div
          id="success-message"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="hidden fixed top-4 right-4 z-50 bg-stellar-accent text-stellar-white px-6 py-3 rounded-lg shadow-lg border border-galaxy-indigo/30"
        >
          <div className="flex items-center space-x-2">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Thank you! Your message has been sent.</span>
          </div>
        </motion.div>

        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-stellar-white sm:text-5xl sm:tracking-tight lg:text-6xl"
          >
            Let&apos;s <span className="text-stellar-accent">Connect</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-2xl mx-auto text-xl text-nebula-blue-200"
          >
            Have a project in mind or want to discuss potential collaboration? 
            We&apos;d love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-galaxy-indigo/50 rounded-2xl shadow-xl overflow-hidden border border-galaxy-indigo/30"
          >
            <div className="p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-stellar-white mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-nebula-blue-200 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 rounded-lg bg-deep-space/50 border border-galaxy-indigo/30 text-stellar-white focus:ring-2 focus:ring-stellar-accent focus:border-stellar-accent transition-all placeholder-nebula-blue-200/50"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-nebula-blue-200 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 rounded-lg bg-deep-space/50 border border-galaxy-indigo/30 text-stellar-white focus:ring-2 focus:ring-stellar-accent focus:border-stellar-accent transition-all placeholder-nebula-blue-200/50"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-nebula-blue-200 mb-1">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 rounded-lg bg-deep-space/50 border border-galaxy-indigo/30 text-stellar-white focus:ring-2 focus:ring-stellar-accent focus:border-stellar-accent transition-all placeholder-nebula-blue-200/50"
                    placeholder="Acme Inc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-nebula-blue-200 mb-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 rounded-lg bg-deep-space/50 border border-galaxy-indigo/30 text-stellar-white focus:ring-2 focus:ring-stellar-accent focus:border-stellar-accent transition-all placeholder-nebula-blue-200/50"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-deep-space bg-stellar-accent hover:bg-stellar-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stellar-accent transition-colors ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-deep-space" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-cosmic-purple/50 to-galaxy-indigo/70 rounded-2xl shadow-xl p-8 sm:p-10 text-stellar-white border border-galaxy-indigo/30">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="mb-8 text-nebula-blue-200">
                Feel free to reach out to us through any of these channels. Our team typically responds within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-stellar-accent/20 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-stellar-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="mt-1 text-nebula-blue-200">contact@nextgen-solutions.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-stellar-accent/20 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-stellar-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="mt-1 text-nebula-blue-200">+1 (555) 123-4567</p>
                    <p className="mt-1 text-sm text-nebula-blue-200/80">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-stellar-accent/20 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-stellar-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Office</h3>
                    <p className="mt-1 text-nebula-blue-200">123 Tech Street</p>
                    <p className="mt-1 text-nebula-blue-200">San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-galaxy-indigo/50 rounded-2xl shadow-xl p-8 sm:p-10 border border-galaxy-indigo/30">
              <h2 className="text-2xl font-bold text-stellar-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b border-galaxy-indigo/30 pb-4">
                  <h3 className="text-lg font-medium text-stellar-accent">What&apos;s your typical response time?</h3>
                  <p className="mt-1 text-nebula-blue-200">
                    We aim to respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
                <div className="border-b border-galaxy-indigo/30 pb-4">
                  <h3 className="text-lg font-medium text-stellar-accent">Do you offer free consultations?</h3>
                  <p className="mt-1 text-nebula-blue-200">
                    Yes, we provide a free 30-minute consultation to discuss your project requirements.
                  </p>
                </div>
                <div className="border-b border-galaxy-indigo/30 pb-4">
                  <h3 className="text-lg font-medium text-stellar-accent">What industries do you specialize in?</h3>
                  <p className="mt-1 text-nebula-blue-200">
                    We have expertise across multiple industries including FinTech, Healthcare, E-commerce, and SaaS.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}