import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-nature-darkBg text-stone-300 border-t border-nature-darkBorder/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white/5 rounded-lg p-1">
                <Image
                  src="/assets/logo/logo.png"
                  alt="Old Spice Agro Fresh LLP"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl text-white block">
                  Old Spice Agro Fresh
                </span>
                <span className="text-xs uppercase tracking-wider text-brand-green font-semibold">
                  It&apos;s all about nature • LLP
                </span>
              </div>
            </Link>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              We are a farmers&apos; collective combining the knowledge of age-old wisdom with modern technology to deliver fresh, certified organic fruit, vegetable, and exotic produce worldwide.
            </p>

            <div className="pt-2">
              <a
                href="https://api.whatsapp.com/send?phone=919730008116"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green hover:bg-brand-green/20 text-xs font-semibold tracking-wide transition-colors"
              >
                <span>WhatsApp Trade Desk: +91 97300 08116</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Our Products (Merged Catalogue) */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-base tracking-wide">
              Our Products
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link href="/products" className="hover:text-brand-green transition-colors font-medium text-stone-300">
                  All Harvest Produce (Merged)
                </Link>
              </li>
              <li>
                <Link href="/products?category=vegetables" className="hover:text-brand-green transition-colors">
                  Farm Fresh Vegetable
                </Link>
              </li>
              <li>
                <Link href="/products?category=fruit" className="hover:text-brand-green transition-colors">
                  Farm Fresh Fruit
                </Link>
              </li>
              <li>
                <Link href="/products?category=exotic" className="hover:text-brand-green transition-colors">
                  Exotic Varieties
                </Link>
              </li>
              <li>
                <Link href="/products?category=leafy" className="hover:text-brand-green transition-colors">
                  Leafy Greens
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-base tracking-wide">
              Company &amp; Pages
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link href="/" className="hover:text-brand-green transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-brand-green transition-colors">
                  About Us (Heritage &amp; Farm)
                </Link>
              </li>
              <li>
                <Link href="/about-us#directors" className="hover:text-brand-green transition-colors">
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-brand-green transition-colors">
                  Operations &amp; Harvest Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-brand-green transition-colors">
                  Contact Us (Otur Map)
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-brand-green transition-colors">
                  Request Quotation / RFQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Address & Office */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-base tracking-wide">
              Farm &amp; Office
            </h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-green flex-shrink-0 mt-1" />
                <span>Near Datta mandir, Kolmatha, Otur, Tal-Junnar, Dist-Pune, Maharashtra 412409, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-green flex-shrink-0" />
                <a href="tel:+919730008116" className="hover:text-white transition-colors">
                  +91 97300 08116
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-green flex-shrink-0" />
                <a href="mailto:info@oldspiceagrofreshllp.in" className="hover:text-white transition-colors">
                  info@oldspiceagrofreshllp.in
                </a>
              </li>
              <li className="pt-1">
                <Link
                  href="/contact-us"
                  className="text-xs text-brand-green underline hover:text-white transition-colors"
                >
                  View Otur Location on Google Maps &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with mandatory copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>Copyright © 2026 Old Spice Agro Fresh</p>
          <p className="text-stone-500">
            NPOP Certified Organic • APEDA Registered • FSSAI Certified Packhouse
          </p>
        </div>
      </div>
    </footer>
  );
}
