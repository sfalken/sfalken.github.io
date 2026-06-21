import type { BudgetCategory } from './types';
import budgetBlobsRaw from './budget-pii-blobs.json';
const budgetBlobs = budgetBlobsRaw as Record<string, string>;

export const budgetCategories: BudgetCategory[] = [
  {
    id: 'flights',
    label: 'Flights',
    icon: '✈️',
    items: [
      { id: 'flight-outbound', label: 'Outbound flight (confirmed)', estimated: 2596, currency: 'USD', _pii: budgetBlobs['flight-outbound'] || undefined },
      { id: 'flight-return',   label: 'Return flight (confirmed)',   estimated: 2596, currency: 'USD', _pii: budgetBlobs['flight-return']   || undefined },
    ],
  },
  {
    id: 'accommodation',
    label: 'Accommodation',
    icon: '🏨',
    items: [
      { id: 'hotel-andels',        label: 'Prague accommodation, 6 nights (Jun 11–17)', estimated: 1152, currency: 'USD', _pii: budgetBlobs['hotel-andels']        || undefined },
      { id: 'hotel-hilton-prague', label: 'Prague accommodation, 5 nights (Jun 17–22)', estimated: 850,  currency: 'USD', _pii: budgetBlobs['hotel-hilton-prague'] || undefined },
      { id: 'hotel-nuremberg',     label: 'Nuremberg accommodation, 7 nights (Jun 22–29)', estimated: 1260, currency: 'USD', _pii: budgetBlobs['hotel-nuremberg']   || undefined },
    ],
  },
  {
    id: 'transport',
    label: 'Inter-City Transport',
    icon: '🚆',
    items: [
      { id: 'bus-prague-nuremberg', label: 'Bus Prague → Nuremberg (FlixBus / RegioJet)', estimated: 550, currency: 'CZK', note: 'From Florenc terminal, ~4 hrs' },
      { id: 'airport-transfers', label: 'Airport transfers (both ends)', estimated: 30, currency: 'EUR', note: 'Public transit both cities' },
      { id: 'rothenburg-daytrip', label: 'Day trip to Rothenburg ob der Tauber', estimated: 20, currency: 'EUR', note: 'Round trip by train' },
    ],
  },
  {
    id: 'food',
    label: 'Food & Dining',
    icon: '🍽️',
    items: [
      { id: 'food-prague', label: 'Prague food budget (8 days × 600 CZK)', estimated: 4800, currency: 'CZK', note: 'Mix of casual and nice dinners' },
      { id: 'food-nuremberg', label: 'Nuremberg food budget (11 days × 35 EUR)', estimated: 385, currency: 'EUR', note: 'Bratwurst + local restaurants' },
      { id: 'special-dinners', label: 'Special dinners (Esszimmer, Na Kopci, Eska)', estimated: 150, currency: 'EUR', note: 'Budget for 3 splurge meals' },
    ],
  },
  {
    id: 'local-transport',
    label: 'Local Transport',
    icon: '🚇',
    items: [
      { id: 'transit-prague', label: 'Prague transit (8 days, Lítačka passes)', estimated: 800, currency: 'CZK', note: '24-hr or multi-day passes via app' },
      { id: 'transit-nuremberg', label: 'Nuremberg VGN transit (11 days)', estimated: 55, currency: 'EUR', note: '7-day + 4-day passes or daily' },
    ],
  },
  {
    id: 'activities',
    label: 'Activities & Sightseeing',
    icon: '🎭',
    items: [
      { id: 'prague-castle', label: 'Prague Castle complex', estimated: 350, currency: 'CZK' },
      { id: 'jewish-quarter', label: 'Jewish Quarter (Josefov)', estimated: 500, currency: 'CZK' },
      { id: 'petrin', label: 'Petřín lookout tower', estimated: 150, currency: 'CZK' },
      { id: 'zizkov-tower', label: 'Žižkov TV Tower', estimated: 250, currency: 'CZK' },
      { id: 'nuremberg-castle', label: 'Nuremberg Imperial Castle', estimated: 7, currency: 'EUR' },
      { id: 'german-museum', label: 'German National Museum', estimated: 8, currency: 'EUR' },
      { id: 'docu-center', label: 'Documentation Center', estimated: 6, currency: 'EUR' },
      { id: 'toy-museum', label: 'Toy Museum (Spielzeugmuseum)', estimated: 6, currency: 'EUR' },
      { id: 'rothenburg-crime', label: 'Medieval Crime Museum (Rothenburg)', estimated: 8, currency: 'EUR' },
    ],
  },
  {
    id: 'shopping',
    label: 'Shopping & Souvenirs',
    icon: '🛍️',
    items: [
      { id: 'shopping-prague', label: 'Prague souvenirs (Bohemian garnet, Becherovka)', estimated: 1500, currency: 'CZK', note: 'Buy real products, avoid tourist traps' },
      { id: 'shopping-nuremberg', label: 'Nuremberg (Lebkuchen, wooden toys, wine)', estimated: 60, currency: 'EUR' },
    ],
  },
  {
    id: 'connectivity',
    label: 'Connectivity',
    icon: '📶',
    items: [
      { id: 'sim-card', label: 'EU SIM or roaming plan', estimated: 30, currency: 'EUR', note: 'EU roaming included in most US plans now; verify with carrier' },
      { id: 'vpn', label: 'VPN subscription (optional)', estimated: 5, currency: 'USD' },
    ],
  },
  {
    id: 'events',
    label: 'Conference & Events',
    icon: '💻',
    items: [
      { id: 'flock-registration', label: 'Flock to Fedora registration', estimated: 0, currency: 'USD', note: 'Usually free for contributors' },
      { id: 'flock-social', label: 'Flock social events & dinners', estimated: 3000, currency: 'CZK', note: 'Budget for conference social dinners' },
      { id: 'opensuse-registration', label: 'openSUSE Conference registration', estimated: 0, currency: 'EUR', note: 'Usually free / donation-based' },
      { id: 'opensuse-social', label: 'openSUSE social events', estimated: 60, currency: 'EUR', note: 'Budget for conference party, speaker dinner' },
    ],
  },
  {
    id: 'misc',
    label: 'Miscellaneous',
    icon: '🎲',
    items: [
      { id: 'travel-insurance', label: 'Travel insurance', estimated: 80, currency: 'USD', note: 'Strongly recommended for Europe' },
      { id: 'ice-cream-selfies', label: 'Ice cream selfie fund 🍦', estimated: 100, currency: 'EUR', note: '8 spots × ~5 EUR each + extras' },
      { id: 'contingency', label: 'Contingency / unexpected costs', estimated: 200, currency: 'EUR', note: '~10% buffer for surprises' },
    ],
  },
];

export const LOCAL_CURRENCIES = ['CZK', 'EUR'];
export const HOME_CURRENCY = 'USD';
