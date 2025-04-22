
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <motion.div
      className="flex flex-col items-center mt-10"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
      <motion.div
        className="w-0.5 h-10 bg-gray-300 rounded-full relative overflow-hidden"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
      >
        <motion.span
          className="absolute top-0 left-0 right-0 h-5 bg-primary rounded-full"
          animate={{ 
            y: [0, 30, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;