import { useState, useRef, useEffect, useMemo } from "react";
import { Menu, X, ChevronDown, ChevronRight, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { products } from "@/lib/products";

const navDropdownItems = [
  { name: "Yellow Mustard Oil", slug: "yellow-mustard-oil", desc: "Cold-pressed · Bold flavour" },
  { name: "Black Mustard Oil",  slug: "black-mustard-oil",  desc: "Cold-pressed · Bold & pungent" },
  { name: "White Sesame Oil",   slug: "white-sesame-oil",   desc: "Wood-pressed · Nutty" },
  { name: "Black Sesame Oil",   slug: "black-sesame-oil",   desc: "Deep · Robust flavour" },
  { name: "Coconut Oil",        slug: "coconut-oil",        desc: "Virgin · Aromatic" },
  { name: "Groundnut Oil",      slug: "groundnut-oil",      desc: "Cold-pressed · Light" },
  { name: "Almond Oil",         slug: "almond-oil",         desc: "Pure · Skin & cooking" },
];

const navLinks = [
  { label: "Home",           to: "/" },
  { label: "About",          to: "/about" },
  { label: "Products",       to: "/products", dropdown: true },
  { label: "Certifications", to: "/certifications" },
  { label: "Contact",        to: "/contact" },
];

/* ─── Search Component ─── */
function SearchBox({
  mobile = false,
  autoFocus = false,
  onClose,
}: {
  mobile?: boolean;
  autoFocus?: boolean;
  onClose?: () => void;
}) {
  const [query, setQuery]     = useState("");
  const [focused, setFocused] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const inputRef   = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate   = useNavigate();

  /* ── real search: name, slug, category, description, benefits ── */
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products.filter((p) =>
      p.name.toLowerCase().includes(q) ||
      p.slug.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.benefits.some((b) => b.toLowerCase().includes(q))
    );
  }, [query]);

  /* reset keyboard index when results change */
  useEffect(() => setActiveIdx(-1), [results]);

  /* close on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node))
        setFocused(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const showDropdown = focused && query.trim().length > 0;

  const handleSelect = (slug: string) => {
    navigate(`/products/${slug}`);
    setQuery("");
    setFocused(false);
    setActiveIdx(-1);
    onClose?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const target = activeIdx >= 0 ? results[activeIdx] : results[0];
      if (target) handleSelect(target.slug);
    } else if (e.key === "Escape") {
      setFocused(false);
      setQuery("");
    }
  };

  /* highlight matched part of text */
  const highlight = (text: string, q: string) => {
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return <span>{text}</span>;
    return (
      <>
        {text.slice(0, idx)}
        <mark className="bg-red-100 text-red-700 rounded px-0.5 font-medium not-italic">
          {text.slice(idx, idx + q.length)}
        </mark>
        {text.slice(idx + q.length)}
      </>
    );
  };

  return (
    <div ref={wrapperRef} className={`relative ${mobile ? "w-full" : ""}`}>
      <Search
        size={15}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10"
      />
      <input
        ref={inputRef}
        type="text"
        autoFocus={autoFocus}
        placeholder="Search products..."
        value={query}
        onChange={(e) => { setQuery(e.target.value); setFocused(true); }}
        onFocus={() => setFocused(true)}
        onKeyDown={handleKeyDown}
        className={`
          pl-9 pr-8 py-2 rounded-full text-sm
          bg-gray-100 border border-transparent
          text-gray-800 placeholder:text-gray-400
          focus:outline-none focus:border-gray-300 focus:bg-white
          transition-all duration-300
          ${mobile ? "w-full py-2.5" : "w-40 focus:w-56"}
        `}
      />

      {/* clear button */}
      {query && (
        <button
          onMouseDown={(e) => { e.preventDefault(); setQuery(""); inputRef.current?.focus(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={13} />
        </button>
      )}

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={  { opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className={`
              absolute top-full mt-2 bg-white
              border border-gray-100 rounded-2xl
              shadow-[0_16px_48px_rgba(0,0,0,0.11)]
              overflow-hidden z-[200]
              ${mobile ? "left-0 right-0" : "left-0 w-80"}
            `}
          >
            {results.length > 0 ? (
              <>
                <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-gray-50">
                  <p className="text-[10px] font-medium tracking-[2px] uppercase text-gray-400">
                    {results.length} product{results.length > 1 ? "s" : ""} found
                  </p>
                  <p className="text-[10px] text-gray-300">↑↓ to navigate</p>
                </div>

                <div className="max-h-72 overflow-y-auto">
                  {results.map((product, i) => (
                    <button
                      key={product.slug}
                      onMouseDown={() => handleSelect(product.slug)}
                      onMouseEnter={() => setActiveIdx(i)}
                      className={`
                        w-full flex items-start gap-3 px-4 py-3 text-left
                        transition-colors duration-100 group
                        ${activeIdx === i ? "bg-red-50" : "hover:bg-gray-50"}
                      `}
                    >
                      {/* product image thumbnail */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 rounded-lg object-cover bg-gray-100 flex-shrink-0 mt-0.5"
                      />
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium leading-tight transition-colors ${activeIdx === i ? "text-red-600" : "text-gray-800 group-hover:text-gray-900"}`}>
                          {highlight(product.name, query.trim())}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {highlight(product.category, query.trim())}
                          {" · "}
                          {product.variants.length} size{product.variants.length > 1 ? "s" : ""}
                        </p>
                        <p className="text-xs text-gray-300 mt-0.5 truncate">
                          From ₹{Math.min(...product.variants.map((v) => v.price))}
                        </p>
                      </div>
                      <ChevronRight
                        size={14}
                        className={`flex-shrink-0 mt-1 transition-colors ${activeIdx === i ? "text-red-400" : "text-gray-300"}`}
                      />
                    </button>
                  ))}
                </div>

                <div className="px-3 pb-3 pt-2 border-t border-gray-50">
                  <button
                    onMouseDown={() => { navigate("/products"); setQuery(""); setFocused(false); onClose?.(); }}
                    className="w-full py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-medium transition-colors"
                  >
                    Browse all products
                  </button>
                </div>
              </>
            ) : (
              <div className="px-4 py-6 text-center">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                  <Search size={16} className="text-gray-400" />
                </div>
                <p className="text-sm text-gray-500">
                  No results for <span className="font-medium text-gray-700">"{query}"</span>
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Try "mustard", "sesame", "coconut"…
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main Navbar ─── */
const Navbar = () => {
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const [dropdownOpen, setDropdownOpen]     = useState(false);
  const [scrolled, setScrolled]             = useState(false);
  const [searchOpen, setSearchOpen]         = useState(false);
  const [mounted, setMounted]               = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location    = useLocation();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => { setMobileOpen(false); setMobileProducts(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setDropdownOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={mounted ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`
          fixed top-0 inset-x-0 z-50
          transition-all duration-500 ease-in-out
          ${scrolled
            ? "bg-white/92 backdrop-blur-2xl shadow-[0_2px_24px_rgba(0,0,0,0.08)] border-b border-gray-200/80"
            : "bg-white/70 backdrop-blur-md border-b border-white/60"
          }
        `}
      >
        <div
          className={`
            mx-auto max-w-7xl px-6 lg:px-8
            flex items-center justify-between
            transition-all duration-300
            ${scrolled ? "h-16" : "h-20 sm:h-24"}
          `}
        >
          {/* ── LOGO ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/" className="flex-shrink-0 block">
              <img
                src={logo}
                alt="Shri Somsudha"
                className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-10 sm:h-12" : "h-14 sm:h-16"}`}
              />
            </Link>
          </motion.div>

          {/* ── DESKTOP NAV ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) =>
              link.dropdown ? (
                <motion.div
                  key={link.to}
                  ref={dropdownRef}
                  className="relative"
                  initial={{ opacity: 0, y: -12 }}
                  animate={mounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`
                      flex items-center gap-1.5 px-4 py-2.5 rounded-xl
                      text-sm font-medium tracking-wide transition-all duration-200
                      ${isActive(link.to)
                        ? "text-red-600 bg-red-50"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                      }
                    `}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0,  scale: 1    }}
                        exit={  { opacity: 0, y: 10, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="
                          absolute left-1/2 -translate-x-1/2 top-full mt-3
                          w-72 bg-white
                          border border-gray-100 rounded-2xl
                          shadow-[0_16px_48px_rgba(0,0,0,0.10)]
                          p-3 overflow-hidden
                        "
                      >
                        <p className="text-[10px] font-medium tracking-[2px] uppercase text-gray-400 px-3 mb-2 pb-2 border-b border-gray-100">
                          Our range
                        </p>
                        <div className="space-y-0.5">
                          {navDropdownItems.map((oil) => (
                            <Link
                              key={oil.slug}
                              to={`/products/${oil.slug}`}
                              onClick={() => setDropdownOpen(false)}
                              className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-red-50 transition-colors duration-150 group"
                            >
                              <span className="text-sm font-medium text-gray-800 group-hover:text-red-600 transition-colors leading-tight">
                                {oil.name}
                              </span>
                              <span className="text-xs text-gray-400 mt-0.5">{oil.desc}</span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-2 pt-2 border-t border-gray-100 px-1">
                          <Link
                            to="/products"
                            onClick={() => setDropdownOpen(false)}
                            className="
                              flex items-center justify-center gap-2 w-full py-2.5 rounded-xl
                              bg-red-600 hover:bg-red-700 text-white text-sm font-medium
                              transition-colors duration-150
                            "
                          >
                            View all products <ChevronRight size={14} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: -12 }}
                  animate={mounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={link.to}
                    className={`
                      relative block px-4 py-2.5 rounded-xl text-sm font-medium tracking-wide
                      transition-all duration-200
                      ${isActive(link.to)
                        ? "text-red-600 bg-red-50"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                      }
                    `}
                  >
                    {link.label}
                    {isActive(link.to) && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-red-600 rounded-full" />
                    )}
                  </Link>
                </motion.div>
              )
            )}
          </div>

          {/* ── DESKTOP RIGHT ── */}
          <motion.div
            className="hidden lg:flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <SearchBox />
            <Link
              to="/contact"
              className="
                px-5 py-2.5 rounded-xl
                bg-red-600 hover:bg-red-700
                text-white text-sm font-medium
                transition-all duration-200 hover:-translate-y-px
                shadow-[0_2px_12px_rgba(196,28,28,0.25)]
              "
            >
              Contact Us
            </Link>
          </motion.div>

          {/* ── MOBILE RIGHT ── */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500"
            >
              <Search size={18} />
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 shadow-sm"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* ── MOBILE SEARCH BAR ── */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-3">
                <SearchBox mobile autoFocus onClose={() => setSearchOpen(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black/25 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="
                fixed left-0 top-0 bottom-0 z-[70]
                w-[85%] max-w-sm
                bg-white/95 backdrop-blur-xl
                border-r border-gray-200
                flex flex-col overflow-hidden
                shadow-[4px_0_32px_rgba(0,0,0,0.08)]
              "
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
                <Link to="/" onClick={() => setMobileOpen(false)}>
                  <img src={logo} alt="Shri Somsudha" className="h-12 w-auto object-contain" />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
                {navLinks.map((link) => {
                  const active = isActive(link.to);
                  if (link.dropdown) {
                    return (
                      <div key={link.to}>
                        <button
                          onClick={() => setMobileProducts(!mobileProducts)}
                          className={`
                            w-full flex items-center justify-between gap-3
                            px-4 py-3 rounded-xl text-sm font-medium
                            transition-all duration-150
                            ${mobileProducts ? "bg-red-50 text-red-600" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}
                          `}
                        >
                          {link.label}
                          <ChevronDown size={16} className={`transition-transform duration-200 ${mobileProducts ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {mobileProducts && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-1 pb-2 pl-3 space-y-0.5">
                                <Link
                                  to="/products"
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                                >
                                  All Products
                                </Link>
                                {navDropdownItems.map((oil) => (
                                  <Link
                                    key={oil.slug}
                                    to={`/products/${oil.slug}`}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-4 py-2.5 text-sm text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                                  >
                                    {oil.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className={`
                        flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150
                        ${active ? "bg-red-50 text-red-600" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}
                      `}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex-shrink-0 p-4 border-t border-gray-100">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;