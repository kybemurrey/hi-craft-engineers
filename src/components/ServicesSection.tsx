import { motion } from "framer-motion";
import serviceCnc from "@/assets/service-cnc.jpg";
import serviceFab from "@/assets/service-fabrication.jpg";
import serviceStruct from "@/assets/service-structural.jpg";

const services = [
  {
    title: "CNC Laser Cutting",
    description:
      "Precision CNC laser cutting for clean, accurate metal sheet work. Perfect for intricate designs and mass production.",
    image: serviceCnc,
  },
  {
    title: "Custom Metal Fabrication",
    description:
      "Bespoke metal gates, frames, roofing structures, and ornamental ironwork. Tailored to your exact specifications.",
    image: serviceFab,
  },
  {
    title: "Doors, Windows & Structural Steel",
    description:
      "Custom doors, windows, car shades, water tank stands, and building structures built with strength and style.",
    image: serviceStruct,
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

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-gradient-card rounded-sm overflow-hidden border border-border hover:border-primary/40 transition-colors"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
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
