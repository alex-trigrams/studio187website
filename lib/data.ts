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
  /** Optional external booking page. Shown on the artist's card and profile. */
  booking?: string
  /** Extra photos of the artist; the card slowly crossfades through `img` + these. */
  altImgs?: string[]
}

// TODO: Review every artist's `tag` (style) below with the studio — several are
// misplaced and don't match the artist's actual work. Confirmed wrong so far:
//   - Aino: listed as 'Japanese & ornamental' but her gallery is fine line
//     botanical / delicate black and grey work.
// Confirmed: Corbin 'Bold traditional & Japanese'; Gypsy and Julian's tags
// were swapped and have been corrected.
// Check the rest against each artist's Instagram before the next deploy.
export const artists: Artist[] = [
  { name: 'Orazio (Oz)', first: 'Oz', short: 'OZ', tag: 'Fine line & script', handle: '@oztattooist', email: 'oraziotattooooo@gmail.com', img: '/images/oz.jpg', slug: 'oz', work: 4 },
  { name: 'Tcharna', first: 'Tcharna', short: 'TCH', tag: 'Bold traditional', handle: '@tcharna.tattoos', email: 'tcharna.tattoos@gmail.com', img: '/images/tcharna.jpg', slug: 'tcharna', work: 4 },
  { name: 'Ilara', first: 'Ilara', short: 'ILA', tag: 'Illustrative blackwork', handle: '@ilara.tattoos', email: 'ilara.white@gmail.com', img: '/images/ilara.jpg', slug: 'ilara', work: 4 },
  { name: 'Corbin', first: 'Corbin', short: 'COR', tag: 'Bold traditional & Japanese', handle: '@phelper.tattoos', email: 'phelper.tattoos@gmail.com', img: '/images/corbin.jpg', slug: 'corbin', work: 4 },
  { name: 'Aino', first: 'Aino', short: 'AIN', tag: 'Japanese & ornamental', handle: '@aino.tattoo', email: 'ainoshimada@gmail.com', img: '/images/aino.jpg', slug: 'aino', work: 4 },
  { name: 'Julian', first: 'Julian', short: 'JUL', tag: 'Anime', handle: '@jujus.tattoo', email: 'juju.tattoos98@gmail.com', img: '/images/julian.jpg', slug: 'julian', work: 4, altImgs: ['/images/artists/julian-2.jpg'] },
  { name: 'Gypsy', first: 'Gypsy', short: 'GYP', tag: 'Black work & Cybersigilism', handle: '@gypsy.doll.tattoo', email: 'gypsydoll@mail.com', img: '/images/gypsy.jpg', slug: 'gypsy', work: 4, booking: 'https://www.gypsydoll.com/connect', altImgs: ['/images/artists/gypsy-2.jpg', '/images/artists/gypsy-3.jpg', '/images/artists/gypsy-4.jpg', '/images/artists/gypsy-5.jpg'] },
  { name: 'Jaimee', first: 'Jaimee', short: 'JAI', tag: 'Floral fine line', handle: '@jaimeejay.tattoo', email: 'Jaimeejay.tattoo@gmail.com', img: '/images/jaimee.jpg', slug: 'jaimee', work: 4 },
  { name: 'Quinn', first: 'Quinn', short: 'QUI', tag: 'Fineline & micro', handle: '@quinns.ink', email: 'Quinns.inkk@gmail.com', img: '/images/quinn.jpg', slug: 'quinn', work: 4, altImgs: ['/images/artists/quinn-2.jpg'] },
  { name: 'Trinity', first: 'Trinity', short: 'TRI', tag: 'Fine line, custom & blackwork', handle: '@trinity.dollas.tattoo', email: '', img: '/images/trinity.jpg', slug: 'trinity', work: 4 },
]

export interface Review {
  name: string
  text: string
  photos?: string[]
}

