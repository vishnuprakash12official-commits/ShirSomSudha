import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X, ChevronDown, RotateCcw } from "lucide-react";
// 15gn
import img15gn1 from "../assets/15gn1.png";
import img15gn2 from "../assets/15gn2.png";
import img15gn4 from "../assets/15gn4.png";
import img15gn5 from "../assets/15gn5.png";

// 1am
import img1am1 from "../assets/1am1.png";
import img1am2 from "../assets/1am2.png";
import img1am3 from "../assets/1am3.png";
import img1am4 from "../assets/1am4.png";

// 1bm
import img1bm1 from "../assets/1bm1.png";
import img1bm2 from "../assets/1bm2.png";
import img1bm3 from "../assets/1bm3.png";
import img1bm5 from "../assets/1bm5.png";
import img1bm7 from "../assets/1bm7.png";
import img1bm8 from "../assets/1bm8.png";

// 1bs
import img1bs1 from "../assets/1bs1.png";
import img1bs2 from "../assets/1bs2.png";
import img1bs3 from "../assets/1bs3.png";
import img1bs5 from "../assets/1bs5.png";
import img1bs6 from "../assets/1bs6.png";

// 1cn
import img1cn5 from "../assets/1cn5.png";
import img1cn6 from "../assets/1cn6.png";
import img1cn8 from "../assets/1cn8.png";

// 1co
import img1co1 from "../assets/1co1.png";
import img1co2 from "../assets/1co2.png";
import img1co3 from "../assets/1co3.png";

// 1gn
import img1gn1 from "../assets/1gn1.jpeg";
import img1gn6 from "../assets/1gn6.png";
import img1gn7 from "../assets/1gn7.png";

// 1wa
import img1wa1 from "../assets/1wa1.png";

// 1ws
import img1ws2 from "../assets/1ws2.png";
import img1ws3 from "../assets/1ws3.png";
import img1ws5 from "../assets/1ws5.png";
import img1ws7 from "../assets/1ws7.png";

// 1ym
import img1ym1 from "../assets/1ym1.png";
import img1ym3 from "../assets/1ym3.png";
import img1ym5 from "../assets/1ym5.png";
import img1ym8 from "../assets/1ym8.png";

// 2bs
import img2bs1 from "../assets/2bs1.png";
import img2bs2 from "../assets/2bs2.png";
import img2bs3 from "../assets/2bs3.png";
import img2bs5 from "../assets/2bs5.png";
import img2bs9 from "../assets/2bs9.png";

// 2gn
import img2gn1 from "../assets/2gn1.png";
import img2gn5 from "../assets/2gn5.png";
import img2gn9 from "../assets/2gn9.png";

// 2go
import img2go3 from "../assets/2go3.png";

// 2ym
import img2ym1 from "../assets/2ym1.png";
import img2ym4 from "../assets/2ym4.png";
import img2ym5 from "../assets/2ym5.png";
import img2ym7 from "../assets/2ym7.png";

// 500am
import img500am2 from "../assets/500am2.png";
import img500am3 from "../assets/500am3.png";
import img500am5 from "../assets/500am5.png";

// 500bm
import img500bm1 from "../assets/500bm1.png";
import img500bm2 from "../assets/500bm6.png";
import img500bm3 from "../assets/500bm2.png";

// 500ws
import img500ws1 from "../assets/500ws1.png";
import img500ws2 from "../assets/500ws2.png";
import img500ws5 from "../assets/500ws5.png";
import img500ws7 from "../assets/500ws7.png";

// 500ym
import img500ym1 from "../assets/500ym1.png";
import img500ym2 from "../assets/500ym2.png";
import img500ym3 from "../assets/500ym3.png";
import img500ym4 from "../assets/500ym4.png";
import img500ym5 from "../assets/500ym5.png";

// 5bd
import img5bd104 from "../assets/5bd104.png";

// 5bs
import img5bs1 from "../assets/5bs1.png";
import img5bs2 from "../assets/5bs2.png";
import img5bs5 from "../assets/5bs5.png";
import img5bs9 from "../assets/5bs9.png";

// 5gn
import img5gn1 from "../assets/5gn1.png";
import img5gn2 from "../assets/5gn2.png";
import img5gn6 from "../assets/5gn6.png";
import img5gn8 from "../assets/5gn8.png";

// 5wa
import img5wa1 from "../assets/5wa1.png";

// 5ws
import img5ws4 from "../assets/5ws4.png";
import img5ws5 from "../assets/5ws5.png";
import img5ws7 from "../assets/5ws7.png";

