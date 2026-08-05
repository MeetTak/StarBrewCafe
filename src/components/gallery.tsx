"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryItems = [
  { label: "Cafe Interior", gradient: "from-[#1a1a1a] via-[#2a2520] to-[#1a1a1a]", span: "md:col-span-2 md:row-span-2" },
  { label: "Latte Art", gradient: "from-[#1a1a1a] via-[#1a2018] to-[#0f150f]" },
  { label: "Our Espresso", gradient: "from-[#201a1a] via-[#1a1a1a] to-[#1a1510]" },
  { label: "The Bar", gradient: "from-[#1a1a20] via-[#15151a] to-[#1a1a1a]" },
  { label: "Cozy Corner", gradient: "from-[#20201a] via-[#1a1a1a] to-[#1a1815]", span: "md:col-span-2" },
  { label: "Fresh Brew", gradient: "from-[#1a201a] via-[#151a15] to-[#1a1a1a]" },
  { label: "Evening Vibes", gradient: "from-[#201a20] via-[#1a151a] to-[#1a1a1a]" },
  { label: "StarBrew Special", gradient: "from-[#1e1e1a] via-[#1a1a15] to-[#1a1a1a]" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-starbrew-black py-20 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <motion.div
        className="absolute right-0 top-1/3 w-72 h-72 rounded-full bg-starbrew-green/3 blur-3xl"
        animate={{ x: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[200px]">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              onClick={() => setSelected(i)}
              className={`relative rounded-xl overflow-hidden border border-white/5 hover:border-starbrew-green/50 transition-all duration-500 group cursor-pointer hover:shadow-xl hover:shadow-starbrew-green/10 ${item.span || ""}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} group-hover:scale-110 transition-transform duration-700`} />

              <div className="absolute inset-0 bg-starbrew-green/0 group-hover:bg-starbrew-green/10 transition-colors duration-500" />

              <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-all duration-300">
                <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                  <motion.div className="w-12 h-12 mx-auto mb-2 rounded-full bg-starbrew-green/10 flex items-center justify-center border border-starbrew-green/20 group-hover:border-starbrew-green/50 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-starbrew-green">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                      <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                  <p className="text-starbrew-gray/70 text-xs font-heading group-hover:text-starbrew-cream transition-colors duration-300">
                    {item.label}
                  </p>
                </div>
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
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateY: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-3xl aspect-[16/10] rounded-2xl overflow-hidden border border-starbrew-green/30 shadow-2xl shadow-starbrew-green/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${galleryItems[selected].gradient}`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-starbrew-green/10 flex items-center justify-center border border-starbrew-green/30">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-starbrew-green">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                      <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-starbrew-cream font-heading text-xl">
                    {galleryItems[selected].label}
                  </p>
                  <p className="text-starbrew-gray text-sm mt-1">Photo placeholder</p>
                </motion.div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-starbrew-black/80 flex items-center justify-center text-starbrew-cream hover:text-starbrew-green hover:bg-starbrew-black transition-all duration-200"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
