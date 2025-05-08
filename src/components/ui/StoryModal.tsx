import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import React from 'react';

interface Story {
  title: string;
  category: string;
  image: string;
  content: string;
}

interface StoryModalProps {
  story: Story | null;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode; // Add this line to allow children
}

const StoryModal = ({ story, isOpen, onClose, children }: StoryModalProps) => {
  if (!story) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black bg-opacity-50 p-4"
          style={{ maxHeight: '100vh' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-xl my-8"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white/100 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="h-[40vh] relative">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="text-sm font-semibold uppercase tracking-wider">
                  {story.category}
                </span>
                <h2 className="text-3xl font-bold mt-2">{story.title}</h2>
              </div>
            </div>

            <div className="p-8 max-h-[60vh] overflow-y-auto">
              <div className="prose prose-lg max-w-none">
                {story.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
                {children} {/* Render the children here */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StoryModal;