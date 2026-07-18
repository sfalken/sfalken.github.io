import type { ChecklistCategory } from './types';

export const checklistCategories: ChecklistCategory[] = [
  {
    id: 'speaker-prep',
    label: 'Speaker Prep',
    items: [
      { id: 'slides-final', label: 'Finalize slides and export a PDF backup' },
      { id: 'slides-upload', label: 'Upload slides in advance if the CFP system / schedule tool requests it' },
      { id: 'practice-run', label: 'Do a full practice run and time the talk' },
      { id: 'av-check', label: 'Check AV requirements (adapter type, aspect ratio, remote clicker)' },
      { id: 'laptop-adapter', label: 'Pack the right video adapter for the room projector/display' },
      { id: 'bio-photo', label: 'Submit speaker bio and headshot if requested by organizers' },
      { id: 'backup-usb', label: 'Put a backup copy of slides on a USB drive' },
    ],
  },
  {
    id: 'seagl',
    label: 'SeaGL',
    items: [
      { id: 'seagl-register', label: 'Register at seagl.org (optional, but helps with headcount)' },
      { id: 'seagl-schedule', label: 'Review the published schedule once it drops and bookmark sessions' },
      { id: 'seagl-coc', label: 'Read the Code of Conduct' },
      { id: 'seagl-laptop', label: 'Pack laptop and charger for workshops / note-taking' },
      { id: 'seagl-cards', label: 'Pack business cards or set up a digital contact card' },
      { id: 'seagl-stickers', label: 'Bring project stickers for the swag table' },
      { id: 'icecream-scout', label: "Scout the ice cream selfie spots (Molly Moon's, Sweet Alchemy)" },
    ],
  },
  {
    id: 'getting-there',
    label: 'Getting There',
    items: [
      { id: 'orca-card', label: 'Load the ORCA card (or set up the transit app / tap-to-pay)' },
      { id: 'transit-check', label: 'Check Link light rail / bus schedule and plan the route to the HUB' },
      { id: 'campus-map', label: 'Check the UW campus map — HUB is at 4001 E Stevens Way NE' },
      { id: 'construction-check', label: 'Check for UW campus construction or road closures the week of the event' },
    ],
  },
  {
    id: 'money',
    label: 'Money & Connectivity',
    items: [
      { id: 'orca-balance', label: 'Verify ORCA card balance covers 4 rides' },
      { id: 'cash-tips', label: 'Carry a little cash for tips at food trucks / counter service' },
      { id: 'phone-charged', label: 'Fully charge phone and pack a portable battery' },
    ],
  },
  {
    id: 'packing',
    label: 'Packing (October in Seattle)',
    items: [
      { id: 'rain-jacket', label: 'Pack a rain jacket or umbrella — October in Seattle means rain is likely' },
      { id: 'layers', label: 'Dress in layers — UW campus buildings vary a lot in temperature' },
      { id: 'comfortable-shoes', label: 'Comfortable shoes — campus is spread out, expect a lot of walking' },
      { id: 'laptop-bag', label: 'Laptop bag/backpack suitable for a full conference day' },
      { id: 'water-bottle', label: 'Reusable water bottle' },
    ],
  },
  {
    id: 'before-each-day',
    label: 'Before Each Day',
    items: [
      { id: 'budget-review', label: 'Review the budget page and load this site on your phone' },
      { id: 'weather-check', label: 'Check the weather forecast each morning before heading out' },
      { id: 'devices-charged', label: 'Charge laptop, phone, and any presentation remote overnight' },
    ],
  },
];
