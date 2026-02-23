import { motion } from "framer-motion";
import serviceCnc from "@/assets/service-cnc.jpg";
import serviceFab from "@/assets/service-fabrication.jpg";
import serviceStruct from "@/assets/service-structural.jpg";
import heroImg from "@/assets/hero-fabrication.jpg";

const images = [
  { src: serviceCnc, alt: "CNC laser cutting in progress" },
  { src: serviceFab, alt: "Custom metal gate fabrication" },
  { src: serviceStruct, alt: "Steel doors and structural frames" },
  { src: heroImg, alt: "Workshop overview" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-gradient-industrial">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-primary tracking-[0.3em] text-sm mb-3">
            Our Work
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Project Gallery
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden rounded-sm aspect-square group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
