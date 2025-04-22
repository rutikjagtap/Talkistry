
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const scenarios = [
  {
    title: "Job Interviews",
    description: "Master the art of presenting yourself confidently in interviews",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tag: "Professional",
    stats: ["4.9/5 Success Rate", "2K+ Users"],
  },
  {
    title: "Public Speaking",
    description: "Learn to deliver powerful presentations that inspire action",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    tag: "Presentation",
    stats: ["98% Improvement", "1.5K+ Speeches"],
  },
  {
    title: "Social Settings",
    description: "Develop natural conversation skills for any social situation",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    tag: "Social",
    stats: ["95% Success Rate", "5K+ Interactions"],
  },
];

const Scenarios = () => {
  return (
    <section className="section-padding bg-gray-50/50" id="scenarios">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary-soft text-primary rounded-full"
          >
            Real-world Practice
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent"
          >
            Master Real-world Scenarios
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Practice and perfect your communication skills in various contexts
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3]">
                  <img
                    src={scenario.image}
                    alt={scenario.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60">
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                        {scenario.tag}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary-accent transition-colors">
                    {scenario.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{scenario.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    {scenario.stats.map((stat, i) => (
                      <span key={i} className="text-sm text-gray-500">
                        {stat}
                      </span>
                    ))}
                  </div>
                  <button className="w-full px-4 py-2 bg-gray-50 text-primary rounded-lg font-medium flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    Try Scenario
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scenarios;
