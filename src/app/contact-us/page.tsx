import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck, Ship, ArrowRight, Instagram } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us & Export Enquiry | Old Spice Agro Fresh LLP',
  description:
    'Connect directly with Old Spice Agro Fresh LLP in Otur, Maharashtra for organic fruit and vegetable export enquiries, CIF/FOB quotations, and trade orders.',
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-nature-paper">
      {/* Header Banner */}
      <section className="bg-nature-darkBg text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1ecd56_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 border border-brand-green/30 text-brand-green text-xs font-semibold uppercase tracking-wider mb-4">
              <span>Direct Commercial Desk</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6">
              Connect with Our Export Operations
            </h1>
            <p className="text-lg sm:text-xl text-stone-300 font-light leading-relaxed">
              We welcome international produce importers, retail chains, and institutional buyers. Reach out for export pricing, harvest timetables, or customized packaging specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Contact Details & Logistics Facts */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-forest">
                  Global Trade Enquiries
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-nature-darkBg mt-1 mb-4">
                  We are ready to partner with your distribution network
                </h2>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Whether you are planning container shipments via JNPT Mumbai port or rapid air freight consolidations, our team ensures smooth documentation, phytosanitary compliance, and temperature-controlled handling.
                </p>
              </div>

              {/* Direct Channel Cards */}
              <div className="space-y-4">
                <a
                  href="https://api.whatsapp.com/send?phone=919730008116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-nature-border hover:border-brand-green/60 hover:shadow-subtle transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-mint flex items-center justify-center text-brand-forest flex-shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                      WhatsApp Trade Desk (CEO)
                    </span>
                    <p className="text-base font-bold text-nature-darkBg group-hover:text-brand-forest transition-colors">
                      +91 97300 08116
                    </p>
                    <span className="text-xs text-stone-500">
                      Instant response for volume specifications and quotes
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:info@oldspiceagrofreshllp.in"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-nature-border hover:border-brand-green/60 hover:shadow-subtle transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-mint flex items-center justify-center text-brand-forest flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                      Commercial Inquiries
                    </span>
                    <p className="text-base font-bold text-nature-darkBg group-hover:text-brand-forest transition-colors">
                      info@oldspiceagrofreshllp.in
                    </p>
                    <span className="text-xs text-stone-500">
                      Formal tenders, purchase orders, &amp; vendor registration
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-nature-border">
                  <div className="w-12 h-12 rounded-xl bg-brand-mint flex items-center justify-center text-brand-forest flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                      Registered Farm &amp; Packhouse
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

              {/* Port & Logistics Gateway */}
              <div className="bg-stone-50 rounded-2xl p-6 border border-nature-border space-y-4">
                <h4 className="font-display font-bold text-sm text-nature-darkBg flex items-center gap-2">
                  <Ship className="w-4 h-4 text-brand-forest" />
                  <span>Strategic Export Gateways</span>
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-nature-border/60">
                    <span className="text-stone-500 block">Sea Freight</span>
                    <strong className="text-stone-800 font-semibold block mt-0.5">JNPT Nhava Sheva</strong>
                    <span className="text-stone-500">~160 km via NH60</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-nature-border/60">
                    <span className="text-stone-500 block">Air Cargo</span>
                    <strong className="text-stone-800 font-semibold block mt-0.5">Mumbai (BOM) &amp; Pune</strong>
                    <span className="text-stone-500">Fast cold-chain dispatch</span>
                  </div>
                </div>
              </div>

              {/* Board Contacts */}
              <div className="p-6 rounded-2xl bg-white border border-nature-border space-y-3">
                <h4 className="font-display font-bold text-sm text-nature-darkBg">
                  Executive Contacts
                </h4>
                <div className="space-y-2 text-xs text-stone-600">
                  <div className="flex items-center justify-between py-1 border-b border-stone-100">
                    <div>
                      <strong className="text-nature-darkBg font-medium block">Sunny Ashok Dumbre</strong>
                      <span>Chief Executive Officer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://api.whatsapp.com/send?phone=919730008116"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-forest hover:underline flex items-center gap-1 font-semibold"
                      >
                        WhatsApp
                      </a>
                      <span className="text-stone-300">•</span>
                      <a
                        href="https://www.instagram.com/sunnydumbre/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-600 hover:text-nature-darkBg flex items-center gap-1"
                      >
                        <Instagram className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-stone-100">
                    <div>
                      <strong className="text-nature-darkBg font-medium block">Akash Dilip Dumbre</strong>
                      <span>Director - Operations</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <div>
                      <strong className="text-nature-darkBg font-medium block">Anita Ashok Dumbre</strong>
                      <span>Director - Farm Relations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Complete Enquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm />

              {/* Buyer Guarantees */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white border border-nature-border/80 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-forest flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-xs text-nature-darkBg">NPOP Certified</h5>
                    <p className="text-[11px] text-stone-500 mt-0.5">Strict organic traceability from certified farm blocks</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-nature-border/80 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-forest flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-xs text-nature-darkBg">24-Hour Quotation</h5>
                    <p className="text-[11px] text-stone-500 mt-0.5">Prompt seasonal calendar &amp; FOB/CIF rates</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-nature-border/80 flex items-start gap-3">
                  <Ship className="w-5 h-5 text-brand-forest flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-xs text-nature-darkBg">Cold-Chain Guard</h5>
                    <p className="text-[11px] text-stone-500 mt-0.5">Pre-cooling &amp; reefer container integrity</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Location Map Section: Otur Old Spice Agro Fresh */}
      <section className="py-16 bg-stone-100 border-t border-nature-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-forest/10 text-brand-forest text-xs font-semibold uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>Google Maps Location</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-nature-darkBg">
                Old Spice Agro Fresh LLP - Otur Packhouse &amp; Farm
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Near Datta Mandir, Kolmatha, Otur, Taluka Junnar, District Pune, Maharashtra 412409, India
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Old+Spice+Agro+Fresh+LLP+Otur+Maharashtra+412409"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-forest hover:bg-brand-deep text-white text-xs font-bold transition-all shadow-sm hover:shadow"
            >
              <span>Get Directions on Google Maps</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden border border-nature-border shadow-elevated bg-stone-200">
            {/* Embedded Google Map iframe */}
            <iframe
              title="Old Spice Agro Fresh Otur Location Map"
              src="https://maps.google.com/maps?q=Old+Spice+Agro+Fresh+LLP,+Near+Datta+Mandir,+Otur,+Maharashtra+412409&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />

            {/* Floating Location Card Overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-nature-border/80 shadow-card">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-mint text-brand-forest flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-nature-darkBg">
                    Old Spice Agro Fresh LLP
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Near Datta Mandir, Kolmatha, Otur, Tal-Junnar, Dist-Pune 412409
                  </p>
                  <div className="mt-2.5 flex items-center gap-3 text-[11px] font-semibold">
                    <span className="text-brand-forest">Coordinates: 19.2486° N, 73.9189° E</span>
                    <span className="text-stone-300">•</span>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=19.2486,73.9189"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-700 hover:text-brand-forest underline"
                    >
                      View Satellite
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
