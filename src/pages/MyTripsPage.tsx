import React, { useState } from 'react';
import { Bookmark, Heart, Calendar, ArrowRight, Trash2, MapPin, CheckCircle2, Plus } from 'lucide-react';
import { Destination, GeneratedItinerary, PageRoute } from '../types';
import { DESTINATIONS } from '../data/destinations';
import { DestinationCard } from '../components/destination/DestinationCard';

interface MyTripsPageProps {
  savedItineraries: GeneratedItinerary[];
  favoriteIds: string[];
  onSelectDestination: (dest: Destination) => void;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onDeleteItinerary: (id: string) => void;
  onNavigate: (page: PageRoute) => void;
}

export const MyTripsPage: React.FC<MyTripsPageProps> = ({
  savedItineraries,
  favoriteIds,
  onSelectDestination,
  onToggleFavorite,
  onDeleteItinerary,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<'saved-trips' | 'favorites' | 'previous'>('saved-trips');

  const favoriteDestinations = DESTINATIONS.filter((d) => favoriteIds.includes(d.id));

  // Demo previous completed itineraries
  const previousItineraries = [
    {
      id: 'prev-1',
      title: 'Hampi Heritage Expedition (Winter 2025)',
      destination: 'Hampi, Karnataka',
      date: 'Dec 14 - Dec 17, 2025',
      status: 'Completed',
      days: 4,
      totalSpent: '₹8,200',
      highlights: 'Stone Chariot at sunrise, Coracle boat ride, Tungabhadra Sunset'
    },
    {
      id: 'prev-2',
      title: 'Kerala Green Tea Trail & Backwaters',
      destination: 'Munnar, Kerala',
      date: 'Aug 10 - Aug 14, 2025',
      status: 'Completed',
      days: 5,
      totalSpent: '₹14,500',
      highlights: 'KDHP Tea Museum, Eravikulam Nilgiri Tahr sightings, Appam breakfast'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            My Trips & Favourites
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage your planned routes, favorite destinations, and past travel milestones
          </p>
        </div>

        <button
          onClick={() => onNavigate('ai-planner')}
          className="px-4 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-xl shadow-xs flex items-center gap-2 transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Plan New Route</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-3 border-b border-slate-200">
        <button
          onClick={() => setActiveTab('saved-trips')}
          className={`pb-3 px-3 text-xs sm:text-sm font-semibold flex items-center gap-2 border-b-2 transition-all ${
            activeTab === 'saved-trips'
              ? 'border-brand-600 text-brand-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Bookmark className="w-4 h-4" />
          <span>Saved Trips ({savedItineraries.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('favorites')}
          className={`pb-3 px-3 text-xs sm:text-sm font-semibold flex items-center gap-2 border-b-2 transition-all ${
            activeTab === 'favorites'
              ? 'border-brand-600 text-brand-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Heart className="w-4 h-4" />
          <span>Favourite Destinations ({favoriteDestinations.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('previous')}
          className={`pb-3 px-3 text-xs sm:text-sm font-semibold flex items-center gap-2 border-b-2 transition-all ${
            activeTab === 'previous'
              ? 'border-brand-600 text-brand-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Previous Itineraries ({previousItineraries.length})</span>
        </button>
      </div>

      {/* Tab 1: Saved Trips */}
      {activeTab === 'saved-trips' && (
        <div>
          {savedItineraries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {savedItineraries.map((itin) => (
                <div
                  key={itin.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-soft hover:shadow-card transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-semibold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-200">
                        {itin.days} Days • {itin.budgetLevel}
                      </span>
                      <button
                        onClick={() => onDeleteItinerary(itin.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        title="Remove trip"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <h3 className="text-base font-bold text-slate-900">{itin.tripTitle}</h3>
                    
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-500" />
                      <span>{itin.destination}</span>
                    </div>

                    <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                      {itin.summary}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-semibold">Estimated Budget</span>
                        <span className="font-bold text-emerald-700">{itin.totalEstimatedBudget}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-semibold">Transit Mode</span>
                        <span className="font-semibold text-slate-700">{itin.preferredTransport}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-end">
                    <button
                      onClick={() => onNavigate('ai-planner')}
                      className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1.5"
                    >
                      <span>Open in AI Planner</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
              <Bookmark className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <h3 className="text-base font-bold text-slate-800">No saved trips yet</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Generate an itinerary in the AI Trip Planner and click "Save Trip" to keep it here for offline reference.
              </p>
              <button
                onClick={() => onNavigate('ai-planner')}
                className="mt-4 px-5 py-2.5 bg-brand-600 text-white text-xs font-semibold rounded-xl hover:bg-brand-700 transition-colors"
              >
                Plan a Trip Now
              </button>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Favourite Destinations */}
      {activeTab === 'favorites' && (
        <div>
          {favoriteDestinations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteDestinations.map((dest) => (
                <DestinationCard
                  key={dest.id}
                  destination={dest}
                  onSelect={onSelectDestination}
                  isFavorite={true}
                  onToggleFavorite={onToggleFavorite}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
              <Heart className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <h3 className="text-base font-bold text-slate-800">No favorite destinations saved</h3>
              <p className="text-xs text-slate-500 mt-1">
                Click the heart icon on any destination card while exploring to bookmark your bucket list.
              </p>
              <button
                onClick={() => onNavigate('explore')}
                className="mt-4 px-5 py-2.5 bg-brand-600 text-white text-xs font-semibold rounded-xl hover:bg-brand-700 transition-colors"
              >
                Browse Destinations
              </button>
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Previous Itineraries */}
      {activeTab === 'previous' && (
        <div className="space-y-4">
          {previousItineraries.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> {item.status}
                  </span>
                  <span className="text-xs text-slate-400">{item.date}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-500">
                  <strong className="text-slate-700">Highlights:</strong> {item.highlights}
                </p>
              </div>

              <div className="flex items-center gap-6 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Total Spent</span>
                  <span className="font-bold text-slate-900">{item.totalSpent}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Duration</span>
                  <span className="font-semibold text-slate-700">{item.days} Days</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