export const reviews: Review[] = [
  {
    name: 'Andrea Nencini',
    text: "I relied on Quinn to create a complex tattoo in a difficult spot. She helped me place the stencil with great care and patience. Even though we were late, she remained focused without rushing the process. She created a masterpiece, taking care of every detail. I'm very happy with how it turned out, and it's always a pleasure to have a cheerful and friendly girl tattoo you. I highly recommend her",
    photos: ['/images/reviews/Andrea_Nencini_1.jpg', '/images/reviews/Andrea_Nencini_2.jpg'],
  },
  {
    name: 'Anna Gregson',
    text: "I've had 2 tattoos with Gypsy in the last month, 1 being a big back piece. The process was so easy and she got the exact design I was thinking of out my head and onto my back. Was a super comfortable experience and am absolutely obsessed with the results!",
    photos: ['/images/reviews/Anna_Gregson_1.jpg'],
  },
  {
    name: 'Katie Raeside',
    text: "Had 2 tattoos done by Quinn, she is such a friendly person, who takes her time to give you the best for tattoos. I designed my own tattoo and she helped me bring it to life. I highly recommend Quinn especially if you're into cartoon characters. Absolutely love my tattoos thank you",
    photos: ['/images/reviews/Katie_Raeside_1.jpg', '/images/reviews/Katie_Raeside_2.jpg'],
  },
  {
    name: 'Jae',
    text: 'Got my first tattoo here the day after my 18th by the amazing Quinn. She was so kind and I loved chatting with her! The whole vibe and atmosphere of the place is so chill, and the tattoo turned out absolutely amazing - shoutout to the one and only Quinn for my beautiful birthday tattoo!!!',
    photos: ['/images/reviews/Jae_1.jpg'],
  },
  {
    name: 'Shadow Dragon',
    text: 'Me and my partner both got our tattoos from Julian here and are already thinking of our next tattoo ideas. Love the atmosphere and nice friendly faces. Everyone is so welcoming',
    photos: ['/images/reviews/Shadow_Dragon_1.jpg', '/images/reviews/Shadow_Dragon_2.jpg'],
  },
  {
    name: 'Esther',
    text: "1st timer here... I didn't feel anxious, place had great crew, great vibe, clean, and all round nice experience.. will be back... loved it, lovely place you got going there.",
    photos: ['/images/reviews/Esther_1.jpg', '/images/reviews/Esther_2.jpg', '/images/reviews/Esther_3.jpg'],
  },
  {
    name: 'Tash R',
    text: "I had my tattoo done by Aino and she did a superb job on a art piece that means a lot to me. She was gentle, friendly, and precise. The studio was bright and welcoming. I have to say it's the best place I've been to get my tattoo. Aino will be my new tattooist going forward. Thankyou!",
    photos: ['/images/reviews/Tash_R_1.jpg'],
  },
  {
    name: 'Freeah Hernandez',
    text: 'Tcharna did amazing colour tattoos for me. Highly recommend to book in and share your ideas with her, really appreciated her being so accommodating with last minute changes to original designs. Very excited for my next booking. Superb work! Thank you Tcharna I love them!!',
    photos: ['/images/reviews/Freeah_Hernandez_1.jpg'],
  },
  {
    name: 'Keeley Johnson',
    text: "Went here with my friend a few days ago. I absolutely love the result of my tattoo. Aino did a beautiful job and I can't thank her enough.",
    photos: ['/images/reviews/Keeley_Johnson_1.jpg', '/images/reviews/Keeley_Johnson_2.jpg'],
  },
  {
    name: 'Georgina Boyd',
    text: "Today I got a new tattoo, I'm so happy with it. The Tattooist did an amazing job I'll definitely be going back. Also the Studio was beautifully set up so clean an staff were amazing",
    photos: ['/images/reviews/Georgina_Boyd_1.jpg', '/images/reviews/Georgina_Boyd_2.jpg'],
  },
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

export interface StoreProduct {
  id: string
  name: string
  description: string
  price: string | null
  stripeLink: string | null
  category: string
}

// To activate a product: set price to e.g. '$35.00' and stripeLink to the Stripe payment link URL.
export const storeProducts: StoreProduct[] = [
  { id: 'voucher', name: 'Gift Voucher', description: 'Give the gift of ink. Redeemable against any tattoo at Studio 187 — any artist, any size.', price: null, stripeLink: null, category: 'Vouchers' },
  { id: 'hat', name: 'Cap', description: 'Studio 187 embroidered cap. One size, adjustable strap.', price: null, stripeLink: null, category: 'Apparel' },
  { id: 'stubby-holder', name: 'Stubby Holder', description: 'Keep your drink cold. Studio 187 branded neoprene holder.', price: null, stripeLink: null, category: 'Accessories' },
  { id: 'hoodie', name: 'Hoodie', description: 'Heavy-weight pullover hoodie with Studio 187 print. Sizes XS–3XL.', price: null, stripeLink: null, category: 'Apparel' },
  { id: 'shirt', name: 'Tee', description: 'Classic Studio 187 tee. Unisex fit, sizes XS–3XL.', price: null, stripeLink: null, category: 'Apparel' },
  { id: 'stickers', name: 'Sticker Pack', description: 'A set of Studio 187 die-cut stickers. Stick them anywhere.', price: null, stripeLink: null, category: 'Accessories' },
]

export interface GalleryImage {
  src: string
  alt: string
  artist?: string
}

// To add work: drop the image in /public/images/gallery/ and add one entry below.
export const galleryImages: GalleryImage[] = [
  // { src: '/images/gallery/filename.jpg', alt: 'Brief description', artist: 'Oz' },
  { src: '/images/gallery/quinn-08.jpg', alt: 'Black and grey koi fish and floral leg piece', artist: 'Quinn' },
  { src: '/images/gallery/corbin-01.jpg', alt: 'Bold traditional skull with red flames, calf', artist: 'Corbin' },
  { src: '/images/gallery/julian-01.jpg', alt: 'Black and grey winged dragon chest piece', artist: 'Julian' },
  { src: '/images/gallery/aino-01.jpg', alt: 'Fine line lilies with dotwork flourishes, shoulder and upper arm', artist: 'Aino' },
  { src: '/images/gallery/julian-02.jpg', alt: 'Anime characters in black linework, upper arm', artist: 'Julian' },
  { src: '/images/gallery/gypsy-01.jpg', alt: 'Black and grey Wednesday Addams portrait with graveyard, forearm', artist: 'Gypsy' },
  { src: '/images/gallery/quinn-12.jpg', alt: 'Memento Mori hourglass with skull and tree, black and grey', artist: 'Quinn' },
  { src: '/images/gallery/julian-03.jpg', alt: 'Manga panel portrait in black and grey, forearm', artist: 'Julian' },
  { src: '/images/gallery/gypsy-02.jpg', alt: 'Blackwork doll in a mask and harness, forearm', artist: 'Gypsy' },
  { src: '/images/gallery/julian-04.jpg', alt: 'Manga-style character portrait with dotwork shading, upper arm', artist: 'Julian' },
  { src: '/images/gallery/quinn-07.jpg', alt: 'Fine line lilies and blossoms forearm piece', artist: 'Quinn' },
  { src: '/images/gallery/julian-05.jpg', alt: 'Anime character with red highlights and a hanging spider, upper arm', artist: 'Julian' },
  { src: '/images/gallery/aino-02.jpg', alt: 'Delicate fine line leafy vine wrapping the shoulder and collarbone', artist: 'Aino' },
  { src: '/images/gallery/gypsy-03.jpg', alt: 'Illustrative doll portrait with moth wings, upper arm', artist: 'Gypsy' },
  { src: '/images/gallery/julian-06.jpg', alt: 'Sailing boat in fine linework down the back', artist: 'Julian' },
  { src: '/images/gallery/corbin-02.jpg', alt: 'Japanese orca and crashing waves shoulder and chest piece', artist: 'Corbin' },
  { src: '/images/gallery/julian-07.jpg', alt: 'Bold blackwork Seven Deadly Sins symbol, shoulder', artist: 'Julian' },
  { src: '/images/gallery/quinn-10.jpg', alt: 'Matching lion and lioness arrow forearm tattoos', artist: 'Quinn' },
  { src: '/images/gallery/julian-08.jpg', alt: 'Spiral creature in fine linework, forearm', artist: 'Julian' },
  { src: '/images/gallery/gypsy-04.jpg', alt: 'Solid blackwork anatomical heart with a crying eye', artist: 'Gypsy' },
  { src: '/images/gallery/quinn-06.jpg', alt: 'Fine line shark, turtle and hibiscus hand tattoo', artist: 'Quinn' },
  { src: '/images/gallery/julian-09.jpg', alt: 'Anime portrait with red script, forearm', artist: 'Julian' },
  { src: '/images/gallery/aino-03.jpg', alt: 'Fine line cherry blossom branch on the forearm', artist: 'Aino' },
  { src: '/images/gallery/julian-10.jpg', alt: 'One Piece Luffy in black linework, calf', artist: 'Julian' },
  { src: '/images/gallery/gypsy-05.jpg', alt: "Blackwork cleaver with a woman's face in the blade, calf", artist: 'Gypsy' },
  { src: '/images/gallery/corbin-03.jpg', alt: 'Traditional eagle, sharks and blackletter script stomach piece', artist: 'Corbin' },
  { src: '/images/gallery/julian-11.jpg', alt: 'Two manga panels in black linework with red accents, calf', artist: 'Julian' },
  { src: '/images/gallery/quinn-05.jpg', alt: 'Blackwork skull and thorns knee tattoo', artist: 'Quinn' },
  { src: '/images/gallery/julian-12.jpg', alt: 'Bold blackwork eye and curved blade, forearm', artist: 'Julian' },
  { src: '/images/gallery/quinn-03.jpg', alt: 'Colour baby dragon reading a book', artist: 'Quinn' },
  { src: '/images/gallery/julian-13.jpg', alt: 'Anime scene band in black and grey, forearm', artist: 'Julian' },
  { src: '/images/gallery/aino-04.jpg', alt: 'Praying skeleton in fine line black and grey, shin', artist: 'Aino' },
  { src: '/images/gallery/quinn-04.jpg', alt: 'Matilda surrounded by stacks of books, colour illustration style', artist: 'Quinn' },
  { src: '/images/gallery/julian-14.jpg', alt: 'Star Wars clone trooper in black linework, forearm', artist: 'Julian' },
  { src: '/images/gallery/quinn-02.jpg', alt: 'Colour Mad Hatter cartoon forearm tattoo', artist: 'Quinn' },
  { src: '/images/gallery/julian-15.jpg', alt: 'Swallow with flowing feathers in fine line, upper arm', artist: 'Julian' },
  { src: '/images/gallery/corbin-04.jpg', alt: 'Bold black and grey traditional dragon, forearm', artist: 'Corbin' },
  { src: '/images/gallery/julian-16.jpg', alt: 'Anime figure with a red lightsaber, forearm', artist: 'Julian' },
  { src: '/images/gallery/aino-05.jpg', alt: 'Smoky crescent moon and stars with script down the spine', artist: 'Aino' },
  { src: '/images/gallery/quinn-09.jpg', alt: 'Winnie the Pooh with honey pot, colour', artist: 'Quinn' },
  { src: '/images/gallery/julian-17.jpg', alt: 'Ornamental eye and tentacle design, forearm', artist: 'Julian' },
  { src: '/images/gallery/quinn-11.jpg', alt: 'Mickey Mouse tipping his hat, colour forearm tattoo', artist: 'Quinn' },
  { src: '/images/gallery/julian-18.jpg', alt: 'Silhouette band of figures with SONDER lettering, forearm', artist: 'Julian' },
  { src: '/images/gallery/aino-06.jpg', alt: 'Fine line lily and blossom bouquet with a gecko, upper arm', artist: 'Aino' },
  { src: '/images/gallery/julian-19.jpg', alt: 'Kingdom Hearts Sora with Keyblade in black and grey, forearm', artist: 'Julian' },
]

/**
 * Gallery images belonging to one artist, matched on the artist's first name.
 * Used by the artist cards and profile pages so work only has to be listed once.
 */
export function workByArtist(artist: Artist): GalleryImage[] {
  return galleryImages.filter(img => img.artist === artist.first)
}
