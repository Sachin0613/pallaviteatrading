import { Garden, PartnerGarden, ServiceItem } from "./types";

export const TOP_GARDENS: Garden[] = [
  {
    id: "laluk-tea-factory",
    name: "Laluk Tea Factory",
    location: "Lakhimpur, Assam",
    description: "Known for its strong liquor and consistent quality, offering a bold and dependable cup.",
    detailedDescription: "Located in the tea-rich region of Lakhimpur, Laluk Tea Factory is recognized for producing teas with strong liquor, rich character, and reliable consistency. The estate focuses on maintaining quality across every batch, making its teas a preferred choice for buyers seeking bold flavor and dependable performance.",
    teaTypes: ["CTC Tea", "Black Tea"],
    production: "Consistent Quality Processing",
    productionDetails: "Carefully processed to maintain strength, color, and flavor consistency while preserving the classic Assam tea profile.",
    emoji: "🍃"
  },
  {
    id: "habung-tea-industries",
    name: "Habung Tea Industries",
    location: "Dhemaji, Assam",
    description: "Produces bright and brisk teas with a clean finish, ideal for refreshing daily blends.",
    detailedDescription: "Habung Tea Industries is known for crafting vibrant teas with excellent brightness and briskness. The teas deliver a refreshing cup with a clean finish, making them suitable for daily consumption and premium blending requirements.",
    teaTypes: ["CTC Tea", "Black Tea"],
    production: "Brisk Assam Processing",
    productionDetails: "Manufactured to retain freshness, brightness, and a clean liquor profile while ensuring excellent cup quality.",
    emoji: "☀️"
  },
  {
    id: "maibelia-tea-industry",
    name: "Maibelia Tea Industry",
    location: "Dissoi Valley, Jorhat, Assam",
    description: "Offers well-rounded teas with rich aroma and smooth malty character.",
    detailedDescription: "Situated in the renowned tea-growing belt of Jorhat, Maibelia Tea Industry produces premium teas known for their rich aroma, smooth malty taste, and balanced liquor. The estate benefits from fertile soil and ideal climatic conditions that enhance tea quality.",
    teaTypes: ["CTC Tea", "Orthodox Tea"],
    production: "Premium Estate Production",
    productionDetails: "Uses quality leaf selection and careful manufacturing techniques to develop a rich aroma and smooth malty profile.",
    emoji: "🌱"
  },
  {
    id: "kanchan-tea-industry",
    name: "Kanchan Tea Industry",
    location: "Koliabor, Assam",
    description: "Known for balanced strength and subtle sweetness, delivering a refined cup.",
    detailedDescription: "Kanchan Tea Industry produces teas that combine balanced strength with gentle sweetness. The result is a refined and smooth cup that appeals to consumers seeking a harmonious tea experience without excessive bitterness.",
    teaTypes: ["CTC Tea", "Black Tea"],
    production: "Balanced Flavor Processing",
    productionDetails: "Processed with emphasis on maintaining natural sweetness while preserving body and color.",
    emoji: "🌿"
  },
  {
    id: "gangmou-tea-growers",
    name: "Gangmou Tea Growers",
    location: "Biswanath Charali, Assam",
    description: "Produces lively teas with vibrant color and a brisk, refreshing taste profile.",
    detailedDescription: "Gangmou Tea Growers is recognized for manufacturing teas with attractive liquor color and lively flavor. The teas are brisk, refreshing, and ideal for consumers who prefer an energetic and flavorful cup.",
    teaTypes: ["CTC Tea", "Black Tea"],
    production: "Fresh Leaf Manufacturing",
    productionDetails: "Focuses on preserving brightness and freshness throughout processing to deliver a vibrant tea experience.",
    emoji: "🍀"
  },
  {
    id: "belseri-tea-estate",
    name: "Belseri Tea Estate",
    location: "Dekiajuli, Assam",
    description: "Produces bright, brisk teas with a clean and refreshing finish.",
    detailedDescription: "Belseri Tea Estate is known for creating teas that offer excellent brightness, briskness, and clarity in the cup. Its refreshing finish makes it a popular choice for tea blenders and bulk buyers alike.",
    teaTypes: ["CTC Tea", "Black Tea"],
    production: "Quality Estate Processing",
    productionDetails: "Utilizes modern manufacturing methods to preserve brightness and ensure a consistently refreshing cup profile.",
    emoji: "🌾"
  },
  {
    id: "puri-premium-tea",
    name: "Puri Premium Tea",
    location: "Lakhimpur, Assam",
    description: "Specializes in high-grade teas with deep color, strong body, and premium consistency.",
    detailedDescription: "Puri Premium Tea is dedicated to producing superior-quality teas that stand out for their deep liquor color, strong body, and exceptional consistency. The estate caters to buyers seeking reliable premium-grade Assam teas.",
    teaTypes: ["Premium CTC Tea", "Black Tea"],
    production: "High-Grade Tea Manufacturing",
    productionDetails: "Carefully selected leaves are processed to achieve strong body, excellent color, and consistent quality standards.",
    emoji: "⭐"
  },
  {
    id: "btr-tea-industries",
    name: "BTR Tea Industries",
    location: "Udalguri, Assam",
    description: "Known for smooth yet strong teas with a pleasant aroma and balanced flavor.",
    detailedDescription: "BTR Tea Industries manufactures teas that successfully combine strength with smoothness. The teas are characterized by a pleasant aroma, balanced flavor profile, and satisfying finish suitable for a wide range of consumers.",
    teaTypes: ["CTC Tea", "Black Tea"],
    production: "Balanced Flavor Production",
    productionDetails: "Special attention is given to aroma retention and flavor balance throughout the manufacturing process.",
    emoji: "🍂"
  },
  {
    id: "patkai-tea-company",
    name: "Patkai Tea Co. (P) Ltd",
    location: "Tinsukia, Assam",
    description: "Delivers bold, full-bodied teas with deep liquor and lasting malty richness.",
    detailedDescription: "Patkai Tea Co. (P) Ltd is renowned for producing bold Assam teas with deep liquor color, robust body, and rich malty notes. Its teas leave a lasting impression and are highly valued by tea buyers looking for authentic Assam character.",
    teaTypes: ["CTC Tea", "Orthodox Tea"],
    production: "Traditional Assam Processing",
    productionDetails: "Employs proven tea-making techniques to maximize body, color, and the signature malty richness of Assam teas.",
    emoji: "🏆"
  }
];

