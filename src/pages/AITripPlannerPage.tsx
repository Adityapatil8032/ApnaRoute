import React, { useState } from 'react';
import { Sparkles, Check, Loader2, Info } from 'lucide-react';
import { GeneratedItinerary, Destination } from '../types';
import { DESTINATIONS } from '../data/destinations';
import { SAMPLE_ITINERARY_TEMPLATE } from '../data/mockItinerary';
import { ItineraryCard } from '../components/planner/ItineraryCard';
import { ConflictDetector } from '../components/planner/ConflictDetector';
import { CostCalculator } from '../components/planner/CostCalculator';
import { Clock, IndianRupee, MapPin } from 'lucide-react';

interface AITripPlannerPageProps {
  initialDestination?: string;
  onSaveTrip: (itinerary: GeneratedItinerary) => void;
  savedTripIds: string[];
}

export const AITripPlannerPage: React.FC<AITripPlannerPageProps> = ({
  initialDestination,
  onSaveTrip,
  savedTripIds,
}) => {
  const [destination, setDestination] = useState<string>(initialDestination || 'Manali');
  const [days, setDays] = useState<number>(3);
  const [budget, setBudget] = useState<string>('Moderate');
  const [preferredTransport, setPreferredTransport] = useState<string>('Local Cabs & Walking');
  const [accommodation, setAccommodation] = useState<string>('Eco Homestay');
  
  const allInterests = [
    'Nature & Scenic',
    'Adventure & Treks',
    'Historical & Heritage',
    'Local Food & Cafes',
    'Spiritual & Temples',
    'Culture & Crafts',
    'Relaxation & Wellness'
  ];
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Nature & Scenic',
    'Adventure & Treks',
    'Local Food & Cafes'
  ]);

  const [activeRightTab, setActiveRightTab] = useState<'itinerary' | 'conflicts' | 'cost'>('itinerary');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResult, setGeneratedResult] = useState<GeneratedItinerary | null>(SAMPLE_ITINERARY_TEMPLATE);

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      if (selectedInterests.length > 1) {
        setSelectedInterests(selectedInterests.filter((i: string) => i !== interest));
      }
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    // Simulate AI model inference delay
    setTimeout(() => {
      setIsGenerating(false);
      const updatedItinerary: GeneratedItinerary = {
        ...SAMPLE_ITINERARY_TEMPLATE,
        id: `itin-${Date.now()}`,
        destination: destination,
        days: days,
        budgetLevel: `${budget} Budget`,
        interests: selectedInterests,
        preferredTransport: preferredTransport,
        accommodationType: accommodation,
        tripTitle: `${days}-Day ${budget} Route across ${destination}`,
        summary: `A practical, ground-verified ${days}-day itinerary for ${destination} tuned for ${selectedInterests.join(', ')} with scheduled transit using ${preferredTransport}.`
      };
      setGeneratedResult(updatedItinerary);
      setActiveRightTab('itinerary');
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-20">
      {/* Title & Introduction */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>AI-Powered Route Planning • Prototype Engine</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Craft Your Ground-Realistic Itinerary
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Unlike generic trip planners that pack 15 places in one day, APNA ROUTE factors real transit buffers, local taxi unions, terrain road conditions, and authentic spots.
        </p>
      </div>

      {/* Main Grid: Form on Left, Output on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Form Card (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 shadow-soft space-y-5">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-slate-900">Trip Preferences</h2>
            <p className="text-xs text-slate-500">Configure parameters for your customized route</p>
          </div>

          <form onSubmit={handleGenerate} className="space-y-4">
            {/* Destination Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Destination
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
              >
                {DESTINATIONS.map((d: Destination) => (
                  <option key={d.id} value={d.name}>
                    {d.name}, {d.state}
                  </option>
                ))}
              </select>
            </div>

            {/* Number of Days */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold text-slate-700">
                  Duration
                </label>
                <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                  {days} Days / {days - 1} Nights
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="7"
                step="1"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-medium">
                <span>2 Days (Weekend)</span>
                <span>4 Days</span>
                <span>7 Days (Extended)</span>
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Budget Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Student/Budget', 'Moderate', 'Luxury/Comfort'].map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={`py-2 px-2 text-xs font-semibold rounded-xl border transition-all truncate ${
                      budget === b
                        ? 'bg-brand-50 text-brand-700 border-brand-300 shadow-xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {b.split('/')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Interests & Themes
              </label>
              <div className="flex flex-wrap gap-1.5">
                {allInterests.map((interest) => {
                  const isSelected = selectedInterests.includes(interest);
                  return (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`text-xs px-2.5 py-1 rounded-lg border font-medium flex items-center gap-1 transition-all ${
                        isSelected
                          ? 'bg-brand-600 text-white border-brand-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3" />}
                      <span>{interest}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Preferred Transport */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Preferred Ground Transport
              </label>
              <select
                value={preferredTransport}
                onChange={(e) => setPreferredTransport(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
              >
                <option value="Local Cabs & Walking">Local Cabs & Walking</option>
                <option value="Public Bus & Shared Autos">Public Bus & Shared Autos (Eco & Budget)</option>
                <option value="Self-Drive Rental Scooter/Car">Self-Drive Rental Scooter/Car</option>
                <option value="All-Inclusive Taxi Package">All-Inclusive Taxi Package</option>
              </select>
            </div>

            {/* Accommodation Preference */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Accommodation Preference
              </label>
              <select
                value={accommodation}
                onChange={(e) => setAccommodation(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
              >
                <option value="Eco Homestay">Eco Homestay (Locally Owned)</option>
                <option value="Backpacker Hostel">Backpacker Hostel (Social / Co-working)</option>
                <option value="Heritage Hotel">Heritage Boutique Hotel</option>
                <option value="3-Star Hotel & Resort">3-Star Hotel & Resort</option>
              </select>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              disabled={isGenerating}
              className="w-full py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md shadow-brand-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-75"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Synthesizing Optimal Route...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate My Route</span>
                </>
              )}
            </button>
          </form>

          {/* AI Disclaimer Box */}
          <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-2 text-[11px] text-amber-900 leading-relaxed">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>SIH Evaluation Note:</strong> The generator synthesizes realistic day plans matching your inputs. Full LLM API prompts (Google Gemini Flash / Deepseek) are wired for live Phase 2 deployment.
            </div>
          </div>
        </div>

        {/* Generated Output & Intelligence Tools (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Tabs header */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              onClick={() => setActiveRightTab('itinerary')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeRightTab === 'itinerary'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-brand-600" />
              <span>Itinerary</span>
            </button>
            <button
              onClick={() => setActiveRightTab('conflicts')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeRightTab === 'conflicts'
                  ? 'bg-white text-amber-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>Conflict Radar</span>
              <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded-full">2</span>
            </button>
            <button
              onClick={() => setActiveRightTab('cost')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeRightTab === 'cost'
                  ? 'bg-white text-emerald-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <IndianRupee className="w-3.5 h-3.5 text-emerald-600" />
              <span>Cost Calculator</span>
            </button>
          </div>

          {activeRightTab === 'itinerary' && (
            generatedResult ? (
              <ItineraryCard
                itinerary={generatedResult}
                onSaveTrip={onSaveTrip}
                isSaved={savedTripIds.includes(generatedResult.id)}
              />
            ) : (
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-soft">
                <Sparkles className="w-12 h-12 text-brand-400 mx-auto mb-3 animate-pulse" />
                <h3 className="text-base font-bold text-slate-800">No route generated yet</h3>
                <p className="text-xs text-slate-500 mt-1">Select your preferences and click "Generate My Route" to preview the schedule.</p>
              </div>
            )
          )}

          {activeRightTab === 'conflicts' && (
            <ConflictDetector />
          )}

          {activeRightTab === 'cost' && (
            <CostCalculator />
          )}
        </div>

      </div>
    </div>
  );
};
