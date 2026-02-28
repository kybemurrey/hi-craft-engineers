import { motion } from "framer-motion";
import { ArrowLeft, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import type { LucideIcon } from "lucide-react";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  image: string;
  callToAction?: string;
}

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  features,
  icon: Icon,
  image,
  callToAction = "Get a free quote today — call us or send a WhatsApp message.",
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 section-padding bg-gradient-industrial">
        <div className="container mx-auto">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-heading text-sm tracking-wider"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-sm">
                  <Icon className="text-accent" size={28} />
                </div>
                <p className="font-heading text-primary tracking-[0.3em] text-sm">
                  {subtitle}
                </p>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                {title}
              </h1>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
                {description}
              </p>
              <a
                href="tel:0706156337"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-heading text-sm tracking-wider hover:opacity-90 transition-opacity"
              >
                <Phone size={18} />
                Call For a Quote
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-sm overflow-hidden glow-red"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-80 md:h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-heading text-3xl font-bold mb-4">
              What We Offer
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-gradient-card border border-border rounded-sm p-5 flex items-start gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <p className="text-foreground font-body">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-card border-y border-border">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 max-w-xl mx-auto">
              {callToAction}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0706156337"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-sm font-heading tracking-wider hover:opacity-90 transition-opacity"
              >
                <Phone size={18} />
                Call Now
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-3 rounded-sm font-heading tracking-wider hover:border-primary/40 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicePageLayout;
