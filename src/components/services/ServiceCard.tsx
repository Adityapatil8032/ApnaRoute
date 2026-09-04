import React, { useState } from 'react';
import { Star, ShieldCheck, MapPin, CheckCircle, PhoneCall } from 'lucide-react';
import { TravelService } from '../../types';

interface ServiceCardProps {
  service: TravelService;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [inquired, setInquired] = useState(false);

  const handleInquire = () => {
    setInquired(true);
    setTimeout(() => setInquired(false), 3000);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-soft hover:shadow-card transition-all flex flex-col justify-between">
      <div>
        {/* Top bar: Category and Verification */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="text-[11px] font-semibold bg-brand-50 text-brand-700 px-2.5 py-0.5 rounded-full border border-brand-200">
            {service.category}
          </span>
          {service.verified && (
            <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              SIH Verified
            </span>
          )}
        </div>

        {/* Name & Rating */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-slate-900 leading-snug">
            {service.name}
          </h3>
          <div className="flex items-center gap-1 shrink-0 bg-slate-100 px-2 py-0.5 rounded-lg text-xs font-semibold text-slate-800">
            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span>{service.rating}</span>
          </div>
        </div>

        {/* Destination / Address */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1 mb-2.5">
          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="truncate">{service.contactOrLocation}</span>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 leading-relaxed mb-3">
          {service.description}
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {service.features.map((feat: string, i: number) => (
            <span
              key={i}
              className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
            >
              {feat}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Bar: Price & Inquire CTA */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <div>
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">Indicative Rate</span>
          <span className="text-sm font-bold text-slate-900">{service.priceRange}</span>
        </div>

        <button
          type="button"
          onClick={handleInquire}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
            inquired
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-brand-600 hover:bg-brand-700 text-white shadow-xs'
          }`}
        >
          {inquired ? (
            <>
              <CheckCircle className="w-3.5 h-3.5" />
              Inquiry Sent
            </>
          ) : (
            <>
              <PhoneCall className="w-3.5 h-3.5" />
              Contact Provider
            </>
          )}
        </button>
      </div>
    </div>
  );
};
