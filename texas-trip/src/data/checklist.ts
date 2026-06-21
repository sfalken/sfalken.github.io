import type { ChecklistCategory } from './types';

export const checklistCategories: ChecklistCategory[] = [
  {
    id: 'flights-transport',
    label: 'Flights & Transport',
    items: [
      { id: 'flight-booked', label: 'Book round-trip flight SEA → AUS → SEA' },
      { id: 'flight-checkin', label: 'Check in online 24 hrs before departure' },
      { id: 'aus-ride', label: 'Arrange Lyft/Uber from AUS to hotel (download app, set up payment)' },
      { id: 'return-ride', label: 'Note: allow 90 min from downtown to AUS — set a calendar reminder' },
    ],
  },
  {
    id: 'accommodation',
    label: 'Accommodation',
    items: [
      { id: 'hotel-booked', label: 'Book hotel for Nov 5–8 (3 nights) near downtown Austin' },
      { id: 'hotel-confirm', label: 'Save hotel confirmation email and address to phone' },
      { id: 'hotel-checkin-time', label: 'Confirm check-in time (most Austin hotels: 3pm)' },
    ],
  },
  {
    id: 'txlf',
    label: 'Texas LinuxFest',
    items: [
      { id: 'txlf-register', label: 'Register for Texas LinuxFest at texaslinuxfest.org' },
      { id: 'txlf-schedule', label: 'Review the TxLF schedule and bookmark sessions' },
      { id: 'txlf-venue', label: 'Confirm venue address (check texaslinuxfest.org — venue may vary by year)' },
      { id: 'txlf-coc', label: 'Read the Code of Conduct' },
      { id: 'txlf-laptop', label: 'Pack laptop and charger for workshops' },
      { id: 'txlf-cards', label: 'Pack business cards or set up digital contact card' },
      { id: 'txlf-stickers', label: 'Bring project stickers for the swag table' },
      { id: 'icecream-scout', label: "Scout ice cream selfie spots near the venue (Amy's, Lick, Cow Tipping)" },
    ],
  },
  {
    id: 'documents',
    label: 'Documents & Insurance',
    items: [
      { id: 'photo-id', label: 'Pack government-issued photo ID (domestic flight)' },
      { id: 'travel-insurance', label: 'Purchase travel insurance' },
      { id: 'health-insurance', label: 'Verify health insurance covers domestic travel' },
      { id: 'booking-confirms', label: 'Save all booking confirmations offline (hotel, flight)' },
    ],
  },
  {
    id: 'activities',
    label: 'Activities & Restaurants',
    items: [
      { id: 'franklin-plan', label: 'Plan Franklin Barbecue visit — arrive by 8–9am Saturday (or go to La Barbecue as backup)' },
      { id: 'uchi-reservation', label: 'Book Uchi reservation via Resy (2–3 weeks in advance)' },
      { id: 'barton-springs', label: 'Check Barton Springs Pool hours and current swim conditions' },
      { id: 'bullock-tickets', label: 'Check Bullock Museum hours (Sun may close early)' },
    ],
  },
  {
    id: 'money',
    label: 'Money & Connectivity',
    items: [
      { id: 'notify-bank', label: 'Notify bank/credit card of travel dates' },
      { id: 'cash', label: 'Carry some cash ($60–80) for food trailers, tips, live music covers' },
      { id: 'data-plan', label: 'Verify mobile data plan covers Texas (most US plans do)' },
      { id: 'lyft-uber', label: 'Set up Lyft/Uber — Austin has no good public transit option' },
    ],
  },
  {
    id: 'packing',
    label: 'Packing (November in Austin)',
    items: [
      { id: 'layers', label: 'Pack layers — Austin Nov temps are 55–72°F (13–22°C), warm days, cool nights' },
      { id: 'light-jacket', label: 'Light jacket or hoodie for evenings' },
      { id: 'comfortable-shoes', label: 'Walking shoes — SoCo and 6th Street involve a lot of pavement' },
      { id: 'swimwear', label: 'Swimwear for Barton Springs Pool (68°F year-round — bracing but great)' },
      { id: 'power-bank', label: 'Portable power bank for all-day conference use' },
      { id: 'sunscreen', label: 'Sunscreen — Texas sun is strong even in November' },
      { id: 'reusable-bag', label: 'Reusable bag for swag, groceries, SoCo shopping' },
      { id: 'laptop-bag', label: 'Laptop bag/backpack suitable for the conference' },
    ],
  },
  {
    id: 'before-departure',
    label: 'Before Departure',
    items: [
      { id: 'budget-review', label: 'Review budget and load this app on your phone' },
      { id: 'offline-maps', label: 'Download Austin offline maps (Google Maps — include East Austin and SoCo)' },
      { id: 'emergency-contacts', label: 'Save emergency contacts and hotel address in phone' },
      { id: 'luggage-photo', label: 'Photo your luggage tag and ID for insurance' },
    ],
  },
];
