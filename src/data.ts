import { Garden, PartnerGarden, ServiceItem } from "./types";

export const TOP_GARDENS: Garden[] = [
  {
    id: "darjeeling-elegance",
    name: "Darjeeling Elegance",
    location: "Darjeeling, West Bengal",
    description: "Himalayan foothills, muscatel notes, and premium floral characteristics.",
    detailedDescription: "Nestled in the misty, high-altitude slopes of the Himalayan foothills, the Darjeeling Elegance garden produces what is universally known as the 'Champagne of Teas'. The combination of cool mountain breeze, fertile acidic soil, and delicate handling produces first flush teas boasting distinct muscatel grape notes, a bright golden liquor, and refined floral undertones prized by connoisseurs around the globe.",
    teaTypes: ["Black Tea", "Green Tea", "White Tea"],
    production: "Organic, First Flush",
    productionDetails: "Meticulous estate-wide organic cultivation with traditional hand-plucking of 'two leaves and a bud'. Plucking is performed primarily during pristine early morning hours to safeguard peak freshness, followed by slow orthodox withering.",
    emoji: "🏔️"
  },
  {
    id: "assam-golden-leaf",
    name: "Assam Golden Leaf",
    location: "Assam, India",
    description: "Rich, malty flavor cultivated in the fertile Brahmaputra Valley.",
    detailedDescription: "Situated in the lowlands of the Brahmaputra Valley, the Assam Golden Leaf estate thrives on rich alluvial soil and heavy tropical rainfall. This garden is world-famous for its golden-tipped orthodox black teas, delivering an amber-colored, robust, full-bodied cup with a classic malty sweetness and smooth finish that represents the very best of traditional Indian chai.",
    teaTypes: ["Black Tea", "Oolong"],
    production: "Orthodox Processing",
    productionDetails: "Uses traditional orthodox rolling tables and slow, highly regulated oxidation to fully unlock the characteristic maltiness and ensure thick, golden tips remain intact and unbroken.",
    emoji: "🌾"
  },
  {
    id: "nilgiri-sunset",
    name: "Nilgiri Sunset",
    location: "Nilgiri Mountains, Tamil Nadu",
    description: "High altitude microclimate, fruity and lively cup with citrus and chocolate hints.",
    detailedDescription: "Perched majestically in the blue-tinted Nilgiri Hills of Southern India, this cloud-kissed estate yields extraordinarily aromatic and smooth teas. Due to the high altitude and year-round moderate climate, the leaves produce a bright, crisp infusion featuring vibrant fruitiness, natural citrus highlights, and a warm, velvety finish reminiscent of dark cocoa.",
    teaTypes: ["Black Tea", "Green Tea", "Herbal Blends"],
    production: "Hand-rolled, Small Batch",
    productionDetails: "Produced in limited quantities. Leaves undergo specialized hand-rolling and careful sizing to slow-release the natural oils, resulting in a smooth taste profile completely free of astringency.",
    emoji: "⛰️"
  },
  {
    id: "kangra-valley-reserve",
    name: "Kangra Valley Reserve",
    location: "Kangra, Himachal Pradesh",
    description: "Delicate, light-bodied, highly nuanced flavors developed in cool temperatures.",
    detailedDescription: "Sourced from the historic, cool-climate foothills of the Dhauladhar mountain range, the Kangra Valley Reserve represents a heritage dating back to 1849. The cold winters and pristine glacial runoffs facilitate a slow leaf growth cycle, resulting in delicate, highly nuanced green and white teas with sweet floral accents and a clean, refreshing grass-like finish.",
    teaTypes: ["Green Tea", "Oolong", "White Tea"],
    production: "Shade-grown, Traditional Methods",
    productionDetails: "Cultivated in biodiversity-rich gardens shaded by native Himalayan cedar and oak trees to protect amino acids. Hand-pan-fired within minutes of harvest using traditional wood-fired kilns.",
    emoji: "🌿"
  },
  {
    id: "munnar-mountain-peak",
    name: "Munnar Mountain Peak",
    location: "Munnar, Kerala",
    description: "Highest tea slopes in India with exquisite natural sweetness and organic farming.",
    detailedDescription: "Cultivated on some of the loftiest tea elevations in South India, Munnar Mountain Peak enjoys dense mountain mist and crisp, cold weather. The slow maturation of the tea leaves concentrates their natural sugars, producing an exceptionally smooth, refreshing cup of green or black specialty tea with a delightful natural sweetness and soft floral finish.",
    teaTypes: ["Black Tea", "Green Tea", "Specialty Teas"],
    production: "Sustainable Farming, Organic Certified",
    productionDetails: "Grown using strict organic and biodynamic techniques that maintain fragile high-altitude ecosystems. It uses precise gravity-fed mountain spring water management systems for eco-friendly irrigation.",
    emoji: "☘️"
  }
];

