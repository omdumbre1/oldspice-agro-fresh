import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sprout,
  ShieldCheck,
  HeartHandshake,
  Award,
  Users,
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Instagram,
  Sparkles,
  TreePine,
  Layers,
} from 'lucide-react';
import { TEAM_MEMBERS, IMPACT_STATS, CERTIFICATIONS } from '@/data/content';

export const metadata: Metadata = {
  title: 'About Us & Board of Directors | Old Spice Agro Fresh LLP',
  description:
    "Learn about Old Spice Agro Fresh LLP's organic farming heritage in Otur, Maharashtra, our board of directors, leadership team, and collective of 599+ farmers.",
};

const DIRECTORS_DETAILS = [
  {
    name: 'Sunny Ashok Dumbre',
    role: 'Chief Executive Officer',
    designation: 'Executive Leadership & Global Trade',
    image: '/assets/team/sunny-dumbre.jpg',
    bio: 'Leads international trade relations, corporate partnerships, and cold-chain modernizations. Under his vision, Old Spice Agro Fresh expanded from a regional collective to a multi-continent export powerhouse serving premier retail chains.',
    whatsapp: 'https://api.whatsapp.com/send?phone=919730008116',
    instagram: 'https://www.instagram.com/sunnydumbre/',
    highlights: ['Export Logistics & Port Strategy', 'Global Buyer Alliances', 'Agronomic Technology Integration'],
  },
  {
    name: 'Akash Dilip Dumbre',
    role: 'Designated Partner & Director',
    designation: 'Operations & Post-Harvest Quality',
    image: '/assets/team/akash-dumbre.png',
    bio: 'Heads end-to-end farm operations, high-tech packhouse sorting, grading machinery, and pre-cooling systems. Ensures every pallet meets stringent European and Gulf phytosanitary benchmarks with zero compromise.',
    whatsapp: null,
    instagram: null,
    highlights: ['Automated Grading & Hydro-Cooling', 'APEDA & Phytosanitary Compliance', 'Cold-Chain Reefer Monitoring'],
  },
  {
    name: 'Anita Ashok Dumbare',
    role: 'Designated Partner & Director',
    designation: 'Farmer Relations & Sustainable Agriculture',
    image: '/assets/team/anita-dumbre.png',
    bio: 'Champions grassroots farmer welfare, ecological soil health practices, and fair trade compensation across 599+ partner growers. Oversees organic certification compliance and natural bio-pest management protocols.',
    whatsapp: null,
    instagram: null,
    highlights: ['599+ Farmer Collective Alliance', 'NPOP Organic Traceability', 'Ecological Soil Enrichment'],
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-nature-paper">
      
      {/* Hero Banner */}
      <section className="bg-nature-darkBg text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1ecd56_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-green/20 border border-brand-green/30 text-brand-green text-xs font-semibold uppercase tracking-wider mb-4">
              <Sprout className="w-3.5 h-3.5" />
              <span>Our Heritage &amp; Leadership</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6">
              About Old Spice Agro Fresh LLP
            </h1>
            <p className="text-xl sm:text-2xl text-brand-green font-display italic font-medium mb-6">
              &ldquo;Living Healthy is Living Good&rdquo;
            </p>
            <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
              We are a farmers&apos; collective combining the wisdom of age-old agricultural traditions with advanced modern agro-science. Cultivating 1,796+ acres of certified organic farmland in the fertile Otur valley of Pune, Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-12 bg-white border-b border-nature-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {IMPACT_STATS.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-stone-50 border border-nature-border/80">
                <div className="font-display font-black text-3xl sm:text-5xl text-brand-forest">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-stone-600 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-elevated border border-nature-border">
                <Image
                  src="/assets/farm/farm-field.jpg"
                  alt="Otur Farmland Old Spice Agro Fresh"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-brand-green font-semibold">
                    Otur Valley • Taluka Junnar • Pune
                  </span>
                  <p className="font-display text-2xl font-bold mt-1">1,796+ Organic Acres</p>
                  <p className="text-xs text-stone-300 mt-1">Nurturing volcanic alluvial soil with zero chemical residues</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 bg-brand-forest text-white p-5 rounded-2xl shadow-elevated border border-white/10 max-w-[240px]">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-5 h-5 text-brand-green" />
                  <strong className="text-xs font-bold font-display">Est. 2018</strong>
                </div>
                <p className="text-[11px] text-stone-200">
                  LLPIN: AAM-0760. Pune, Maharashtra.
                </p>
              </div>
            </div>

            {/* Content Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint text-brand-forest text-xs font-semibold uppercase tracking-wider">
                <TreePine className="w-3.5 h-3.5 text-brand-green" />
                <span>Our Heritage</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-nature-darkBg leading-tight">
                Pioneering Ecological Farming for a Healthier World
              </h2>
              <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                <p>
                  At Old Spice Agro Fresh LLP, we operate as an empowered farmers&apos; collective with a single unified conviction: safe, nutritious food begins with healthy soil. We combine traditional generational farming knowledge with precision agro-technology to preserve crop health, soil vitality, and post-harvest nutrient retention.
                </p>
                <p>
                  Our dedicated in-house agronomists visit farm plots weekly to run soil tests and advise farmers on natural pest control, green manuring, and biological inputs. By strictly practicing multi-crop rotation and avoiding synthetic pesticides, our produce attains superior shelf-life, dry matter content, and natural taste.
                </p>
                <p>
                  From pre-cooling within 2 hours of harvest to automated optical grading and packaging at our modern Otur facility, every vegetable and fruit is treated under international cold-chain standards for reliable global delivery.
                </p>
              </div>

              {/* Key Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-white border border-nature-border">
                  <Sprout className="w-5 h-5 text-brand-forest mb-2" />
                  <h4 className="font-bold text-xs text-nature-darkBg">Soil Regeneration</h4>
                  <p className="text-[11px] text-stone-500 mt-1">Green compost and microbial biodiversity</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-nature-border">
                  <ShieldCheck className="w-5 h-5 text-brand-forest mb-2" />
                  <h4 className="font-bold text-xs text-nature-darkBg">Bio Pest Control</h4>
                  <p className="text-[11px] text-stone-500 mt-1">Zero hazardous chemicals, 100% safe</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-nature-border">
                  <HeartHandshake className="w-5 h-5 text-brand-forest mb-2" />
                  <h4 className="font-bold text-xs text-nature-darkBg">Fair Trade</h4>
                  <p className="text-[11px] text-stone-500 mt-1">Direct prosperity for 599+ farmer families</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          BOARD OF DIRECTORS SECTION (Specifically Requested)
          ========================================================================= */}
      <section id="directors" className="py-20 bg-white border-y border-nature-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-forest">
              Corporate Governance
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-nature-darkBg mt-1">
              Board of Directors &amp; Leadership
            </h2>
            <p className="text-base text-stone-600 mt-3 leading-relaxed">
              Meet the visionary founders and directors guiding Old Spice Agro Fresh LLP towards sustainable agricultural growth, international quality benchmarks, and ethical farmer partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {DIRECTORS_DETAILS.map((director, i) => (
              <div
                key={i}
                className="bg-stone-50 rounded-3xl overflow-hidden border border-nature-border hover:border-brand-green/50 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-stone-200">
                    <Image
                      src={director.image}
                      alt={director.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-4 left-5 right-5 text-white">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-brand-green block">
                        {director.designation}
                      </span>
                      <h3 className="font-display font-bold text-2xl mt-0.5">
                        {director.name}
                      </h3>
                      <p className="text-xs text-stone-300 font-medium">
                        {director.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio & Details */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {director.bio}
                    </p>

                    {/* Operational Highlights */}
                    <div className="pt-2 border-t border-stone-200/80 space-y-1.5">
                      <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                        Core Focus Areas
                      </span>
                      {director.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-forest flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with Contact Action */}
                <div className="p-6 pt-0 border-t border-stone-200/50">
                  {director.whatsapp || director.instagram ? (
                    <div className="flex items-center gap-3 pt-3">
                      {director.whatsapp && (
                        <a
                          href={director.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 px-3 rounded-full text-xs font-semibold text-brand-forest bg-brand-mint hover:bg-brand-green/20 transition-colors flex items-center justify-center gap-1.5"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp Desk</span>
                        </a>
                      )}
                      {director.instagram && (
                        <a
                          href={director.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full text-stone-600 bg-white border border-stone-200 hover:text-pink-600 transition-colors"
                          title="Instagram Profile"
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  ) : (
                    <div className="pt-3 text-[11px] text-stone-400 text-center font-medium">
                      Old Spice Agro Fresh LLP Board Member
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Legal Entity & Incorporation Factsheet */}
          <div className="mt-16 bg-brand-mint/40 rounded-3xl p-8 border border-brand-green/30">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-stone-700">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-brand-forest flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-500 font-medium block">Legal Entity</span>
                  <strong className="text-nature-darkBg font-bold block text-sm">Old Spice Agro Fresh LLP</strong>
                  <span>LLPIN: AAM-0760</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-brand-forest flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-500 font-medium block">Incorporation Date</span>
                  <strong className="text-nature-darkBg font-bold block text-sm">February 22, 2018</strong>
                  <span>Registrar of Companies, Pune</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-forest flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-500 font-medium block">Registered Headquarters</span>
                  <strong className="text-nature-darkBg font-bold block text-sm">Otur, Taluka Junnar</strong>
                  <span>Pune, Maharashtra 412409, India</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-brand-forest flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-500 font-medium block">Government Recognition</span>
                  <strong className="text-nature-darkBg font-bold block text-sm">APEDA &amp; NPOP Certified</strong>
                  <span>Ministry of Commerce &amp; Industry</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-forest">
              Quality Assurance
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-nature-darkBg mt-1">
              Certifications &amp; Accreditations
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Our farm plots, packing shed, and export workflows comply with national and international organic food standards.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="bg-white p-4 rounded-2xl border border-nature-border text-center shadow-subtle hover:shadow-card transition-all"
              >
                <div className="relative h-44 w-full rounded-xl overflow-hidden bg-stone-100 mb-3 border border-stone-100">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-contain p-2"
                  />
                </div>
                <h4 className="text-[11px] font-bold text-nature-darkBg leading-snug">
                  {cert.title}
                </h4>
              </div>
            ))}
          </div>

          {/* CTA Link */}
          <div className="mt-12 text-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold text-white bg-brand-forest hover:bg-brand-deep transition-all shadow-sm"
            >
              <span>Partner With Us / Request a Meeting</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
