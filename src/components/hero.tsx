"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function FloatingParticle({ delay, x, size }: { delay: number; x: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-starbrew-green/20"
      style={{ width: size, height: size, left: `${x}%` }}
      initial={{ y: "100vh", opacity: 0 }}
      animate={{
        y: "-10vh",
        opacity: [0, 0.6, 0.6, 0],
        scale: [0.5, 1, 1, 0.3],
      }}
      transition={{
        duration: 8 + Math.floor(delay * 3),
        delay: delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

const particles = Array.from({ length: 15 }, (_, i) => ({
  delay: i * 0.6,
  x: 5 + (i * 7) % 90,
  size: 3 + (i % 4) * 2,
}));

const letterVariants = {
  hidden: { opacity: 0, y: 80, rotateX: 90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.3 + i * 0.08,
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
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const titleText = "STARBREW";

  useEffect(() => setMounted(true), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-starbrew-black"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(46,125,50,0.12)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(46,125,50,0.06)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,_rgba(46,125,50,0.04)_0%,_transparent_50%)]" />
      </div>

      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p, i) => (
            <FloatingParticle key={i} {...p} />
          ))}
        </div>
      )}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full border border-starbrew-green/5"
            style={{
              width: 200 + i * 200,
              height: 200 + i * 200,
              marginLeft: -(100 + i * 100),
              marginTop: -(100 + i * 100),
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 4 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

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
                    scale: 1.2,
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
              transition={{ delay: 1, duration: 0.8 }}
              className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl text-starbrew-gray mt-2"
            >
              CAFE
            </motion.span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.6, ease: "easeOut" }}
          className="mt-6 md:mt-8"
        >
          <motion.div
            className="inline-block"
            animate={{ rotate: [0, 1, -1, 0] }}
            transition={{ delay: 2, duration: 3, repeat: Infinity }}
          >
            <p className="font-script text-starbrew-green text-2xl md:text-3xl lg:text-4xl">
              Enjoy Brewtiful Moments
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
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
            className="inline-block border border-starbrew-green/50 text-starbrew-green font-heading font-semibold text-sm md:text-base tracking-wider px-8 py-4 rounded-full hover:bg-starbrew-green/10 transition-colors"
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
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.span
          className="text-xs tracking-widest text-starbrew-gray/50 font-heading uppercase"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-starbrew-green/60">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
