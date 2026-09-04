import React from 'react';
import { Compass, Leaf, ShieldCheck, Heart } from 'lucide-react';
import { PageRoute } from '../../types';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                APNA <span className="text-brand-400">ROUTE</span>
              </span>
            </div>
            <p className="text-xs text-brand-300 font-medium">
              "Your Journey, Your Way."
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Smart Tourism Platform built for Smart India Hackathon (SIH 2026). Helping travelers discover destinations and understand practical on-ground conditions before visiting.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded-full">
                <Leaf className="w-3 h-3" /> SIH 2026 Prototype
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Explore & Plan
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('explore')}
                  className="hover:text-white transition-colors"
                >
                  Explore Destinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ai-planner')}
                  className="hover:text-white transition-colors"
                >
                  AI Trip Planner (Demo)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('my-trips')}
                  className="hover:text-white transition-colors"
                >
                  Saved Trips & Favourites
                </button>
              </li>
            </ul>
          </div>

          {/* Ground Services */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Ground Conditions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Local Transport Availability
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Verified Homestays & Stays
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Certified Local Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sustainable')}
                  className="hover:text-white transition-colors text-emerald-400"
                >
                  Sustainable & Hidden Gems
                </button>
              </li>
            </ul>
          </div>

          {/* Important Transparency Notice */}
          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/70 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              Honest Data Transparency
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              APNA ROUTE displays pre-verified regional operational baselines (cab union rules, seasonal terrain, permits). No fabricated "real-time" claims are made. Real-time GPS & state transport API pipelines are architected for Phase 2.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2026 APNA ROUTE. SIH 2026 Travel & Tourism Solution.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Indian Tourism
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
