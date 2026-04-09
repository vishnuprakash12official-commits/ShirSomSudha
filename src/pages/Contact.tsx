import { useState } from "react";
import { Phone, Mail, Send, MessageCircle, ShieldCheck, Truck, Star, ChevronRight, Package, Leaf, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const trustBadges = [
  { icon: <ShieldCheck className="w-5 h-5" />, label: "100% Secure", sub: "Your data is safe with us" },
  { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp Support", sub: "Instant replies, always" },
  { icon: <Truck className="w-5 h-5" />, label: "Pan India Delivery", sub: "Bulk orders welcome" },
  { icon: <Star className="w-5 h-5" />, label: "Trusted Brand", sub: "1000s of happy families" },
];

const whyUs = [
  { icon: <Leaf className="w-6 h-6" />, title: "100% Natural", desc: "Every product we make is free from additives, preservatives, and artificial ingredients — straight from nature." },
  { icon: <Award className="w-6 h-6" />, title: "FSSAI Certified", desc: "All our natural products meet strict food safety and quality standards certified by FSSAI." },
  { icon: <Package className="w-6 h-6" />, title: "Farm to Home", desc: "We source directly from trusted farmers across India so you get the freshest, most authentic products." },
];

const marketplaces = [
  {
    name: "Amazon",
    tagline: "Fast delivery · Prime eligible",
    color: "#FF9900",
    bg: "#FFF8EC",
    border: "#FFD580",
    href: "#",
    svg: (
      <svg viewBox="0 0 60 18" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="22">
        <text x="0" y="14" fontFamily="Arial" fontWeight="700" fontSize="15" fill="#232F3E">amazon</text>
      </svg>
    ),
  },
  {
    name: "Flipkart",
    tagline: "Quick commerce · Cash on delivery",
    color: "#2874F0",
    bg: "#EEF4FF",
    border: "#AECBFF",
    href: "#",
    svg: (
      <svg viewBox="0 0 70 18" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="22">
        <text x="0" y="14" fontFamily="Arial" fontWeight="700" fontSize="15" fill="#2874F0">flipkart</text>
      </svg>
    ),
  },
];

const faqs = [
  { q: "Do you offer bulk / wholesale orders?", a: "Yes! We offer special pricing for bulk orders across all our natural products. Contact us via WhatsApp for the fastest response and custom quotes." },
  { q: "What kinds of natural products do you sell?", a: "We offer a wide range of natural products including cold-pressed oils, wood-pressed oils, natural superfoods, herbs, and more — all sourced from trusted Indian farms." },
  { q: "What is your delivery timeline?", a: "Standard delivery takes 4–7 business days across India. Express shipping is available on request. We deliver Pan India." },
  { q: "Are your products FSSAI certified?", a: "Absolutely. All Shri Somsudha products carry FSSAI certification and are made following strict quality and hygiene standards." },
 
  { q: "Are your products available offline?", a: "Currently we sell online through Amazon, Flipkart, and directly through our website. You can also place orders via WhatsApp for the quickest service." },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "General Enquiry", message: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Shri Somsudha! 👋\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || "—"}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", subject: "General Enquiry", message: "" });
    }, 3000);
  };

  return (
    <>
      <style>{`
       

        .cp-root { font-family: 'DM Sans', sans-serif; }

        /* ── Hero — offset for fixed navbar (~72px) ── */
        .cp-hero {
          position: relative;
          padding: 7rem 0 5rem;
          overflow: hidden;
          background: hsl(var(--muted) / 0.45);
        }

        .cp-hero-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 55% 70% at 105% 50%, hsl(var(--primary) / 0.07) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at -5%  50%, hsl(var(--primary) / 0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .cp-hero-eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: hsl(var(--primary) / 0.08);
          border: 1px solid hsl(var(--primary) / 0.2);
          color: hsl(var(--primary));
          border-radius: 100px;
          font-size: 0.68rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase;
          padding: 0.3rem 1rem; margin-bottom: 1.3rem;
        }

        .cp-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 7vw, 4.5rem);
          font-weight: 700; line-height: 1.08;
          color: hsl(var(--foreground)); margin-bottom: 1.1rem;
        }

        .cp-hero-title em { font-style: italic; color: hsl(var(--primary)); }

        .cp-hero-sub {
          font-size: 1rem; font-weight: 300;
          color: hsl(var(--muted-foreground));
          max-width: 500px; line-height: 1.75;
        }

        /* ── Trust strip ── */
        .cp-trust-strip {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 1px; background: hsl(var(--border));
          border: 1px solid hsl(var(--border));
          border-radius: 16px; overflow: hidden;
          margin: -1.5rem 0 4.5rem;
          position: relative; z-index: 2;
          box-shadow: 0 4px 24px hsl(var(--foreground) / 0.04);
        }

        @media (max-width: 640px) { .cp-trust-strip { grid-template-columns: repeat(2, 1fr); } }

        .cp-trust-item {
          background: hsl(var(--background));
          padding: 1.4rem 1.1rem;
          display: flex; align-items: center; gap: 0.8rem;
        }

        .cp-trust-icon {
          width: 38px; height: 38px; border-radius: 10px;
          background: hsl(var(--primary) / 0.08); color: hsl(var(--primary));
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }

        .cp-trust-label { font-size: 0.78rem; font-weight: 600; color: hsl(var(--foreground)); margin-bottom: 0.1rem; }
        .cp-trust-sub   { font-size: 0.7rem;  font-weight: 300; color: hsl(var(--muted-foreground)); }

        /* ── Main 2-col layout ── */
        .cp-main {
          display: grid; grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem; padding-bottom: 5rem;
        }

        @media (max-width: 900px) { .cp-main { grid-template-columns: 1fr; gap: 3rem; } }

        /* ── Form card ── */
        .cp-form-card {
          background: hsl(var(--background));
          border: 1px solid hsl(var(--border));
          border-radius: 20px; padding: 2.5rem;
          box-shadow: 0 8px 40px hsl(var(--foreground) / 0.05);
        }

        .cp-form-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.7rem; font-weight: 600;
          color: hsl(var(--foreground)); margin-bottom: 0.35rem;
        }

        .cp-form-sub { font-size: 0.84rem; color: hsl(var(--muted-foreground)); font-weight: 300; margin-bottom: 2rem; }

        .cp-field { margin-bottom: 1.2rem; }

        .cp-label {
          display: block; font-size: 0.72rem; font-weight: 500;
          letter-spacing: 0.08em; color: hsl(var(--foreground) / 0.75);
          margin-bottom: 0.45rem; text-transform: uppercase;
        }

        .cp-input, .cp-textarea, .cp-select {
          width: 100%; padding: 0.85rem 1rem;
          border-radius: 10px; border: 1.5px solid hsl(var(--border));
          background: hsl(var(--muted) / 0.4);
          font-size: 0.9rem; font-family: 'DM Sans', sans-serif; font-weight: 400;
          color: hsl(var(--foreground));
          transition: border-color 0.18s, background 0.18s, box-shadow 0.18s;
          outline: none; appearance: none; -webkit-appearance: none;
        }

        .cp-input::placeholder, .cp-textarea::placeholder { color: hsl(var(--muted-foreground) / 0.55); font-weight: 300; }
        .cp-input:focus, .cp-textarea:focus, .cp-select:focus {
          border-color: hsl(var(--primary) / 0.5);
          background: hsl(var(--background));
          box-shadow: 0 0 0 3px hsl(var(--primary) / 0.08);
        }

        .cp-textarea { resize: none; }
        .cp-select-wrap { position: relative; }
        .cp-select-wrap::after {
          content: '▾'; position: absolute; right: 1rem; top: 50%; transform: translateY(-50%);
          color: hsl(var(--muted-foreground)); pointer-events: none; font-size: 0.75rem;
        }

        .cp-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        @media (max-width: 480px) { .cp-row { grid-template-columns: 1fr; } }

        .cp-submit-btn {
          width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.6rem;
          background: hsl(var(--primary)); color: hsl(var(--primary-foreground));
          border: none; border-radius: 12px; padding: 1rem 2rem;
          font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 600;
          cursor: pointer; transition: all 0.22s; margin-top: 0.5rem; letter-spacing: 0.02em;
        }

        .cp-submit-btn:hover { background: hsl(var(--primary) / 0.88); transform: translateY(-1px); box-shadow: 0 6px 20px hsl(var(--primary) / 0.28); }
        .cp-submit-btn.success { background: #16a34a; box-shadow: 0 6px 20px rgba(22,163,74,0.22); }

        .cp-wa-note {
          display: flex; align-items: center; gap: 0.4rem; justify-content: center;
          font-size: 0.71rem; font-weight: 300; color: hsl(var(--muted-foreground)); margin-top: 0.8rem;
        }
        .cp-wa-note svg { color: #25D366; }

        /* ── Right panel ── */
        .cp-right { display: flex; flex-direction: column; gap: 1.25rem; }

        .cp-wa-cta {
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          border-radius: 18px; padding: 1.6rem 1.75rem;
          display: flex; align-items: center; gap: 1.2rem;
          text-decoration: none; transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 8px 32px rgba(37,211,102,0.2);
        }
        .cp-wa-cta:hover { transform: translateY(-2px); box-shadow: 0 14px 40px rgba(37,211,102,0.28); }

        .cp-wa-icon {
          width: 50px; height: 50px; background: rgba(255,255,255,0.2);
          border-radius: 14px; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; color: white;
        }

        .cp-wa-text-title { font-size: 0.95rem; font-weight: 600; color: white; margin-bottom: 0.2rem; }
        .cp-wa-text-sub   { font-size: 0.78rem; color: rgba(255,255,255,0.8); font-weight: 300; }
        .cp-wa-arrow { margin-left: auto; color: rgba(255,255,255,0.7); }

        .cp-info-card {
          background: hsl(var(--background)); border: 1px solid hsl(var(--border));
          border-radius: 14px; padding: 1.25rem 1.4rem;
          display: flex; align-items: center; gap: 1rem;
          text-decoration: none; transition: all 0.2s;
          box-shadow: 0 2px 12px hsl(var(--foreground) / 0.03);
        }
        .cp-info-card:hover { border-color: hsl(var(--primary) / 0.3); transform: translateX(4px); box-shadow: 0 4px 20px hsl(var(--primary) / 0.08); }

        .cp-info-icon {
          width: 42px; height: 42px; border-radius: 12px;
          background: hsl(var(--primary) / 0.08); color: hsl(var(--primary));
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }

        .cp-info-label { font-size: 0.68rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: hsl(var(--muted-foreground)); margin-bottom: 0.2rem; }
        .cp-info-value { font-size: 0.88rem; font-weight: 500; color: hsl(var(--foreground)); }

        .cp-info-arrow { margin-left: auto; color: hsl(var(--muted-foreground)); transition: transform 0.18s; }
        .cp-info-card:hover .cp-info-arrow { transform: translateX(3px); color: hsl(var(--primary)); }

        /* ── Map ── */
        .cp-map-wrap {
          border-radius: 16px; overflow: hidden;
          border: 1px solid hsl(var(--border));
          box-shadow: 0 4px 20px hsl(var(--foreground) / 0.05);
          height: 220px;
        }

        .cp-map-wrap iframe { width: 100%; height: 100%; border: none; display: block; }

        /* ── Marketplace section ── */
        .cp-market-section {
          padding: 5rem 0;
          background: hsl(var(--muted) / 0.35);
          border-top: 1px solid hsl(var(--border));
        }

        .cp-section-eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.68rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase;
          color: hsl(var(--primary)); margin-bottom: 0.8rem;
        }

        .cp-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 700; color: hsl(var(--foreground)); margin-bottom: 0.6rem;
        }

        .cp-section-sub { font-size: 0.9rem; font-weight: 300; color: hsl(var(--muted-foreground)); max-width: 480px; line-height: 1.7; margin-bottom: 2.5rem; }

        .cp-market-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; max-width: 720px; }
        @media (max-width: 580px) { .cp-market-grid { grid-template-columns: 1fr; } }

        .cp-market-card {
          background: hsl(var(--background));
          border-radius: 18px; padding: 2rem 1.75rem;
          border: 2px solid;
          text-decoration: none;
          display: flex; flex-direction: column; gap: 1rem;
          transition: all 0.22s;
          box-shadow: 0 4px 20px hsl(var(--foreground) / 0.04);
        }

        .cp-market-card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px hsl(var(--foreground) / 0.1); }

        .cp-market-card-top { display: flex; align-items: center; justify-content: space-between; }
        .cp-market-logo { font-size: 1.3rem; font-weight: 800; }
        .cp-market-badge {
          font-size: 0.65rem; font-weight: 600; letter-spacing: 0.08em;
          text-transform: uppercase; padding: 0.25rem 0.65rem; border-radius: 100px;
        }
        .cp-market-tagline { font-size: 0.82rem; font-weight: 300; color: hsl(var(--muted-foreground)); line-height: 1.5; }
        .cp-market-cta {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-size: 0.8rem; font-weight: 600; letter-spacing: 0.04em;
          transition: gap 0.18s;
        }
        .cp-market-card:hover .cp-market-cta { gap: 0.6rem; }

        /* ── Why Us strip ── */
        .cp-why-section { padding: 5rem 0; border-top: 1px solid hsl(var(--border)); }

        .cp-why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 3rem; }
        @media (max-width: 768px) { .cp-why-grid { grid-template-columns: 1fr; gap: 1.5rem; } }

        .cp-why-card {
          background: hsl(var(--background));
          border: 1px solid hsl(var(--border));
          border-radius: 18px; padding: 2rem 1.75rem;
          box-shadow: 0 2px 16px hsl(var(--foreground) / 0.03);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .cp-why-card:hover { box-shadow: 0 8px 32px hsl(var(--foreground) / 0.08); transform: translateY(-2px); }

        .cp-why-icon {
          width: 48px; height: 48px; border-radius: 14px;
          background: hsl(var(--primary) / 0.08); color: hsl(var(--primary));
          display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;
        }

        .cp-why-title { font-size: 1rem; font-weight: 600; color: hsl(var(--foreground)); margin-bottom: 0.5rem; }
        .cp-why-desc  { font-size: 0.85rem; font-weight: 300; color: hsl(var(--muted-foreground)); line-height: 1.7; }

        /* ── FAQ ── */
        .cp-faq-section { padding: 5rem 0; background: hsl(var(--muted) / 0.3); border-top: 1px solid hsl(var(--border)); }

        .cp-faq-grid { display: grid; gap: 0.7rem; max-width: 760px; margin: 2.5rem auto 0; }

        .cp-faq-item {
          background: hsl(var(--background));
          border: 1px solid hsl(var(--border));
          border-radius: 14px; overflow: hidden; transition: border-color 0.2s;
        }
        .cp-faq-item.open { border-color: hsl(var(--primary) / 0.3); }

        .cp-faq-q {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          padding: 1.1rem 1.3rem; background: none; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif; font-size: 0.88rem; font-weight: 500;
          color: hsl(var(--foreground)); text-align: left; gap: 1rem;
        }

        .cp-faq-chevron { flex-shrink: 0; color: hsl(var(--primary)); transition: transform 0.25s; }
        .cp-faq-item.open .cp-faq-chevron { transform: rotate(90deg); }

        .cp-faq-a {
          font-size: 0.85rem; font-weight: 300; color: hsl(var(--muted-foreground));
          line-height: 1.7; padding: 0 1.3rem 1.1rem; display: none;
        }
        .cp-faq-item.open .cp-faq-a { display: block; }
        /* Smooth global feel */
.cp-root {
  background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
}

/* Subtle luxury glow */
.cp-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 0%, rgba(34,197,94,0.08), transparent 60%);
  pointer-events: none;
}
  .cp-hero {
  animation: fadeUp 0.8s ease;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
  .cp-trust-item {
  transition: all 0.25s ease;
}

.cp-trust-item:hover {
  background: hsl(var(--primary) / 0.05);
  transform: translateY(-3px);
}

.cp-trust-icon {
  transition: transform 0.25s ease;
}

.cp-trust-item:hover .cp-trust-icon {
  transform: scale(1.15) rotate(5deg);
}
  .cp-form-card {
  transition: all 0.3s ease;
}

.cp-form-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.08);
}
  .cp-input:focus, 
.cp-textarea:focus, 
.cp-select:focus {
  border-color: hsl(var(--primary));
  box-shadow: 0 0 0 4px hsl(var(--primary) / 0.12);
}
  .cp-submit-btn {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #16a34a, #22c55e);
}

.cp-submit-btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: 0.6s;
}

.cp-submit-btn:hover::after {
  left: 100%;
}
  .cp-wa-cta {
  position: relative;
  overflow: hidden;
}

.cp-wa-cta::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right, rgba(255,255,255,0.25), transparent 60%);
  opacity: 0;
  transition: 0.3s;
}

.cp-wa-cta:hover::before {
  opacity: 1;
}
  .cp-info-card {
  transition: all 0.25s ease;
}

.cp-info-card:hover {
  transform: translateY(-2px) scale(1.01);
}.cp-market-card:hover {
  transform: translateY(-6px) scale(1.02);
}
  .cp-why-card {
  transition: all 0.3s ease;
}

.cp-why-card:hover {
  transform: translateY(-5px) rotateX(2deg);
}
  .cp-faq-a {
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.cp-faq-item.open .cp-faq-a {
  max-height: 200px;
}
  .cp-form-card {
  transition: all 0.35s ease;
}

.cp-form-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 25px 70px rgba(0,0,0,0.08);
}
  .cp-input, .cp-textarea, .cp-select {
  transition: all 0.25s ease;
  backdrop-filter: blur(6px);
}

.cp-input:hover, .cp-textarea:hover, .cp-select:hover {
  border-color: hsl(var(--primary) / 0.4);
}

.cp-input:focus, .cp-textarea:focus, .cp-select:focus {
  border-color: hsl(var(--primary));
  box-shadow: 0 0 0 4px hsl(var(--primary) / 0.12);
  transform: scale(1.01);
}
  .cp-label {
  transition: color 0.2s ease;
}

.cp-field:focus-within .cp-label {
  color: hsl(var(--primary));
}
  .cp-submit-btn {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #16a34a, #22c55e);
  transition: all 0.25s ease;
}

.cp-submit-btn:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 12px 30px rgba(34,197,94,0.35);
}

/* Shine animation */
.cp-submit-btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: -120%;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: 0.6s;
}

.cp-submit-btn:hover::after {
  left: 120%;
}
  .cp-input::placeholder,
.cp-textarea::placeholder {
  transition: opacity 0.2s ease;
}

.cp-input:focus::placeholder,
.cp-textarea:focus::placeholder {
  opacity: 0.4;
}
  .cp-field {
  transition: all 0.25s ease;
}

.cp-field:hover {
  transform: translateY(-1px);
}
  .cp-form-card {
  background: 
    radial-gradient(circle at top right, rgba(34,197,94,0.06), transparent 60%),
    hsl(var(--background));
}
      `}</style>

      <div className="cp-root">

        {/* ── Hero ── */}
        <section className="cp-hero">
          <div className="cp-hero-bg" />
          <div className="container-custom">
            <AnimatedSection>
              <div className="cp-hero-eyebrow">🌿 We'd love to hear from you</div>
              <h1 className="cp-hero-title">Get in <em>Touch</em><br />With Us</h1>
              <p className="cp-hero-sub">
                Questions about our natural products, bulk orders, or partnerships — we're just a message away. WhatsApp is the quickest way to reach us.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <div className="container-custom max-w-6xl mx-auto" style={{ position: "relative", zIndex: 2 }}>

          {/* ── Trust strip ── */}
          <AnimatedSection>
            <div className="cp-trust-strip">
              {trustBadges.map((b) => (
                <div key={b.label} className="cp-trust-item">
                  <div className="cp-trust-icon">{b.icon}</div>
                  <div>
                    <div className="cp-trust-label">{b.label}</div>
                    <div className="cp-trust-sub">{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* ── Main grid ── */}
          <div className="cp-main">

            {/* Form */}
            <AnimatedSection>
              <div className="cp-form-card">
                <h2 className="cp-form-title">Send us a message</h2>
                <p className="cp-form-sub">Fill in the form and it will open WhatsApp with your details pre-filled — fast and easy.</p>

                <form onSubmit={handleSubmit}>
                  <div className="cp-row">
                    <div className="cp-field">
                      <label className="cp-label">Your Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="cp-input" placeholder="Ramesh Kumar" />
                    </div>
                    <div className="cp-field">
                      <label className="cp-label">Phone Number *</label>
                      <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="cp-input" placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div className="cp-field">
                    <label className="cp-label">Email (Optional)</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="cp-input" placeholder="you@email.com" />
                  </div>

                  <div className="cp-field">
                    <label className="cp-label">Subject</label>
                    <div className="cp-select-wrap">
                      <select className="cp-select" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                        <option>General Enquiry</option>
                        <option>Bulk / Wholesale Order</option>
                        <option>Product Question</option>
                        <option>Shipping & Delivery</option>
                        <option>Return / Refund</option>
                        <option>Reseller / Partnership</option>
                        <option>New Product Suggestion</option>
                      </select>
                    </div>
                  </div>

                  <div className="cp-field">
                    <label className="cp-label">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="cp-textarea" placeholder="Tell us what you need — product queries, orders, feedback..." />
                  </div>

                  <button type="submit" className={`cp-submit-btn ${submitted ? "success" : ""}`}>
                    {submitted ? <>✓ Opening WhatsApp…</> : <><Send className="w-4 h-4" /> Send via WhatsApp</>}
                  </button>

                  <div className="cp-wa-note">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    Your message will open in WhatsApp
                  </div>
                </form>
              </div>
            </AnimatedSection>

            {/* Right panel */}
            <AnimatedSection delay={0.12}>
              <div className="cp-right">

                {/* WhatsApp quick CTA */}
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="cp-wa-cta">
                  <div className="cp-wa-icon">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  </div>
                  <div>
                    <div className="cp-wa-text-title">Chat on WhatsApp</div>
                    <div className="cp-wa-text-sub">Fastest way to reach us — reply in minutes</div>
                  </div>
                  <ChevronRight className="cp-wa-arrow w-5 h-5" />
                </a>

                {/* Phone */}
                <a href="tel:+919876543210" className="cp-info-card">
                  <div className="cp-info-icon"><Phone className="w-5 h-5" /></div>
                  <div>
                    <div className="cp-info-label">Call Us</div>
                    <div className="cp-info-value">+91 98765 43210</div>
                  </div>
                  <ChevronRight className="cp-info-arrow w-4 h-4" />
                </a>

                {/* Email */}
                <a href="mailto:info@shrisomsudha.com" className="cp-info-card">
                  <div className="cp-info-icon"><Mail className="w-5 h-5" /></div>
                  <div>
                    <div className="cp-info-label">Email Us</div>
                    <div className="cp-info-value">info@shrisomsudha.com</div>
                  </div>
                  <ChevronRight className="cp-info-arrow w-4 h-4" />
                </a>

                {/* Google Map embed — Rajasthan */}
                <div className="cp-map-wrap">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.717371832464!2d73.04825597487414!3d26.304176185978292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d8b39e8122d%3A0xa239a3da822b4829!2sShri%20Somsudha%20Agro%20%26%20Food%20Products!5e1!3m2!1sen!2sin!4v1775558699401!5m2!1sen!2sin"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                </div>

              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* ── Shop on Marketplaces ── */}
        <section className="cp-market-section">
          <div className="container-custom max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="cp-section-eyebrow">🛒 Available Online</div>
              <h2 className="cp-section-title">Shop Our Natural Products</h2>
              <p className="cp-section-sub">
                Find our full range of natural products on India's most trusted e-commerce platforms — with fast delivery, easy returns, and secure payments.
              </p>

              <div className="cp-market-grid">
                {/* Amazon */}
                <a href="#" target="_blank" rel="noopener noreferrer" className="cp-market-card" style={{ borderColor: "#FFD580", backgroundColor: "#FFFBF0" }}>
                  <div className="cp-market-card-top">
                    <span className="cp-market-logo" style={{ color: "#232F3E", fontFamily: "Georgia, serif" }}>amazon</span>
                    <span className="cp-market-badge" style={{ background: "#FFF3CD", color: "#92400E" }}>Prime</span>
                  </div>
                  <div className="cp-market-tagline">Fast delivery · Prime eligible · Easy returns · 24/7 customer support</div>
                  <div className="cp-market-cta" style={{ color: "#FF9900" }}>
                    Shop on Amazon <ChevronRight className="w-4 h-4" />
                  </div>
                </a>

                {/* Flipkart */}
                <a href="#" target="_blank" rel="noopener noreferrer" className="cp-market-card" style={{ borderColor: "#AECBFF", backgroundColor: "#F0F5FF" }}>
                  <div className="cp-market-card-top">
                    <span className="cp-market-logo" style={{ color: "#2874F0" }}>flipkart</span>
                    <span className="cp-market-badge" style={{ background: "#DBEAFE", color: "#1E3A8A" }}>Plus</span>
                  </div>
                  <div className="cp-market-tagline">Cash on delivery · Quick commerce · Supercoins rewards · Easy refunds</div>
                  <div className="cp-market-cta" style={{ color: "#2874F0" }}>
                    Shop on Flipkart <ChevronRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="cp-why-section">
          <div className="container-custom max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="cp-section-eyebrow">🌱 Our Promise</div>
              <h2 className="cp-section-title">Why Families Trust Us</h2>
              <p className="cp-section-sub">We're not just another brand — we're a commitment to purity, authenticity, and the natural goodness of India.</p>
              <div className="cp-why-grid">
                {whyUs.map((w) => (
                  <div key={w.title} className="cp-why-card">
                    <div className="cp-why-icon">{w.icon}</div>
                    <div className="cp-why-title">{w.title}</div>
                    <div className="cp-why-desc">{w.desc}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="cp-faq-section">
          <div className="container-custom max-w-6xl mx-auto">
            <AnimatedSection>
              <div style={{ textAlign: "center" }}>
                <div className="cp-section-eyebrow" style={{ justifyContent: "center" }}>❓ FAQs</div>
                <h2 className="cp-section-title">Frequently Asked Questions</h2>
                <p className="cp-section-sub" style={{ margin: "0 auto" }}>Everything you need to know before reaching out.</p>
              </div>
              <div className="cp-faq-grid">
                {faqs.map((faq, i) => (
                  <div key={i} className={`cp-faq-item ${openFaq === i ? "open" : ""}`}>
                    <button className="cp-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                      {faq.q}
                      <ChevronRight className="cp-faq-chevron w-4 h-4" />
                    </button>
                    <div className="cp-faq-a">{faq.a}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

      </div>
    </>
  );
}