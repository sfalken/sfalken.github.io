import type { BudgetCategory } from './types';

export const defaultExchangeRate = 1.35; // 1 USD = 1.35 CAD (editable in-app)

export const budgetCategories: BudgetCategory[] = [
  {
    id: 'driving',
    label: 'Driving & Border',
    icon: '🚗',
    items: [
      { id: 'gas-rt', label: 'Gas — round trip SEA ↔ Vancouver (~490 km, 19 L/100km)', estimated: 155, currency: 'CAD', note: '~93 L total (WA + BC legs). BC pump price ~$1.70 CAD/L; WA is cheaper so fill up before the border on the way back.' },
      { id: 'parking-vancouver', label: 'Parking in Vancouver (3 nights)', estimated: 105, currency: 'CAD', note: '~$35 CAD/night at hotel parkade or nearby lot. Fairmont valet is ~$50/night.' },
    ],
  },
  {
    id: 'accommodation',
    label: 'Accommodation',
    icon: '🏨',
    items: [
      { id: 'hotel-nights', label: 'Hotel (3 nights, Aug 6–9)', estimated: 855, currency: 'CAD', note: 'Based on mid-range ~$285 CAD/night. Sheraton Wall Centre or similar.' },
    ],
  },
  {
    id: 'food',
    label: 'Food & Dining',
    icon: '🍽️',
    items: [
      { id: 'breakfasts', label: 'Breakfasts (4 days)', estimated: 80, currency: 'CAD', note: '~$20 CAD/day — hotel, café, or Granville Island market' },
      { id: 'lunches', label: 'Lunches (4 days)', estimated: 100, currency: 'CAD', note: '~$25 CAD/day — Japadog, food trailers, convention centre café' },
      { id: 'dinners', label: 'Dinners (4 days)', estimated: 280, currency: 'CAD', note: '~$70 CAD/day — Steamworks, Miku, Cardero\'s, Fable. Miku will be ~$90+' },
      { id: 'snacks-coffee', label: 'Snacks & coffee', estimated: 60, currency: 'CAD', note: 'Vancouver coffee scene is excellent — Revolver, 49th Parallel, Matchstick' },
    ],
  },
  {
    id: 'local-transport',
    label: 'Local Transport',
    icon: '🚌',
    items: [
      { id: 'skytrain-bus', label: 'SkyTrain / buses', estimated: 30, currency: 'CAD', note: 'Compass card (~$10 CAD) + a few rides. Most conference sites are walkable.' },
      { id: 'rideshare', label: 'Rideshare (Uber/Lyft)', estimated: 60, currency: 'CAD', note: 'For La Casa Gelato, Fable Kitchen, Earnest — budget for 4–5 rides' },
    ],
  },
  {
    id: 'activities',
    label: 'Activities & Sightseeing',
    icon: '🎭',
    items: [
      { id: 'granville-island', label: 'Granville Island Market', estimated: 30, currency: 'CAD', note: 'Free entry — budget for food stalls and artisan goods' },
      { id: 'stanley-park', label: 'Stanley Park / Seawall', estimated: 0, currency: 'CAD', note: 'Free to explore. Bike rental ~$35 CAD if desired.' },
      { id: 'bike-rental', label: 'Seawall bike rental (optional)', estimated: 35, currency: 'CAD', note: 'Mobi Bike Share or rental shop near Stanley Park entrance' },
    ],
  },
  {
    id: 'events',
    label: 'FOSSY 2026',
    icon: '🐧',
    items: [
      { id: 'fossy-registration', label: 'Conference registration', estimated: 0, currency: 'USD', note: 'FOSSY is typically free or very low cost — check fossy.us for 2026 pricing' },
      { id: 'fossy-socials', label: 'Evening social events', estimated: 40, currency: 'CAD', note: 'Sponsor dinners, hallway track, after-parties' },
    ],
  },
  {
    id: 'icecream',
    label: 'Ice Cream Selfies',
    icon: '🍦',
    items: [
      { id: 'icecream-soft-peaks', label: 'Soft Peaks — Gastown (Day 1)', estimated: 8, currency: 'CAD' },
      { id: 'icecream-rain-shine', label: 'Rain or Shine (Day 2)', estimated: 9, currency: 'CAD' },
      { id: 'icecream-la-casa', label: 'La Casa Gelato — 218 flavors! (Day 4)', estimated: 10, currency: 'CAD' },
      { id: 'icecream-earnest', label: 'Earnest Ice Cream (bonus scoop)', estimated: 9, currency: 'CAD', note: 'Because Vancouver has too many great options' },
    ],
  },
  {
    id: 'shopping',
    label: 'Shopping & Souvenirs',
    icon: '🛍️',
    items: [
      { id: 'granville-artisans', label: 'Granville Island artisan goods', estimated: 80, currency: 'CAD' },
      { id: 'conference-swag', label: 'FOSSY swag / merch', estimated: 30, currency: 'CAD' },
      { id: 'general-shopping', label: 'General Vancouver shopping', estimated: 60, currency: 'CAD' },
    ],
  },
  {
    id: 'misc',
    label: 'Miscellaneous',
    icon: '🎒',
    items: [
      { id: 'travel-insurance', label: 'Travel insurance', estimated: 35, currency: 'USD' },
      { id: 'roaming-data', label: 'Mobile data roaming / Canadian SIM', estimated: 20, currency: 'USD', note: 'Check your carrier\'s Canada roaming plan. T-Mobile and AT&T often include Canada.' },
      { id: 'misc-buffer', label: 'Miscellaneous buffer', estimated: 100, currency: 'CAD' },
    ],
  },
];
