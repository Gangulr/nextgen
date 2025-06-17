'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Custom Software Development',
    description: 'We create tailored software solutions that perfectly align with your business needs. Our custom software development services include:',
    features: [
      'Enterprise Software Development',
      'Business Process Automation',
      'Legacy System Modernization',
      'Custom CRM & ERP Solutions',
      'Workflow Management Systems',
    ],
  },
  {
    title: 'Web Application Development',
    description: 'We build modern, scalable, and secure web applications using cutting-edge technologies. Our web development services include:',
    features: [
      'Progressive Web Apps (PWA)',
      'Single Page Applications (SPA)',
      'E-commerce Solutions',
      'Content Management Systems',
      'Real-time Web Applications',
    ],
  },
  {
    title: 'Mobile App Development',
    description: 'We develop native and cross-platform mobile applications that deliver exceptional user experiences. Our mobile development services include:',
    features: [
      'iOS & Android Development',
      'Cross-platform Development',
      'Mobile App UI/UX Design',
      'App Store Optimization',
      'Mobile App Maintenance',
    ],
  },
  {
    title: 'Cloud Solutions',
    description: 'We help businesses leverage the power of cloud computing for better scalability and efficiency. Our cloud services include:',
    features: [
      'Cloud Migration',
      'Cloud Infrastructure Setup',
      'Serverless Architecture',
      'Cloud Security',
      'DevOps & CI/CD',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
            Our Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-blue-200">
            Comprehensive software solutions to help your business thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-2xl border border-blue-800 hover:border-purple-500 transition-all duration-300"
            >
              <div className="px-8 py-10">
                <h2 className="text-2xl font-semibold text-purple-300 mb-3">{service.title}</h2>
                <p className="text-blue-100 mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="flex-shrink-0 mt-1 mr-3">
                        <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-700 via-blue-700 to-black hover:from-purple-600 hover:to-blue-800 text-white text-lg font-semibold shadow-xl transition-colors duration-300"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </div>
  );
}
