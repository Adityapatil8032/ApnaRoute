import React from 'react';
import { Car, Bike, Bus, Train, CircleDot, KeyRound, Info } from 'lucide-react';
import { TransportOption, TransportMode } from '../../types';
import { Badge } from '../common/Badge';

interface TransportCardProps {
  transportList: TransportOption[];
  destinationName: string;
}

export const TransportCard: React.FC<TransportCardProps> = ({
  transportList,
  destinationName,
}) => {
  const getModeIcon = (mode: TransportMode) => {
    switch (mode) {
      case 'Cab':
        return <Car className="w-5 h-5 text-brand-600" />;
      case 'Bike Taxi':
        return <Bike className="w-5 h-5 text-indigo-600" />;
      case 'Bus':
        return <Bus className="w-5 h-5 text-blue-600" />;
      case 'Train':
        return <Train className="w-5 h-5 text-amber-600" />;
      case 'Auto':
        return <CircleDot className="w-5 h-5 text-emerald-600" />;
      case 'Car/Bike Rental':
        return <KeyRound className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-soft">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-900">Local Transport Ground Availability</h3>
            <span className="text-[10px] font-semibold bg-brand-50 text-brand-700 px-2 py-0.5 rounded border border-brand-200">
              6 Modes Evaluated
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Real operating conditions & regulation rules for {destinationName}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-400 font-medium">Readiness:</span>
          <span className="font-bold text-emerald-600">
            {transportList.filter((t: TransportOption) => t.status === 'Available').length} of {transportList.length} Active
          </span>
        </div>
      </div>

      {/* Grid of Transport Modes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-4">
        {transportList.map((item: TransportOption) => (
          <div
            key={item.mode}
            className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-white hover:border-brand-200 hover:shadow-xs transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 shadow-xs flex items-center justify-center">
                    {getModeIcon(item.mode)}
                  </div>
                  <span className="font-semibold text-sm text-slate-900">{item.mode}</span>
                </div>
                <Badge status={item.status} />
              </div>

              {/* Wait time & Fare range if available */}
              {(item.estimatedWait || item.typicalCostRange) && (
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-500 mb-2">
                  {item.estimatedWait && (
                    <span>
                      <strong className="text-slate-700">Wait:</strong> {item.estimatedWait}
                    </span>
                  )}
                  {item.typicalCostRange && (
                    <span>
                      <strong className="text-slate-700">Fare:</strong> {item.typicalCostRange}
                    </span>
                  )}
                </div>
              )}

              {/* Contextual Notes */}
              <p className="text-xs text-slate-600 leading-relaxed bg-white/80 p-2 rounded-lg border border-slate-100/80">
                {item.notes}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Architecture Disclaimer - Zero fake real-time claim */}
      <div className="p-3.5 rounded-xl bg-slate-100/80 border border-slate-200 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
        <div className="text-xs text-slate-600 leading-relaxed">
          <strong className="text-slate-800">Ground Status Baseline:</strong> Transport statuses reflect published union rates, municipal restrictions, and operational terrain rules. Live fleet GPS telemetry and IRCTC/State-Bus API hooks are architected for integration in Phase 2.
        </div>
      </div>
    </div>
  );
};
