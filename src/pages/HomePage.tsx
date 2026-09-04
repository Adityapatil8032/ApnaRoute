import React, { useState } from 'react';
import { Sparkles, Compass, ArrowRight, ShieldCheck, Heart, Leaf, UtensilsCrossed, Navigation, Users, ShieldAlert, Radio, Clock, MapPin } from 'lucide-react';
import { Destination, PageRoute } from '../types';
import { DESTINATIONS } from '../data/destinations';
import { SearchBar } from '../components/common/SearchBar';
import { FeatureCard, FeatureType } from '../components/home/FeatureCard';
import { DestinationCard } from '../components/destination/DestinationCard';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onSelectDestination: (dest: Destination) => void;
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectDestination,
  favorites,
  onToggleFavorite,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [filterQuery, setFilterQuery] = useState<string>('');

  const handleSearch = (query: string, category?: string) => {
    setFilterQuery(query.toLowerCase());
    setSelectedCategory(category);
  };

  const popularDestinations = DESTINATIONS.filter((d) => !d.isHiddenGem);
  const hiddenGems = DESTINATIONS.filter((d) => d.isHiddenGem);

  // Filter list if user searched
  const filteredList = DESTINATIONS.filter((d) => {
    const matchesQuery =
      !filterQuery ||
      d.name.toLowerCase().includes(filterQuery) ||
      d.state.toLowerCase().includes(filterQuery) ||
      d.category.toLowerCase().includes(filterQuery);
    const matchesCategory =
      !selectedCategory || selectedCategory === 'All' || d.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  const handleFeatureClick = (type: FeatureType) => {
    switch (type) {
      case 'Weather':
      case 'Transport':
        // Navigate to the first destination to view weather or transport details
        onSelectDestination(DESTINATIONS[0]);
        break;
      case 'Stay':
      case 'Food':
        onNavigate('services');
        break;
    }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Welcome Hero with Large Search Bar */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-slate-50 pt-10 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-200 text-brand-700 text-xs font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Smart Ground Tourism • SIH 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Welcome back, <span className="text-brand-600">Aditya!</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Where do you want to go next? Discover scenic spots and check real local transport availability, weather advisories, and stays before booking.
          </p>

          {/* Large Destination Search Bar */}
          <div className="pt-4">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Quick Feature Cards */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Ground Condition Hubs
              </h2>
              <p className="text-xs text-slate-500">
                Essential checks to plan a hassle-free journey
              </p>
            </div>
            <button
              onClick={() => onNavigate('explore')}
              className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1"
            >
              Browse All <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard
              type="Weather"
              title="Climate & Advisory"
              description="Historical seasonal trends, precipitation risks, and road safety warnings."
              metricBadge="Live Forecasts"
              onClick={() => handleFeatureClick('Weather')}
            />
            <FeatureCard
              type="Transport"
              title="Local Transport"
              description="Cab, Auto, Bus, Train, and Bike Taxi availability status for each region."
              metricBadge="6 Modes Tracked"
              onClick={() => handleFeatureClick('Transport')}
            />
            <FeatureCard
              type="Stay"
              title="Verified Stays"
              description="Certified eco-resorts, family homestays, and backpacker hostels."
              metricBadge="Eco-Ratings"
              onClick={() => handleFeatureClick('Stay')}
            />
            <FeatureCard
              type="Food"
              title="Regional Food"
              description="Authentic local delicacies and famous heritage eateries."
              metricBadge="Local Flavors"
              onClick={() => handleFeatureClick('Food')}
            />
          </div>
        </section>

        {/* SIH 2026 Feature Highlights Strip */}
        <section className="bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-500/20 text-brand-300 px-2.5 py-1 rounded-full border border-brand-500/30">
                  SIH 2026 Real-Time Travel Safety & Intelligence
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1 tracking-tight">
                  Ground-Reality First: 20 Advanced Travel Features
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  From satellite-linked GPS route monitoring and timing conflict detection to verified local guides and 112 emergency radar.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div
                onClick={() => onNavigate('trip-tracking')}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-500/40 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Navigation className="w-5 h-5 text-brand-400" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-brand-300 transition-colors">
                  Live GPS Tracking & Route Safety
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Active speed tracking, mountain hair-pin warnings, and road risk index.
                </p>
                <div className="mt-3 text-xs font-semibold text-brand-400 flex items-center gap-1">
                  Launch Radar <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div
                onClick={() => onNavigate('connect-travelers')}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/40 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                  Connect Travelers & Split Costs
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Match with verified companions heading to your destination to share union cabs.
                </p>
                <div className="mt-3 text-xs font-semibold text-purple-400 flex items-center gap-1">
                  Find Travel Mates <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div
                onClick={() => onNavigate('ai-planner')}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/40 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                  AI Route & Timing Clash Detector
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Detects schedule clashes between train delays, museum hours, and mountain passes.
                </p>
                <div className="mt-3 text-xs font-semibold text-amber-400 flex items-center gap-1">
                  Plan Realistic Trip <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* If user searched something, show filtered results */}
        {(filterQuery || selectedCategory) && (
          <section className="pt-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-900">
                Search Results ({filteredList.length})
              </h2>
              <button
                onClick={() => {
                  setFilterQuery('');
                  setSelectedCategory(undefined);
                }}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline"
              >
                Reset Search
              </button>
            </div>
            {filteredList.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredList.map((dest) => (
                  <DestinationCard
                    key={dest.id}
                    destination={dest}
                    onSelect={onSelectDestination}
                    isFavorite={favorites.includes(dest.id)}
                    onToggleFavorite={onToggleFavorite}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
                <Compass className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-700">No destinations matched your query</p>
                <p className="text-xs text-slate-500 mt-1">Try searching for Manali, Munnar, Hampi, or Ziro.</p>
              </div>
            )}
          </section>
        )}

        {/* Popular Destinations */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Popular Indian Destinations
                </h2>
                <span className="text-[11px] font-semibold bg-blue-50 text-brand-700 px-2.5 py-0.5 rounded-full border border-brand-200">
                  Top Rated
                </span>
              </div>
              <p className="text-xs text-slate-500">
                High-demand hubs with verified transit and accommodation baselines
              </p>
            </div>
            <button
              onClick={() => onNavigate('explore')}
              className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1"
            >
              View More <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations.slice(0, 3).map((dest) => (
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

        {/* Hidden Gems Section */}
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Conscious Spillover Tourism</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Hidden Gems of Incredible India
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  Unspoiled valleys, living architecture, and high alpine meadows away from over-crowded tourist trails.
                </p>
              </div>

              <button
                onClick={() => onNavigate('sustainable')}
                className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs rounded-xl transition-colors shrink-0 flex items-center gap-1.5"
              >
                <Leaf className="w-4 h-4" />
                <span>Sustainable Tourism Hub</span>
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
          </div>
        </section>

        {/* Featured Cultural Experiences */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-soft">
          <div className="max-w-2xl mb-6">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="w-5 h-5 text-amber-600" />
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Featured Regional Experiences
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Immerse in indigenous craftsmanship, culinary traditions, and heritage trails
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50/70 hover:bg-white hover:border-brand-200 transition-all">
              <span className="text-[10px] font-bold text-brand-700 uppercase tracking-wide">Varanasi, UP</span>
              <h3 className="text-sm font-bold text-slate-900 mt-1">Dawn Rowboat Across 84 Sacred Ghats</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Experience the morning chant ceremonies from silent manual wooden rowboats with local boatmen.
              </p>
              <div className="mt-3 text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                <Leaf className="w-3.5 h-3.5" /> Zero Emission Activity
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50/70 hover:bg-white hover:border-brand-200 transition-all">
              <span className="text-[10px] font-bold text-brand-700 uppercase tracking-wide">Ziro Valley, AP</span>
              <h3 className="text-sm font-bold text-slate-900 mt-1">Apatani Bamboo Architecture Trail</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Tour traditional eco-villages and UNESCO candidate paddy-fish agricultural terraces.
              </p>
              <div className="mt-3 text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Village Council Owned
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50/70 hover:bg-white hover:border-brand-200 transition-all">
              <span className="text-[10px] font-bold text-brand-700 uppercase tracking-wide">Hampi, Karnataka</span>
              <h3 className="text-sm font-bold text-slate-900 mt-1">Coracle Cane Boat Float on River Tungabhadra</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Glide past ancient boulder ruins and submerged temple steps on handcrafted circular cane skiffs.
              </p>
              <div className="mt-3 text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 text-rose-500" /> Preserves Traditional Craft
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
