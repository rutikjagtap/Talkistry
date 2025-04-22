
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Talkistry's AI feedback work?",
    answer: "Talkistry uses advanced natural language processing to analyze your speech patterns, tone, and delivery. It provides real-time feedback on clarity, pace, and engagement while suggesting specific improvements.",
  },
  {
    question: "Can I practice specific scenarios for my industry?",
    answer: "Yes! Talkistry offers customized scenarios across various industries including sales, technology, healthcare, and more. You can also create custom scenarios tailored to your specific needs.",
  },
  {
    question: "How long does it take to see improvement?",
    answer: "Most users report noticeable improvements within 2-3 weeks of regular practice. Our 8-week program is designed to transform your communication skills with measurable results.",
  },
  {
    question: "Is my practice data private and secure?",
    answer: "Absolutely. We take privacy seriously. All your practice sessions and data are encrypted and stored securely. We never share your information with third parties.",
  },
  {
    question: "Can I use Talkistry on my mobile device?",
    answer: "Yes, Talkistry is fully responsive and works on desktop, tablet, and mobile devices. Practice your communication skills anywhere, anytime.",
  },
];

const FAQ = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary-soft text-primary rounded-full"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600"
          >
            Got questions? We've got answers to help you get started with Talkistry.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <h3 className="font-semibold text-lg">{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
