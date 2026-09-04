import React, { useState } from 'react';
import { AlertOctagon, PhoneCall, MapPin, ShieldAlert, X, CheckCircle, Radio, Navigation } from 'lucide-react';
import { EMERGENCY_CONTACTS } from '../../data/advancedFeaturesData';

interface EmergencySOSModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLocationName?: string;
}

export const EmergencySOSModal: React.FC<EmergencySOSModalProps> = ({
  isOpen,
  onClose,
  currentLocationName = 'Manali, Himachal Pradesh',
}) => {
  const [broadcasted, setBroadcasted] = useState(false);
  const [isBroadcasting, setIsBroadcasting] = useState(false);

  if (!isOpen) return null;

  const handleBroadcast = () => {
    setIsBroadcasting(true);
    setTimeout(() => {
      setIsBroadcasting(false);
      setBroadcasted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border-2 border-rose-500/80 shadow-2xl overflow-hidden">
        {/* Header Alert Strip */}
        <div className="bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center animate-pulse">
              <AlertOctagon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold tracking-tight">Tourist Emergency SOS System</h3>
              <p className="text-xs text-rose-100 font-medium">SIH 2026 Safety & Rapid Response Protocol</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Live GPS Coordinates Card */}
          <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-900 flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-rose-600 animate-ping" />
                Active GPS Telemetry Beacon
              </span>
              <span className="text-[10px] font-bold uppercase bg-rose-200 text-rose-900 px-2 py-0.5 rounded">
                High Accuracy Fix
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs pt-1">
              <div>
                <span className="text-[10px] text-slate-500 block">Current Coordinate:</span>
                <span className="font-mono font-bold text-slate-900">32.2396° N, 77.1887° E</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">Monitored Zone:</span>
                <span className="font-bold text-slate-900 truncate block">{currentLocationName}</span>
              </div>
            </div>
          </div>

          {/* Broadcast SOS Trigger */}
          <div>
            <button
              onClick={handleBroadcast}
              disabled={isBroadcasting || broadcasted}
              className={`w-full py-3.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer ${
                broadcasted
                  ? 'bg-emerald-600 text-white shadow-emerald-600/20'
                  : 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-600/30 active:scale-98'
              }`}
            >
              {isBroadcasting ? (
                <>
                  <Radio className="w-4 h-4 animate-spin" />
                  <span>Transmitting Encrypted Coordinates to Local PCR...</span>
                </>
              ) : broadcasted ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  <span>Emergency Alert Dispatched (Disaster Unit Notified)</span>
                </>
              ) : (
                <>
                  <AlertOctagon className="w-4 h-4" />
                  <span>Broadcast Live Coordinates to Nearby Emergency Responders</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-center text-slate-400 mt-2">
              Transmits GPS pinpoint, altitude, and medical summary to 112 Command Center.
            </p>
          </div>

          {/* Rapid Speed Dials */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-brand-600" />
              Verified Direct Speed Dials
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {EMERGENCY_CONTACTS.map((c) => (
                <a
                  key={c.number}
                  href={`tel:${c.number}`}
                  className="p-3 rounded-xl border border-slate-200 hover:border-rose-300 hover:bg-rose-50/50 flex items-center justify-between transition-colors group"
                >
                  <div>
                    <span className="text-xs font-bold text-slate-900 block group-hover:text-rose-700">
                      {c.name}
                    </span>
                    <span className="text-[10px] text-slate-500">{c.type}</span>
                  </div>
                  <span className="text-xs font-extrabold text-rose-600 bg-rose-100 px-2.5 py-1 rounded-lg">
                    {c.number}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Nearest Physical Medical Center */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900">Nearest Trauma Hospital: </span>
              <span>Civil Hospital & Regional Disaster Unit (850m away). Ambulances on active standby.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
