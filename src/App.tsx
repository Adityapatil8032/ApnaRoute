import React, { useState, useEffect } from 'react';
import { PageRoute, Destination, GeneratedItinerary } from './types';
import { DESTINATIONS } from './data/destinations';
import { SAMPLE_ITINERARY_TEMPLATE } from './data/mockItinerary';
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

export function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [selectedDestination, setSelectedDestination] = useState<Destination>(DESTINATIONS[0]);
  const [plannerDestination, setPlannerDestination] = useState<string>('Manali');
  const [savedItineraries, setSavedItineraries] = useState<GeneratedItinerary[]>([SAMPLE_ITINERARY_TEMPLATE]);
  const [favorites, setFavorites] = useState<string[]>(['manali', 'ziro-valley']);

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

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
        onLoginClick={() => handleNavigate('landing')}
      />

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

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
