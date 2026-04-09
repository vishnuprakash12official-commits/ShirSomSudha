import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft, ShoppingBag, ExternalLink, Check, Star,
  Leaf, Shield, Award, ChevronDown, FlaskConical, ChevronRight,
} from "lucide-react";
import { products } from "./Products";

// ─── Brand Color: #C8181A ─────────────────────────────────────────────────────

// ─── Placeholder Image ────────────────────────────────────────────────────────
// Replace with <img src={url} /> when real images are available.
// imgIndex adds slight visual variety to each of the 4 placeholder slots.
const OilImage = ({
  name,
  imgIndex = 0,
  small = false,
}: {
  name: string;
  imgIndex?: number;
  small?: boolean;
}) => {
  const palette: Record<string, { bg: string; accent: string; light: string }> = {
    "Yellow Mustard Oil": { bg: "#FFFBEB", accent: "#D97706", light: "#FDE68A" },
    "White Sesame Oil":   { bg: "#FAFAF9", accent: "#78716C", light: "#E7E5E4" },
    "Black Mustard Oil":  { bg: "#1C1917", accent: "#A8A29E", light: "#44403C" },
    "Groundnut Oil":      { bg: "#FEFCE8", accent: "#CA8A04", light: "#FEF08A" },
    "Almond Oil":         { bg: "#FFF7ED", accent: "#C2693E", light: "#FED7AA" },
    "Black Sesame Oil":   { bg: "#18181B", accent: "#A8A29E", light: "#3F3F46" },
    "Coconut Oil":        { bg: "#F0FDF4", accent: "#16A34A", light: "#BBF7D0" },
  };
  const p = palette[name] || { bg: "#F5F0E8", accent: "#C8181A", light: "#FECACA" };
  // Slightly different angle/position per slot to differentiate
  const angles = [160, 145, 170, 140];
  const angle = angles[imgIndex % 4];
  return (
    <div
      className="w-full h-full flex items-center justify-center flex-col gap-3"
      style={{ background: `radial-gradient(ellipse at ${30 + imgIndex * 10}% ${20 + imgIndex * 5}%, ${p.light}65, ${p.bg})` }}
    >
      <div
        className={`${small ? "w-7 h-12" : "w-16 h-28"} rounded-b-full rounded-t-md relative`}
        style={{
          background: `linear-gradient(${angle}deg, ${p.accent}45, ${p.accent}bb, ${p.accent}ee)`,
          boxShadow: `0 8px 28px ${p.accent}30`,
        }}
      >
        <div className="absolute inset-x-0 top-0 h-1/3 rounded-t-md opacity-30"
          style={{ background: "linear-gradient(180deg, white, transparent)" }} />
      </div>
      {!small && (
        <span className="text-[11px] font-bold tracking-widest uppercase opacity-35" style={{ color: p.accent }}>
          {name.split(" ").slice(0, 2).join(" ")}
        </span>
      )}
    </div>
  );
};

// ─── Real Image with OilImage fallback ───────────────────────────────────────
const ProductImage = ({
  src,
  name,
  imgIndex = 0,
  small = false,
}: {
  src?: string;
  name: string;
  imgIndex?: number;
  small?: boolean;
}) => {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <OilImage name={name} imgIndex={imgIndex} small={small} />;
  return (
    <img
      src={src}
      alt={name}
      className="w-full h-full object-contain"
      onError={() => setFailed(true)}
    />
  );
};

