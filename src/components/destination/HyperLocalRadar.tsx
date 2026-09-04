import React, { useState } from 'react';
import { Radar, Bed, UtensilsCrossed, Bus, CircleDot, ShoppingBag, Hospital, Fuel, MapPin, Navigation } from 'lucide-react';
import { RadarPlace } from '../../types';

interface HyperLocalRadarProps {
  radarPlaces?: RadarPlace[];
  destinationName: string;
}

export const HyperLocalRadar: React.FC<HyperLocalRadarProps> = ({
  radarPlaces,
  destinationName,
}) => {
  // Default mock data if not provided
  const places: RadarPlace[] = radarPlaces && radarPlaces.length > 0
    ? radarPlaces
    : [
        { id: '1', name: `${destinationName} District Hospital & Emergency`, category: 'Hospitals', distance: '420 m', status: 'Open 24/7', landmark: 'Main Highway Link' },
        { id: '2', name: 'Prepaid Auto & E-Rickshaw Hub', category: 'Rickshaws', distance: '150 m', status: 'Operational', landmark: 'Town Circle Chowk' },
        { id: '3', name: 'State Transport Interstate Terminal', category: 'Buses', distance: '780 m', status: 'Operational', landmark: 'Central Station Road' },
        { id: '4', name: 'Heritage Street Food & Pure Veg Kitchens', category: 'Food', distance: '300 m', status: 'Operational', landmark: 'Old Bazaar Gali' },
        { id: '5', name: 'Local Handicrafts & Souvenir Guild', category: 'Bazaars', distance: '250 m', status: 'Operational', landmark: 'Market Promenade' },
        { id: '6', name: 'HPCL 24/7 Petrol & 50kW EV Charger', category: 'Fuel', distance: '1.4 km', status: 'Open 24/7', landmark: 'Bypass Road' },
        { id: '7', name: 'Pine View Verified Homestay Cluster', category: 'Hotels', distance: '550 m', status: 'Operational', landmark: 'Upper Ridge Lane' }
      ];

  const categories: { id: string; label: string; icon: React.ReactNode }[] = [
    { id: 'All', label: 'All Essentials', icon: <Radar className="w-3.5 h-3.5" /> },
    { id: 'Hospitals', label: 'Hospitals / Med', icon: <Hospital className="w-3.5 h-3.5 text-rose-500" /> },
    { id: 'Rickshaws', label: 'Autos / Rickshaws', icon: <CircleDot className="w-3.5 h-3.5 text-emerald-500" /> },
    { id: 'Buses', label: 'Bus Terminals', icon: <Bus className="w-3.5 h-3.5 text-blue-500" /> },
    { id: 'Food', label: 'Food & Dhabas', icon: <UtensilsCrossed className="w-3.5 h-3.5 text-amber-500" /> },
    { id: 'Hotels', label: 'Hotels / Stays', icon: <Bed className="w-3.5 h-3.5 text-indigo-500" /> },
    { id: 'Bazaars', label: 'Local Bazaars', icon: <ShoppingBag className="w-3.5 h-3.5 text-purple-500" /> },
    { id: 'Fuel', label: 'Fuel / EV Charge', icon: <Fuel className="w-3.5 h-3.5 text-slate-700" /> }
  ];

  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered = places.filter((p: RadarPlace) =>
    activeCategory === 'All' ? true : p.category === activeCategory
  );

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-soft space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-600 to-cyan-500 text-white flex items-center justify-center shadow-xs">
            <Radar className="w-5 h-5 animate-spin" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-slate-900">Hyper-Local Ground Radar</h3>
              <span className="text-[10px] font-bold uppercase bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                5km Active Radius
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Proximity locator for medical, transit stands, local dining, and fuel in {destinationName}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl self-start sm:self-auto">
          <Navigation className="w-3.5 h-3.5 text-brand-600" />
          <span>Showing {filtered.length} Local Landmarks</span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((c) => {
          const isSelected = activeCategory === c.id;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveCategory(c.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {c.icon}
              <span>{c.label}</span>
            </button>
          );
        })}
      </div>

      {/* Places Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filtered.map((place: RadarPlace) => (
          <div
            key={place.id}
            className="p-4 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-brand-200 hover:shadow-xs transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                  {place.category}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  place.status === 'Open 24/7' ? 'bg-emerald-100 text-emerald-800' :
                  place.status === 'High Demand' ? 'bg-rose-100 text-rose-800' :
                  'bg-slate-100 text-slate-700'
                }`}>
                  {place.status}
                </span>
              </div>

              <h4 className="text-sm font-bold text-slate-900 mt-1">{place.name}</h4>
              
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">{place.landmark}</span>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Distance from center:</span>
              <span className="font-extrabold text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                {place.distance}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
