import React, { useState } from 'react';
import { Bed, UtensilsCrossed, Users, Car, KeyRound, Compass, Search, ShieldCheck } from 'lucide-react';
import { TRAVEL_SERVICES } from '../data/servicesData';
import { ServiceCard } from '../components/services/ServiceCard';

export const ServicesPage: React.FC = () => {
  const serviceCategories: { id: string; label: string; icon: React.ReactNode }[] = [
    { id: 'All', label: 'All Services', icon: <Compass className="w-4 h-4" /> },
    { id: 'Hotels', label: 'Hotels & Homestays', icon: <Bed className="w-4 h-4" /> },
    { id: 'Restaurants', label: 'Restaurants & Dining', icon: <UtensilsCrossed className="w-4 h-4" /> },
    { id: 'Local Guides', label: 'Local Guides', icon: <Users className="w-4 h-4" /> },
    { id: 'Transport', label: 'Transport Operators', icon: <Car className="w-4 h-4" /> },
    { id: 'Rentals', label: 'Vehicle Rentals', icon: <KeyRound className="w-4 h-4" /> },
    { id: 'Activities', label: 'Activities & Tours', icon: <Compass className="w-4 h-4" /> },
  ];

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = TRAVEL_SERVICES.filter((service) => {
    const matchesCategory =
      activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.destinationName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>SIH Verified Local Ecosystem</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Verified Travel Services
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Connect directly with certified guides, fair-rate transport operators, and authentic homestays
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search provider, city, or feature..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {serviceCategories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-2 transition-all ${
                isSelected
                  ? 'bg-brand-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Services Grid */}
      <div>
        <div className="text-xs text-slate-500 mb-4">
          Showing <strong>{filteredServices.length}</strong> verified travel partners
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <Compass className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <h3 className="text-sm font-bold text-slate-800">No services match your filters</h3>
            <p className="text-xs text-slate-500 mt-1">Try resetting the category filter or searching with different keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
};
