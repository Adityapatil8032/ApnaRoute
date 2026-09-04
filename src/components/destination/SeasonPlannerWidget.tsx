import React, { useState } from 'react';
import { Snowflake, Sun, CloudRain, Wind, AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react';
import { SeasonInfo } from '../../types';

interface SeasonPlannerWidgetProps {
  seasonGuides?: SeasonInfo[];
  destinationName: string;
}

export const SeasonPlannerWidget: React.FC<SeasonPlannerWidgetProps> = ({
  seasonGuides,
  destinationName,
}) => {
  const defaultGuides: SeasonInfo[] = seasonGuides && seasonGuides.length > 0
    ? seasonGuides
    : [
        {
          season: 'Winter',
          months: 'Dec - Feb',
          avgTemp: '4°C to 12°C',
          highlights: 'Crisp blue skies, snowcapped mountain panoramas, tranquil temple aartis.',
          roadAccessibility: 'Chains Recommended',
          packingMustHaves: ['Thermal thermals', 'Windproof jacket', 'Woolen cap', 'Lip balm']
        },
        {
          season: 'Summer',
          months: 'Mar - Jun',
          avgTemp: '18°C to 28°C',
          highlights: 'Ideal sightseeing weather, outdoor trails, vibrant local festivals.',
          roadAccessibility: 'Full Access',
          packingMustHaves: ['Cotton shirts', 'Sunscreen SPF 50', 'Sunglasses', 'Hydration bottle']
        },
        {
          season: 'Monsoon',
          months: 'Jul - Sep',
          avgTemp: '20°C to 25°C',
          highlights: 'Lush green valleys, mist-covered hills, dramatic roaring waterfalls.',
          roadAccessibility: 'Landslide Caution',
          packingMustHaves: ['Waterproof poncho', 'Non-slip hiking shoes', 'Quick-dry clothes', 'Waterproof backpack cover']
        },
        {
          season: 'Autumn',
          months: 'Oct - Nov',
          avgTemp: '10°C to 20°C',
          highlights: 'Golden tree foliage, calm lakes, post-monsoon clearest visibility.',
          roadAccessibility: 'Pleasant',
          packingMustHaves: ['Light fleece', 'Camera lenses', 'Walking shoes', 'Moisturizer']
        }
      ];

  const [activeSeason, setActiveSeason] = useState<'Winter' | 'Summer' | 'Monsoon' | 'Autumn'>('Winter');

  const getSeasonIcon = (season: string) => {
    switch (season) {
      case 'Winter':
        return <Snowflake className="w-4 h-4 text-sky-500" />;
      case 'Summer':
        return <Sun className="w-4 h-4 text-amber-500" />;
      case 'Monsoon':
        return <CloudRain className="w-4 h-4 text-blue-500" />;
      case 'Autumn':
      default:
        return <Wind className="w-4 h-4 text-orange-500" />;
    }
  };

  const current = defaultGuides.find((g: SeasonInfo) => g.season === activeSeason) || defaultGuides[0];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-soft space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-900">Season-Wise Planning & Accessibility</h3>
            <span className="text-[10px] font-bold uppercase bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200">
              Year-Round Guide
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Compare weather windows, terrain difficulty, and highlights across all 4 Indian seasons for {destinationName}
          </p>
        </div>
      </div>

      {/* Season Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {defaultGuides.map((g: SeasonInfo) => {
          const isSelected = activeSeason === g.season;
          return (
            <button
              key={g.season}
              type="button"
              onClick={() => setActiveSeason(g.season)}
              className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                isSelected
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                {getSeasonIcon(g.season)}
              </div>
              <div>
                <span className="text-xs font-bold block">{g.season}</span>
                <span className="text-[10px] opacity-70 block">{g.months}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Season Details Card */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50/30 border border-slate-200/80 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              {getSeasonIcon(current.season)}
              <span>{current.season} Season ({current.months}) in {destinationName}</span>
            </h4>
            <p className="text-xs text-slate-600 mt-1">{current.highlights}</p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <div className="text-right">
              <span className="text-[10px] text-slate-400 font-bold block">Avg. Temp</span>
              <span className="text-sm font-black text-slate-900">{current.avgTemp}</span>
            </div>
            <span className={`text-xs font-bold px-3 py-1 rounded-xl border ${
              current.roadAccessibility === 'Full Access' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
              current.roadAccessibility === 'Landslide Caution' ? 'bg-rose-50 text-rose-700 border-rose-200' :
              'bg-amber-50 text-amber-700 border-amber-200'
            }`}>
              {current.roadAccessibility}
            </span>
          </div>
        </div>

        {/* Packing recommendations */}
        <div className="pt-3 border-t border-slate-200/60">
          <span className="text-xs font-bold text-slate-800 block mb-2">
            Seasonal Packing Essentials:
          </span>
          <div className="flex flex-wrap gap-2">
            {current.packingMustHaves.map((item: string, i: number) => (
              <span
                key={i}
                className="text-xs bg-white text-slate-700 font-medium px-3 py-1 rounded-lg border border-slate-200 shadow-2xs flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
