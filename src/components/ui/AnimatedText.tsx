import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

const AnimatedText = ({ text, className = "", once = false }: AnimatedTextProps) => {
  // Split text into array of words
  const words = text.split(' ');
  
  // Animation for each word
  const container = {
    hidden: {},
    visible: (i = 1) => ({
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  
  // Animation for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  
  return (
    <motion.div
      style={{ overflow: 'hidden' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          className="inline-block mr-1"
        >
          {word + ' '}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
