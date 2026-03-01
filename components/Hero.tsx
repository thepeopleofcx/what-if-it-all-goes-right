'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg-alt to-dark-bg" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-8 text-cream"
        >
          WHAT IF IT ALL
          <br />
          GOES RIGHT?
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-cream/80 font-light tracking-wide mb-4"
        >
          A Front-Line Dispatch from deep within the AI Transition
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-base md:text-lg text-gold font-cormorant italic tracking-wide"
        >
          by William & Mary
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer text-gold hover:text-cream transition-colors"
        aria-label="Scroll to content"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
