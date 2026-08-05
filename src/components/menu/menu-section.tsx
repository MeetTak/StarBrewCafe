"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuData } from "@/lib/menu-data";
import MenuCard from "./menu-card";

const categoryIcons: Record<string, string> = {
  "Hot Coffee": "☕",
  "Cold Coffee": "🧊",
  "Beverages": "🥤",
  "Shakes": "🥛",
  "Food": "🍕",
  "Desserts": "🍫",
  "Add-Ons": "✨",
};

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const category = menuData[activeCategory];

  return (
    <section id="menu" className="bg-starbrew-dark py-20 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <motion.div
        className="absolute -left-40 bottom-20 w-80 h-80 rounded-full bg-starbrew-green/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
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
            Our Menu
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-starbrew-green rounded-full mx-auto mt-3 mb-4"
          />
          <p className="text-sm text-starbrew-gray">
            Menu items and prices are subject to change
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex gap-2 md:gap-3 overflow-x-auto pb-4 mb-10 scrollbar-hide justify-start md:justify-center"
        >
          {menuData.map((cat, i) => (
            <motion.button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative whitespace-nowrap px-4 md:px-5 py-2.5 rounded-full font-heading text-sm font-medium transition-all duration-300 shrink-0 ${
                i === activeCategory
                  ? "text-white shadow-lg shadow-starbrew-green/25"
                  : "border border-starbrew-gray/20 text-starbrew-gray hover:border-starbrew-green/50 hover:text-starbrew-green"
              }`}
            >
              {i === activeCategory && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-starbrew-green rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {categoryIcons[cat.name]} {cat.name}
              </span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {category.subcategories.map((sub) => (
              <div key={sub.name} className="mb-10 last:mb-0">
                {category.subcategories.length > 1 && (
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="font-heading text-xl font-semibold text-starbrew-cream mb-5 pl-4 border-l-2 border-starbrew-green"
                  >
                    {sub.name}
                  </motion.h3>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sub.items.map((item, idx) => (
                    <MenuCard
                      key={item.name}
                      name={item.name}
                      price={item.price}
                      description={item.description}
                      index={idx}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
