'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxProps {
  items: {
    id: number;
    title: string;
    image: string;
  }[];
}

export default function Lightbox({ items }: LightboxProps) {
  const [selectedItem, setSelectedItem] = useState<{ id: number; title: string; image: string } | null>(null);

  return (
    <div>
      {/* 5 Certificates Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {items.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group cursor-pointer bg-white rounded-xl p-3 border border-nature-border/80 shadow-subtle hover:shadow-card hover:border-brand-green/50 transition-all duration-300 flex flex-col items-center"
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-stone-50 flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-forest/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-2 rounded-full bg-white text-brand-forest shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-4 h-4" />
                </span>
              </div>
            </div>
            <p className="mt-2.5 text-xs text-center font-medium text-stone-700 line-clamp-2 leading-tight">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Modal Dialog */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <h3 className="font-display font-bold text-base sm:text-lg text-nature-darkBg">
                  {selectedItem.title}
                </h3>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-1.5 rounded-full hover:bg-stone-100 text-stone-500 hover:text-black transition-colors"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative w-full h-[60vh] max-h-[500px] mt-4 flex items-center justify-center bg-stone-50 rounded-xl overflow-hidden">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-contain p-4"
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-stone-500">
                <span>Official Certification Credential</span>
                <span className="font-semibold text-brand-forest">Old Spice Agro Fresh LLP</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
