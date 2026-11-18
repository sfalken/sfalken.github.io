import type { BudgetCategory } from './types';
import budgetBlobsRaw from './budget-pii-blobs.json';
const budgetBlobs = budgetBlobsRaw as Record<string, string>;

// Potential trip, Jan 26–30 2027, solo, from Seattle (SEA). All figures are estimates; nothing is booked.
export const budgetCategories: BudgetCategory[] = [
  {
    id: 'flights',
    label: 'Flights',
    icon: '✈️',
    items: [
      { id: 'flight-outbound', label: 'Outbound SEA → BRU (estimate)', estimated: 750, currency: 'USD', note: 'Not booked. Typically one stop (AMS/CDG/LHR/FRA); depart Jan 26, arrive Jan 27.', _pii: budgetBlobs['flight-outbound'] || undefined },
      { id: 'flight-return',   label: 'Return BRU → SEA (estimate)',   estimated: 750, currency: 'USD', note: 'Not booked. Depart Jan 30. Fares rise sharply if FOSDEM-weekend demand pushes prices up.', _pii: budgetBlobs['flight-return'] || undefined },
    ],
  },
  {
    id: 'accommodation',
    label: 'Accommodation',
    icon: '🏨',
    items: [
      { id: 'hotel-brussels', label: 'Brussels hotel, 3 nights (Jan 27–30)', estimated: 450, currency: 'EUR', note: 'DoubleTree conference-block rate guess (~€150/night) — confirm room-block price; city tax may be extra', _pii: budgetBlobs['hotel-brussels'] || undefined },
    ],
  },
  {
    id: 'transport',
    label: 'Inter-City Transport',
    icon: '🚆',
    items: [
      { id: 'airport-train', label: 'Airport ↔ Brussels-Nord trains (both ways)', estimated: 28, currency: 'EUR', note: 'Includes airport supplement; ~20 min each way' },
    ],
  },
  {
    id: 'food',
    label: 'Food & Dining',
    icon: '🍽️',
    items: [
      { id: 'food-daily', label: 'Daily food (4 days × €75)', estimated: 300, currency: 'EUR', note: 'Padded ~25% over a typical €60/day; the past Prague trip ran well over its food estimate' },
      { id: 'special-dinner', label: 'Special dinner (Belga Queen)', estimated: 70, currency: 'EUR', note: 'One splurge meal' },
    ],
  },
  {
    id: 'local-transport',
    label: 'Local Transport',
    icon: '🚇',
    items: [
      { id: 'transit-stib', label: 'STIB metro/tram (10-trip card or day passes)', estimated: 25, currency: 'EUR', note: 'Buy on the STIB app or at machines; contactless also works' },
    ],
  },
  {
    id: 'activities',
    label: 'Activities & Sightseeing',
    icon: '🎭',
    items: [
      { id: 'comic-center', label: 'Belgian Comic Strip Center', estimated: 14, currency: 'EUR' },
      { id: 'waffles-treats', label: 'Waffles, speculoos & snacks', estimated: 20, currency: 'EUR' },
    ],
  },
  {
    id: 'shopping',
    label: 'Shopping & Souvenirs',
    icon: '🛍️',
    items: [
      { id: 'shopping-brussels', label: 'Chocolate, beer & souvenirs', estimated: 60, currency: 'EUR', note: 'Galeries Royales Saint-Hubert and Sablon chocolatiers' },
    ],
  },
  {
    id: 'connectivity',
    label: 'Connectivity',
    icon: '📶',
    items: [
      { id: 'sim-card', label: 'EU eSIM or roaming plan', estimated: 35, currency: 'USD', note: 'Verify carrier roaming first; past trip spent about $40' },
    ],
  },
  {
    id: 'events',
    label: 'Conference & Events',
    icon: '💻',
    items: [
      { id: 'centos-registration', label: 'CentOS Connect registration', estimated: 0, currency: 'USD', note: 'Believed free (registration required) — confirm on centos.org/events/connect' },
      { id: 'superstack-launch', label: 'superSTACK launch event (potential)', estimated: 0, currency: 'EUR', note: 'Details not yet public; update if tickets are charged' },
      { id: 'centos-social', label: 'Conference social events & dinners', estimated: 60, currency: 'EUR', note: 'Group dinners, drinks' },
    ],
  },
  {
    id: 'misc',
    label: 'Miscellaneous',
    icon: '🎲',
    items: [
      { id: 'travel-insurance', label: 'Travel insurance', estimated: 60, currency: 'USD' },
      { id: 'ice-cream-selfies', label: 'Ice cream selfie fund 🍦', estimated: 20, currency: 'EUR', note: '3 spots × ~€5 + extras' },
      { id: 'contingency', label: 'Contingency / unexpected costs', estimated: 100, currency: 'EUR', note: '~10% buffer' },
    ],
  },
];

export const LOCAL_CURRENCIES = ['EUR'];
export const HOME_CURRENCY = 'USD';
