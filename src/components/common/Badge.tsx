import React from 'react';
import { TransportStatus } from '../../types';

interface BadgeProps {
  status: TransportStatus | string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ status, className = '' }) => {
  const getBadgeStyle = () => {
    switch (status) {
      case 'Available':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 ring-1 ring-emerald-500/20';
      case 'Limited':
        return 'bg-amber-50 text-amber-700 border-amber-200 ring-1 ring-amber-500/20';
      case 'Not Available':
        return 'bg-rose-50 text-rose-700 border-rose-200 ring-1 ring-rose-500/20';
      case 'Data Unavailable':
        return 'bg-slate-100 text-slate-600 border-slate-200 ring-1 ring-slate-400/20';
      default:
        return 'bg-blue-50 text-blue-700 border-blue-200 ring-1 ring-blue-500/20';
    }
  };

  const getDotColor = () => {
    switch (status) {
      case 'Available':
        return 'bg-emerald-500';
      case 'Limited':
        return 'bg-amber-500';
      case 'Not Available':
        return 'bg-rose-500';
      case 'Data Unavailable':
        return 'bg-slate-400';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border transition-colors ${getBadgeStyle()} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${getDotColor()}`} />
      {status}
    </span>
  );
};
