import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-fabrication.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Metal fabrication workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-primary tracking-[0.3em] text-sm md:text-base mb-4"
        >
          Eldoret, Kenya
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          Precision Metal
          <br />
          <span className="text-gradient">Fabrication</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body"
        >
          Custom metalwork, CNC laser cutting & structural fabrication.
          We do as you want — Kazi Safi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-heading tracking-wider text-lg hover:opacity-90 transition-opacity glow-red"
          >
            Our Services
            <ArrowRight size={20} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border border-foreground/30 text-foreground px-8 py-4 rounded-sm font-heading tracking-wider text-lg hover:bg-foreground/10 transition-colors"
          >
            Get a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
