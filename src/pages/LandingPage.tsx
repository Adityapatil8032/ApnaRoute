import React, { useState } from 'react';
import { Compass, Sparkles, ArrowRight, CheckCircle2, Car, CloudSun, Leaf, MapPin } from 'lucide-react';
import { PageRoute } from '../types';

interface LandingPageProps {
  onLogin: () => void;
  onNavigate: (page: PageRoute) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onLogin, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-28">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-brand-100/50 via-sky-50/30 to-transparent -z-10 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Value Proposition & Tagline */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* SIH 2026 Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold shadow-xs">
                <Compass className="w-3.5 h-3.5 text-brand-600 animate-spin" />
                <span>Smart India Hackathon 2026 • Travel & Tourism</span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                  APNA <span className="bg-gradient-to-r from-brand-600 to-cyan-600 bg-clip-text text-transparent">ROUTE</span>
                </h1>
                <p className="mt-2 text-xl sm:text-2xl font-bold text-slate-700 tracking-tight">
                  "Your Journey, Your Way."
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Most platforms sell tickets. <strong>APNA ROUTE</strong> empowers you with ground realities — real local transport availability, seasonal weather advisories, verified homestays, and sustainable off-beat gems before you pack your bags.
              </p>

              {/* Core differentiators pill checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Ground Transport Status (Cab, Auto, Bus)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>AI Route Planner with Practical Pacing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Honest Weather Advisories (No Fake Claims)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Promoting Lesser-Known Sustainable Gems</span>
                </div>
              </div>

              {/* Quick Guest Preview CTA for Evaluators */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  type="button"
                  onClick={onLogin}
                  className="w-full sm:w-auto px-7 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl shadow-md shadow-brand-600/30 flex items-center justify-center gap-2 transition-all hover:gap-3 cursor-pointer"
                >
                  <span>Explore Platform as Tourist</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('explore')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl border border-slate-200 shadow-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-brand-600" />
                  <span>Browse Indian Destinations</span>
                </button>
              </div>
            </div>

            {/* Right Column: Modern Travel Auth & Login Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl shadow-card border border-slate-200/90 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-cyan-500 text-white mx-auto flex items-center justify-center shadow-md shadow-brand-500/20 mb-3">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Sign in to APNA ROUTE</h2>
                  <p className="text-xs text-slate-500 mt-1">Unlock saved itineraries and personalized AI routes</p>
                </div>

                {/* Continue with Google Button */}
                <button
                  type="button"
                  onClick={onLogin}
                  className="w-full py-3 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 shadow-xs transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </button>

                {/* Divider */}
                <div className="relative my-5">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-3 bg-white text-slate-400 font-medium">Or continue with email</span>
                  </div>
                </div>

                {/* Email Form */}
                <form onSubmit={handleEmailSignIn} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tourist@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-semibold text-slate-700">
                        Password
                      </label>
                      <a href="#demo" onClick={(e) => { e.preventDefault(); onLogin(); }} className="text-[11px] text-brand-600 hover:underline">
                        Demo Login
                      </a>
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
                  >
                    Sign In to Dashboard
                  </button>
                </form>

                {/* SIH Note */}
                <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                  <p className="text-[11px] text-slate-400">
                    No credentials needed for SIH jury testing. Click either button to enter!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillars Highlight */}
      <section className="bg-white border-y border-slate-200/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Why Practical Travel Intelligence Matters
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Anticipating conditions beforehand eliminates vacation disruptions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-brand-600 flex items-center justify-center mb-3">
                <Car className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Transport Reality Checks</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Know if bike taxis are banned in hill towns or if taxis operate only on fixed prepaid counters before landing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-3">
                <CloudSun className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Climate & Advisory</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Clear guidelines on landslides, winter road blocks, and high-altitude gear checklists.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">AI Route Optimization</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Paces your day by real geographical transit times rather than unrealistic rushed bucket lists.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                <Leaf className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Sustainable Tourism</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Spotlight on village homestays, local artisan guilds, and lesser-visited ecological havens.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
