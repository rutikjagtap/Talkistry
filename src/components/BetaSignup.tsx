
import { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, CheckCircle } from "lucide-react";

const BetaSignup = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-primary-soft/30">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-primary-soft/30 via-transparent to-transparent" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-primary-accent mb-4">
              <UserPlus className="w-6 h-6" />
              <span className="font-medium">Beta Program</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Beta Testing Program
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Be among the first to experience our AI-powered communication platform.
              Limited spots available for early adopters.
            </p>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="max-w-md">
                <div className="flex gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
                  >
                    Join Beta
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-600"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Thank you for your interest! We'll be in touch soon.</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BetaSignup;
