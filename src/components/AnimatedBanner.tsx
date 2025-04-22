
import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";

const AnimatedBanner = () => {
  return (
    <div className="bg-primary-soft/80 py-3 overflow-hidden">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex items-center gap-8 whitespace-nowrap"
      >
        {Array(3).fill("Join the communication revolution! 🚀 Limited beta spots available").map((text, i) => (
          <div key={i} className="flex items-center gap-2 text-primary font-medium">
            <ScrollText className="w-4 h-4" />
            <span>{text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedBanner;
