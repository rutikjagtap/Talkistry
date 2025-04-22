
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 group"
          style={{
            background: isHovered ? "#1A1F2C" : "rgba(26, 31, 44, 0.9)",
            boxShadow: isHovered 
              ? "0 10px 25px rgba(0, 0, 0, 0.2)" 
              : "0 4px 12px rgba(0, 0, 0, 0.15)",
          }}
          aria-label="Back to top"
        >
          <motion.div
            animate={{ 
              y: isHovered ? -3 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ChevronUp className="w-6 h-6 text-white" />
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-10 right-0 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            Back to top
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
