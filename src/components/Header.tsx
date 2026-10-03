'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ArrowUpRight, Phone, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-nature-paper/95 backdrop-blur-md shadow-subtle border-b border-nature-border/60 py-3'
          : 'bg-nature-paper/85 backdrop-blur-sm border-b border-nature-border/30 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 overflow-hidden rounded-md transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/logo/logo.png"
                alt="Old Spice Agro Fresh LLP Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-nature-darkBg leading-none">
                Old Spice Agro Fresh
              </span>
              <span className="text-xs uppercase tracking-wider text-brand-forest font-semibold mt-0.5">
                It&apos;s all about nature • LLP
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-brand-forest font-semibold'
                  : 'text-nature-darkBg hover:text-brand-forest'
              }`}
            >
              Home
            </Link>

            {/* Products Dropdown - Leading to Merged Master Catalogue */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                href="/products"
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors py-2 focus:outline-none ${
                  isActive('/products')
                    ? 'text-brand-forest font-semibold'
                    : 'text-nature-darkBg hover:text-brand-forest'
                }`}
                aria-expanded={dropdownOpen}
              >
                <span>Our Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180 text-brand-forest' : ''
                  }`}
                />
              </Link>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-elevated border border-nature-border/80 p-2 z-50"
                  >
                    <div className="px-3 py-2 border-b border-nature-border/50 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-forest flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Merged Master Catalogue</span>
                      </span>
                    </div>

                    <Link
                      href="/products"
                      className="block px-3.5 py-2 rounded-xl hover:bg-brand-mint/60 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-nature-darkBg group-hover:text-brand-forest flex items-center justify-between">
                        <span>All Harvest Produce</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-forest" />
                      </div>
                      <p className="text-[11px] text-stone-500 mt-0.5">
                        Explore all 20+ organic varieties
                      </p>
                    </Link>

                    <Link
                      href="/products?category=vegetables"
                      className="block px-3.5 py-2 rounded-xl hover:bg-brand-mint/60 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-nature-darkBg group-hover:text-brand-forest flex items-center justify-between">
                        <span>Farm Fresh Vegetable</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-forest" />
                      </div>
                      <p className="text-[11px] text-stone-500 mt-0.5">
                        Red onions, potatoes, carrots, tomatoes
                      </p>
                    </Link>

                    <Link
                      href="/products?category=fruit"
                      className="block px-3.5 py-2 rounded-xl hover:bg-brand-mint/60 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-nature-darkBg group-hover:text-brand-forest flex items-center justify-between">
                        <span>Farm Fresh Fruit</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-forest" />
                      </div>
                      <p className="text-[11px] text-stone-500 mt-0.5">
                        Alphonso mangoes, pomegranates, bananas
                      </p>
                    </Link>

                    <Link
                      href="/products?category=exotic"
                      className="block px-3.5 py-2 rounded-xl hover:bg-brand-mint/60 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-nature-darkBg group-hover:text-brand-forest flex items-center justify-between">
                        <span>Exotic Produce</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-forest" />
                      </div>
                      <p className="text-[11px] text-stone-500 mt-0.5">
                        Polyhouse bell peppers, cucumbers
                      </p>
                    </Link>

                    <Link
                      href="/products?category=leafy"
                      className="block px-3.5 py-2 rounded-xl hover:bg-brand-mint/60 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-nature-darkBg group-hover:text-brand-forest flex items-center justify-between">
                        <span>Leafy Greens</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-forest" />
                      </div>
                      <p className="text-[11px] text-stone-500 mt-0.5">
                        Aromatic coriander, herbs
                      </p>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Gallery Page Link */}
            <Link
              href="/gallery"
              className={`text-sm font-medium transition-colors ${
                isActive('/gallery')
                  ? 'text-brand-forest font-semibold'
                  : 'text-nature-darkBg hover:text-brand-forest'
              }`}
            >
              Gallery
            </Link>

            {/* About Us Page Link (with Director Info) */}
            <Link
              href="/about-us"
              className={`text-sm font-medium transition-colors ${
                isActive('/about-us')
                  ? 'text-brand-forest font-semibold'
                  : 'text-nature-darkBg hover:text-brand-forest'
              }`}
            >
              About Us
            </Link>

            {/* Contact Us Page Link (with Otur Google Map) */}
            <Link
              href="/contact-us"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact-us')
                  ? 'text-brand-forest font-semibold'
                  : 'text-nature-darkBg hover:text-brand-forest'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Right CTA: Request a Quote */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact-us"
              className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-full font-medium text-sm text-white bg-brand-forest hover:bg-brand-deep transition-all duration-300 shadow-sm hover:shadow-glow group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Request a Quote</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-brand-forest via-brand-emerald to-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-nature-darkBg hover:bg-nature-muted focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-nature-border bg-nature-paper px-4 pt-4 pb-6 space-y-2"
          >
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-left py-2.5 text-base font-medium text-nature-darkBg hover:text-brand-forest"
            >
              Home
            </Link>

            <Link
              href="/products"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-left py-2.5 text-base font-medium text-nature-darkBg hover:text-brand-forest"
            >
              Our Products (All Merged)
            </Link>

            <Link
              href="/gallery"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-left py-2.5 text-base font-medium text-nature-darkBg hover:text-brand-forest"
            >
              Gallery
            </Link>

            <Link
              href="/about-us"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-left py-2.5 text-base font-medium text-nature-darkBg hover:text-brand-forest"
            >
              About Us (Board of Directors)
            </Link>

            <Link
              href="/contact-us"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-left py-2.5 text-base font-medium text-nature-darkBg hover:text-brand-forest"
            >
              Contact Us (Otur Map)
            </Link>

            <div className="pt-3">
              <Link
                href="/contact-us"
                onClick={() => setMobileOpen(false)}
                className="block w-full py-3 rounded-full font-medium text-white bg-brand-forest hover:bg-brand-deep shadow-sm text-center"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
