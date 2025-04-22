
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TextLoopProps {
  texts: string[];
  className?: string;
  interval?: number;
}

const TextLoop = ({ texts, className = "", interval = 3000 }: TextLoopProps) => {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [texts, interval]);
  
  return (
    <div className={`relative h-8 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="absolute inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default TextLoop;