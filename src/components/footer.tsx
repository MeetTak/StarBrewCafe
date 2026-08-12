"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit Us", href: "#visit-us" },
];

export default function Footer() {
  return (
    <footer className="bg-starbrew-black border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(46,125,50,0.04)_0%,_transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2.5 mb-2">
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
                <p className="font-heading font-bold text-xl tracking-wider text-starbrew-cream leading-none">
                  STARBREW
                </p>
                <p className="text-[10px] tracking-[0.3em] text-starbrew-gray">CAFE</p>
              </div>
            </div>
            <p className="font-script text-starbrew-green text-lg mt-3">
              Enjoy Brewtiful Moments
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-starbrew-gray mb-4">
              Quick Links
            </p>
            <div className="space-y-3">
              {footerLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="block text-starbrew-cream hover:text-starbrew-green transition-colors text-sm group"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-starbrew-green/0 group-hover:text-starbrew-green transition-colors mr-1">&rarr;</span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-starbrew-gray mb-4">
              Connect
            </p>
            <div className="space-y-3">
              <motion.a
                href="https://www.instagram.com/starbrew.kishangarh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-starbrew-cream hover:text-starbrew-green transition-colors text-sm group"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-starbrew-green group-hover:scale-110 transition-transform">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
                @starbrew.kishangarh
              </motion.a>
              <motion.a
                href="tel:+919521824100"
                className="flex items-center gap-3 text-starbrew-cream hover:text-starbrew-green transition-colors text-sm group"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-starbrew-green group-hover:scale-110 transition-transform">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                +91 95218 24100
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-starbrew-gray">
            &copy; 2026 StarBrew Cafe. All rights reserved.
          </p>
          <p className="text-sm text-starbrew-gray">
            Made with <span className="text-starbrew-green">&hearts;</span> in Kishangarh
          </p>
        </div>
      </div>
    </footer>
  );
}
