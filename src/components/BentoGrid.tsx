import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bot, PenTool, Brain, Users, MessageSquare, Trophy } from "lucide-react";

const cards = [
  {
    title: "AI Practice Partner",
    description: "Train with our AI-powered conversation partner",
    icon: <Bot className="w-6 h-6" />,
    color: "bg-blue-500",
    link: "/ai-practice",
  },
  {
    title: "Writing Assistant",
    description: "Perfect your written communication",
    icon: <PenTool className="w-6 h-6" />,
    color: "bg-purple-500",
    link: "/write", // Link to WritePage.tsx
  },
  {
    title: "Smart Feedback",
    description: "Get instant, personalized feedback",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-green-500",
    link: "http://talkistry-practice-parker.surge.sh/",
  },
  {
    title: "Community",
    description: "Learn with like-minded people",
    icon: <Users className="w-6 h-6" />,
    color: "bg-pink-500",
    link: "/community",
  },
  {
    title: "Daily Challenges",
    description: "Improve with daily exercises",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "bg-yellow-500",
    link: "/challenges",
  },
  {
    title: "Progress Tracking",
    description: "Track your improvement over time",
    icon: <Trophy className="w-6 h-6" />,
    color: "bg-orange-500",
    link: "/progress",
  },
];

const BentoGrid = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to={card.link} className="block">
                <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 ${card.color} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500`} />
                <div className={`relative z-10`}>
                  <div className={`w-12 h-12 ${card.color} bg-opacity-10 rounded-lg flex items-center justify-center mb-4`}>
                    <div className={`text-${card.color.split('-')[1]}-500`}>
                      {card.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
