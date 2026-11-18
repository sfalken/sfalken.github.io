import type { Restaurant, Day, MapPoint, IceCreamSpot } from './types';

export const venueName = 'University of Washington — Husky Union Building (HUB)';
export const venueAddress = '4001 E Stevens Way NE, Seattle, WA 98195';
export const venueCoordinates: [number, number] = [47.6553, -122.3086];

export const restaurants: Restaurant[] = [
  {
    name: 'Bamboo Sushi (University Village)',
    rating: 4.2,
    cuisine: 'Japanese / Sushi',
    priceRange: '$$$',
    mustTry: ['Crispy rice spicy tuna', 'Rainbow roll', 'Wagyu beef burger'],
    hours: 'Daily, lunch and dinner (check site for current hours)',
    bookingAdvice: 'Book ahead on Resy, especially for weekend dinner',
    tip: "World's first certified sustainable sushi restaurant — same University Village complex as Din Tai Fung and Molly Moon's",
    address: '2675 NE University Village Ln, Seattle, WA 98105',
    website: 'https://bamboosushi.com/location/university-village/details',
    mapsLink: 'https://maps.google.com/?q=Bamboo+Sushi+University+Village+Seattle',
    coordinates: [47.6634, -122.3020],
    resyUrl: 'https://resy.com/cities/seattle-wa/venues/bamboo-sushi-university-village',
  },
  {
    name: 'Din Tai Fung',
    rating: 4.6,
    cuisine: 'Taiwanese',
    priceRange: '$$',
    mustTry: ['Xiao long bao', 'Spicy wontons', 'Fried rice'],
    hours: 'Daily, 11am–9pm (varies by day)',
    bookingAdvice: 'Expect a wait at peak lunch hours — join the virtual queue online before arriving',
    tip: 'A short walk or quick bus ride from campus via University Village — go early to beat the lunch rush',
    address: '2621 NE 46th St, Seattle, WA 98105',
    website: 'https://dtf.com/en-us/locations/seattle-university-village',
    mapsLink: 'https://maps.google.com/?q=Din+Tai+Fung+University+Village+Seattle',
    coordinates: [47.6631, -122.3033],
  },
  {
    name: 'Thai Tom',
    rating: 4.5,
    cuisine: 'Thai',
    priceRange: '$',
    mustTry: ['Pad see ew', 'Panang curry', 'Pad thai'],
    hours: 'Daily, 11am–10pm',
    tip: 'Cash-friendly, cash-only counter service, tiny open kitchen — a U-District institution, expect to wait for a table',
    address: '4543 University Way NE, Seattle, WA 98105',
    mapsLink: 'https://maps.google.com/?q=Thai+Tom+Seattle',
    coordinates: [47.6626, -122.3134],
  },
  {
    name: 'Big Time Brewery & Alehouse',
    rating: 4.3,
    cuisine: 'American / Brewpub',
    priceRange: '$$',
    mustTry: ['House-brewed ales', 'Burgers', 'Fish and chips'],
    hours: 'Daily, 11:30am–close',
    tip: "Seattle's first brewpub (1988) — a solid hallway-track hangout spot after sessions wrap",
    address: '4133 University Way NE, Seattle, WA 98105',
    website: 'https://www.bigtimebrewery.com/',
    mapsLink: 'https://maps.google.com/?q=Big+Time+Brewery+Seattle',
    coordinates: [47.6595, -122.3134],
  },
  {
    name: 'Portage Bay Cafe (Roosevelt)',
    rating: 4.4,
    cuisine: 'American / Brunch',
    priceRange: '$$',
    mustTry: ['French toast', 'Build-your-own granola', 'Dungeness crab cakes benedict'],
    hours: 'Daily, 8am–2pm (brunch hours)',
    bookingAdvice: 'Weekend mornings get a line out the door — go early or expect a wait',
    tip: 'Organic, local-sourced brunch spot a short walk from campus — good option before a Saturday session block',
    address: '4130 Roosevelt Way NE, Seattle, WA 98105',
    website: 'https://www.portagebaycafe.com/roosevelt',
    mapsLink: 'https://maps.google.com/?q=Portage+Bay+Cafe+Roosevelt+Seattle',
    coordinates: [47.6595, -122.3168],
  },
];

