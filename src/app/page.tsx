'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Sprout,
  Compass,
  Instagram,
  MessageCircle,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import HeroSlideshow from '@/components/HeroSlideshow';
import ProductsSection from '@/components/ProductsSection';
import Lightbox from '@/components/Lightbox';
import AnimatedCounter from '@/components/AnimatedCounter';
import ContactForm from '@/components/ContactForm';
import {
  CLIENTS,
  CERTIFICATIONS,
  HARVEST_STEPS,
  TEAM_MEMBERS,
  IMPACT_STATS,
} from '@/data/content';

export default function Home() {

  return (
    <main className="overflow-hidden bg-nature-paper">
      
      {/* =========================================================================
          SECTION 1: HERO SLIDESHOW (Active, Cinematic, Auto-advancing)
          "Fresh Organic Fruit & Vegetable"
          Tagline: "It's all about nature"
          Two buttons: Request a Quote & Explore Products
          ========================================================================= */}
      <section id="hero" className="relative">
        <HeroSlideshow />
      </section>

      {/* =========================================================================
          SECTION 2: OUR PRODUCTS (Active Slider & Unified Showcase on Single Page)
          Farm Fresh Vegetable, Farm Fresh Fruit, Exotic, and Leafy
          ========================================================================= */}
      <ProductsSection />

      {/* =========================================================================
          SECTION 3: OUR FARM
          "We are a farmers' collective who believe that Living Healthy is Living Good..."
          ========================================================================= */}
      <section id="our-farm" className="py-20 sm:py-28 bg-white border-b border-nature-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Visual Collage */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-elevated border border-nature-border">
                <Image
                  src="/assets/farm/farm-field.jpg"
                  alt="Old Spice Agro Fresh Organic Farm in Otur, Maharashtra"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nature-darkBg/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase font-semibold tracking-wider text-brand-green">
                    Otur • Junnar • Pune District
                  </span>
                  <p className="font-display font-bold text-xl sm:text-2xl mt-1">
                    Maharashtra&apos;s Rich Agricultural Belt
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-brand-forest text-white p-5 rounded-2xl shadow-elevated border border-white/10 max-w-[260px]">
                <div className="flex items-center gap-3 mb-2">
                  <Sprout className="w-6 h-6 text-brand-green flex-shrink-0" />
                  <span className="font-display font-bold text-sm">Age-Old Wisdom &amp; Modern Science</span>
                </div>
                <p className="text-xs text-stone-200/90 leading-snug">
                  Nurturing soil health and crop balance naturally.
                </p>
              </div>
            </div>

            {/* Right Column: Editorial Philosophy Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint text-brand-forest text-xs font-semibold uppercase tracking-wider">
                <Sprout className="w-3.5 h-3.5 text-brand-green" />
                <span>Our Philosophy &amp; Collective</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-nature-darkBg tracking-tight leading-tight">
                Living Healthy is <br />
                <span className="text-brand-forest italic">Living Good.</span>
              </h2>

              {/* Exact Text from Brief */}
              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-light">
                We are a farmers&apos; collective who believe that Living Healthy is Living Good. We grow organic vegetables and fruits through an end-to-end eco-friendly process to provide fresh farm produce which is safe to consume for you and your family.
              </p>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                We combine the knowledge of age-old wisdom that makes for better agriculture with a blend of modern technology to take care of soil health, crop health and post-production processes.
              </p>

              {/* 3 Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-nature-paper border border-nature-border">
                  <span className="text-xs font-bold text-brand-forest uppercase tracking-wider block">01</span>
                  <h4 className="font-display font-bold text-sm text-nature-darkBg mt-1">Soil Health</h4>
                  <p className="text-xs text-stone-500 mt-1">Crop rotation &amp; natural microbial enrichment.</p>
                </div>
                <div className="p-4 rounded-2xl bg-nature-paper border border-nature-border">
                  <span className="text-xs font-bold text-brand-forest uppercase tracking-wider block">02</span>
                  <h4 className="font-display font-bold text-sm text-nature-darkBg mt-1">Crop Health</h4>
                  <p className="text-xs text-stone-500 mt-1">Agronomist-supervised natural pest remedies.</p>
                </div>
                <div className="p-4 rounded-2xl bg-nature-paper border border-nature-border">
                  <span className="text-xs font-bold text-brand-forest uppercase tracking-wider block">03</span>
                  <h4 className="font-display font-bold text-sm text-nature-darkBg mt-1">Post-Production</h4>
                  <p className="text-xs text-stone-500 mt-1">Hygienic pre-cooling, cleaning &amp; grading.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CROPS GROWN WITH CARE (Agronomy & Soil Management)
          ========================================================================= */}
      <section id="agronomy" className="py-20 sm:py-28 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1ecd56_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">
              Agronomy &amp; Natural Pest Control
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-2">
              Crops Grown with Care
            </h2>
            
            {/* Exact Text from Brief */}
            <p className="text-base sm:text-lg text-stone-300 font-light mt-4 leading-relaxed">
              Our in-house agronomists regularly monitor the crop and advise farmers on soil management and timely and judicious application of natural pest control methods to grow the healthiest crop possible. We practice crop rotation to enrich the soil nutrients and maintain optimal soil health.
            </p>
          </div>

          {/* Interactive Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-4 hover:border-brand-green/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-brand-green/10 border border-brand-green/30 flex items-center justify-center text-brand-green">
                <Sprout className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">In-House Agronomists</h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                Dedicated agricultural scientists stationed directly in Otur, conducting regular field inspections and advising our collective on biological pest management.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-4 hover:border-brand-green/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-brand-green/10 border border-brand-green/30 flex items-center justify-center text-brand-green">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">Natural Pest Control</h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                Judicious application of botanical extracts, neem formulations, and beneficial insects to safeguard crops without synthetic chemical residues.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-4 hover:border-brand-green/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-brand-green/10 border border-brand-green/30 flex items-center justify-center text-brand-green">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">Strategic Crop Rotation</h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                Rotating leguminous pulses, vegetables, and leafy greens to naturally replenish nitrogen, restore soil carbon, and maintain peak biodiversity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: HARVESTING AND PACKING TIMELINE (6 STEPS)
          ========================================================================= */}
      <section id="harvesting" className="py-20 sm:py-28 bg-nature-paper border-b border-nature-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-forest">
              Hygienic Post-Harvest Protocol
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-nature-darkBg tracking-tight mt-1">
              Harvesting and Packing Process
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 font-light">
              Every step from field picking to final distribution is executed under strict quality, hygiene, and temperature guidelines.
            </p>
          </div>

          {/* 6 Steps Grid with Chronological Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {HARVEST_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-nature-border hover:border-brand-green/60 shadow-subtle hover:shadow-elevated transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-brand-forest bg-brand-mint px-3 py-1 rounded-full">
                      Step {step.step}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-nature-darkBg mb-3 group-hover:text-brand-forest transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center gap-2 text-xs text-brand-forest font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                  <span>Quality Standard</span>
                </div>
              </div>
            ))}
          </div>

          {/* Packhouse Banner */}
          <div className="mt-12 rounded-3xl overflow-hidden relative border border-nature-border shadow-elevated">
            <div className="relative h-64 sm:h-80 w-full">
              <Image
                src="/assets/farm/packhouse.jpg"
                alt="Old Spice Agro Fresh Packhouse Facility"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/50 to-transparent" />
              <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-center max-w-xl text-white">
                <span className="text-xs uppercase tracking-wider font-semibold text-brand-green">
                  Hygienic Hub • Otur
                </span>
                <h4 className="font-display font-bold text-2xl sm:text-3xl mt-1 mb-2">
                  Modern Pre-Cooling &amp; Handling Centre
                </h4>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Removing field heat immediately post-harvest preserves moisture, stops enzymatic degradation, and ensures produce reaches stores in peak farm-fresh condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CERTIFICATIONS AND LICENSES (5 Certificate Images with Lightbox)
          ========================================================================= */}
      <section id="certifications" className="py-20 sm:py-28 bg-white border-b border-nature-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-forest">
                Trust &amp; Verified Compliance
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-nature-darkBg tracking-tight mt-1">
                Certifications and Licenses
              </h2>
              <p className="text-stone-600 text-sm mt-1 max-w-2xl font-light">
                Independently audited by accredited certification bodies. Click any certificate to inspect full credentials.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-brand-forest bg-brand-mint px-4 py-2 rounded-full self-start md:self-auto">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              <span>5 Active Accreditations</span>
            </div>
          </div>

          {/* Certificate Grid with Lightbox */}
          <Lightbox items={CERTIFICATIONS} />
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: OUR CLIENTS (Pausable Logo Marquee)
          Swiggy, Zomato, Zepto, Amazon Fresh, Zama Organics, White Organic, Otipy, Organik Truck, Sharan
          ========================================================================= */}
      <section id="clients" className="py-16 sm:py-20 bg-nature-paper border-b border-nature-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-forest">
            Trusted Distribution Network
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-nature-darkBg mt-1">
            Our Clients &amp; Retail Partners
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Proudly supplying India&apos;s leading quick-commerce platforms, organic retailers, and institutional buyers.
          </p>
        </div>

        {/* Marquee Track */}
        <div className="relative w-full overflow-hidden py-4 group">
          <div className="flex gap-10 sm:gap-14 animate-marquee group-hover:[animation-play-state:paused] w-max">
            {[...CLIENTS, ...CLIENTS].map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="flex items-center justify-center h-20 w-40 sm:h-24 sm:w-48 bg-white rounded-2xl border border-nature-border p-3 shadow-sm hover:shadow-subtle transition-all duration-300 flex-shrink-0"
              >
                <div className="relative h-12 w-32">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: IMPACT STATS (Count-up Numbers)
          "We are ready to re-green for the future of our earth"
          ========================================================================= */}
      <section id="stats" className="py-20 sm:py-28 bg-nature-darkBg text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">
              Environmental &amp; Community Impact
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-2">
              &ldquo;We are ready to re-green for the future of our earth&rdquo;
            </h2>
            <p className="text-stone-300 text-sm sm:text-base mt-3 font-light">
              Empowering local farming families while restoring soil fertility and delivering pure, chemical-free food.
            </p>
          </div>

          {/* Animated Counter Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {IMPACT_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 text-center backdrop-blur-sm hover:border-brand-green/40 transition-colors"
              >
                <div className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-brand-green mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  {stat.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: BOARD OF DIRECTORS
          Sunny Ashok Dumbre (CEO), Akash Dilip Dumbre, Anita Ashok Dumbre
          ========================================================================= */}
      <section id="directors" className="py-20 sm:py-28 bg-white border-b border-nature-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-forest">
              Leadership &amp; Governance
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-nature-darkBg tracking-tight mt-1">
              Board of Directors
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 font-light">
              Guiding Old Spice Agro Fresh LLP with generational farming roots and modern operational stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="bg-nature-paper rounded-3xl p-6 border border-nature-border hover:shadow-elevated hover:border-brand-green/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-72 w-full rounded-2xl overflow-hidden mb-6 bg-stone-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="font-display font-bold text-xl text-nature-darkBg">
                    {member.name}
                  </h3>
                  <span className="text-xs uppercase tracking-wider font-semibold text-brand-forest block mt-0.5">
                    {member.role}
                  </span>
                </div>

                {/* Social and WhatsApp links for CEO */}
                {member.role.includes('CEO') && (
                  <div className="pt-6 mt-6 border-t border-nature-border/60 flex items-center justify-between">
                    <span className="text-xs text-stone-500">Direct Contact:</span>
                    <div className="flex items-center gap-2">
                      {member.whatsapp && (
                        <a
                          href={member.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-green/20 text-brand-forest hover:bg-brand-green/30 text-xs font-bold transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>+91 97300 08116</span>
                        </a>
                      )}
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-stone-200 text-stone-600 transition-colors"
                          aria-label="Instagram profile"
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: DIRECT COMMERCIAL CONTACT & ENQUIRY CTA
          ========================================================================= */}
      <section id="contact" className="py-20 sm:py-28 bg-nature-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-forest">
                  Direct Farm Procurement
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-nature-darkBg tracking-tight mt-1 mb-4">
                  Partner Directly with Our Collective
                </h2>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                  Whether you are a retail supermarket chain, food-service provider, quick-commerce brand, or bulk buyer, our farm directors in Otur are ready to provide fresh, certified organic harvest batches.
                </p>
              </div>

              {/* Direct Details */}
              <div className="space-y-4">
                <a
                  href="https://api.whatsapp.com/send?phone=919730008116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-nature-border hover:border-brand-green/60 shadow-sm transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-mint flex items-center justify-center text-brand-forest group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                      WhatsApp Trade Desk (CEO)
                    </span>
                    <p className="text-base font-bold text-nature-darkBg group-hover:text-brand-forest transition-colors">
                      +91 97300 08116
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@oldspiceagrofreshllp.in"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-nature-border hover:border-brand-green/60 shadow-sm transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-mint flex items-center justify-center text-brand-forest group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                      Official Correspondence
                    </span>
                    <p className="text-base font-bold text-nature-darkBg group-hover:text-brand-forest transition-colors">
                      info@oldspiceagrofreshllp.in
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-nature-border shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-brand-mint flex items-center justify-center text-brand-forest flex-shrink-0 mt-0.5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                      Farm &amp; Registered Packhouse
                    </span>
                    <p className="text-sm font-bold text-nature-darkBg mt-0.5">
                      Near Datta mandir, Kolmatha, Otur
                    </p>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Taluka Junnar, District Pune, Maharashtra 412409, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="p-6 bg-white rounded-2xl border border-nature-border space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-forest">
                  <ShieldCheck className="w-4 h-4 text-brand-green" />
                  <span>Our Quality &amp; Trust Commitments:</span>
                </div>
                <ul className="text-xs text-stone-600 space-y-1.5 list-disc list-inside">
                  <li>Zero synthetic pesticide or herbicide residue</li>
                  <li>Pre-cooled upon harvest to arrest respiration</li>
                  <li>Graded for uniform size, firmness, and natural color</li>
                  <li>Custom crates, mesh bags, or retail pre-packs</li>
                </ul>
              </div>
            </div>

            {/* Right: The Enquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
