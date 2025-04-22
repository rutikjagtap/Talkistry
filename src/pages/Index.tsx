
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Scenarios from "@/components/Scenarios";
import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBanner from "@/components/AnimatedBanner";
import BentoGrid from "@/components/BentoGrid";
import SupportBot from "@/components/SupportBot";
import BetaSignup from "@/components/BetaSignup";
import Timeline from "@/components/Timeline";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BackToTop from "@/components/BackToTop";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <>
      <Header />
      <AnimatedBanner />
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-16 md:pt-20 relative" // Add padding-top to account for fixed header
      >
        {/* Parallax background */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-soft/20 to-transparent pointer-events-none"
        />
        
        <Hero />
        <Features />
        <BentoGrid />
        <Timeline />
        <Stats />
        <Testimonials />
        <Scenarios />
        <FAQ />
        <BetaSignup />
        <CTA />
      </motion.div>
      <Footer />
      <SupportBot />
      <BackToTop />
    </>
  );
};

export default Index;
