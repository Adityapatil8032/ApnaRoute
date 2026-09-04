import React from 'react';
import { AlertTriangle, Clock, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { TimingConflict } from '../../types';

interface ConflictDetectorProps {
  conflicts?: TimingConflict[];
  onAutoFix?: (conflictId: string) => void;
}

export const ConflictDetector: React.FC<ConflictDetectorProps> = ({
  conflicts,
  onAutoFix,
}) => {
  const sampleConflicts: TimingConflict[] = conflicts && conflicts.length > 0
    ? conflicts
    : [
        {
          id: 'conf-1',
          day: 2,
          timeSlot: '08:30 AM - 11:30 AM',
          conflictType: 'Buffer Deficit',
          description: 'Solang Valley cable car ticket slot booked at 09:30 AM, but morning snow-clearing on NH-3 causes average 45-min uphill delays.',
          suggestedFix: 'Advance departure from Old Manali to 07:45 AM or reschedule cable car slot to 10:30 AM.',
          severity: 'Warning'
        },
        {
          id: 'conf-2',
          day: 3,
          timeSlot: '01:30 PM - 03:00 PM',
          conflictType: 'Opening Hours Clash',
          description: 'Naggar Castle Art Gallery lunch visit overlaps with museum weekly preservation maintenance interval (1:00 PM - 2:00 PM).',
          suggestedFix: 'Switch Tripura Sundari temple walk first, then enter gallery at 02:15 PM.',
          severity: 'Caution'
        }
      ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-soft space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <span>Timing Conflict & Schedule Clash Detector</span>
              <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                AI Schedule Verification
              </span>
            </h3>
            <p className="text-xs text-slate-500">
              Validates road transit buffers, opening hours, and train/flight connection gaps
            </p>
          </div>
        </div>

        <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 self-start sm:self-auto">
          {sampleConflicts.length} Potential Clashes Flagged
        </span>
      </div>

      <div className="space-y-3">
        {sampleConflicts.map((c: TimingConflict) => (
          <div
            key={c.id}
            className="p-4 rounded-2xl border border-amber-200/90 bg-amber-50/40 hover:bg-amber-50/70 transition-colors space-y-2.5"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                Day {c.day} • {c.timeSlot} ({c.conflictType})
              </span>
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-amber-200 text-amber-900">
                {c.severity}
              </span>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed">
              {c.description}
            </p>

            <div className="p-2.5 rounded-xl bg-white border border-amber-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="flex items-start gap-1.5 text-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Recommended Fix:</strong> {c.suggestedFix}</span>
              </div>

              {onAutoFix && (
                <button
                  type="button"
                  onClick={() => onAutoFix(c.id)}
                  className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white font-bold text-[11px] rounded-lg shrink-0 transition-colors"
                >
                  Apply Auto-Fix
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