export const iceCreamSpots: IceCreamSpot[] = [
  {
    name: "Molly Moon's Homemade Ice Cream",
    address: '2615 NE 46th St, Seattle, WA 98105',
    coordinates: [47.6631, -122.3035],
    signatureFlavors: ['Salted caramel', 'Balsamic strawberry', 'Melted chocolate'],
    mapsLink: 'https://maps.google.com/?q=Molly+Moons+University+Village+Seattle',
    photoNote: 'Seattle-born small-batch chain with a bright, colorful storefront — the classic Day 1 scoop, a short walk from campus via University Village.',
  },
  {
    name: 'Sweet Alchemy Ice Creamery',
    address: '4301 University Way NE, Seattle, WA 98105',
    coordinates: [47.6607, -122.3134],
    signatureFlavors: ['Persian rose', 'Jitter Bars (espresso shortbread + caramel)', 'Banana Nutella'],
    mapsLink: 'https://maps.google.com/?q=Sweet+Alchemy+Ice+Creamery+Seattle',
    photoNote: 'Small-batch, organic, locally sourced flavors right on "The Ave" — right in the heart of the U-District for a Day 2 variety scoop.',
  },
];

export const days: Day[] = [
  {
    date: 'Friday, October 23, 2026',
    label: 'Day 1',
    theme: 'SeaGL Day 1',
    isConferenceDay: true,
    activities: [
      { name: 'Badge pickup & doors open', description: 'Check in at the HUB — SeaGL registration is optional and free; walk-ins welcome.', time: 'Morning', mapsLink: 'https://maps.google.com/?q=Husky+Union+Building+UW' },
      { name: 'Opening remarks & keynote', description: 'Welcome and Day 1 keynote — check the published schedule closer to the date for exact room and time.', time: 'Morning' },
      { name: 'Talk track sessions', description: 'Full slate of community talks across tracks — bookmark sessions once the schedule drops (typically a couple weeks out).', time: 'Midday' },
      { name: 'Lunch break', description: 'Head out to University Way NE ("The Ave") or University Village — see restaurant picks below.', time: 'Lunch' },
      { name: 'Afternoon sessions + hallway track', description: 'More talks, plus the hallway track — SeaGL runs on community conversation as much as the schedule.', time: 'Afternoon' },
      { name: 'Ice cream selfie — Day 1', description: "Molly Moon's, University Village.", time: 'End of day', mapsLink: 'https://maps.google.com/?q=Molly+Moons+University+Village+Seattle' },
    ],
  },
  {
    date: 'Saturday, October 24, 2026',
    label: 'Day 2',
    theme: 'SeaGL Day 2',
    isConferenceDay: true,
    activities: [
      { name: 'Doors open', description: 'Day 2 at the HUB.', time: 'Morning' },
      { name: 'Morning sessions', description: 'Second day of talks. Note: my talk is accepted for SeaGL 2026 — exact day/time TBD until the schedule is published.', time: 'Morning' },
      { name: 'Lunch break', description: 'Rotate to a different spot from Day 1 — Thai Tom or Big Time Brewery are both an easy walk.', time: 'Lunch' },
      { name: 'Afternoon sessions + closing', description: 'Final talk blocks, closing remarks, and (in past years) a raffle/prize giveaway.', time: 'Afternoon' },
      { name: 'Ice cream selfie — Day 2', description: 'Sweet Alchemy Ice Creamery, University Way NE.', time: 'End of day', mapsLink: 'https://maps.google.com/?q=Sweet+Alchemy+Ice+Creamery+Seattle' },
    ],
  },
];

export const mapPoints: MapPoint[] = [
  { name: 'HUB — SeaGL Venue', coordinates: venueCoordinates, category: 'conference', description: 'University of Washington, Husky Union Building', website: 'https://seagl.org/' },
  { name: 'Bamboo Sushi (University Village)', coordinates: [47.6634, -122.3020], category: 'restaurant', description: 'Resy reservations available', website: 'https://bamboosushi.com/location/university-village/details' },
  { name: 'Din Tai Fung', coordinates: [47.6631, -122.3033], category: 'restaurant', website: 'https://dtf.com/en-us/locations/seattle-university-village' },
  { name: 'Thai Tom', coordinates: [47.6626, -122.3134], category: 'restaurant' },
  { name: 'Big Time Brewery & Alehouse', coordinates: [47.6595, -122.3134], category: 'restaurant', website: 'https://www.bigtimebrewery.com/' },
  { name: 'Portage Bay Cafe (Roosevelt)', coordinates: [47.6595, -122.3168], category: 'restaurant', website: 'https://www.portagebaycafe.com/roosevelt' },
  { name: "Molly Moon's Homemade Ice Cream", coordinates: [47.6631, -122.3035], category: 'icecream' },
  { name: 'Sweet Alchemy Ice Creamery', coordinates: [47.6607, -122.3134], category: 'icecream' },
];
