import type { ChecklistCategory } from './types';

export const checklistCategories: ChecklistCategory[] = [
  {
    id: 'decision',
    title: 'Decide & Confirm',
    icon: '🤔',
    items: [
      { id: 'decide-go', label: 'Decide whether to go (potential trip — nothing booked)', priority: 'high' },
      { id: 'confirm-superstack', label: 'Confirm superSTACK launch event details (venue, time, registration)', priority: 'high' },
      { id: 'check-fosdem-dates', label: 'Check FOSDEM 2027 dates and decide whether to stay for it', priority: 'medium' },
    ],
  },
  {
    id: 'flights-transport',
    title: 'Flights & Transport',
    icon: '✈️',
    items: [
      { id: 'book-outbound-flight', label: 'Book outbound flight SEA → BRU (depart Jan 26, arrive Jan 27)', priority: 'high' },
      { id: 'book-return-flight', label: 'Book return flight BRU → SEA (Jan 30)', priority: 'high' },
      { id: 'airport-train-plan', label: 'Plan Brussels Airport → Brussels-Nord train (Belgian Rail app)', priority: 'medium' },
      { id: 'check-in-online', label: 'Check in for flights online (24 hrs before)', priority: 'high' },
    ],
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    icon: '🏨',
    items: [
      { id: 'book-hotel-brussels', label: 'Book Brussels hotel — check CentOS Connect room block at the DoubleTree first', priority: 'high' },
      { id: 'confirm-early-checkin', label: 'Request early check-in if arriving before noon', priority: 'low' },
      { id: 'note-hotel-addresses', label: 'Save hotel address offline (Maps app)', priority: 'medium' },
    ],
  },
  {
    id: 'documents',
    title: 'Documents & Insurance',
    icon: '🛂',
    items: [
      { id: 'check-passport', label: 'Check passport validity (3+ months beyond departure; 6+ recommended)', priority: 'high' },
      { id: 'etias-check', label: 'Check ETIAS status for Schengen entry (US citizens) and complete if required', priority: 'high' },
      { id: 'travel-insurance', label: 'Purchase travel insurance with medical coverage', priority: 'high' },
      { id: 'copy-documents', label: 'Scan/photo: passport, insurance, bookings — save to cloud', priority: 'high' },
      { id: 'emergency-contacts', label: 'Note US Embassy Brussels contact details', priority: 'medium' },
    ],
  },
  {
    id: 'conferences',
    title: 'Conference Prep',
    icon: '💻',
    items: [
      { id: 'centos-registration', label: 'Register for CentOS Connect (centos.org/events/connect)', priority: 'high' },
      { id: 'centos-schedule', label: 'Review CentOS Connect schedule, plan sessions to attend', priority: 'medium' },
      { id: 'superstack-register', label: 'Register for superSTACK launch event if attending (Jan 28)', priority: 'medium' },
      { id: 'conference-stickers', label: 'Pack project stickers and swag to give out', priority: 'medium' },
      { id: 'business-cards', label: 'Bring business cards or QR code for contact exchange', priority: 'low' },
      { id: 'demo-laptop', label: 'Configure demo laptop / VM for conference demos', priority: 'medium' },
      { id: 'ice-cream-selfie-scout', label: 'Scout ice cream selfie spot near venue (Gaston, Giotto)', priority: 'medium' },
    ],
  },
  {
    id: 'activities-bookings',
    title: 'Activities & Bookings',
    icon: '🎭',
    items: [
      { id: 'book-belga-queen', label: 'Reserve dinner at Belga Queen (direct — no Resy listing found)', priority: 'medium' },
      { id: 'comic-center-hours', label: 'Check Belgian Comic Strip Center hours for Jan 30', priority: 'low' },
      { id: 'giotto-hours', label: 'Check Gelateria Giotto winter opening hours', priority: 'low' },
    ],
  },
  {
    id: 'money-connectivity',
    title: 'Money & Connectivity',
    icon: '💳',
    items: [
      { id: 'notify-bank', label: 'Notify bank/credit cards of travel to Belgium', priority: 'high' },
      { id: 'get-euros', label: 'Get some EUR cash (small bills for frites stands and cafés)', priority: 'medium' },
      { id: 'check-roaming', label: 'Check phone plan EU roaming, or buy an eSIM', priority: 'high' },
      { id: 'download-maps', label: 'Download offline maps for Brussels', priority: 'high' },
      { id: 'stib-app', label: 'Install STIB-MIVB app for metro/tram tickets', priority: 'medium' },
      { id: 'sncb-app', label: 'Install SNCB/NMBS Belgian Rail app for airport train', priority: 'medium' },
    ],
  },
  {
    id: 'packing',
    title: 'Packing (January in Brussels)',
    icon: '🎒',
    items: [
      { id: 'pack-coat', label: 'Pack a warm waterproof coat — Brussels in January is 0–6°C and rainy', priority: 'high' },
      { id: 'pack-layers', label: 'Pack layers, hat and gloves', priority: 'medium' },
      { id: 'pack-walking-shoes', label: 'Pack waterproof walking shoes (cobblestones)', priority: 'high' },
      { id: 'pack-power-adapter', label: 'Pack EU power adapter (Type E/F)', priority: 'high' },
      { id: 'pack-laptop', label: 'Pack laptop + conference cables + adapters', priority: 'high' },
      { id: 'pack-chargers', label: 'Pack all chargers + power bank', priority: 'high' },
      { id: 'pack-meds', label: 'Pack any prescription medications + basic first aid', priority: 'high' },
    ],
  },
  {
    id: 'before-departure',
    title: 'Before You Depart',
    icon: '🚀',
    items: [
      { id: 'confirm-all-bookings', label: 'Re-confirm hotel and restaurant bookings', priority: 'high' },
      { id: 'set-out-of-office', label: 'Set out-of-office email auto-reply', priority: 'medium' },
      { id: 'charge-devices', label: 'Fully charge all devices before leaving', priority: 'medium' },
      { id: 'backup-laptop', label: 'Back up laptop before leaving', priority: 'medium' },
      { id: 'export-itinerary', label: 'Export this itinerary + budget to phone for offline access', priority: 'high' },
    ],
  },
];
