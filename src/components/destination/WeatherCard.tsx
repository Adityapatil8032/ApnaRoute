import React from 'react';
import { CloudSun, Droplets, Wind, Calendar, AlertTriangle, ShieldCheck } from 'lucide-react';
import { WeatherInfo } from '../../types';

interface WeatherCardProps {
  weather: WeatherInfo;
  destinationName: string;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ weather, destinationName }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-soft">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-900">Weather & Seasonal Conditions</h3>
            <span className="text-[10px] font-semibold bg-sky-50 text-sky-700 px-2 py-0.5 rounded border border-sky-200">
              Verified Baseline
            </span>
          </div>
          <p className="text-xs text-slate-500">Climate patterns and travel suitability for {destinationName}</p>
        </div>

        {/* Temperature Badge */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-sky-50 to-blue-50 px-3.5 py-2 rounded-xl border border-sky-100">
          <CloudSun className="w-7 h-7 text-sky-500" />
          <div>
            <div className="text-lg font-extrabold text-slate-900 leading-none">{weather.temperature}</div>
            <div className="text-[11px] font-medium text-slate-600 mt-0.5">{weather.condition}</div>
          </div>
        </div>
      </div>

      {/* Grid of weather metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4 text-xs">
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
          <div className="flex items-center gap-1.5 text-slate-500 mb-1">
            <Droplets className="w-3.5 h-3.5 text-sky-500" />
            <span className="text-[11px] font-medium">Precipitation Risk</span>
          </div>
          <span className={`font-semibold ${
            weather.precipitationRisk === 'High' ? 'text-rose-600' :
            weather.precipitationRisk === 'Moderate' ? 'text-amber-600' : 'text-emerald-600'
          }`}>
            {weather.precipitationRisk} Risk
          </span>
        </div>

        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
          <div className="flex items-center gap-1.5 text-slate-500 mb-1">
            <Wind className="w-3.5 h-3.5 text-indigo-500" />
            <span className="text-[11px] font-medium">Air Quality (AQI)</span>
          </div>
          <span className="font-semibold text-slate-800">{weather.airQuality}</span>
        </div>

        <div className="col-span-2 sm:col-span-1 p-3 bg-slate-50 rounded-xl border border-slate-100">
          <div className="flex items-center gap-1.5 text-slate-500 mb-1">
            <Calendar className="w-3.5 h-3.5 text-brand-600" />
            <span className="text-[11px] font-medium">Prime Travel Window</span>
          </div>
          <span className="font-semibold text-slate-800 truncate block">{weather.bestMonths}</span>
        </div>
      </div>

      {/* Weather Advisory */}
      <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-2.5">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <h4 className="text-xs font-bold text-amber-900">Ground Travel Advisory</h4>
          <p className="text-xs text-amber-800/90 mt-0.5 leading-relaxed">{weather.advisory}</p>
        </div>
      </div>

      {/* Honest Disclaimer */}
      <div className="mt-3 flex items-center gap-1.5 text-[10px] text-slate-400">
        <ShieldCheck className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span>Meteorological baseline based on regional seasonal trends. OpenWeather API hook prepared for Phase 2.</span>
      </div>
    </div>
  );
};
