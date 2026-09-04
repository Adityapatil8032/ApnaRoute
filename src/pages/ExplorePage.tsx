import React, { useState } from 'react';
import { Search, Sparkles, MapPin, ArrowUpDown } from 'lucide-react';
import { Destination } from '../types';
import { DESTINATIONS } from '../data/destinations';
import { DestinationCard } from '../components/destination/DestinationCard';

interface ExplorePageProps {
  onSelectDestination: (dest: Destination) => void;
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({
  onSelectDestination,
  favorites,
  onToggleFavorite,
}) => {
  const categories = [
    'All',
    'Nature',
    'Beaches',
    'Historical',
    'Religious',
    'Adventure',
    'Culture',
    'Food',
    'Shopping',
    'Hidden Gems'
  ];

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'rating' | 'name' | 'eco'>('rating');

  const filtered = DESTINATIONS.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.overview.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCat =
      activeCategory === 'All'
        ? true
        : activeCategory === 'Hidden Gems'
        ? d.isHiddenGem
        : d.category.toLowerCase() === activeCategory.toLowerCase();

    return matchesSearch && matchesCat;
  }).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'eco') return (b.ecoScore || 0) - (a.ecoScore || 0);
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold mb-2">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>Discover India Responsibly</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore Destinations
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Browse authentic regions categorized by terrain, culture, and ground accessibility
          </p>
        </div>

        {/* Search input in header */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search state, city, hills..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
          />
        </div>
      </div>

      {/* Category Pills & Sorting Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Sort dropdown */}
        <div className="flex items-center gap-2 text-xs self-end lg:self-auto shrink-0">
          <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-500 font-medium">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 font-semibold focus:outline-none"
          >
            <option value="rating">Highest Rated</option>
            <option value="eco">Eco-Friendliness Score</option>
            <option value="name">Alphabetical</option>
          </select>
        </div>
      </div>

      {/* Grid of Results */}
      <div>
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
          <span>Showing <strong>{filtered.length}</strong> travel destinations</span>
          {activeCategory !== 'All' && (
            <span>Filtered by: <strong className="text-brand-700">{activeCategory}</strong></span>
          )}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dest) => (
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
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <MapPin className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <h3 className="text-sm font-bold text-slate-800">No destinations found in this filter</h3>
            <p className="text-xs text-slate-500 mt-1">Try clearing your search query or selecting 'All' categories.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-brand-50 text-brand-700 text-xs font-semibold rounded-xl border border-brand-200 hover:bg-brand-100 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
