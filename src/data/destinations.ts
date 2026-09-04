import { Destination } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'manali',
    name: 'Manali',
    state: 'Himachal Pradesh',
    tagline: 'Gateway to Himalayan Adventures & High Passes',
    category: 'Adventure',
    rating: 4.8,
    reviewsCount: 1420,
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    overview: 'Nestled in the Beas River valley, Manali offers a mix of tranquil cedar forests, historic temples, vibrant cafes in Old Manali, and thrilling snow activities in Solang and Atal Tunnel.',
    bestSeason: 'October to June (Snow: Dec - Feb)',
    isHiddenGem: false,
    ecoScore: 78,
    weather: {
      temperature: '14°C / 4°C',
      condition: 'Partly Cloudy & Crisp',
      precipitationRisk: 'Low',
      airQuality: 'Good (AQI 32)',
      bestMonths: 'March - June, Oct - Feb',
      advisory: 'Rohtang Pass permits required in advance. Heavy winter snow can temporarily block upper Solang roads.'
    },
    transport: [
      {
        mode: 'Cab',
        status: 'Available',
        estimatedWait: '10-15 mins',
        typicalCostRange: '₹1,500 - ₹3,000 / day',
        notes: 'Local taxi union operates fixed rates for Solang, Atal Tunnel, and Kasol circuits.'
      },
      {
        mode: 'Bike Taxi',
        status: 'Limited',
        estimatedWait: '20-30 mins',
        typicalCostRange: '₹60 - ₹150',
        notes: 'Operational only within Mall Road & Aleo area. Not permitted on highway ascents.'
      },
      {
        mode: 'Bus',
        status: 'Available',
        estimatedWait: '30-45 mins interval',
        typicalCostRange: '₹20 - ₹80',
        notes: 'HRTC ordinary & electric buses ply frequently between Manali, Naggar, and Kullu.'
      },
      {
        mode: 'Train',
        status: 'Not Available',
        notes: 'No direct railway station in Manali. Nearest broad-gauge railhead is Chandigarh (310 km) or narrow-gauge at Joginder Nagar (165 km).'
      },
      {
        mode: 'Auto',
        status: 'Limited',
        estimatedWait: '5-10 mins on Mall Rd',
        typicalCostRange: '₹80 - ₹250',
        notes: 'Shared autos run between Mall Road and Vashisht. Rates surge after 8:00 PM.'
      },
      {
        mode: 'Car/Bike Rental',
        status: 'Available',
        estimatedWait: 'Instant with ID/DL',
        typicalCostRange: '₹800 - ₹1,800 / day',
        notes: 'Royal Enfield and automatic scooters widely available. Non-HP rental cars require local permit checks.'
      }
    ],
    placesToExplore: [
      {
        id: 'p1',
        name: 'Hadimba Devi Temple',
        description: 'Iconic 1553 wooden pagoda temple built around a natural cave sanctuary amidst towering deodar groves.',
        entryFee: 'Free',
        timings: '8:00 AM - 6:00 PM',
        transportAdvice: 'Walkable from Mall Road (1.5 km uphill) or 5-min auto ride.'
      },
      {
        id: 'p2',
        name: 'Solang Valley & Atal Tunnel',
        description: 'Hub for paragliding, zorbing, cable cars, and gateway to the Lahaul Valley via the engineering marvel Atal Tunnel.',
        entryFee: 'Activities ₹500 - ₹3,200',
        timings: '9:00 AM - 5:00 PM',
        transportAdvice: 'Hire union cab or take HRTC North-Portal shuttle bus.'
      },
      {
        id: 'p3',
        name: 'Old Manali Cafe Quarter & Manu Temple',
        description: 'Stone and timber village vibe with artisanal cafes, live music, and scenic apple orchards.',
        entryFee: 'Free',
        timings: 'Open all day',
        transportAdvice: 'Cross the Manalsu bridge on foot or take a two-wheeler.'
      }
    ],
    food: [
      {
        name: 'Siddu with Ghee',
        type: 'Veg',
        description: 'Traditional steamed wheat bread stuffed with spiced walnut or poppy paste, dipped in warm clarified butter.',
        famousSpot: 'Local Dhabas in Old Manali & Vashisht'
      },
      {
        name: 'Trout Fish Curry / Fry',
        type: 'Non-Veg',
        description: 'Fresh Himalayan river brown trout marinated in mountain herbs and pan-seared.',
        famousSpot: 'Johnson\'s Cafe & Haripur Trout Farms'
      },
      {
        name: 'Himachali Babru & Tudkiya Bhat',
        type: 'Veg',
        description: 'Himachali black gram stuffed puris accompanied by slow-cooked spiced rice with lentils.',
        famousSpot: 'Heritage Village Bhojanalaya'
      }
    ],
    stays: [
      {
        name: 'Apple Garden Eco-Homestay',
        category: 'Budget Homestay',
        priceRange: '₹1,200 - ₹2,000 / night',
        features: ['Solar Heated Water', 'Home-cooked Himachali Meals', 'Orchard View']
      },
      {
        name: 'The Himalayan Heritage Castle',
        category: 'Heritage Hotel',
        priceRange: '₹5,500 - ₹11,000 / night',
        features: ['Gothic Stone Architecture', 'Fireplace in Room', 'Valley Panorama']
      },
      {
        name: 'Zostel Old Manali',
        category: 'Backpacker Hostel',
        priceRange: '₹600 - ₹1,400 / night',
        features: ['Bunk Beds & Privates', 'Co-working Wi-Fi', 'Community Bonfires']
      }
    ],
    localExperiences: [
      {
        title: 'Apple Picking & Jam Making in Naggar',
        duration: '3 hours',
        vibe: 'Agrarian & Rustic',
        sustainabilityNote: 'Directly supports local women-led farmer cooperatives.'
      },
      {
        title: 'Morning Forest Bathing in Van Vihar',
        duration: '1.5 hours',
        vibe: 'Peaceful & Meditative',
        sustainabilityNote: 'Forest department regulated eco-pathway; zero plastic zone.'
      }
    ]
  },
  {
    id: 'munnar',
    name: 'Munnar',
    state: 'Kerala',
    tagline: 'Rolling Emerald Tea Hills & Mist-Kissed Peaks',
    category: 'Nature',
    rating: 4.9,
    reviewsCount: 1890,
    heroImage: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
    overview: 'Perched at 1,600m in the Western Ghats, Munnar is famous for sprawling tea plantations, the endangered Nilgiri Tahr at Eravikulam National Park, and fresh spice air.',
    bestSeason: 'September to March',
    isHiddenGem: false,
    ecoScore: 88,
    weather: {
      temperature: '19°C / 12°C',
      condition: 'Pleasant & Light Mist',
      precipitationRisk: 'Moderate',
      airQuality: 'Pristine (AQI 18)',
      bestMonths: 'October - April',
      advisory: 'Afternoon mist reduces winding road visibility. Eravikulam Park remains closed during Feb-March tahr calving season.'
    },
    transport: [
      {
        mode: 'Cab',
        status: 'Available',
        estimatedWait: '10-15 mins',
        typicalCostRange: '₹2,000 - ₹3,500 / day',
        notes: 'Pre-fixed sightseeing packages cover Top Station, Mattupetty Dam, and Tea Museum circuits.'
      },
      {
        mode: 'Bike Taxi',
        status: 'Not Available',
        notes: 'Bike taxi apps not permitted under Idukki district hill transport regulations.'
      },
      {
        mode: 'Bus',
        status: 'Available',
        estimatedWait: '20-30 mins',
        typicalCostRange: '₹15 - ₹50',
        notes: 'KSRTC town shuttles link Munnar town, Old Munnar, Devikulam, and Marayoor.'
      },
      {
        mode: 'Train',
        status: 'Not Available',
        notes: 'No railway tracks in Munnar. Nearest station is Aluva (110 km) or Ernakulam Junction (130 km).'
      },
      {
        mode: 'Auto',
        status: 'Available',
        estimatedWait: '5 mins at junctions',
        typicalCostRange: '₹50 - ₹200',
        notes: 'Auto stands at Munnar town & Old Munnar. Negotiate or ask for standard KM tariff.'
      },
      {
        mode: 'Car/Bike Rental',
        status: 'Limited',
        estimatedWait: 'Advance booking advised',
        typicalCostRange: '₹600 - ₹1,200 / day (Scooters)',
        notes: 'Limited two-wheeler rentals in town. Steep hairpin turns require experienced riders.'
      }
    ],
    placesToExplore: [
      {
        id: 'm1',
        name: 'Eravikulam National Park',
        description: 'Sanctuary for the rare Nilgiri Tahr and home to Anamudi, South India’s highest peak.',
        entryFee: '₹200 (Includes park safari bus)',
        timings: '7:30 AM - 4:00 PM',
        transportAdvice: 'Board KSRTC bus or hire a taxi to Rajamalai base gate.'
      },
      {
        id: 'm2',
        name: 'KDHP Tea Museum & Factory',
        description: 'Chronicles the journey of tea cultivation since 1880 with live tea manufacturing demonstrations and tea tasting.',
        entryFee: '₹150',
        timings: '9:00 AM - 4:30 PM (Closed Mondays)',
        transportAdvice: '1.5 km from town center; quick auto or walk.'
      },
      {
        id: 'm3',
        name: 'Mattupetty Dam & Eco Point',
        description: 'Scenic water reservoir surrounded by mist mountains with speed boating and echoing hill acoustic effects.',
        entryFee: '₹40 entry + boating extra',
        timings: '9:30 AM - 5:00 PM',
        transportAdvice: '13 km from Munnar on Top Station route.'
      }
    ],
    food: [
      {
        name: 'Kerala Appam with Vegetable Stew',
        type: 'Veg',
        description: 'Lacy fermented rice pancakes paired with mild aromatic coconut milk stew infused with black pepper and cardamom.',
        famousSpot: 'Saravana Bhavan & Rapsy Restaurant'
      },
      {
        name: 'Malabar Prawn / Fish Curry',
        type: 'Non-Veg',
        description: 'Catch of the day cooked in fresh coconut paste, kudampuli (pot tamarind), and curry leaves.',
        famousSpot: 'Hotel Gurubhavan'
      },
      {
        name: 'Cardamom Spiced Spiced Tea',
        type: 'Beverage',
        description: 'Locally grown broken orange pekoe tea leaves brewed with fresh green cardamom pods.',
        famousSpot: 'Roadside Tea stalls along Mattupetty'
      }
    ],
    stays: [
      {
        name: 'Misty Cardamom Plantation Stay',
        category: 'Eco-Resort',
        priceRange: '₹2,500 - ₹4,500 / night',
        features: ['Spice Garden Tour', 'Rainwater Harvesting', 'Birdwatching Trail']
      },
      {
        name: 'Tea Valley Heritage Cottage',
        category: 'Heritage Hotel',
        priceRange: '₹4,000 - ₹7,500 / night',
        features: ['Plantation Bungalow', 'Log Fireplace', 'Private Balcony']
      },
      {
        name: 'Green View Backpacker Haven',
        category: 'Budget Homestay',
        priceRange: '₹900 - ₹1,600 / night',
        features: ['Complimentary Tea', 'Trekking Maps', 'Clean Shared Kitchen']
      }
    ],
    localExperiences: [
      {
        title: 'Morning Spice Plantation Sensory Walk',
        duration: '2 hours',
        vibe: 'Educational & Aromatic',
        sustainabilityNote: 'Organic certified estate preserving native Western Ghats flora.'
      },
      {
        title: 'High-Altitude Tea Plucking with Harvesters',
        duration: '1.5 hours',
        vibe: 'Cultural & Interactive',
        sustainabilityNote: 'Empowers local women estate workers union.'
      }
    ]
  },
  {
    id: 'varanasi',
    name: 'Varanasi (Kashi)',
    state: 'Uttar Pradesh',
    tagline: 'World’s Oldest Living Spiritual City on Sacred Ganga',
    category: 'Religious',
    rating: 4.9,
    reviewsCount: 2310,
    heroImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
    overview: 'One of the oldest continuously inhabited cities on earth. Known for its 84 sacred ghats, evening Ganga Aarti, silk weavers, labyrinthine alleys, and profound spiritual energy.',
    bestSeason: 'October to March',
    isHiddenGem: false,
    ecoScore: 65,
    weather: {
      temperature: '26°C / 16°C',
      condition: 'Sunny & Pleasant Breeze',
      precipitationRisk: 'Low',
      airQuality: 'Moderate (AQI 95)',
      bestMonths: 'October - March',
      advisory: 'Old city alleyways (Galies) are strictly pedestrian. Vehicles must park outside Godowlia or Maidagin.'
    },
    transport: [
      {
        mode: 'Cab',
        status: 'Limited',
        estimatedWait: '15 mins outside old core',
        typicalCostRange: '₹1,200 - ₹2,200 / day',
        notes: 'Cabs cannot enter Godowlia/Dashashwamedh ghat zone due to pedestrian barrier checkpoints.'
      },
      {
        mode: 'Bike Taxi',
        status: 'Available',
        estimatedWait: '3-7 mins',
        typicalCostRange: '₹30 - ₹90',
        notes: 'Rapido & local riders operate efficiently across outer avenues, BHU, and Cantonment.'
      },
      {
        mode: 'Bus',
        status: 'Available',
        estimatedWait: '15-20 mins',
        typicalCostRange: '₹10 - ₹40',
        notes: 'Electric AC green buses connect Cantt Railway Station to Sarnath, BHU, and Ramnagar.'
      },
      {
        mode: 'Train',
        status: 'Available',
        estimatedWait: 'Round the clock trains',
        typicalCostRange: 'Standard IRCTC',
        notes: 'Varanasi Junction (BSB) & Banaras (BSBS) are major rail terminals with extensive Vande Bharat connections.'
      },
      {
        mode: 'Auto',
        status: 'Available',
        estimatedWait: 'Immediate on any main street',
        typicalCostRange: '₹20 shared / ₹100 reserved',
        notes: 'E-rickshaws dominate old city perimeters. Fixed shared tariffs on Godowlia-Cantt route.'
      },
      {
        mode: 'Car/Bike Rental',
        status: 'Data Unavailable',
        notes: 'Organized self-drive hubs not officially standardized; manual inquiries needed at Cantonment agencies.'
      }
    ],
    placesToExplore: [
      {
        id: 'v1',
        name: 'Dashashwamedh Ghat & Evening Maha Aarti',
        description: 'The vibrant spiritual heart where brass lamps, conch shells, and sacred mantras honor the holy river Ganga at dusk.',
        entryFee: 'Free (Boat viewing ₹100 - ₹400)',
        timings: '6:30 PM - 7:45 PM',
        transportAdvice: 'E-rickshaw to Godowlia, then 500m walk down the bustling bazaar lane.'
      },
      {
        id: 'v2',
        name: 'Kashi Vishwanath Corridor',
        description: 'Magnificent redeveloped corridor housing one of the 12 sacred Jyotirlingas, opening directly onto Manikarnika Ghat.',
        entryFee: 'Free general darshan / Sugam Darshan ₹300',
        timings: '4:00 AM - 11:00 PM',
        transportAdvice: 'Enter via Gate 4 (Godowlia) on foot.'
      },
      {
        id: 'v3',
        name: 'Sarnath Deer Park & Dhamek Stupa',
        description: 'Sacred Buddhist site where Lord Buddha preached his first sermon, including the Ashoka Pillar capital museum.',
        entryFee: '₹25 Indian / ₹300 Foreigner',
        timings: '9:00 AM - 5:00 PM (Museum closed Fridays)',
        transportAdvice: '10 km from Cantt; 25-min electric auto or cab.'
      }
    ],
    food: [
      {
        name: 'Kachori Sabzi & Jalebi Breakfast',
        type: 'Veg',
        description: 'Crisp dal-stuffed kachoris served with spicy hing-infused potato curry and piping hot syrupy jalebis.',
        famousSpot: 'Ram Bhandar (Thatheri Bazaar) & Madhur Milan'
      },
      {
        name: 'Banarasi Paan & Malaiyo',
        type: 'Street Food',
        description: 'Frothy winter milk foam dessert delicately infused with saffron and pistachios, followed by traditional sweet betel leaf paan.',
        famousSpot: 'Shreeji Keshav Tambool & Chowk Sweetmakers'
      },
      {
        name: 'Blue Lassi & Peda',
        type: 'Beverage',
        description: 'Thick hand-churned clay cup lassi topped with malai, rabri, and seasonal fruits.',
        famousSpot: 'Blue Lassi Shop (Manikarnika Gali)'
      }
    ],
    stays: [
      {
        name: 'BrijRama Palace Heritage',
        category: 'Heritage Hotel',
        priceRange: '₹14,000 - ₹28,000 / night',
        features: ['18th-century Maratha architecture', 'Private Ghat Boat Access', 'Sitar Performances']
      },
      {
        name: 'Ganga Kripa Vedic Homestay',
        category: 'Budget Homestay',
        priceRange: '₹1,200 - ₹2,500 / night',
        features: ['Rooftop Sunrise View', 'Authentic Sattvic Meals', 'Walking Tour Guidance']
      },
      {
        name: 'Hostelwala Kashi',
        category: 'Backpacker Hostel',
        priceRange: '₹500 - ₹1,200 / night',
        features: ['Spiritual Travelers Lounge', 'High-Speed Wi-Fi', 'Morning Ghat Walks']
      }
    ],
    localExperiences: [
      {
        title: 'Dawn Rowboat Journey across 84 Ghats',
        duration: '1.5 hours',
        vibe: 'Spiritual & Atmospheric',
        sustainabilityNote: 'Choose non-motorized manual wooden boats to reduce river noise and fuel pollution.'
      },
      {
        title: 'Authentic Banarasi Silk Weaving Atelier Visit',
        duration: '2 hours',
        vibe: 'Artisanal & Cultural',
        sustainabilityNote: 'Direct-to-weaver purchases support GI-tagged handloom artisan families.'
      }
    ]
  },
  {
    id: 'hampi',
    name: 'Hampi',
    state: 'Karnataka',
    tagline: 'Timeless Boulder-Strewn Ruins of the Vijayanagara Empire',
    category: 'Historical',
    rating: 4.9,
    reviewsCount: 1650,
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010f4439c81?auto=format&fit=crop&w=1200&q=80',
    overview: 'A UNESCO World Heritage site amidst surreal granite boulders and the Tungabhadra River. The ruins of the 14th-century capital showcase carved stone chariots, musical pillars, and royal pavilions.',
    bestSeason: 'October to February',
    isHiddenGem: false,
    ecoScore: 84,
    weather: {
      temperature: '29°C / 18°C',
      condition: 'Sunny & Dry',
      precipitationRisk: 'Low',
      airQuality: 'Clean (AQI 28)',
      bestMonths: 'November - February',
      advisory: 'Afternoon sun is intense on open stone monuments. Carry reusable water bottles and sun hats.'
    },
    transport: [
      {
        mode: 'Cab',
        status: 'Limited',
        estimatedWait: 'Book in advance from Hospet',
        typicalCostRange: '₹2,000 - ₹3,000 / day',
        notes: 'Cabs available from Hospet Junction. Large vehicles restricted in inner temple plaza.'
      },
      {
        mode: 'Bike Taxi',
        status: 'Not Available',
        notes: 'No app-based bike taxis present in Hampi rural belt.'
      },
      {
        mode: 'Bus',
        status: 'Available',
        estimatedWait: 'Every 30 mins',
        typicalCostRange: '₹18 - ₹35',
        notes: 'KSRTC regular buses commute between Hospet Bus Stand and Hampi Bazaar terminal.'
      },
      {
        mode: 'Train',
        status: 'Available',
        estimatedWait: 'Nearest railhead 13 km away',
        typicalCostRange: 'IRCTC trains',
        notes: 'Hosapete Junction (HPT) is the closest major station connecting Bengaluru, Goa, and Hyderabad.'
      },
      {
        mode: 'Auto',
        status: 'Available',
        estimatedWait: '5 mins at Hampi Bazaar',
        typicalCostRange: '₹600 - ₹1,200 for full day circuit',
        notes: 'Knowledgeable auto drivers double as friendly informal guides for the monument circuit.'
      },
      {
        mode: 'Car/Bike Rental',
        status: 'Available',
        estimatedWait: 'Instant with driving license',
        typicalCostRange: 'Bicycle ₹100/day, Moped ₹350 - ₹500/day',
        notes: 'Cycling is the most eco-friendly and popular way to explore the sacred center ruins.'
      }
    ],
    placesToExplore: [
      {
        id: 'h1',
        name: 'Vijaya Vittala Temple & Stone Chariot',
        description: 'Architectural wonder featuring the world-famous carved stone chariot shrine and 56 musical acoustic stone pillars.',
        entryFee: '₹40 Indian / ₹600 Foreigner',
        timings: '8:30 AM - 5:30 PM',
        transportAdvice: 'Eco-battery buggies operate between parking lot and temple entrance (1 km).'
      },
      {
        id: 'h2',
        name: 'Virupaksha Temple',
        description: 'Living 7th-century Dravidian temple complex dedicated to Lord Shiva, with an imposing 50-meter eastern gopuram.',
        entryFee: 'Free entry / ₹25 camera fee',
        timings: '6:00 AM - 1:00 PM, 5:00 PM - 9:00 PM',
        transportAdvice: 'Located at the end of Hampi Bazaar; accessible on foot or bicycle.'
      },
      {
        id: 'h3',
        name: 'Matanga Hill Sunrise Point',
        description: 'Highest vantage point in Hampi offering 360-degree panoramic vistas of the boulder wilderness and Tungabhadra River.',
        entryFee: 'Free',
        timings: 'Best at 5:30 AM',
        transportAdvice: '30-minute moderate stone-step climb from eastern edge of Hampi Bazaar.'
      }
    ],
    food: [
      {
        name: 'Traditional South Indian Banana Leaf Thali',
        type: 'Veg',
        description: 'Steaming Sona Masoori rice served with bisi bele bath, rasam, kosambari salad, and coconut payasam.',
        famousSpot: 'Mango Tree Restaurant & Gopi Guesthouse'
      },
      {
        name: 'Millet Roti with Ennegayi (Stuffed Brinjal)',
        type: 'Veg',
        description: 'Nutritious rustic North Karnataka jowar/bajra flatbread paired with peanut-sesame spiced eggplant curry.',
        famousSpot: 'Local Khanavalis in Hospet & Kamalapura'
      },
      {
        name: 'Fresh Coconut Water & Sugarcane Juice',
        type: 'Beverage',
        description: 'Chilled tender coconut water harvested fresh at the monument avenues.',
        famousSpot: 'Stalls near Vittala Temple approach'
      }
    ],
    stays: [
      {
        name: 'Kishkinda Heritage Eco-Lodging',
        category: 'Eco-Resort',
        priceRange: '₹3,200 - ₹6,000 / night',
        features: ['Solar Energy Driven', 'Boulder View Terraces', 'Bicycle Lending']
      },
      {
        name: 'Heritage Village Homestay',
        category: 'Budget Homestay',
        priceRange: '₹1,000 - ₹1,800 / night',
        features: ['Family hospitality', 'Traditional Home-made Dosa', 'Quiet Courtyard']
      },
      {
        name: 'Evolve Back Kamalapura Palace',
        category: 'Heritage Hotel',
        priceRange: '₹18,000 - ₹34,000 / night',
        features: ['Royal Vijayanagara Architecture', 'Private Pool', 'Curated Historian Walks']
      }
    ],
    localExperiences: [
      {
        title: 'Traditional Coracle (Dongis) Float on Tungabhadra',
        duration: '45 mins',
        vibe: 'Scenic & Adventurous',
        sustainabilityNote: 'Supports native fishermen preserving traditional round cane basket boat crafts.'
      },
      {
        title: 'Sunset Bouldering & Geological Heritage Walk',
        duration: '2 hours',
        vibe: 'Active & Educational',
        sustainabilityNote: 'Strict Leave-No-Trace etiquette adhered to on prehistoric granite formations.'
      }
    ]
  },
  {
    id: 'ziro-valley',
    name: 'Ziro Valley',
    state: 'Arunachal Pradesh',
    tagline: 'Enchanting Pine Ridges & Living Apatani Heritage',
    category: 'Hidden Gems',
    rating: 4.9,
    reviewsCount: 680,
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    overview: 'A picturesque plateau in lower Subansiri home to the indigenous Apatani tribe. Known for UNESCO-recognized sustainable paddy-cum-fish farming, bamboo architecture, and misty pine hills.',
    bestSeason: 'March to October (Ziro Festival: Sept)',
    isHiddenGem: true,
    ecoScore: 96,
    weather: {
      temperature: '18°C / 9°C',
      condition: 'Fresh, Crisp & Mountain Mist',
      precipitationRisk: 'Moderate',
      airQuality: 'Pristine (AQI 12)',
      bestMonths: 'March - May, September - November',
      advisory: 'Inner Line Permit (ILP) mandatory for all domestic tourists; Protected Area Permit (PAP) for international visitors.'
    },
    transport: [
      {
        mode: 'Cab',
        status: 'Limited',
        estimatedWait: 'Pre-arrangement required',
        typicalCostRange: '₹3,000 - ₹4,500 / day (Sumo/Scorpio)',
        notes: 'Shared Tata Sumo taxis connect Ziro with Naharlagun and Itanagar; booking seats a day ahead is standard practice.'
      },
      {
        mode: 'Bike Taxi',
        status: 'Not Available',
        notes: 'No commercial bike taxi services available in the valley.'
      },
      {
        mode: 'Bus',
        status: 'Limited',
        estimatedWait: 'Once daily morning service',
        typicalCostRange: '₹250 - ₹400',
        notes: 'Arunachal State Transport (APSTS) runs daily buses from Itanagar to Hapoli (Ziro).'
      },
      {
        mode: 'Train',
        status: 'Not Available',
        notes: 'Nearest railway station is Naharlagun (approx 100 km / 3.5 hours winding mountain drive).'
      },
      {
        mode: 'Auto',
        status: 'Limited',
        estimatedWait: 'Available at Hapoli & Old Ziro market',
        typicalCostRange: '₹50 - ₹150',
        notes: 'Local shared shared vans/autos run between Hapoli and surrounding Apatani villages.'
      },
      {
        mode: 'Car/Bike Rental',
        status: 'Data Unavailable',
        notes: 'No recognized self-drive commercial rental outlets; travelers generally hire taxi with local driver.'
      }
    ],
    placesToExplore: [
      {
        id: 'z1',
        name: 'Hong & Hari Apatani Villages',
        description: 'Largest traditional bamboo villages in the valley showcasing unique sustainable timber architecture and community granaries.',
        entryFee: 'Free',
        timings: 'Best during daytime hours',
        transportAdvice: 'Walkable or 10-min shared auto from Old Ziro.'
      },
      {
        id: 'z2',
        name: 'Tarin Fish Farm & Paddy Terraces',
        description: 'Centuries-old sustainable agro-ecology where high-altitude rice and fish are cultivated symbiotically without fertilizers.',
        entryFee: '₹20',
        timings: '9:00 AM - 5:00 PM',
        transportAdvice: '3.5 km from Hapoli center.'
      },
      {
        id: 'z3',
        name: 'Kile Pakho Ridge & Pine Grove',
        description: 'High ridge offering contrasting views: the Ziro valley plateau on one side and snow-capped Himalayan ranges on the other.',
        entryFee: 'Free',
        timings: 'Sunrise to Sunset',
        transportAdvice: 'Requires hiring a local cab or 7 km scenic trek.'
      }
    ],
    food: [
      {
        name: 'Bamboo Hollow Steamed Pork / Chicken with Pikey',
        type: 'Non-Veg',
        description: 'Slow-cooked native meat cooked inside fresh bamboo shoots over glowing coals with indigenous wild mountain herbs.',
        famousSpot: 'Village homestays in Hong & Hapoli'
      },
      {
        name: 'Apatani Pika Pila (Traditional Pickle)',
        type: 'Veg',
        description: 'A delicate organic condiment crafted from dried bamboo shoots, pork fat or mustard oil, and mountain chilies.',
        famousSpot: 'Hapoli Local Sunday Market'
      },
      {
        name: 'Locally Brewed Rice Millet Beer (Opo)',
        type: 'Beverage',
        description: 'Traditional fermented sweet-tart rice beverage served in handmade bamboo tumblers.',
        famousSpot: 'Cultural homestay welcome rituals'
      }
    ],
    stays: [
      {
        name: 'Apatani Bamboo Community Homestay',
        category: 'Budget Homestay',
        priceRange: '₹1,500 - ₹2,500 / night (Includes Meals)',
        features: ['Authentic Fireplace Hearth', 'Home-Grown Organic Food', 'Village Guided Walk']
      },
      {
        name: 'Ziro Valley Eco-Cottages',
        category: 'Eco-Resort',
        priceRange: '₹3,000 - ₹5,500 / night',
        features: ['Solar Powered', 'Pine Forest Views', 'Zero-Plastic Policy']
      }
    ],
    localExperiences: [
      {
        title: 'Apatani Indigenous Agricultural Practice Workshop',
        duration: '3 hours',
        vibe: 'Educational & Sustainable',
        sustainabilityNote: '100% of proceeds go to village elder agricultural council.'
      },
      {
        title: 'Bamboo Craft & Basket Weaving with Village Masters',
        duration: '2 hours',
        vibe: 'Artisanal & Hands-On',
        sustainabilityNote: 'Supports preservation of intangible tribal craft traditions.'
      }
    ]
  },
  {
    id: 'pondicherry',
    name: 'Pondicherry (Puducherry)',
    state: 'Puducherry',
    tagline: 'French Colonial Elegance & Coastal Serenity',
    category: 'Beaches',
    rating: 4.7,
    reviewsCount: 1540,
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    overview: 'A charming coastal union territory characterized by mustard-yellow French villas, bougainvillea-lined avenues, tranquil beaches, and the experimental universal township of Auroville.',
    bestSeason: 'October to March',
    isHiddenGem: false,
    ecoScore: 82,
    weather: {
      temperature: '28°C / 23°C',
      condition: 'Breezy & Coastal Warmth',
      precipitationRisk: 'Low',
      airQuality: 'Good (AQI 42)',
      bestMonths: 'November - February',
      advisory: 'White Town promenade is strictly pedestrian-only every evening from 6:00 PM to 7:30 AM.'
    },
    transport: [
      {
        mode: 'Cab',
        status: 'Available',
        estimatedWait: '5-10 mins',
        typicalCostRange: '₹1,200 - ₹2,000 / day',
        notes: 'Uber, Ola and tourist cabs available for trips to Auroville, Paradise Beach, and Mahabalipuram.'
      },
      {
        mode: 'Bike Taxi',
        status: 'Available',
        estimatedWait: '3-5 mins',
        typicalCostRange: '₹25 - ₹70',
        notes: 'Rapido is active across urban Pondicherry and Lawspet areas.'
      },
      {
        mode: 'Bus',
        status: 'Available',
        estimatedWait: '10-15 mins',
        typicalCostRange: '₹10 - ₹25',
        notes: 'PRTC local town buses connect New Bus Stand, White Town, and Auroville tollgate.'
      },
      {
        mode: 'Train',
        status: 'Available',
        estimatedWait: 'Scheduled daily expresses',
        typicalCostRange: 'IRCTC trains',
        notes: 'Puducherry Railway Station (PDY) is conveniently situated right near the botanical gardens and White Town.'
      },
      {
        mode: 'Auto',
        status: 'Available',
        estimatedWait: 'Immediate at corners',
        typicalCostRange: '₹80 - ₹200',
        notes: 'Autos readily available; agree on fare beforehand as meters are rarely turned on.'
      },
      {
        mode: 'Car/Bike Rental',
        status: 'Available',
        estimatedWait: 'Instant at Mission Street / MG Road',
        typicalCostRange: 'Bicycle ₹80/day, Activa ₹300 - ₹450/day',
        notes: 'Renting a vintage bicycle or scooter is the premier method to tour the French Quarter.'
      }
    ],
    placesToExplore: [
      {
        id: 'po1',
        name: 'White Town (French Quarter) & Promenade',
        description: 'Heritage streetscape with pastel-hued Franco-Tamil architecture, art galleries, chic bistros, and the Gandhi statue seafront.',
        entryFee: 'Free',
        timings: 'Best explored early morning or evening',
        transportAdvice: 'Pedestrian promenade; park two-wheelers outside the marked barrier.'
      },
      {
        id: 'po2',
        name: 'Matrimandir & Auroville Township',
        description: 'Golden geodesic meditation sphere symbolizing human unity, nestled amidst thousands of acres of regenerated forest.',
        entryFee: 'Free (Inner chamber requires 2-day prior booking)',
        timings: '9:00 AM - 4:00 PM',
        transportAdvice: '12 km from Pondicherry; rent a scooter or hire auto.'
      },
      {
        id: 'po3',
        name: 'Serenity Beach & Surfing School',
        description: 'Golden sand beach with gentle break waves, palm fringes, and accredited wave-surfing instructors.',
        entryFee: 'Free',
        timings: 'Sunrise to Sunset',
        transportAdvice: '5 km north of White Town along the East Coast Road.'
      }
    ],
    food: [
      {
        name: 'French Butter Croissants & Baguettes',
        type: 'Veg',
        description: 'Fresh flaky viennoiserie baked daily according to classic French sourdough recipes.',
        famousSpot: 'Baker Street & Cafe des Arts'
      },
      {
        name: 'Creole Fish Curry (Poisson à la Créole)',
        type: 'Non-Veg',
        description: 'Tender sea catch simmered in a harmonious blend of French spices, coconut cream, and Tamil shallots.',
        famousSpot: 'Carte Blanche & Maison Perumal'
      },
      {
        name: 'Auroville Organic Gelato',
        type: 'Beverage',
        description: 'Handcrafted natural gelato made with fresh A2 cow milk and seasonal organic fruits.',
        famousSpot: 'Tanto Pizzeria & Gelato Factory'
      }
    ],
    stays: [
      {
        name: 'Villa Shanti Heritage',
        category: 'Heritage Hotel',
        priceRange: '₹5,500 - ₹9,500 / night',
        features: ['Restored 19th Century Mansion', 'Internal Courtyard Cafe', 'Walking Distance to Beach']
      },
      {
        name: 'Auroville Earth & Bamboo Guesthouse',
        category: 'Eco-Resort',
        priceRange: '₹1,800 - ₹3,200 / night',
        features: ['Compressed Earth Blocks', 'Solar Powered', 'Community Kitchen']
      },
      {
        name: 'Nomad House White Town',
        category: 'Backpacker Hostel',
        priceRange: '₹750 - ₹1,600 / night',
        features: ['Rooftop Yoga Space', 'Cafe Workspace', 'Cycle Rental Desk']
      }
    ],
    localExperiences: [
      {
        title: 'Auroville Forest Restoration & Tree Planting Walk',
        duration: '2.5 hours',
        vibe: 'Eco-Conscious & Inspiring',
        sustainabilityNote: 'Contributes to ongoing reforestation of 300+ native tropical dry evergreen species.'
      },
      {
        title: 'Morning French Quarter Architectural Heritage Cycle Tour',
        duration: '1.5 hours',
        vibe: 'Cultural & Leisurely',
        sustainabilityNote: 'Guided by local INTACH heritage preservation volunteers.'
      }
    ]
  },
  {
    id: 'chopta',
    name: 'Chopta (Mini Switzerland of Uttarakhand)',
    state: 'Uttarakhand',
    tagline: 'High-Altitude Meadows & Sacred Tungnath Peak',
    category: 'Hidden Gems',
    rating: 4.8,
    reviewsCount: 520,
    heroImage: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80',
    overview: 'A pristine alpine hamlet surrounded by pine, deodar, and rhododendron forests. Basecamp for the trek to Tungnath (highest Shiva temple in the world at 3,680m) and Chandrashila summit.',
    bestSeason: 'April to November (Snow Treks: Dec - Feb)',
    isHiddenGem: true,
    ecoScore: 92,
    weather: {
      temperature: '11°C / 2°C',
      condition: 'Crisp Mountain Sunlight',
      precipitationRisk: 'Low',
      airQuality: 'Pristine (AQI 10)',
      bestMonths: 'May - June, September - November',
      advisory: 'No grid electricity; homestays operate primarily on solar panels and mountain spring water. Pack thermals.'
    },
    transport: [
      {
        mode: 'Cab',
        status: 'Limited',
        estimatedWait: 'Pre-book from Rishikesh / Ukhimath',
        typicalCostRange: '₹3,500 - ₹5,000 / one-way from Haridwar',
        notes: 'Mountain taxis operate from Ukhimath or Gopeshwar base. Mountain drivers recommended.'
      },
      {
        mode: 'Bike Taxi',
        status: 'Not Available',
        notes: 'Strictly prohibited and non-existent on remote high-altitude routes.'
      },
      {
        mode: 'Bus',
        status: 'Limited',
        estimatedWait: 'One daily connecting bus',
        typicalCostRange: '₹120 - ₹200',
        notes: 'UTC bus travels up to Ukhimath or Kund; shared mountain jeeps cover the final 30 km to Chopta.'
      },
      {
        mode: 'Train',
        status: 'Not Available',
        notes: 'Nearest railway station is Rishikesh / Yog Nagari Rishikesh (approx 205 km / 6.5 hours).'
      },
      {
        mode: 'Auto',
        status: 'Not Available',
        notes: 'Three-wheelers not operational due to steep mountain gradients and frost conditions.'
      },
      {
        mode: 'Car/Bike Rental',
        status: 'Limited',
        estimatedWait: 'Pick up in Rishikesh / Dehradun',
        typicalCostRange: '₹1,200 - ₹2,500 / day (Himalayan / 4x4)',
        notes: 'Rent in Rishikesh before driving up. Winter requires snow chains for high passes.'
      }
    ],
    placesToExplore: [
      {
        id: 'ch1',
        name: 'Tungnath Temple & Chandrashila Peak',
        description: 'Trek up 3.5 km stone path to the thousand-year-old stone temple and onwards to Chandrashila for 360-degree views of Nanda Devi and Trishul.',
        entryFee: 'Free',
        timings: 'Temple open May to November',
        transportAdvice: 'Hiking trail starts right from Chopta base; mules available for elderly visitors.'
      },
      {
        id: 'ch2',
        name: 'Deoria Tal Emerald Lake',
        description: 'Crystal-clear alpine lake reflecting the Chaukhamba peaks in its calm waters, nestled amidst dense rhododendron forests.',
        entryFee: '₹75 forest fee',
        timings: '6:00 AM - 5:00 PM',
        transportAdvice: '2.5 km trek starting from Sari village (18 km before Chopta).'
      }
    ],
    food: [
      {
        name: 'Garhwali Kafuli & Manduwa Roti',
        type: 'Veg',
        description: 'Nutrient-rich local spinach and fenugreek gravy prepared in cast iron pans, eaten with hearty finger-millet flatbread.',
        famousSpot: 'Local Dhabas at Chopta market'
      },
      {
        name: 'Buransh (Rhododendron) Fresh Juice',
        type: 'Beverage',
        description: 'Sweet and tangy crimson elixir squeezed from wild Himalayan red rhododendron blossoms.',
        famousSpot: 'Roadside mountain kiosks in Makku Bend'
      }
    ],
    stays: [
      {
        name: 'Chopta Meadow Eco-Camps',
        category: 'Eco-Resort',
        priceRange: '₹2,000 - ₹3,500 / night (Includes Bonfire & Meals)',
        features: ['Solar Lanterns', 'Stargazing Decks', 'Zero Plastic Camp']
      },
      {
        name: 'Sari Village Traditional Stone Homestay',
        category: 'Budget Homestay',
        priceRange: '₹1,000 - ₹1,800 / night',
        features: ['Himalayan Wood Stove', 'Organic Mountain Dal', 'Local Guide Assistance']
      }
    ],
    localExperiences: [
      {
        title: 'Himalayan Monal Birdwatching Trail',
        duration: '2.5 hours',
        vibe: 'Quiet & Naturalist',
        sustainabilityNote: 'Kedarnath Wildlife Sanctuary buffer zone; quiet observation only.'
      }
    ]
  },
  {
    id: 'mawlynnong',
    name: 'Mawlynnong & Living Root Bridges',
    state: 'Meghalaya',
    tagline: 'God’s Own Garden & Sacred Living Architecture',
    category: 'Hidden Gems',
    rating: 4.9,
    reviewsCount: 890,
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    overview: 'Renowned as Asia\'s cleanest village, Mawlynnong in the East Khasi Hills is a world-class model of community-driven cleanliness, matriarchal culture, and ingenious bio-engineering living root bridges.',
    bestSeason: 'September to May',
    isHiddenGem: true,
    ecoScore: 98,
    weather: {
      temperature: '22°C / 14°C',
      condition: 'Lush & Gentle Mist',
      precipitationRisk: 'Moderate',
      airQuality: 'Pristine (AQI 8)',
      bestMonths: 'October - April',
      advisory: '100% plastic ban strictly enforced. All garbage is collected in handmade conical bamboo dustbins (khoh).'
    },
    transport: [
      {
        mode: 'Cab',
        status: 'Available',
        estimatedWait: 'Pre-book from Shillong',
        typicalCostRange: '₹2,800 - ₹4,000 / day',
        notes: 'Tourist tourist cabs frequently hired from Police Bazar, Shillong (approx 78 km / 2.5 hours).'
      },
      {
        mode: 'Bike Taxi',
        status: 'Not Available',
        notes: 'No bike taxi operators in the village sector.'
      },
      {
        mode: 'Bus',
        status: 'Limited',
        estimatedWait: 'Periodic morning services',
        typicalCostRange: '₹80 - ₹150',
        notes: 'Shared government and private buses run from Shillong to Pynursla; connecting sumos take travelers to Mawlynnong.'
      },
      {
        mode: 'Train',
        status: 'Not Available',
        notes: 'No railways in Meghalaya hills. Nearest major station is Guwahati (GHY) in Assam (180 km).'
      },
      {
        mode: 'Auto',
        status: 'Not Available',
        notes: 'The entire village is strictly pedestrian; vehicles park at the municipal barrier entry.'
      },
      {
        mode: 'Car/Bike Rental',
        status: 'Limited',
        estimatedWait: 'Rent in Shillong or Guwahati',
        typicalCostRange: '₹700 - ₹1,500 / day',
        notes: 'Self-drive rental cars and two-wheelers available in Shillong with valid DL.'
      }
    ],
    placesToExplore: [
      {
        id: 'mw1',
        name: 'Single Decker Living Root Bridge (Riwai)',
        description: 'Marvel of bio-engineering grown over decades from the aerial roots of Ficus elastica trees by Khasi elders over the Thyllong River.',
        entryFee: '₹40 community preservation fee',
        timings: 'Sunrise to Sunset',
        transportAdvice: '2 km from Mawlynnong village; 15-min gentle stone steps walk.'
      },
      {
        id: 'mw2',
        name: 'Sky View Bamboo Machan',
        description: 'An 85-foot high bamboo viewing tower erected by villagers offering sweeping panoramic views of the vast plains of Bangladesh.',
        entryFee: '₹20',
        timings: '7:00 AM - 5:30 PM',
        transportAdvice: 'Located right inside the village trail.'
      }
    ],
    food: [
      {
        name: 'Jadoh with Tungrymbai & Dohneiiong',
        type: 'Non-Veg',
        description: 'Traditional Khasi spiced red rice dish prepared with indigenous black sesame pork curry and fermented soybean chutney.',
        famousSpot: 'Community Kitchen Village Stalls'
      },
      {
        name: 'Local Organic Vegetable Stew with Bamboo Shoot',
        type: 'Veg',
        description: 'Fresh farm-harvested greens stewed with mountain ginger, wild garlic, and tender bamboo shoots.',
        famousSpot: 'Na-i-Kyllun Village Restaurant'
      }
    ],
    stays: [
      {
        name: 'Mawlynnong Community Bamboo Thatched Homestay',
        category: 'Budget Homestay',
        priceRange: '₹1,500 - ₹2,800 / night',
        features: ['100% Organic Meals', 'Eco-Dry Composting Toilets', 'Village elder storytelling']
      }
    ],
    localExperiences: [
      {
        title: 'Community Village Cleanliness & Composting Tour',
        duration: '1 hour',
        vibe: 'Inspiring & Civic',
        sustainabilityNote: 'Learn how the entire community maintains zero litter without municipal municipal machinery.'
      }
    ]
  }
];
