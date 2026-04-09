import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ChevronLeft, ChevronRight, Star, Phone, MessageCircle,
  ArrowRight, Check, Shield, Truck, RefreshCw,
  Leaf, FlaskConical, Award, Cog, Headphones,
} from "lucide-react";
import { Link } from "react-router-dom";

import banner1 from "../assets/HomepageBanner1.png";
import banner2 from "../assets/HomePageBanner2.png";
import whiteSesame from "../assets/White Sesame.png";
import blackMustard from "../assets/Black Mustard.png";
import almondOil from "../assets/Almond oil.png";
import yellowMustard from "../assets/yellow mustard.png";
import coconutOil from "../assets/coconut oil.png";
import blackSesame from "../assets/black sesame.png";
import groundnut from "../assets/groundbut.png";
import third from "../assets/3rd.jpg";
import fourth from "../assets/4rd.png";
import first from "../assets/1st.png";
import second from "../assets/2nd.png";
import owner from "../assets/owner.jpeg";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const slides = [
  {
    image: banner1,
    badge: "Chemical-Free • Lab-Checked • Farm-Direct",
    title: "Oils You Can\nTrust",
    sub: "Pure. Tested. Farm-Direct. Nature's goodness in every drop.",
    bullets: ["Lab-tested for purity", "Made from chemical-free seeds", "Clean cooking, every day"],
    cta: "Shop Now", cta2: "Explore Range",
  },
  {
    image: banner2,
    badge: "7 Oils • One Promise",
    title: "Pure Goodness\nIn Every Drop",
    sub: "Unprocessed, uncompromised, unforgettable — from our farm to your kitchen.",
    bullets: ["Wood-pressed tradition", "No additives, no chemicals", "Farm-direct sourcing"],
    cta: "Shop Real Food", cta2: "View All Oils",
  },
];

const marqueeItems = [
  "100% Natural", "Chemical Free", "Cold Pressed", "FSSAI Certified",
  "Farm Direct", "Lab Tested", "Traditional Method", "No Preservatives",
];

const allProducts = [
  { name: "Yellow Mustard Oil", category: "Mustard Oil", tag: "Pure", img: yellowMustard, desc: "Bold pungent flavour, perfect for everyday cooking & immunity.", slug: "yellow-mustard-oil" },
  { name: "Black Mustard Oil", category: "Mustard Oil", tag: "Popular", img: blackMustard, desc: "Rich in Omega-3 & healthy fats. Boosts immunity & heart health.", slug: "black-mustard-oil" },
  { name: "White Sesame Oil", category: "Sesame Oil", tag: "Bestseller", img: whiteSesame, desc: "Rich in antioxidants, sweet aroma, traditionally wood-pressed.", slug: "white-sesame-oil" },
  { name: "Black Sesame Oil", category: "Sesame Oil", tag: "New", img: blackSesame, desc: "Rich in antioxidants, ideal for daily cooking & heart care.", slug: "black-sesame-oil" },
  { name: "Coconut Oil", category: "Coconut Oil", tag: "Organic", img: coconutOil, desc: "Rich in MCTs, supports heart health, cooking, hair & skin.", slug: "coconut-oil" },
  { name: "Groundnut Oil", category: "Groundnut Oil", tag: "Value", img: groundnut, desc: "Rich in Omega-6, perfect for frying. Pure & naturally pressed.", slug: "groundnut-oil" },
  { name: "Almond Oil", category: "Almond Oil", tag: "Premium", img: almondOil, desc: "Rich in Vitamin E, boosts skin, hair & heart health.", slug: "almond-oil" },
];

const productCategories = ["All", "Mustard Oil", "Sesame Oil", "Coconut Oil", "Groundnut Oil", "Almond Oil"];

const whyChoose = [
  { icon: Leaf, title: "100% Natural", desc: "Sourced directly from certified organic farms across India. No shortcuts, ever." },
  { icon: FlaskConical, title: "Zero Chemicals", desc: "No additives, preservatives, or artificial flavors. Pure as nature intended." },
  { icon: Cog, title: "Wood Pressed", desc: "Age-old Kachi Ghani technique retains all nutrients, flavor & aroma." },
  { icon: Award, title: "Lab Tested", desc: "Every batch third-party tested for purity, safety & nutritional standards." },
];

const processSteps = [
  { num: "01", title: "Farm Sourcing", desc: "Seeds hand-selected from certified organic farms across Rajasthan, Gujarat & MP at peak harvest.", emoji: "🌾" },
  { num: "02", title: "Wood Pressing", desc: "Traditional Kachi Ghani — no heat, no solvents. Oil extracted slowly preserving every nutrient.", emoji: "⚙️" },
  { num: "03", title: "Lab Testing", desc: "Rigorous third-party tests for purity, acidity & microbial safety on every single batch.", emoji: "🧪" },
  { num: "04", title: "Pure Packaging", desc: "UV-protected food-grade bottles sealed within 24 hours of pressing. Direct from our facility.", emoji: "📦" },
];

