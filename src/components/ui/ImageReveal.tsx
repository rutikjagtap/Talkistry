import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageReveal = ({ src, alt, className = "" }: ImageRevealProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0 bg-primary z-10"
        initial={{ x: 0 }}
        animate={inView ? { x: "100%" } : { x: 0 }}
        transition={{ duration: 0.7, ease: [0.6, 0.05, -0.01, 0.9], delay: 0.2 }}
      />
      
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ scale: 1.2 }}
        animate={inView ? { scale: 1 } : { scale: 1.2 }}
        transition={{ duration: 1.4, ease: [0.6, 0.05, -0.01, 0.9] }}
      />
    </motion.div>
  );
};

export default ImageReveal;
