import React, { useState } from 'react';
import { Leaf, Sparkles, Award, CheckCircle2, Users, Trees, Droplets } from 'lucide-react';
import { Destination, PageRoute } from '../types';
import { DESTINATIONS } from '../data/destinations';
import { SUSTAINABLE_INITIATIVES } from '../data/servicesData';
import { DestinationCard } from '../components/destination/DestinationCard';

interface SustainableTourismPageProps {
  onSelectDestination: (dest: Destination) => void;
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onNavigate: (page: PageRoute) => void;
}

export const SustainableTourismPage: React.FC<SustainableTourismPageProps> = ({
  onSelectDestination,
  favorites,
  onToggleFavorite,
  onNavigate,
}) => {
  const [pledgeSigned, setPledgeSigned] = useState(false);
  const [pledgeCount, setPledgeCount] = useState(4826);

  const handleSignPledge = () => {
    if (!pledgeSigned) {
      setPledgeSigned(true);
      setPledgeCount(prev => prev + 1);
    }
  };

  const hiddenGems = DESTINATIONS.filter((d) => d.isHiddenGem);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 pb-20">
      {/* Banner / Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white p-8 sm:p-12 shadow-elevated">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
            <Leaf className="w-3.5 h-3.5" />
            <span>SIH 2026 Sustainable Tourism Initiative</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Protect What You Travel to See
          </h1>

          <p className="text-xs sm:text-base text-slate-200 leading-relaxed">
            Over-tourism degrades delicate mountain passes and exhausts municipal resources. APNA ROUTE champions spillover travel to lesser-known communities, supports indigenous handlooms, and advocates for zero-waste exploration.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-emerald-300">
              <Trees className="w-4 h-4" />
              <span>Low-Carbon Itineraries</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-300">
              <Droplets className="w-4 h-4" />
              <span>Plastic-Free Hydration</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-300">
              <Users className="w-4 h-4" />
              <span>Direct Artisan Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Core Pillars of Sustainable Tourism */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Our Sustainable Framework
          </h2>
          <p className="text-xs text-slate-500">
            Four targeted measures that empower local ecosystems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SUSTAINABLE_INITIATIVES.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-soft hover:shadow-card transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {item.category}
                </span>
                {item.location && (
                  <span className="text-[11px] text-slate-400 font-medium">
                    {item.location}
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.impactSummary}</p>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                <strong className="text-emerald-700">Action for Travelers:</strong> {item.actionableTip}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lesser-Known Destinations Spotlight */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              Lesser-Known Ecological Havens
            </h2>
            <p className="text-xs text-slate-500">
              Explore serene destinations where your visit directly sustains community livelihoods
            </p>
          </div>
          <button
            onClick={() => onNavigate('explore')}
            className="text-xs font-semibold text-brand-600 hover:text-brand-700"
          >
            Explore All Offbeat Spots →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hiddenGems.map((dest) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              onSelect={onSelectDestination}
              isFavorite={favorites.includes(dest.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      </section>

      {/* Interactive Responsible Traveler Pledge */}
      <section className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card text-center max-w-3xl mx-auto space-y-6">
        <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
          <Award className="w-6 h-6" />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900">The Conscious Indian Traveler Pledge</h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-lg mx-auto leading-relaxed">
            "I pledge to respect local customs, reduce single-use plastic on trails, hire accredited local guides, and leave natural habitats cleaner than I found them."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left max-w-xl mx-auto text-xs text-slate-700">
          <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Carry reusable bottle</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Dine at local family dhabas</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Zero horn & quiet in forests</span>
          </div>
        </div>

        <div>
          <button
            type="button"
            onClick={handleSignPledge}
            className={`px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md ${
              pledgeSigned
                ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                : 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20'
            }`}
          >
            {pledgeSigned ? '✓ You Have Signed the Pledge!' : 'Sign the Responsible Traveler Pledge'}
          </button>

          <p className="text-xs text-slate-500 mt-3 font-medium">
            <strong className="text-emerald-600">{pledgeCount.toLocaleString()}</strong> travelers have committed to sustainable exploration across India.
          </p>
        </div>
      </section>
    </div>
  );
};