const testimonials = [
  { name: "Priya Sharma", loc: "Jaipur, Rajasthan", initials: "PS", rating: 5, text: "The mustard oil is absolutely pure — you can taste the difference. My family won't use anything else now." },
  { name: "Rajesh Kumar", loc: "Ahmedabad, Gujarat", initials: "RK", rating: 5, text: "Finally found an oil brand I can genuinely trust. Groundnut oil quality stays consistent batch after batch." },
  { name: "Anita Verma", loc: "Mumbai, Maharashtra", initials: "AV", rating: 5, text: "The sesame oil has a beautiful nutty aroma. Chemical-free matters for us and Somsudha never disappoints." },
  { name: "Meera Joshi", loc: "Pune, Maharashtra", initials: "MJ", rating: 5, text: "Switched to Somsudha's coconut oil 6 months ago. The difference in taste and quality is unbelievable." },
  { name: "Arjun Patel", loc: "Surat, Gujarat", initials: "AP", rating: 5, text: "Brilliant quality and fast delivery. The cold-pressed groundnut oil is exactly what I was looking for." },
];

const certs = [
  { icon: "🏛️", name: "FSSAI", desc: "Food Safety Certified" },
  { icon: "📋", name: "ISO 9001", desc: "Quality Management" },
  { icon: "🌿", name: "Organic", desc: "Certified Organic" },
  { icon: "🔬", name: "GMP", desc: "Good Mfg. Practice" },
  { icon: "⚗️", name: "Lab Tested", desc: "Third-Party Verified" },
  { icon: "🏆", name: "Agmark", desc: "Agri Quality Mark" },
];

const faqs = [
  
  { q: "Are your products really 100% chemical-free?", a: "Absolutely. Every Shri Somsudha product contains zero additives, preservatives, artificial colors, or flavoring. We use only mechanical extraction — no hexane, bleaching, or deodorization. Third-party lab reports available on request." },
  { q: "How should I store cold-pressed oil?", a: "Store in a cool, dry place away from direct sunlight. No refrigeration needed. Once opened, use within 3 months for best flavor. Natural sediment at the bottom is normal — a sign of authenticity." },
  { q: "Where do you source your seeds?", a: "Directly from certified farmers across Rajasthan, Gujarat, and Madhya Pradesh. All farms follow sustainable and natural farming practices with no middlemen involved." },
  { q: "Do you offer bulk or wholesale orders?", a: "Yes! Special pricing for bulk orders above 20 litres and wholesale partnerships for retailers. Contact us via WhatsApp or email — we respond within 24 hours with a custom quote." },
  { q: "What is your delivery timeline?", a: "We dispatch within 24–48 hours. Standard delivery across India takes 3–5 business days. " },
];

// ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

