"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit Us", href: "#visit-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        const sections = navLinks.map((l) => l.href.slice(1));
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.getBoundingClientRect().top <= 150) {
            setActiveSection(`#${sections[i]}`);
            break;
          }
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-starbrew-black/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-starbrew-green via-starbrew-green-light to-starbrew-green"
        style={{ width: progressWidth }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <motion.a
          href="#hero"
          className="font-heading font-black tracking-widest text-starbrew-cream flex items-center gap-2.5"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-starbrew-green/30 shrink-0">
            <Image
              src="/brand/starbrew-logo.jpg"
              alt="StarBrew"
              width={32}
              height={32}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <span className="text-lg leading-none">STARBREW</span>
            <span className="text-[10px] tracking-[0.3em] text-starbrew-gray ml-1.5">CAFE</span>
          </div>
        </motion.a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-heading text-sm font-medium tracking-wide px-4 py-2 transition-colors duration-200 group"
            >
              <span className={activeSection === link.href ? "text-starbrew-green" : "text-starbrew-gray group-hover:text-starbrew-cream"}>
                {link.label}
              </span>
              {activeSection === link.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-starbrew-green rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-50"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-starbrew-cream origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            className="block w-6 h-0.5 bg-starbrew-cream"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-starbrew-cream origin-center"
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 32px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 32px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 32px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-starbrew-black md:hidden flex flex-col items-center justify-center gap-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, #2E7D32 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
                onClick={() => setMobileOpen(false)}
                className={`relative font-heading text-3xl font-bold tracking-wider transition-colors ${
                  activeSection === link.href ? "text-starbrew-green" : "text-starbrew-cream"
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeMobileNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-starbrew-green rounded-full"
                  />
                )}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
