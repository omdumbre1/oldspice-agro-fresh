'use client';

import { useState } from 'react';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare WhatsApp message as a fallback/instant option
    const waText = `Produce Quotation Enquiry for Old Spice Agro Fresh:\n• Name: ${formData.name}\n• Company/Buyer: ${formData.company}\n• Location (City/Country): ${formData.country}\n• Product: ${formData.product}\n• Quantity: ${formData.quantity}\n• Message: ${formData.message}`;

    // Here the endpoint can be configured via environment variable e.g. NEXT_PUBLIC_CONTACT_ENDPOINT
    const emailEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || '/api/contact';

    // Simulate sending to endpoint
    console.log('Sending enquiry to:', emailEndpoint, formData);

    setSubmitted(true);

    // Also offer direct WhatsApp redirection
    const waUrl = `https://api.whatsapp.com/send?phone=919730008116&text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div id="enquiry" className="bg-white rounded-3xl p-6 sm:p-10 border border-nature-border shadow-elevated">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-forest">
          Direct Commercial Desk
        </span>
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-nature-darkBg mt-1">
          Request a Produce Quotation
        </h3>
        <p className="text-sm text-stone-600 mt-2">
          Connect directly with our farm directors for bulk wholesale pricing, customized retail packaging specifications, and seasonal harvest allocations.
        </p>
      </div>

      {submitted ? (
        <div className="bg-brand-mint/50 border border-brand-green/30 rounded-2xl p-6 text-center space-y-3">
          <CheckCircle2 className="w-10 h-10 text-brand-forest mx-auto" />
          <h4 className="font-display font-bold text-lg text-nature-darkBg">
            Enquiry Received Successfully
          </h4>
          <p className="text-sm text-stone-600">
            Thank you! Your requirements have been forwarded to our trade desk. Our team will review your specifications and reply promptly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-semibold text-brand-forest underline pt-2"
          >
            Submit another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Liam Smith"
                className="w-full px-4 py-2.5 rounded-xl border border-nature-border bg-stone-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                Company / Importer Name *
              </label>
              <input
                id="company"
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. FreshProduce UK Ltd"
                className="w-full px-4 py-2.5 rounded-xl border border-nature-border bg-stone-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="country" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                Location (City / State / Country) *
              </label>
              <input
                id="country"
                type="text"
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                placeholder="e.g. Mumbai, Pune, Delhi or International"
                className="w-full px-4 py-2.5 rounded-xl border border-nature-border bg-stone-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
              />
            </div>

            <div>
              <label htmlFor="product" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                Product of Interest *
              </label>
              <input
                id="product"
                type="text"
                required
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                placeholder="e.g. Red Onions, Pomegranates"
                className="w-full px-4 py-2.5 rounded-xl border border-nature-border bg-stone-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
              />
            </div>

            <div>
              <label htmlFor="quantity" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                Estimated Quantity *
              </label>
              <input
                id="quantity"
                type="text"
                required
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                placeholder="e.g. 1 x 40ft Reefer (28 MT)"
                className="w-full px-4 py-2.5 rounded-xl border border-nature-border bg-stone-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              Specific Requirements or Notes
            </label>
            <textarea
              id="message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about desired packaging (cartons/mesh), port of discharge, target shipping schedule, or certifications required..."
              className="w-full px-4 py-2.5 rounded-xl border border-nature-border bg-stone-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all resize-y"
            ></textarea>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-forest hover:bg-brand-deep text-white font-medium text-sm transition-all duration-300 shadow-md hover:shadow-glow"
            >
              <Send className="w-4 h-4" />
              <span>Send Enquiry &amp; Connect on WhatsApp</span>
            </button>

            <a
              href="https://api.whatsapp.com/send?phone=919730008116"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-brand-green/40 bg-brand-mint text-brand-forest hover:bg-brand-green/20 font-medium text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-brand-green" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
