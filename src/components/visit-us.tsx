"use client";

import { motion } from "framer-motion";

const contactItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-starbrew-green">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Location",
    content: (
      <p className="text-starbrew-gray leading-relaxed">
        StarBrew Cafe, Main Market Road,<br />
        Kishangarh, Rajasthan, India
      </p>
    ),
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-starbrew-green">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Hours",
    content: <p className="text-starbrew-gray">Mon – Sun: 9:00 AM – 11:00 PM</p>,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-starbrew-green">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Phone",
    content: (
      <a href="tel:+919521824100" className="text-starbrew-gray hover:text-starbrew-green transition-colors">
        +91 95218 24100
      </a>
    ),
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-starbrew-green">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: "Instagram",
    content: (
      <a
        href="https://www.instagram.com/starbrew.kishangarh/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-starbrew-green hover:brightness-125 transition-all"
      >
        @starbrew.kishangarh
      </a>
    ),
  },
];

export default function VisitUs() {
  return (
    <section id="visit-us" className="bg-starbrew-dark py-20 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-0 w-96 h-96 -translate-x-1/2 rounded-full bg-starbrew-green/3 blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
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
            Visit Us
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-starbrew-green rounded-full mx-auto mt-3"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                whileHover={{ x: 8 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-starbrew-black/50 transition-colors duration-300 group"
              >
                <motion.div
                  className="w-11 h-11 rounded-full bg-starbrew-green/10 flex items-center justify-center shrink-0 border border-starbrew-green/20 group-hover:border-starbrew-green/50 group-hover:bg-starbrew-green/20 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h3 className="font-heading font-semibold text-starbrew-cream mb-1">{item.title}</h3>
                  {item.content}
                </div>
              </motion.div>
            ))}

            <motion.a
              href="tel:+919521824100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="block mt-6 text-center bg-starbrew-green text-white font-heading font-semibold text-sm tracking-wider px-6 py-3.5 rounded-full hover:brightness-110 transition-all shadow-lg shadow-starbrew-green/20"
            >
              CALL US NOW
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="aspect-video rounded-2xl border border-starbrew-green/20 overflow-hidden relative bg-starbrew-black shadow-xl shadow-starbrew-green/5"
              whileHover={{ borderColor: "rgba(46,125,50,0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573!2d74.922255!3d26.5925856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396bf7002a902f05%3A0x3c1f4b04bbaa396a!2sStarbrew%20Cafe!5e0!3m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="StarBrew Cafe Location"
                className="absolute inset-0 w-full h-full"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-script text-starbrew-green text-2xl text-center mt-12"
        >
          We&apos;d love to see you
        </motion.p>
      </div>
    </section>
  );
}
