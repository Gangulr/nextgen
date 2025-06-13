"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Custom Software", href: "/services/custom-software" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile Apps", href: "/services/mobile-apps" },
      { name: "Cloud Solutions", href: "/services/cloud-solutions" },
      { name: "UI/UX Design", href: "/services/design" },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    submenu: [
      { name: "For Startups", href: "/solutions/startups" },
      { name: "For Enterprises", href: "/solutions/enterprises" },
      { name: "Case Studies", href: "/solutions/case-studies" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-sm shadow-md py-2"
          : "bg-gray-900/90 backdrop-blur-sm py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center"
              >
                <Image
                  src="/images/logo.png"
                  alt="NextGen CodeX Logo"
                  width={60}
                  height={60}
                  className="object-cover w-full h-full"
                  priority
                />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent"
              >
                NextGen CodeX
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden ml-10 space-x-6 lg:flex">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                <motion.div whileHover={{ scale: 1.05 }} className="py-2">
                  <Link
                    href={item.href}
                    className={`relative text-base font-medium transition-colors duration-200 px-3 py-2 rounded-lg ${
                      pathname === item.href ||
                      (item.submenu &&
                        pathname &&
                        item.submenu.some((sub) =>
                          pathname.startsWith(sub.href)
                        ))
                        ? "text-purple-400 bg-gray-800"
                        : "text-gray-300 hover:text-purple-400 hover:bg-gray-800/50"
                    }`}
                    onMouseEnter={() =>
                      item.submenu && setActiveSubmenu(item.name)
                    }
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    {item.name}
                    {(pathname === item.href ||
                      (item.submenu &&
                        pathname &&
                        item.submenu.some((sub) =>
                          pathname.startsWith(sub.href)
                        ))) && (
                      <motion.span
                        layoutId="activeNavItem"
                        className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-400"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>

                {/* Submenu */}
                {item.submenu && (
                  <AnimatePresence>
                    {activeSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-1 w-56 rounded-lg shadow-lg bg-gray-800 ring-1 ring-gray-700"
                        onMouseEnter={() => setActiveSubmenu(item.name)}
                        onMouseLeave={() => setActiveSubmenu(null)}
                      >
                        <div className="py-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm transition-colors duration-150 ${
                                pathname?.startsWith(subItem.href)
                                  ? "bg-gray-700 text-purple-400 font-medium"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-purple-400"
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-purple-400 bg-gray-800 hover:bg-gray-700 transition-all duration-200 shadow-sm"
              >
                Contact Us
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/get-started"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-700 hover:to-indigo-600 transition-all duration-200 shadow-md"
              >
                Get Started
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <motion.button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900 shadow-lg"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-gray-800 last:border-0"
                >
                  <Link
                    href={item.href}
                    className={`block px-3 py-3 rounded-md text-base font-medium ${
                      pathname === item.href
                        ? "text-purple-400 bg-gray-800"
                        : "text-gray-300 hover:text-purple-400 hover:bg-gray-800"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 pb-2 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-3 py-2 rounded-md text-sm ${
                            pathname?.startsWith(subItem.href)
                              ? "text-purple-400 font-medium bg-gray-800"
                              : "text-gray-400 hover:text-purple-400 hover:bg-gray-800"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <div className="grid grid-cols-2 gap-3 px-2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-lg text-purple-400 bg-gray-800 hover:bg-gray-700"
                    >
                      Contact
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/get-started"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-700 hover:to-indigo-600"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
