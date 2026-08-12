"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  { label: "The Space", src: "/images/gallery/cafe-interior-seating.jpg", alt: "Cafe interior seating with warm ambient lighting", span: "md:col-span-2 md:row-span-2" },
  { label: "Welcome", src: "/images/gallery/cafe-entrance.jpg", alt: "StarBrew Cafe entrance", span: "" },
  { label: "Counter", src: "/images/menu/cafe-counter.jpg", alt: "StarBrew Cafe counter and barista station", span: "" },
  { label: "The View", src: "/images/gallery/cafe-exterior-wide.jpg", alt: "Wide exterior view of StarBrew Cafe", span: "md:col-span-2" },
  { label: "Patio", src: "/images/gallery/patio-seating.jpg", alt: "Outdoor patio seating area", span: "" },
  { label: "After Dark", src: "/images/hero/cafe-exterior-night.jpg", alt: "StarBrew Cafe exterior at night", span: "" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const navigate = useCallback((direction: 1 | -1) => {
    setSelected(prev => {
      if (prev === null) return null;
      const next = prev + direction;
      if (next < 0) return galleryItems.length - 1;
      if (next >= galleryItems.length) return 0;
      return next;
    });
  }, []);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, navigate]);

  return (
    <section id="gallery" className="bg-starbrew-black py-24 md:py-36 px-6 md:px-12 relative overflow-hidden">
      <motion.div
        className="absolute right-0 top-1/3 w-72 h-72 rounded-full bg-starbrew-green/5 blur-3xl"
        animate={{ x: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-starbrew-cream">
            The Space
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-starbrew-green rounded-full mx-auto mt-3 mb-4"
          />
          <p className="text-starbrew-gray">Step inside StarBrew</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[140px] sm:auto-rows-[160px] md:auto-rows-[200px]">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              onClick={() => setSelected(i)}
              className={`relative rounded-xl overflow-hidden border border-white/5 hover:border-starbrew-green/40 transition-all duration-500 group cursor-pointer ${item.span || ""}`}
              aria-label={`View ${item.label} photo`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes={item.span?.includes("col-span-2") ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
              />
              <div className="absolute inset-0 bg-starbrew-black/20 group-hover:bg-starbrew-black/10 transition-colors duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-starbrew-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-starbrew-cream text-xs font-heading tracking-wide">
                  {item.label}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-label="Image lightbox"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-[16/10] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryItems[selected].src}
                alt={galleryItems[selected].alt}
                fill
                className="object-cover"
                sizes="90vw"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-starbrew-cream font-heading text-lg">
                  {galleryItems[selected].label}
                </p>
                <p className="text-starbrew-gray text-sm mt-0.5">
                  {selected + 1} of {galleryItems.length}
                </p>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-starbrew-cream hover:text-white hover:bg-black/80 transition-all duration-200"
                aria-label="Close lightbox"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-starbrew-cream hover:bg-black/60 transition-all"
                aria-label="Previous image"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-starbrew-cream hover:bg-black/60 transition-all"
                aria-label="Next image"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
