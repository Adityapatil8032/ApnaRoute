# APNA ROUTE - SIH 2026

> **"Your Journey, Your Way."**  
> Smart Tourism Platform with Ground Reality Travel Intelligence.

Built for the **Smart India Hackathon (SIH 2026)** under the **Travel & Tourism** theme.

---

## 🌟 Core Features & Modules

1. **Landing & Authentication Gateway**
   - Brand logo and motto: *"Your Journey, Your Way."*
   - Modern travel-themed hero section.
   - Quick sign-in via Google, Email, or 1-Click Guest Tourist Mode for evaluator testing.
   - Highlights the core problem: knowing on-ground travel conditions before embarking on trips.

2. **Home Dashboard**
   - Personalized traveler welcome banner.
   - Large destination search bar with instant category pills.
   - 4 Quick Feature Hubs: **Weather & Advisory**, **Local Transport**, **Verified Stays**, **Regional Food**.
   - Top-rated Popular Destinations & Curated Hidden Gems.
   - Featured Regional Experiences (e.g. dawn boat rides, living root bridges, Apatani architecture).

3. **Destination Details Page**
   - Immersive hero visual, traveler rating, eco-score, and best season to visit.
   - **Local Transport Availability Matrix (6 Modes)**:
     - Cab, Bike Taxi, Bus, Train, Auto, and Car/Bike Rental.
     - 4 Clear Status Indicators: `Available` (Green), `Limited` (Amber), `Not Available` (Rose), `Data Unavailable` (Slate).
     - Contextual notes (e.g., hill permit rules, prepaid taxi counter guidelines, shared van tariffs).
     - *Zero fake real-time claims* — transparently indicates regional operational baselines ready for Phase 2 API integration.
   - **Weather & Climate Card**: Temperature, precipitation risk, air quality, seasonal windows, and road safety advisories.
   - Places to Explore with entry fees, timings, and local transport advice.
   - Authentic regional cuisine & famous dining spots.
   - Accommodation types (eco-resorts, family homestays, backpacker hostels).
   - Local cultural experiences with sustainability impact tags.

4. **AI Trip Planner**
   - Intuitive form parameters: Destination, Duration (2 to 7 days), Budget level, Thematic Interests, Preferred Ground Transit, Accommodation type.
   - *"Generate My Route"* button with smooth synthesis loading simulation.
   - Clearly labeled **Demo Itinerary Result** with day-by-day timeline, milestones, scheduled transit modes, estimated ground cost, and local pro-tips.
   - "Save Trip" to local trip vault and "Export PDF" actions.

5. **Explore Destinations Page**
   - Categorized across 9 themes: Nature, Beaches, Historical, Religious, Adventure, Culture, Food, Shopping, and Hidden Gems.
   - Live search input and multi-criteria sorting (Highest Rated, Eco-Friendliness Score, Alphabetical).

6. **My Trips Vault**
   - **Saved Trips**: Review, manage, or delete itineraries generated from the AI Trip Planner.
   - **Favourite Destinations**: One-click bookmarking from any destination card.
   - **Previous Itineraries**: Milestones and logged expenses from past journeys.

7. **Verified Travel Services**
   - Categories: Hotels & Stays, Restaurants & Cafes, Certified Local Guides, Transport Operators, Vehicle Rentals, and Activities.
   - SIH verification badges, pricing indicators, feature highlights, and direct inquiry actions.

8. **Sustainable Tourism Hub**
   - Framework empowering village weaver cooperatives, low-impact spillover tourism, and leave-no-trace hydration.
   - Spotlight on lesser-known ecological havens (Ziro Valley, Chopta, Mawlynnong).
   - Interactive **Conscious Indian Traveler Pledge** with real-time counter.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Tailored travel blue brand palette, soft shadows, rounded cards)
- **Icons**: Lucide React
- **Architecture**: Modular, reusable component design without unnecessary heavy libraries.

---

## 🚀 Running the Project Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build
```

Once started, open `http://localhost:5173` in your browser.
