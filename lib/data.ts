export interface Artist {
  name: string
  first: string
  short: string
  tag: string
  handle: string
  email: string
  img: string
  slug: string
  work: number
}

export const artists: Artist[] = [
  { name: 'Orazio (Oz)', first: 'Oz', short: 'OZ', tag: 'Fine line & script', handle: '@oztattooist', email: 'oraziotattooooo@gmail.com', img: '/images/oz.jpg', slug: 'oz', work: 4 },
  { name: 'Tcharna', first: 'Tcharna', short: 'TCH', tag: 'Bold traditional', handle: '@tcharna.tattoos', email: 'tcharna.tattoos@gmail.com', img: '/images/tcharna.jpg', slug: 'tcharna', work: 4 },
  { name: 'Ilara', first: 'Ilara', short: 'ILA', tag: 'Illustrative blackwork', handle: '@ilara.tattoos', email: 'ilara.white@gmail.com', img: '/images/ilara.jpg', slug: 'ilara', work: 4 },
  { name: 'Corbin', first: 'Corbin', short: 'COR', tag: 'Neo-traditional', handle: '@phelper.tattoos', email: 'phelper.tattoos@gmail.com', img: '/images/corbin.jpg', slug: 'corbin', work: 4 },
  { name: 'Aino', first: 'Aino', short: 'AIN', tag: 'Japanese & ornamental', handle: '@aino.tattoo', email: 'ainoshimada@gmail.com', img: '/images/aino.jpg', slug: 'aino', work: 4 },
  { name: 'Julian', first: 'Julian', short: 'JUL', tag: 'Black & grey realism', handle: '@jujus.tattoo', email: 'juju.tattoos98@gmail.com', img: '/images/julian.jpg', slug: 'julian', work: 4 },
  { name: 'Gypsy', first: 'Gypsy', short: 'GYP', tag: 'Anime & colour', handle: '@gypsy.doll.tattoo', email: 'gypsydoll@mail.com', img: '/images/gypsy.jpg', slug: 'gypsy', work: 4 },
  { name: 'Jaimee', first: 'Jaimee', short: 'JAI', tag: 'Floral fine line', handle: '@jaimeejay.tattoo', email: 'Jaimeejay.tattoo@gmail.com', img: '/images/jaimee.jpg', slug: 'jaimee', work: 4 },
  { name: 'Quinn', first: 'Quinn', short: 'QUI', tag: 'Fineline & micro', handle: '@quinns.ink', email: 'Quinns.inkk@gmail.com', img: '/images/quinn.jpg', slug: 'quinn', work: 4 },
]

export const reviews = [
  { name: 'Hannah M.', text: 'Got my first piece with Oz and could not be happier. Spotless studio, zero pressure, and the linework is exactly what I asked for.' },
  { name: 'Dylan R.', text: 'Tcharna nailed the brief from the first sketch. Professional from the consult right through to the aftercare instructions.' },
  { name: 'Priya S.', text: 'Easily the best studio in Perth. Friendly crew, immaculate space, and the work genuinely speaks for itself.' },
  { name: 'Marcus T.', text: 'Travelled across town for a session with Julian and it was worth every minute. Already booked my next sitting.' },
  { name: 'Eleanor K.', text: 'So welcoming for a nervous first-timer. They talked me through everything and it healed beautifully.' },
]

export const hours = [
  { day: 'Mon', time: 'By appointment' },
  { day: 'Tue', time: '10:00 – 17:00' },
  { day: 'Wed', time: '10:00 – 17:00' },
  { day: 'Thu', time: '10:00 – 17:00' },
  { day: 'Fri', time: '10:00 – 17:00' },
  { day: 'Sat', time: '10:00 – 17:00' },
  { day: 'Sun', time: 'By appointment' },
]

export const aftercareItems = [
  'Leave the wrap on for 2–4 hours, then wash gently with warm water and fragrance-free soap.',
  'Pat dry and apply a thin layer of aftercare balm two to three times a day.',
  'No swimming, baths, saunas or direct sun for two weeks.',
  "Don't pick or scratch — let it flake and heal on its own.",
  'Keep it clean and moisturised. If anything looks off, message your artist.',
]

export const depositItems = [
  'A deposit secures your appointment and comes off the final price.',
  'Deposits are non-refundable but transferable with at least 48 hours notice.',
  'Late reschedules and no-shows forfeit the deposit.',
  'You must be 18+ with valid photo ID — no exceptions.',
  "We don't tattoo over sunburnt, broken or unwell skin.",
]

export const budgets = ['Under $200', '$200 – $500', '$500 – $1,000', '$1,000+', 'Not sure yet']

export const confirmPoints = [
  { n: '01', h: 'What happens next', b: 'Your artist reviews the idea and replies with availability, a rough quote and any questions — usually within a couple of days.' },
  { n: '02', h: 'Deposit policy', b: 'A deposit secures your appointment and comes off the final price. It is non-refundable but transferable with 48 hours notice.' },
  { n: '03', h: 'Aftercare basics', b: 'Keep it clean and moisturised, no swimming, saunas or direct sun while it heals. Full instructions are in your email.' },
  { n: '04', h: 'What to bring', b: 'Photo ID (18+), any reference images, and eat beforehand. Wear something that gives easy access to the placement.' },
  { n: '05', h: 'Find the studio', b: '187 Guildford Road, Maylands WA 6051. Street parking on Guildford Rd and side streets, 2 min from Maylands station.' },
]

export const reelSeed = [
  { img: '/images/oz.jpg', handle: '@oztattooist', caption: 'Backpiece linework in progress' },
  { img: '/images/aino.jpg', handle: '@aino.tattoo', caption: 'Ornamental sleeve — session two' },
  { img: '/images/julian.jpg', handle: '@jujus.tattoo', caption: 'Black & grey portrait detail' },
  { img: '/images/gypsy.jpg', handle: '@gypsy.doll.tattoo', caption: 'Colour flash, fresh off the gun' },
  { img: '/images/tcharna.jpg', handle: '@tcharna.tattoos', caption: 'Bold traditional, healed & settled' },
  { img: '/images/ilara.jpg', handle: '@ilara.tattoos', caption: 'Illustrative blackwork detail' },
]