export const PARTNER_GARDENS: PartnerGarden[] = [
  {
  id: "laluk-tea-factory",
  name: "Laluk Tea Factory",
  location: "Mark-Laluk, Lakhimpur",
  teaTypes: ["Assam Black Tea", "CTC Tea", "Premium Blend"],
  description: "Known for its strong liquor and consistent quality, Laluk teas offer a bold and dependable cup.",
  emoji: "🍃"
},
{
  id: "habung-tea-industries",
  name: "Habung Tea Industries",
  location: "Mark-Habung, Dhemaji",
  teaTypes: ["Assam Black Tea", "CTC Tea", "Daily Blend"],
  description: "Produces bright and brisk teas with a clean finish, ideal for refreshing daily blends.",
  emoji: "🌿"
},
{
  id: "maibelia-tea-industry",
  name: "Maibelia Tea Industry",
  location: "Mark-Dissoi Valley, Jorhat",
  teaTypes: ["Orthodox Tea", "Assam Black Tea", "Premium Blend"],
  description: "Offers well-rounded teas with rich aroma and smooth malty character from prime Jorhat estates.",
  emoji: "🍂"
},
{
  id: "kanchan-tea-industry",
  name: "Kanchan Tea Industry",
  location: "Mark-Kanchan, Koliabor",
  teaTypes: ["Assam Black Tea", "CTC Tea", "Premium Blend"],
  description: "Known for balanced strength and subtle sweetness, delivering a refined and smooth cup.",
  emoji: "🌱"
},
{
  id: "gangmou-tea-growers",
  name: "Gangmou Tea Growers",
  location: "Mark-Gangmou, Biswanath Charali",
  teaTypes: ["Assam Black Tea", "CTC Tea", "Loose Leaf Tea"],
  description: "Produces lively teas with vibrant color and a brisk, refreshing taste profile.",
  emoji: "🍵"
},
{
  id: "belseri-tea-estate",
  name: "Belseri Tea Estate",
  location: "Mark-Belseri, Dekiajuli",
  teaTypes: ["Assam Black Tea", "Orthodox Tea", "Premium Blend"],
  description: "Produces bright, brisk teas with a clean and refreshing finish.",
  emoji: "🌾"
}
];

export const SERVICES: ServiceItem[] = [
  {
  id: "trading",
  title: "Tea Broking",
  description: "Buying and selling premium tea directly from source gardens.",
  detailedDescription: `
We act as your trusted bridge to India's most prestigious tea estates. Through our deep-rooted and long-standing associations with leading tea gardens, we facilitate the buying and selling of raw and graded teas at highly competitive prices.

As dedicated brokers, we ensure transparent, efficient, and well-negotiated transactions, helping tea packeters, wholesalers, and global exporters secure consistent quality and reliable supply without directly engaging in trade.
`,

  icon: "🔄"
},
  {
    id: "sampling",
    title: "Tea Sampling",
    description: "Providing premium samples for expert quality evaluation.",
    detailedDescription: "We understand that premium tea requires exact sensory profiles. We provide customized, airtight tea sample kits sourced directly from our garden networks, allowing your blend masters and tasters to carry out color, aroma, and flavor evaluations before placing bulk commercial orders.",
    icon: "🧱"
  },
  {
    id: "procurement",
    title: "Tea Procurement",
    description: "Sourcing finest teas according to exact client specifications.",
    detailedDescription: "Don't spend valuable time navigating multiple estates. Our procurement specialists source specific lots, grades (like FTGFOP, BOP, Dust), flushes, and specialty blends matching your precise client specifications, utilizing our strong on-the-ground network across Darjeeling, Assam, Nilgiris, and Kangra.",
    icon: "🤝"
  },
  {
    id: "inspection",
    title: "Quality Inspection",
    description: "Rigorous quality assessment before packaging and supply.",
    detailedDescription: "Our quality standard is absolute. Every single batch of tea procured is subjected to rigorous quality check criteria, evaluating leaf structure, moisture retention levels, liquor clarity, and flavour consistency in our cupping labs before it is greenlit for dispatch.",
    icon: "✅"
  },
  {
    id: "bulk-supply",
    title: "Bulk Supply",
    description: "Large-scale tea distribution and trading with flexible volumes.",
    detailedDescription: "From 100 kg wooden chests to multi-ton container shipments, we command logistics networks capable of packaging, containerizing, and shipping premium tea anywhere globally, while preserving maximum freshness using custom-engineered inner foil liners and vacuum sealing.",
    icon: "📦"
  },
  {
  id: "tea-tasting",
  title: "Tea Tasting",
  description: "Professional evaluation of tea flavor, aroma, and quality.",
  detailedDescription: "We offer professional tea tasting services to evaluate the true character of each batch. Our experts assess flavor, aroma, strength, and overall quality, providing clear insights into the tea's profile and helping you make informed purchasing decisions.",
  icon: "🍵"
},
{
  id: "tea-consultation",
  title: "Tea Consultation",
  description: "Expert guidance to help you choose the right teas.",
  detailedDescription: "Our consultation services are tailored to your specific requirements. Based on your preferred grade, origin, price range, and market goals, we guide you in selecting the most suitable teas, ensuring informed decisions backed by deep industry knowledge and market understanding.",
  icon: "💡"
},
{
  id: "tea-blending",
  title: "Tea Blending",
  description: "Custom tea blends crafted for your brand and market.",
  detailedDescription: "We create customized tea blends designed to meet your brand and market needs. By carefully combining different teas, we develop consistent, high-quality blends that are ready for packaging and distribution according to your specifications.",
  icon: "🌿"
},
{
  id: "warehousing",
  title: "Warehousing & Stocking",
  description: "Reliable storage solutions ensuring safe preservation and timely availability of tea stocks.",
  detailedDescription: `
We provide dependable warehousing and stocking services designed to support seamless tea operations across the supply chain. Our well-managed storage facilities ensure that tea is handled with care and maintained under suitable conditions to preserve its freshness, quality, and value.

By maintaining organized inventory systems and efficient stock management practices, we help tea businesses ensure consistent product availability, reduce operational delays, and meet market demands with confidence. Our warehousing solutions offer flexibility, reliability, and peace of mind for packeters, wholesalers, and exporters alike.
`,
  icon: "🏬"
},
];
