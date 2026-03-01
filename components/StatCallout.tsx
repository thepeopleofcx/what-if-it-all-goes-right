'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface StatCalloutProps {
  number: string;
  label: string;
  suffix?: string;
}

export default function StatCallout({ number, label, suffix = '' }: StatCalloutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  // Extract numeric value from string like "78%" or "$1.17"
  const numericValue = parseFloat(number.replace(/[^0-9.]/g, ''));
  const prefix = number.match(/^[^0-9]*/)?.[0] || '';
  const numberSuffix = number.match(/[^0-9.]*$/)?.[0] || suffix;

  useEffect(() => {
    if (isInView && !isNaN(numericValue)) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [isInView, numericValue, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="my-16 text-center"
    >
      <div className="inline-block p-8 md:p-12 rounded-lg border border-gold/30 bg-dark-bg-alt/50 backdrop-blur-sm">
        <motion.div className="text-5xl md:text-7xl font-cormorant font-light text-gold mb-4">
          {prefix}
          {!isNaN(numericValue) ? (
            <motion.span>{rounded}</motion.span>
          ) : (
            number
          )}
          {numberSuffix}
        </motion.div>
        <p className="text-cream/80 text-sm md:text-base tracking-wide max-w-md">
          {label}
        </p>
      </div>
    </motion.div>
  );
}