// 🎬 Cinematic Fade Up (main)
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ⚡ Slight fade (for small elements)
export const fadeSoft = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// 💎 Scale reveal (for images/cards)
export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// 🎯 Stagger system (VERY IMPORTANT)
export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// 🔥 Fast stagger (for lists/grids)
export const staggerFast = {
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

// ─── SHARED HELPERS ───────────────────────────────────────────────────────────

const RevealWrap = ({
  children,
  delay = 0,
  className = "",
  variant = "fadeUp", // 👈 dynamic animation
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: "fadeUp" | "fadeSoft" | "scaleIn";
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // 🎯 choose animation
  const variantsMap = {
    fadeUp,
    fadeSoft,
    scaleIn,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variantsMap[variant]}
      transition={{
        delay,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

const StaggerWrap = ({
  children,
  className = "",
  speed = "normal", // 👈 control speed
}: {
  children: React.ReactNode;
  className?: string;
  speed?: "slow" | "normal" | "fast";
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // 🎯 speed control
  const speedMap = {
    slow: 0.18,
    normal: 0.12,
    fast: 0.06,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: speedMap[speed],
            delayChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="
        inline-flex items-center gap-2
        text-[11px] font-semibold tracking-[0.25em] uppercase
        text-primary
        bg-primary/10
        px-4 py-1.5 rounded-full mb-4
        border border-primary/20
        transition-all duration-300
      "
    >

      {/* ✨ animated dot */}
      <motion.span
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-1.5 h-1.5 rounded-full bg-primary"
      />

      {children}
    </motion.span>
  );
}

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = Math.ceil(to / 55);
    const t = setInterval(() => {
      cur = Math.min(cur + step, to);
      setVal(cur);
      if (cur >= to) clearInterval(t);
    }, 20);
    return () => clearInterval(t);
  }, [inView, to]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}








function Hero({ isScrolled }) {
  const navHeight = isScrolled ? 64 : 96;

  const slides = [banner1, banner2];

  const [cur, setCur] = useState(0);

  // Auto slide
  useEffect(() => {
    const t = setInterval(() => {
      setCur((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section
      className="w-full flex flex-col lg:flex-row overflow-hidden"
      style={{
        minHeight: `calc(100svh - ${navHeight}px)`,
        marginTop: `${navHeight}px`,
      }}
    >
      {/* ================= LEFT SLIDER ================= */}
      <div className="lg:w-[70%] w-full h-[45vh] sm:h-[55vh] lg:h-auto relative overflow-hidden">

        {/* 🔥 BLURRED BACKGROUND */}
        <img
          src={slides[cur]}
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110"
        />

        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/20" />

        {/* ✅ MAIN IMAGE (NO CUT, NO BLACK SPACE) */}
        <img
          src={slides[cur]}
          alt="hero"
          className="relative w-full h-full object-contain"
        />

        {/* LEFT ARROW */}
        <button
          onClick={() =>
            setCur((p) => (p - 1 + slides.length) % slides.length)
          }
          className="absolute left-3 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 
          w-8 h-8 sm:w-10 sm:h-10 bg-black/40 text-white rounded-full 
          backdrop-blur flex items-center justify-center 
          hover:scale-110 active:scale-95 transition"
        >
          ‹
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => setCur((p) => (p + 1) % slides.length)}
          className="absolute right-3 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 
          w-8 h-8 sm:w-10 sm:h-10 bg-black/40 text-white rounded-full 
          backdrop-blur flex items-center justify-center 
          hover:scale-110 active:scale-95 transition"
        >
          ›
        </button>

        {/* DOT INDICATORS */}
        <div className="absolute bottom-3 w-full flex justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCur(i)}
              className={`h-2 rounded-full cursor-pointer transition-all ${
                i === cur ? "w-6 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= RIGHT PANEL ================= */}
      <div className="lg:w-[30%] w-full bg-[#F3F4F6] px-5 sm:px-6 py-8 sm:py-10 flex flex-col justify-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-base sm:text-lg font-semibold mb-2 leading-snug">
            अच्छा अन्न, अच्छा तन, अच्छा मन
          </h3>

          <p className="text-gray-500 text-sm sm:text-base mb-6">
            Trust built on proof, not promises.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-3 sm:space-y-4">
          {[
            {
              title: "Trusted by 5000+ families",
              sub: "Daily essentials people reorder with confidence.",
            },
            {
              title: "Connected to 500+ organic kisaan",
              sub: "Farm-direct sourcing you can trace.",
            },
            {
              title: "25 tons pesticides avoided",
              sub: "More families switching to chemical-free basics.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.15 }}
              whileHover={{
                y: -4,
                scale: 1.02,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.08)",
              }}
              className="bg-white rounded-xl p-4 cursor-pointer transition"
            >
              <h4 className="font-semibold text-sm sm:text-base">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-500">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="mt-6"
        >
          <Link
            to="/products"
            className="relative overflow-hidden group block bg-green-600 text-white 
            py-3 sm:py-4 rounded-full font-semibold text-center shadow-md
            transition-all duration-300 hover:-translate-y-1 
            hover:shadow-[0_12px_30px_rgba(34,197,94,0.35)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
              Shop Bestsellers →
            </span>

            {/* Shine Effect */}
            <span
              className="absolute inset-0 before:content-[''] before:absolute 
              before:top-0 before:left-[-120%] before:w-full before:h-full
              before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.4),transparent)]
              before:transition-all before:duration-700 group-hover:before:left-[120%]"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}



// ─── MARQUEE ──────────────────────────────────────────────────────────────────

function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div className="bg-[#111] overflow-hidden py-3.5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-8 text-[11px] font-semibold tracking-[3px] uppercase text-white/50">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] flex-shrink-0" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── TRUST BAR ────────────────────────────────────────────────────────────────

function TrustBar() {
  const items = [
    { icon: <Truck className="w-5 h-5 text-[#D32F2F]" />, title: "Free Shipping", sub: "On orders above ₹499" },
    { icon: <Shield className="w-5 h-5 text-[#D32F2F]" />, title: "100% Guarantee", sub: "Or full refund" },
    { icon: <RefreshCw className="w-5 h-5 text-[#D32F2F]" />, title: "Easy Returns", sub: "Within 7 days" },
    { icon: <Headphones className="w-5 h-5 text-[#D32F2F]" />, title: "WhatsApp Support", sub: "7 days a week" },
  ];
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
          {items.map((item, i) => (
            <RevealWrap key={i} delay={i * 0.07}>
              <div className="flex items-center gap-3 py-5 px-5 sm:px-7">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[#111]">{item.title}</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">{item.sub}</div>
                </div>
              </div>
            </RevealWrap>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── WELCOME + STATS ──────────────────────────────────────────────────────────

function WelcomeStats() {
  const stats = [
    { to: 5000, suffix: "+", label: "Happy Families" },
    { to: 7, suffix: "", label: "Pure Oils" },
    { to: 0, suffix: "", label: "Chemicals Used" },
    { to: 100, suffix: "%", label: "Customer Satisfaction" },
    { to: 100, suffix: "%", label: "Natural & Pure" },
  ];

  return (
    <section className="bg-[#F8F5F0] py-20 sm:py-24 relative overflow-hidden">

      {/* 🌊 subtle background glow */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        {/* HEADER */}
        <RevealWrap className="text-center mb-14">
          <SectionTag>Welcome to Shri Somsudha</SectionTag>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 leading-tight">
            You're One Step Closer to{" "}
            <span className="text-primary italic">Purity</span>
          </h2>

          <p className="text-base text-gray-700 mt-4 max-w-xl mx-auto leading-relaxed">
            For over 15 years, we've been delivering cold-pressed oils made the traditional way —
            no shortcuts, no compromises. Just pure, honest oils for your family.
          </p>
        </RevealWrap>

        {/* IMPACT LINE */}
        <RevealWrap delay={0.1} variant="fadeSoft" className="text-center mb-10">
          <p className="text-xs font-semibold text-primary tracking-[0.25em] uppercase mb-1">
            Your clean choice creates real impact
          </p>
          <p className="text-sm text-gray-600">
            Every order supports chemical-free farming and honest livelihoods
          </p>
        </RevealWrap>

        {/* STATS */}
        <StaggerWrap speed="fast" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">

          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              whileTap={{ scale: 0.96 }}
              className="
                relative bg-white border border-primary/10
                rounded-2xl py-6 sm:py-8 px-4 text-center
                shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                transition-all duration-300
              "
            >

              {/* ✨ glow layer */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />

              {/* NUMBER */}
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>

              {/* LABEL */}
              <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">
                {s.label}
              </div>

            </motion.div>
          ))}

        </StaggerWrap>

      </div>
    </section>
  );
}

// ─── BRAND INTRO ──────────────────────────────────────────────────────────────

function BrandIntro() {
  return (
    <section className="bg-[#FAFAFA] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <RevealWrap>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl ">
                <img src={banner1} alt="Shri Somsudha" className="" />
              </div>
              {/* <motion.div
                initial={{ opacity:0, scale:0.85 }}
                whileInView={{ opacity:1, scale:1 }}
                transition={{ delay:0.4 }}
                viewport={{ once:true }}
                className="absolute -bottom-5 -right-4 sm:-right-8 bg-[#D32F2F] text-white rounded-2xl px-6 py-5 shadow-xl max-w-[200px]"
              >
                <div className="text-3xl font-bold leading-none">15+</div>
                <div className="text-[12px] mt-1 opacity-90 leading-tight font-medium">Years of Traditional<br/>Cold Pressing</div>
              </motion.div> */}
            </div>
          </RevealWrap>

          <RevealWrap delay={0.15}>
            <SectionTag>Our Philosophy</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight mb-1">Rooted in Nature,</h2>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-5">
              Crafted with <span className="text-[#D32F2F]">Tradition</span>
            </h2>
            <div className="w-10 h-0.5 bg-[#D32F2F] mb-6" />
            <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
              Shri Somsudha was born in the heartland of Rajasthan, where generations have trusted wood-pressed oils. We carry forward that legacy — delivering pure, unadulterated oils directly from trusted farms to your kitchen.
            </p>
            <p className="text-[14px] text-gray-400 leading-relaxed mb-7">
              Every bottle is free from chemicals, preservatives, and shortcuts. Because your family deserves nothing but the real thing.
            </p>
            <div className="flex flex-wrap gap-2 mb-7">
              {["🌿 Organic Sourced", "🧪 Lab Tested", "🌾 Farm Direct", "♻️ Eco Packaged"].map(c => (
                <span key={c} className="text-[12px] bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full shadow-sm">{c}</span>
              ))}
            </div>
            <Link to="/about">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-[#111] hover:bg-[#D32F2F] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors"
              >
                Discover Our Story <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </RevealWrap>
        </div>
      </div>
    </section>
  );
}

// ─── PRODUCT FOCUS ────────────────────────────────────────────────────────────

function ProductFocus() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <RevealWrap className="text-center mb-10">
          <SectionTag>Product in Focus</SectionTag>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] mt-1">
            Explore Our Cold-Pressed Oils
          </h2>
          <p className="text-base text-gray-400 mt-4 max-w-lg mx-auto leading-relaxed">
            Each oil cold-pressed with care — no heat, no chemicals, no compromises.
          </p>
        </RevealWrap>

        {/* Category filter */}
        <RevealWrap delay={0.1} className="flex flex-wrap justify-center gap-2 mb-10">
          {productCategories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat
                ? "bg-[#D32F2F] text-white shadow-[0_4px_14px_rgba(211,47,47,0.3)]"
                : "bg-white border border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-800"
                }`}
            >
              {cat}
            </button>
          ))}
        </RevealWrap>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            {filtered.map((p, i) => (
              <motion.div key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(0,0,0,0.10)" }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-shadow cursor-pointer"
              >
                <Link to={`/products/${p.slug}`}>
                  <div className="relative">
                    <div className="aspect-square bg-gray-50 overflow-hidden">
                      <img src={p.img} alt={p.name}
                        className="w-full h-full object-contain transition-transform duration-500"
                        style={{ transform: hovered === i ? "scale(1.07)" : "scale(1)" }}
                      />
                    </div>
                    <span className="absolute top-3 left-3 bg-[#D32F2F] text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide">
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="text-[10px] text-[#D32F2F] font-bold uppercase tracking-widest mb-1">{p.category}</div>
                    <h3 className="text-[14px] font-bold text-[#111] mb-1.5 leading-tight">{p.name}</h3>
                    <p className="text-[12px] text-gray-400 leading-snug mb-3 line-clamp-2">{p.desc}</p>
                    <div className="flex items-center justify-between">

                      <span className="text-[11px] font-bold text-white bg-[#111] hover:bg-[#D32F2F] px-3 py-1.5 rounded-full transition-colors">
                        View →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* View All */}
            <Link to="/products">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: filtered.length * 0.06, duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-8 cursor-pointer hover:border-[#D32F2F] group transition-colors min-h-[260px]"
              >
                <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-4 group-hover:bg-[#D32F2F] transition-colors">
                  <ArrowRight className="w-6 h-6 text-[#D32F2F] group-hover:text-white transition-colors" />
                </div>
                <div className="text-[14px] font-bold text-[#111] text-center">View All Oils</div>
                <div className="text-[12px] text-gray-400 mt-1 text-center">7 varieties available</div>
              </motion.div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── INGREDIENTS ──────────────────────────────────────────────────────────────

function Ingredients() {
  const cards = [
    { title: "From Native Geographies", sub: "to Ideal Growing Seasons", desc: "We take care of every factor — altitude, soil, climate and rainfall all matter when sourcing local ingredients.", img: first },
    { title: "What Do We Look For?", sub: "Not high yield. Not lower cost.", desc: "Just flavour, nutrition, and soul. Every seed chosen with intention and deep agricultural knowledge.", img: second },
    { title: "Impurities Out.", sub: "Goodness In.", desc: "Only the best seeds and the purest processing methods make the cut. No shortcuts at any stage.", img: third },
    { title: "Farm to Bottle", sub: "No Middlemen", desc: "We connect directly with farmers, ensuring fair prices for them and guaranteed purity for you.", img: fourth },
  ];
  return (
    <section className="bg-[#FAFAFA] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <RevealWrap className="text-center mb-14">
          <SectionTag>Native Ingredients</SectionTag>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] mt-1">
            Native Ingredients. No Substitutes.
          </h2>
          <p className="text-base text-gray-400 mt-4 max-w-lg mx-auto">
            Sourced from the best growing regions across India. Quality starts at the seed.
          </p>
        </RevealWrap>

        <StaggerWrap className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <motion.div key={i} variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden cursor-default shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] transition-all duration-300"
            >
              <div className="aspect-[3/4] relative">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[11px] font-semibold text-white/60 uppercase tracking-widest mb-1">{c.sub}</p>
                <h3 className="text-[15px] font-bold text-white mb-2 leading-tight">{c.title}</h3>
                <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-500">
                  <p className="text-[12px] text-white/70 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerWrap>
      </div>
    </section>
  );
}

// ─── QUALITY ──────────────────────────────────────────────────────────────────

function Quality() {
  const checks = [
    { emoji: "👨‍🔬", title: "In-House R&D Experts and Certified Labs", desc: "Unlike others, we don't outsource safety. Our team tests every batch in-house with certified equipment." },
    { emoji: "🔍", title: "40+ Quality Checks. Every Single Batch.", desc: "Fatty acid profile. Texture. Moisture. Adulteration. Nothing gets missed at any stage of production." },
    { emoji: "🧪", title: "3 Layers of Testing. Zero Room for Error.", desc: "At sourcing, processing, and packaging — for purity, aroma, and nutrition. Triple-verified every time." },
    { emoji: "📋", title: "See the Proof. Don't Just Trust Us.", desc: "Lab reports for every batch. Because real trust is built on transparency and verifiable results." },
  ];
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <RevealWrap className="text-center mb-14">
          <SectionTag>Quality Assurance</SectionTag>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] mt-1">Only Perfect Makes The Cut</h2>
          <p className="text-base text-gray-400 mt-4 max-w-lg mx-auto">Our multi-layered quality process ensures every drop meets the highest purity standards.</p>
        </RevealWrap>

        <StaggerWrap className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {checks.map((c, i) => (
            <motion.div key={i} variants={fadeUp}
              whileHover="hover" initial="rest"
              className="bg-white border border-gray-100 rounded-2xl p-7 relative overflow-hidden cursor-default shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <motion.div
                variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1, transition: { duration: 0.35 } } }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D32F2F] origin-left"
              />
              <div className="text-4xl mb-4">{c.emoji}</div>
              <h3 className="text-[14px] font-bold text-[#111] mb-2.5 leading-tight">{c.title}</h3>
              <p className="text-[13px] text-gray-400 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </StaggerWrap>
      </div>
    </section>
  );
}

// ─── WHY CHOOSE ───────────────────────────────────────────────────────────────

function WhyChoose() {
  return (
    <section className="bg-[#FAFAFA] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <RevealWrap className="text-center mb-14">
          <SectionTag>Why Somsudha</SectionTag>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] mt-1">Why Choose Somsudha?</h2>
          <p className="text-base text-gray-400 mt-4 max-w-lg mx-auto">Built on generations of trust — here's why thousands of families choose us.</p>
        </RevealWrap>

        <StaggerWrap className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoose.map((item, i) => (
            <motion.div key={i} variants={fadeUp}
              whileHover="hover" initial="rest"
              className="bg-white border border-gray-100 rounded-2xl p-8 text-center relative overflow-hidden cursor-default shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            >
              <motion.div
                variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1, transition: { duration: 0.4 } } }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D32F2F] origin-left"
              />
              <motion.div
                variants={{ rest: { backgroundColor: "#FEF2F2" }, hover: { backgroundColor: "#D32F2F", transition: { duration: 0.3 } } }}
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
              >
                <motion.div variants={{ rest: { color: "#D32F2F" }, hover: { color: "#fff", transition: { duration: 0.3 } } }}>
                  <item.icon className="w-7 h-7" />
                </motion.div>
              </motion.div>
              <h3 className="text-[15px] font-bold text-[#111] mb-3">{item.title}</h3>
              <p className="text-[13px] text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </StaggerWrap>
      </div>
    </section>
  );
}

// ─── PROCESS ──────────────────────────────────────────────────────────────────

function Process() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % processSteps.length), 3800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-[#111] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <RevealWrap className="text-center mb-16">
          <span className="inline-block text-[11px] font-semibold tracking-[2.5px] uppercase text-[#D32F2F] bg-[#D32F2F]/10 px-4 py-1.5 rounded-full mb-4">
            How We Make It
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-1">From Nature to You</h2>
          <p className="text-base text-white/40 mt-4 max-w-md mx-auto">A journey of care, tradition, and science — every step matters.</p>
        </RevealWrap>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col">
            {processSteps.map((s, i) => (
              <motion.div key={i} onClick={() => setActive(i)} whileHover={{ x: 6 }}
                className={`flex gap-6 py-7 cursor-pointer border-b transition-colors duration-300 ${i === active ? "border-[#D32F2F]/40" : "border-white/[0.06]"
                  } ${i === processSteps.length - 1 ? "border-b-0" : ""}`}
              >
                <span className={`text-5xl font-bold leading-none min-w-[56px] transition-colors duration-300 ${i === active ? "text-[#D32F2F]" : "text-white/10"}`}>
                  {s.num}
                </span>
                <div>
                  <h3 className={`text-[17px] font-semibold mb-2 transition-colors duration-300 ${i === active ? "text-white" : "text-white/30"}`}>
                    {s.title}
                  </h3>
                  <AnimatePresence>
                    {i === active && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                        className="text-[13px] text-white/55 leading-relaxed overflow-hidden"
                      >
                        {s.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="aspect-[4/5] bg-white/[0.03] rounded-2xl border border-white/[0.08] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div key={active}
                initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.4 }}
                className="text-center p-8"
              >
                <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }}
                  className="block text-8xl mb-5"
                >
                  {processSteps[active].emoji}
                </motion.span>
                <p className="text-base text-white/40 font-medium">{processSteps[active].title}</p>
                <div className="flex justify-center gap-2 mt-5">
                  {processSteps.map((_, i) => (
                    <button key={i} onClick={() => setActive(i)}
                      className={`rounded-full transition-all duration-300 ${i === active ? "w-6 h-1.5 bg-[#D32F2F]" : "w-1.5 h-1.5 bg-white/20"}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── LIFESTYLE BANNER ─────────────────────────────────────────────────────────

function LifestyleBanner() {
  return (
    <section className="relative overflow-hidden">
      <img src={banner2} alt="Cook with Somsudha" className="w-full object-cover" style={{ maxHeight: "460px", objectPosition: "center" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex items-center">
        <div className="max-w-7xl mx-auto px-8 sm:px-16 w-full">
          <RevealWrap>
            <p className="text-[11px] font-bold tracking-[3px] uppercase text-white/60 mb-3">Cook with Somsudha</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              Pure Goodness<br />In Every Drop
            </h2>
            <p className="text-base text-white/75 mb-7 max-w-sm leading-relaxed">
              Unprocessed, uncompromised, unforgettable — from our farm to your kitchen table.
            </p>
            <Link to="/products">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-sm font-bold px-8 py-4 rounded-full transition-colors"
              >
                Shop Real Food <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </RevealWrap>
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

function Testimonials() {
  const [cur, setCur] = useState(0);

  // 📱 responsive cards per view
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setPerPage(1);
      else if (window.innerWidth < 1024) setPerPage(2);
      else setPerPage(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIdx = testimonials.length - perPage;

  return (
    <section className="bg-[#F8F5F0] py-20 sm:py-24 relative overflow-hidden">

      {/* 🌊 subtle background */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute top-0 left-0 w-[350px] h-[350px] bg-primary/10 blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        {/* HEADER */}
        <RevealWrap className="flex items-end justify-between mb-12 flex-wrap gap-4">

          <div>
            <SectionTag>Customer Love</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1">
              What Our Customers Say
            </h2>
          </div>

          {/* arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => setCur((p) => Math.max(p - 1, 0))}
              disabled={cur === 0}
              className="
                w-10 h-10 rounded-full border border-gray-300
                flex items-center justify-center text-gray-600
                hover:border-primary hover:text-primary
                disabled:opacity-30 transition-all
              "
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => setCur((p) => Math.min(p + 1, maxIdx))}
              disabled={cur >= maxIdx}
              className="
                w-10 h-10 rounded-full border border-gray-300
                flex items-center justify-center text-gray-600
                hover:border-primary hover:text-primary
                disabled:opacity-30 transition-all
              "
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </RevealWrap>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: `-${cur * (100 / perPage)}%` }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="flex gap-5"
          >

            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{ width: `${100 / perPage}%` }}
                className="flex-shrink-0"
              >

                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="
                    relative bg-white border border-primary/10
                    rounded-2xl p-5 sm:p-6 h-full
                    shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                    hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)]
                    transition-all duration-300
                  "
                >

                  {/* ✨ glow */}
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />

                  {/* quote mark */}
                  <div className="text-5xl text-primary/10 font-serif mb-2 select-none">
                    "
                  </div>

                  {/* stars */}
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* text */}
                  <p className="text-[14px] text-gray-700 leading-relaxed mb-5">
                    "{t.text}"
                  </p>

                  {/* user */}
                  <div className="flex items-center gap-3">

                    <div className="
                      w-10 h-10 rounded-full bg-primary/10
                      flex items-center justify-center
                      text-[13px] font-bold text-primary
                    ">
                      {t.initials}
                    </div>

                    <div>
                      <div className="text-[13px] font-bold text-gray-900">
                        {t.name}
                      </div>
                      <div className="text-[11px] text-gray-600">
                        {t.loc}
                      </div>
                    </div>

                  </div>

                </motion.div>

              </div>
            ))}

          </motion.div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCur(i)}
              className={`transition-all duration-300 ${
                i === cur
                  ? "w-6 h-2 bg-primary rounded-full"
                  : "w-2 h-2 bg-gray-300 rounded-full"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────

function Certifications() {
  return (
    <section className="bg-[#FAFAFA] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <RevealWrap className="text-center mb-14">
          <SectionTag>Verified & Trusted</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111] mt-1">Certified Quality You Can Trust</h2>
          <p className="text-base text-gray-400 mt-4 max-w-lg mx-auto">Our products meet the highest national and international standards.</p>
        </RevealWrap>

        <StaggerWrap className="flex flex-wrap justify-center gap-5">
          {certs.map((c, i) => (
            <motion.div key={i} variants={fadeUp}
              whileHover={{ y: -6, borderColor: "#D32F2F", boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
              className="bg-white border border-gray-100 rounded-2xl px-8 py-6 flex flex-col items-center gap-3 min-w-[130px] transition-all cursor-default shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <span className="text-3xl">{c.icon}</span>
              <div className="text-[14px] font-bold text-[#111]">{c.name}</div>
              <div className="text-[11px] text-gray-400 text-center leading-tight">{c.desc}</div>
            </motion.div>
          ))}
        </StaggerWrap>

        <RevealWrap delay={0.2} className="text-center mt-10">
          <Link to="/certifications">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 hover:border-[#D32F2F] hover:text-[#D32F2F] text-sm font-medium px-7 py-3 rounded-full transition-colors"
            >
              View All Certifications <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </RevealWrap>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <RevealWrap className="text-center mb-14">
          <SectionTag>Got Questions?</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111] mt-1">Frequently Asked Questions</h2>
          <p className="text-base text-gray-400 mt-4">Everything you need to know about our oils and process.</p>
        </RevealWrap>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <RevealWrap key={i} delay={i * 0.04}>
              <motion.div
                animate={{ borderColor: open === i ? "#D32F2F" : "#F3F4F6" }}
                className="border rounded-2xl overflow-hidden bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
              >
                <button onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <span className="text-[15px] font-semibold text-[#111]">{f.q}</span>
                  <motion.div
                    animate={{ rotate: open === i ? 45 : 0, backgroundColor: open === i ? "#D32F2F" : "#F9FAFB" }}
                    transition={{ duration: 0.25 }}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                    style={{ color: open === i ? "#fff" : "#888" }}
                  >
                    +
                  </motion.div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 pt-2 text-[14px] text-gray-500 leading-relaxed border-t border-gray-100">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </RevealWrap>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative bg-[#0f0f0f] py-28 sm:py-32 text-center overflow-hidden"
    >

      {/* 🌊 Background glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[800px] h-[800px] rounded-full bg-[#D32F2F] blur-[140px]" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-5">

        {/* 🔥 Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.25em] uppercase text-[#D32F2F] bg-[#D32F2F]/10 px-5 py-2 rounded-full mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
          Get Started Today
        </motion.div>

        {/* 🎬 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.96, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
        >
          Experience Pure<br />
          <span className="text-[#D32F2F] italic">Natural Living</span>
        </motion.h2>

        {/* 🧠 Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-base text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          Join thousands of families who've made the switch to clean, chemical-free,
          farm-direct oils — trusted, tested, and truly natural.
        </motion.p>

        {/* ⚡ CTA BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">

          {/* 🛒 Primary */}
          <motion.a
            href="/products"
            whileHover={{
              scale: 1.07,
              boxShadow: "0 20px 60px rgba(211,47,47,0.5)",
            }}
            whileTap={{ scale: 0.96 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="
              inline-flex items-center gap-2
              bg-[#D32F2F] text-white
              text-sm font-semibold px-8 py-4 rounded-full
              shadow-xl transition-all duration-300
            "
          >
            🛒 Order Now
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/919587795523"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="
              inline-flex items-center gap-2
              bg-[#25D366] text-white
              text-sm font-semibold px-8 py-4 rounded-full
              shadow-lg transition-all duration-300
            "
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Us
          </motion.a>

          {/* Call */}
          <motion.a
            href="tel:+919587795523"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="
              inline-flex items-center gap-2
              border border-white/30 text-white
              text-sm font-semibold px-8 py-4 rounded-full
              hover:bg-white/10 transition-all duration-300
            "
          >
            <Phone className="w-4 h-4" /> Call Now
          </motion.a>

        </div>

        {/* 👑 FOUNDER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative max-w-2xl mx-auto"
        >

          <div className="
    relative bg-white/[0.06] border border-white/10
    backdrop-blur-2xl rounded-3xl
    p-10 text-center
    shadow-[0_30px_80px_rgba(0,0,0,0.5)]
  ">

            {/* 👑 BIG OWNER IMAGE */}
            <div className="relative flex justify-center mb-8">

              {/* clean ring instead of blur */}
              <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-[#D32F2F]/40" />

              <motion.img
                src={owner}
                alt="Founder"
                className="
          relative z-10
          w-32 h-32 sm:w-40 sm:h-40
          rounded-full object-cover
          border-4 border-[#D32F2F]
          shadow-[0_10px_40px_rgba(0,0,0,0.5)]
        "
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />

              {/* verified badge */}
              <motion.span
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                className="
          absolute bottom-2 right-[calc(50%-70px)]
          sm:right-[calc(50%-90px)]
          w-8 h-8 bg-[#D32F2F]
          rounded-full flex items-center justify-center
          text-white text-sm shadow-lg
        "
              >
                ✓
              </motion.span>

            </div>

            {/* NAME */}
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">
              Aryan Gehlot
            </h3>

            {/* ROLE */}
            <p className="text-sm text-[#D32F2F] mb-4 font-medium">
              Founder, Shri Somsudha
            </p>

            {/* QUOTE */}
            <p className="text-sm sm:text-base text-white/80 italic leading-relaxed max-w-md mx-auto">
              “When you choose Shri Somsudha, you’re choosing the same purity
              I trust for my own family.”
            </p>

            {/* signature line */}
            <div className="mt-6 w-20 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#D32F2F] to-transparent" />

          </div>
        </motion.div>

      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-[#111] mb-1">Shri Somsudha</h3>
            <p className="text-[11px] text-[#D32F2F] font-semibold tracking-widest uppercase mb-4">Pure Cold-Pressed Oils</p>
            <p className="text-[13px] text-gray-400 leading-relaxed mb-5">
              15+ years of delivering pure, chemical-free, cold-pressed oils from our farms to your kitchen.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/919587795523"
                className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="tel:+919587795523"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Oils */}
          <div>
            <h4 className="text-[13px] font-bold text-[#111] uppercase tracking-widest mb-5">Our Oils</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Yellow Mustard Oil", slug: "yellow-mustard-oil" },
                { label: "Black Mustard Oil", slug: "black-mustard-oil" },
                { label: "White Sesame Oil", slug: "white-sesame-oil" },
                { label: "Coconut Oil", slug: "coconut-oil" },
                { label: "Groundnut Oil", slug: "groundnut-oil" },
                { label: "Almond Oil", slug: "almond-oil" },
              ].map(p => (
                <li key={p.slug}>
                  <Link to={`/products/${p.slug}`} className="text-[13px] text-gray-400 hover:text-[#D32F2F] transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[13px] font-bold text-[#111] uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-2.5">
              {[
                { l: "About Us", to: "/about" },
                { l: "Certifications", to: "/certifications" },
                { l: "Contact", to: "/contact" },
                { l: "All Products", to: "/products" },
              ].map(item => (
                <li key={item.l}>
                  <Link to={item.to} className="text-[13px] text-gray-400 hover:text-[#D32F2F] transition-colors">{item.l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[13px] font-bold text-[#111] uppercase tracking-widest mb-5">Get in Touch</h4>
            <div className="space-y-3 mb-6">
              <a href="tel:+919587795523" className="flex items-center gap-2.5 text-[13px] text-gray-400 hover:text-[#D32F2F] transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" /> +91 95877 95523
              </a>
              <a href="https://wa.me/919587795523" className="flex items-center gap-2.5 text-[13px] text-gray-400 hover:text-[#D32F2F] transition-colors">
                <MessageCircle className="w-4 h-4 flex-shrink-0" /> WhatsApp Us
              </a>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-100">
              <p className="text-[12px] font-semibold text-[#D32F2F] mb-1">Bulk / Wholesale Orders</p>
              <p className="text-[11px] text-gray-400 leading-relaxed">Special pricing for orders above 20L. Contact us for a custom quote.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-gray-100">
          <p className="text-[12px] text-gray-400">© 2025 Shri Somsudha. All rights reserved.</p>
          <p className="text-[12px] text-gray-400">FSSAI Licensed · ISO Certified · Lab Tested</p>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="bg-white text-[#111] overflow-x-hidden">
      <Hero />
      {/* <Marquee /> */}
      {/* <TrustBar /> */}
      <WelcomeStats />
      <BrandIntro />
      <ProductFocus />
      <Ingredients />
      <Quality />
      <WhyChoose />
      {/* <Process /> */}
      {/* <LifestyleBanner /> */}
      <Testimonials />
      <Certifications />
      <FAQ />
      <CTA />
      {/* <Footer /> */}
    </main>
  );
}