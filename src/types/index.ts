export type TransportMode = 'Cab' | 'Bike Taxi' | 'Bus' | 'Train' | 'Auto' | 'Car/Bike Rental';

export type TransportStatus = 'Available' | 'Limited' | 'Not Available' | 'Data Unavailable';

export interface TransportOption {
  mode: TransportMode;
  status: TransportStatus;
  estimatedWait?: string;
  typicalCostRange?: string;
  notes: string;
}

export interface WeatherInfo {
  temperature: string;
  condition: string;
  precipitationRisk: 'Low' | 'Moderate' | 'High';
  airQuality: string;
  bestMonths: string;
  advisory: string;
  aqiValue?: number;
  humidity?: string;
  uvIndex?: string;
}

export interface AttractionPlace {
  id: string;
  name: string;
  description: string;
  entryFee: string;
  timings: string;
  transportAdvice: string;
  imageUrl?: string;
}

export interface LocalDelicacy {
  name: string;
  type: 'Veg' | 'Non-Veg' | 'Street Food' | 'Beverage';
  description: string;
  famousSpot: string;
}

export interface StayOption {
  name: string;
  category: 'Budget Homestay' | 'Eco-Resort' | 'Heritage Hotel' | 'Backpacker Hostel';
  priceRange: string;
  features: string[];
}

export interface LocalExperience {
  title: string;
  duration: string;
  vibe: string;
  sustainabilityNote: string;
}

// 4. Hyper-Local Map Radar Item
export interface RadarPlace {
  id: string;
  name: string;
  category: 'Hotels' | 'Food' | 'Buses' | 'Rickshaws' | 'Bazaars' | 'Hospitals' | 'Fuel';
  distance: string; // e.g. "450 m"
  rating?: number;
  status: 'Open 24/7' | 'Operational' | 'Closing Soon' | 'High Demand';
  landmark: string;
}

// 17. Heritage Intelligence
export interface HeritageIntel {
  historicalSignificance: string;
  architecturalStyle: string;
  culturalEtiquette: string[];
  recommendedDressCode: string;
  photographyRules: string;
  localDialectGreeting: {
    phrase: string;
    meaning: string;
  };
}

// 15. Reviews & AI Sentiment
export interface SentimentAnalysis {
  overallScore: number; // e.g. 94%
  totalReviewsAnalyzed: number;
  aiHighlights: string[];
  reportedGroundIssues: string[];
}

// 2. Season-Wise Planning Data
export interface SeasonInfo {
  season: 'Winter' | 'Summer' | 'Monsoon' | 'Autumn';
  months: string;
  avgTemp: string;
  highlights: string;
  roadAccessibility: 'Full Access' | 'Chains Recommended' | 'Landslide Caution' | 'Pleasant';
  packingMustHaves: string[];
}

export interface Destination {
  id: string;
  name: string;
  state: string;
  tagline: string;
  category: 'Nature' | 'Beaches' | 'Historical' | 'Religious' | 'Adventure' | 'Culture' | 'Food' | 'Shopping' | 'Hidden Gems';
  rating: number;
  reviewsCount: number;
  heroImage: string;
  overview: string;
  bestSeason: string;
  isHiddenGem?: boolean;
  ecoScore?: number; // out of 100
  weather: WeatherInfo;
  transport: TransportOption[];
  placesToExplore: AttractionPlace[];
  food: LocalDelicacy[];
  stays: StayOption[];
  localExperiences: LocalExperience[];
  radarPlaces?: RadarPlace[];
  heritageIntel?: HeritageIntel;
  sentiment?: SentimentAnalysis;
  seasonGuides?: SeasonInfo[];
}

export interface DayPlan {
  day: number;
  title: string;
  schedule: {
    time: string;
    activity: string;
    location: string;
    transportMode: string;
    estimatedCost: string;
    tip?: string;
  }[];
}

// 11. Timing Conflict
export interface TimingConflict {
  id: string;
  day: number;
  timeSlot: string;
  conflictType: 'Buffer Deficit' | 'Opening Hours Clash' | 'Transit Delay Risk';
  description: string;
  suggestedFix: string;
  severity: 'Warning' | 'Caution';
}

export interface GeneratedItinerary {
  id: string;
  tripTitle: string;
  destination: string;
  days: number;
  budgetLevel: string;
  interests: string[];
  preferredTransport: string;
  accommodationType: string;
  totalEstimatedBudget: string;
  summary: string;
  dayPlans: DayPlan[];
  practicalTips: string[];
  timingConflicts?: TimingConflict[];
}

export interface TravelService {
  id: string;
  name: string;
  category: 'Hotels' | 'Restaurants' | 'Local Guides' | 'Transport' | 'Rentals' | 'Activities';
  destinationName: string;
  rating: number;
  priceRange: string;
  contactOrLocation: string;
  verified: boolean;
  features: string[];
  description: string;
}

export interface SustainableInitiative {
  id: string;
  title: string;
  category: 'Local Businesses' | 'Lesser-Known Destinations' | 'Eco-Friendly Travel' | 'Responsible Tourism';
  impactSummary: string;
  actionableTip: string;
  location?: string;
}

// 8. Connect Travelers
export interface TravelerMatch {
  id: string;
  name: string;
  avatar: string;
  destination: string;
  travelDates: string;
  budget: 'Budget' | 'Moderate' | 'Flexible';
  travelStyle: 'Backpacker' | 'Culture & Food' | 'Adventure Trekker' | 'Relaxed';
  seeking: string; // e.g. "Looking for 2 people to share a cab to Atal Tunnel & Sissu"
  verifiedBadge: boolean;
  compatibilityScore: number;
}

// 5 & 6. GPS Route Tracking & Safety
export interface RouteWaypoint {
  id: string;
  name: string;
  elevation: string;
  eta: string;
  distanceKm: number;
  safetyStatus: 'Normal' | 'Slow Traffic' | 'Narrow Hill Pass' | 'Landslide Hazard';
  passed: boolean;
}

export interface RouteSafetyMetric {
  overallSafetyScore: number; // 0-100
  hazardLevel: 'Low' | 'Moderate' | 'Elevated';
  weatherAlert?: string;
  terrainWarning?: string;
  nightDrivingSafe: boolean;
  emergencyContactNear: string;
}

// 19. Smart Notifications
export interface SmartNotification {
  id: string;
  type: 'weather' | 'safety' | 'route' | 'itinerary' | 'sos';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  isRead?: boolean;
  priority: 'high' | 'medium' | 'low';
}

// 18. AI Concierge Message
export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestions?: string[];
}

export type PageRoute = 
  | 'landing'
  | 'home'
  | 'destination-detail'
  | 'ai-planner'
  | 'explore'
  | 'my-trips'
  | 'services'
  | 'sustainable'
  | 'connect-travelers'
  | 'trip-tracking';
