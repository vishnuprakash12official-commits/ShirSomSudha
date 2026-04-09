export interface ProductVariant {
  size: string;
  price: number;
  amazonLink: string;
  flipkartLink: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  benefits: string[];
  variants: ProductVariant[];
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Yellow Mustard Oil",
    slug: "yellow-mustard-oil",
    category: "Mustard Oil",
    description: "Cold-pressed yellow mustard oil, extracted using traditional wood-pressed methods. Rich in essential fatty acids, this oil brings authentic flavor to your cooking while maintaining the highest purity standards.",
    benefits: ["Rich in Omega-3 fatty acids", "Natural antibacterial properties", "Boosts immunity", "Heart-healthy cooking oil", "Chemical-free extraction"],
    variants: [
      { size: "500ml", price: 199, amazonLink: "#", flipkartLink: "#" },
      { size: "1 Ltr", price: 349, amazonLink: "#", flipkartLink: "#" },
      { size: "2 Ltr", price: 649, amazonLink: "#", flipkartLink: "#" },
      { size: "5 Ltr", price: 1499, amazonLink: "#", flipkartLink: "#" },
    ],
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80",
  },
  {
    id: "2",
    name: "White Sesame Oil",
    slug: "white-sesame-oil",
    category: "Sesame Oil",
    description: "Pure cold-pressed white sesame oil, known for its mild nutty flavor and incredible health benefits. Perfect for cooking, seasoning, and traditional Ayurvedic practices.",
    benefits: ["High in antioxidants", "Supports bone health", "Anti-inflammatory properties", "Rich in Vitamin E", "Promotes skin health"],
    variants: [
      { size: "500ml", price: 299, amazonLink: "#", flipkartLink: "#" },
      { size: "1 Ltr", price: 549, amazonLink: "#", flipkartLink: "#" },
      { size: "5 Ltr", price: 2499, amazonLink: "#", flipkartLink: "#" },
    ],
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
  },
  {
    id: "3",
    name: "Black Mustard Oil",
    slug: "black-mustard-oil",
    category: "Mustard Oil",
    description: "Premium cold-pressed black mustard oil with a bold, pungent flavor. Traditionally used in Indian kitchens for its distinct taste and health-boosting properties.",
    benefits: ["Strong antimicrobial properties", "Improves digestion", "Relieves joint pain", "Stimulates appetite", "Natural preservative"],
    variants: [
      { size: "500ml", price: 229, amazonLink: "#", flipkartLink: "#" },
      { size: "1 Ltr", price: 399, amazonLink: "#", flipkartLink: "#" },
    ],
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80",
  },
  {
    id: "4",
    name: "Groundnut Oil",
    slug: "groundnut-oil",
    category: "Groundnut Oil",
    description: "Wood-pressed groundnut oil with a rich, nutty aroma. Ideal for deep frying, sautéing, and everyday cooking. Retains natural nutrients through cold-pressing.",
    benefits: ["High smoke point for frying", "Rich in monounsaturated fats", "Contains resveratrol", "Cholesterol-free", "Natural vitamin E source"],
    variants: [
      { size: "1 Ltr", price: 349, amazonLink: "#", flipkartLink: "#" },
      { size: "2 Ltr", price: 649, amazonLink: "#", flipkartLink: "#" },
      { size: "5 Ltr", price: 1549, amazonLink: "#", flipkartLink: "#" },
      { size: "15 Ltr", price: 4299, amazonLink: "#", flipkartLink: "#" },
    ],
    image: "https://images.unsplash.com/photo-1599599810694-b5b37304c041?w=600&q=80",
  },
  {
    id: "5",
    name: "Almond Oil",
    slug: "almond-oil",
    category: "Almond Oil",
    description: "Premium cold-pressed almond oil, extracted from the finest almonds. A versatile oil perfect for cooking, skin care, and hair nourishment.",
    benefits: ["Rich in Vitamin E", "Promotes heart health", "Nourishes skin & hair", "Supports brain function", "Anti-aging properties"],
    variants: [
      { size: "500ml", price: 599, amazonLink: "#", flipkartLink: "#" },
    ],
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
  },
  {
    id: "6",
    name: "Black Sesame Oil",
    slug: "black-sesame-oil",
    category: "Sesame Oil",
    description: "Authentic cold-pressed black sesame oil with a deep, robust flavor. Prized in traditional cooking and Ayurvedic medicine for its powerful health benefits.",
    benefits: ["Highest antioxidant content", "Strengthens bones & teeth", "Regulates blood pressure", "Boosts liver health", "Rich in minerals"],
    variants: [
      { size: "1 Ltr", price: 549, amazonLink: "#", flipkartLink: "#" },
      { size: "2 Ltr", price: 999, amazonLink: "#", flipkartLink: "#" },
      { size: "5 Ltr", price: 2399, amazonLink: "#", flipkartLink: "#" },
    ],
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
  },
  {
    id: "7",
    name: "Coconut Oil",
    slug: "coconut-oil",
    category: "Coconut Oil",
    description: "Pure cold-pressed coconut oil, extracted from fresh coconuts. A multipurpose oil for cooking, skin care, and hair treatment with a delightful tropical aroma.",
    benefits: ["Boosts metabolism", "Supports immune system", "Natural moisturizer", "Lauric acid rich", "Aids in weight management"],
    variants: [
      { size: "1 Ltr", price: 399, amazonLink: "#", flipkartLink: "#" },
    ],
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600&q=80",
  },
];

export const oilCategories = [
  "Mustard Oil",
  "Sesame Oil",
  "Coconut Oil",
  "Groundnut Oil",
  "Almond Oil",
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
