import { motion } from "framer-motion";
import { Shield, Wrench, Users, Award } from "lucide-react";

const stats = [
  { icon: Wrench, label: "Projects Completed", value: "500+" },
  { icon: Users, label: "Happy Clients", value: "300+" },
  { icon: Award, label: "Years Experience", value: "10+" },
  { icon: Shield, label: "Quality Guarantee", value: "100%" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-heading text-primary tracking-[0.3em] text-sm mb-3">
              Who We Are
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Built on Strength,
              <br />
              Driven by <span className="text-gradient">Precision</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Hi Craft Engineering is a leading metal fabrication and engineering
              company based in Eldoret, Kenya, along the Eldoret–Nakuru Road near
              Annex, opposite the Ola petrol station. We specialize in custom
              metalwork, structural fabrication, and CNC laser cutting services.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Our commitment to quality craftsmanship and customer satisfaction has
              earned us a reputation as Eldoret's trusted fabrication partner. From
              residential gates to commercial structural steel, we deliver — Kazi Safi!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-card border border-border rounded-sm p-6 text-center"
              >
                <stat.icon className="mx-auto mb-3 text-primary" size={28} />
                <p className="font-heading text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-xs font-body">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
