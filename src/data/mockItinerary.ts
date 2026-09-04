import { GeneratedItinerary } from '../types';

export const SAMPLE_ITINERARY_TEMPLATE: GeneratedItinerary = {
  id: 'itin-demo-01',
  tripTitle: 'Balanced Heritage & Mountain Escape',
  destination: 'Manali, Himachal Pradesh',
  days: 3,
  budgetLevel: 'Moderate (₹3,000 - ₹5,000 / day)',
  interests: ['Nature', 'Adventure', 'Local Food', 'Culture'],
  preferredTransport: 'Local Cabs & Walking',
  accommodationType: 'Eco Homestay',
  totalEstimatedBudget: '₹11,400 (For 2 Travelers, Excl. Intercity Transit)',
  summary: 'A curated 3-day practical itinerary balanced for authentic cultural immersion, Himalayan scenic views, and local culinary discoveries with pre-verified transport links.',
  dayPlans: [
    {
      day: 1,
      title: 'Arrival, Ancient Temples & Old Manali Vibe',
      schedule: [
        {
          time: '09:00 AM',
          activity: 'Check-in at Eco Homestay & Fresh Breakfast with Siddu',
          location: 'Old Manali Apple Orchard Belt',
          transportMode: 'Walking',
          estimatedCost: '₹350 for breakfast',
          tip: 'Homestay offers fresh mint tea from their organic terrace.'
        },
        {
          time: '11:00 AM',
          activity: 'Visit Hadimba Devi Pagoda Temple & Van Vihar Forest Walk',
          location: 'Dhungri Forest',
          transportMode: 'Auto Rickshaw (5 mins)',
          estimatedCost: '₹120 Auto fare',
          tip: 'Walk through the cedar woods trail to avoid road congestion.'
        },
        {
          time: '01:30 PM',
          activity: 'Lunch: Traditional Himachali Thali & Trout Tasting',
          location: 'Heritage Kitchen Old Manali',
          transportMode: 'Walking',
          estimatedCost: '₹750 for two'
        },
        {
          time: '04:30 PM',
          activity: 'Explore Manu Temple & Evening Cafe Live Acoustic Session',
          location: 'Old Manali Bazaar',
          transportMode: 'Walking',
          estimatedCost: '₹400 for beverages'
        }
      ]
    },
    {
      day: 2,
      title: 'Engineering Wonder: Atal Tunnel & Lahaul Valley Gateway',
      schedule: [
        {
          time: '08:30 AM',
          activity: 'Depart for Solang Valley & Atal Tunnel North Portal',
          location: 'Solang & Sissu (Lahaul)',
          transportMode: 'Union Cab (Pre-booked)',
          estimatedCost: '₹2,600 shared cab',
          tip: 'Carry light fleece; temperature drops by 6°C across the tunnel.'
        },
        {
          time: '11:30 AM',
          activity: 'Sissu Waterfall View & Stroll through Willow Groves',
          location: 'Lahaul Valley',
          transportMode: 'Walking / Cab',
          estimatedCost: 'Free entry',
          tip: 'Support local women stalls selling dried sea buckthorn berries.'
        },
        {
          time: '02:00 PM',
          activity: 'Hot Lunch: Steamed Tibetan Momos & Thukpa',
          location: 'Sissu Riverbank Dhabas',
          transportMode: 'Walking',
          estimatedCost: '₹450'
        },
        {
          time: '05:00 PM',
          activity: 'Return to Mall Road & Shopping for Kullu Handloom Shawls',
          location: 'Mall Road Khadi Emporium',
          transportMode: 'Cab return',
          estimatedCost: 'Included in cab package'
        }
      ]
    },
    {
      day: 3,
      title: 'Naggar Castle Heritage, Art & Organic Orchard Trail',
      schedule: [
        {
          time: '09:30 AM',
          activity: 'Drive along the Left Bank to Historic Naggar Castle',
          location: 'Naggar (21 km from Manali)',
          transportMode: 'HRTC Electric Bus or Local Cab',
          estimatedCost: '₹70 (Bus) or ₹800 (Cab)',
          tip: 'Left bank road offers scenic river vistas without highway jams.'
        },
        {
          time: '11:00 AM',
          activity: 'Tour Nicholas Roerich Art Gallery & Tripura Sundari Temple',
          location: 'Naggar Heritage Zone',
          transportMode: 'Walking',
          estimatedCost: '₹50 entry tickets'
        },
        {
          time: '01:30 PM',
          activity: 'Farewell Organic Garden Lunch overlooking Kullu Valley',
          location: 'Naggar Castle Rooftop Cafe',
          transportMode: 'Walking',
          estimatedCost: '₹850 for two'
        },
        {
          time: '04:00 PM',
          activity: 'Departure prep & souvenir packing',
          location: 'Manali Central Volvo Stand',
          transportMode: 'Auto Rickshaw',
          estimatedCost: '₹150'
        }
      ]
    }
  ],
  practicalTips: [
    'Always confirm return transport from Atal Tunnel before 3:00 PM to avoid evening temperature drops.',
    'Municipal plastic water bottle ban in force; use verified filtered water stations at cafes.',
    'Keep digital copies of vehicle permits if self-driving across Himachal state borders.'
  ]
};
