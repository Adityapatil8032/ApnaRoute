import React, { useState } from 'react';
import { ArrowLeft, Star, MapPin, Sparkles, Heart, Compass, Bed, UtensilsCrossed, Camera, Radar, Backpack, Calendar, Landmark, MessageSquareQuote } from 'lucide-react';
import { Destination, PageRoute } from '../types';
import { WeatherCard } from '../components/destination/WeatherCard';
import { TransportCard } from '../components/destination/TransportCard';
import { HyperLocalRadar } from '../components/destination/HyperLocalRadar';
import { SeasonPlannerWidget } from '../components/destination/SeasonPlannerWidget';
import { SmartPackingWidget } from '../components/destination/SmartPackingWidget';
import { HeritageIntelligenceCard } from '../components/destination/HeritageIntelligenceCard';
import { SentimentReviewCard } from '../components/destination/SentimentReviewCard';

interface DestinationDetailPageProps {
  destination: Destination;
  onBack: () => void;
  onNavigate: (page: PageRoute) => void;
  onPlanTripWithDestination: (destName: string) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
}

export const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({
  destination,
  onBack,
  onNavigate,
  onPlanTripWithDestination,
  isFavorite,
  onToggleFavorite,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'All Intelligence' },
    { id: 'transport', label: 'Transport (6 Modes)' },
    { id: 'radar', label: 'Hyper-Local Radar' },
    { id: 'weather', label: 'Weather & Advisory' },
    { id: 'seasons', label: 'Season Planning' },
    { id: 'packing', label: 'Smart Packing AI' },
    { id: 'heritage', label: 'Heritage & Etiquette' },
    { id: 'reviews', label: 'Reviews Sentiment' },
    { id: 'places', label: 'Places to Explore' },
    { id: 'food', label: 'Regional Cuisine' },
    { id: 'stays', label: 'Verified Stays' },
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Destinations</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={(e: React.MouseEvent) => onToggleFavorite(destination.id, e)}
              className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                isFavorite
                  ? 'bg-rose-50 text-rose-700 border-rose-200'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span className="hidden sm:inline">{isFavorite ? 'Saved' : 'Save'}</span>
            </button>

            <button
              onClick={() => onPlanTripWithDestination(destination.name)}
              className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Plan AI Route</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header with Imagery */}
      <div className="relative h-72 sm:h-96 w-full bg-slate-900">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <div className="absolute bottom-6 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white">
              {destination.category}
            </span>
            {destination.isHiddenGem && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600/90 backdrop-blur-md text-white flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Hidden Gem
              </span>
            )}
            {destination.ecoScore && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/80 backdrop-blur-md text-white">
                Eco-Score: {destination.ecoScore}/100
              </span>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-brand-400" />
                <span>{destination.state}, India</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-1">
                {destination.name}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {destination.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/15">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              <div>
                <div className="text-base font-bold leading-none">{destination.rating} / 5.0</div>
                <div className="text-[10px] text-slate-300 mt-0.5">{destination.reviewsCount} traveler checks</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Navigation Section Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-slate-200 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-brand-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="space-y-10">
          
          {/* Overview Section */}
          {(activeTab === 'all') && (
            <section className="bg-white rounded-3xl border border-slate-200 p-6 shadow-soft">
              <h2 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Compass className="w-4 h-4 text-brand-600" />
                Overview & Ground Realities
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {destination.overview}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-4 text-xs text-slate-600">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Best Travel Season</span>
                  <span className="font-semibold text-slate-900">{destination.bestSeason}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Transit Readiness</span>
                  <span className="font-semibold text-emerald-600">
                    {destination.transport.filter((t) => t.status === 'Available').length} Operational Modes
                  </span>
                </div>
              </div>
            </section>
          )}

          {/* Transport Availability Section (Core Feature 3) */}
          {(activeTab === 'all' || activeTab === 'transport') && (
            <section id="transport-section">
              <TransportCard
                transportList={destination.transport}
                destinationName={destination.name}
              />
            </section>
          )}

          {/* Hyper-Local Map Radar (Feature 4) */}
          {(activeTab === 'all' || activeTab === 'radar') && (
            <section id="radar-section">
              <HyperLocalRadar
                radarPlaces={destination.radarPlaces}
                destinationName={destination.name}
              />
            </section>
          )}

          {/* Weather Section (Core Feature 2) */}
          {(activeTab === 'all' || activeTab === 'weather') && (
            <section id="weather-section">
              <WeatherCard
                weather={destination.weather}
                destinationName={destination.name}
              />
            </section>
          )}

          {/* Season-Wise Planning (Feature 2) */}
          {(activeTab === 'all' || activeTab === 'seasons') && (
            <section id="seasons-section">
              <SeasonPlannerWidget
                seasonGuides={destination.seasonGuides}
                destinationName={destination.name}
              />
            </section>
          )}

          {/* Smart Packing AI (Feature 13) */}
          {(activeTab === 'all' || activeTab === 'packing') && (
            <section id="packing-section">
              <SmartPackingWidget
                destinationName={destination.name}
                category={destination.category}
                weatherCondition={destination.weather.condition}
              />
            </section>
          )}

          {/* Heritage Intelligence (Feature 17) */}
          {(activeTab === 'all' || activeTab === 'heritage') && (
            <section id="heritage-section">
              <HeritageIntelligenceCard
                heritageIntel={destination.heritageIntel}
                destinationName={destination.name}
              />
            </section>
          )}

          {/* Reviews AI Sentiment (Feature 15) */}
          {(activeTab === 'all' || activeTab === 'reviews') && (
            <section id="sentiment-section">
              <SentimentReviewCard
                sentiment={destination.sentiment}
                destinationName={destination.name}
              />
            </section>
          )}

          {/* Places to Explore */}
          {(activeTab === 'all' || activeTab === 'places') && (
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Camera className="w-5 h-5 text-brand-600" />
                    Places to Explore in {destination.name}
                  </h3>
                  <p className="text-xs text-slate-500">Key attractions with verified entry and local transport advice</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {destination.placesToExplore.map((place) => (
                  <div
                    key={place.id}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{place.name}</h4>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        {place.description}
                      </p>

                      <div className="my-3 space-y-1 text-xs">
                        <div className="flex items-center justify-between text-slate-500">
                          <span>Entry:</span>
                          <span className="font-semibold text-slate-800">{place.entryFee}</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-500">
                          <span>Timings:</span>
                          <span className="font-semibold text-slate-800">{place.timings}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 text-[11px] text-brand-900 bg-brand-50/60 p-2 rounded-lg">
                      <strong>How to reach:</strong> {place.transportAdvice}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Local Food & Delicacies */}
          {(activeTab === 'all' || activeTab === 'food') && (
            <section className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5 text-amber-600" />
                  Authentic Regional Food
                </h3>
                <p className="text-xs text-slate-500">Local specialties and famous traditional spots</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {destination.food.map((dish, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                        dish.type === 'Veg' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        dish.type === 'Non-Veg' ? 'bg-rose-50 text-rose-700 border border-rose-200' :
                        'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {dish.type}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900">{dish.name}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {dish.description}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] text-slate-500">
                      <strong className="text-slate-700">Famous Spot:</strong> {dish.famousSpot}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Stays Section */}
          {(activeTab === 'all' || activeTab === 'stays') && (
            <section className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Bed className="w-5 h-5 text-emerald-600" />
                  Stays & Accommodations
                </h3>
                <p className="text-xs text-slate-500">From budget community homestays to eco-conscious resorts</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {destination.stays.map((stay, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200 inline-block mb-2">
                        {stay.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900">{stay.name}</h4>
                      <div className="text-xs font-semibold text-emerald-700 mt-1">{stay.priceRange}</div>

                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {stay.features.map((f, fi) => (
                          <span key={fi} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onNavigate('services')}
                      className="mt-4 w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                    >
                      Inquire / View Stays
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Local Experiences */}
          {destination.localExperiences && destination.localExperiences.length > 0 && (
            <section className="p-6 rounded-3xl bg-gradient-to-r from-brand-50/80 to-sky-50/50 border border-brand-200">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-600" />
                Curated Local Experiences in {destination.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.localExperiences.map((exp, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-brand-100 shadow-xs">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-slate-900">{exp.title}</span>
                      <span className="text-[11px] text-slate-500">{exp.duration}</span>
                    </div>
                    <div className="text-xs text-slate-600">Vibe: {exp.vibe}</div>
                    <div className="mt-2 text-[11px] text-emerald-700 bg-emerald-50 p-2 rounded-lg border border-emerald-100">
                      <strong>Impact:</strong> {exp.sustainabilityNote}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </div>
  );
};
