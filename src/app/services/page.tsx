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
    <div className="bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-white sm:text-5xl tracking-tight"
          >
            Explore Our <span className="text-[#8A2BE2]"> Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 max-w-2xl mx-auto text-lg text-gray-300"
          >
            Empowering your digital universe with tailored, scalable, and innovative software solutions.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-xl bg-[#1a1a2e] border border-[#8A2BE2]/40 p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-white mb-3">
                <span className="text-[#8A2BE2]"></span> {service.title}
              </h2>
              <p className="text-gray-300 mb-5">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="h-5 w-5 text-[#8A2BE2] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-md text-white bg-gradient-to-r from-[#8A2BE2] to-[#4B0082] hover:from-[#7b1fa2] hover:to-[#3f0071] transition duration-300 shadow-xl"
          >
            Launch Your Project
            <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.293 5.293a1 1 0 011.414 0L16 9.586a1 1 0 010 1.414l-4.293 4.293a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
