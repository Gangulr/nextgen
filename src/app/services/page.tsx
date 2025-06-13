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
      'Workflow Management Systems'
    ]
  },
  {
    title: 'Web Application Development',
    description: 'We build modern, scalable, and secure web applications using cutting-edge technologies. Our web development services include:',
    features: [
      'Progressive Web Apps (PWA)',
      'Single Page Applications (SPA)',
      'E-commerce Solutions',
      'Content Management Systems',
      'Real-time Web Applications'
    ]
  },
  {
    title: 'Mobile App Development',
    description: 'We develop native and cross-platform mobile applications that deliver exceptional user experiences. Our mobile development services include:',
    features: [
      'iOS & Android Development',
      'Cross-platform Development',
      'Mobile App UI/UX Design',
      'App Store Optimization',
      'Mobile App Maintenance'
    ]
  },
  {
    title: 'Cloud Solutions',
    description: 'We help businesses leverage the power of cloud computing for better scalability and efficiency. Our cloud services include:',
    features: [
      'Cloud Migration',
      'Cloud Infrastructure Setup',
      'Serverless Architecture',
      'Cloud Security',
      'DevOps & CI/CD'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 max-w-xl mx-auto text-xl text-gray-500"
          >
            Comprehensive software solutions to help your business thrive in the digital age
          </motion.p>
        </div>

        <div className="mt-12 space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="px-6 py-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg className="h-6 w-6 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </div>
  );
} 