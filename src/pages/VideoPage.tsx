import { motion } from 'framer-motion';
import AnimatedText from '../components/ui/AnimatedText';
import TextLoop from '../components/ui/TextLoop';
import ScrollIndicator from '../components/ui/ScrollIndicator';

const VideoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center pt-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container mx-auto max-w-5xl"
        >
          <div className="text-center mb-8">
            <motion.div 
              className="inline-block px-3 py-1 mb-6 rounded-full bg-indigo-100 text-indigo-600 text-xs font-semibold tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ANIMATED STORYTELLING
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
              <AnimatedText 
                text="Bringing stories to life through animated video" 
                once={true}
              />
            </h1>

            <motion.div 
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span>We create videos that are</span>
              <TextLoop 
                texts={["captivating", "memorable", "impactful", "engaging"]} 
                className="text-indigo-600 font-medium ml-2"
                interval={2000}
              />
            </motion.div>
          </div>

          <motion.div 
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg">
              Watch Showreel
            </button>
          </motion.div>
        </motion.div>

        <ScrollIndicator />
      </section>

      {/* Featured Videos Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Video 1 */}
            <motion.div 
              className="rounded-2xl overflow-hidden glass-card hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <video
                controls
                className="w-full rounded-lg shadow-lg"
                src="/videos/the-future-of-remote-work.mp4"
                poster="https://via.placeholder.com/800x450?text=Remote+Work"
              >
                Your browser does not support the video tag.
              </video>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">The Future of Remote Work</h3>
                <p className="text-gray-600">A thought-provoking exploration of how remote work is shaping our future.</p>
              </div>
            </motion.div>

            {/* Video 2 */}
            <motion.div 
              className="rounded-2xl overflow-hidden glass-card hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <video
                controls
                className="w-full rounded-lg shadow-lg"
                src="/videos/expressing-opinions.mp4"
                poster="https://via.placeholder.com/800x450"
              >
                Your browser does not support the video tag.
              </video>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Expressing Opinions</h3>
                <p className="text-gray-600">A creative take on how opinions can shape our perspective and actions.</p>
              </div>
            </motion.div>
            <motion.div 
              className="rounded-2xl overflow-hidden glass-card hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <video
                controls
                className="w-full rounded-lg shadow-lg"
                src="/videos/Importance of sleep.mp4"
                poster="https://via.placeholder.com/800x450"
              >
                Your browser does not support the video tag.
              </video>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">The Importance of Sleep</h3>
                <p className="text-gray-600">An insightful look into how quality sleep impacts our mental and physical well-being.</p>
              </div>
            </motion.div>
            <motion.div 
              className="rounded-2xl overflow-hidden glass-card hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <video
                controls
                className="w-full rounded-lg shadow-lg"
                src="/videos/expressing-opinions.mp4"
                poster="https://via.placeholder.com/800x450"
              >
                Your browser does not support the video tag.
              </video>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Expressing Opinions</h3>
                <p className="text-gray-600">A creative take on how opinions can shape our perspective and actions.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <motion.span 
              className="block mb-3 text-indigo-600 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              OUR SERVICES
            </motion.span>

            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Video Production Offerings
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "✨",
                title: "Animation & Motion Graphics",
                description: "Bringing concepts to life through custom animated content that explains, engages, and inspires."
              },
              {
                icon: "🎬",
                title: "Story Development",
                description: "Crafting compelling narratives that resonate with your audience and amplify your message."
              },
              {
                icon: "🔊",
                title: "Sound Design & Scoring",
                description: "Creating immersive audio experiences that enhance the visual storytelling and emotional impact."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="p-8 rounded-xl bg-white smooth-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoPage;
