'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, ShieldCheck, ArrowRight, Sprout } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  badge: string;
  title: string;
  highlight: string;
  tagline: string;
  description: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    image: '/assets/farm/farm-field.jpg',
    badge: 'Certified Organic Collective',
    title: 'Fresh Organic',
    highlight: 'Fruit & Vegetable',
    tagline: "It's all about nature",
    description: 'We grow organic vegetables and fruits through an end-to-end eco-friendly process, combining age-old wisdom with modern agronomy for your health.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1920&q=85',
    badge: 'Farm Fresh Harvest',
    title: 'Farm Fresh',
    highlight: 'Vegetable Harvest',
    tagline: 'Grown with care in Otur, Maharashtra',
    description: 'Fresh red onions, crisp carrots, vine-ripened tomatoes, and hearty gourds harvested daily and delivered with natural nutrients intact.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=1920&q=85',
    badge: 'Pure & Chemical-Free',
    title: 'Orchard Fresh',
    highlight: 'Sun-Ripened Fruits',
    tagline: 'Sweet, Juicy & Naturally Grown',
    description: 'Premium GI Alphonso mangoes, Bhagwa pomegranates, and fresh bananas cultivated through natural pest control and balanced soil science.',
  },
  {
    id: 4,
    image: '/assets/farm/packhouse.jpg',
    badge: 'Hygienic Post-Harvest Facility',
    title: 'Cleaned, Graded &',
    highlight: 'Safely Packed',
    tagline: 'Modern pre-cooling & hygienic handling',
    description: 'Trained workers, pre-cooling heat removal, residue-free surface cleaning, and convenient packaging for premium retailers and families.',
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const slide = SLIDES[current];

  return (
    <div className="relative w-full h-[85vh] sm:h-[90vh] lg:h-[92vh] overflow-hidden bg-nature-darkBg select-none">
      {/* Background Slides with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Multi-layered Gradients for editorial readability and organic warmth */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-stone-950/40" />
        </motion.div>
      </AnimatePresence>

      {/* Floating Ambient Brand Elements */}
      <div className="absolute top-8 right-8 hidden lg:flex items-center gap-3 z-20">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-medium text-white flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-green" />
          <span>NPOP Certified Organic Collective</span>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-medium text-white flex items-center gap-2">
          <Sprout className="w-4 h-4 text-brand-saffron" />
          <span>Otur, Junnar, Maharashtra</span>
        </div>
      </div>

      {/* Slide Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Badge */}
          <motion.div
            key={`badge-${slide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-forest/90 border border-brand-green/40 backdrop-blur-md text-brand-mint text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            <span>{slide.badge}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            key={`title-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] mb-3"
          >
            <span>{slide.title} </span>
            <span className="text-brand-green italic font-normal block sm:inline">
              {slide.highlight}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            key={`tagline-${slide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl font-medium text-brand-saffron tracking-wide mb-3 flex items-center gap-2"
          >
            <span className="inline-block w-8 h-px bg-brand-saffron" />
            <span>&ldquo;{slide.tagline}&rdquo;</span>
          </motion.p>

          {/* Description */}
          <motion.p
            key={`desc-${slide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm sm:text-base text-stone-200/90 leading-relaxed font-light max-w-xl mb-8"
          >
            {slide.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact-us"
              className="px-7 py-3.5 rounded-full font-semibold text-sm bg-brand-green text-nature-darkBg hover:bg-brand-emerald hover:text-white transition-all duration-300 shadow-glow flex items-center gap-2 group"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/products"
              className="px-7 py-3.5 rounded-full font-semibold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md transition-all duration-300"
            >
              Explore Merged Catalogue
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Controls: Arrows, Progress, and Play/Pause */}
      <div className="absolute bottom-6 right-4 sm:right-8 z-30 flex items-center gap-3">
        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 backdrop-blur-md text-white flex items-center justify-center transition-colors"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 backdrop-blur-md text-white flex items-center justify-center transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Indicators with Progress Bar */}
        <div className="flex items-center gap-2 bg-black/40 border border-white/20 backdrop-blur-md px-3 py-2 rounded-full">
          {SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrent(idx)}
              className="relative w-8 h-2 rounded-full overflow-hidden bg-white/30 transition-all focus:outline-none"
              aria-label={`Go to slide ${idx + 1}`}
            >
              {idx === current && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: isPlaying ? 5.5 : 0, ease: 'linear' }}
                  className="absolute inset-0 bg-brand-green rounded-full"
                />
              )}
            </button>
          ))}
          <span className="text-xs text-white/80 font-mono ml-1">
            0{current + 1} / 0{SLIDES.length}
          </span>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 backdrop-blur-md text-white flex items-center justify-center transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
