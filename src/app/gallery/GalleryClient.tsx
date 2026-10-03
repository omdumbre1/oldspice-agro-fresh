'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Camera,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: 'Farmland' | 'Packhouse' | 'Harvest' | 'Cold-Chain';
  image: string;
  description: string;
  location: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'Otur Organic Farmland in Maharashtra',
    category: 'Farmland',
    image: '/assets/farm/farm-field.jpg',
    description: '1,796+ acres of certified organic farmland in the Otur river valley, Junnar. Fertile volcanic alluvial soil enriched with green compost.',
    location: 'Otur, Taluka Junnar, Pune',
  },
  {
    id: 2,
    title: 'Modern Packhouse & Hygiene Line',
    category: 'Packhouse',
    image: '/assets/farm/packhouse.jpg',
    description: 'High-standard sanitization, sorting, and food-grade packaging facilities ensuring strict export conformity and worker personal hygiene.',
    location: 'Otur Central Packhouse',
  },
  {
    id: 3,
    title: 'Bhagwa Ruby Pomegranate Harvest',
    category: 'Harvest',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80',
    description: 'Deep crimson Bhagwa pomegranates picked at optimum Brix sugar index, carefully wrapped in foam net sleeves for sea reefer export.',
    location: 'Orchard Block B, Otur',
  },
  {
    id: 4,
    title: 'Cured Maharashtra Red Onions',
    category: 'Harvest',
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=1200&q=80',
    description: 'Famous Nashik-Pune belt red onions with dry protective skins and high pungency, cured for multi-week ocean voyage stability.',
    location: 'Curing Yards, Otur',
  },
  {
    id: 5,
    title: 'Alphonso Mango Orchards in Full Bloom',
    category: 'Farmland',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1200&q=80',
    description: 'Certified organic mango groves nurtured with biological crop care, yielding GI-standard Alphonso and Kesar table fruit.',
    location: 'Western Ghats Agro Belt',
  },
  {
    id: 6,
    title: 'Hydro-Washed Crisp Organic Carrots',
    category: 'Packhouse',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=1200&q=80',
    description: 'Nantes carrots washed under filtered, sanitized water jets to remove earth deposits while preserving beta-carotene vitality.',
    location: 'Washing & Hydro-Cooling Line',
  },
  {
    id: 7,
    title: 'Pre-Cooling & Cold Chain Staging',
    category: 'Cold-Chain',
    image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Rapid removal of field heat within 2 hours of harvest to arrest metabolic respiration and preserve fresh cell turgidity.',
    location: 'Cold Storage Terminal',
  },
  {
    id: 8,
    title: 'Greenhouse Trellis Bell Peppers & Cucumbers',
    category: 'Farmland',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=1200&q=80',
    description: 'High-tech climate-controlled polyhouses cultivating Dutch-grade yellow/red bell peppers and seedless English cucumbers year-round.',
    location: 'Polyhouse Zone, Otur',
  },
  {
    id: 9,
    title: 'Container Palletization for JNPT Port',
    category: 'Cold-Chain',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=1200&q=80',
    description: 'Uniform palletization with corner protectors and strapping, prepared for temperature-controlled reefer container transit.',
    location: 'Logistics Dispatch Dock',
  },
];

const CATEGORIES = ['All', 'Farmland', 'Packhouse', 'Harvest', 'Cold-Chain'];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  const currentItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <div className="min-h-screen bg-nature-paper">
      
      {/* Header Banner */}
      <section className="bg-nature-darkBg text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1ecd56_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-green/20 border border-brand-green/30 text-brand-green text-xs font-semibold uppercase tracking-wider mb-4">
              <Camera className="w-3.5 h-3.5" />
              <span>Visual Documentary</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6">
              Farm Operations &amp; Harvest Gallery
            </h1>
            <p className="text-lg sm:text-xl text-stone-300 font-light leading-relaxed">
              Explore our 1,796+ organic acres in Otur, Maharashtra, precision packhouse grading, hydro-cooling, and international cold chain dispatch.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-nature-border">
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-brand-forest text-white shadow-sm'
                        : 'bg-white text-stone-600 hover:text-nature-darkBg hover:bg-stone-100 border border-nature-border'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-stone-500">
              Showing <span className="font-bold text-nature-darkBg">{filteredItems.length}</span> photographs
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(index)}
                className="group relative rounded-3xl overflow-hidden bg-stone-100 border border-nature-border shadow-subtle hover:shadow-card cursor-pointer transition-all duration-300"
              >
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-brand-forest shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Text Content */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="flex items-center gap-1.5 text-[11px] text-brand-green mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Procurement Banner */}
          <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-nature-border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-subtle">
            <div>
              <span className="text-xs uppercase tracking-wider text-brand-forest font-bold">
                Audits &amp; Field Visits
              </span>
              <h3 className="font-display font-bold text-2xl text-nature-darkBg mt-1">
                Would you like to inspect our Otur packhouse in person?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-xl">
                We welcome international importers, retail procurement heads, and quality inspectors to visit our Otur facility by prior appointment.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="px-6 py-3 rounded-full text-xs font-bold text-white bg-brand-forest hover:bg-brand-deep transition-all shadow-sm flex items-center gap-2 flex-shrink-0"
            >
              <span>Schedule Farm Visit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Center Content Box */}
            <div
              className="relative max-w-4xl w-full bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[400px] sm:h-[500px] w-full bg-black">
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-stone-900 text-white border-t border-white/10">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-green/20 text-brand-green text-xs font-semibold">
                    {currentItem.category}
                  </span>
                  <span className="text-xs text-stone-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-green" />
                    {currentItem.location}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl">
                  {currentItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
                  {currentItem.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
