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

export type PageRoute = 
  | 'landing'
  | 'home'
  | 'destination-detail'
  | 'ai-planner'
  | 'explore'
  | 'my-trips'
  | 'services'
  | 'sustainable';
