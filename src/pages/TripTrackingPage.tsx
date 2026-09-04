import React, { useState } from 'react';
import { Navigation, ShieldAlert, AlertTriangle, CheckCircle2, Clock, Gauge, ArrowRight, Radio, PhoneCall } from 'lucide-react';
import { SAMPLE_TRACKING_WAYPOINTS, SAMPLE_SAFETY_METRICS } from '../data/advancedFeaturesData';
import { RouteWaypoint } from '../types';

interface TripTrackingPageProps {
  onOpenSOS?: () => void;
}

export const TripTrackingPage: React.FC<TripTrackingPageProps> = ({ onOpenSOS }) => {
  const [speed, setSpeed] = useState<number>(38);
  const [activeTab, setActiveTab] = useState<'tracking' | 'safety'>('tracking');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-2 border border-emerald-200">
            <Radio className="w-3.5 h-3.5 text-emerald-600 animate-ping" />
            <span>Active GPS Route Monitoring • Live Telemetry</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Live GPS Tracking & Route Safety Analysis
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time transit waypoints, high-altitude terrain warnings, speed pacing, and road safety indexes.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500">Route:</span>
            <span className="text-xs font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">
              Manali ➔ Atal Tunnel ➔ Sissu
            </span>
          </div>

          {onOpenSOS && (
            <button
              onClick={onOpenSOS}
              className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-sm shadow-rose-600/30 transition-colors"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>SOS Emergency</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Telemetry Status Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-soft">
          <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
            <Gauge className="w-4 h-4 text-brand-600" />
            <span>Vehicle Speed</span>
          </div>
          <div className="text-2xl font-black text-slate-900">{speed} km/h</div>
          <span className="text-[10px] text-emerald-600 font-semibold">Within 40 km/h hill speed limit</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-soft">
          <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
            <Navigation className="w-4 h-4 text-indigo-600" />
            <span>Current Elevation</span>
          </div>
          <div className="text-2xl font-black text-slate-900">2,480 m</div>
          <span className="text-[10px] text-indigo-600 font-semibold">Solang Valley plateau approach</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-soft">
          <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
            <Clock className="w-4 h-4 text-amber-600" />
            <span>Estimated Arrival</span>
          </div>
          <div className="text-2xl font-black text-slate-900">11:20 AM</div>
          <span className="text-[10px] text-amber-700 font-semibold">24.2 km remaining to Sissu</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-soft">
          <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
            <ShieldAlert className="w-4 h-4 text-emerald-600" />
            <span>Route Safety Score</span>
          </div>
          <div className="text-2xl font-black text-emerald-600">88 / 100</div>
          <span className="text-[10px] text-slate-500 font-medium">Low risk corridor today</span>
        </div>
      </div>

      {/* Main Content Grid: Waypoints on Left, Safety Radar on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Waypoints Timeline (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 shadow-soft space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Navigation className="w-4 h-4 text-brand-600" />
              <span>Transit Waypoints & Checkpoints</span>
            </h3>
            <span className="text-xs font-semibold text-slate-400">5 Monitored Milestones</span>
          </div>

          <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
            {SAMPLE_TRACKING_WAYPOINTS.map((wp: RouteWaypoint, idx: number) => (
              <div key={wp.id} className="relative">
                {/* Status Dot */}
                <div className={`absolute -left-6 top-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shadow-xs ${
                  wp.passed
                    ? 'bg-emerald-500 text-white'
                    : idx === 2
                    ? 'bg-brand-600 text-white ring-4 ring-brand-100'
                    : 'bg-white border-2 border-slate-300 text-slate-400'
                }`}>
                  {wp.passed ? '✓' : idx + 1}
                </div>

                <div className={`p-4 rounded-2xl border transition-all ${
                  idx === 2
                    ? 'bg-brand-50/50 border-brand-300 ring-1 ring-brand-500/20'
                    : 'bg-white border-slate-200'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="text-sm font-bold text-slate-900">{wp.name}</h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full self-start sm:self-auto ${
                      wp.safetyStatus === 'Normal' ? 'bg-emerald-100 text-emerald-800' :
                      wp.safetyStatus === 'Slow Traffic' ? 'bg-amber-100 text-amber-800' :
                      wp.safetyStatus === 'Landslide Hazard' ? 'bg-rose-100 text-rose-800' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {wp.safetyStatus}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-500 mt-2">
                    <span>Altitude: <strong className="text-slate-700">{wp.elevation}</strong></span>
                    <span>•</span>
                    <span>ETA: <strong className="text-slate-700">{wp.eta}</strong></span>
                    <span>•</span>
                    <span>Distance: <strong className="text-slate-700">{wp.distanceKm} km</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Route Safety Intelligence Card (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-900 text-white rounded-3xl p-6 space-y-5 shadow-card border border-slate-800">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wide flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-emerald-400" />
                Route Safety Assessment
              </span>
              <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                Live Sensor Feed
              </span>
            </div>

            {/* Weather Alert */}
            <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1">
              <span className="text-[10px] font-bold uppercase text-amber-400 block">Atmospheric Advisory</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {SAMPLE_SAFETY_METRICS.weatherAlert}
              </p>
            </div>

            {/* Terrain warning */}
            <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1">
              <span className="text-[10px] font-bold uppercase text-sky-400 block">Terrain & Gradient Warning</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {SAMPLE_SAFETY_METRICS.terrainWarning}
              </p>
            </div>

            {/* Night driving */}
            <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between text-xs">
              <span className="text-slate-300 font-medium">Night Driving Allowed:</span>
              <span className="font-bold text-rose-400 bg-rose-950/60 px-2.5 py-0.5 rounded border border-rose-800">
                Not Recommended (Fog)
              </span>
            </div>

            {/* Emergency Hospital */}
            <div className="pt-3 border-t border-slate-800 space-y-1 text-xs">
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Assigned Trauma & Recovery Unit</span>
              <p className="text-emerald-300 font-semibold">
                {SAMPLE_SAFETY_METRICS.emergencyContactNear}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
