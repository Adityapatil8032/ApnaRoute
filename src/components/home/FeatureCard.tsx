import React from 'react';
import { CloudSun, Car, Bed, UtensilsCrossed, ArrowUpRight } from 'lucide-react';

export type FeatureType = 'Weather' | 'Transport' | 'Stay' | 'Food';

interface FeatureCardProps {
  type: FeatureType;
  title: string;
  description: string;
  metricBadge?: string;
  onClick: () => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  type,
  title,
  description,
  metricBadge,
  onClick,
}) => {
  const getCardDetails = () => {
    switch (type) {
      case 'Weather':
        return {
          icon: <CloudSun className="w-6 h-6 text-sky-500" />,
          bgGradient: 'from-sky-50/70 to-blue-50/40',
          borderColor: 'group-hover:border-sky-300',
          badgeColor: 'bg-sky-100 text-sky-700'
        };
      case 'Transport':
        return {
          icon: <Car className="w-6 h-6 text-brand-600" />,
          bgGradient: 'from-blue-50/70 to-indigo-50/40',
          borderColor: 'group-hover:border-brand-300',
          badgeColor: 'bg-blue-100 text-blue-700'
        };
      case 'Stay':
        return {
          icon: <Bed className="w-6 h-6 text-emerald-600" />,
          bgGradient: 'from-emerald-50/70 to-teal-50/40',
          borderColor: 'group-hover:border-emerald-300',
          badgeColor: 'bg-emerald-100 text-emerald-700'
        };
      case 'Food':
      default:
        return {
          icon: <UtensilsCrossed className="w-6 h-6 text-amber-600" />,
          bgGradient: 'from-amber-50/70 to-orange-50/40',
          borderColor: 'group-hover:border-amber-300',
          badgeColor: 'bg-amber-100 text-amber-700'
        };
    }
  };

  const details = getCardDetails();

  return (
    <div
      onClick={onClick}
      className={`group relative p-5 rounded-2xl bg-white border border-slate-200 shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer overflow-hidden ${details.borderColor}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${details.bgGradient} opacity-60 group-hover:opacity-100 transition-opacity`} />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="w-12 h-12 rounded-xl bg-white shadow-xs flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform">
            {details.icon}
          </div>
          {metricBadge && (
            <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${details.badgeColor}`}>
              {metricBadge}
            </span>
          )}
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
        </div>

        <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};
