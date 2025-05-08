import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator: React.FC = () => {
  const scrollToStories = () => {
    const storiesSection = document.getElementById('stories-section');
    if (storiesSection) {
      storiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer"
      onClick={scrollToStories}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
      <motion.div
        className="bg-story-primary/20 p-2 rounded-full"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown size={20} className="text-story-primary" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;