export const PARTNER_GARDENS: PartnerGarden[] = [
  {
  id: "laluk-tea-factory",
  name: "Laluk Tea Factory",
  location: "Mark: Laluk, Lakhimpur",
  teaTypes: ["Assam Black Tea", "CTC Tea", "Premium Blend"],
  description: "Known for its strong liquor and consistent quality, Laluk teas offer a bold and dependable cup.",
  emoji: "🍃"
},
{
  id: "habung-tea-industries",
  name: "Habung Tea Industries",
  location: "Mark: Habung, Dhemaji",
  teaTypes: ["Assam Black Tea", "CTC Tea", "Daily Blend"],
  description: "Produces bright and brisk teas with a clean finish, ideal for refreshing daily blends.",
  emoji: "🌿"
},
{
  id: "maibelia-tea-industry",
  name: "Maibelia Tea Industry",
  location: "Mark: Dissoi Valley, Jorhat",
  teaTypes: ["Orthodox Tea", "Assam Black Tea", "Premium Blend"],
  description: "Offers well-rounded teas with rich aroma and smooth malty character from prime Jorhat estates.",
  emoji: "🍂"
},
{
  id: "kanchan-tea-industry",
  name: "Kanchan Tea Industry",
  location: "Mark: Kanchan, Koliabor",
  teaTypes: ["Assam Black Tea", "CTC Tea", "Premium Blend"],
  description: "Known for balanced strength and subtle sweetness, delivering a refined and smooth cup.",
  emoji: "🌱"
},
{
  id: "gangmou-tea-growers",
  name: "Gangmou Tea Growers",
  location: "Mark: Gangmou, Biswanath Charali",
  teaTypes: ["Assam Black Tea", "CTC Tea", "Loose Leaf Tea"],
  description: "Produces lively teas with vibrant color and a brisk, refreshing taste profile.",
  emoji: "🍵"
},
{
  id: "belseri-tea-estate",
  name: "Belseri Tea Estate",
  location: "Mark: Belseri, Dekiajuli",
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
We act as a trusted link between buyers and some of India’s well-known tea estates and factories. With strong, long standing relationships across leading tea gardens, we help you buy and sell raw and graded teas at competitive prices. As dedicated brokers, we ensure smooth, transparent, and well-negotiated deals, helping packeters, wholesalers, and exporters get consistent quality and a reliable supply without having to deal directly with the trade.

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
    detailedDescription: "Our quality standards are uncompromising. Every batch of tea is thoroughly evaluated in our testing room, focusing on appearance, liquor, taste, and infusion before it is approved for dispatch.",
    icon: "✅"
  },
  {
    id: "bulk-supply",
    title: "Bulk Supply",
    description: "Large-scale tea distribution and trading with flexible volumes.",
    detailedDescription: "From PPE and paper sack bags to multi-ton container shipments, we manage efficient logistics for packaging, containerizing, and shipping tea across markets while maintaining freshness through secure and reliable packing methods.",
    icon: "📦"
  },
  {
  id: "tea-tasting",
  title: "Tea Tasting",
  description: "Professional evaluation of tea flavor, aroma, and quality.",
  detailedDescription: "We offer professional tea tasting to understand the true character of each batch. Our experts evaluate the flavor, aroma, strength, and overall quality, giving you clear insights so you can make confident buying decisions.",
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
