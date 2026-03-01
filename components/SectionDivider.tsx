'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="my-20 flex items-center justify-center">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: '100%' } : {}}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent max-w-md"
      />
    </div>
  );
}
