import { Link } from "react-router-dom";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.jpg";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];

const productLinks = [
  { name: "Yellow Mustard Oil", path: "/products/yellow-mustard-oil" },
  { name: "White Sesame Oil", path: "/products/white-sesame-oil" },
  { name: "Black Sesame Oil", path: "/products/black-sesame-oil" },
  { name: "Groundnut Oil", path: "/products/groundnut-oil" },
  { name: "Coconut Oil", path: "/products/coconut-oil" },
  { name: "Almond Oil", path: "/products/almond-oil" },
];

const marketplaces = [
  { name: "Amazon", emoji: "🛒", href: "#" },
  { name: "Flipkart", emoji: "🛍️", href: "#" },
  { name: "IndiaMART", emoji: "🏭", href: "#" },
];

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919876543210",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <>
      <style>{`
       

        .ss-footer { font-family: 'DM Sans', sans-serif; }

        .ss-footer-hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding: 2.5rem 0;
          border-bottom: 1px solid hsl(var(--border));
        }

        .ss-footer-logo { height: 90px; width: auto; }

        .ss-footer-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          font-weight: 500;
          color: hsl(var(--foreground));
          font-style: italic;
          opacity: 0.7;
          text-align: right;
          line-height: 1.4;
        }

        .ss-footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr 1.2fr;
          gap: 2.5rem 2rem;
          padding: 3rem 0 2.5rem;
        }

        @media (max-width: 1024px) {
          .ss-footer-grid { grid-template-columns: repeat(3, 1fr); }
          .ss-footer-brand { grid-column: 1 / -1; }
          .ss-footer-tagline { text-align: left; }
        }
        @media (max-width: 640px) {
          .ss-footer-grid { grid-template-columns: 1fr 1fr; }
          .ss-footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 400px) {
          .ss-footer-grid { grid-template-columns: 1fr; }
        }

        .ss-footer-brand-desc {
          font-size: 0.875rem;
          line-height: 1.7;
          color: hsl(var(--foreground) / 0.65);
          margin-top: 1rem;
          max-width: 260px;
        }

        .ss-footer-trust-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 1.1rem;
          background: hsl(var(--primary) / 0.08);
          border: 1px solid hsl(var(--primary) / 0.2);
          color: hsl(var(--primary));
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.35rem 0.85rem;
        }

        .ss-col-heading {
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: hsl(var(--primary));
          margin-bottom: 1.1rem;
          padding-bottom: 0.6rem;
          border-bottom: 2px solid hsl(var(--primary) / 0.15);
          display: inline-block;
        }

        .ss-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .ss-nav-link {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          font-weight: 400;
          color: hsl(var(--foreground) / 0.75);
          text-decoration: none;
          transition: color 0.18s, gap 0.18s;
        }

        .ss-nav-link svg {
          width: 11px; height: 11px;
          opacity: 0;
          transform: translate(-3px, 3px);
          transition: opacity 0.18s, transform 0.18s;
          flex-shrink: 0;
          color: hsl(var(--primary));
        }

        .ss-nav-link:hover { color: hsl(var(--foreground)); gap: 0.45rem; }
        .ss-nav-link:hover svg { opacity: 1; transform: translate(0, 0); }

        .ss-market-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.55rem 0.75rem;
          border: 1px solid hsl(var(--border));
          border-radius: 10px;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 400;
          color: hsl(var(--foreground) / 0.75);
          margin-bottom: 0.5rem;
          transition: all 0.2s;
        }

        .ss-market-row:hover {
          border-color: hsl(var(--primary) / 0.4);
          color: hsl(var(--foreground));
          background: hsl(var(--primary) / 0.04);
          transform: translateX(3px);
        }

        .ss-contact-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.875rem;
          font-weight: 400;
          color: hsl(var(--foreground) / 0.75);
          margin-bottom: 0.9rem;
          text-decoration: none;
          transition: color 0.18s;
        }

        .ss-contact-row:hover { color: hsl(var(--primary)); }

        .ss-contact-icon {
          width: 32px; height: 32px;
          border-radius: 8px;
          background: hsl(var(--primary) / 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: hsl(var(--primary));
          transition: background 0.18s;
        }

        .ss-contact-row:hover .ss-contact-icon { background: hsl(var(--primary) / 0.15); }
        .ss-contact-icon svg { width: 13px; height: 13px; }

        /* Social icons */
        .ss-socials { display: flex; gap: 0.5rem; margin-top: 1.25rem; }

        .ss-social {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1px solid hsl(var(--border));
          display: flex;
          align-items: center;
          justify-content: center;
          color: hsl(var(--foreground) / 0.6);
          text-decoration: none;
          transition: all 0.2s;
        }

        .ss-social:hover {
          background: hsl(var(--primary));
          border-color: hsl(var(--primary));
          color: white;
          transform: translateY(-2px);
        }

        .ss-footer-bottom {
          border-top: 1px solid hsl(var(--border));
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          padding: 1.25rem 0;
        }

        .ss-bottom-copy {
          font-size: 0.78rem;
          color: hsl(var(--foreground) / 0.5);
          font-weight: 300;
        }

        .ss-bottom-links { display: flex; gap: 1.5rem; flex-wrap: wrap; }

        .ss-bottom-link {
          font-size: 0.78rem;
          color: hsl(var(--foreground) / 0.5);
          text-decoration: none;
          font-weight: 300;
          transition: color 0.18s;
        }

        .ss-bottom-link:hover { color: hsl(var(--primary)); }
      `}</style>

      <footer className="ss-footer bg-muted border-t border-border">
        <div className="container-custom">

          {/* Hero strip */}
          <div className="ss-footer-hero">
            <img src={logo} alt="Shri Somsudha" className="ss-footer-logo" />
            <p className="ss-footer-tagline">
              Pure, cold-pressed goodness —<br />
              from our farms to your kitchen.
            </p>
          </div>

          {/* Main grid */}
          <div className="ss-footer-grid">

            {/* Brand */}
            <div className="ss-footer-brand">
              <p className="ss-footer-brand-desc">
                Authentic, naturally cold-pressed oils crafted with traditional methods.
                Trusted by thousands of families across India.
              </p>
              <div className="ss-footer-trust-pill">🌿 100% Natural &amp; Pure</div>

              {/* Social icons here under brand */}
              <div className="ss-socials">
                {socials.map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="ss-social" aria-label={s.name}>
                    {s.svg}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="ss-col-heading">Navigate</div>
              <ul className="ss-link-list">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="ss-nav-link">
                      {link.name} <ArrowUpRight />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <div className="ss-col-heading">Our Oils</div>
              <ul className="ss-link-list">
                {productLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="ss-nav-link">
                      {link.name} <ArrowUpRight />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buy From */}
            <div>
              <div className="ss-col-heading">Buy From</div>
              {marketplaces.map((m) => (
                <a key={m.name} href={m.href} target="_blank" rel="noopener noreferrer" className="ss-market-row">
                  <span>{m.emoji}</span>
                  <span>{m.name}</span>
                </a>
              ))}
            </div>

            {/* Contact — no address, working links */}
            <div>
              <div className="ss-col-heading">Contact Us</div>

              <a href="tel:+919876543210" className="ss-contact-row">
                <div className="ss-contact-icon"><Phone /></div>
                <span>+91 98765 43210</span>
              </a>

              <a href="mailto:info@shrisomsudha.com" className="ss-contact-row">
                <div className="ss-contact-icon"><Mail /></div>
                <span>info@shrisomsudha.com</span>
              </a>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="ss-footer-bottom">
            <p className="ss-bottom-copy">© {new Date().getFullYear()} Shri Somsudha. All rights reserved.</p>
            <div className="ss-bottom-links">
              <a href="#" className="ss-bottom-link">Privacy Policy</a>
              <a href="#" className="ss-bottom-link">Terms of Use</a>
              <a href="#" className="ss-bottom-link">Shipping Policy</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}