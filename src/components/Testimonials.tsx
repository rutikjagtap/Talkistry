
import { motion } from "framer-motion";
import { Star, User } from "lucide-react";

const testimonials = [
  {
    name: "Ashish Nikam",
    role: "Marketing Manager",
    content: "Talkistry transformed my presentation skills. I'm now more confident in client meetings and my team leadership has improved significantly.",
    rating: 5,
    avatar: "/placeholder.svg",
  },
  {
    name: "Amit Jha",
    role: "Software Engineer",
    content: "The AI-powered feedback helped me improve my communication with non-technical stakeholders. It's been a game-changer for my career.",
    rating: 5,
    avatar: "/placeholder.svg",
  },
  {
    name: "Amey Pawar",
    role: "Sales Director",
    content: "The real-time feedback and practice scenarios helped me close 40% more deals. I highly recommend Talkistry to any sales professional.",
    rating: 5,
    avatar: "/placeholder.svg",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-accent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-accent to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-primary-accent to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-primary-accent to-transparent"></div>
      </div>
      
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary-soft text-primary rounded-full"
          >
            Success Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            What Our Users Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600"
          >
            Don't just take our word for it—see how Talkistry has helped professionals enhance their communication skills
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-soft via-primary-accent/20 to-primary-soft rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white rounded-2xl p-8 border border-primary-soft/20 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary-accent text-primary-accent" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 relative">
                  <span className="absolute -left-2 -top-2 text-4xl text-primary-soft/20">"</span>
                  {testimonial.content}
                  <span className="absolute -right-2 bottom-0 text-4xl text-primary-soft/20">"</span>
                </p>
                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
