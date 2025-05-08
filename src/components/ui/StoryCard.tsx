import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Star } from 'lucide-react';
import ImageReveal from './ImageReveal';
interface Story {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  content: string;
}

interface StoryCardProps {
  story: Story;
  index: number;
  onSelect: (story: Story) => void;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, index, onSelect }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md story-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative">
        <ImageReveal src={story.image} alt={story.title} />
        <div className="absolute top-3 left-3">
          <div className="story-badge bg-white/80 backdrop-blur-sm text-story-secondary">
            {story.category}
          </div>
        </div>
        <div className="absolute bottom-3 right-3">
          <div className="flex items-center space-x-1 story-badge bg-yellow-400/90 text-yellow-800">
            <Star size={12} fill="currentColor" />
            <span>5.0</span>
          </div>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
          {story.title}
        </h3>
        
        <p className="text-gray-700 text-sm line-clamp-3">
          {story.excerpt}
        </p>
        
        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center text-xs text-gray-500">
            <span>5 min read</span>
            <span className="mx-2">•</span>
            <span>Age 6-9</span>
          </div>
          
          <motion.button
            className="flex items-center gap-1.5 bg-story-primary/10 hover:bg-story-primary/20 text-story-primary py-1.5 px-3 rounded-full text-sm font-medium transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(story)}
          >
            <BookOpen size={14} />
            Read
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default StoryCard;