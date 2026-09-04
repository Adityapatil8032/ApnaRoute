import { TravelService, SustainableInitiative } from '../types';

export const TRAVEL_SERVICES: TravelService[] = [
  {
    id: 's1',
    name: 'Himalayan Ridge Eco-Lodge & Stays',
    category: 'Hotels',
    destinationName: 'Manali, Himachal Pradesh',
    rating: 4.8,
    priceRange: '₹2,200 / night',
    contactOrLocation: 'Old Manali Ridge Road',
    verified: true,
    features: ['Solar Heating', 'Organic Farm Meals', 'Mountain View', 'EV Charging'],
    description: 'Boutique stone and deodar wood retreat run by local families prioritizing carbon-neutral stays and zero single-use plastics.'
  },
  {
    id: 's2',
    name: 'Nilgiri Green Heritage Stays',
    category: 'Hotels',
    destinationName: 'Munnar, Kerala',
    rating: 4.9,
    priceRange: '₹3,400 / night',
    contactOrLocation: 'Devikulam Valley, Munnar',
    verified: true,
    features: ['Plantation Walks', 'Rainwater Harvested', 'Traditional Cuisine'],
    description: 'Eco-resort set in rolling tea estates featuring natural ventilation, bio-septic recycling, and organic spices.'
  },
  {
    id: 's3',
    name: 'Kashi Heritage Walking Guides Guild',
    category: 'Local Guides',
    destinationName: 'Varanasi, Uttar Pradesh',
    rating: 4.9,
    priceRange: '₹800 / half day',
    contactOrLocation: 'Assi Ghat Gate 1',
    verified: true,
    features: ['Government Certified', 'Multi-lingual', 'Historical Expert', 'Wheelchair Route Knowledge'],
    description: 'Certified native historians specializing in the spiritual, philosophical, and architectural heritage of the ancient ghats.'
  },
  {
    id: 's4',
    name: 'Hampi Bouldering & Cycling Guides',
    category: 'Local Guides',
    destinationName: 'Hampi, Karnataka',
    rating: 4.8,
    priceRange: '₹600 / tour',
    contactOrLocation: 'Hampi Bazaar Near Virupaksha',
    verified: true,
    features: ['Geological Certification', 'Safety Gear Included', 'Sunset Point Access'],
    description: 'Local youth guides leading eco-friendly cycling and boulder exploration routes across historical ruins.'
  },
  {
    id: 's5',
    name: 'Banaras Sattvic Rasoi & Sweets',
    category: 'Restaurants',
    destinationName: 'Varanasi, Uttar Pradesh',
    rating: 4.7,
    priceRange: '₹200 - ₹500',
    contactOrLocation: 'Thatheri Bazaar, Chowk',
    verified: true,
    features: ['100% Vegetarian', 'Locally Sourced Milk', 'Clay Crockery'],
    description: 'Century-old dining hall famous for hing-infused kachoris, authentic malaiyo, and traditional seasonal thalis.'
  },
  {
    id: 's6',
    name: 'White Town Artisan Boulangerie',
    category: 'Restaurants',
    destinationName: 'Pondicherry',
    rating: 4.8,
    priceRange: '₹350 - ₹800',
    contactOrLocation: 'Suffren Street, White Town',
    verified: true,
    features: ['Wood-Fired Oven', 'Organic Flour', 'Outdoor Garden'],
    description: 'Franco-Tamil bakery and cafe celebrating slow fermentation sourdough bread, quiches, and organic local coffees.'
  },
  {
    id: 's7',
    name: 'Himachal Green Wheels EV Taxi Union',
    category: 'Transport',
    destinationName: 'Manali, Himachal Pradesh',
    rating: 4.7,
    priceRange: '₹1,800 - ₹3,200',
    contactOrLocation: 'Mall Road Taxi Stand',
    verified: true,
    features: ['Fixed Union Rates', 'EV Fleet Available', 'Snow Certified Drivers'],
    description: 'Transparently priced tourist taxi collective serving Rohtang, Solang, and Atal Tunnel circuits.'
  },
  {
    id: 's8',
    name: 'Auroville Cycle & E-Bike Hub',
    category: 'Rentals',
    destinationName: 'Pondicherry',
    rating: 4.9,
    priceRange: '₹150 - ₹400 / day',
    contactOrLocation: 'Kottakuppam / ECR Junction',
    verified: true,
    features: ['Helmets Included', 'Solar Charged', 'Roadside Assistance'],
    description: 'Clean electric mobility solutions and classic Dutch roadsters for touring French quarters and Auroville.'
  },
  {
    id: 's9',
    name: 'Ziro Indigenous Craft & Trek Co-op',
    category: 'Activities',
    destinationName: 'Ziro Valley, Arunachal Pradesh',
    rating: 4.9,
    priceRange: '₹500 - ₹1,500',
    contactOrLocation: 'Hapoli Central Market',
    verified: true,
    features: ['Tribal Council Endorsed', 'Hands-on Workshops', 'Sustainable Souvenirs'],
    description: 'Immersive cultural workshops teaching sustainable bamboo weaving, Apatani handloom, and traditional forest foraging.'
  }
];

export const SUSTAINABLE_INITIATIVES: SustainableInitiative[] = [
  {
    id: 'sust1',
    title: 'Village Weaver Cooperatives & GI Handloom',
    category: 'Local Businesses',
    impactSummary: 'Connecting conscious travelers directly to verified weaving families eliminates middleman commissions and sustains authentic loom traditions.',
    actionableTip: 'Look for the Silk Mark and Craftmark certifications when purchasing textiles in Varanasi and Assam.',
    location: 'Varanasi, Kanchipuram & Ziro'
  },
  {
    id: 'sust2',
    title: 'Off-Beat Low Impact Destinations (Spillover Tourism)',
    category: 'Lesser-Known Destinations',
    impactSummary: 'Promoting destinations like Chopta, Mawlynnong, and Ziro diverts dangerous crowds away from ecologically stressed hubs like Shimla and Ooty.',
    actionableTip: 'Choose secondary destinations during peak national festival long weekends.',
    location: 'Himalayan & North-East Corridors'
  },
  {
    id: 'sust3',
    title: 'Leave-No-Trace Plastic Alternatives & Hydration Stations',
    category: 'Eco-Friendly Travel',
    impactSummary: 'Over 40 million single-use plastic bottles enter mountain ecosystems annually. Our mapped free filtered water refill network cuts waste.',
    actionableTip: 'Carry an insulated steel bottle; filter points are marked across all partner homestays.',
    location: 'Pan-India Circuit'
  },
  {
    id: 'sust4',
    title: 'The Apna Route Responsible Traveler Pledge',
    category: 'Responsible Tourism',
    impactSummary: 'A community commitment to respect cultural sensitivities, support locally owned eateries, preserve silence in spiritual sanctums, and leave flora undisturbed.',
    actionableTip: 'Sign the interactive digital pledge to earn your verified SIH Conscious Traveler badge.',
    location: 'Every Destination'
  }
];
