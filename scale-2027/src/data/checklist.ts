import type { ChecklistCategory } from './types';

export const checklistCategories: ChecklistCategory[] = [
  {
    id: 'flights-transport',
    label: 'Flights & Transport',
    items: [
      { id: 'flight-booked', label: 'Book round-trip flight SEA → LAX or BUR → SEA (arrive Apr 1, leave Apr 4)' },
      { id: 'flight-checkin', label: 'Check in online 24 hrs before departure' },
      { id: 'airport-ride', label: 'Plan the airport-to-Pasadena ride (BUR is ~25 min; LAX is 45–75 min)' },
      { id: 'return-ride', label: 'Allow extra time for Sunday-afternoon traffic back to the airport' },
    ],
  },
  {
    id: 'accommodation',
    label: 'Accommodation',
    items: [
      { id: 'hotel-booked', label: 'Book hotel for Apr 1–4 (3 nights) via the SCaLE hotel link or another near the venue' },
      { id: 'hotel-confirm', label: 'Save hotel confirmation email and address to phone' },
      { id: 'hotel-checkin-time', label: 'Confirm check-in time and early luggage drop for Thursday arrival' },
    ],
  },
  {
    id: 'scale',
    label: 'SCaLE 24x',
    items: [
      { id: 'scale-register', label: 'Register for SCaLE 24x at register.socallinuxexpo.org (SCaLE Pass; watch for early-bird pricing)' },
      { id: 'scale-schedule', label: 'Review the SCaLE 24x schedule and bookmark sessions once published' },
      { id: 'scale-colocated', label: 'Check co-located events (PostgreSQL@SCaLE, Cloud Native Days LA, DevOpsDay LA) and whether the pass covers them' },
      { id: 'scale-coc', label: 'Read the Code of Conduct' },
      { id: 'scale-laptop', label: 'Pack laptop and charger for workshops' },
      { id: 'scale-cards', label: 'Pack business cards or set up digital contact card' },
      { id: 'scale-stickers', label: 'Bring project stickers for the swag table' },
      { id: 'icecream-scout', label: 'Scout ice cream selfie spots near the venue (Wanderlust, Salt & Straw, Ice Cream Lab, Kinrose)' },
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
      { id: 'raymond-reservation', label: 'Reserve dinner at The Raymond for Saturday (OpenTable or restaurant site)' },
      { id: 'bone-kettle', label: 'Check Bone Kettle hours and reservations for Thursday dinner' },
      { id: 'metro-l', label: 'Optional: check Metro L Line timetable for a trip into downtown LA' },
    ],
  },
  {
    id: 'money',
    label: 'Money & Connectivity',
    items: [
      { id: 'notify-bank', label: 'Notify bank/credit card of travel dates' },
      { id: 'cash', label: 'Carry a little cash ($40–60) for tips and small purchases' },
      { id: 'data-plan', label: 'Verify mobile data plan covers California (most US plans do)' },
      { id: 'lyft-uber', label: 'Set up Lyft/Uber for the airport rides' },
    ],
  },
  {
    id: 'packing',
    label: 'Packing (April in Pasadena)',
    items: [
      { id: 'layers', label: 'Pack layers — Pasadena in early April is typically around 50s–70s°F (10–25°C); check the forecast' },
      { id: 'light-jacket', label: 'Light jacket for evenings' },
      { id: 'comfortable-shoes', label: 'Comfortable walking shoes — hotels, venue, and Old Pasadena are all walkable' },
      { id: 'power-bank', label: 'Portable power bank for all-day conference use' },
      { id: 'sunscreen', label: 'Sunscreen — Southern California sun is strong' },
      { id: 'reusable-bag', label: 'Reusable bag for swag and shopping' },
      { id: 'laptop-bag', label: 'Laptop bag/backpack suitable for the conference' },
    ],
  },
  {
    id: 'before-departure',
    label: 'Before Departure',
    items: [
      { id: 'budget-review', label: 'Review budget and load this app on your phone' },
      { id: 'offline-maps', label: 'Download Pasadena offline maps (Google Maps)' },
      { id: 'emergency-contacts', label: 'Save emergency contacts and hotel address in phone' },
      { id: 'luggage-photo', label: 'Photo your luggage tag and ID for insurance' },
    ],
  },
];
