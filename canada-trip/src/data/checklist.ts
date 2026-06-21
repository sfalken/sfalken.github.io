import type { ChecklistCategory } from './types';

export const checklistCategories: ChecklistCategory[] = [
  {
    id: 'driving-border',
    label: 'Driving & Border Crossing',
    items: [
      { id: 'passport', label: 'Pack valid US passport (required to enter Canada)' },
      { id: 'nexus', label: 'NEXUS card (if you have one — use the NEXUS lane for faster crossing)' },
      { id: 'vehicle-registration', label: 'Vehicle registration in the car' },
      { id: 'insurance-proof', label: 'Proof of auto insurance — confirm your US policy covers Canada (most do)' },
      { id: 'border-wait', label: 'Check border wait times before departing — use the CBSA Border Wait Time app or BorderXing' },
      { id: 'early-departure', label: 'Depart Seattle by 6–7am to minimize border wait and arrive before FOSSY starts' },
      { id: 'cbsa-declaration', label: 'Know CBSA rules: no fresh fruit/vegetables/meat from US. $800 USD personal exemption on return.' },
      { id: 'ev-range', label: 'Charge EV to 100% before departing Seattle — no mandatory stop needed for 140-mile drive' },
      { id: 'plugshare', label: 'Download PlugShare app — locate DC fast chargers in Vancouver for top-up charge' },
      { id: 'google-maps-bc', label: 'Download BC offline maps in Google Maps (cell roaming charges may apply)' },
    ],
  },
  {
    id: 'accommodation',
    label: 'Accommodation',
    items: [
      { id: 'hotel-booked', label: 'Book hotel for Aug 6–9 (3 nights) near Vancouver Convention Centre' },
      { id: 'parking', label: 'Confirm hotel parking availability and daily rate' },
      { id: 'ev-charging-hotel', label: 'Check if hotel has EV charging — Westin Bayshore and Fairmont Pacific Rim do' },
      { id: 'hotel-confirm', label: 'Save hotel confirmation email and address offline' },
    ],
  },
  {
    id: 'fossy',
    label: 'FOSSY 2026',
    items: [
      { id: 'fossy-register', label: 'Register for FOSSY at fossy.us' },
      { id: 'fossy-schedule', label: 'Review the FOSSY schedule and bookmark sessions' },
      { id: 'fossy-venue', label: 'Confirm venue address (check fossy.us — venue TBC for 2026)' },
      { id: 'fossy-coc', label: 'Read the FOSSY Code of Conduct' },
      { id: 'fossy-laptop', label: 'Pack laptop and charger for workshops' },
      { id: 'fossy-cards', label: 'Pack business cards or set up digital contact card (e.g. Linktree)' },
      { id: 'fossy-stickers', label: 'Bring project stickers for the swag table' },
      { id: 'icecream-scout', label: 'Scout ice cream selfie spots near the convention centre (Soft Peaks in Gastown is closest)' },
    ],
  },
  {
    id: 'documents',
    label: 'Documents & Insurance',
    items: [
      { id: 'travel-insurance', label: 'Purchase travel insurance covering Canada' },
      { id: 'health-insurance', label: 'Confirm health insurance covers international travel (Canada has public healthcare but it doesn\'t cover visitors)' },
      { id: 'booking-confirms', label: 'Save all booking confirmations offline (hotel, any reservations)' },
      { id: 'emergency-contacts', label: 'Save hotel address and emergency contacts in phone' },
    ],
  },
  {
    id: 'activities',
    label: 'Dining & Activities',
    items: [
      { id: 'miku-reservation', label: 'Book Miku Restaurant via OpenTable — reserve 2–3 weeks in advance' },
      { id: 'carderos-reservation', label: 'Book Cardero\'s for the waterfront dinner — request a patio table' },
      { id: 'granville-island', label: 'Plan Granville Island morning — market opens 9am daily' },
      { id: 'stanley-park', label: 'Walk or bike the Stanley Park seawall (10.5 km loop)' },
      { id: 'icecream-la-casa', label: 'Make time for La Casa Gelato — it\'s East Vancouver but absolutely worth the Uber' },
    ],
  },
  {
    id: 'money',
    label: 'Money & Connectivity',
    items: [
      { id: 'notify-bank', label: 'Notify bank and credit card of travel to Canada' },
      { id: 'cad-cash', label: 'Get some CAD cash (~$100 CAD) for tips, farmers market, and small vendors who prefer cash' },
      { id: 'fx-rate', label: 'Check current USD/CAD exchange rate — budget at ~1 USD = 1.35 CAD' },
      { id: 'roaming-plan', label: 'Confirm mobile carrier has Canada coverage (T-Mobile Magenta+ and AT&T Unlimited include Canada)' },
      { id: 'tap-to-pay', label: 'Tap-to-pay is universal in Vancouver — less cash needed than the US' },
    ],
  },
  {
    id: 'packing',
    label: 'Packing (August in Vancouver)',
    items: [
      { id: 'layers', label: 'Pack layers — Vancouver August temps 18–25°C (64–77°F), cooler evenings near the water' },
      { id: 'rain-jacket', label: 'Light rain jacket — Vancouver is the "City of Rain" but August is actually its driest month. Still bring one.' },
      { id: 'comfortable-shoes', label: 'Comfortable walking shoes — the seawall and Gastown involve lots of cobblestones and pavement' },
      { id: 'sunscreen', label: 'Sunscreen — UV is strong at 49°N in August, especially on the water' },
      { id: 'power-bank', label: 'Portable power bank for all-day conference use' },
      { id: 'reusable-bag', label: 'Reusable bag — BC has a plastic bag ban. Bring your own for Granville Island shopping.' },
      { id: 'laptop-bag', label: 'Laptop bag/backpack suitable for the conference' },
      { id: 'ev-charger', label: 'EV charging adapter if your car uses non-standard connector (CCS2 / CHAdeMO adapter)' },
    ],
  },
  {
    id: 'before-departure',
    label: 'Before Departure (Day of Drive)',
    items: [
      { id: 'ev-full', label: 'Charge EV to 100% the night before departing' },
      { id: 'route-planned', label: 'Route planned: I-5 N → Peace Arch (BC-99) → BC-99 N to Vancouver' },
      { id: 'border-time', label: 'Set phone alarm for early departure — 6am or earlier is ideal' },
      { id: 'offline-maps', label: 'Offline maps downloaded — Vancouver + route' },
      { id: 'snacks-drive', label: 'Pack snacks and water for the drive (helps skip stops and beats the border faster)' },
      { id: 'luggage-photo', label: 'Photo your luggage and pack contents for insurance purposes' },
    ],
  },
];
