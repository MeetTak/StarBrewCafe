"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import TiltCard from "@/components/ui/tilt-card";

const testimonials = [
  {
    quote: "Best coffee in Kishangarh. The ambience feels premium and warm at the same time.",
    author: "Aarav S.",
    role: "Regular guest",
  },
  {
    quote: "The food is fresh, the team is attentive, and every visit feels thoughtfully designed.",
    author: "Nidhi K.",
    role: "Food lover",
  },
  {
    quote: "A perfect place for evening catch-ups. Clean space, beautiful lighting, great coffee.",
    author: "Mohit R.",
    role: "Local visitor",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-starbrew-black px-6 md:px-12 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(46,125,50,0.05)_0%,_transparent_55%)]" />

      <div className="max-w-6xl mx-auto relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div custom={0} variants={fadeUp} className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-starbrew-green" />
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-starbrew-green">
              Menu & Order
            </span>
          </motion.div>
          <motion.h2
            custom={0.1}
            variants={fadeUp}
            className="font-heading font-bold text-3xl md:text-4xl lg:text-[2.8rem] text-starbrew-cream leading-tight max-w-xl"
          >
            Browse the full menu and order for pickup.
          </motion.h2>
          <motion.p
            custom={0.2}
            variants={fadeUp}
            className="mt-5 text-starbrew-gray leading-relaxed max-w-lg"
          >
            From signature espressos to hearty cafe bites — explore
            everything StarBrew serves. Pick your favourites and place your
            order directly on WhatsApp.
          </motion.p>
          <motion.div custom={0.3} variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/menu"
              className="group relative inline-flex items-center justify-center rounded-full bg-starbrew-green px-7 py-3.5 font-heading text-sm font-semibold tracking-[0.18em] text-white cursor-pointer transition-all duration-300 hover:shadow-[0_0_28px_rgba(46,125,50,0.25)] active:scale-[0.97] overflow-hidden"
            >
              <span className="relative z-10">VIEW MENU & ORDER</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            </Link>
            <a
              href="#visit-us"
              className="group relative inline-flex items-center justify-center rounded-full border border-starbrew-cream/12 px-7 py-3.5 font-heading text-sm font-semibold tracking-[0.18em] text-starbrew-cream cursor-pointer transition-all duration-300 hover:border-starbrew-green/30 hover:text-starbrew-green overflow-hidden"
            >
              <span className="relative z-10">FIND US</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-starbrew-green/8 to-transparent" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="rounded-2xl border border-white/[0.04] bg-starbrew-dark/50 p-6 md:p-7"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-6 bg-starbrew-green/50" />
            <span className="font-heading text-[11px] uppercase tracking-[0.25em] text-starbrew-gray">
              What guests say
            </span>
          </div>
          <div className="space-y-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.35 + i * 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
              >
                <TiltCard intensity={5} className="rounded-xl">
                  <article className="rounded-xl border border-white/[0.04] bg-starbrew-black/40 p-4 transition-colors duration-300 hover:border-starbrew-green/10">
                    <p className="text-sm text-starbrew-cream/80 leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div>
                        <p className="font-heading text-[13px] font-semibold text-starbrew-cream">
                          {t.author}
                        </p>
                        <p className="text-[11px] text-starbrew-gray">{t.role}</p>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <svg key={j} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-starbrew-green" aria-hidden="true">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
