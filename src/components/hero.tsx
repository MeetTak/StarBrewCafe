"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

function FloatingParticle({ delay, x, size }: { delay: number; x: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-starbrew-green/20"
      style={{ width: size, height: size, left: `${x}%` }}
      initial={{ y: "100vh", opacity: 0 }}
      animate={{
        y: "-10vh",
        opacity: [0, 0.4, 0.4, 0],
        scale: [0.5, 1, 1, 0.3],
      }}
      transition={{
        duration: 10 + delay * 2,
        delay: delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

const particles = Array.from({ length: 5 }, (_, i) => ({
  delay: i * 1.8,
  x: 10 + (i * 19) % 80,
  size: 3 + (i % 3) * 2,
}));

const letterVariants = {
  hidden: { opacity: 0, y: 80, rotateX: 90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.5 + i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const titleText = "STARBREW";

  useEffect(() => setMounted(true), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
        <Image
          src="/images/hero/cafe-exterior-night.jpg"
          alt="StarBrew Cafe exterior at night"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-starbrew-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-starbrew-black via-starbrew-black/20 to-starbrew-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(46,125,50,0.08)_0%,_transparent_60%)]" />
      </motion.div>

      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p, i) => (
            <FloatingParticle key={i} {...p} />
          ))}
        </div>
      )}

      <motion.div className="relative z-10 text-center px-6" style={{ y, opacity, scale }}>
        <div className="overflow-hidden">
          <h1 className="font-heading font-black text-starbrew-cream" style={{ perspective: "500px" }}>
            <span className="flex justify-center">
              {titleText.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-wider"
                  whileHover={{
                    color: "#2E7D32",
                    scale: 1.15,
                    transition: { duration: 0.2 },
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0em" }}
              animate={{ opacity: 1, letterSpacing: "0.5em" }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl text-starbrew-gray mt-2"
            >
              CAFE
            </motion.span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
          className="mt-6 md:mt-8"
        >
          <p className="font-script text-starbrew-green text-2xl md:text-3xl lg:text-4xl">
            Enjoy Brewtiful Moments
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#menu"
            className="relative inline-block bg-starbrew-green text-white font-heading font-semibold text-sm md:text-base tracking-wider px-8 py-4 rounded-full overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-starbrew-green-light to-starbrew-green"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">VIEW OUR MENU</span>
          </motion.a>

          <motion.a
            href="#visit-us"
            className="inline-block border border-white/20 text-starbrew-cream font-heading font-semibold text-sm md:text-base tracking-wider px-8 py-4 rounded-full hover:bg-white/5 transition-colors backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            VISIT US
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-starbrew-cream/40">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