// ─── Trust Badge ──────────────────────────────────────────────────────────────
const TrustBadge = ({ icon: Icon, label, sub }: { icon: any; label: string; sub: string }) => (
  <motion.div
    whileHover={{ y: -3 }}
    transition={{ duration: 0.18 }}
    className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-[#C8181A]/25 transition-all text-center"
  >
    <div className="w-11 h-11 rounded-full bg-[#C8181A]/8 border border-[#C8181A]/15 flex items-center justify-center">
      <Icon className="w-5 h-5 text-[#C8181A]" />
    </div>
    <span className="text-sm font-bold text-gray-900 leading-tight">{label}</span>
    <span className="text-xs text-gray-500 leading-tight font-sans">{sub}</span>
  </motion.div>
);

// ─── Accordion ────────────────────────────────────────────────────────────────
const AccordionItem = ({
  title, children, defaultOpen = false,
}: {
  title: string; children: React.ReactNode; defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-[15px] font-bold text-gray-900 font-sans">{title}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-sm text-gray-700 leading-relaxed font-sans">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Scroll fade-up ───────────────────────────────────────────────────────────
const FadeUp = ({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);

// ─── Product Content ──────────────────────────────────────────────────────────
const productInfo: Record<string, {
  description: string;
  benefits: string[];
  usage: string;
  ingredients: string;
  whyChoose: string[];
  howToUse: { step: string; detail: string }[];
}> = {
  "yellow-mustard-oil": {
    description: "Cold-pressed from premium yellow mustard seeds — our oil keeps its natural pungency and golden colour intact. No heat, no chemicals. Pure traditional craftsmanship in every drop.",
    benefits: [
      "Rich in omega-3 & omega-6 fatty acids",
      "Natural antibacterial & antifungal properties",
      "Helps digestion and stimulates appetite",
      "Excellent for hair growth and scalp health",
      "Warming relief for muscles & joints",
    ],
    usage: "Ideal for cooking, tempering, pickling, and massage. High smoke point — safe for high-heat cooking.",
    ingredients: "100% Cold-Pressed Yellow Mustard Seeds (Brassica juncea). No preservatives, no additives.",
    whyChoose: [
      "Single-origin seeds from certified farms",
      "Cold-pressed below 40°C — all nutrients intact",
      "Zero refining — natural phytonutrients preserved",
      "FSSAI certified & third-party lab tested",
    ],
    howToUse: [
      { step: "Cooking", detail: "Base oil for dals, sabzis, and fish curries." },
      { step: "Pickling", detail: "Mix with spices for long-lasting traditional achars." },
      { step: "Hair Massage", detail: "Warm slightly, apply to scalp. Leave 30 min before washing." },
      { step: "Body Massage", detail: "Circular massage to relieve muscle tension." },
    ],
  },
  "white-sesame-oil": {
    description: "Wood-pressed using traditional ghani methods from premium hulled sesame seeds. Light, nutty, and rich in antioxidants — a versatile oil for everyday cooking.",
    benefits: [
      "High in sesamol & sesamin antioxidants",
      "Supports healthy blood pressure",
      "Rich in vitamins B and E",
      "Natural UV protection for skin",
      "Anti-inflammatory for joints",
    ],
    usage: "Perfect for stir-frying, salad dressings, marinades, and finishing.",
    ingredients: "100% Wood-Pressed White Sesame Seeds (Sesamum indicum). Unrefined, unbleached.",
    whyChoose: [
      "Traditional wood-press ghani method",
      "Mild nutty flavour — works for cooking and dressings",
      "Zero chemicals at any stage",
      "Rich golden colour indicates natural quality",
    ],
    howToUse: [
      { step: "Stir Fry", detail: "A tablespoon in the wok adds a delicate nutty base." },
      { step: "Dressing", detail: "Whisk with lemon and herbs for an elegant salad dressing." },
      { step: "Finishing Oil", detail: "Drizzle over soups or roasted vegetables before serving." },
      { step: "Skin Care", detail: "Apply a few drops as a lightweight daily moisturiser." },
    ],
  },
  "black-mustard-oil": {
    description: "Pressed from bold black mustard seeds — sharper and more pungent than yellow mustard. The authentic choice for Bengali and South Indian cooking for centuries.",
    benefits: [
      "More potent therapeutic profile than yellow mustard",
      "Powerful antimicrobial & anti-inflammatory",
      "Supports cardiovascular health",
      "Traditional remedy for cold & congestion",
      "Excellent for detoxification",
    ],
    usage: "Essential for Bengali cooking, fish preparations, and traditional pickles. Also used as a chest rub.",
    ingredients: "100% Cold-Pressed Black Mustard Seeds (Brassica nigra). No additives.",
    whyChoose: [
      "Superior allyl isothiocyanate content",
      "Cold-press preserves volatile therapeutic compounds",
      "Stronger flavour and therapeutic profile",
      "Deep amber colour, authentic pungency",
    ],
    howToUse: [
      { step: "Tempering", detail: "Heat to smoking point for authentic Bengali-style tadka." },
      { step: "Fish Preparations", detail: "Marinate fish before cooking for deep flavour." },
      { step: "Chest Rub", detail: "Mix with camphor for traditional cold relief." },
      { step: "Pickle Base", detail: "Natural preservative — ideal for long-lasting achars." },
    ],
  },
  "groundnut-oil": {
    description: "Cold-pressed from handpicked groundnuts — mild flavour, high smoke point (232°C), the workhorse of Indian kitchens. Available in bulk for family use.",
    benefits: [
      "High in heart-healthy monounsaturated fats",
      "Rich in resveratrol & vitamin E",
      "High smoke point — safe for deep frying",
      "Natural phytosterols support health",
      "Light texture, non-greasy finish",
    ],
    usage: "All-purpose oil for frying, sautéing, roasting, and baking.",
    ingredients: "100% Cold-Pressed Groundnuts (Arachis hypogaea). Zero additives, zero cholesterol.",
    whyChoose: [
      "Available up to 15L — best value for families",
      "Mild flavour — doesn't overpower dishes",
      "Highest smoke point in our range",
      "Clean replacement for refined/bleached oils",
    ],
    howToUse: [
      { step: "Deep Frying", detail: "Safe at medium-high heat. High smoke point = less oxidation." },
      { step: "Daily Cooking", detail: "All-rounder for curries, stir-fries, and everyday use." },
      { step: "Baking", detail: "Substitute butter or refined oil for a healthier result." },
      { step: "Stir Fry", detail: "Light texture ensures food doesn't feel greasy." },
    ],
  },
  "almond-oil": {
    description: "Cold-pressed from premium sweet almonds — loaded with vitamin E and essential fatty acids. Treasured for culinary elegance and deep skin nourishment.",
    benefits: [
      "Exceptionally high in vitamin E antioxidants",
      "Promotes healthy glowing skin and hair",
      "Rich in zinc and omega-9 fatty acids",
      "Deep moisturiser that doesn't clog pores",
      "Supports healthy cholesterol levels",
    ],
    usage: "Use as a finishing oil in salads and desserts, or apply directly to skin and hair.",
    ingredients: "100% Cold-Pressed Sweet Almonds (Prunus dulcis). Pure, unrefined.",
    whyChoose: [
      "Dual-use — culinary and cosmetic grade",
      "Highest vitamin E content in our range",
      "Ultra-light — absorbs instantly",
      "Suitable for all skin types including sensitive",
    ],
    howToUse: [
      { step: "Skin Moisturiser", detail: "2–3 drops on face after cleansing. Absorbs in minutes." },
      { step: "Hair Serum", detail: "Work through ends to tame frizz and add shine." },
      { step: "Salad Dressing", detail: "Drizzle over fresh salads for a light nutty note." },
      { step: "Baby Massage", detail: "Gentle for infant massage — promotes sleep." },
    ],
  },
  "black-sesame-oil": {
    description: "Wood-pressed from unhulled black sesame seeds — deeply coloured, intensely flavoured, revered in both Ayurveda and East Asian cooking traditions.",
    benefits: [
      "Exceptionally rich in calcium and iron",
      "High concentration of lignans — potent antioxidants",
      "Supports liver health and detoxification",
      "Anti-aging properties through sesamin",
      "Deep tissue nourishment in Ayurveda",
    ],
    usage: "Used as a finishing oil, in Ayurvedic massage (Abhyanga), and traditional medicine.",
    ingredients: "100% Wood-Pressed Black Sesame Seeds. Unrefined, unfiltered.",
    whyChoose: [
      "Unhulled seeds = richer nutrients vs white sesame",
      "Traditional wood-press at ambient temperature",
      "Deeper, more intense flavour",
      "Preferred in classical Ayurvedic formulations",
    ],
    howToUse: [
      { step: "Finishing Oil", detail: "Drizzle sparingly over ramen, salads, or grilled meats." },
      { step: "Abhyanga", detail: "Warm and use for full-body Ayurvedic massage." },
      { step: "Stir Fry", detail: "Add at the very end to preserve the roasted aroma." },
      { step: "Hair Treatment", detail: "Apply to scalp overnight for deep conditioning." },
    ],
  },
  "coconut-oil": {
    description: "Cold-pressed from fresh coconut milk — not copra. Fragrant, creamy, and loaded with medium-chain triglycerides. A versatile choice for kitchen and body.",
    benefits: [
      "Rich in lauric acid — antimicrobial & heart-friendly",
      "Quickly metabolised for immediate energy",
      "Suitable for high-heat cooking",
      "Deep hair conditioning and scalp nourishment",
      "Supports healthy skin barrier function",
    ],
    usage: "Versatile for cooking, baking, hair care, and skin care. Solid at room temperature.",
    ingredients: "100% Virgin Cold-Pressed Coconut (Cocos nucifera). No fermentation.",
    whyChoose: [
      "Wet-milled from fresh coconuts — not copra",
      "Strong natural coconut fragrance = purity",
      "No hydrogenation — zero trans fats",
      "White colour = fresh, high-quality extraction",
    ],
    howToUse: [
      { step: "Cooking", detail: "Ideal for South Indian cooking, curries, and sautéing." },
      { step: "Baking", detail: "Replace butter 1:1 for a light coconut flavour." },
      { step: "Hair Mask", detail: "Apply roots to ends — leave 1–2 hours before washing." },
      { step: "Skin Care", detail: "Body moisturiser, lip balm, or make-up remover." },
    ],
  },
};

// ─── Small Similar Card ───────────────────────────────────────────────────────
// const SmallCard = ({ product }: { product: typeof products[0] }) => (
//   <Link to={`/products/${product.slug}`} className="group shrink-0 w-36 sm:w-40">
//     <motion.div
//       whileHover={{ y: -4 }}
//       transition={{ duration: 0.2 }}
//       className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
//     >
//       <div className="aspect-square bg-gray-50 overflow-hidden">
//         <motion.div className="w-full h-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.35 }}>
//           <ProductImage src={product.variants[0]?.images[0]} name={product.name} imgIndex={0} />
//         </motion.div>
//       </div>
//       <div className="p-3">
//         <h4 className="font-serif text-sm font-bold text-gray-900 group-hover:text-[#C8181A] transition-colors line-clamp-1 mb-0.5">
//           {product.name}
//         </h4>
//         <p className="text-[11px] text-gray-500 line-clamp-1 mb-1.5 font-sans">{product.tagline}</p>
//         <span className="text-xs font-bold text-[#C8181A] font-sans">View →</span>
//       </div>
//     </motion.div>
//   </Link>
// );

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");

  // selectedVariant  → which size is active (drives the entire gallery set + buy links)
  // activePhotoIndex → which of the 4 photos within that size is shown as main
  const [selectedVariant, setSelectedVariant]   = useState(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  // When user picks a different size, switch full gallery AND reset to photo 0
  const handleSizeChange = (index: number) => {
    setSelectedVariant(index);
    setActivePhotoIndex(0); // always start at first photo of the new size
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center px-6">
          <p className="font-serif text-2xl font-bold text-gray-800 mb-4">Product not found</p>
          <Link to="/products" className="text-[#C8181A] hover:underline text-sm font-sans font-semibold">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const info    = productInfo[product.slug] || productInfo["yellow-mustard-oil"];
  const variant = product.variants[selectedVariant]; // source of truth: images[], amazonLink, flipkartLink
  const currentImages = variant.images;              // exactly the 4 images for THIS size
  const mainImage = currentImages[activePhotoIndex]; // the one shown large

  const similar = products
    .filter((p) => p.id !== product.id && (p.oilType === product.oilType || p.category === product.category))
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Lora', Georgia, serif" }}>

      {/* ── Breadcrumb ──────────────────────────────────────────── */}
      <div className="pt-28 pb-2 px-4 sm:px-6 max-w-screen-xl mx-auto">
        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-[#C8181A] transition-colors font-sans"
        >
          <ChevronLeft className="w-4 h-4" /> All Products
        </Link>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">

          {/* ═══ IMAGE COLUMN ════════════════════════════════════════ */}
          {/*
            GALLERY LOGIC:
            - Selecting a SIZE → loads that size's 4 images → shows image[0]
            - Clicking a thumbnail → shows that image as main (within same size's 4 photos)
            - No cross-size image leakage
          */}
          <div className="lg:sticky lg:top-24">
            {/* Main Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedVariant}-${activePhotoIndex}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-square rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-lg shadow-black/8 mb-4 relative"
              >
                {/* Real image with OilImage fallback */}
                <ProductImage
                  src={mainImage}
                  name={product.name}
                  imgIndex={activePhotoIndex}
                />

                {/* Size label */}
                <div className="absolute bottom-3 left-3">
                  <span className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full border border-gray-200 shadow font-sans">
                    {variant.size}
                  </span>
                </div>

                {/* Category badge */}
                <span className="absolute top-3 left-3 bg-white text-[#C8181A] text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full border border-red-100 shadow-sm">
                  {product.category}
                </span>

                {/* Photo counter */}
                <span className="absolute top-3 right-3 bg-black/50 text-white text-[11px] font-semibold px-2 py-1 rounded-full font-sans">
                  {activePhotoIndex + 1}/{currentImages.length}
                </span>

                {/* Prev/Next arrows */}
                {currentImages.length > 1 && (
                  <>
                    <button
                      onClick={() => setActivePhotoIndex((i) => (i - 1 + currentImages.length) % currentImages.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 border border-gray-200 rounded-full flex items-center justify-center shadow hover:bg-white transition-colors"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="w-4 h-4 text-gray-700" />
                    </button>
                    <button
                      onClick={() => setActivePhotoIndex((i) => (i + 1) % currentImages.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 border border-gray-200 rounded-full flex items-center justify-center shadow hover:bg-white transition-colors"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-700" />
                    </button>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Thumbnails — ONLY the 4 images for the currently selected size */}
            <div className="grid grid-cols-4 gap-2">
              {currentImages.map((imgSrc, i) => (
                <button
                  key={`${selectedVariant}-thumb-${i}`}
                  onClick={() => setActivePhotoIndex(i)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    i === activePhotoIndex
                      ? "border-[#C8181A] shadow-md shadow-red-200/50"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                  aria-label={`View photo ${i + 1}`}
                >
                  {/* Real thumbnail with OilImage fallback */}
                  <ProductImage
                    src={imgSrc}
                    name={product.name}
                    imgIndex={i}
                    small
                  />
                  {/* Active indicator */}
                  {i === activePhotoIndex && (
                    <div className="absolute inset-0 ring-2 ring-[#C8181A] ring-inset rounded-[10px]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ═══ DETAILS COLUMN ══════════════════════════════════════ */}
          <FadeUp delay={0.1}>
            {/* Rating */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs tracking-[0.15em] uppercase font-sans font-bold text-[#C8181A]">
                {product.oilType} Oil
              </span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-xs text-gray-500 font-sans ml-1.5">4.9 (240+ reviews)</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 leading-tight">
              {product.name}
            </h1>
            <p className="text-gray-600 text-[15px] mb-7 font-sans leading-relaxed">
              {info.description}
            </p>

            {/* ── Size Selector ────────────────────────────────────── */}
            {/*
              Clicking a size:
              → sets selectedVariant (drives images[], amazonLink, flipkartLink)
              → resets activePhotoIndex to 0 (first photo of new size)
            */}
            <div className="mb-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[13px] font-bold uppercase tracking-wide text-gray-800 font-sans">Pack Size</span>
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded font-sans font-medium">
                  Select to see photos &amp; buy links
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {product.variants.map((v, i) => (
                  <motion.button
                    key={`size-${v.size}`}
                    onClick={() => handleSizeChange(i)}
                    whileTap={{ scale: 0.93 }}
                    className={`relative px-6 py-3 rounded-xl text-sm font-bold border-2 transition-all duration-200 font-sans ${
                      i === selectedVariant
                        ? "bg-[#C8181A] border-[#C8181A] text-white shadow-lg shadow-red-200/60"
                        : "bg-white border-gray-300 text-gray-800 hover:border-[#C8181A]/50 hover:text-[#C8181A]"
                    }`}
                  >
                    {v.size}
                    {i === selectedVariant && (
                      <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* ── Buy Buttons ──────────────────────────────────────── */}
            {/* Both links come from variant — update when size changes */}
            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <motion.a
                href={variant.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(255,153,0,0.45)" }}
                whileTap={{ scale: 0.96 }}
                className="flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-sans font-bold text-[15px] text-black transition-all"
                style={{
                  background: "linear-gradient(135deg, #FFB347, #FF9900, #E88800)",
                  boxShadow: "0 4px 16px rgba(255,153,0,0.30)",
                }}
              >
                <ShoppingBag className="w-5 h-5" />
                Buy on Amazon
              </motion.a>
              <motion.a
                href={variant.flipkartLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(40,116,240,0.45)" }}
                whileTap={{ scale: 0.96 }}
                className="flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-sans font-bold text-[15px] text-white transition-all"
                style={{
                  background: "linear-gradient(135deg, #3D8EF5, #2874F0, #1A5FCC)",
                  boxShadow: "0 4px 16px rgba(40,116,240,0.30)",
                }}
              >
                <ExternalLink className="w-5 h-5" />
                Buy on Flipkart
              </motion.a>
            </div>

            {/* ── Key Benefits ─────────────────────────────────────── */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-gray-500 mb-4 font-sans">
                Key Benefits
              </p>
              <ul className="space-y-3">
                {info.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-gray-700 font-sans leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-[#C8181A]/10 border border-[#C8181A]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#C8181A]" />
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ── Trust Badges ─────────────────────────────────────────── */}
      <FadeUp className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <TrustBadge icon={Leaf}         label="100% Natural"    sub="No artificial additives" />
          <TrustBadge icon={Shield}       label="No Chemicals"    sub="Chemical-free processing" />
          <TrustBadge icon={FlaskConical} label="Lab Tested"      sub="Third-party certified" />
          <TrustBadge icon={Award}        label="FSSAI Certified" sub="Food safety compliant" />
        </div>
      </FadeUp>

      {/* ── Why Choose + How to Use ────────────────────────────────── */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 pb-10">
        <div className="grid md:grid-cols-2 gap-5">
          <FadeUp>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100 p-7 h-full">
              <p className="text-[11px] tracking-[0.18em] uppercase font-sans font-bold text-[#C8181A] mb-2">
                Why Choose This
              </p>
              <h2 className="text-xl font-bold text-gray-900 mb-5">Crafted with intention, pure by nature</h2>
              <ul className="space-y-3.5">
                {info.whyChoose.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#C8181A] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-800 font-sans leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="bg-white rounded-2xl border border-gray-200 p-7 h-full shadow-sm">
              <p className="text-[11px] tracking-[0.18em] uppercase font-sans font-bold text-gray-400 mb-2">
                Usage Guide
              </p>
              <h2 className="text-xl font-bold text-gray-900 mb-5">How to use this oil</h2>
              <div className="space-y-4">
                {info.howToUse.map((item, i) => (
                  <div key={i} className="flex gap-3.5">
                    <div className="w-7 h-7 rounded-full bg-[#C8181A]/10 border border-[#C8181A]/20 flex items-center justify-center shrink-0 font-bold text-[#C8181A] text-sm font-sans mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 font-sans mb-0.5">{item.step}</p>
                      <p className="text-sm text-gray-600 font-sans leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ── Product Info Accordion ──────────────────────────────────── */}
      <FadeUp className="max-w-screen-xl mx-auto px-4 sm:px-6 pb-10">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <p className="text-[11px] tracking-[0.18em] uppercase font-sans font-bold text-gray-400 mb-4">
            Product Information
          </p>
          <AccordionItem title="Description" defaultOpen>
            {info.description}
          </AccordionItem>
          <AccordionItem title="Benefits">
            <ul className="space-y-2.5">
              {info.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C8181A] shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>
          </AccordionItem>
          <AccordionItem title="How to Use">
            {info.usage}
          </AccordionItem>
          <AccordionItem title="Ingredients">
            {info.ingredients}
          </AccordionItem>
        </div>
      </FadeUp>

      {/* ── Similar Products ────────────────────────────────────────── */}
      
    </div>
  );
}