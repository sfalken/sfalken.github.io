import type { ChecklistCategory } from './types';

export const checklistCategories: ChecklistCategory[] = [
  {
    id: 'flights-transport',
    label: 'Flights & Transport',
    items: [
      { id: 'flight-booked', label: 'Book round-trip flight to BOS (Logan)' },
      { id: 'flight-checkin', label: 'Check in online (24 hrs before departure)' },
      { id: 'mbta-loaded', label: 'Load MBTA CharlieCard or use Apple/Google Pay on the T' },
      { id: 'silver-line-route', label: 'Know Silver Line SL1 route from Logan to South Station' },
    ],
  },
  {
    id: 'accommodation',
    label: 'Accommodation',
    items: [
      { id: 'hotel-booked', label: 'Book hotel for Sep 22–26 (4 nights)' },
      { id: 'hotel-confirm', label: 'Save hotel confirmation email' },
      { id: 'hotel-checkin-time', label: 'Confirm check-in time with hotel' },
    ],
  },
  {
    id: 'devconf',
    label: 'DevConf.US',
    items: [
      { id: 'devconf-register', label: 'Register for DevConf.US at devconf.us' },
      { id: 'devconf-schedule', label: 'Review the conference schedule and bookmark sessions' },
      { id: 'devconf-coc', label: 'Read the Code of Conduct' },
      { id: 'devconf-badge', label: 'Check badge pickup process (day-of vs pre-registration)' },
      { id: 'devconf-laptop', label: 'Pack laptop and charger for workshops/talks' },
      { id: 'devconf-business-cards', label: 'Pack business cards or set up digital card (e.g. Apple/Google Wallet contact)' },
      { id: 'devconf-stickers', label: 'Bring project stickers for the swag table' },
      { id: 'icecream-scout', label: "Scout ice cream selfie spot near venue (J.P. Licks, Emack & Bolio's)" },
    ],
  },
  {
    id: 'documents',
    label: 'Documents & Insurance',
    items: [
      { id: 'photo-id', label: 'Pack government-issued photo ID or passport' },
      { id: 'travel-insurance', label: 'Purchase travel insurance' },
      { id: 'health-insurance', label: 'Verify health insurance covers domestic travel' },
      { id: 'hotel-confirms', label: 'Save all booking confirmations offline' },
    ],
  },
  {
    id: 'activities',
    label: 'Activities & Bookings',
    items: [
      { id: 'aquarium-tickets', label: 'Buy New England Aquarium tickets online (skip the line)' },
      { id: 'mfa-tickets', label: 'Buy MFA tickets in advance (optional but recommended)' },
      { id: 'neptune-plan', label: 'Plan Neptune Oyster visit for a weekday lunch to minimize wait' },
      { id: 'myers-chang-res', label: 'Make reservation at Myers + Chang (OpenTable)' },
    ],
  },
  {
    id: 'money',
    label: 'Money & Connectivity',
    items: [
      { id: 'notify-bank', label: 'Notify bank/credit card of travel dates' },
      { id: 'credit-card', label: 'Bring credit card with no foreign transaction fees (even domestic for backup)' },
      { id: 'cash', label: 'Carry some cash ($60–100) for tips and small vendors' },
      { id: 'data-plan', label: 'Verify mobile data plan covers Massachusetts' },
    ],
  },
  {
    id: 'packing',
    label: 'Packing (September in Boston)',
    items: [
      { id: 'layers', label: 'Pack layers — Boston Sept temps are 55–75°F (13–24°C), can be cool evenings' },
      { id: 'rain-jacket', label: 'Pack a light rain jacket (Boston weather is unpredictable)' },
      { id: 'comfortable-shoes', label: 'Comfortable walking shoes — Freedom Trail is 2.5 miles of cobblestones' },
      { id: 'power-bank', label: 'Bring a portable power bank for all-day conference use' },
      { id: 'reusable-bag', label: 'Reusable bag for swag, groceries, souvenirs' },
      { id: 'water-bottle', label: 'Reusable water bottle (Boston tap water is excellent)' },
      { id: 'laptop-bag', label: 'Laptop bag or backpack suitable for the conference' },
    ],
  },
  {
    id: 'before-departure',
    label: 'Before Departure',
    items: [
      { id: 'budget-review', label: 'Review budget and load this app on your phone' },
      { id: 'download-offline', label: 'Download Boston offline maps (Google Maps or Maps.me)' },
      { id: 'emergency-contacts', label: 'Save emergency contacts and hotel address in phone' },
      { id: 'luggage-photo', label: 'Photo your luggage tag and ID for insurance purposes' },
    ],
  },
];
