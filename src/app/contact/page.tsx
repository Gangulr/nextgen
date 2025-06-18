'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function ContactPage() {
  const form = useRef<HTMLFormElement | null>(null);
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
      if (form.current) {
        await emailjs.sendForm(
          'service_cwzrxbd', // 👈 Replace this
          'template_kegpw13', // 👈 Replace this
          form.current,
          'FoJFu_9EBXzK_7q7F' // 👈 Your public key
        );

        setFormData({ name: '', email: '', company: '', message: '' });

        document.getElementById('success-message')?.classList.remove('hidden');
        setTimeout(() => {
          document.getElementById('success-message')?.classList.add('hidden');
        }, 3000);
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gradient-to-br from-black via-indigo-900 to-purple-900 min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Success Message */}
        <motion.div
          id="success-message"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="hidden fixed top-4 right-4 z-50 bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg border border-purple-400"
        >
          <div className="flex items-center space-x-2">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Thank you! Your message has been sent.</span>
          </div>
        </motion.div>

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
          >
            Let&apos;s <span className="text-purple-400">Connect</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-lg text-purple-200"
          >
            Have a project in mind or want to discuss a collaboration?
            We&apos;d love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-black/30 rounded-2xl shadow-xl border border-purple-700 p-8 backdrop-blur-lg"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {(['name', 'email', 'company', 'message'] as Array<keyof typeof formData>).map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-purple-200 mb-1">
                    {field === 'name'
                      ? 'Your Name'
                      : field === 'email'
                      ? 'Email Address'
                      : field === 'company'
                      ? 'Company (Optional)'
                      : 'Your Message'}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      name={field}
                      id={field}
                      rows={5}
                      required={(field as string) !== 'company'}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-black/40 border border-purple-600 text-white focus:ring-2 focus:ring-purple-400 transition placeholder-purple-300/60"
                      placeholder="Tell us about your project..."
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      id={field}
                      required={field !== 'company'}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-black/40 border border-purple-600 text-white focus:ring-2 focus:ring-purple-400 transition placeholder-purple-300/60"
                      placeholder={
                        field === 'name'
                          ? 'John Doe'
                          : field === 'email'
                          ? 'john@example.com'
                          : 'Acme Inc.'
                      }
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center py-3 px-6 rounded-lg text-lg font-semibold text-black bg-purple-400 hover:bg-purple-300 transition ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & FAQs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-10 text-purple-100"
          >
            <div className="bg-black/30 rounded-2xl shadow-xl p-8 border border-purple-700 backdrop-blur-md">
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
              <p className="mb-8 text-purple-300">Reach out to us using the info below.</p>
              <div className="space-y-6">
                <InfoBlock
                  title="Email"
                  content="contact@nextgen-solutions.com"
                  icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
                />
                <InfoBlock
                  title="Phone"
                  content="0759627589"
                  sub="Mon-Fri, 9am-5pm EST"
                  icon="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
                <InfoBlock
                  title="Office"
                  content="Srilanka, Galle"
                  icon="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
              </div>
            </div>

            <div className="bg-black/30 rounded-2xl shadow-xl p-8 border border-purple-700 backdrop-blur-md">
              <h2 className="text-2xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
              <FAQItem question="What’s your typical response time?" answer="Within 24 hours during business days." />
              <FAQItem question="Do you offer free consultations?" answer="Yes, we offer a 30-minute free consultation." />
              <FAQItem question="What industries do you specialize in?" answer="FinTech, Healthcare, E-commerce, and SaaS." />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function InfoBlock({ title, content, sub, icon }: { title: string; content: string; sub?: string; icon: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-purple-700/20 p-3 rounded-lg">
        <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-purple-200">{content}</p>
        {sub && <p className="text-purple-300 text-sm">{sub}</p>}
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-purple-600/40 pb-4 mb-4">
      <h3 className="text-lg font-semibold text-purple-300">{question}</h3>
      <p className="mt-1 text-purple-200">{answer}</p>
    </div>
  );
}
