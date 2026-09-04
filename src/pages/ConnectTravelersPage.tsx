import React, { useState } from 'react';
import { Users, Sparkles, MapPin, Calendar, CheckCircle2, MessageCircle, Filter, ShieldCheck, Heart } from 'lucide-react';
import { TravelerMatch, PageRoute } from '../types';
import { TRAVELER_MATCHES } from '../data/advancedFeaturesData';

interface ConnectTravelersPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ConnectTravelersPage: React.FC<ConnectTravelersPageProps> = ({ onNavigate }) => {
  const [selectedStyle, setSelectedStyle] = useState<string>('All');
  const [selectedBudget, setSelectedBudget] = useState<string>('All');
  const [connectedIds, setConnectedIds] = useState<string[]>([]);

  const handleConnect = (id: string) => {
    if (!connectedIds.includes(id)) {
      setConnectedIds((prev) => [...prev, id]);
    }
  };

  const filtered = TRAVELER_MATCHES.filter((t: TravelerMatch) => {
    const styleMatch = selectedStyle === 'All' || t.travelStyle === selectedStyle;
    const budgetMatch = selectedBudget === 'All' || t.budget === selectedBudget;
    return styleMatch && budgetMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold mb-2">
            <Users className="w-3.5 h-3.5 text-brand-600" />
            <span>Community Travel Co-op • SIH 2026</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connect Travelers & Split Journeys
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Find compatible companions heading to the same Indian destinations to share taxi union fares, explore remote trails, and travel safely.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-xl self-start md:self-auto font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Aadhaar / ID Verified Profiles</span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
          <Filter className="w-3.5 h-3.5 text-brand-600" />
          <span>Filter Style:</span>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          {['All', 'Adventure Trekker', 'Backpacker', 'Culture & Food', 'Relaxed'].map((style) => (
            <button
              key={style}
              type="button"
              onClick={() => setSelectedStyle(style)}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                selectedStyle === style
                  ? 'bg-brand-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        <div className="h-4 w-px bg-slate-200 hidden sm:block" />

        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold text-slate-600">Budget:</span>
          {['All', 'Budget', 'Moderate', 'Flexible'].map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setSelectedBudget(b)}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                selectedBudget === b
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Traveler Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((t: TravelerMatch) => {
          const isConnected = connectedIds.includes(t.id);
          return (
            <div
              key={t.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-soft hover:shadow-card transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                {/* Top Profile Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-2xl object-cover border-2 border-slate-100 shadow-xs"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-base font-bold text-slate-900">{t.name}</h3>
                        {t.verifiedBadge && (
                          <span title="Verified ID">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                        <span className="bg-brand-50 text-brand-700 px-2 py-0.5 rounded font-medium">
                          {t.travelStyle}
                        </span>
                        <span>•</span>
                        <span>{t.budget} Budget</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-black bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-xl">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.compatibilityScore}% Match</span>
                  </div>
                </div>

                {/* Destination & Dates */}
                <div className="grid grid-cols-2 gap-2 my-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Destination</span>
                    <span className="font-bold text-slate-800 flex items-center gap-1 truncate">
                      <MapPin className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                      {t.destination}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Dates</span>
                    <span className="font-bold text-slate-800 flex items-center gap-1 truncate">
                      <Calendar className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                      {t.travelDates}
                    </span>
                  </div>
                </div>

                {/* Seeking note */}
                <p className="text-xs text-slate-600 leading-relaxed bg-brand-50/40 p-3 rounded-xl border border-brand-100/60">
                  "{t.seeking}"
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Response time: &lt; 2 hours</span>
                <button
                  type="button"
                  onClick={() => handleConnect(t.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    isConnected
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-brand-600 hover:bg-brand-700 text-white shadow-xs'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{isConnected ? 'Connection Requested' : 'Connect & Share Trip'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
