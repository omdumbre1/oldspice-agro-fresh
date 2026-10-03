'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  Layers,
  SlidersHorizontal,
  Info
} from 'lucide-react';
import { PRODUCTS_DATA, ProductItem } from '@/data/content';

interface ProductsSectionProps {
  onSelectProduct?: (productName: string) => void;
}

export default function ProductsSection({ onSelectProduct }: ProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'vegetables' | 'fruit' | 'exotic' | 'leafy'>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Produce', count: PRODUCTS_DATA.length },
    { id: 'vegetables', label: 'Farm Fresh Vegetable', count: PRODUCTS_DATA.filter(p => p.category === 'vegetables').length },
    { id: 'fruit', label: 'Farm Fresh Fruit', count: PRODUCTS_DATA.filter(p => p.category === 'fruit').length },
    { id: 'exotic', label: 'Exotic Varieties', count: PRODUCTS_DATA.filter(p => p.category === 'exotic').length },
    { id: 'leafy', label: 'Leafy Greens', count: PRODUCTS_DATA.filter(p => p.category === 'leafy').length },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.category === selectedCategory);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  const handleEnquire = (product: ProductItem) => {
    if (onSelectProduct) {
      onSelectProduct(product.name);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 sm:py-28 bg-nature-paper border-b border-nature-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint text-brand-forest text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-green" />
              <span>Certified Organic Harvest Catalogue</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-nature-darkBg tracking-tight">
              Our Fresh Farm Produce
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl font-light">
              Grown through an end-to-end eco-friendly process in Otur, Junnar, Maharashtra. Naturally ripened, residue-free, and graded to the highest quality standards.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-nature-border bg-white hover:bg-stone-50 text-stone-700 flex items-center justify-center shadow-sm hover:shadow transition-all"
              aria-label="Previous produce slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-nature-border bg-brand-forest hover:bg-brand-deep text-white flex items-center justify-center shadow-sm hover:shadow transition-all"
              aria-label="Next produce slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  active
                    ? 'bg-brand-forest text-white shadow-sm'
                    : 'bg-white border border-nature-border text-stone-600 hover:bg-stone-50 hover:text-nature-darkBg'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                  active ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Product Slider / Horizontal Scroll Showcase */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start bg-white rounded-3xl border border-nature-border hover:border-brand-green/60 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative h-56 w-full bg-stone-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 300px, 340px"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm border border-stone-200 px-3 py-1 rounded-full text-[11px] font-bold text-brand-forest uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                  <span>Certified Organic</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-nature-darkBg/80 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] text-stone-200">
                  {product.season}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display font-bold text-lg text-nature-darkBg group-hover:text-brand-forest transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs italic text-stone-500 font-serif">
                        {product.scientificName}
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="p-1.5 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors"
                      title="View specifications"
                      aria-label="View specifications"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-stone-600 mt-2.5 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Highlights Specs */}
                  <div className="mt-4 pt-3 border-t border-stone-100 grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="text-stone-500 block">Grade</span>
                      <strong className="text-stone-800 font-medium truncate block">{product.grade}</strong>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Packaging</span>
                      <strong className="text-stone-800 font-medium truncate block">{product.packaging}</strong>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center gap-2">
                  <button
                    onClick={() => handleEnquire(product)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-brand-forest hover:bg-brand-deep text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="py-2.5 px-3 rounded-xl border border-nature-border hover:bg-stone-50 text-stone-700 text-xs font-medium transition-colors"
                  >
                    Specs
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Produce Trust Banner */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-nature-border shadow-subtle flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-mint flex items-center justify-center text-brand-forest flex-shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-nature-darkBg">
                Custom Wholesale &amp; Retail Packaging Units Available
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                We supply in bulk crates, telescopic cartons, or consumer pre-packs labeled for retail shelf displays.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/products"
              className="px-6 py-3 rounded-full bg-brand-forest hover:bg-brand-deep text-white font-semibold text-xs tracking-wider transition-colors whitespace-nowrap shadow-sm"
            >
              Browse Merged Master Catalogue &rarr;
            </Link>
            <Link
              href="/contact-us"
              className="px-6 py-3 rounded-full bg-brand-green text-nature-darkBg hover:bg-brand-emerald hover:text-white font-semibold text-xs uppercase tracking-wider transition-colors whitespace-nowrap shadow-sm"
            >
              Direct Procurement
            </Link>
          </div>
        </div>
      </div>

      {/* Produce Specification Modal */}
      <AnimatePresence>
        {activeModalProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-nature-border"
            >
              <div className="relative h-60 w-full bg-stone-100">
                <Image
                  src={activeModalProduct.image}
                  alt={activeModalProduct.name}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setActiveModalProduct(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center text-sm"
                >
                  ✕
                </button>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-brand-forest uppercase tracking-wider">
                    {activeModalProduct.category.toUpperCase()} • CERTIFIED ORGANIC
                  </span>
                  <h3 className="font-display font-bold text-2xl text-nature-darkBg">
                    {activeModalProduct.name}
                  </h3>
                  <p className="text-xs italic text-stone-500 font-serif">
                    {activeModalProduct.scientificName}
                  </p>
                </div>

                <p className="text-sm text-stone-600 mb-6 leading-relaxed">
                  {activeModalProduct.description}
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs bg-stone-50 rounded-2xl p-4 border border-stone-200/80 mb-6">
                  <div>
                    <span className="text-stone-500 block">Grade</span>
                    <strong className="text-stone-800">{activeModalProduct.grade}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Packaging</span>
                    <strong className="text-stone-800">{activeModalProduct.packaging}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Storage Temp</span>
                    <strong className="text-stone-800">{activeModalProduct.temp}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Shelf Life</span>
                    <strong className="text-stone-800">{activeModalProduct.shelfLife}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Harvest Season</span>
                    <strong className="text-stone-800">{activeModalProduct.season}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block">HS Code</span>
                    <strong className="text-stone-800">{activeModalProduct.hsCode}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      const prod = activeModalProduct;
                      setActiveModalProduct(null);
                      handleEnquire(prod);
                    }}
                    className="flex-1 py-3 px-4 rounded-xl bg-brand-forest hover:bg-brand-deep text-white font-semibold text-xs tracking-wide transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Request Quotation for {activeModalProduct.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
