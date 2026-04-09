import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { ShieldCheck, X, ArrowRight, BadgeCheck, FlaskConical, Leaf, Award } from "lucide-react";

const certs = [
  {
    name: "FSSAI Certified",
    category: "Food Safety",
    desc: "Certified by the Food Safety and Standards Authority of India, ensuring all products meet the highest national safety benchmarks.",
    img: "/certs/fssai.jpg",
    icon: ShieldCheck,
    tags: ["Food Safety", "Government", "India"],
  },
  {
    name: "ISO 9001:2015",
    category: "Quality Management",
    desc: "International quality management system certification ensuring consistent processes, traceability, and continuous improvement.",
    img: "/certs/iso.jpg",
    icon: Award,
    tags: ["ISO", "International", "Quality"],
  },
  {
    name: "GMP Certified",
    category: "Manufacturing",
    desc: "Good Manufacturing Practice certification confirming hygienic, safe, and controlled production at every stage.",
    img: "/certs/gmp.jpg",
    icon: BadgeCheck,
    tags: ["Manufacturing", "Hygiene", "Safety"],
  },
  {
    name: "Organic Certified",
    category: "Agricultural",
    desc: "100% chemical-free and pesticide-free production verified from seed to shelf with full supply chain transparency.",
    img: "/certs/organic.jpg",
    icon: Leaf,
    tags: ["Organic", "Chemical-Free", "Natural"],
  },
  {
    name: "AGMARK",
    category: "Government Grading",
    desc: "Official government certification mark for agricultural products in India, verifying grade, quality, and authenticity.",
    img: "/certs/agmark.jpg",
    icon: ShieldCheck,
    tags: ["Government", "Grading", "Agriculture"],
  },
  {
    name: "Lab Tested",
    category: "Independent Testing",
    desc: "Every batch undergoes rigorous third-party laboratory analysis for purity, potency, and absence of contaminants.",
    img: "/certs/lab.jpg",
    icon: FlaskConical,
    tags: ["Third-Party", "Purity", "Batch Testing"],
  },
];

const stats = [
  { num: "6+", label: "Certifications" },
  { num: "100%", label: "Lab Tested" },
  { num: "15+", label: "Years Compliant" },
  { num: "Zero", label: "Compromises" },
];

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <div className="pt-24 font-sans">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-20 px-6 text-center bg-muted/40">

        {/* Decorative rings */}
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className={`
              pointer-events-none absolute rounded-full border border-primary/10
              animate-pulse
              ${i === 0 ? "w-48 h-48 -top-10 -left-10" : ""}
              ${i === 1 ? "w-28 h-28 -top-3 -left-3" : ""}
              ${i === 2 ? "w-48 h-48 -bottom-10 -right-10" : ""}
              ${i === 3 ? "w-28 h-28 -bottom-3 -right-3" : ""}
            `}
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}

        {/* Diagonal grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 28px, hsl(var(--primary)/0.04) 28px, hsl(var(--primary)/0.04) 29px)",
          }}
        />

        {/* Radial glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="relative z-10 max-w-2xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 mb-6"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
              Verified & Trusted
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-4"
          >
            Our{" "}
            <span className="text-primary relative inline-block">
              Certifications
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-primary via-primary/60 to-transparent" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-muted-foreground text-[15px] leading-relaxed mb-10"
          >
            Quality and purity backed by industry-leading certifications
            and rigorous, independent testing standards.
          </motion.p>

          {/* Trust Strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="flex items-center justify-center gap-6 flex-wrap"
          >
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="text-center">
                  <p className="font-display text-2xl font-bold text-primary leading-none">{s.num}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mt-1">{s.label}</p>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-8 bg-border" />
                )}
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── GRID ── */}
      <section className="py-16 px-6 max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="font-display text-2xl font-semibold mb-2">Recognized Quality Standards</h2>
          <p className="text-muted-foreground text-sm">Click any certificate to view details</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <AnimatedSection key={cert.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCert(cert)}
                  className="
                    group relative cursor-pointer rounded-2xl overflow-hidden
                    bg-popover border border-border
                    hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10
                    transition-all duration-300
                  "
                >
                  {/* Top ribbon */}
                  <div className="h-1 w-full bg-gradient-to-r from-primary to-primary/50" />

                  {/* Corner seal */}
                  <div className="
                    absolute top-4 right-4 w-8 h-8 rounded-full
                    border border-border bg-popover
                    flex items-center justify-center
                    group-hover:bg-primary group-hover:border-primary
                    transition-all duration-200
                  ">
                    <Icon className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors duration-200" />
                  </div>

                  {/* Image area */}
                  <div className="flex items-center justify-center h-36 px-6 bg-gradient-to-br from-muted/80 to-muted/30 overflow-hidden">
                    <img
                      src={cert.img}
                      alt={cert.name}
                      className="max-h-20 max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Body */}
                  <div className="p-5 border-t border-border/60">
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-primary mb-1.5">
                      {cert.category}
                    </p>
                    <h3 className="font-display font-semibold text-base mb-2 leading-snug">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {cert.desc}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
                      <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/50 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary/70" />
                        </span>
                        <span className="text-[10px] font-semibold text-primary/80 uppercase tracking-wide">Active</span>
                      </div>
                      <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-primary transition-gap duration-200 group-hover:gap-2">
                        View <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>

                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* ── TRUST BAND ── */}
      <section className="bg-muted/50 border-y border-border py-12 px-6 text-center">
        <h3 className="font-display text-xl font-semibold mb-8">Why Our Certifications Matter</h3>
        <div className="flex justify-center flex-wrap max-w-2xl mx-auto divide-x divide-border">
          {[
            { num: "350+", label: "Quality Checks / Batch" },
            { num: "3rd", label: "Party Audited" },
            { num: "Zero", label: "Compromises" },
            { num: "∞", label: "Commitment" },
          ].map((s) => (
            <div key={s.label} className="flex-1 min-w-[120px] px-6 py-2">
              <p className="font-display text-3xl font-bold text-primary leading-none mb-1">{s.num}</p>
              <p className="text-xs text-muted-foreground font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MODAL ── */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              key="box"
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 20 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-popover rounded-2xl overflow-hidden w-full max-w-md shadow-2xl border border-border"
            >
              {/* Rainbow top bar */}
              <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/70 to-primary/30" />

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    {activeCert && <activeCert.icon className="w-4.5 h-4.5 text-primary" />}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-base leading-tight">{activeCert?.name}</p>
                    <p className="text-[11px] text-muted-foreground">{activeCert?.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveCert(null)}
                  className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <X className="w-3.5 h-3.5 text-muted-foreground" />
                </button>
              </div>

              {/* Image */}
              <div className="flex items-center justify-center bg-gradient-to-br from-muted/80 to-muted/30 h-52">
                <motion.img
                  key={activeCert?.img}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.05, duration: 0.3 }}
                  src={activeCert?.img}
                  alt={activeCert?.name}
                  className="max-h-36 max-w-[200px] object-contain drop-shadow-md"
                />
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {activeCert?.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeCert?.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-3 py-1 rounded-lg bg-primary/8 border border-primary/15 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}