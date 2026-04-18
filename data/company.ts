export const navLinks = [
  { href: "/properties", label: "Properties" },
  { href: "/markets", label: "Markets" },
  { href: "/services", label: "Services" },
  { href: "/investors", label: "Investors" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const siteConfig = {
  name: "TRUSTED REALTY LIMITED",
  shortName: "Trusted Realty",
  tagline: "Premium Homes. Trusted Deals.",
  defaultTitle:
    "Trusted Realty Limited | Premium Real Estate in Lagos, Abuja, Port Harcourt, Enugu, and Kano State",
  description:
    "Trusted Realty Limited delivers secure, transparent, and high-quality real estate solutions across Lagos, Abuja, Port Harcourt, Enugu, and Kano State.",
  url: "https://trusted-realty-limited.vercel.app",
  email: "hello@trustedrealtylimited.com",
  phone: "+234 (0) 800 000 0000",
  locale: "en_NG",
  countryCode: "NG",
  contentUpdatedAt: "2026-04-18T00:00:00.000Z",
  whatsappUrl:
    "https://wa.me/2348000000000?text=Hello%20Trusted%20Realty%20Limited%2C%20I%20would%20like%20to%20make%20an%20inquiry.",
  keywords: [
    "Trusted Realty Limited",
    "Nigeria real estate",
    "Lagos property",
    "Abuja property",
    "Port Harcourt real estate",
    "Enugu property",
    "Kano property",
    "luxury real estate Nigeria",
    "investment property Nigeria",
    "diaspora property advisory",
  ],
} as const;

export const focusMarkets = [
  {
    city: "Lagos",
    headline: "Nigeria's most liquid property market for premium residential and commercial demand.",
    summary:
      "From Ikoyi and Victoria Island to Lekki and emerging growth corridors, Lagos remains the benchmark for investor attention, rental depth, and prestige-led residential demand.",
    highlight:
      "High-value residential, waterfront apartments, executive rentals, and strategic developer inventory.",
  },
  {
    city: "Abuja",
    headline: "A policy-driven capital with resilient demand for secure, well-positioned assets.",
    summary:
      "Abuja offers a refined mix of diplomatic, institutional, and executive demand with strong preference for legally clear, professionally managed property transactions.",
    highlight:
      "Embassy-grade villas, executive apartments, mixed-use commercial floors, and disciplined acquisition support.",
  },
  {
    city: "Port Harcourt",
    headline: "A commercial and energy-linked market shaped by premium residential and business occupancy.",
    summary:
      "Port Harcourt remains important for owner-occupiers, corporate tenants, and investors seeking exposure to a city with enduring commercial relevance.",
    highlight:
      "GRA residences, executive leases, corporate tenancy mandates, and prime commercial opportunities.",
  },
  {
    city: "Enugu",
    headline: "A growing southeastern market with lifestyle-driven residential demand and solid mid-term upside.",
    summary:
      "Enugu combines livability, institutional presence, and a disciplined pace of growth that appeals to buyers seeking quality, comfort, and value retention.",
    highlight:
      "Residential sales, serviced apartments, terrace homes, and curated investor entry opportunities.",
  },
  {
    city: "Kano State",
    headline: "A commercially significant northern market where credibility and local intelligence matter deeply.",
    summary:
      "Kano rewards trusted execution, carefully sourced assets, and clear documentation, particularly for clients entering the market from other regions or abroad.",
    highlight:
      "Structured property sourcing, family residences, commercial spaces, and transaction support with local insight.",
  },
] as const;

export const services = [
  {
    title: "Residential Property Sales",
    description:
      "Curated acquisition support for buyers seeking premium homes, family residences, and long-term capital preservation across Nigeria's most important cities.",
    benefits: [
      "Rigorous property sourcing and market comparison",
      "Transparent negotiation support and transaction guidance",
      "Clear positioning for end-users, families, and investment buyers",
    ],
  },
  {
    title: "House Rentals",
    description:
      "Well-managed rental support for clients who value speed, clarity, and quality in finding homes that match both lifestyle and budget discipline.",
    benefits: [
      "Shortlisting based on location, security, and finish quality",
      "Support for executives, families, and relocation-led demand",
      "Professional handling from inspection to handover",
    ],
  },
  {
    title: "Apartment Leasing",
    description:
      "Premium apartment leasing across established districts and emerging corridors with a focus on secure inventory and strong occupancy alignment.",
    benefits: [
      "Serviced and non-serviced apartment options",
      "Lease structuring support for local and diaspora clients",
      "Calm, well-guided client handling throughout the process",
    ],
  },
  {
    title: "Commercial Property Services",
    description:
      "Commercial real estate advisory for office, retail, and mixed-use occupiers or investors who require positioning, discretion, and execution confidence.",
    benefits: [
      "Site matching for occupiers and business expansion needs",
      "Commercial leasing and acquisition guidance",
      "Clear-eyed market insight for yield and long-term fit",
    ],
  },
  {
    title: "Property Marketing",
    description:
      "Strategic positioning for developers, landlords, and sellers who need premium presentation, sharper visibility, and serious buyer attention.",
    benefits: [
      "Refined listing presentation and target-buyer alignment",
      "Market-aware pricing and positioning support",
      "Professional communication that protects brand value",
    ],
  },
  {
    title: "Property Sourcing",
    description:
      "Discrete, mandate-led sourcing for clients who prefer guided access to the right opportunities instead of browsing a crowded market alone.",
    benefits: [
      "Custom brief-driven sourcing by city and asset type",
      "Verification-oriented screening before recommendation",
      "Ideal for time-sensitive and out-of-country buyers",
    ],
  },
  {
    title: "Real Estate Advisory",
    description:
      "Practical advisory for acquisitions, leasing strategy, investment positioning, and market entry decisions grounded in clarity rather than noise.",
    benefits: [
      "Straightforward guidance on timing, risk, and fit",
      "Local intelligence across five major urban markets",
      "Useful for both first-time and sophisticated buyers",
    ],
  },
  {
    title: "Investment Property Opportunities",
    description:
      "Investor-facing support for clients seeking income potential, capital growth, or portfolio diversification through Nigerian real estate.",
    benefits: [
      "City-specific opportunity framing and market signals",
      "Support for outright purchases and strategic partnerships",
      "Calm emphasis on legal structure and transaction integrity",
    ],
  },
  {
    title: "Property Documentation Support",
    description:
      "A documentation-led service layer shaped by the company's legal discipline and commitment to transaction confidence.",
    benefits: [
      "Guidance on property paperwork and key transaction steps",
      "Attention to compliance, clarity, and client protection",
      "Designed to reduce avoidable errors and uncertainty",
    ],
  },
  {
    title: "Diaspora Client Support",
    description:
      "High-trust support for clients abroad who need reliable local representation, verification discipline, and clear communication from first inquiry to closing.",
    benefits: [
      "Remote shortlisting, virtual viewing coordination, and updates",
      "Structured support tailored to distance and due diligence needs",
      "A calm interface for diaspora families and investors",
    ],
  },
] as const;

export const trustPillars = [
  {
    label: "Legally sound execution",
    description:
      "The firm's legal leadership supports documentation discipline, transaction clarity, and a strong culture of client protection.",
  },
  {
    label: "Financial discipline",
    description:
      "Trusted Realty approaches property and advisory work with measured financial judgement, accountability, and sustainable operational thinking.",
  },
  {
    label: "Multi-city focus",
    description:
      "A focused operating footprint across Lagos, Abuja, Port Harcourt, Enugu, and Kano State creates breadth without diluting attention.",
  },
  {
    label: "Premium client handling",
    description:
      "Clients receive composed communication, curated options, and a process designed to feel calm, informed, and respectful of capital.",
  },
] as const;

export const values = [
  {
    title: "Trust without theatrics",
    description:
      "We believe confidence is earned through clarity, responsiveness, and responsible guidance at every stage of the transaction.",
  },
  {
    title: "Professional precision",
    description:
      "Our work is shaped by careful sourcing, disciplined communication, and an insistence on documented, well-considered decisions.",
  },
  {
    title: "Market intelligence",
    description:
      "We stay attentive to what matters in each city, so our advice reflects real market behavior instead of generic assumptions.",
  },
  {
    title: "Client protection",
    description:
      "We approach every engagement with respect for capital, time, legal integrity, and the long-term interests of the client.",
  },
] as const;

export const leadership = [
  {
    name: "Abubakar Haruna Kazaure",
    role: "Co-Founder and Chief Executive Officer",
    education: "B.Sc. Computer Science, Bayero University Kano",
    bio: "Abubakar Haruna Kazaure provides the strategic direction and executive leadership that drive the company's vision, growth, and market positioning. His systems-oriented background strengthens the firm's analytical thinking, operational structure, and modern approach to building a forward-looking real estate brand.",
  },
  {
    name: "Abdulkadir Adamu",
    role: "Co-Founder and Chief Financial Officer",
    education: "B.Sc. Accounting, Usmanu Danfodiyo University, Sokoto",
    bio: "Abdulkadir Adamu leads financial planning, fiscal discipline, investment oversight, and operational efficiency. His role helps anchor Trusted Realty Limited in accountability, sustainability, and the kind of measured decision-making serious clients and investors expect.",
  },
  {
    name: "Cynthia Odor, Esq.",
    role: "Co-Founder and Chief Legal Counselor",
    education: "LL.B, Ambrose Alli University; B.L, Nigerian Law School, Lagos Campus",
    bio: "Cynthia Odor, Esq. leads the company's legal, regulatory, and compliance functions. Her expertise gives the business a strong foundation in property documentation, contractual precision, regulatory alignment, and client protection across complex transactions.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Trusted Realty handled our Lagos purchase with a level of calm and clarity that immediately set them apart. Every decision felt informed, not rushed.",
    name: "Adaeze N.",
    role: "Home Buyer, Ikoyi",
  },
  {
    quote:
      "As a diaspora client, I needed people I could trust on the ground. Their updates were clear, their screening was disciplined, and the process felt protected.",
    name: "Tunde A.",
    role: "Diaspora Client, London",
  },
  {
    quote:
      "What impressed me most was the commercial judgement. They understood yield, tenant fit, and the importance of documentation before anything moved forward.",
    name: "Michael E.",
    role: "Investor, Abuja and Lagos",
  },
  {
    quote:
      "They marketed our property in a way that felt premium and precise. We attracted serious inquiries quickly without compromising on standards.",
    name: "Ruth O.",
    role: "Landlord, Port Harcourt",
  },
  {
    quote:
      "Our company needed a polished leasing process for executive accommodation. Trusted Realty brought order, speed, and professional client handling from start to finish.",
    name: "Corporate Facilities Lead",
    role: "Executive Tenant, Abuja",
  },
] as const;

export const investorHighlights = [
  {
    title: "A market shaped by urban demand",
    description:
      "Nigeria's major cities continue to attract owner-occupiers, tenants, businesses, and returning diaspora capital, creating varied demand across residential and commercial assets.",
  },
  {
    title: "Focused exposure across five relevant cities",
    description:
      "Trusted Realty is positioned in markets that matter for liquidity, visibility, occupancy, and strategic long-term participation.",
  },
  {
    title: "Leadership with operating balance",
    description:
      "Executive, financial, and legal leadership combine to support growth while preserving structure, compliance, and investor confidence.",
  },
] as const;

export const diasporaTrustLayers = [
  {
    title: "Secure transactions from the first brief",
    description:
      "Every acquisition or leasing brief is approached with verification discipline, documentation awareness, and a clear respect for the risks overseas clients are trying to avoid.",
  },
  {
    title: "Guided buying, not self-directed guesswork",
    description:
      "Diaspora homebuyers and investors receive structured guidance on city choice, asset fit, pricing logic, and the right next step before capital is committed.",
  },
  {
    title: "Remote property sourcing with real screening",
    description:
      "Trusted Realty can shortlist, inspect, and coordinate virtual viewings around a defined mandate so distance does not become a quality or trust problem.",
  },
  {
    title: "Documentation support that reduces uncertainty",
    description:
      "The company supports clients through paperwork expectations, transaction checkpoints, and the legal clarity needed to move with greater confidence.",
  },
] as const;

export const journalEntries = [
  {
    title: "What premium buyers are prioritizing in Lagos this year",
    excerpt:
      "A concise read on finish quality, location resilience, and why execution confidence now matters as much as the address itself.",
    category: "Market Brief",
  },
  {
    title: "A smarter approach to documentation before closing",
    excerpt:
      "The paperwork questions prudent buyers and investors should resolve early to reduce avoidable friction and protect the transaction.",
    category: "Documentation",
  },
  {
    title: "Abuja leasing strategy for executive and corporate occupiers",
    excerpt:
      "How location, security profile, and service infrastructure affect leasing decisions in the capital.",
    category: "Leasing",
  },
  {
    title: "Why diaspora clients benefit from mandate-led property sourcing",
    excerpt:
      "A framework for reducing noise, improving screening quality, and keeping distance from becoming a liability in the acquisition process.",
    category: "Diaspora Advisory",
  },
] as const;
