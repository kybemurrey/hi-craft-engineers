import { motion } from "framer-motion";
import { Zap, Wrench, Shield, Home, Building2, Car, Droplets, Layers } from "lucide-react";

const services = [
  {
    title: "CNC Laser Cutting",
    description:
      "High-precision computer-controlled laser cutting for complex patterns, industrial parts, signage, and decorative panels. We handle mild steel, stainless steel, and aluminium.",
    icon: Zap,
  },
  {
    title: "Custom Metal Fabrication",
    description:
      "Bespoke metalwork tailored to your exact specifications. From one-off custom pieces to batch production runs, we bring your designs to life.",
    icon: Wrench,
  },
  {
    title: "Metal Gates & Security",
    description:
      "Decorative and security gates, sliding gates, swing gates, and driveway barriers. Powder-coated finishes for lasting durability.",
    icon: Shield,
  },
  {
    title: "Doors & Windows",
    description:
      "Steel and aluminium doors, security doors, window frames, and grills. Custom sizes and designs for residential and commercial properties.",
    icon: Home,
  },
  {
    title: "Roofing Structures",
    description:
      "Steel roof trusses, purlins, and complete roofing frameworks. Engineered for strength and designed for Kenyan weather conditions.",
    icon: Building2,
  },
  {
    title: "Car Shades & Canopies",
    description:
      "Modern carports, shade structures, and canopies with polycarbonate or IBR sheet roofing. Protecting vehicles in style.",
    icon: Car,
  },
  {
    title: "Water Tank Stands",
    description:
      "Elevated steel tank stands engineered for stability. Custom heights and capacities for residential and commercial water storage.",
    icon: Droplets,
  },
  {
    title: "Structural Steel Works",
    description:
      "Steel columns, beams, staircases, railings, and full structural frameworks for commercial and industrial buildings.",
    icon: Layers,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gradient-industrial">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-primary tracking-[0.3em] text-sm mb-3">
            What We Do
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Our Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-card rounded-sm p-6 border border-border hover:border-primary/40 transition-colors flex items-start gap-5"
            >
              <div className="bg-primary/10 p-3 rounded-sm shrink-0">
                <service.icon className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
