
import { motion } from 'framer-motion';
import AnimatedText from '../components/ui/AnimatedText';
import ImageReveal from '../components/ui/ImageReveal';
import ScrollIndicator from '../components/ui/ScrollIndicator';

const WritePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
              className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              WORDS THAT MATTER
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
              <AnimatedText 
                text="Transform    ideas    into    impactful    written    narratives" 
                once={true}
              />
            </h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Jaha Sawyer crafts compelling written content that connects, 
              engages, and inspires audiences across different media formats.
            </motion.p>
          </div>
          
          <motion.div 
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg">
              Explore My Work
            </button>
          </motion.div>
        </motion.div>
        
        <ScrollIndicator />
      </section>
      
      {/* Featured Work Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <motion.span 
              className="block mb-3 text-blue-600 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              FEATURED WORK
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Latest Writing Projects
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Explore a curated selection of my most impactful written pieces, 
              each crafted with precision and creative depth.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of Sustainable Technology",
                category: "Essay",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
              },
              {
                title: "Reimagining Urban Spaces",
                category: "Article Series",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop"
              },
              {
                title: "The Psychology of Design",
                category: "Research Paper",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="rounded-xl overflow-hidden hover-lift glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ImageReveal 
                  src={item.image} 
                  alt={item.title}
                  className="h-60 w-full"
                />
                
                <div className="p-6">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">{item.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">5 min read</span>
                    <button className="text-primary text-sm font-medium">Read more</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <motion.span 
              className="block mb-3 text-blue-600 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              MY PROCESS
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              How I Craft Words
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Research & Discovery",
                description: "Deep dive into the subject matter to gather insights and understand the target audience."
              },
              {
                step: "02",
                title: "Strategic Storytelling",
                description: "Develop narratives that resonate with readers and align with the core message."
              },
              {
                step: "03",
                title: "Refinement & Delivery",
                description: "Polish the content with meticulous editing to ensure clarity, impact, and excellence."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="p-8 rounded-xl bg-white smooth-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <span className="text-5xl font-bold text-gray-100">{item.step}</span>
                <h3 className="text-xl font-semibold mt-4 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WritePage;
