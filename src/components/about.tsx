"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 80, suffix: "+", label: "Menu Items" },
  { value: 1000, suffix: "+", label: "Happy Customers" },
  { value: 7, suffix: "", label: "Days a Week" },
];

export default function About() {
  return (
    <section id="about" className="bg-starbrew-black py-24 md:py-36 px-6 md:px-12 relative overflow-hidden">
      <motion.div
        className="absolute -right-32 top-20 w-64 h-64 rounded-full bg-starbrew-green/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-1 bg-starbrew-green rounded-full mb-4"
            />
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-starbrew-cream mb-8">
              Our Story
            </h2>

            <div className="space-y-5 text-starbrew-gray leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Born in the heart of Kishangarh, StarBrew Cafe is where specialty
                coffee meets small-town charm. We started with a simple belief —
                great coffee shouldn&apos;t be a big city privilege.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
              >
                Every cup we serve is crafted with precision and care. From rich
                espressos to our signature frappes, we source quality beans and
                blend them with creativity that keeps you coming back.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                But StarBrew is more than just coffee. It&apos;s your morning
                ritual, your study corner, your catch-up spot. Grab a seat, take a
                sip, and enjoy a brewtiful moment.
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="font-script text-starbrew-green text-xl mt-8 italic"
            >
              &ldquo;Where every sip tells a story&rdquo;
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-starbrew-green/15 via-transparent to-starbrew-green/10 blur-xl"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-starbrew-green/20">
              <Image
                src="/images/gallery/cafe-interior-seating.jpg"
                alt="Inside StarBrew Cafe — warm seating area with ambient lighting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-starbrew-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-4 md:gap-6 mt-20 md:mt-28"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="text-center p-4 md:p-6 rounded-2xl bg-starbrew-dark/50 border border-white/5 hover:border-starbrew-green/20 transition-colors duration-300"
            >
              <p className="font-heading font-black text-2xl md:text-4xl text-starbrew-green">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-starbrew-gray text-xs md:text-sm mt-1 font-heading">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
