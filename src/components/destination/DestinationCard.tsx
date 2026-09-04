import React from 'react';
import { Star, MapPin, Sparkles, Heart, ArrowRight, Compass } from 'lucide-react';
import { Destination, TransportOption } from '../../types';

interface DestinationCardProps {
  destination: Destination;
  onSelect: (destination: Destination) => void;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string, e: React.MouseEvent) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onSelect,
  isFavorite = false,
  onToggleFavorite,
}) => {
  return (
    <div
      onClick={() => onSelect(destination)}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Destination Image Banner */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

        {/* Category & Hidden Gem Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-slate-800 backdrop-blur-md shadow-xs">
            {destination.category}
          </span>
          {destination.isHiddenGem && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-600/95 text-white backdrop-blur-md shadow-xs flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Hidden Gem
            </span>
          )}
        </div>

        {/* Favorite Button */}
        {onToggleFavorite && (
          <button
            type="button"
            onClick={(e: React.MouseEvent) => onToggleFavorite(destination.id, e)}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white text-slate-700 backdrop-blur-md shadow-xs transition-colors group/btn"
            aria-label="Save destination to favorites"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isFavorite ? 'fill-rose-500 text-rose-500' : 'text-slate-600 group-hover/btn:text-rose-500'
              }`}
            />
          </button>
        )}

        {/* Bottom overlay inside image: Location & Rating */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
          <div>
            <div className="flex items-center gap-1 text-xs text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              <span>{destination.state}</span>
            </div>
            <h3 className="text-lg font-bold tracking-tight text-white drop-shadow-xs">
              {destination.name}
            </h3>
          </div>
          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-semibold">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>{destination.rating}</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
            {destination.overview}
          </p>

          {/* Practical highlights */}
          <div className="grid grid-cols-2 gap-2 py-2 border-y border-slate-100 text-[11px] text-slate-600">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-semibold">Season</span>
              <span className="font-medium truncate block">{destination.bestSeason.split('(')[0]}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-semibold">Transport</span>
              <span className="font-medium text-brand-700 block">
                {destination.transport.filter((t: TransportOption) => t.status === 'Available').length} Modes Ready
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-brand-600 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5" /> Check Ground Conditions
          </span>
          <div className="w-7 h-7 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
