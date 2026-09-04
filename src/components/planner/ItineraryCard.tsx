import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, MapPin, Bookmark, Download, AlertCircle } from 'lucide-react';
import { GeneratedItinerary, DayPlan } from '../../types';

interface ItineraryCardProps {
  itinerary: GeneratedItinerary;
  onSaveTrip?: (itinerary: GeneratedItinerary) => void;
  isSaved?: boolean;
}

export const ItineraryCard: React.FC<ItineraryCardProps> = ({
  itinerary,
  onSaveTrip,
  isSaved = false,
}) => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-card overflow-hidden">
      {/* Notice Banner: Clearly Labeled Demo AI Generation */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 px-4 py-2.5 text-white flex items-center justify-between text-xs font-medium">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 animate-spin shrink-0" />
          <span>
            <strong>Demo Itinerary Preview:</strong> Generated for UI & travel flow testing. Ready for OpenAI / Gemini API connection.
          </span>
        </div>
        <span className="hidden sm:inline-block bg-white/20 px-2 py-0.5 rounded text-[11px] font-semibold">
          SIH Prototype
        </span>
      </div>

      {/* Header Info */}
      <div className="p-6 border-b border-slate-100 bg-slate-50/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-brand-700 mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{itinerary.destination}</span>
              <span>•</span>
              <span>{itinerary.days} Days / {itinerary.days - 1} Nights</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {itinerary.tripTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              {itinerary.summary}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {onSaveTrip && (
              <button
                type="button"
                onClick={() => onSaveTrip(itinerary)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all ${
                  isSaved
                    ? 'bg-rose-50 text-rose-700 border-rose-200'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
                {isSaved ? 'Saved to Trips' : 'Save Trip'}
              </button>
            )}

            <button
              type="button"
              onClick={handleDownload}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-brand-600 hover:bg-brand-700 text-white flex items-center gap-2 shadow-xs transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              {downloaded ? 'Route Saved!' : 'Export PDF'}
            </button>
          </div>
        </div>

        {/* Quick parameters badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-4 border-t border-slate-200/60 text-xs">
          <div className="bg-white p-2.5 rounded-xl border border-slate-200/70">
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Budget Category</span>
            <span className="font-semibold text-slate-800">{itinerary.budgetLevel}</span>
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-slate-200/70">
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Preferred Transit</span>
            <span className="font-semibold text-slate-800">{itinerary.preferredTransport}</span>
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-slate-200/70">
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Stay Category</span>
            <span className="font-semibold text-slate-800">{itinerary.accommodationType}</span>
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-slate-200/70">
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Est. Ground Cost</span>
            <span className="font-semibold text-emerald-700">{itinerary.totalEstimatedBudget}</span>
          </div>
        </div>
      </div>

      {/* Day Selector Tabs */}
      <div className="flex items-center gap-2 px-6 pt-4 border-b border-slate-100 overflow-x-auto scrollbar-none">
        {itinerary.dayPlans.map((plan: DayPlan) => (
          <button
            key={plan.day}
            type="button"
            onClick={() => setActiveDay(plan.day)}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border-b-2 ${
              activeDay === plan.day
                ? 'border-brand-600 text-brand-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Day {plan.day}: {plan.title.split(':')[0]}
          </button>
        ))}
      </div>

      {/* Day Schedule Timeline */}
      <div className="p-6">
        {itinerary.dayPlans
          .filter((plan: DayPlan) => plan.day === activeDay)
          .map((plan: DayPlan) => (
            <div key={plan.day} className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-600" />
                  <span>Day {plan.day}: {plan.title}</span>
                </h3>
                <span className="text-xs text-slate-500 font-medium">
                  {plan.schedule.length} Milestones Scheduled
                </span>
              </div>

              {/* Timeline list */}
              <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                {plan.schedule.map((item, idx: number) => (
                  <div key={idx} className="relative group">
                    {/* Timeline dot */}
                    <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-white border-2 border-brand-600 flex items-center justify-center text-[10px] font-bold text-brand-700 shadow-xs">
                      {idx + 1}
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200/90 bg-white hover:border-brand-300 hover:shadow-soft transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                        <span className="text-xs font-bold text-brand-700 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {item.time}
                        </span>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <span className="font-medium text-slate-700">Transit: {item.transportMode}</span>
                          <span>•</span>
                          <span className="font-semibold text-emerald-700">{item.estimatedCost}</span>
                        </div>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900">{item.activity}</h4>
                      
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.location}</span>
                      </div>

                      {item.tip && (
                        <div className="mt-2.5 p-2 rounded-lg bg-brand-50/60 border border-brand-100 text-[11px] text-brand-900 flex items-start gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                          <span><strong>Pro-Tip:</strong> {item.tip}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        {/* Practical tips footer inside itinerary */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
          <h4 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-brand-600" />
            Verified Regional Ground Tips for This Route
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside">
            {itinerary.practicalTips.map((tip: string, i: number) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
