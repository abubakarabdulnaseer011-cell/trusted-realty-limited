export type PropertyStatus = "For Sale" | "For Rent" | "For Lease";
export type PropertyCategory = "Residential" | "Commercial";

export type Property = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  location: string;
  city: "Lagos" | "Abuja" | "Port Harcourt" | "Enugu" | "Kano State";
  price: number;
  priceQualifier?: string;
  status: PropertyStatus;
  type: string;
  category: PropertyCategory;
  bedrooms: number;
  bathrooms: number;
  areaSqm: number;
  images: string[];
  description: string;
  amenities: string[];
  featured: boolean;
  marketDescription: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
};

const propertyImages = {
  living: "/images/hero-living-room.jpg",
  villa: "/images/villa-exterior.jpg",
  skyline: "/images/lagos-skyline.jpg",
  tower: "/images/office-tower.jpg",
  showroom: "/images/showroom-interior.jpg",
  dining: "/images/dining-room.jpg",
  penthouse: "/images/mountain-penthouse.jpg",
  lounge: "/images/office-lounge.jpg",
  balcony: "/images/balcony-view.jpg",
} as const;

export const properties: Property[] = [
  {
    id: "TR-001",
    slug: "ikoyi-meridian-villa",
    title: "Ikoyi Meridian Villa",
    summary: "A composed, design-led family residence in one of Lagos' most established premium districts.",
    location: "Bourdillon, Ikoyi",
    city: "Lagos",
    price: 1_850_000_000,
    status: "For Sale",
    type: "Detached Villa",
    category: "Residential",
    bedrooms: 5,
    bathrooms: 6,
    areaSqm: 620,
    images: [propertyImages.villa, propertyImages.dining, propertyImages.balcony],
    description:
      "Ikoyi Meridian Villa pairs elegant spatial planning with strong privacy, generous indoor-outdoor flow, and the kind of address profile sought by discerning owner-occupiers and capital-minded buyers.",
    amenities: ["Private cinema lounge", "Swimming pool", "Home office", "Staff quarters", "Smart access control"],
    featured: true,
    marketDescription:
      "Ikoyi continues to attract premium family demand, diplomatic buyers, and investors focused on asset quality in Lagos.",
    coordinates: { lat: 6.4541, lng: 3.4241 },
  },
  {
    id: "TR-002",
    slug: "eko-crest-penthouse",
    title: "Eko Crest Penthouse",
    summary: "A high-floor address designed for private entertaining, skyline views, and executive city living.",
    location: "Victoria Island",
    city: "Lagos",
    price: 42_000_000,
    priceQualifier: "/ annum",
    status: "For Lease",
    type: "Penthouse",
    category: "Residential",
    bedrooms: 4,
    bathrooms: 4,
    areaSqm: 410,
    images: [propertyImages.penthouse, propertyImages.living, propertyImages.balcony],
    description:
      "This penthouse is tailored for clients who want refined finishes, strong security, and an address that sits close to Lagos' most active corporate and hospitality zones.",
    amenities: ["Private lift lobby", "Panoramic terrace", "Gym access", "Concierge-ready reception", "Backup power"],
    featured: true,
    marketDescription:
      "Victoria Island remains central to premium leasing demand for executives, diaspora clients, and high-level occupiers.",
    coordinates: { lat: 6.4281, lng: 3.4219 },
  },
  {
    id: "TR-003",
    slug: "lekki-harbour-view-apartments",
    title: "Harbour View Serviced Apartments",
    summary: "A polished serviced apartment offering in Lekki for professionals seeking flexibility and finish quality.",
    location: "Lekki Phase 1",
    city: "Lagos",
    price: 18_500_000,
    priceQualifier: "/ annum",
    status: "For Rent",
    type: "Serviced Apartment",
    category: "Residential",
    bedrooms: 3,
    bathrooms: 3,
    areaSqm: 220,
    images: [propertyImages.living, propertyImages.dining, propertyImages.skyline],
    description:
      "Well suited to executives, returning diaspora families, or tenants who want a Lagos address that feels current, secure, and easy to occupy immediately.",
    amenities: ["Serviced facility management", "Fitted kitchen", "On-site security", "Dedicated parking", "Water treatment system"],
    featured: false,
    marketDescription:
      "Lekki continues to balance lifestyle appeal with strong rental velocity across well-positioned apartment stock.",
    coordinates: { lat: 6.4474, lng: 3.4718 },
  },
  {
    id: "TR-004",
    slug: "maitama-embassy-garden-villa",
    title: "Maitama Embassy Garden Villa",
    summary: "A grand Abuja residence with diplomatic-scale proportions, privacy, and top-tier finish quality.",
    location: "Maitama",
    city: "Abuja",
    price: 2_400_000_000,
    status: "For Sale",
    type: "Detached Villa",
    category: "Residential",
    bedrooms: 6,
    bathrooms: 7,
    areaSqm: 780,
    images: [propertyImages.villa, propertyImages.penthouse, propertyImages.dining],
    description:
      "Set within one of Abuja's most prestigious districts, this asset is built for buyers who value address security, scale, and long-term residential prestige.",
    amenities: ["Landscaped gardens", "Guest chalet", "Formal entertaining room", "Security post", "Integrated home automation"],
    featured: true,
    marketDescription:
      "Maitama remains one of the capital's most tightly held and reputationally important residential locations.",
    coordinates: { lat: 9.0867, lng: 7.4951 },
  },
  {
    id: "TR-005",
    slug: "jabi-lake-terrace",
    title: "Jabi Lake Terrace Collection",
    summary: "A serene terrace duplex offering executive comfort with direct access to key commercial and leisure nodes.",
    location: "Jabi",
    city: "Abuja",
    price: 24_000_000,
    priceQualifier: "/ annum",
    status: "For Rent",
    type: "Terrace Duplex",
    category: "Residential",
    bedrooms: 4,
    bathrooms: 4,
    areaSqm: 310,
    images: [propertyImages.balcony, propertyImages.living, propertyImages.penthouse],
    description:
      "Jabi Lake Terrace Collection suits executives and families who want generous proportions, a composed setting, and quick access to the heart of Abuja.",
    amenities: ["Family lounge", "Private patio", "Walk-in closet", "Dedicated inverter room", "Waterfront proximity"],
    featured: false,
    marketDescription:
      "Jabi continues to draw strong tenant demand because of its balance of convenience, comfort, and recognizable address value.",
    coordinates: { lat: 9.0634, lng: 7.4409 },
  },
  {
    id: "TR-006",
    slug: "wuse-executive-office-floor",
    title: "Wuse II Executive Office Floor",
    summary: "A fully modernized commercial floor suited to professional services, regional headquarters, and client-facing firms.",
    location: "Wuse II",
    city: "Abuja",
    price: 68_000_000,
    priceQualifier: "/ annum",
    status: "For Lease",
    type: "Office Suite",
    category: "Commercial",
    bedrooms: 0,
    bathrooms: 6,
    areaSqm: 860,
    images: [propertyImages.tower, propertyImages.lounge, propertyImages.showroom],
    description:
      "An efficient corporate footprint with the visibility, circulation, and executive finish expected in one of Abuja's strongest commercial corridors.",
    amenities: ["Reception fit-out", "Boardroom suite", "Passenger lift", "Dedicated generator capacity", "Visitor parking"],
    featured: true,
    marketDescription:
      "Wuse II remains one of the most active commercial submarkets in Abuja for occupiers seeking profile and accessibility.",
    coordinates: { lat: 9.0742, lng: 7.4888 },
  },
  {
    id: "TR-007",
    slug: "gra-signature-residences",
    title: "GRA Signature Residence",
    summary: "A secure Port Harcourt residence designed for executives, established families, and long-view buyers.",
    location: "Old GRA",
    city: "Port Harcourt",
    price: 1_200_000_000,
    status: "For Sale",
    type: "Detached Villa",
    category: "Residential",
    bedrooms: 5,
    bathrooms: 5,
    areaSqm: 540,
    images: [propertyImages.villa, propertyImages.living, propertyImages.dining],
    description:
      "This GRA property combines strong residential identity with the convenience and prestige associated with Port Harcourt's established premium enclaves.",
    amenities: ["Outdoor lounge", "Family cinema", "Secure gatehouse", "Ample parking", "Premium joinery package"],
    featured: false,
    marketDescription:
      "Old GRA retains its importance for buyers and tenants who prioritize security, centrality, and reputation.",
    coordinates: { lat: 4.8077, lng: 7.0336 },
  },
  {
    id: "TR-008",
    slug: "creekside-corporate-suites",
    title: "Creekside Corporate Suites",
    summary: "A commercial leasing opportunity suited to energy-linked firms, consultants, and high-service operators.",
    location: "GRA Phase 2",
    city: "Port Harcourt",
    price: 52_000_000,
    priceQualifier: "/ annum",
    status: "For Lease",
    type: "Office Suite",
    category: "Commercial",
    bedrooms: 0,
    bathrooms: 4,
    areaSqm: 640,
    images: [propertyImages.lounge, propertyImages.tower, propertyImages.showroom],
    description:
      "Creekside Corporate Suites offers a polished reception environment, flexible office layouts, and a market position built for client-facing businesses.",
    amenities: ["Fitted reception", "Meeting rooms", "Secure access system", "Standby power", "Management office"],
    featured: false,
    marketDescription:
      "Prime commercial pockets in Port Harcourt continue to reward occupiers who prioritize efficiency, presentation, and dependable infrastructure.",
    coordinates: { lat: 4.8232, lng: 7.0165 },
  },
  {
    id: "TR-009",
    slug: "independence-terrace-collection",
    title: "Independence Terrace Collection",
    summary: "A refined Enugu townhouse address delivering privacy, generous planning, and everyday comfort.",
    location: "Independence Layout",
    city: "Enugu",
    price: 430_000_000,
    status: "For Sale",
    type: "Terrace Duplex",
    category: "Residential",
    bedrooms: 4,
    bathrooms: 4,
    areaSqm: 280,
    images: [propertyImages.villa, propertyImages.dining, propertyImages.living],
    description:
      "Positioned for buyers who want a secure, premium Enugu home without unnecessary excess, this collection balances warmth, finish, and long-term livability.",
    amenities: ["Study area", "Private courtyard", "Family dining suite", "Backup power", "Integrated storage"],
    featured: false,
    marketDescription:
      "Independence Layout remains one of Enugu's most referenced residential districts for quality homes and stable demand.",
    coordinates: { lat: 6.4444, lng: 7.5002 },
  },
  {
    id: "TR-010",
    slug: "coal-city-executive-apartments",
    title: "Coal City Executive Apartments",
    summary: "A highly finished rental option for professionals and returning families who want ease, location, and quiet quality.",
    location: "New Haven",
    city: "Enugu",
    price: 9_500_000,
    priceQualifier: "/ annum",
    status: "For Rent",
    type: "Apartment",
    category: "Residential",
    bedrooms: 2,
    bathrooms: 2,
    areaSqm: 150,
    images: [propertyImages.living, propertyImages.penthouse, propertyImages.dining],
    description:
      "Coal City Executive Apartments offers a premium rental experience with practical space planning and the kind of finish that supports immediate occupancy.",
    amenities: ["Serviced common areas", "Modern kitchen", "Balcony", "24/7 security", "Parking"],
    featured: false,
    marketDescription:
      "Well-positioned apartments in Enugu continue to attract attention from corporate tenants, young families, and diaspora returnees.",
    coordinates: { lat: 6.4551, lng: 7.5107 },
  },
  {
    id: "TR-011",
    slug: "nassarawa-courtyard-homes",
    title: "Nassarawa Courtyard Homes",
    summary: "A quietly premium residential asset in Kano with disciplined planning and strong family appeal.",
    location: "Nassarawa GRA",
    city: "Kano State",
    price: 365_000_000,
    status: "For Sale",
    type: "Terrace Duplex",
    category: "Residential",
    bedrooms: 4,
    bathrooms: 4,
    areaSqm: 300,
    images: [propertyImages.villa, propertyImages.dining, propertyImages.balcony],
    description:
      "A carefully positioned Kano home for buyers who value clarity, comfort, and a residential setting that supports both privacy and access.",
    amenities: ["Courtyard garden", "Prayer room", "Family lounge", "Water treatment", "Dedicated service area"],
    featured: false,
    marketDescription:
      "Nassarawa GRA remains an important reference point for buyers seeking recognized residential quality in Kano.",
    coordinates: { lat: 12.0022, lng: 8.5327 },
  },
  {
    id: "TR-012",
    slug: "kano-commerce-hub",
    title: "Kano Commerce Hub",
    summary: "A versatile commercial address with frontage, circulation, and the credibility required for visible business operations.",
    location: "Bompai",
    city: "Kano State",
    price: 34_000_000,
    priceQualifier: "/ annum",
    status: "For Lease",
    type: "Retail and Office Space",
    category: "Commercial",
    bedrooms: 0,
    bathrooms: 2,
    areaSqm: 520,
    images: [propertyImages.tower, propertyImages.showroom, propertyImages.lounge],
    description:
      "Ideal for retail operators, service businesses, and client-facing firms that need a polished presence and a practical layout within a recognized commercial zone.",
    amenities: ["Retail frontage", "Shared services", "Loading access", "Security desk", "Flexible partitioning"],
    featured: false,
    marketDescription:
      "Commercial space in Kano rewards careful positioning and trusted local guidance, particularly for companies entering the market with growth intent.",
    coordinates: { lat: 12.0031, lng: 8.5303 },
  },
];

export const propertyCities = Array.from(new Set(properties.map((property) => property.city)));
export const propertyStatuses = Array.from(new Set(properties.map((property) => property.status)));
export const propertyTypes = Array.from(new Set(properties.map((property) => property.type)));

export function getFeaturedProperties(limit = 3) {
  return properties.filter((property) => property.featured).slice(0, limit);
}

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}

export function getRelatedProperties(property: Property, limit = 3) {
  return properties
    .filter((candidate) => candidate.slug !== property.slug)
    .sort((left, right) => {
      const leftScore = Number(left.city === property.city) + Number(left.category === property.category);
      const rightScore = Number(right.city === property.city) + Number(right.category === property.category);

      return rightScore - leftScore;
    })
    .slice(0, limit);
}
