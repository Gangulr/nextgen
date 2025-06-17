'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
emailjs.init("FoJFu_9EBXzK_7q7F");
export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [email, setEmail] = useState('');
  const [name, setName] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      // ...existing code...
emailjs.send(
  "service_cwzrxbd",
  "template_l67secl",
  {
    title: formData.company,
    name: name,
    time: 22,
    message: formData.message,
    email: email,
  }
).then(
  (response) => {
    console.log("SUCCESS!", response.status, response.text);
    // Optionally show a success message to the user
  },
  (error) => {
    console.error("FAILED...", error);
    // Optionally show an error message to the user
  }
);
// ...existing code...
    } else {
      alert('Form not found.');
    }
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 max-w-xl mx-auto text-xl text-gray-500"
          >
            Get in touch with us to discuss your project or schedule a consultation.
          </motion.p>
        </div>

        {/* Contact Form */}
        <div className="mt-12 max-w-lg mx-auto">
          <motion.form
            ref={form}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg grid grid-cols-1 gap-6"
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
               <input
      type="text"
      name="user_name"
      placeholder="Your Name"
      value={name}
      onChange={e => setName(e.target.value)}
      className="w-full px-4 py-2 border rounded-md text-black"
      required
    />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 text-black"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 text-black"
                placeholder="Company (optional)"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 text-black"
                placeholder="How can we help you?"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 transition"
              >
                Send Message
              </button>
            </div>
          </motion.form>

          {/* Other Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Other Ways to Reach Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
                <a
                  href="mailto:contact@nextgen-solutions.com"
                  className="text-indigo-600 hover:underline"
                >
                  contact@nextgen-solutions.com
                </a>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Phone</h3>
                <a
                  href="tel:+15551234567"
                  className="text-indigo-600 hover:underline"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
