import { motion } from "framer-motion";
import { Zap, Wrench, Shield, Home, Building2, Car, Droplets, Layers, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "CNC Laser Cutting",
    description:
      "High-precision computer-controlled laser cutting for complex patterns, industrial parts, signage, and decorative panels.",
    icon: Zap,
    href: "/services/cnc-laser-cutting",
  },
  {
    title: "Custom Metal Fabrication",
    description:
      "Bespoke metalwork tailored to your exact specifications. From one-off custom pieces to batch production runs.",
    icon: Wrench,
    href: "/services/custom-metal-fabrication",
  },
  {
    title: "Metal Gates & Security",
    description:
      "Decorative and security gates, sliding gates, swing gates, and driveway barriers. Powder-coated finishes.",
    icon: Shield,
    href: "/services/metal-gates-security",
  },
  {
    title: "Doors & Windows",
    description:
      "Steel and aluminium doors, security doors, window frames, and grills. Custom sizes for residential and commercial.",
    icon: Home,
    href: "/services/doors-windows",
  },
  {
    title: "Roofing Structures",
    description:
      "Steel roof trusses, purlins, and complete roofing frameworks. Engineered for Kenyan weather conditions.",
    icon: Building2,
    href: "/services/roofing-structures",
  },
  {
    title: "Car Shades & Canopies",
    description:
      "Modern carports, shade structures, and canopies with polycarbonate or IBR sheet roofing.",
    icon: Car,
    href: "/services/car-shades-canopies",
  },
  {
    title: "Water Tank Stands",
    description:
      "Elevated steel tank stands engineered for stability. Custom heights and capacities for water storage.",
    icon: Droplets,
    href: "/services/water-tank-stands",
  },
  {
    title: "Structural Steel Works",
    description:
      "Steel columns, beams, staircases, railings, and full structural frameworks for commercial and industrial buildings.",
    icon: Layers,
    href: "/services/structural-steel-works",
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
            >
              <Link
                to={service.href}
                className="group bg-gradient-card rounded-sm p-6 border border-border hover:border-primary/40 transition-colors flex items-start gap-5 block"
              >
                <div className="bg-primary/10 p-3 rounded-sm shrink-0">
                  <service.icon className="text-accent" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-heading text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
