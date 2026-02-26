import { motion } from "framer-motion";
import { Phone, MapPin, Instagram, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-primary tracking-[0.3em] text-sm mb-3">
            Get In Touch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Contact Us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-sm">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-1">Call / WhatsApp</h3>
                <a href="tel:+254721937014" className="text-muted-foreground hover:text-primary transition-colors font-body block">
                  +254 721 937 014
                </a>
                <a href="tel:0706156337" className="text-muted-foreground hover:text-primary transition-colors font-body block">
                  0706 156 337
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-sm">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground font-body">
                  Eldoret–Nakuru Road, Near Annex,
                  <br />
                  Opposite Ola Petrol Station, Eldoret, Kenya
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-sm">
                <Instagram className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-1">Instagram</h3>
                <a
                  href="https://instagram.com/hi_craft_engineering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  @hi_craft_engineering
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-sm">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground font-body">
                  info@hicraftengineering.co.ke
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
              const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value || "";
              const project = (form.elements.namedItem("project") as HTMLTextAreaElement)?.value || "";
              const message = encodeURIComponent(`*Quote Request*\n\nName: ${name}\nPhone: ${phone}\n\nProject Details:\n${project}`);
              window.open(`https://wa.me/254721937014?text=${message}`, "_blank");
            }}
          >
            <div>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <textarea
                name="project"
                rows={4}
                placeholder="Describe your project..."
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-sm font-heading tracking-wider text-lg hover:opacity-90 transition-opacity glow-red"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
