import { Link } from "react-router-dom";
import { MessageCircle, Users, Brain, PenTool, Presentation, Mail } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Watch & Learn",
    description: "Learn the language by watching engaging videos and improving your listening skills.",
    icon: <MessageCircle className="w-6 h-6" />,
    color: "bg-blue-500",
    link: "/videos",
  },
  {
    title: "Smart Reading Assistant",
    description: "Read, listen, and record to improve your pronunciation and fluency.",
    icon: <Users className="w-6 h-6" />,
    color: "bg-purple-500",
    link: "/stories", // ← This defines the path when user clicks it
  },
  {
    title: "Talk with AI",
    description: "Practice real conversations with an AI bot to improve your spoken English.",
    icon: <Presentation className="w-6 h-6" />,
    color: "bg-pink-500",
    link: "http://bolobhaiya.surge.sh/",
  },
  {
    title: "Mock Interview with AI",
    description: "Improve your interview skills by answering live questions from an AI interviewer.",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-green-500",
    link: "https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2024/10/05/07/20241005073322-KI5B2E0W.json",
  },
  {
    title: "Word Quest Challenge",
    description: "Learn new words through puzzles and challenges from indoor and outdoor.",
    icon: <PenTool className="w-6 h-6" />,
    color: "bg-yellow-500",
    link: "https://v0-interactive-english-app-kappa.vercel.app/",
  },
  {
    title: "Professional Writing",
    description: "Craft compelling emails, letters, and business communications.",
    icon: <Mail className="w-6 h-6" />,
    color: "bg-orange-500",
    link: "https://talkistry-write-spark.lovable.app/dashboard",
  },
];

const Features = () => {
  return (
    <section className="section-padding relative overflow-hidden" id="features">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Header Section */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary-soft text-primary rounded-full"
          >
            Interactive Learning
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent"
          >
            Master Communication Through Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Our platform focuses on practical scenarios and real-world applications,
            helping you develop effective communication skills that matter.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link to={feature.link} key={index} className="block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
              >
                {/* Feature Icon and Title */}
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>

                {/* Click Button */}
                <Link to={feature.link} className="absolute bottom-4 right-4">
                <button className="inline-flex items-center text-indigo-600 font-medium text-sm">
                    Watch Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </Link>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_var(--tw-gradient-stops))] from-primary-soft/30 via-transparent to-transparent"></div>
    </section>
  );
};

export default Features;
