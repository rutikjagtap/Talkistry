import React from 'react';
import { motion } from 'framer-motion';

const FloatingShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-story-primary/5 -top-10 -left-10"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 0.7, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-story-secondary/5 top-20 right-10"
        animate={{
          y: [0, -30, 0],
          opacity: [0.6, 0.8, 0.6],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      <motion.div
        className="absolute w-24 h-24 rounded-full bg-pink-300/10 bottom-10 left-1/4"
        animate={{
          x: [0, 20, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Decorative elements */}
      <motion.div
        className="absolute w-16 h-16 rounded-md bg-yellow-300/10 rotate-12 bottom-32 right-1/4"
        animate={{
          rotate: [12, 20, 12],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 9,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-20 h-20 rounded-md bg-green-300/10 -rotate-12 top-32 left-1/3"
        animate={{
          rotate: [-12, -6, -12],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </div>
  );
};

export default FloatingShapes;