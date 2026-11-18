import type { ChecklistCategory } from './types';

export const checklistCategories: ChecklistCategory[] = [
  {
    id: 'driving',
    label: 'Driving & Vehicle',
    items: [
      { id: 'car-check', label: 'Check tires, oil, and fluids before the ~90-mile drive each way' },
      { id: 'fuel-plan', label: 'Fill the tank in Seattle before leaving' },
      { id: 'drive-time', label: 'Leave early Friday; allow for I-5 traffic through Everett and Marysville' },
      { id: 'tulips', label: 'Optional: check Skagit Valley tulip bloom for a detour (Mount Vernon / La Conner)' },
    ],
  },
  {
    id: 'accommodation',
    label: 'Accommodation',
    items: [
      { id: 'hotel-booked', label: 'Book hotel for Apr 23–25 (2 nights) in Bellingham or Fairhaven' },
      { id: 'hotel-block', label: 'Watch the LFNW site/forum for a partner-hotel group block code' },
      { id: 'hotel-parking', label: 'Confirm hotel parking is free' },
      { id: 'hotel-confirm', label: 'Save hotel confirmation email and address to phone' },
    ],
  },
  {
    id: 'lfnw',
    label: 'LinuxFest Northwest',
    items: [
      { id: 'lfnw-cfp', label: 'Decide whether to submit a talk (call for speakers closes Jan 15, 2027)' },
      { id: 'lfnw-register', label: 'Check linuxfestnorthwest.org for attendee registration details once published' },
      { id: 'lfnw-schedule', label: 'Review the LFNW schedule and bookmark sessions once published' },
      { id: 'lfnw-venue', label: 'Confirm venue and parking at Bellingham Technical College, 3028 Lindbergh Ave' },
      { id: 'lfnw-coc', label: 'Read the Code of Conduct / policies' },
      { id: 'lfnw-laptop', label: 'Pack laptop and charger for workshops' },
      { id: 'lfnw-stickers', label: 'Bring project stickers for the swag table' },
      { id: 'icecream-scout', label: 'Scout ice cream selfie spots (Mallard, Sirena, Acme Valley, Edaleen)' },
    ],
  },
  {
    id: 'activities',
    label: 'Activities & Restaurants',
    items: [
      { id: 'carnal-reservation', label: 'Reserve dinner at Carnal for Saturday' },
      { id: 'verify-hours', label: 'Verify restaurant and ice cream hours (Sunday closures)' },
    ],
  },
  {
    id: 'documents',
    label: 'Documents & Insurance',
    items: [
      { id: 'license', label: 'Pack driver\'s license, registration, and insurance card' },
      { id: 'roadside', label: 'Check roadside assistance coverage' },
      { id: 'booking-confirms', label: 'Save all booking confirmations offline' },
    ],
  },
  {
    id: 'money',
    label: 'Money & Connectivity',
    items: [
      { id: 'notify-bank', label: 'No need to notify the bank for in-state travel; just confirm cards work' },
      { id: 'cash', label: 'Carry a little cash ($30–40) for tips and small purchases' },
      { id: 'data-plan', label: 'Check mobile coverage near Bellingham (close to the Canadian border; avoid roaming)' },
    ],
  },
  {
    id: 'packing',
    label: 'Packing (April in Bellingham)',
    items: [
      { id: 'rain-jacket', label: 'Rain jacket and umbrella — April is cool and often showery' },
      { id: 'layers', label: 'Layers for 40s–60s°F (5–15°C) days' },
      { id: 'comfortable-shoes', label: 'Comfortable, water-resistant shoes' },
      { id: 'power-bank', label: 'Portable power bank for all-day conference use' },
      { id: 'laptop-bag', label: 'Laptop bag/backpack suitable for the conference' },
    ],
  },
  {
    id: 'before-departure',
    label: 'Before Departure',
    items: [
      { id: 'budget-review', label: 'Review budget and load this app on your phone' },
      { id: 'offline-maps', label: 'Download Bellingham offline maps (Google Maps)' },
      { id: 'emergency-contacts', label: 'Save emergency contacts and hotel address in phone' },
    ],
  },
];
