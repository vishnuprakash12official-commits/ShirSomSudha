import { Leaf, Target, Eye, Award, Users, Sprout, FlaskConical, Heart, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import owner from "../assets/owner.jpeg";

/* ─── Animated Counter ─── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, {
    stiffness: 50,
    damping: 18,
    mass: 1,
  });

  useEffect(() => {
    if (inView) {
      animate(motionVal, to, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1], // premium easing
      });
    }
  }, [inView, to, motionVal]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent =
          Math.round(v).toLocaleString("en-IN") + suffix;
      }
    });
  }, [spring, suffix]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 20, filter: "blur(6px)" }}
      animate={
        inView
          ? { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
          : {}
      }
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="inline-block font-bold"
    >
      0{suffix}
    </motion.span>
  );
}

/* ─── Section Label ─── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex items-center gap-3 mb-6"
    >
      {/* Animated Line */}
      <motion.span
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 24, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="h-[1px] bg-primary block"
      />

      {/* Text */}
      <motion.span
        initial={{ opacity: 0, letterSpacing: "0.4em" }}
        whileInView={{ opacity: 1, letterSpacing: "0.22em" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-[10px] font-semibold uppercase text-primary tracking-[0.22em]"
      >
        {children}
      </motion.span>

      {/* Subtle Glow Dot */}
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(34,197,94,0.6)]"
      />
    </motion.div>
  );
}

