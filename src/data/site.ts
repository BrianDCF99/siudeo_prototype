export type CollectionName = 'Tricolour Slipcast' | 'Playful'

export type CollectionSlug = 'tricolour-slipcast' | 'playful'

export type Product = {
  id: string
  name: string
  price: number
  currency: 'CAD'
  description: string
  image: string
  detailImage: string
  imageAlt: string
  volume: string
  collection: CollectionName
}

export type Collection = {
  name: CollectionName
  slug: CollectionSlug
  image: string
  imageAlt: string
}

export const products: Product[] = [
  {
    id: 'single-mingles',
    name: 'Single Mingles',
    price: 40,
    currency: 'CAD',
    description: 'Individually coloured slip-cast cups made to mix across the series, one shade beside another.',
    image: '/images/single-mingles.webp',
    detailImage: '/images/single-mingles-detail.webp',
    imageAlt: 'A stack of colourful handmade Single Mingles ceramic mugs',
    volume: '8 oz',
    collection: 'Tricolour Slipcast',
  },
  {
    id: 'fruity',
    name: 'Fruity',
    price: 40,
    currency: 'CAD',
    description: 'Red, yellow, and green coloured clay meet in a layered surface that changes from cup to cup.',
    image: '/images/fruity.webp',
    detailImage: '/images/fruity-detail.webp',
    imageAlt: 'Stacked Fruity mugs with red, yellow and green coloured clay',
    volume: '8 oz',
    collection: 'Tricolour Slipcast',
  },
  {
    id: 'khaki',
    name: 'Khaki',
    price: 40,
    currency: 'CAD',
    description: 'Muted autumn colours run through the clay in soft layers, with sizes ranging from 8 to 14 oz.',
    image: '/images/khaki.webp',
    detailImage: '/images/khaki-detail.webp',
    imageAlt: 'A handmade Khaki ceramic mug with layered earthy colours',
    volume: '8–14 oz',
    collection: 'Tricolour Slipcast',
  },
  {
    id: 'playful-attachments',
    name: 'Playful Attachments',
    price: 75,
    currency: 'CAD',
    description: 'A generous 17.5 oz slip-cast cup set with coloured loops and sculptural clay attachments; each arrangement is different.',
    image: '/images/playful-attachments.webp',
    detailImage: '/images/playful-attachments-detail.webp',
    imageAlt: 'White slip-cast mug with colourful sculptural attachments',
    volume: 'About 17.5 oz',
    collection: 'Playful',
  },
  {
    id: 'connecting-the-two',
    name: 'Connecting the Two',
    price: 75,
    currency: 'CAD',
    description: 'Two angular forms meet in a 16.5 oz cup, turning the join into both handle and sculpture.',
    image: '/images/connecting-the-two.webp',
    detailImage: '/images/connecting-the-two-detail.webp',
    imageAlt: 'Angular handmade ceramic mug called Connecting the Two',
    volume: 'About 16.5 oz',
    collection: 'Playful',
  },
]

export const collections: Collection[] = [
  {
    name: 'Tricolour Slipcast',
    slug: 'tricolour-slipcast',
    image: '/images/hero-tricolour.webp',
    imageAlt: 'Two colourful Tricolour Slipcast cups held together',
  },
  {
    name: 'Playful',
    slug: 'playful',
    image: '/images/hero-playful.webp',
    imageAlt: 'A white ceramic cup with yellow and blue sculptural attachments',
  },
]

const featuredProductIds = new Set(['single-mingles', 'khaki', 'playful-attachments'])

export const featuredProducts = products.filter((product) => featuredProductIds.has(product.id))

export const studioFacts = [
  'Handmade in Vancouver',
  'Microwave + dishwasher safe',
  'Canada Post shipping',
  'Metro Vancouver pickup',
]

export const artist = {
  name: 'Brianne Siu',
  location: 'Vancouver, Canada',
  portrait: '/images/brianne-studio.webp',
  portraitAlt: 'Brianne Siu examining a ceramic piece in her studio',
  headline: 'Bring Some Flair Home.',
  promise:
    'I believe that the creation of ceramics should be a playful experience, allowing you to let your imagination run wild. Each piece is handmade by me, and I take great care to ensure that the finished product is as unique and vibrant as the individual who will use it. These bright colours and bold designs are perfect for anyone looking to add some flair to their home decor.',
  biography: [
    'Brianne Siu is an emerging ceramic artist based in Vancouver and has been working in ceramics since 2015. After earning her BFA from Emily Carr University of Art + Design in 2019, she has gained valuable teaching experience working at various art centres across Metro Vancouver sharing her knowledge and passion for ceramics.',
    'Brianne has worked as a studio assistant to Heather Dahl and learned a lot about her successful business and practice. Brianne has also completed a year-long residency at Medalta in the Historic Clay District in Medicine Hat, Alberta from 2021-2022. Meanwhile, she has been dedicating her time creating a new body of work and continuing to grow as an artist at Nanaimo Ceramic Arts for a 4 month residency. She hopes to continue developing her artistic practice by either continuing residencies or pursuing further education.',
  ],
  credentials: ['Emily Carr BFA, 2019', 'Medalta resident, 2021–22', 'Nanaimo Ceramic Arts resident, 2023'],
  email: 'briannesiu@gmail.com',
  instagram: 'https://www.instagram.com/siudeo/',
}

export function formatPrice(product: Product) {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: product.currency,
    maximumFractionDigits: 0,
  }).format(product.price)
}
