'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, AnimatePresence, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: 'Custom Software Development',
    description: 'Tailored solutions designed to meet your specific business needs and challenges.',
    icon: (
      <svg className="h-8 w-8 text-cosmic-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    bgColor: 'bg-nebula-blue/20',
    textColor: 'text-stellar-white'
  },
  {
    title: 'Web Application Development',
    description: 'Modern, responsive, and scalable web applications built with cutting-edge technologies.',
    icon: (
      <svg className="h-8 w-8 text-cosmic-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    bgColor: 'bg-deep-space/20',
    textColor: 'text-stellar-white'
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    icon: (
      <svg className="h-8 w-8 text-cosmic-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    bgColor: 'bg-galaxy-indigo/20',
    textColor: 'text-stellar-white'
  },
  {
    title: 'Cloud Solutions',
    description: 'Secure, scalable, and cost-effective cloud infrastructure and migration services.',
    icon: (
      <svg className="h-8 w-8 text-cosmic-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    bgColor: 'bg-cosmic-purple/20',
    textColor: 'text-stellar-white'
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Their team delivered our project ahead of schedule with exceptional quality. Truly impressed with their professionalism.',
    avatar: '/avatar1.jpg',
    bgColor: 'bg-deep-space'
  },
  {
    name: 'Michael Chen',
    role: 'CTO, Digital Solutions',
    content: 'The custom software they built transformed our operations. Highly recommend their services to any business.',
    avatar: '/avatar2.jpg',
    bgColor: 'bg-galaxy-indigo'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Product Manager, InnovateCo',
    content: 'From concept to deployment, their team was with us every step of the way. Outstanding results!',
    avatar: '/avatar3.jpg',
    bgColor: 'bg-cosmic-purple'
  },
];

const techStack = [
  { name: 'React', icon: '⚛️', color: 'bg-nebula-blue text-stellar-white' },
  { name: 'Next.js', icon: '⏭️', color: 'bg-deep-space text-stellar-white' },
  { name: 'Node.js', icon: '🟢', color: 'bg-galaxy-indigo text-stellar-white' },
  { name: 'TypeScript', icon: '📘', color: 'bg-cosmic-purple text-stellar-white' },
  { name: 'Tailwind CSS', icon: '🎨', color: 'bg-nebula-blue text-stellar-white' },
  { name: 'AWS', icon: '☁️', color: 'bg-deep-space text-stellar-white' },
  { name: 'Docker', icon: '🐳', color: 'bg-galaxy-indigo text-stellar-white' },
  { name: 'GraphQL', icon: '📊', color: 'bg-cosmic-purple text-stellar-white' },
];

export default function HomePage() {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev + 1) % 100);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialTimer);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const fadeInUp: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <div className="bg-deep-space text-stellar-white">
      {/* Floating Counter with Particle Animation */}
      <div className="fixed bottom-4 right-4 z-50">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-deep-space rounded-full shadow-lg p-4 flex items-center space-x-4 relative overflow-hidden border border-galaxy-indigo"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence>
            {isHovered && (
              <>
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      x: Math.cos((i * 45 * Math.PI) / 180) * 40,
                      y: Math.sin((i * 45 * Math.PI) / 180) * 40
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                    className="absolute w-2 h-2 bg-stellar-accent rounded-full"
                  />
                ))}
              </>
            )}
          </AnimatePresence>
          
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 1, repeat: isHovered ? Infinity : 0, ease: "linear" }}
          >
            <svg
              className="w-8 h-8 text-stellar-accent"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
          <div className="text-2xl font-bold text-stellar-accent">
            {count.toString().padStart(2, '0')}
          </div>
        </motion.div>
      </div>

      {/* Hero Section with Animated Background */}
      <div className="relative bg-gradient-to-br from-deep-space to-cosmic-purple overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-deep-space/20 to-galaxy-indigo/80"></div>
          <motion.div 
            className="absolute inset-0 opacity-20"
            initial={{ backgroundPosition: '0% 0%' }}
            animate={{ backgroundPosition: '100% 100%' }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.8) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.6) 0%, transparent 20%)',
              backgroundSize: '50% 50%'
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl tracking-tight font-extrabold text-stellar-white sm:text-5xl md:text-6xl"
                >
                  <span className="block">Transforming Ideas into</span>
                  <motion.span 
                    className="block text-stellar-accent"
                    animate={{
                      textShadow: ["0 0 8px rgba(167, 139, 250, 0.5)", "0 0 16px rgba(167, 139, 250, 0.8)", "0 0 8px rgba(167, 139, 250, 0.5)"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    Digital Reality
                  </motion.span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-3 text-base text-nebula-blue-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                >
                  We are a team of passionate developers and designers dedicated to creating
                  innovative software solutions that drive business growth and technological advancement.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-x-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-md shadow"
                  >
                    <Link href="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-deep-space bg-stellar-accent hover:bg-stellar-accent/90 md:py-4 md:text-lg md:px-10">
                      Get Started
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-3 sm:mt-0"
                  >
                    <Link href="/services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-stellar-accent bg-deep-space hover:bg-galaxy-indigo border-stellar-accent md:py-4 md:text-lg md:px-10">
                      Our Services
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </main>
          </div>
        </div>
        
        {/* Animated floating elements */}
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-full w-full relative">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-stellar-accent/20"
                initial={{
                  opacity: 0,
                  y: Math.random() * 100 - 50,
                  x: Math.random() * 200 + 100,
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50
                }}
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  y: [0, Math.random() * 100 - 50, 0],
                  transition: {
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section with Staggered Animation */}
      <div className="py-16 bg-gradient-to-b from-deep-space to-galaxy-indigo/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="lg:text-center">
              <h2 className="text-base text-stellar-accent font-semibold tracking-wide uppercase">Services</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-stellar-white sm:text-4xl">
                Everything you need to build amazing software
              </p>
              <p className="mt-4 max-w-2xl text-xl text-nebula-blue-200 lg:mx-auto">
                We offer a comprehensive range of software development services to help your business thrive in the digital age.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-16">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) => (
                  <motion.div
                    key={feature.title}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className={`relative p-6 rounded-xl border border-galaxy-indigo/30 hover:border-stellar-accent/50 transition-all duration-300 ${feature.bgColor}`}
                  >
                    <div className={`absolute -top-6 left-6 flex items-center justify-center h-12 w-12 rounded-xl ${feature.bgColor} border border-galaxy-indigo/30 text-cosmic-purple shadow-lg`}>
                      {feature.icon}
                    </div>
                    <div className="mt-6">
                      <h3 className={`text-lg font-bold ${feature.textColor}`}>{feature.title}</h3>
                      <p className="mt-2 text-nebula-blue-200">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-16 bg-galaxy-indigo/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-base text-stellar-accent font-semibold tracking-wide uppercase">Technologies</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-stellar-white sm:text-4xl">
              Our Technology Stack
            </p>
            <p className="mt-4 max-w-2xl text-xl text-nebula-blue-200 mx-auto">
              We work with modern technologies to deliver high-performance solutions
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="col-span-1 flex flex-col items-center"
              >
                <div className={`flex items-center justify-center w-16 h-16 rounded-xl ${tech.color} border border-galaxy-indigo/30 shadow-sm`}>
                  <span className="text-2xl">{tech.icon}</span>
                </div>
                <h3 className="mt-3 text-sm font-medium text-stellar-white">{tech.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-16 bg-gradient-to-br from-deep-space to-cosmic-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-base text-nebula-blue-200 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-stellar-white sm:text-4xl">
              What our clients say
            </p>
          </motion.div>

          <div className="mt-10 max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={`p-8 rounded-xl shadow-lg border border-galaxy-indigo/30 ${testimonials[activeTestimonial].bgColor}`}
              >
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image 
                      src={testimonials[activeTestimonial].avatar}
                      alt={testimonials[activeTestimonial].name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-stellar-white">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-stellar-accent">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
                <p className="mt-4 text-nebula-blue-200 italic">&quot;{testimonials[activeTestimonial].content}&quot;</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-stellar-accent' : 'bg-stellar-accent/50'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-deep-space">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-base text-stellar-accent font-semibold tracking-wide uppercase">Our Impact</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-stellar-white sm:text-4xl">
              Delivering results that matter
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-nebula-blue/20 to-nebula-blue/30 p-6 rounded-xl border border-galaxy-indigo/30 text-center"
            >
              <div className="text-5xl font-bold text-stellar-accent">50+</div>
              <div className="mt-2 text-lg font-medium text-stellar-white">Projects Completed</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-cosmic-purple/20 to-cosmic-purple/30 p-6 rounded-xl border border-galaxy-indigo/30 text-center"
            >
              <div className="text-5xl font-bold text-stellar-accent">100%</div>
              <div className="mt-2 text-lg font-medium text-stellar-white">Client Satisfaction</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-galaxy-indigo/20 to-galaxy-indigo/30 p-6 rounded-xl border border-galaxy-indigo/30 text-center"
            >
              <div className="text-5xl font-bold text-stellar-accent">15+</div>
              <div className="mt-2 text-lg font-medium text-stellar-white">Technologies</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-deep-space/20 to-deep-space/30 p-6 rounded-xl border border-galaxy-indigo/30 text-center"
            >
              <div className="text-5xl font-bold text-stellar-accent">24/7</div>
              <div className="mt-2 text-lg font-medium text-stellar-white">Support</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section with Parallax Effect */}
      <div className="relative bg-gradient-to-br from-deep-space to-cosmic-purple overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-deep-space/30 to-cosmic-purple/50"></div>
          <motion.div 
            className="absolute inset-0 opacity-20"
            initial={{ backgroundPosition: '0% 0%' }}
            animate={{ backgroundPosition: '100% 100%' }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(167, 139, 250, 0.4) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(167, 139, 250, 0.3) 0%, transparent 20%)',
              backgroundSize: '50% 50%'
            }}
          />
        </div>
        
        <motion.div 
          className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-stellar-white sm:text-4xl">
            <span className="block">Ready to start your project?</span>
            <span className="block text-stellar-accent">Let&apos;s build something amazing together.</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-nebula-blue-200 max-w-3xl mx-auto">
            Contact us today to discuss your project requirements and get a free consultation.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10"
          >
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-deep-space bg-stellar-accent hover:bg-stellar-accent/90 md:py-4 md:text-lg md:px-8">
              Contact Us
              <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Add these styles to your globals.css */}
      <style jsx global>{`
        :root {
          --deep-space: #0f0c29;
          --cosmic-purple: #302b63;
          --galaxy-indigo: #24243e;
          --nebula-blue: #1a1a2e;
          --stellar-white: #e2e8f0;
          --stellar-accent: #a78bfa;
          --nebula-blue-200: #c7d2fe;
        }
        .bg-deep-space {
          background-color: var(--deep-space);
        }
        .bg-cosmic-purple {
          background-color: var(--cosmic-purple);
        }
        .bg-galaxy-indigo {
          background-color: var(--galaxy-indigo);
        }
        .bg-nebula-blue {
          background-color: var(--nebula-blue);
        }
        .text-stellar-white {
          color: var(--stellar-white);
        }
        .text-stellar-accent {
          color: var(--stellar-accent);
        }
        .text-nebula-blue-200 {
          color: var(--nebula-blue-200);
        }
        .border-galaxy-indigo {
          border-color: var(--galaxy-indigo);
        }
      `}</style>
    </div>
  );
}