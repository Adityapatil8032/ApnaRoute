import React, { useState } from 'react';
import { IndianRupee, Users, Calendar, Bed, Car, UtensilsCrossed, Sparkles, PieChart } from 'lucide-react';

export const CostCalculator: React.FC = () => {
  const [travelers, setTravelers] = useState<number>(2);
  const [days, setDays] = useState<number>(4);
  const [hotelTier, setHotelTier] = useState<'budget' | 'moderate' | 'luxury'>('moderate');
  const [transportMode, setTransportMode] = useState<'public' | 'shared_cab' | 'private_cab'>('shared_cab');
  const [foodStyle, setFoodStyle] = useState<'dhaba' | 'mixed' | 'premium'>('mixed');

  // Daily unit pricing
  const hotelDailyRates = { budget: 1200, moderate: 2800, luxury: 7500 };
  const transportDailyRates = { public: 300, shared_cab: 1200, private_cab: 3200 };
  const foodPerPersonDailyRates = { dhaba: 350, mixed: 750, premium: 1600 };
  const activityPerPersonDaily = 300; // tickets, permits, guides

  // Calculation (assuming 2 travelers per room)
  const roomsNeeded = Math.ceil(travelers / 2);
  const totalHotelCost = roomsNeeded * hotelDailyRates[hotelTier] * days;
  const totalTransportCost = transportDailyRates[transportMode] * days;
  const totalFoodCost = travelers * foodPerPersonDailyRates[foodStyle] * days;
  const totalActivityCost = travelers * activityPerPersonDaily * days;

  const totalTripCost = totalHotelCost + totalTransportCost + totalFoodCost + totalActivityCost;
  const perPersonCost = Math.round(totalTripCost / travelers);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-soft space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-900">Dynamic Travel Cost Calculator</h3>
            <span className="text-[10px] font-bold uppercase bg-brand-50 text-brand-700 px-2 py-0.5 rounded border border-brand-200">
              Per-Person Split
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Real ground pricing for hotels, union cabs, authentic meals, and permit fees
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sliders and Options (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Travelers and Days */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-brand-600" />
                  Travelers
                </label>
                <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                  {travelers} {travelers === 1 ? 'Person' : 'People'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                step="1"
                value={travelers}
                onChange={(e) => setTravelers(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
              />
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-600" />
                  Trip Duration
                </label>
                <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                  {days} Days
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
              />
            </div>
          </div>

          {/* Accommodation Tier */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-emerald-600" />
              Stay / Hotel Category
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'budget', label: 'Eco Homestay', rate: '₹1.2k/rm' },
                { id: 'moderate', label: '3-Star / Cottage', rate: '₹2.8k/rm' },
                { id: 'luxury', label: 'Boutique Resort', rate: '₹7.5k/rm' }
              ].map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setHotelTier(tier.id as any)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    hotelTier === tier.id
                      ? 'bg-emerald-50 text-emerald-900 border-emerald-300 ring-1 ring-emerald-500/20'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-xs font-bold block">{tier.label}</span>
                  <span className="text-[10px] text-slate-400">{tier.rate}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Transport Mode */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-brand-600" />
              Ground Transit Mode
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'public', label: 'Bus & Auto', desc: '₹300/day' },
                { id: 'shared_cab', label: 'Shared Union Cab', desc: '₹1,200/day' },
                { id: 'private_cab', label: 'Private SUV / 4x4', desc: '₹3,200/day' }
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setTransportMode(m.id as any)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    transportMode === m.id
                      ? 'bg-blue-50 text-blue-900 border-brand-300 ring-1 ring-brand-500/20'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-xs font-bold block">{m.label}</span>
                  <span className="text-[10px] text-slate-400">{m.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Food & Dining */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <UtensilsCrossed className="w-3.5 h-3.5 text-amber-600" />
              Food & Cuisine Style
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'dhaba', label: 'Local Dhabas', desc: '₹350/person' },
                { id: 'mixed', label: 'Cafes & Thalis', desc: '₹750/person' },
                { id: 'premium', label: 'Fine Dining / Trout', desc: '₹1,600/person' }
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFoodStyle(f.id as any)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    foodStyle === f.id
                      ? 'bg-amber-50 text-amber-900 border-amber-300 ring-1 ring-amber-500/20'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-xs font-bold block">{f.label}</span>
                  <span className="text-[10px] text-slate-400">{f.desc}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Calculation Output (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 text-white rounded-2xl p-6 space-y-5 shadow-card">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-semibold text-brand-300 flex items-center gap-1.5">
              <PieChart className="w-4 h-4" />
              Budget Breakdown
            </span>
            <span className="text-[10px] font-bold uppercase bg-brand-500/20 text-brand-300 px-2 py-0.5 rounded border border-brand-500/30">
              Tax & Permits Inc.
            </span>
          </div>

          <div className="space-y-2.5 text-xs text-slate-300">
            <div className="flex justify-between">
              <span>Accommodations ({roomsNeeded} Room, {days} Nights):</span>
              <span className="font-semibold text-white">₹{totalHotelCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Ground Transport ({days} Days):</span>
              <span className="font-semibold text-white">₹{totalTransportCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Food & Dining ({travelers} Travelers):</span>
              <span className="font-semibold text-white">₹{totalFoodCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Entry Fees, Guides & Permits:</span>
              <span className="font-semibold text-white">₹{totalActivityCost.toLocaleString()}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-slate-400 uppercase font-bold">Total Estimated Budget:</span>
              <span className="text-xl font-extrabold text-white">₹{totalTripCost.toLocaleString()}</span>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-emerald-300 uppercase font-bold block">Cost Per Person</span>
                <span className="text-xs text-slate-300">Split among {travelers} travelers</span>
              </div>
              <div className="text-lg sm:text-xl font-black text-emerald-400">
                ₹{perPersonCost.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
