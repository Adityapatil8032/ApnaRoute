import React, { useState } from 'react';
import { Compass, Menu, X, User, Heart, Sparkles, LogOut, Leaf, Bell, AlertOctagon, Navigation, Users } from 'lucide-react';
import { PageRoute } from '../../types';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  isAuthenticated: boolean;
  onLogout: () => void;
  onLoginClick: () => void;
  onOpenSOS?: () => void;
  onToggleNotifications?: () => void;
  unreadNotificationsCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  isAuthenticated,
  onLogout,
  onLoginClick,
  onOpenSOS,
  onToggleNotifications,
  unreadNotificationsCount = 0,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const navItems: { label: string; page: PageRoute; icon?: React.ReactNode }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Explore', page: 'explore' },
    { label: 'AI Planner', page: 'ai-planner', icon: <Sparkles className="w-3.5 h-3.5 text-amber-500" /> },
    { label: 'GPS Tracking', page: 'trip-tracking', icon: <Navigation className="w-3.5 h-3.5 text-brand-500" /> },
    { label: 'Connect', page: 'connect-travelers', icon: <Users className="w-3.5 h-3.5 text-purple-500" /> },
    { label: 'My Trips', page: 'my-trips' },
    { label: 'Services', page: 'services' },
    { label: 'Eco', page: 'sustainable', icon: <Leaf className="w-3.5 h-3.5 text-emerald-500" /> },
  ];

  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Tagline */}
          <div
            onClick={() => handleNav(isAuthenticated ? 'home' : 'landing')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 via-brand-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  APNA <span className="text-brand-600">ROUTE</span>
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] uppercase font-semibold bg-brand-50 text-brand-700 border border-brand-200 rounded">
                  SIH 2026
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                Your Journey, Your Way.
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          {isAuthenticated ? (
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <button
                    key={item.page}
                    onClick={() => handleNav(item.page)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-brand-50 text-brand-700 font-semibold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                );
              })}
            </nav>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2.5 py-1 rounded-full">
                Smart Tourism Platform
              </span>
            </div>
          )}

          {/* Right Action / Profile & Utility Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {isAuthenticated && (
              <>
                {/* Emergency SOS Trigger Button */}
                <button
                  onClick={onOpenSOS}
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-md shadow-rose-600/20 transition-all active:scale-95"
                  title="Emergency SOS 112 Radar"
                >
                  <AlertOctagon className="w-3.5 h-3.5 animate-pulse" />
                  <span className="hidden sm:inline">SOS</span>
                </button>

                {/* Smart Notifications Bell Button */}
                <button
                  onClick={onToggleNotifications}
                  className="relative p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  title="Smart Route & Weather Notifications"
                  aria-label="Notifications"
                >
                  <Bell className="w-4 h-4" />
                  {unreadNotificationsCount > 0 && (
                    <span className="absolute top-1 right-1 w-4 h-4 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                      {unreadNotificationsCount}
                    </span>
                  )}
                </button>
              </>
            )}

            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2.5 p-1.5 pr-3 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors focus:outline-none"
                  aria-label="User Profile"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                    AP
                  </div>
                  <span className="text-xs font-semibold text-slate-700 hidden sm:inline-block">
                    Aditya (Tourist)
                  </span>
                </button>

                {/* Profile Dropdown */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-card border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-xs font-semibold text-slate-900">Aditya Patil</p>
                      <p className="text-[11px] text-slate-500 truncate">aditya.tourist@sih2026.in</p>
                    </div>
                    <button
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        handleNav('my-trips');
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 text-left font-medium"
                    >
                      <Heart className="w-4 h-4 text-rose-500" />
                      Saved Trips & Favorites
                    </button>
                    <button
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        handleNav('landing');
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 text-left font-medium"
                    >
                      <User className="w-4 h-4 text-brand-500" />
                      View Landing & Intro
                    </button>
                    <div className="border-t border-slate-100 my-1"></div>
                    <button
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        onLogout();
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 text-left font-medium"
                    >
                      <LogOut className="w-4 h-4 text-rose-600" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={onLoginClick}
                  className="px-4 py-2 text-xs sm:text-sm font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 rounded-lg transition-colors border border-brand-200"
                >
                  Sign In
                </button>
                <button
                  onClick={onLoginClick}
                  className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg shadow-sm shadow-brand-500/20 transition-colors"
                >
                  Get Started
                </button>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            {isAuthenticated && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && isAuthenticated && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive
                    ? 'bg-brand-50 text-brand-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">Logged in as Aditya</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onLogout();
              }}
              className="text-xs font-semibold text-rose-600 hover:underline"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
