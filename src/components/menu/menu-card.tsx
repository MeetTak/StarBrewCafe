"use client";

import { motion } from "framer-motion";

interface MenuCardProps {
  name: string;
  price: number;
  description: string;
  index: number;
}

export default function MenuCard({ name, price, description, index }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="relative bg-starbrew-black border border-white/5 rounded-xl p-5 hover:border-starbrew-green/40 transition-all duration-300 group overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-starbrew-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <div className="absolute top-0 left-0 w-0 h-[2px] bg-starbrew-green group-hover:w-full transition-all duration-500" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-heading font-semibold text-starbrew-cream group-hover:text-white transition-colors">
            {name}
          </h4>
          <span
            className="font-heading font-bold text-starbrew-green whitespace-nowrap"
          >
            ₹{price}
          </span>
        </div>
        {description && (
          <p className="text-sm text-starbrew-gray mt-2 leading-relaxed group-hover:text-starbrew-gray/80 transition-colors">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
