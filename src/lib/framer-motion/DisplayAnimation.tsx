'use client';

import { Children } from '@/types/types';
import { motion } from 'framer-motion';

const DisplayAnimation = ({ children }: Children) => {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
};

export default DisplayAnimation;