/* ─── Fade‑up wrapper ─── */
const FU = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{
      opacity: 0,
      y: 40,
      scale: 0.96,
      filter: "blur(8px)",
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1],
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navHeight = isScrolled ? 64 : 96;

  const stats = [
    { num: 5000, suffix: "+", label: "Happy Families", icon: <Heart className="w-4 h-4" /> },
    { num: 500, suffix: "+", label: "Farmer Partners", icon: <Sprout className="w-4 h-4" /> },
    { num: 0, suffix: "%", label: "Chemicals Added", icon: <FlaskConical className="w-4 h-4" /> },
    { num: 5, suffix: "+", label: "Years of Trust", icon: <Award className="w-4 h-4" /> },
  ];

  const whyUs = [
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "100% Natural",
      desc: "Every product leaves our facility exactly as nature intended — no additives, no preservatives, no compromises.",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Time-Honoured Methods",
      desc: "We use traditional wood-press and cold-press techniques passed down through generations of Indian artisans.",
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Full Transparency",
      desc: "From seed to shelf, we share every step of our process — because trust is earned, never assumed.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Farmer First",
      desc: "We work directly with 500+ small farmers across India, ensuring fair prices and sustainable livelihoods.",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "FSSAI Certified",
      desc: "All our products meet and exceed India's food safety standards, so you can cook with absolute confidence.",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Family Trusted",
      desc: "Over 5000 families across India have made Shri Somsudha a part of their daily wellness routine.",
    },
  ];

  const processSteps = [
    { num: "01", title: "Ethical Sourcing", desc: "We partner directly with farmers who cultivate using natural, pesticide-free methods across Rajasthan and beyond." },
    { num: "02", title: "Traditional Pressing", desc: "Seeds are cold-pressed or wood-pressed in our facility using ancient Ghani methods, preserving every nutrient." },
    { num: "03", title: "Quality Testing", desc: "Every batch is rigorously tested for purity, potency, and safety before it earns the Shri Somsudha seal." },
    { num: "04", title: "Farm to Your Door", desc: "Packed fresh and shipped directly — no warehouses, no middlemen, just nature's best straight to your kitchen." },
  ];

  return (
    <div style={{ paddingTop: `${navHeight}px` }} className="overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
  <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#F8F5F0]">

  {/* 🌊 Animated Background */}
  <div className="absolute inset-0 pointer-events-none">

    {/* Floating blobs */}
    <motion.div
      animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl translate-x-1/3 -translate-y-1/4"
    />

    <motion.div
      animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-primary/10 blur-3xl -translate-x-1/3 translate-y-1/4"
    />

    {/* Subtle grain */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "256px",
      }}
    />
  </div>

  {/* 🌿 Content */}
  <div className="container-custom relative z-10 py-24 text-center max-w-4xl">

    {/* Label */}
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-[11px] font-semibold tracking-[0.25em] uppercase shadow-sm"
    >
      <motion.span
        animate={{ rotate: [0, 8, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <Sprout className="w-3 h-3" />
      </motion.span>
      Our Story
    </motion.div>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 40, scale: 0.96, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-gray-900 mb-6"
    >
      Rooted in Nature,<br />
      <span className="text-primary italic relative">

        {/* Gradient text effect */}
        <span className="bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
          Grown with Purpose
        </span>

      </span>
    </motion.h1>

    {/* Paragraph */}
    <motion.p
      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
    >
      From a small workshop in Rajasthan to the kitchens of{" "}
      <span className="font-semibold text-primary">5000+ families</span> — 
      we’ve stayed true to one promise: nothing but pure, natural goodness.
    </motion.p>

    {/* Divider line */}
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="mt-14 mx-auto w-20 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent origin-center"
    />

  </div>
</section>

      {/* ══════════════════════════════════════════
          STORY SECTION
      ══════════════════════════════════════════ */}
    <section className="py-32 bg-[#FAF7F2] relative overflow-hidden">

  {/* 🌊 Subtle background motion */}
  <motion.div
    animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
  />

  <div className="container-custom max-w-6xl mx-auto relative z-10">
    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

      {/* LEFT — TEXT */}
      <div>

        <SectionLabel>Our Story</SectionLabel>

        <FU>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug mb-8">
            A tradition that began<br />
            with a <span className="text-primary italic">wooden press</span>
          </h2>
        </FU>

        {[
          "Shri Somsudha was born from a conviction — that the modern world had drifted too far from nature's simplest gifts...",
          "Determined to revive what was being lost, we rebuilt the traditional wood-press workshop...",
          "Today, Shri Somsudha stands as more than a brand. We are a movement for conscious living...",
        ].map((para, i) => (
          <FU key={i} delay={0.18 * (i + 1)}>
            <motion.p
              initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.9,
                delay: 0.1 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-gray-700 leading-[1.9] mb-6 text-[15px]"
            >
              {para}
            </motion.p>
          </FU>
        ))}

      </div>

      {/* RIGHT — CARD */}
      <FU delay={0.25} className="relative">

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 50, rotate: -1 }}
          whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{
            y: -6,
            rotate: 0.2,
            transition: { duration: 0.3 }
          }}
          className="
            relative rounded-3xl overflow-hidden p-10
            bg-gradient-to-br from-primary/10 via-primary/5 to-transparent
            border border-primary/20
            shadow-[0_25px_80px_rgba(0,0,0,0.08)]
          "
        >

          {/* ✨ Inner glow layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-30 pointer-events-none" />

          {/* 🌊 Floating glow */}
          <motion.div
            animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-24 -right-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          />

          {/* 🍃 Decorative leaf */}
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-6 right-6 opacity-10"
          >
            <Leaf className="w-32 h-32 text-primary" />
          </motion.div>

          {/* CONTENT */}
          <div className="relative z-10 space-y-9">

            {[
              {
                icon: "🌾",
                head: "Direct from Farms",
                body: "Seeds sourced from 500+ verified farmers across Rajasthan and India.",
              },
              {
                icon: "🪵",
                head: "Traditional Ghani",
                body: "Wood-pressed at low speed, keeping every nutrient and flavour intact.",
              },
              {
                icon: "✅",
                head: "FSSAI Certified",
                body: "Rigorously tested — every batch meets India's highest safety standards.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.25 * i + 0.3,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  x: 4,
                  scale: 1.02,
                }}
                className="flex items-start gap-4"
              >

                {/* ICON */}
                <motion.span
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="text-2xl mt-0.5"
                >
                  {item.icon}
                </motion.span>

                {/* TEXT */}
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    {item.head}
                  </p>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    {item.body}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </motion.div>

      </FU>
    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════
          STATS
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F8F5F0] border-y border-border relative overflow-hidden">

  {/* 🌊 subtle background motion */}
  <motion.div
    animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-32 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"
  />

  <div className="container-custom max-w-5xl mx-auto relative z-10">

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.05)]">

      {stats.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{
            delay: 0.12 * i,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -6,
            scale: 1.03,
            backgroundColor: "hsl(var(--primary) / 0.05)",
          }}
          className="
            relative bg-white
            flex flex-col items-center justify-center
            p-8 text-center cursor-default
            transition-all duration-300
          "
        >

          {/* ✨ subtle glow layer */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-primary/10 to-transparent" />

          {/* ICON */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4"
          >
            {s.icon}
          </motion.div>

          {/* NUMBER */}
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-1"
          >
            <Counter to={s.num} suffix={s.suffix} />
          </motion.div>

          {/* LABEL */}
          <div className="text-sm text-gray-700">
            {s.label}
          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>

      {/* ══════════════════════════════════════════
          FOUNDER
      ══════════════════════════════════════════ */}
     <section className="py-28 bg-[#F8F5F0] relative overflow-hidden">

  {/* 🌊 subtle background motion */}
  <motion.div
    animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
  />

  <div className="container-custom max-w-5xl mx-auto relative z-10">

    <FU>
      <div className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-white to-primary/5 p-8 sm:p-14 text-center overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.08)]">

        {/* ✨ inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-30 pointer-events-none" />

        {/* Quote marks */}
        <div className="absolute top-6 left-6 text-6xl text-primary/10 font-serif select-none">"</div>
        <div className="absolute bottom-6 right-6 text-6xl text-primary/10 font-serif select-none">"</div>

        {/* 👑 Founder Image */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 30 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center mb-10"
        >

          {/* Glow ring */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0px rgba(34,197,94,0)",
                "0 0 40px rgba(34,197,94,0.25)",
                "0 0 0px rgba(34,197,94,0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-full"
          />

          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl">

            <motion.img
              src={owner}
              alt="Founder"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

          </div>

          {/* ✅ Verified badge */}
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="absolute bottom-2 right-[calc(50%-72px)] sm:right-[calc(50%-88px)] w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm shadow-lg"
          >
            ✓
          </motion.span>

        </motion.div>

        <SectionLabel>From Our Founder</SectionLabel>

        {/* 🧠 Quote */}
        <FU delay={0.1}>
          <motion.blockquote
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9 }}
            className="font-display text-xl sm:text-2xl lg:text-3xl font-medium italic text-gray-900 leading-relaxed mb-6 max-w-2xl mx-auto"
          >
            "We don't just sell products — we deliver a philosophy. That pure, natural living is not a luxury, but a right every family deserves."
          </motion.blockquote>
        </FU>

        {/* 👤 Name */}
        <FU delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base font-semibold text-gray-900">
              Aryan Gehlot
            </p>
            <p className="text-sm text-primary font-semibold tracking-wide uppercase">
              Founder & CEO, Shri Somsudha
            </p>
          </motion.div>
        </FU>

      </div>
    </FU>

  </div>
