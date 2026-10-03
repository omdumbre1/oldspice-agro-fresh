'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  ArrowRight,
  ShieldCheck,
  Thermometer,
  Calendar,
  Package,
  Clock,
  Sparkles,
  MessageCircle,
  X,
  FileSpreadsheet,
} from 'lucide-react';
import { PRODUCTS_DATA, ProductItem } from '@/data/content';

const CATEGORIES = [
  { id: 'all', label: 'All Produce', count: PRODUCTS_DATA.length },
  {
    id: 'vegetables',
    label: 'Farm Fresh Vegetables',
    count: PRODUCTS_DATA.filter((p) => p.category === 'vegetables').length,
  },
  {
    id: 'fruit',
    label: 'Farm Fresh Fruits',
    count: PRODUCTS_DATA.filter((p) => p.category === 'fruit').length,
  },
  {
    id: 'exotic',
    label: 'Exotic Produce',
    count: PRODUCTS_DATA.filter((p) => p.category === 'exotic').length,
  },
  {
    id: 'leafy',
    label: 'Leafy Greens',
    count: PRODUCTS_DATA.filter((p) => p.category === 'leafy').length,
  },
];

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Filter products based on category & search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.hsCode.includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-nature-paper">
      {/* Hero Header */}
      <section className="bg-nature-darkBg text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1ecd56_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-green/20 border border-brand-green/30 text-brand-green text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Merged Master Catalogue</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6">
              Certified Organic Produce &amp; Global Agro-Exports
            </h1>
            <p className="text-lg sm:text-xl text-stone-300 font-light leading-relaxed">
              All vegetables, fruits, exotic polyhouse varieties, and leafy greens cultivated across 1,796+ acres in Otur, Maharashtra. Graded, hydro-cooled, and packed to international phytosanitary standards.
            </p>

            {/* Quick Stats Bar */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-stone-400 block">Total Varieties</span>
                <strong className="text-white text-base font-bold">20+ Items</strong>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-stone-400 block">Organic Quality</span>
                <strong className="text-white text-base font-bold">NPOP &amp; GAP</strong>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-stone-400 block">Logistics Route</span>
                <strong className="text-white text-base font-bold">JNPT &amp; Air Cargo</strong>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-stone-400 block">Farming Collective</span>
                <strong className="text-white text-base font-bold">599+ Farmers</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: Controls + Product Cards */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar: Category Pills + Search */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-8 border-b border-nature-border">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-2 ${
                      isActive
                        ? 'bg-brand-forest text-white shadow-sm shadow-brand-forest/20'
                        : 'bg-white text-stone-600 hover:text-nature-darkBg hover:bg-stone-100 border border-nature-border'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-stone-200 text-stone-600'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <input
                type="text"
                placeholder="Search produce or HS code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs bg-white border border-nature-border focus:outline-none focus:ring-2 focus:ring-brand-forest/20 focus:border-brand-forest transition-all"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs text-stone-500 mb-8">
            <p>
              Showing <span className="font-bold text-nature-darkBg">{filteredProducts.length}</span> products
              {activeCategory !== 'all' && (
                <span> in <strong className="text-brand-forest capitalize">{activeCategory}</strong></span>
              )}
              {searchQuery && (
                <span> matching &ldquo;<strong>{searchQuery}</strong>&rdquo;</span>
              )}
            </p>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-1.5 text-brand-forest font-semibold hover:underline"
            >
              <span>Download Master Export Spec Sheet</span>
              <FileSpreadsheet className="w-4 h-4" />
            </Link>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-16 text-center border border-nature-border max-w-xl mx-auto my-12">
              <Package className="w-12 h-12 text-stone-300 mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl text-nature-darkBg mb-2">
                No matching produce found
              </h3>
              <p className="text-sm text-stone-500 mb-6">
                Try clearing your search query or selecting a different category tab.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="px-6 py-2 rounded-full bg-brand-forest text-white text-xs font-semibold hover:bg-brand-deep transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden border border-nature-border shadow-subtle hover:shadow-card hover:border-brand-green/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Container with Badges */}
                    <div className="relative h-64 w-full bg-stone-100 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] font-bold text-brand-forest shadow-sm">
                          HS: {item.hsCode}
                        </span>
                        <span className="bg-nature-darkBg/80 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-[10px] uppercase font-semibold">
                          {item.category}
                        </span>
                      </div>

                      {/* Bottom Info on Image */}
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[11px] text-brand-green font-medium italic block">
                          {item.scientificName}
                        </span>
                        <h3 className="font-display font-bold text-xl leading-snug drop-shadow-sm">
                          {item.name}
                        </h3>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-4">
                      <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Detailed Specs Grid */}
                      <div className="bg-stone-50 rounded-2xl p-4 border border-nature-border/70 space-y-2.5 text-[11px]">
                        <div className="flex items-center justify-between pb-2 border-b border-stone-200/60">
                          <span className="text-stone-500 flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-brand-forest" />
                            Grade:
                          </span>
                          <strong className="text-stone-800 font-semibold">{item.grade}</strong>
                        </div>

                        <div className="flex items-center justify-between pb-2 border-b border-stone-200/60">
                          <span className="text-stone-500 flex items-center gap-1.5">
                            <Package className="w-3.5 h-3.5 text-brand-forest" />
                            Packaging:
                          </span>
                          <strong className="text-stone-800 font-semibold truncate max-w-[180px]">
                            {item.packaging}
                          </strong>
                        </div>

                        <div className="flex items-center justify-between pb-2 border-b border-stone-200/60">
                          <span className="text-stone-500 flex items-center gap-1.5">
                            <Thermometer className="w-3.5 h-3.5 text-brand-forest" />
                            Transit Temp:
                          </span>
                          <strong className="text-stone-800 font-semibold">{item.temp}</strong>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-stone-500 flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-brand-forest" />
                            Season:
                          </span>
                          <strong className="text-brand-forest font-semibold">{item.season}</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="p-6 pt-0 flex items-center gap-3">
                    <Link
                      href={`/contact-us?product=${encodeURIComponent(item.name)}`}
                      className="flex-1 py-2.5 rounded-full text-center text-xs font-semibold text-white bg-brand-forest hover:bg-brand-deep transition-all duration-200 shadow-sm flex items-center justify-center gap-1.5 group/btn"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>

                    <a
                      href={`https://api.whatsapp.com/send?phone=919730008116&text=${encodeURIComponent(
                        `Hello Old Spice Agro Fresh, I am interested in importing / ordering ${item.name} (HS: ${item.hsCode}). Please share available grade, current pricing, and container calendar.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-brand-mint text-brand-forest hover:bg-brand-green/30 transition-colors"
                      title="WhatsApp Inquiry"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Bottom Procurement Banner */}
          <div className="mt-16 bg-gradient-to-r from-brand-forest to-brand-deep rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-elevated">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-brand-green font-bold">
                Tailored Wholesale &amp; International Shipping
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl mt-2 mb-4">
                Need Custom Calibers, Private Labeling, or Reefer Container Booking?
              </h2>
              <p className="text-sm text-stone-200 mb-8 leading-relaxed">
                We pack in 5kg, 10kg, 15kg Lenomesh bags, telescopic export cartons, clamshells, and modified atmosphere packaging (MAP). Full documentation including Phytosanitary Certificate, Certificate of Origin, and APEDA clearance provided.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact-us"
                  className="px-6 py-3 rounded-full text-xs font-bold text-brand-forest bg-white hover:bg-brand-mint transition-colors shadow-sm"
                >
                  Contact Our Commercial Desk
                </Link>
                <a
                  href="https://api.whatsapp.com/send?phone=919730008116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-brand-green/20 border border-brand-green/40 hover:bg-brand-green/30 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat With CEO on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