// 5ym
import img5ym1 from "../assets/5ym1.png";
import img5ym4 from "../assets/5ym4.png";
import img5ym5 from "../assets/5ym5.png";
import img5ym7 from "../assets/5ym7.png";

// ─── Brand Color: #C8181A (Somsudha Crimson) ─────────────────────────────────

// ─── Product Data ─────────────────────────────────────────────────────────────
// Each variant now has `images: string[]` — 4 photos per size.
// Replace the paths with your actual image URLs.
export const products = [
  {
    id: 1,
    name: "Yellow Mustard Oil",
    slug: "yellow-mustard-oil",
    category: "Cold-Pressed",
    oilType: "Mustard",
    tagline: "Bold, pungent & traditionally pure",
    image: "/images/yellow-mustard-oil.jpg",
    variants: [
      {
        size: "500ml", amazonLink: "#", flipkartLink: "#",
        images: [
        img500ym1, img500ym2, img500ym3, img500ym4, img500ym5
        ],
      },
      {
        size: "1L", amazonLink: "#", flipkartLink: "#",
        images: [
          img1ym1, img1ym3, img1ym5, img1ym8
        ],
      },
      {
        size: "2L", amazonLink: "#", flipkartLink: "#",
        images: [
          img2ym1, img2ym4, img2ym5, img2ym7
        ],
      },
      {
        size: "5L", amazonLink: "#", flipkartLink: "#",
        images: [
         img5ym1, img5ym4, img5ym5, img5ym7
        ],
      },
    ],
  },
  {
    id: 2,
    name: "White Sesame Oil",
    slug: "white-sesame-oil",
    category: "Wood-Pressed",
    oilType: "Sesame",
    tagline: "Delicate, nutty & rich in antioxidants",
    image: "/images/white-sesame-oil.jpg",
    variants: [
      {
        size: "500ml", amazonLink: "#", flipkartLink: "#",
        images: [
         img500ws1, img500ws2, img500ws5, img500ws7
        ],
      },
      {
        size: "1L", amazonLink: "#", flipkartLink: "#",
        images: [
          img1ws3, img1ws2, img1ws5, img1ws7
        ],
      },
      {
        size: "5L", amazonLink: "#", flipkartLink: "#",
        images: [
          img5ws4, img5ws5, img5ws7
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Black Mustard Oil",
    slug: "black-mustard-oil",
    category: "Cold-Pressed",
    oilType: "Mustard",
    tagline: "Intense aroma, traditional cold-press",
    image: "/images/black-mustard-oil.jpg",
    variants: [
      {
        size: "500ml", amazonLink: "#", flipkartLink: "#",
        images: [
         img500bm1, img500bm2, img500bm3
        ],
      },
      {
        size: "1L", amazonLink: "#", flipkartLink: "#",
        images: [
         img1bm1, img1bm2, img1bm3, img1bm5, img1bm7, img1bm8
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Groundnut Oil",
    slug: "groundnut-oil",
    category: "Cold-Pressed",
    oilType: "Groundnut",
    tagline: "Light, versatile & heart-healthy",
    image: "/images/groundnut-oil.jpg",
    variants: [
      {
        size: "1L", amazonLink: "#", flipkartLink: "#",
        images: [
        img1gn1, img1gn6, img1gn7
        ],
      },
      {
        size: "2L", amazonLink: "#", flipkartLink: "#",
        images: [
          img2gn1, img2gn5, img2gn9
        ],
      },
      {
        size: "5L", amazonLink: "#", flipkartLink: "#",
        images: [
          img5gn1, img5gn2, img5gn6, img5gn8
        ],
      },
      {
        size: "15L", amazonLink: "#", flipkartLink: "#",
        images: [
          img15gn1, img15gn2, img15gn4, img15gn5
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Almond Oil",
    slug: "almond-oil",
    category: "Cold-Pressed",
    oilType: "Almond",
    tagline: "Pure, skin-nourishing & vitamin-rich",
    image: "/images/almond-oil.jpg",
    variants: [
      {
        size: "500ml", amazonLink: "#", flipkartLink: "#",
        images: [
       img1am1, img1am2, img1am3, img1am4
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Black Sesame Oil",
    slug: "black-sesame-oil",
    category: "Wood-Pressed",
    oilType: "Sesame",
    tagline: "Earthy depth, centuries of tradition",
    image: "/images/black-sesame-oil.jpg",
    variants: [
      {
        size: "1L", amazonLink: "#", flipkartLink: "#",
        images: [
          img1bs1, img1bs2, img1bs3, img1bs5, img1bs6
        ],
      },
      {
        size: "2L", amazonLink: "#", flipkartLink: "#",
        images: [
          img2bs1, img2bs2, img2bs3, img2bs5, img2bs9
        ],
      },
      {
        size: "5L", amazonLink: "#", flipkartLink: "#",
        images: [
          img5bs1, img5bs2, img5bs5, img5bs9
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Coconut Oil",
    slug: "coconut-oil",
    category: "Cold-Pressed",
    oilType: "Coconut",
    tagline: "Virgin, fragrant & deeply moisturising",
    image: "/images/coconut-oil.jpg",
    variants: [
      {
        size: "1L", amazonLink: "#", flipkartLink: "#",
        images: [
          img1co1, img1co2, img1co3
        ],
      },
    ],
  },
];

const OIL_TYPES  = ["Mustard", "Sesame", "Groundnut", "Coconut", "Almond"];
const CATEGORIES = ["Cold-Pressed", "Wood-Pressed"];
const QUANTITIES = ["500ml", "1L", "2L", "5L", "15L"];

// ─── Placeholder Image ────────────────────────────────────────────────────────
const OilImage = ({ name, small = false }: { name: string; small?: boolean }) => {
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
  return (
    <div
      className="w-full h-full flex items-center justify-center flex-col gap-2"
      style={{ background: `radial-gradient(ellipse at 35% 25%, ${p.light}70, ${p.bg})` }}
    >
      <div
        className={`${small ? "w-8 h-14" : "w-14 h-24"} rounded-b-full rounded-t-md relative`}
        style={{
          background: `linear-gradient(160deg, ${p.accent}50, ${p.accent}cc, ${p.accent}f0)`,
          boxShadow: `0 6px 20px ${p.accent}30`,
        }}
      >
        <div className="absolute inset-x-0 top-0 h-1/3 rounded-t-md opacity-30"
          style={{ background: "linear-gradient(180deg, white, transparent)" }} />
      </div>
      {!small && (
        <span className="text-[10px] font-bold tracking-widest uppercase opacity-35" style={{ color: p.accent }}>
          {name.split(" ")[0]}
        </span>
      )}
    </div>
  );
};

// ─── Real Image with OilImage fallback ───────────────────────────────────────
const ProductImage = ({ src, name, small = false }: { src?: string; name: string; small?: boolean }) => {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <OilImage name={name} small={small} />;
  return (
    <img
      src={src}
      alt={name}
      className="w-full h-full object-contain"
      onError={() => setFailed(true)}
    />
  );
};

// ─── Professional Filter Sidebar ──────────────────────────────────────────────
// Checkbox-style with count, clean dividers, no pill chaos
const FilterGroup = ({
  title,
  items,
  selected,
  onToggle,
  counts,
}: {
  title: string;
  items: string[];
  selected: string[];
  onToggle: (v: string) => void;
  counts?: Record<string, number>;
}) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="py-4 border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between mb-1 group"
      >
        <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-gray-800">{title}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400 group-hover:text-gray-600 transition-colors"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="pt-2 space-y-0.5">
              {items.map((item) => {
                const active = selected.includes(item);
                const count = counts?.[item];
                return (
                  <label
                    key={item}
                    className={`flex items-center justify-between px-2 py-2 rounded-lg cursor-pointer transition-colors ${
                      active ? "bg-[#C8181A]/8" : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {/* Custom checkbox */}
                      <div
                        onClick={() => onToggle(item)}
                        className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-all ${
                          active
                            ? "bg-[#C8181A] border-[#C8181A]"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        {active && (
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 10">
                            <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <span
                        onClick={() => onToggle(item)}
                        className={`text-sm select-none ${active ? "text-[#C8181A] font-semibold" : "text-gray-700 font-medium"}`}
                      >
                        {item}
                      </span>
                    </div>
                    {count !== undefined && (
                      <span className={`text-[11px] font-semibold tabular-nums ${active ? "text-[#C8181A]" : "text-gray-400"}`}>
                        {count}
                      </span>
                    )}
                  </label>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Product Card ─────────────────────────────────────────────────────────────
const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.97 }}
    transition={{ duration: 0.32, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
  >
    <Link to={`/products/${product.slug}`} className="group block h-full">
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.22 }}
        className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:shadow-black/8 transition-shadow duration-300 h-full flex flex-col"
      >
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <ProductImage
              src={product.variants[0]?.images[0]}
              name={product.name}
            />
          </motion.div>
          <span className="absolute top-3 left-3 bg-white/95 text-[#C8181A] text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full border border-red-100 shadow-sm">
            {product.category}
          </span>
        </div>

        {/* Info */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-serif text-base font-bold text-gray-900 mb-0.5 group-hover:text-[#C8181A] transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 mb-3 font-sans leading-relaxed flex-1">{product.tagline}</p>

          {/* Size chips */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {product.variants.map((v) => (
              <span key={v.size} className="text-[11px] font-semibold bg-gray-50 text-gray-600 border border-gray-200 px-2 py-0.5 rounded-md font-sans">
                {v.size}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <span className="text-sm font-bold text-[#C8181A] group-hover:underline underline-offset-2 font-sans">
              View Details
            </span>
            <div className="w-8 h-8 rounded-full bg-[#C8181A]/8 flex items-center justify-center text-[#C8181A] text-sm font-bold">
              →
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  </motion.div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Products() {
  const [search, setSearch]                 = useState("");
  const [selectedOilTypes, setOilTypes]     = useState<string[]>([]);
  const [selectedCategories, setCategories] = useState<string[]>([]);
  const [selectedQty, setQty]               = useState<string[]>([]);
  const [mobileFilterOpen, setMobileFilter] = useState(false);

  const toggle = (setter: React.Dispatch<React.SetStateAction<string[]>>) => (val: string) =>
    setter((prev) => prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]);

  const activeCount = selectedOilTypes.length + selectedCategories.length + selectedQty.length;

  const filtered = useMemo(() => products.filter((p) => {
    const matchSearch   = p.name.toLowerCase().includes(search.toLowerCase());
    const matchOilType  = !selectedOilTypes.length   || selectedOilTypes.includes(p.oilType);
    const matchCategory = !selectedCategories.length || selectedCategories.includes(p.category);
    const matchQty      = !selectedQty.length        || p.variants.some((v) => selectedQty.includes(v.size));
    return matchSearch && matchOilType && matchCategory && matchQty;
  }), [search, selectedOilTypes, selectedCategories, selectedQty]);

  // Product counts per filter value (based on current unfiltered list for reference)
  const oilTypeCounts = useMemo(() => Object.fromEntries(
    OIL_TYPES.map((t) => [t, products.filter((p) => p.oilType === t).length])
  ), []);
  const categoryCounts = useMemo(() => Object.fromEntries(
    CATEGORIES.map((c) => [c, products.filter((p) => p.category === c).length])
  ), []);
  const qtyCounts = useMemo(() => Object.fromEntries(
    QUANTITIES.map((q) => [q, products.filter((p) => p.variants.some((v) => v.size === q)).length])
  ), []);

  const clearAll = () => { setOilTypes([]); setCategories([]); setQty([]); setSearch(""); };

  const FilterPanel = () => (
    <div>
      <FilterGroup title="Oil Type"  items={OIL_TYPES}   selected={selectedOilTypes}   onToggle={toggle(setOilTypes)}   counts={oilTypeCounts} />
      <FilterGroup title="Category"  items={CATEGORIES}  selected={selectedCategories} onToggle={toggle(setCategories)} counts={categoryCounts} />
      <FilterGroup title="Quantity"  items={QUANTITIES}  selected={selectedQty}         onToggle={toggle(setQty)}         counts={qtyCounts} />
      <AnimatePresence>
        {activeCount > 0 && (
          <motion.button
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onClick={clearAll}
            className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-gray-300 text-gray-600 text-sm font-semibold hover:border-[#C8181A] hover:text-[#C8181A] transition-colors font-sans"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Clear all filters
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Lora', Georgia, serif" }}>

      {/* ── Header ───────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-28 pb-8 px-6 text-center bg-white border-b border-gray-200"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[#C8181A] font-sans font-bold mb-2">
          Pure &amp; Traditional
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Our Products</h1>
        <p className="text-gray-600 text-sm max-w-sm mx-auto font-sans">
          Cold-pressed &amp; wood-pressed oils — made the traditional way, zero chemicals.
        </p>
      </motion.section>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 pb-24 pt-6">

        {/* ── Search + Mobile Filter ───────────────────────────────── */}
        <div className="flex gap-3 mb-5">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-9 py-3 rounded-xl bg-white border border-gray-300 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#C8181A] focus:ring-2 focus:ring-[#C8181A]/15 transition-all font-sans"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X className="w-4 h-4 text-gray-400 hover:text-gray-700" />
              </button>
            )}
          </div>

          {/* Mobile filter button */}
          <button
            onClick={() => setMobileFilter(true)}
            className="lg:hidden relative flex items-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:border-[#C8181A] hover:text-[#C8181A] transition-colors font-sans"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#C8181A] text-white text-[10px] font-bold rounded-full flex items-center justify-center font-sans">
                {activeCount}
              </span>
            )}
          </button>
        </div>

        {/* ── Active chips ─────────────────────────────────────────── */}
        <AnimatePresence>
          {activeCount > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-wrap gap-2 mb-5 overflow-hidden"
            >
              {[...selectedOilTypes, ...selectedCategories, ...selectedQty].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 bg-[#C8181A]/8 text-[#C8181A] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#C8181A]/20 font-sans"
                >
                  {chip}
                  <button
                    onClick={() => {
                      if (OIL_TYPES.includes(chip)) toggle(setOilTypes)(chip);
                      else if (CATEGORIES.includes(chip)) toggle(setCategories)(chip);
                      else toggle(setQty)(chip);
                    }}
                    className="hover:opacity-60"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              <button onClick={clearAll} className="text-xs font-semibold text-gray-400 hover:text-[#C8181A] underline underline-offset-2 transition-colors font-sans">
                Clear all
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-6 items-start">

          {/* ── Desktop Sidebar ───────────────────────────────────── */}
          <motion.aside
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="hidden lg:block w-56 shrink-0 sticky top-24"
          >
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              {/* Sidebar header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-bold text-gray-900 font-sans">Filters</span>
                  {activeCount > 0 && (
                    <span className="w-5 h-5 bg-[#C8181A] text-white text-[10px] font-bold rounded-full flex items-center justify-center font-sans">
                      {activeCount}
                    </span>
                  )}
                </div>
                {activeCount > 0 && (
                  <button
                    onClick={clearAll}
                    className="text-[11px] font-semibold text-gray-400 hover:text-[#C8181A] transition-colors font-sans"
                  >
                    Reset
                  </button>
                )}
              </div>
              <div className="px-4 pb-4">
                <FilterPanel />
              </div>
            </div>
          </motion.aside>

          {/* ── Grid ─────────────────────────────────────────────── */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500 font-sans">
                <span className="font-bold text-gray-800">{filtered.length}</span> product{filtered.length !== 1 ? "s" : ""}
              </span>
              {activeCount > 0 && (
                <button onClick={clearAll} className="flex items-center gap-1.5 text-xs font-semibold text-[#C8181A] hover:underline underline-offset-2 font-sans">
                  <RotateCcw className="w-3 h-3" /> Reset filters
                </button>
              )}
            </div>

            <AnimatePresence mode="popLayout">
              {filtered.length > 0 ? (
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="py-20 text-center"
                >
                  <p className="text-4xl mb-3">🔍</p>
                  <p className="text-gray-800 font-bold font-sans mb-1">No products found</p>
                  <p className="text-gray-500 font-sans text-sm mb-5">Try removing some filters</p>
                  <button
                    onClick={clearAll}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C8181A] text-white text-sm font-bold rounded-xl hover:bg-red-800 transition-colors font-sans"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Reset Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Mobile Filter Drawer ─────────────────────────────────── */}
      <AnimatePresence>
        {mobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileFilter(false)}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              className="fixed top-0 right-0 h-full w-[80vw] max-w-xs bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-gray-500" />
                  <span className="font-bold text-gray-900 font-sans">Filters</span>
                  {activeCount > 0 && (
                    <span className="w-5 h-5 bg-[#C8181A] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                      {activeCount}
                    </span>
                  )}
                </div>
                <button onClick={() => setMobileFilter(false)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors">
                  <X className="w-4 h-4 text-gray-700" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-5 py-2">
                <FilterPanel />
              </div>
              <div className="px-5 pb-6 pt-4 border-t border-gray-100 space-y-2.5">
                {activeCount > 0 && (
                  <button onClick={clearAll} className="w-full py-3 border border-gray-300 text-gray-700 text-sm font-semibold rounded-xl hover:border-[#C8181A] hover:text-[#C8181A] transition-colors font-sans">
                    Clear All Filters
                  </button>
                )}
                <button
                  onClick={() => setMobileFilter(false)}
                  className="w-full py-3.5 bg-[#C8181A] hover:bg-red-800 text-white text-sm font-bold rounded-xl transition-colors font-sans"
                >
                  Show {filtered.length} Result{filtered.length !== 1 ? "s" : ""}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}