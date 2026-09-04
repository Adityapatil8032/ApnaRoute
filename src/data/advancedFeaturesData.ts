import { TravelerMatch, SmartNotification, RouteWaypoint, RouteSafetyMetric } from '../types';

export const TRAVELER_MATCHES: TravelerMatch[] = [
  {
    id: 'tm-1',
    name: 'Priya Sharma & Ananya',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    destination: 'Manali, Himachal Pradesh',
    travelDates: 'Oct 12 - Oct 16, 2026',
    budget: 'Moderate',
    travelStyle: 'Adventure Trekker',
    seeking: 'Looking for 2 co-travelers to share a 4x4 SUV from Manali to Atal Tunnel & Sissu waterfall to split cab union fare.',
    verifiedBadge: true,
    compatibilityScore: 96,
  },
  {
    id: 'tm-2',
    name: 'Rohan Mehra',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    destination: 'Hampi, Karnataka',
    travelDates: 'Nov 04 - Nov 07, 2026',
    budget: 'Budget',
    travelStyle: 'Backpacker',
    seeking: 'Solo backpacker exploring boulder cycling trails and Matanga hill sunrise. Looking for cycling buddies to explore ruins safely.',
    verifiedBadge: true,
    compatibilityScore: 91,
  },
  {
    id: 'tm-3',
    name: 'Kavita Das',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    destination: 'Varanasi, Uttar Pradesh',
    travelDates: 'Oct 22 - Oct 25, 2026',
    budget: 'Flexible',
    travelStyle: 'Culture & Food',
    seeking: 'Planning an early morning wooden rowboat ghat tour and Banarasi silk weaver atelier visit. Happy to team up with culture enthusiasts.',
    verifiedBadge: true,
    compatibilityScore: 88,
  },
  {
    id: 'tm-4',
    name: 'Arjun & Vikram',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    destination: 'Ziro Valley, Arunachal Pradesh',
    travelDates: 'Nov 18 - Nov 23, 2026',
    budget: 'Budget',
    travelStyle: 'Backpacker',
    seeking: 'Hiring a shared Sumo from Naharlagun to Ziro. Looking for fellow photographers interested in Apatani bamboo village life.',
    verifiedBadge: true,
    compatibilityScore: 94,
  }
];

export const INITIAL_NOTIFICATIONS: SmartNotification[] = [
  {
    id: 'notif-1',
    type: 'safety',
    title: 'Terrain Advisory: Atal Tunnel North Portal',
    message: 'Black ice detected on early morning switchbacks between Solang & South Portal. Cab speeds restricted to 30 km/h.',
    timestamp: '10 mins ago',
    read: false,
    priority: 'high',
  },
  {
    id: 'notif-2',
    type: 'weather',
    title: 'Afternoon Mist Advisory in Munnar',
    message: 'Heavy fog predicted after 3:30 PM along Top Station road. Visibility expected below 50 meters.',
    timestamp: '45 mins ago',
    read: false,
    priority: 'medium',
  },
  {
    id: 'notif-3',
    type: 'itinerary',
    title: 'Schedule Conflict Auto-Resolved',
    message: 'Added 40-minute buffer before your Dashashwamedh Aarti boat ride due to Godowlia bazaar foot traffic.',
    timestamp: '2 hours ago',
    read: true,
    priority: 'low',
  },
  {
    id: 'notif-4',
    type: 'sos',
    title: 'Local Emergency Network Verified',
    message: 'Nearby hospital and 24/7 mountain trauma center mapped for your active route.',
    timestamp: '5 hours ago',
    read: true,
    priority: 'low',
  }
];

export const SAMPLE_TRACKING_WAYPOINTS: RouteWaypoint[] = [
  {
    id: 'wp-1',
    name: 'Mall Road Central Taxi Terminal',
    elevation: '2,050 m',
    eta: '09:00 AM',
    distanceKm: 0,
    safetyStatus: 'Normal',
    passed: true,
  },
  {
    id: 'wp-2',
    name: 'Palchan River Bridge Checkpost',
    elevation: '2,210 m',
    eta: '09:35 AM',
    distanceKm: 9.2,
    safetyStatus: 'Normal',
    passed: true,
  },
  {
    id: 'wp-3',
    name: 'Solang Valley Ropeway Junction',
    elevation: '2,480 m',
    eta: '10:10 AM',
    distanceKm: 14.5,
    safetyStatus: 'Slow Traffic',
    passed: false,
  },
  {
    id: 'wp-4',
    name: 'Atal Tunnel South Portal Entry Gate',
    elevation: '3,060 m',
    eta: '10:45 AM',
    distanceKm: 28.3,
    safetyStatus: 'Narrow Hill Pass',
    passed: false,
  },
  {
    id: 'wp-5',
    name: 'Sissu Glacier Waterfall Viewpoint',
    elevation: '3,120 m',
    eta: '11:20 AM',
    distanceKm: 39.8,
    safetyStatus: 'Landslide Hazard',
    passed: false,
  }
];

export const SAMPLE_SAFETY_METRICS: RouteSafetyMetric = {
  overallSafetyScore: 88,
  hazardLevel: 'Low',
  weatherAlert: 'Chilly winds at high passes (6°C). Road surface dry with no recent landslide debris.',
  terrainWarning: 'Hairpin bends between km 18-24. Low gear recommended for automatic vehicles.',
  nightDrivingSafe: false,
  emergencyContactNear: 'Manali Civil Hospital & Mountain Rescue (Dial 108 / 01902-252211)',
};

export const EMERGENCY_CONTACTS = [
  { name: 'National Emergency Helpline', number: '112', type: 'All-in-One Emergency' },
  { name: 'Police Control Room', number: '100', type: 'Law Enforcement' },
  { name: 'Ambulance & Medical Emergency', number: '108', type: 'Disaster / Trauma' },
  { name: 'Tourist Police & Safety Helpline', number: '1363', type: 'Incredible India Support' },
  { name: 'Women Helpline', number: '1091', type: '24/7 Assistance' },
];
