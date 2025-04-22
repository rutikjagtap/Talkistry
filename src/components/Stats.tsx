
import { motion } from "framer-motion";
import { ChartBar, ChartLine, ChartPie, Trophy } from "lucide-react";

const stats = [
  {
    icon: <Trophy className="w-6 h-6" />,
    value: "98%",
    label: "Success Rate",
    description: "of users report improved communication",
  },
  {
    icon: <ChartLine className="w-6 h-6" />,
    value: "85%",
    label: "Skill Growth",
    description: "average improvement in 8 weeks",
  },
  {
    icon: <ChartBar className="w-6 h-6" />,
    value: "50K+",
    label: "Practice Sessions",
    description: "completed by our users",
  },
  {
    icon: <ChartPie className="w-6 h-6" />,
    value: "92%",
    label: "User Satisfaction",
    description: "would recommend to others",
  },
];

const Stats = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary-soft/30 rounded-2xl transform transition-transform group-hover:scale-105" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-primary-soft/20 shadow-lg">
                <div className="w-12 h-12 bg-primary-soft rounded-xl flex items-center justify-center text-primary mb-4">
                  {stat.icon}
                </div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-3xl font-bold mb-1 bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent"
                >
                  {stat.value}
                </motion.h3>
                <h4 className="font-semibold mb-2">{stat.label}</h4>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
