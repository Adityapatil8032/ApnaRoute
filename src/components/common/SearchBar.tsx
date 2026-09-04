import React, { useState } from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string, category?: string) => void;
  placeholder?: string;
  initialQuery?: string;
  showCategoryPills?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'Where do you want to go? (e.g. Manali, Munnar, Hampi, Ziro...)',
  initialQuery = '',
  showCategoryPills = true,
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Adventure', 'Nature', 'Historical', 'Religious', 'Beaches', 'Hidden Gems'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim(), activeCategory === 'All' ? undefined : activeCategory);
  };

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    onSearch(query.trim(), cat === 'All' ? undefined : cat);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col sm:flex-row items-center gap-2 p-2 bg-white rounded-2xl shadow-card border border-slate-200/80 hover:border-brand-300 transition-all focus-within:ring-2 focus-within:ring-brand-500/20 focus-within:border-brand-500"
      >
        <div className="flex items-center gap-3 flex-1 w-full px-3 py-2">
          <MapPin className="w-5 h-5 text-brand-600 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full text-sm sm:text-base text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                onSearch('', activeCategory === 'All' ? undefined : activeCategory);
              }}
              className="text-xs text-slate-400 hover:text-slate-600 px-1"
            >
              Clear
            </button>
          )}
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl shadow-sm shadow-brand-600/30 flex items-center justify-center gap-2 transition-all hover:gap-3 cursor-pointer shrink-0"
        >
          <Search className="w-4 h-4" />
          <span>Explore</span>
          <ArrowRight className="w-4 h-4 hidden sm:inline-block" />
        </button>
      </form>

      {/* Quick Category Pills */}
      {showCategoryPills && (
        <div className="flex items-center gap-1.5 sm:gap-2 mt-3 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-slate-400 font-medium pl-1 shrink-0">Filter:</span>
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryClick(cat)}
                className={`px-3 py-1 rounded-full whitespace-nowrap transition-all font-medium ${
                  isSelected
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/70'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