</section>

      {/* ══════════════════════════════════════════
          PROCESS (Timeline)
      ══════════════════════════════════════════ */}
    <section className="py-28 bg-[#F8F5F0] border-t border-border relative overflow-hidden">

  {/* 🌊 subtle background motion */}
  <motion.div
    animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -bottom-40 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"
  />

  <div className="container-custom max-w-5xl mx-auto relative z-10">

    {/* HEADER */}
    <div className="text-center mb-16">
      <SectionLabel>Our Process</SectionLabel>

      <FU>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug">
          From seed to your shelf —<br />
          <span className="text-primary italic">nothing is hidden</span>
        </h2>
      </FU>
    </div>

    {/* STEPS */}
    <div className="relative">

      {/* ✨ Animated connecting line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] origin-left bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {processSteps.map((step, i) => (
          <FU key={i} delay={0.15 * i}>

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="
                relative bg-white border border-primary/15 rounded-2xl
                p-6 sm:p-7 text-center
                shadow-[0_15px_50px_rgba(0,0,0,0.05)]
                transition-all duration-300
              "
            >

              {/* ✨ glow overlay */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />

              {/* 🔢 STEP NUMBER */}
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                animate={{ y: [0, -4, 0] }}
                className="
                  w-14 h-14 sm:w-16 sm:h-16
                  rounded-full bg-primary/10 border-2 border-primary/20
                  flex items-center justify-center mx-auto mb-5
                  relative z-10
                "
              >
                <span className="font-display text-base sm:text-lg font-bold text-primary">
                  {step.num}
                </span>
              </motion.div>

              {/* 📝 TITLE */}
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                {step.title}
              </h3>

              {/* 📄 DESC */}
              <p className="text-[13px] text-gray-600 leading-relaxed">
                {step.desc}
              </p>

            </motion.div>

          </FU>
        ))}

      </div>

    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════
          MISSION & VISION
      ══════════════════════════════════════════ */}
     <section className="py-28 bg-[#F8F5F0] border-t border-border relative overflow-hidden">

  {/* 🌊 subtle background motion */}
  <motion.div
    animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-0 right-0 w-[450px] h-[450px] bg-primary/10 rounded-full blur-3xl"
  />

  <div className="container-custom max-w-5xl mx-auto relative z-10">

    {/* HEADER */}
    <div className="text-center mb-16">
      <SectionLabel>Our Direction</SectionLabel>

      <FU>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug">
          Built on purpose,<br />
          <span className="text-primary italic">driven by values</span>
        </h2>
      </FU>
    </div>

    {/* CARDS */}
    <div className="grid sm:grid-cols-2 gap-6">

      {[
        {
          icon: <Target className="w-6 h-6" />,
          label: "Mission",
          title: "Pure products for every home",
          body: "Our mission is to make pure, affordable, naturally-made products accessible to every Indian household — regardless of geography or income.",
          gradient: "from-primary/10 to-primary/5",
        },
        {
          icon: <Eye className="w-6 h-6" />,
          label: "Vision",
          title: "India's most trusted natural brand",
          body: "We aspire to become India's most loved and trusted natural products brand — one that families pass down to the next generation.",
          gradient: "from-amber-500/10 to-amber-500/5",
        },
      ].map((card, i) => (
        <FU key={i} delay={0.12 * i}>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className={`
              relative rounded-3xl border border-primary/20
              bg-gradient-to-br ${card.gradient}
              p-8 sm:p-10 overflow-hidden
              shadow-[0_20px_70px_rgba(0,0,0,0.06)]
              transition-all duration-300
            `}
          >

            {/* ✨ inner glow */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-white/30 to-transparent" />

            {/* 🌊 floating glow */}
            <motion.div
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -top-20 -right-20 w-56 h-56 bg-primary/10 rounded-full blur-3xl"
            />

            {/* ICON BACK */}
            <div className="absolute top-6 right-6 opacity-10 text-primary">
              {card.icon}
            </div>

            {/* ICON */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center text-primary mb-5"
            >
              {card.icon}
            </motion.div>

            {/* LABEL */}
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-2">
              {card.label}
            </p>

            {/* TITLE */}
            <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">
              {card.title}
            </h3>

            {/* BODY */}
            <p className="text-sm text-gray-700 leading-[1.8]">
              {card.body}
            </p>

          </motion.div>

        </FU>
      ))}

    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US (6 cards grid)
      ══════════════════════════════════════════ */}
    <section className="py-28 bg-[#F8F5F0] border-t border-border relative overflow-hidden">

  {/* 🌊 subtle background motion */}
  <motion.div
    animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"
  />

  <div className="container-custom max-w-6xl mx-auto relative z-10">

    {/* HEADER */}
    <div className="text-center mb-16">
      <SectionLabel>Why Us</SectionLabel>

      <FU>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 leading-snug">
          Six reasons families <span className="text-primary italic">choose us</span>
        </h2>

        <p className="text-gray-700 max-w-xl mx-auto text-[15px] leading-relaxed">
          Every decision we make — from sourcing to shipping — is filtered through a single question:
          is this good for our customers and the planet?
        </p>
      </FU>
    </div>

    {/* GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {whyUs.map((item, i) => (
        <FU key={i} delay={0.1 * i}>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            whileTap={{ scale: 0.97 }}
            className="
              group relative bg-white border border-primary/15
              rounded-2xl p-6 sm:p-7 h-full
              shadow-[0_15px_50px_rgba(0,0,0,0.05)]
              transition-all duration-300
            "
          >

            {/* ✨ glow layer */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />

            {/* 🌊 floating glow */}
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -top-16 -right-16 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
            />

            {/* ICON */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="
                w-11 h-11 rounded-xl bg-primary/10
                flex items-center justify-center text-primary mb-5
                group-hover:bg-primary group-hover:text-white
                transition-all duration-300
              "
            >
              {item.icon}
            </motion.div>

            {/* TITLE */}
            <h3 className="font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-[13px] text-gray-600 leading-relaxed">
              {item.desc}
            </p>

          </motion.div>

        </FU>
      ))}

    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════
          CLOSING CTA STRIP
      ══════════════════════════════════════════ */}
      <section className="py-28 bg-primary relative overflow-hidden">

  {/* 🌊 Animated background blobs */}
  <motion.div
    animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl"
  />

  <motion.div
    animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-black/20 blur-3xl"
  />

  <div className="container-custom relative z-10 max-w-3xl mx-auto text-center">

    <FU>

      {/* 🔥 Small Label */}
      <motion.p
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6 }}
        className="text-primary-foreground/80 text-xs font-semibold tracking-[0.25em] uppercase mb-5"
      >
        Ready to experience the difference?
      </motion.p>

      {/* 🎬 Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40, scale: 0.96, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-3xl sm:text-4xl font-semibold text-white leading-snug mb-6"
      >
        Taste nature, the way it was<br />
        <span className="italic text-white/90">always meant to be.</span>
      </motion.h2>

      {/* 🧠 Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-white/80 mb-10 text-[15px] leading-relaxed"
      >
        Explore our full range of natural products — crafted with care,
        <span className="font-semibold text-white"> certified with honesty.</span>
      </motion.p>

      {/* ⚡ BUTTONS */}
      <div className="flex flex-wrap gap-4 justify-center">

        {/* 🛒 Primary CTA */}
        <motion.a
          href="/products"
          whileHover={{
            scale: 1.06,
            boxShadow: "0 20px 60px rgba(255,255,255,0.25)",
          }}
          whileTap={{ scale: 0.96 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="
            inline-flex items-center gap-2
            bg-white text-primary
            px-8 py-3.5 rounded-full text-sm font-semibold
            shadow-xl
            transition-all duration-300
          "
        >
          Shop All Products
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </motion.a>

        {/* 📞 Secondary CTA */}
        <motion.a
          href="/contact"
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(255,255,255,0.15)",
          }}
          whileTap={{ scale: 0.96 }}
          className="
            inline-flex items-center gap-2
            border border-white/40 text-white
            px-8 py-3.5 rounded-full text-sm font-semibold
            transition-all duration-300
          "
        >
          Contact Us
        </motion.a>

      </div>

    </FU>
  </div>
</section>

    </div>
  );
}