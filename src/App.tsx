import React, { useState, useEffect } from 'react';
import { PageRoute, Destination, GeneratedItinerary, SmartNotification } from './types';
import { DESTINATIONS } from './data/destinations';
import { SAMPLE_ITINERARY_TEMPLATE } from './data/mockItinerary';
import { INITIAL_NOTIFICATIONS } from './data/advancedFeaturesData';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { LandingPage } from './pages/LandingPage';
import { HomePage } from './pages/HomePage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { AITripPlannerPage } from './pages/AITripPlannerPage';
import { ExplorePage } from './pages/ExplorePage';
import { MyTripsPage } from './pages/MyTripsPage';
import { ServicesPage } from './pages/ServicesPage';
import { SustainableTourismPage } from './pages/SustainableTourismPage';
import { ConnectTravelersPage } from './pages/ConnectTravelersPage';
import { TripTrackingPage } from './pages/TripTrackingPage';
import { EmergencySOSModal } from './components/safety/EmergencySOSModal';
import { AIConciergeModal } from './components/ai/AIConciergeModal';
import { NotificationDrawer } from './components/common/NotificationDrawer';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [selectedDestination, setSelectedDestination] = useState<Destination>(DESTINATIONS[0]);
  const [plannerDestination, setPlannerDestination] = useState<string>('Manali');
  const [savedItineraries, setSavedItineraries] = useState<GeneratedItinerary[]>([SAMPLE_ITINERARY_TEMPLATE]);
  const [favorites, setFavorites] = useState<string[]>(['manali', 'ziro-valley']);
  const [isSOSOpen, setIsSOSOpen] = useState<boolean>(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<SmartNotification[]>(INITIAL_NOTIFICATIONS);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedDestination]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('landing');
  };

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
  };

  const handleSelectDestination = (dest: Destination) => {
    setSelectedDestination(dest);
    setCurrentPage('destination-detail');
  };

  const handlePlanTripWithDestination = (destName: string) => {
    setPlannerDestination(destName);
    setCurrentPage('ai-planner');
  };

  const handleToggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev: string[]) =>
      prev.includes(id) ? prev.filter((item: string) => item !== id) : [...prev, id]
    );
  };

  const handleSaveTrip = (itinerary: GeneratedItinerary) => {
    if (!savedItineraries.some((i: GeneratedItinerary) => i.id === itinerary.id)) {
      setSavedItineraries((prev: GeneratedItinerary[]) => [itinerary, ...prev]);
    }
  };

  const handleDeleteItinerary = (id: string) => {
    setSavedItineraries((prev: GeneratedItinerary[]) => prev.filter((i: GeneratedItinerary) => i.id !== id));
  };

  const handleMarkAllNotificationsRead = () => {
    setNotifications((prev: SmartNotification[]) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const handleDismissNotification = (id: string) => {
    setNotifications((prev: SmartNotification[]) => prev.filter((n) => n.id !== id));
  };

  const unreadNotificationsCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans relative">
      {/* Top Navigation */}
      <div className="relative">
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          isAuthenticated={isAuthenticated}
          onLogout={handleLogout}
          onLoginClick={() => handleNavigate('landing')}
          onOpenSOS={() => setIsSOSOpen(true)}
          onToggleNotifications={() => setIsNotificationsOpen((prev) => !prev)}
          unreadNotificationsCount={unreadNotificationsCount}
        />

        {/* Floating Notification Drawer Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <NotificationDrawer
            isOpen={isNotificationsOpen}
            onClose={() => setIsNotificationsOpen(false)}
            notifications={notifications}
            onMarkAllRead={handleMarkAllNotificationsRead}
            onDismiss={handleDismissNotification}
          />
        </div>
      </div>

      {/* Main Page Routing Switch */}
      <main className="flex-1">
        {currentPage === 'landing' && (
          <LandingPage
            onLogin={handleLogin}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectDestination={handleSelectDestination}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {currentPage === 'destination-detail' && (
          <DestinationDetailPage
            destination={selectedDestination}
            onBack={() => handleNavigate('home')}
            onNavigate={handleNavigate}
            onPlanTripWithDestination={handlePlanTripWithDestination}
            isFavorite={favorites.includes(selectedDestination.id)}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {currentPage === 'ai-planner' && (
          <AITripPlannerPage
            initialDestination={plannerDestination}
            onSaveTrip={handleSaveTrip}
            savedTripIds={savedItineraries.map((i: GeneratedItinerary) => i.id)}
          />
        )}

        {currentPage === 'explore' && (
          <ExplorePage
            onSelectDestination={handleSelectDestination}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {currentPage === 'connect-travelers' && (
          <ConnectTravelersPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'trip-tracking' && (
          <TripTrackingPage
            onOpenSOS={() => setIsSOSOpen(true)}
          />
        )}

        {currentPage === 'my-trips' && (
          <MyTripsPage
            savedItineraries={savedItineraries}
            favoriteIds={favorites}
            onSelectDestination={handleSelectDestination}
            onToggleFavorite={handleToggleFavorite}
            onDeleteItinerary={handleDeleteItinerary}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage />
        )}

        {currentPage === 'sustainable' && (
          <SustainableTourismPage
            onSelectDestination={handleSelectDestination}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Global Modals & Float Widgets */}
      <EmergencySOSModal
        isOpen={isSOSOpen}
        onClose={() => setIsSOSOpen(false)}
        currentLocationName={selectedDestination ? `${selectedDestination.name}, ${selectedDestination.state}` : 'Manali, Himachal Pradesh'}
      />

      <AIConciergeModal />

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
