# 🇯🇵 Japan Travel App

A comprehensive 11-day Japan travel companion app built with React and TypeScript, featuring detailed itineraries for Tokyo, Kyoto, and Osaka.

## Features

- **Complete 11-day itinerary** (July 14-24, 2025)
- **Multi-city coverage**: Tokyo → Kyoto → Osaka
- **Real-time day navigation** - automatically opens to current day during trip
- **Comprehensive budget tracking** with city-based cost analysis
- **Weather advisories** and cultural guidance
- **Festival highlights** for special events (Mitama Matsuri, Gion Matsuri)
- **Cultural etiquette** tips for temples and shrines
- **Multiple restaurant options** with detailed recommendations
- **Activity categorization** with custom icons and colors

## Structure

```
components/
├── Header.tsx           # Japan-themed header with Mount Fuji design
├── ActivityCard.tsx     # Enhanced activity cards with festival/cultural info
├── DayNavigation.tsx    # Date navigation component
└── BottomTabs.tsx       # Bottom navigation tabs

views/
├── TodayView.tsx        # Daily itinerary with weather warnings
├── OverviewView.tsx     # Trip overview with city indicators
└── BudgetView.tsx       # Cost breakdown by category and city

constants/
└── activity-config.ts   # Activity types, colors, and icons

itinerary-data.json      # Complete 11-day structured itinerary data
japan-travel-app.tsx     # Main app component
```

## Data Features

- **Weather advisories** for Japan's humid July climate
- **City tracking** across Tokyo, Kyoto, and Osaka
- **Festival integration** with special event highlights
- **Cultural significance** explanations for major attractions
- **Restaurant variety** with multiple options per meal
- **Cost transparency** in both yen and USD

## Usage

The app automatically detects the current date and:
- Opens to today's itinerary during the trip (July 14-24, 2025)
- Shows the first day before the trip starts
- Shows the last day after the trip ends

Perfect for travelers wanting a structured, culturally-aware Japan experience with comprehensive planning and budget tracking.