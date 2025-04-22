
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Star } from "lucide-react";

const timelineData = [
  {
    title: "Week 1-2",
    description: "Build foundational communication skills with AI-powered practice sessions",
    results: ["20% improvement in clarity", "Reduced filler words by 40%"],
  },
  {
    title: "Week 3-4",
    description: "Master advanced conversation techniques and body language",
    results: ["50% increase in confidence", "Better emotional intelligence"],
  },
  {
    title: "Week 5-6",
    description: "Apply skills in real-world scenarios with live feedback",
    results: ["75% success in mock interviews", "Enhanced public speaking"],
  },
  {
    title: "Week 7-8",
    description: "Fine-tune and perfect your communication style",
    results: ["90% positive feedback", "Professional growth opportunities"],
  },
];

const Timeline = () => {
  return (
    <section className="section-padding bg-gray-50/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary-soft text-primary rounded-full"
          >
            Your Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Transform Your Communication Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            See how Talkistry helps you evolve week by week
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-soft/50" />

          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 last:mb-0"
            >
              {/* Timeline Point */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-2 md:-translate-x-3 w-4 h-4 bg-primary rounded-full border-4 border-primary-soft" />

              {/* Content */}
              <div className={`${index % 2 === 0 ? "md:text-right md:pr-12 pl-12 md:pl-0" : "md:pl-12 pl-12 md:col-start-2"}`}>
                <h3 className="text-xl font-semibold mb-2 text-primary flex items-center gap-2 md:gap-4">
                  {index % 2 === 0 ? (
                    <>
                      {item.title}
                      <ChevronRight className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <ChevronRight className="hidden md:block transform rotate-180" />
                      {item.title}
                    </>
                  )}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="space-y-2">
                  {item.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-primary">
                      <Star className="w-4 h-4 text-primary-accent" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
